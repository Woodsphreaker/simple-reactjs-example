import React, { Component } from "react";

import TechItens from "./TechItens";

class TechList extends Component {
  state = {
    newTech: "",
    techList: []
  };

  componentDidMount = () => {
    if (localStorage.getItem("techs")) {
      this.setState({ techList: JSON.parse(localStorage.getItem("techs")) });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.techList !== this.state.techList) {
      localStorage.setItem("techs", JSON.stringify(this.state.techList));
    }
  };

  handleDelete = name => {
    this.setState({
      techList: this.state.techList.filter(tech => tech !== name)
    });
  };

  handleCreate = () => {
    this.setState({
      techList: this.state.techList.concat(this.state.newTech),
      newTech: ""
    });
  };

  handleInputChange = e => {
    this.setState({ newTech: e.currentTarget.value });
  };

  render() {
    return (
      <>
        <ul>
          {this.state.techList.map((item, i) => (
            <TechItens
              key={i}
              tech={item}
              onDelete={() => this.handleDelete(item)}
            />
          ))}
        </ul>

        <label>Add new tech</label>
        <input
          type="text"
          onChange={this.handleInputChange}
          value={this.state.newTech}
        />

        <button className="insertAction" onClick={this.handleCreate}>
          Insert
        </button>
      </>
    );
  }
}

export default TechList;
