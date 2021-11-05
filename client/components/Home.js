import React from "react";
import database from "../../firebase.config.js";
import TodoForm from "./TodoForm.js";
import { ref, onValue, update, remove } from "firebase/database";

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };

    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const todoRef = ref(database, "Todos/");
    onValue(todoRef, (snapshot) => {
      const todos = snapshot.val();
      let newArr = [];
      for (let key in todos) {
        newArr.push({ ...todos[key], id: key });
      }
      this.setState({ todos: newArr });
    });
  }

  handleUpdate(todo) {
    const todoRef = ref(database, "Todos/" + todo.id);
    update(todoRef, { isComplete: !todo.isComplete });
  }

  handleDelete(id) {
    const todoRef = ref(database, "Todos/" + id);
    remove(todoRef);
  }

  render() {
    const { todos } = this.state;
    const { handleUpdate, handleDelete } = this;
    return (
      <div className="main">
        <TodoForm />
        {todos.map((todo) => (
          <div key={todo.id}>
            <h1 className={todo.isComplete ? "completed" : ""}>{todo.name}</h1>
            <button onClick={() => handleUpdate(todo)}>Complete</button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Homepage;
