import React from 'react';
import PropTypes from 'prop-types';
/*material-ui*/
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class TabsWrapper extends React.PureComponent {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({value});
  };

  render() {
    const {tabsContent} = this.props;
    const {value} = this.state;

    return (
      <React.Fragment>
        <AppBar position="sticky" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            {tabsContent.map((item, index) => (
              <Tab key={index} label={item.label} />
            ))}
          </Tabs>
        </AppBar>

        {tabsContent.map(
          (item, index) =>
            value === index && (
              <main key={index} className="page">
                {item.component}
              </main>
            )
        )}
      </React.Fragment>
    );
  }
}

TabsWrapper.propTypes = {
  tabsContent: PropTypes.array.isRequired,
};

export default TabsWrapper;
