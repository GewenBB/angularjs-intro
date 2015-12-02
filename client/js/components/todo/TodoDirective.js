angular.module('Todo.TodoDirective',[])
.directive('todoList', function(){
  return {
    restrict: 'AE',
    link: function link(scope, element, attrs){
      console.log('pie');
    }
  };
});