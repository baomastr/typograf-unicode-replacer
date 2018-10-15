import React, {Fragment} from "react";

import TextArea from "./OutlinedTextField";
import Tabs from "./ScrollableTabsButtonAuto";

import {getReplacedOutput} from "../utils/getReplacedOutput";
import {patch} from "../utils/patch";
import {typografer} from "../utils/typograf";

import {CASES, config} from "../constants";

class App extends React.PureComponent {
    state = {
        result: "",
        error: null,
        inputValue: "",
    };

    handleInputJSONTypografChange = ({target: {value}}) => {
        try {
            const data = JSON.parse(value);
            const patched = patch(data);
            this.setState({error: null, result: getReplacedOutput(JSON.stringify(patched, null, 2))});
        } catch (err) {
            this.setState({error: err});
        }
    };

    handleInputHTMLTypografChange = ({target: {value}}) => {
        this.setState({ result: typografer(value)});
    };

    handleInputReplacerChange = ({target: {value}}) => {
        this.setState({ result: getReplacedOutput(value)});
    };

    getCaseHandler = name => {
        switch (name) {
            case CASES.JSON: return this.handleInputJSONTypografChange;
            case CASES.HTML: return this.handleInputHTMLTypografChange;
            case CASES.REPLACER: return this.handleInputReplacerChange;
        }
    };

    renderCase = item => {
        const {result, error} = this.state;

        return (
            <Fragment>
                <p>{item.textInput}</p>
                <TextArea onChange={this.getCaseHandler(item.name)} hasError={item.name === CASES.JSON && error}/>
                {error && item.textError && <p>{item.textError}</p>}
                <p>{item.textOutput}</p>
                <TextArea value={result} isOutput/>
            </Fragment>
        )
    };

    getTabsContent = () => {
        const tabsContent = [];

        for (let i=0; i < config.length; i++) {
            tabsContent.push({
                name: config[i].name,
                label: config[i].label,
                component: this.renderCase(config[i]),
            })
        }

        return tabsContent;
    };

    render() {

        return (
            <div className="App">
                <Tabs
                    tabsContent={this.getTabsContent()}
                />
            </div>
        );
    }
}

export default App;

