import React from 'react';
import pt from 'prop-types';

const renderInput = (style, onChange) => {
    return (
        <textarea
            style={style}
            onChange={onChange}
        />
    )
};

const renderOutput = (style, value) => {
    return (
        <textarea
            style={style}
            value={value}
        />
    )
};

const TextArea = ({style, onChange, value, isOutput}) => {
    return isOutput ? renderOutput(style, value) : renderInput(style, onChange);
};

TextArea.propTypes = {
    style: pt.object,
    onChange: pt.func,
    value: pt.string,
    isOutput: pt.bool,
};

TextArea.defaultProps = {
    style: {},
    onChange: () => {},
    value: '',
    isOutput: false,
};

export default TextArea;
