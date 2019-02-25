import React from 'react';
import pt from 'prop-types';
import TextField from '@material-ui/core/TextField';

class TextArea extends React.PureComponent {
  renderInput = (onChange, hasError) => {
    return (
      <TextField
        id="outlined-textarea"
        label="Paste content here"
        placeholder="Input"
        multiline
        margin="normal"
        variant="outlined"
        className="textArea"
        error={hasError}
        onChange={onChange}
        rows={15}
      />
    );
  };

  renderOutput = (value, inputRef) => {
    return (
      <TextField
        id="outlined-textarea"
        label="Copy output"
        placeholder="Output"
        multiline
        margin="normal"
        variant="outlined"
        className="textArea"
        value={value}
        rows={15}
        inputRef={inputRef}
      />
    );
  };

  render() {
    const {onChange, value, isOutput, hasError, inputRef} = this.props;

    return isOutput ? this.renderOutput(value, inputRef) : this.renderInput(onChange, hasError);
  }
}

TextArea.propTypes = {
  onChange: pt.func,
  value: pt.string,
  isOutput: pt.bool,
  hasError: pt.bool,
  inputRef: pt.object,
};

TextArea.defaultProps = {
  onChange: () => {},
  value: '',
  isOutput: false,
  hasError: false,
  inputRef: {},
};

export default TextArea;
