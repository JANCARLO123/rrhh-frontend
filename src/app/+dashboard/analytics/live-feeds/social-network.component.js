"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SocialNetworkComponent = (function () {
    function SocialNetworkComponent() {
        this.statsData = [
            {
                label: "Twitter",
                data: [
                    [1, 27],
                    [2, 34],
                    [3, 51],
                    [4, 48],
                    [5, 55],
                    [6, 65],
                    [7, 61],
                    [8, 70],
                    [9, 65],
                    [10, 75],
                    [11, 57],
                    [12, 59],
                    [13, 62]
                ],
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.1
                            },
                            {
                                opacity: 0.13
                            }
                        ]
                    }
                },
                points: {
                    show: true
                }
            },
            {
                label: "Facebook",
                data: [
                    [1, 25],
                    [2, 31],
                    [3, 45],
                    [4, 37],
                    [5, 38],
                    [6, 40],
                    [7, 47],
                    [8, 55],
                    [9, 43],
                    [10, 50],
                    [11, 47],
                    [12, 39],
                    [13, 47]
                ],
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: true,
                    fillColor: {
                        colors: [
                            {
                                opacity: 0.1
                            },
                            {
                                opacity: 0.13
                            }
                        ]
                    }
                },
                points: {
                    show: true
                }
            }
        ];
        this.statsChartOptions = {
            grid: {
                show: true,
                hoverable: true,
                clickable: true,
                borderWidth: 0,
            },
            colors: ["#568A89", "#3276B1"],
            tooltip: true,
            tooltipOpts: {
                //content : "Value <b>$x</b> Value <span>$y</span>",
                defaultTheme: false
            },
            xaxis: {
                ticks: [
                    [1, "JAN"],
                    [2, "FEB"],
                    [3, "MAR"],
                    [4, "APR"],
                    [5, "MAY"],
                    [6, "JUN"],
                    [7, "JUL"],
                    [8, "AUG"],
                    [9, "SEP"],
                    [10, "OCT"],
                    [11, "NOV"],
                    [12, "DEC"],
                    [13, "JAN+1"]
                ]
            },
            yaxes: {}
        };
    }
    SocialNetworkComponent.prototype.ngOnInit = function () {
    };
    SocialNetworkComponent = __decorate([
        core_1.Component({
            selector: 'social-network-feed',
            templateUrl: 'social-network.component.html',
            styles: []
        }), 
        __metadata('design:paramtypes', [])
    ], SocialNetworkComponent);
    return SocialNetworkComponent;
}());
exports.SocialNetworkComponent = SocialNetworkComponent;
//# sourceMappingURL=social-network.component.js.map