import React from "react";
import TextArea from "./TextArea";

import {getReplacedOutput} from "../utils/getReplacedOutput";
import {patch} from "../utils/patch";
import {typografer} from "../utils/typograf";
import Tabs from "./Tabs";
import Tab from "./Tab";

class App extends React.PureComponent {
    state = {
        result: "",
        error: null,
        inputValue: "",
    };

    handleInputJSONTypografChange = ({target: {value}}) => {
        if (!value) {
            this.handleClearResult()
        }
        try {
            const data = JSON.parse(value);
            const patched = patch(data);
            this.setState({error: null, result: JSON.stringify(patched, null, 2)});
        } catch (err) {
            this.setState({error: err});
        }
    };

    handleInputReplacerChange = ({target: {value}}) => {
        if (!value) {
            this.handleClearResult()
        }
        this.setState({ result: getReplacedOutput(value)});
    };

    handleInputHTMLTypografChange = ({target: {value}}) => {
        if (!value) {
            this.handleClearResult()
        }
        this.setState({ result: typografer(value)});
    };

    handleClearResult = () => {
        this.setState({
            result: "",
        });
    };

    render() {
        const {result, error} = this.state;
        const replaced = getReplacedOutput(result);

        return (
            <div className="App">
                <Tabs>
                    <Tab tabName={'json typograf'}>
                        <div>
                            <p>&darr; put json into input below &darr;</p>
                            <TextArea onChange={this.handleInputJSONTypografChange} hasError={!!error}/>
                        </div>
                        {error && <p>&otimes; invalid json &otimes;</p>}
                        <div>
                            <p>json output &crarr;</p>
                            <TextArea value={replaced} isOutput/>
                        </div>
                    </Tab>

                    <Tab tabName={'string replacer'}>
                        <div>
                            <p>&darr; put text into input below &darr;</p>
                            <TextArea onChange={this.handleInputReplacerChange}/>
                        </div>

                        <div>
                            <p>replaced text output &crarr;</p>
                            <TextArea value={replaced} isOutput/>
                        </div>
                    </Tab>

                    <Tab tabName={'html typograf'}>
                        <div>
                            <p>&darr; put text into input below &darr;</p>
                            <TextArea onChange={this.handleInputHTMLTypografChange}/>
                        </div>

                        <div>
                            <p>typografed text output &crarr;</p>
                            <TextArea value={result} isOutput/>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default App;

