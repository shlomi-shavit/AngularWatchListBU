
import { Component } from '@angular/core';
import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: 'htmlFiles/media-item-list.component.html',
  styleUrls: [ 'css/media-item-list.component.css' ]
})

export class MediaItemListComponent {

  mediaItems;

  constructor( private mediaItemService: MediaItemService ){}

  ngOnInit(){
    this.mediaItems = this.mediaItemService.get();
  }

  onMediaItemDelete(deleteArg){
    this.mediaItemService.delete(deleteArg);
  }
}
