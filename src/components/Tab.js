import React, { PureComponent } from 'react';
import pt from 'prop-types';
import cn from 'classnames';

export default class Tab extends PureComponent {
    static propTypes = {
        onClick: pt.func,
        tabIndex: pt.number,
        isActive: pt.bool,
        tabName: pt.string.isRequired,
    };

    static defaultProps = {
        onClick: () => {},
        tabIndex: 1,
        isActive: false,
        tabName: pt.string.isRequired,
    };

    handleTabClick = () => {
        const { onClick, tabIndex } = this.props;

        onClick(tabIndex);
    };

    render() {
        const { isActive, tabName } = this.props;

        return (
            <button
                className={cn({
                    ["tabLink"]: true,
                    ["tabLink-isActive"]: isActive,
                })}
                onClick={this.handleTabClick}
            >
                {tabName}
            </button>
        );
    }
}
