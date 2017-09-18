export class MediaItemService{

  get(){
    return this.mediaItems;
  }

  add(mediaItem){
    this.mediaItems.push(mediaItem);
  }

  delete(deleteMediaItem){
    let index = this.mediaItems.indexOf(deleteMediaItem);
    if(index >= 0){
      this.mediaItems.splice(index, 1);
    }
  }

  mediaItems = [
    {
      id: 1,
      name: "The flash",
      medium: "Series",
      category: "Science fiction",
      year: 2014,
      watchedOn: 1294166565384,
      isFavorite: true
    },
    {
      id: 2,
      name: "The Small Tall",
      medium: "Movies",
      category: "Comedy",
      year: 2015,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 3,
      name: "The Redemption",
      medium: "Movies",
      category: "Action",
      year: 2016,
      watchedOn: null,
      isFavorite: false
    }, {
      id: 4,
      name: "Hoopers",
      medium: "Series",
      category: "Drama",
      year: null,
      watchedOn: null,
      isFavorite: true
    }, {
      id: 5,
      name: "Happy Joe: Cheery Road",
      medium: "Movies",
      category: "Action",
      year: 2015,
      watchedOn: 1457166565384,
      isFavorite: false
    }
  ];

}
