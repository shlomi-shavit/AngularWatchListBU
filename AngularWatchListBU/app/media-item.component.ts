import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'htmlFiles/media-item.component.html',
  styleUrls: ['css/media-item.component.css']
})
export class MediaItemComponent {
  @Input() mediaItemInput;
  @Output() delete = new EventEmitter();

  onDelete() {
    this.delete.emit(this.mediaItemInput);
  }
}
