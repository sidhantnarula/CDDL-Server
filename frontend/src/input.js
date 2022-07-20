import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    const fetchFile = async () => {
      const res = await fetch("http://localhost:3100/lise/" + this.state.value);
      const fileBlob = await res.blob();
      const fileObjectURL = URL.createObjectURL(fileBlob);
      alert(fileObjectURL);
    };
    fetchFile();
    this.props.communicateChange(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div id="input">
        <form onSubmit={this.handleSubmit} encType='multipart/form-data'>
          <label>
            Name:
            <input type="text" value={this.state.value} pattern="\d\w{3}" onChange={this.handleChange} />
            <input type="file" accept=".pdb" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

