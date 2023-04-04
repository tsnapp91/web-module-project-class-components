import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => {
          return (
            <Todo
              handleToggle={this.props.handleToggle}
              todo={todo}
              key={todo.id}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
