/**
 * Created by jennifer.pham on 7/28/15.
 */


(function () {
  'use strict';

var app= angular.module("devResources", []);


app.controller('MainController', ["$scope", function($scope) {


  var filenames = [
    //official json specification is double-quotes
   "BDL-338-010615-Rx-low",
    "BDL-340-030115_rx_low",
    "BDL-348-050115_rx_low",
    "BDL-419-030115_rx_low",
    "DT-104-010115_rx_low",
    "DT-133-010615_rx_low",
    "DT-141-050115_rx_low",
    "GL-1875-120114_rx_low",
    "GL-2078-050115_rx_low",
    "GL-2457-011215_rx_low",
    "GL-2494-060115_rx_low",
    "GL-2595-030115_rx_low",
    "LV-132-030115_rx_low",
    "LV-145-050115_rx_low",
    "LV-168-120314_rx_low",
    "NW-148-010115_rx_low",
    "PE-132-020115_rx_low",
    "RD-145-050115_rx_low",
    "SS-163-040115_rx_low"
  ];

  var mailers = [];


  for (var i=0; i<filenames.length; i++){
    var mailpiece={};
    var link = filenames[i];
    mailpiece.link=link;

    //get filenames[i] without the "-low" or "_low" and set to mailpiece.name;
    var firstPart = filenames[i].toUpperCase();
    var revisedName = "";

    if (revisedName.search('_LOW')){
      revisedName = firstPart.replace("_LOW", "");  //first part: 2 or 3 letters before a non-caputring dash
    }
    else if (revisedName.search('-LOW')){
      revisedName = firstPart.replace("-LOW", "");
    }

    if (revisedName.search('_RX')){
      revisedName = firstPart.replace("_RX", "");  //first part: 2 or 3 letters before a non-caputring dash
    }
    else if (revisedName.search('-RX')){
      revisedName = firstPart.replace("-RX", "");
    }
    mailpiece.name = revisedName;

    //get lab - find 2 or 3 digits before first dash
    var labcode = /([A-Z]){2,3}(?=-)/.exec(filenames[i]);  //first part: 2 or 3 letters before a non-caputring dash

    //else if filename has "_low"


    mailpiece.labcode = labcode.toString();
    //switch statement to match lab code with lab name



    //get date
   var date = /[\d]{6}/.exec(filenames[i]);
    var dateString = date.toString();
   mailpiece.date = dateString;
    var month = dateString.substring(0,2); //first 2 letters of variable
    var year = "20" + dateString.substring(4,7); //last 2 letters of varable
  mailpiece.month = month;
    mailpiece.year = year;

    mailers.push(mailpiece);

  }


  $scope.mailers = mailers;
/*  angular.forEach(filenames, function() {  //first parameter is the array its iterating through, filenames)
    var mailpiece={};
    this.push('id:' + value);

  });*/

  $scope.clearFinished = function () {
    //"Filter" deletes an array and creates a new array. Put array name in beginning ($scope.filenames). True adds to the array and False deletes from array
    $scope.filenames = $scope.filenames.filter(function (item) {
      return !item.completed;
    });
  };

  $scope.delete = function (item) {
    $scope.filenames.splice($scope.filenames.indexOf(item), 1);

  };

  $scope.add = function () {
    $scope.filenames.push({title: $scope.newTodo, completed: false});
    $scope.newTodo = "";
  };


}]);


//  Get THUMBNAIL of PDF

  //$scope.content = $sce.trustAsResourceUrl(fileURL);
/*
  $http.get('/PromoCode-Filter/marketing-samples' + $stateParams.id,
    {responseType:'arraybuffer'})
    .success(function (response) {
      var file = new Blob([(response)], {type: 'application/pdf'});
      var fileURL = URL.createObjectURL(file);
      $scope.content = $sce.trustAsResourceUrl(fileURL);
    });



  $scope.getThumbnail =  function (pdfURL,elementID){
    PDFJS.workerSrc=your_path+"pdf.worker.js";
    PDFJS.getDocument(pdfURL).then(function(pdf){
      pdf.getPage(1).then(function(page) {  //1 is the page number we want to retrieve
        var viewport = page.getViewport(0.5);
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        var renderContext = {
          canvasContext: ctx,
          viewport: viewport
        };

        page.render(renderContext).then(function(){
          //set to draw behind current content
          ctx.globalCompositeOperation = "destination-over";

          //set background color
          ctx.fillStyle = "#ffffff";

          //draw background / rect on entire canvas
          ctx.fillRect(0,0,canvas.width,canvas.height);
          var img = canvas.toDataURL();
          $("#"+elementID).html('<img src="'+img+'"/>');
        });
      });
    });
  };*/




}());



