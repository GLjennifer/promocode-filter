/**
 * Created by jennifer.pham on 7/28/15.
 */

var app= angular.module("devResources", ["firebase"]);


app.controller('MainController', ["$scope", "$firebase",  function($scope, $firebase) {
  var ref = new Firebase("https://promocode-filter.firebaseio.com/");
  // create an AngularFire reference to the data
  var sync = $firebase(ref);
  // download the data into a local object
  $scope.linkList = sync.$asArray();


  //Function for adding link to my firebase database
  $scope.addLink = function () {

    //$add syntax is unique to angularfirebase
    $scope.linkList.$add($scope.link); //add $scope.link (accessible on view) to the linkList array
    alert("Thanks for adding a helpful resource and contributing to the learning of web developers worldwide.");
    $scope.link = {};
  };


  //Function for deleting links to my firebase database
  $scope.deleteLink = function (delItem) {
    var delconfirmation = confirm("Are you sure you want to delete this resource? \n Press 'ok' to delete the resource or 'cancel' to keep it as is.");
    //$remove is syntax unique to angularfire
    if (delconfirmation) {  //if delconfirmation variable is true (if user pressed ok), then delete listing
      $scope.linkList.$remove(delItem);
    }
  };

  //Function for updating in my firebase
  $scope.saveLink = function (item) {
    //Simply update the list with the passed link
    $scope.linkList.$save(item);
    alert("You have successfully updated this resource.")
  };

  //TRYING TO GET ALL PROPERTIES WITHIN  OBJECT WITHIN LINK OBJECT WITHIN LINKLIST ARRAY
  $scope.trueProp = function(linkObj) {
    var tempTrue = [];
    angular.forEach(linkObj, function (value, key) {
      if (value == true) {
        this.push(key);
      }
    }, tempTrue);
    return tempTrue;
  };


  $scope.reset = function () {
    //angular.copy(currentInfo, newInfo );
  };

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

}]);






