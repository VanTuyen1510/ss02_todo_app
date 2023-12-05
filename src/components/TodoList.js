import React, { Component } from "react";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      item: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value,
    });
  };

  handleAddItem = () => {
    if (this.state.item != "") {
      this.setState((prve) => {
        return {
          list: [...prve.list, prve.item],
          item: "",
        };
      });
    }
  };

  render() {
    return (
      <>
        <ul>
          {/* Key là xem đối tượng nào bị thay đổi */}
          {this.state.list.map((values) => {
            return <li key={values}>{values}</li>;
          })}
        </ul>
        <form>
          <input
            type="text"
            value={this.state.item}
            // value để hiện thị giá trị của input khi mà value.target.value thì value là đây
            onChange={(event) => this.handleChange(event)}
          />
          <button type="button" onClick={this.handleAddItem}>
            Add TodoList{" "}
          </button>
        </form>
      </>
    );
  }
}
export default TodoList;
