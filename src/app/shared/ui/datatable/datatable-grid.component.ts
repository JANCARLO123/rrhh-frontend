import {Component, Input, ElementRef, AfterContentInit, OnInit} from '@angular/core';

declare var $: any;

@Component({

  selector: 'rk-datatable-runakuna',
  template: `
      <table class="dataTable {{tableClass}}" width="{{width}}">
        <ng-content></ng-content>
      </table>
`,
  styles: [
    require('smartadmin-plugins/datatables-bundle/datatables.min.css')
  ]
})
export class DatatableGridComponent implements OnInit {

  @Input() public options:any;
  @Input() public detailsFormat:any;

  @Input() public paginationLength: boolean;
  @Input() public columnsHide: boolean;
  @Input() public tableClass: string;
  @Input() public width: string = '100%';

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    Promise.all([
      System.import('script!smartadmin-plugins/datatables-bundle/datatables.min.js'),
    ]).then(()=>{
      this.render()

    })
  }

  render() {
    let element = $(this.el.nativeElement.children[0]);
    let options = this.options || {}


    let toolbar = '';
    if (options.buttons)
      toolbar += 'B';
    if (this.paginationLength)
      toolbar += 'l';
    if (this.columnsHide)
      toolbar += 'C';

    if (typeof options.ajax === 'string') {
      let url = options.ajax;
      options.ajax = {
        url: url,
        // complete: function (xhr) {
        //
        // }
      }
    }

    options = $.extend(options, {

      "dom": //"<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs text-right'" + toolbar + ">r>" +
      "t" +
      "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
      oLanguage: {
        "sSearch": "<span class='input-group-addon'><i class='glyphicon glyphicon-search'></i></span> ",
        "sLengthMenu": "_MENU_"
      },
      "autoWidth": false,
      retrieve: true,
      responsive: true,
      initComplete: (settings, json)=> {
        element.parent().find('.input-sm', ).removeClass("input-sm").addClass('input-md');
      }
    });

    const _dataTable = element.DataTable(options);

    if(this.detailsFormat){
      let format = this.detailsFormat
      element.on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = _dataTable.row( tr );
        if ( row.child.isShown() ) {
          row.child.hide();
          tr.removeClass('shown');
        }
        else {
          row.child( format(row.data()) ).show();
          tr.addClass('shown');
        }
      })
    }

  }

}
