import React from "react";
import "./create-new-element.scss";

class CreateNewElement extends React.Component {
  state = {
    label: "123123",
  };
  onChange = (e) => {
    console.log(e.target.value);
    this.setState({
      label: e.target.value,
    });
  };
  render() {
    return (
      <form className="new-task">
        <input
          type="text"
          id="new-task-input"
          placeholder="Write down a new task..."
          value={this.state.label}
          onChange={this.onChange}
        />
        <button id="new-task-button">Add</button>
      </form>
    );
  }
}

export default CreateNewElement;
