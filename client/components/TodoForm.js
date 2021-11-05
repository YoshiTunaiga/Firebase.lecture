import React, { Component } from "react";
import database from "../../firebase.config.js";
import { ref, push } from "firebase/database";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const todoRef = ref(database, "Todos/");
    push(todoRef, { name: this.state.name, isComplete: false });
    this.setState({ name: "" });
  }

  render() {
    // console.log(this.state.name);
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Add Todo</h1>
        <label htmlFor="name">Name: </label>
        <input
          type="string"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default TodoForm;
