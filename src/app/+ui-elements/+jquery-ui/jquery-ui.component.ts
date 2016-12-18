import {Component, OnInit} from '@angular/core';

@Component({

  selector: 'sa-jquery-ui',
  templateUrl: 'jquery-ui.component.html',
})
export class JqueryUiComponent implements OnInit {

  public demoAutocompleteWords = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"];


  ajaxAutocompleteOptions = {
    source: (request, response) => {
      jQuery.ajax({
        url: "https://jqueryui.com/resources/demos/autocomplete/search.php",
        dataType: "jsonp",
        data: {
          term: request.term
        },
        success: (data) => {
          response(data);
        }
      });
    },
    minLength: 2,
    select: (event, ui) => {
      console.log("Selected: " + ui.item.value + " aka " + ui.item.id);
      this.ajaxAutocompleteSelected = ui.item.id
    }
  };

  ajaxAutocompleteSelected: string;


  constructor() {
  }

  ngOnInit() {
  }

}
