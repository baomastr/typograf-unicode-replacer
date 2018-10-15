import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function TabContainer(props) {
    return (
        <div style={{padding: 8 * 3}}>
            {props.children}
        </div>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class ScrollableTabsButtonAuto extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes, tabsContent} = this.props;
        const {value} = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollable={false}
                        scrollButtons="auto"
                        centered
                    >
                        {tabsContent.map(
                            (item, index) => (
                                <Tab key={index} label={item.label}/>
                            )
                        )}
                    </Tabs>
                </AppBar>

                {tabsContent.map(
                    (item, index) => value === index && (
                        <TabContainer key={index}>{item.component}</TabContainer>
                    )
                )}
            </div>
        );
    }
}

ScrollableTabsButtonAuto.propTypes = {
    classes: PropTypes.object.isRequired,
    tabsContent: PropTypes.array.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);