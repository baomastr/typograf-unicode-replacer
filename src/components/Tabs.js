import React, { Fragment, PureComponent } from 'react';
import pt from 'prop-types';

export default class Tabs extends PureComponent {
    static propTypes = {
        children: pt.node.isRequired,
    };

    state = {
        activeTabIndex: 0,
    };

    handleTabClick = tabIndex => {
        this.setState({
            activeTabIndex: tabIndex,
        });
    };

    renderChildrenWithTabsApiAsProps = () => {
        const { children } = this.props;
        const { activeTabIndex } = this.state;

        return React.Children.map(children, (child, index) => {
            return React.cloneElement(child, {
                onClick: this.handleTabClick,
                tabIndex: index,
                isActive: index === activeTabIndex,
            });
        });
    };

    renderActiveTabContent = () => {
        const { children } = this.props;
        const { activeTabIndex } = this.state;

        if (children[activeTabIndex]) {
            return children[activeTabIndex].props.children;
        }
    };

    render() {
        return (
            <Fragment>
                <div className="tab__wrapper">{this.renderChildrenWithTabsApiAsProps()}</div>
                {this.renderActiveTabContent()}
            </Fragment>
        );
    }
}
