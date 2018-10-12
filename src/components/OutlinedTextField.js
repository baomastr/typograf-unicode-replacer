import React from 'react';
import pt from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class OutlinedTextField extends React.Component {

    renderInput = (onChange, hasError) => {
        return (
            <TextField
                id="outlined-textarea"
                label="Paste content here"
                placeholder="Input"
                multiline
                margin="normal"
                variant="outlined"
                className={"textArea"}
                error={hasError}
                onChange={onChange}
                rows={15}
            />
        )
    };

    renderOutput = (value) => {
        return (
            <TextField
                id="outlined-textarea"
                label="Copy output"
                placeholder="Output"
                multiline
                margin="normal"
                variant="outlined"
                className={"textArea"}
                value={value}
                rows={15}
            />
        )
    };

    render() {
        const { onChange, value, isOutput, hasError } = this.props;

        return isOutput ? this.renderOutput(value) : this.renderInput(onChange, hasError);
    }
}

OutlinedTextField.propTypes = {
    onChange: pt.func,
    value: pt.string,
    isOutput: pt.bool,
    hasError: pt.bool,
};

OutlinedTextField.defaultProps = {
    onChange: () => {},
    value: '',
    isOutput: false,
    hasError: false,
};

export default withStyles(styles)(OutlinedTextField);