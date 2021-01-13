Vue.createApp({
    data() {
        return {
            todo: '',
            todos: [
                { id: 0, text: "Pay Bill", isDone: true },
                { id: 1, text: "Lesson", isDone: false },
            ],
        }
    },

    methods: {
        clear(item) {
            let sure = confirm("Do you really want to delete this task?");
            if (sure == true) {
                let index = this.todos.indexOf(item);
                this.todos.splice(index, 1);
            }
        },
        addTodo() {
            if (this.todo.length > 0) {
                this.todos.push({
                    id: this.todos.length,
                    text: this.todo,
                    isDone: false,
                });
            }
            this.todo = '';
        },
        makeDone(item) {
            item.isDone = !item.isDone;
        },
    }
}).mount('.container');