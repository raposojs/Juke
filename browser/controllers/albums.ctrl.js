
app.controller('fakeAlbumController', function ($scope, $http) {

  $http.get('/api/albums/1')
  .then(function (album) {
    $scope.album = album.data;
  }).catch(console.error.bind(console));

  $scope.songCurrentlyPlaying = null; 

  $scope.start = function(song){
    if ($scope.songCurrentlyPlaying === null) {
      var audio = document.createElement('audio');
      audio.src = song.url;
      audio.load();
      audio.play();
      $scope.songCurrentlyPlaying = song.id;
    } 
  }
});

app.controller('activeController', function($scope) {

  $scope.playing = false;

   $scope.changeClass = function(){

     if ($scope.playing === false ){
      $scope.weListeningTo = $scope.songCurrentlyPlaying
      console.log($scope.weListeningTo)
      $scope.playing = true;
      $scope.class = "active"; 

     } else if ($scope.playing === true) {

      if($scope.songCurrentlyPlaying === $scope.weListeningTo){
        $scope.class = null;
        $scope.playing = false;  
        $scope.songCurrentlyPlaying = null;
      }
      
      if ($scope.weListeningTo !== $scope.songCurrentlyPlaying) {
        $scope.class = null;
        $scope.playing = false;  
        $scope.weListeningTo = null;
      }
      
     }
   };

   // $scope.changeButton = function() {
   //   console.log('i"m being called')
   //   if ($scope.class === 'glyphicon-play') {
   //     $scope.class = 'glyphicon-pause';
      
   //   }
   //   // alert("S")
   // };

});

// app.controller('buttonController', function($scope) {

//   $scope.changeButton = function() {
//     console.log('i"m being called')
//     if ($scope.class === 'glyphicon-play') {
//       $scope.class = 'glyphicon-pause';
     
//     }
//     // alert("S")
//   }

// });

// app.directive('activeDirective', function() {
//   return {
//     activeController: function($scope) {
//       var playing = false;
//       $scope.changeClass = function() {
//         if ($scope.class === 'active') {
//           playing = true;
//           $scope.class = 'active';
//         }
//       }
//     }
//   }
// });

// app.directive('buttonDirective', function() {
//   return {
//     buttonController: function($scope) {
//       $scope.changeButton = function() {
//         if ($scope.class === 'glyphicon-play') {
//           $scope.class = 'glyphicon-pause';
//         }
//       }
//     }
//   }
// });