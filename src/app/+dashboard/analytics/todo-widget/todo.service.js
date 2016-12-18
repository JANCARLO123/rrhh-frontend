"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Rx_1 = require("rxjs/Rx");
var todo_1 = require("./todo");
var TodoService = (function () {
    function TodoService() {
        this.todos = [
            new todo_1.Todo('Release', 'Critical'),
            new todo_1.Todo('Misc', 'Important'),
            new todo_1.Todo('E-commerce', 'Important'),
        ];
        this.states = [
            { name: "Critical", title: "Critical Tasks", icon: "warning" },
            { name: "Important", title: "Important Tasks", icon: "exclamation" },
            { name: "Completed", title: "Completed Tasks", icon: "check" }
        ];
        this.subject = new Rx_1.Subject();
    }
    TodoService.prototype.createTodo = function (todo) {
        todo.createdAt = new Date();
        if (todo.state = 'Completed') {
            todo.completedAt = new Date();
        }
        this.todos.push(todo);
        this.subject.next(this.todos);
    };
    TodoService.prototype.toggleTodo = function (todo) {
        if (todo.completedAt) {
            todo.state = 'Important';
            todo.completedAt = null;
        }
        else {
            todo.state = 'Completed';
            todo.completedAt = new Date();
        }
        this.subject.next(this.todos);
    };
    TodoService.prototype.updateTodo = function (id, state) {
        this.todos.find(function (it) { return it.id == id; }).state = state.name;
        this.subject.next(this.todos);
    };
    TodoService.prototype.deleteTodo = function (todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
        this.subject.next(this.todos);
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map