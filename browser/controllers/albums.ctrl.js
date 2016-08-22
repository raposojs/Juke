
app.controller('fakeAlbumController', function ($scope, $http) {

  $http.get('/api/albums/4')
  .then(function (album) {
    $scope.album = album.data;
  }).catch(console.error.bind(console));


  // $scope.fakeAlbum = {
  //   name: 'Abbey Road',
  //   imageUrl: 'http://fillmurray.com/300/300',
  //   songs: [{
  //     name: 'Romeo & Juliette',
  //     artists: [{name: 'Bill'}],
  //     genre: 'Funk',
  //     audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
  //   }, {
  //     name: 'White Rabbit',
  //     artists: [{name: 'Bill'}, {name: 'Bob'}],
  //     genre: 'Fantasy',
  //     audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
  //   }, {
  //     name: 'Lucy in the Sky with Diamonds',
  //     artists: [{name: 'Bob'}],
  //     genre: 'Space',
  //     audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
  //   }]
  // };
});

