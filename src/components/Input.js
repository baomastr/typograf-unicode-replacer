import React, { PureComponent } from 'react';
import Output from './Output';
import {getTypografedText} from "../services/typograf";

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
    // console.log(this.state.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    const replaced = this.state.value
      .replace(/&nbsp;/g, `\\u00a0`)
      .replace(/&mdash;/g, `\\u2014`)
      .replace(/&ndash;/g, `\\u2013`)
      .replace(/&laquo;/g, `\\u00AB`)
      .replace(/&raquo;/g, `\\u00BB`)
      .replace(/&#8381;/g, `\\u20BD`);
    this.setState({ output: replaced });
    console.log(this.state.value);
    getTypografedText(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <textarea value={this.state.value} onChange={this.handleChange} cols="100" rows="20" />
        </label>
          <br/>
          <br/>
        <div>
            <input type="submit" value="replace" />
        </div>
          <br/>
        <Output output={this.state.output} />
      </form>
    );
  }
}