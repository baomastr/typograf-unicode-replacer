import React, { PureComponent } from 'react';
import Output from './Output';

export default class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      value: '',
      output: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    const replaced = this.state.value
      .replace(/&nbsp;/g, `\\u00a0`)
      .replace(/&mdash;/g, `\\u2014`)
      .replace(/&laquo;/g, `\\u00AB`)
      .replace(/&raquo;/g, `\\u00AA`);
    this.setState({ output: replaced });
    console.log(this.state.output);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea value={this.state.value} onChange={this.handleChange} cols="100" rows="20" />
        </label>
        <input type="submit" value="Submit" />
        <Output output={this.state.output} />
      </form>
    );
  }
}