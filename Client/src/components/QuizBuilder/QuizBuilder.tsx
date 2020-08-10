import React from "react";

class QuizBuilder extends React.Component {
  public state = {
    name: "",
    description: ""
  };

  public onNameInput = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value.trim();
    this.setState({ name: newValue });
  };

  public onDescriptionInput = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const newValue = event.currentTarget.value.trim();
    this.setState({ description: newValue });
  };

  public render() {
    return (
      <form>
        <input placeholder="Name" value={this.state.name} onChange={this.onNameInput}></input>
        <input placeholder="Description" value={this.state.description} onChange={this.onDescriptionInput}></input>
      </form>
    );
  }
}

export default QuizBuilder;
