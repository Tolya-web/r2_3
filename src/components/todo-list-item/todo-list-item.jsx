import React, { Component } from "react";
import "./todo-list-item.scss";

class ToDoListItem extends Component {
  /*constructor() {
    super();
    this.state = {
      doneOk: false,
    };
  }*/
  state = {
    doneOk: false,
  };
  render() {
    console.log(this.state);
    const { message } = this.props;
    let classNameText = " task-text ";

    let clickHandler = () => {
      /*  this.state.doneOk = true;
      console.log(this.state);*/
      this.setState(
        /*{
        doneOk: true,
      }*/
        (prevState) => {
          return {
            doneOk: !prevState.doneOk,
          };
        }
      );
    };

    let removeHandler = () => {
      this.props.onDelete();
    };

    if (this.state.doneOk) {
      classNameText += " task_is_done";
    }

    let clickHand = () => {
      this.setState((prevState) => {
        return {
          impOk: !prevState.impOk,
        };
      });
    };

    if (this.state.impOk) {
      classNameText += " taskisdone";
    }

    return (
      <div className="task-item">
        <span
          className={classNameText}
          onClick={() => {
            clickHandler();
          }}
        >
          {message}
        </span>
        <div className="controls">
          <i
            className="fa fa-trash"
            onClick={() => {
              removeHandler();
            }}
          />
          <i
            className="fa fa-star"
            onClick={() => {
              clickHand();
            }}
          />
        </div>
      </div>
    );
  }
}

/*const ToDoListItem = (props) => {
  console.log(state);
  const { message } = props;
  let classNameText = "task-text";
  let clickHandler = () => {
    console.log(message);
  };
  return (
    <div className="task-item">
      <span
        className={classNameText}
        onClick={() => {
          clickHandler();
        }}
      >
        {message}
      </span>
      <div className="controls">
        <i className="fa fa-trash" />
        <i className="fa fa-star" />
      </div>
    </div>
  );
};*/

export default ToDoListItem;
