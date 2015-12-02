
/*
  This controller is a class and is meant to be used with the controller as syntax
  The object returned is meant to be the $scope itself.

  This method produces more testable code, because the class can be tested without having to load angular
*/

function TodoController(TodoService){
  this.todos = TodoService.getTodoList();
  this.todoService = TodoService;

  this.update = function(){
    this.updateTodoList(this.todos);
  };
}

TodoController.prototype.updateTodoList = function(todoList){
  this.todoService.updateTodoList(todoList);
};


//Namespacing angular modules is a good practice, as is creating seperate modules that serve a specific purpose
angular.module('Todo.TodoController', [])
.controller('TodoController', [ 'TodoService', TodoController ]);