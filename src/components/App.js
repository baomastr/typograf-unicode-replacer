import React, {Fragment} from 'react';
/*material-ui*/
import Fab from '@material-ui/core/Fab';
import CopyIcon from '@material-ui/icons/FileCopyOutlined';
/*components*/
import TextArea from './TextArea';
import Tabs from './ScrollableTabsButtonAuto';
/*utils*/
import {getReplacedOutput} from '../utils/getReplacedOutput';
import {patch} from '../utils/patch';
import {typografer} from '../utils/typograf';
/*constants*/
import {CASES, config} from '../constants';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.htmlOutput = React.createRef();
    this.replacedOutput = React.createRef();
    this.jsonOutput = React.createRef();
  }

  state = {
    result: '',
    error: null,
  };

  handleInputJSONTypografChange = ({target: {value}}) => {
    try {
      const data = JSON.parse(value);
      const patched = patch(data);
      this.setState({
        error: null,
        result: getReplacedOutput(JSON.stringify(patched, null, 2)),
      });
    } catch (err) {
      this.setState({error: err});
    }
  };

  handleInputHTMLTypografChange = ({target: {value}}) => {
    this.setState({result: typografer(value)});
  };

  handleInputReplacerChange = ({target: {value}}) => {
    this.setState({result: getReplacedOutput(value)});
  };

  handleCopyOutput = ref => () => {
    ref.current.select();
    document.execCommand('copy');
  };

  getCaseHandler = name => {
    switch (name) {
      case CASES.JSON:
        return this.handleInputJSONTypografChange;
      case CASES.HTML:
        return this.handleInputHTMLTypografChange;
      case CASES.REPLACER:
        return this.handleInputReplacerChange;
    }
  };

  renderCopyButton = ref => (
    <Fab onClick={this.handleCopyOutput(ref)} color="primary" aria-label="Copy" className="btnCopy">
      <CopyIcon />
    </Fab>
  );

  renderOutput = ref => <TextArea inputRef={ref} value={this.state.result} isOutput />;

  renderCase = item => {
    const {error} = this.state;
    const {name, textInput, textOutput} = item;
    const isJson = name === CASES.JSON;
    const isHtml = name === CASES.HTML;

    return (
      <Fragment>
        {/*input*/}
        <p>{textInput}</p>
        <TextArea onChange={this.getCaseHandler(name)} hasError={isJson && !!error} />

        {/*if error*/}
        {error && item.textError && <p>{item.textError}</p>}

        {/*output*/}
        <div className="outputWrapper">
          <p>{textOutput}</p>

          {isHtml ? (
            <div className="flex-row">
              <div className="column">
                {this.renderCopyButton(this.htmlOutput)}
                {this.renderOutput(this.htmlOutput)}
              </div>

              <div className="column">
                {this.renderCopyButton(this.replacedOutput)}
                {this.renderOutput(this.replacedOutput)}
              </div>
            </div>
          ) : (
            <Fragment>
              {this.renderCopyButton(this.jsonOutput)}
              {this.renderOutput(this.jsonOutput)}
            </Fragment>
          )}
        </div>
      </Fragment>
    );
  };

  getTabsContent = () => {
    const tabsContent = [];

    for (let i = 0; i < config.length; i++) {
      tabsContent.push({
        name: config[i].name,
        label: config[i].label,
        component: this.renderCase(config[i]),
      });
    }

    return tabsContent;
  };

  render() {
    return (
      <div className="App">
        <Tabs tabsContent={this.getTabsContent()} />
      </div>
    );
  }
}

export default App;
