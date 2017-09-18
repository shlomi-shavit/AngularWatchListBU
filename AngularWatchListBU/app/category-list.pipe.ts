import { Pipe } from '@angular/core';

@Pipe ({
  name: 'categoryList'
})

export class CategoryListPipe{
  transform( mediaItems ){

    var categories = [];
    //console.log( mediaItems )
    mediaItems.forEach(mediaItemCat => {
      if (categories.indexOf(mediaItemCat.category) <= -1) {
        categories.push(mediaItemCat.category);
      }
    });
    return categories.join(', ');

    }
}
