import React, {Fragment} from "react";

import TextArea from "./OutlinedTextField";
import Tabs from "./ScrollableTabsButtonAuto";

import {getReplacedOutput} from "../utils/getReplacedOutput";
import {patch} from "../utils/patch";
import {typografer} from "../utils/typograf";

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
            this.setState({error: null, result: typografer(JSON.stringify(patched, null, 2))});
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

    renderJsonTypograf = (error, result) => {
        return (
            <Fragment>
                <p>&darr; put json into input below &darr;</p>
                <TextArea onChange={this.handleInputJSONTypografChange} hasError={!!error}/>

                {error && <p>&otimes; invalid json &otimes;</p>}

                <p>json output &crarr;</p>
                <TextArea value={getReplacedOutput(result)} isOutput/>
            </Fragment>
        )
    };

    renderHtmlTypograf = result => {
        return (
            <Fragment>
                <p>&darr; put text into input below &darr;</p>
                <TextArea onChange={this.handleInputHTMLTypografChange}/>

                <p>typografed text output &crarr;</p>
                <TextArea value={result} isOutput/>
            </Fragment>
        )
    };

    renderStringReplacer = result => {
        return (
            <Fragment>
                <p>&darr; put text into input below &darr;</p>
                <TextArea onChange={this.handleInputReplacerChange}/>

                <p>replaced text output &crarr;</p>
                <TextArea value={result} isOutput/>
            </Fragment>
        )
    };

    render() {
        const {result, error} = this.state;
        // const replaced = getReplacedOutput(result);

        return (
            <div className="App">
                <Tabs
                    tabContentFirst={this.renderJsonTypograf(error, result)}
                    tabContentSecond={this.renderHtmlTypograf(result)}
                    tabContentThird={this.renderStringReplacer(result)}
                />
            </div>
        );
    }
}

export default App;

