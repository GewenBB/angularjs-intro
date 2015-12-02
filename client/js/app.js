
//Create angular modules using angular.module(modulename, deps = [])
angular.module('Todo', [ 'Todo.TodoController', 'Todo.TodoService', 'Todo.TodoDirective' ])
.constant('Name', 'TodoApp') //Providing a constant value that can be included via dependency injection
.constant('version', '1.0.0') //Chaining is allowed on the angular.module call

/*
  Controller not using controller as syntax
  This controller uses dependenecy injection based on best practices

  Controllers follow the format .controller(name, ["dep1", "dep2", function(dep1, dep2){}])
  Controllers represent view state and only state information should be kept in them
  It is the controller in MVC: Model View Controller, where it intermediates between the view and the model
*/
.controller('MainCtrl', ['$scope', 'Name', 'version', function($scope, name, version){

  $scope.name = name;
  $scope.version = version;

}]);