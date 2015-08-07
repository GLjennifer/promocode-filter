/**
 * Created by jennifer.pham on 7/28/15.
 */

var app= angular.module("devResources", ["firebase"]);


app.filter('trustAsResourceUrl', ['$sce', function($sce) {
  return function(val) {
    return $sce.trustAsResourceUrl(val);
  };
}]);

app.controller('MainController', ["$scope", "$firebase",  function($scope, $firebase) {
  var ref = new Firebase("https://web-dev-resources.firebaseio.com/");
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

  //CREATE CHILD NODE
  //$scope.testPush = function (){
  //    $scope.linkList.$push({author: "world", description: "description", comment: "comment"}).then(function(newChildRef) {
  //        console.log("added record with id " + newChildRef.key());
  //    });
  //}

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

  //
  //var trueProperties = [];   //create array
  //for (var prop in linkObj){
  //
  //    console.log(">>>", prop);
  ////if (linkObj[prop]==true){
  ////
  //var trueProperty = prop;
  //trueProperties.push(trueProperty);
  ////}


  //   alert(trueProperties);
  //   $('#true-category').html("True categories are: " + trueProperties);  //when keys values are true, then display key in #true-category
  //};


  $scope.reset = function () {
    //angular.copy(currentInfo, newInfo );
  };

}]);
//$scope.reset();

/*  $scope.oldLinkClone = function (results){
 // $scope.oldLink={};
 // angular.copy($scope.link, [$scope.oldLink]);
 // alert("oldLink is "+ $scope.oldLink);

 $scope.myModel = results;
 var backup = results;
 alert(backup);
 }*/

//create review object

// $scope.reviewList = sync.$asArray();
//
////$add syntax is unique to angularfirebase
//$scope.linkList.$add($scope.link); //add $scope.link (accessible on view) to the linkList array
//alert("Thanks for adding a helpful resource and contributing to the learning of web developers worldwide.")
//$scope.link = {};

//  $scope.reviewList=[];
// $scope.addReview = function (){
/*  $scope.reviewList.$add($scope.newReview); //add $scope.link (accessible on view) to the linkList array
 alert("Step1: Thanks for adding review - reviewList." + reviewList + "newReview" + $scope.newReview)
 $scope.newReview = {}; //empty object
 alert("newreview blank: " + $scope.newReview);*/
//$scope.newReview = newReview;  //set object to value of new review on form
//alert("newReview:" + $scope.review)
//$scope.reviewList = [];  //create a new array so object could be inserted into
//alert("reviewList should be blank: "+ reviewList);
//$scope.reviewList.$add(newRev);  //add newRev into reviewList array
//alert("reviewList: "+ reviewList);
//$scope.linkList.$add($scope.link);
////$scope.link.$add($scope.review);
//$scope.linkList.link.$add($scope.reviewList);
//alert("step5")
//alert("addreview fcn is working");
//$scope.review = [];  //clear out the review form
//alert("Thank you, " + review.author + "to take the time to leave feedback. This will help the learning and growth of other web developers.")
// };



//filter property
//$scope.hasSelectedCategory = function(link) {
//    var hasCategory = false;
//    angular.forEach($scope.selectedCategories, function(selectedCategory) {
//        if (!hasCategory && link.categories.indexOf(selectedCategory) !== -1) {
//            hasCategory = true;
//        }
//    });
//    return hasCategory;
//};



/*    $scope.cancelChanges = function (original) {

 $scope.original = $scope.link;  //getting current value of $scope.link and calling it $scope.original
 // $scope.link=original;
 alert("original is" + original);
 // save original in a temp object
 // save newchanges intoatep object
 // deleting new changes from linkList
 $scope.link.$set($scope.original);



 };*/

// filter functions


/*  $scope.searchCheckbox = function(){

 $scope.search={};
 $scope.search.category={};
 if ($scope.angularCheck){

 $scope.search.category.angular = true;

 }
 else{
 delete $scope.search.category[angular];
 // $scope.search.category.angular = "";
 alert($scope.search.category.angular);
 }
 }*/

//
//app.controller("ReviewController",[] function($scope){
//
//});





