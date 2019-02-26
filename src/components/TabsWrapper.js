import React from 'react';
import pt from 'prop-types';
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
      <>
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
      </>
    );
  }
}

TabsWrapper.propTypes = {
  tabsContent: pt.array.isRequired,
};

export default TabsWrapper;
