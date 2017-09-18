System.register(['@angular/core', '@angular/forms', './media-item.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, forms_1, media_item_service_1;
    var MediaItemFormsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (media_item_service_1_1) {
                media_item_service_1 = media_item_service_1_1;
            }],
        execute: function() {
            MediaItemFormsComponent = class MediaItemFormsComponent {
                constructor(formBuilder, mediaItemService) {
                    this.formBuilder = formBuilder;
                    this.mediaItemService = mediaItemService;
                }
                ngOnInit() {
                    this.form = this.formBuilder.group({
                        medium: this.formBuilder.control('Movies'),
                        name: this.formBuilder.control('', forms_1.Validators.compose([
                            forms_1.Validators.required,
                            forms_1.Validators.pattern('[\\w\\-\\s\\/]+')
                        ])),
                        category: this.formBuilder.control(''),
                        year: this.formBuilder.control('', this.yearValidator)
                    });
                }
                /*-- Year validation --*/
                yearValidator(control) {
                    if (control.value.trim().length === 0) {
                        //console.log(control.value);
                        //console.log(control);
                        return null;
                    }
                    let year = parseInt(control.value);
                    let minYear = 1900;
                    let maxYear = 2100;
                    if (year >= minYear && year <= maxYear) {
                        console.log("return null");
                        return null;
                    }
                    else {
                        console.log("yearObj: true");
                        //return { 'yearObj': 'true' };
                        //return { 'yearObj': 'test' }; // <--- work too
                        return { 'yearObj': {
                                min: minYear,
                                max: maxYear
                            } };
                    }
                }
                onSubmit(addMediaItemInput) {
                    //console.log(mediaItemArr)
                    this.mediaItemService.add(addMediaItemInput);
                }
            };
            MediaItemFormsComponent = __decorate([
                core_1.Component({
                    selector: 'mw-media-item-form',
                    templateUrl: './htmlFiles/media-item-form.component.html',
                    styleUrls: ["./css/media-item-form.component.css"]
                }), 
                __metadata('design:paramtypes', [forms_1.FormBuilder, media_item_service_1.MediaItemService])
            ], MediaItemFormsComponent);
            exports_1("MediaItemFormsComponent", MediaItemFormsComponent);
        }
    }
});
//# sourceMappingURL=media-item-form.component.js.map