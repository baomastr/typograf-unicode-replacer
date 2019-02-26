import React, {Fragment} from 'react';
import cn from 'classnames';
/*material-ui*/
import Fab from '@material-ui/core/Fab';
import CopyIcon from '@material-ui/icons/FileCopyOutlined';
/*components*/
import TextAreaField from './TextAreaField';
import TabsWrapper from './TabsWrapper';
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

  renderOutputField = ref => <TextAreaField inputRef={ref} value={this.state.result} isOutput />;

  renderCase = item => {
    const {error} = this.state;
    const {name, textInput, textOutput, textError} = item;
    const isJson = name === CASES.JSON;
    const isHtml = name === CASES.HTML;

    return (
      <Fragment>
        {/*input*/}
        <span>{textInput}</span>
        <TextAreaField onChange={this.getCaseHandler(name)} hasError={isJson && !!error} />

        {/*output*/}
        <div className="outputWrapper">
          <p
            className={cn({
              ['errorMessage']: error && textError,
            })}
          >
            {error && textError ? textError : textOutput}
          </p>

          {isHtml ? (
            <div className="flex-row">
              <div className="column">
                {this.renderCopyButton(this.htmlOutput)}
                {this.renderOutputField(this.htmlOutput)}
              </div>

              <div className="column">
                {this.renderCopyButton(this.replacedOutput)}
                {this.renderOutputField(this.replacedOutput)}
              </div>
            </div>
          ) : (
            <Fragment>
              {this.renderCopyButton(this.jsonOutput)}
              {this.renderOutputField(this.jsonOutput)}
            </Fragment>
          )}
        </div>
      </Fragment>
    );
  };

  getTabsContent = () => {
    return config.map(item => {
      return {
        name: item.name,
        label: item.label,
        component: this.renderCase(item),
      };
    });
  };

  render() {
    return (
      <div className="App">
        <TabsWrapper tabsContent={this.getTabsContent()} />
      </div>
    );
  }
}

export default App;
