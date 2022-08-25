var app = angular.module('todoApp', []);
    
app.controller('todoList', function($scope) {
    
 $scope.todos = [];
 $scope.addTodo = function() {
   if($scope.todoText !== '') {
   $scope.todos.push({text:$scope.todoText, done:false});
 $scope.todoText = '';
        }
    };
    
 $scope.deleteItem=function(event){
   var index = this.todos.indexOf(event);
   this.todos.splice(index,1)
    }

});