/*
  Services and Factories are the model in MVC

  It manipulates and stores the data needed by the app.
  This class is instantiated when required as a dep.
*/

function TodoService(){
  this.todoList = [];

  this.todoList = this.todoList.concat( testTodos() );

}

TodoService.prototype.getTodoList = function(){
  return this.todoList;
};

TodoService.prototype.updateTodoList = function(todoList){
  this.todoList = todoList;
  console.log(this.todoList);
  return this.getTodoList();
};

TodoService.prototype.addNewTodo = function(text){
  this.todoList.concat( createTodo(text) );
};

function createTodo(text){
  return {
    isChecked: false,
    text: text
  };
}

function testTodos(){
  return [ 
    'Go to the store',
    'Clean room',
    'Walk dog',
    'Play fallout 4',
    'Do WoW dailies'
  ].map(function(text){
    return createTodo( text );
  });

}

angular.module('Todo.TodoService', [])
  .service('TodoService', [ TodoService ]);