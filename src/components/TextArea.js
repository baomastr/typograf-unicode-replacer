import React from 'react';
import pt from 'prop-types';
import cn from 'classnames';

const renderInput = (onChange, hasError) => {
    return (
        <textarea
            className={cn({
                ["textArea"]: true,
                ["textArea-hasError"]: hasError,
            })}
            onChange={onChange}
        />
    )
};

const renderOutput = (value) => {
    return (
        <textarea
            className={"textArea"}
            value={value}
            readOnly
        />
    )
};

const TextArea = ({onChange, value, isOutput, hasError}) => {
    return isOutput ? renderOutput(value) : renderInput(onChange, hasError);
};

TextArea.propTypes = {
    onChange: pt.func,
    value: pt.string,
    isOutput: pt.bool,
    hasError: pt.bool,
};

TextArea.defaultProps = {
    onChange: () => {},
    value: '',
    isOutput: false,
    hasError: false,
};

export default TextArea;
