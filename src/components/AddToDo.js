import React, { Component } from "react";

export class AddToDo extends Component {
  state = {
    title: ""
  };

  onInputChange = event => this.setState({ title: event.target.value }); //el primer parametro es un array, lo anterior es equivalente a escribir: this.setState({[event.target.name]: [event.target.value]})
  onSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form style={{ display: "flex" }} onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add To Do..."
          style={{ flex: "10", padding: "5px" }}
          value={this.state.title}
          onChange={this.onInputChange}
        />

        <input
          type="submit"
          value="Agregar Task"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddToDo;
