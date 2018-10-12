import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
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
        this.setState({ value });
    };

    render() {
        const { classes, tabContentFirst, tabContentSecond, tabContentThird } = this.props;
        const { value } = this.state;

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
                        <Tab label="Json Typograf" />
                        <Tab label="Html Typograf" />
                        <Tab label="String Replacer" />
                    </Tabs>
                </AppBar>
                {value === 0 && <TabContainer>{tabContentFirst}</TabContainer>}
                {value === 1 && <TabContainer>{tabContentSecond}</TabContainer>}
                {value === 2 && <TabContainer>{tabContentThird}</TabContainer>}
            </div>
        );
    }
}

ScrollableTabsButtonAuto.propTypes = {
    classes: PropTypes.object.isRequired,
    tabContentFirst: PropTypes.node.isRequired,
    tabContentSecond: PropTypes.node.isRequired,
    tabContentThird: PropTypes.node.isRequired,
};

export default withStyles(styles)(ScrollableTabsButtonAuto);