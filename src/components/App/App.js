import React from "react";
import Header from "../Header/Header";
import styles from "./App.module.css";
import List from "../List/List";

class App extends React.Component {
  state = {
    items: [],
  };

  addItem = (e) => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      isFinished: false,
    };

    this.setState((prevState) => ({
      items: [...prevState.items, newItem],
    }));

    e.target.reset();
  };

  finishedTask = (key) => {
    const element = this.state.items.findIndex((x) => x.name === key);
    let newArray = [...this.state.items];

    newArray[element] = {
      ...newArray[element],
      isFinished: !newArray[element].isFinished,
    };

    this.setState({
      items: newArray,
    });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Header submitFn={this.addItem} />
        <List finishedTaskFn={this.finishedTask} items={this.state.items} />
      </div>
    );
  }
}

export default App;
