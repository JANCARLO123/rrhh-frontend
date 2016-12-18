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
var MovieFormComponent = (function () {
    function MovieFormComponent() {
        this.validatorOptions = {
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                title: {
                    group: '.col-md-8',
                    validators: {
                        notEmpty: {
                            message: 'The title is required'
                        },
                        stringLength: {
                            max: 200,
                            message: 'The title must be less than 200 characters long'
                        }
                    }
                },
                genre: {
                    group: '.col-md-4',
                    validators: {
                        notEmpty: {
                            message: 'The genre is required'
                        }
                    }
                },
                director: {
                    group: '.col-md-4',
                    validators: {
                        notEmpty: {
                            message: 'The director name is required'
                        },
                        stringLength: {
                            max: 80,
                            message: 'The director name must be less than 80 characters long'
                        }
                    }
                },
                writer: {
                    group: '.col-md-4',
                    validators: {
                        notEmpty: {
                            message: 'The writer name is required'
                        },
                        stringLength: {
                            max: 80,
                            message: 'The writer name must be less than 80 characters long'
                        }
                    }
                },
                producer: {
                    group: '.col-md-4',
                    validators: {
                        notEmpty: {
                            message: 'The producer name is required'
                        },
                        stringLength: {
                            max: 80,
                            message: 'The producer name must be less than 80 characters long'
                        }
                    }
                },
                website: {
                    group: '.col-md-6',
                    validators: {
                        notEmpty: {
                            message: 'The website address is required'
                        },
                        uri: {
                            message: 'The website address is not valid'
                        }
                    }
                },
                trailer: {
                    group: '.col-md-6',
                    validators: {
                        notEmpty: {
                            message: 'The trailer link is required'
                        },
                        uri: {
                            message: 'The trailer link is not valid'
                        }
                    }
                },
                review: {
                    // The group will be set as default (.form-group)
                    validators: {
                        stringLength: {
                            max: 500,
                            message: 'The review must be less than 500 characters long'
                        }
                    }
                },
                rating: {
                    // The group will be set as default (.form-group)
                    validators: {
                        notEmpty: {
                            message: 'The rating is required'
                        }
                    }
                }
            }
        };
        this.submitted = false;
    }
    MovieFormComponent.prototype.ngOnInit = function () {
    };
    MovieFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
        console.log('submitted');
    };
    MovieFormComponent = __decorate([
        core_1.Component({
            selector: 'sa-movie-form',
            templateUrl: 'movie-form.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], MovieFormComponent);
    return MovieFormComponent;
}());
exports.MovieFormComponent = MovieFormComponent;
//# sourceMappingURL=movie-form.component.js.map