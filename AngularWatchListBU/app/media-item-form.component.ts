import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './htmlFiles/media-item-form.component.html',
  styleUrls: [ "./css/media-item-form.component.css" ]
})

export class MediaItemFormsComponent {
  form;

  constructor(
    private formBuilder: FormBuilder,
    private mediaItemService: MediaItemService ){}

  ngOnInit(){
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ])),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator)
    });
  }

  /*-- Year validation --*/
  yearValidator(control){
      if(control.value.trim().length === 0){
        //console.log(control.value);
        //console.log(control);
        return null;
      }
      let year = parseInt(control.value);
      let minYear = 1900;
      let maxYear = 2100;
      if( year >= minYear && year <= maxYear){
        console.log("return null");
        return null;
      }else{
        console.log("yearObj: true");
        //return { 'yearObj': 'true' };
        //return { 'yearObj': 'test' }; // <--- work too
        return { 'yearObj': {
          min: minYear,
          max: maxYear
        } };
      }
  }

  onSubmit(addMediaItemInput){
    //console.log(mediaItemArr)
    this.mediaItemService.add(addMediaItemInput)
  }
}
