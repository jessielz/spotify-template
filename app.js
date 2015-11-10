var data;
var url = 'https://api.spotify.com/v1/search?type=track&query='

var myApp = angular.module('myApp', [])


var myCtrl = myApp.controller('myCtrl', function($scope, $http) {
  $scope.audioObject = {}
  $scope.sortType = 'track'
  
  $scope.getSongs = function() {
    $http.get(url + $scope.track).success(function(response){
      data = $scope.tracks = response.tracks.items;
    })
  }

  $scope.play = function(song, data) {
    $scope.trackName = data.name;
    $scope.trackArtist = data.artists[0].name;
    if($scope.currentSong == song) { // playing this song
      $scope.audioObject.pause() // pauses the song
      $scope.currentSong = false // then the song is not playing
      return
    }
    else {
      if($scope.audioObject.pause != undefined) $scope.audioObject.pause()
      $scope.audioObject = new Audio(song);
      $scope.audioObject.play()  
      $scope.currentSong = song
    }
  }

// $('img').mouseover(function(){
//     $(this).css('opacity','.2');
//     $(this).next('span.text-content').show();
// }).mouseout(function(){
//     $(this).css('opacity','1');
//     $(this).next('span.text-content').hide(); 
// });


//   $scope.hover = function() {
 
// //     //$(".jessie").append("<p><b>Jessieeeee!</b></p>");
// //    $(".jessie").append("<div id = 'julian'>Hello</div>");
// //     //$('.jessie').append("<background-color: blue");
// //     $( this ).fadeOut( 100);
// //     $( this ).fadeIn( 500 );

//     console.log("hello");


// // //   $( "li.fade" ).hover(function() {
// // //   $( this ).fadeOut( 100 );
// // //   $( this ).fadeIn( 500 );
//   }
})

// click -> append div -> append info to that div
// css -> can change the background color to black (or transparent)

//Add tool tips to anything with a title property
$('body').tooltip({
    selector: '[title]'
});