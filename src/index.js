import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Typograf = require("typograf");
const typograf = new Typograf({
    locale: ["ru", "en-US"],
    htmlEntity: {
        type: "name",
        onlyInvisible: true
    }
});

class App extends React.Component {
    state = {
        result: "",
        error: null
    };

    onInputChange = ({target: {value}}) => {
        try {
            const data = JSON.parse(value);
            const patched = patch(data);
            this.setState({error: null, result: JSON.stringify(patched, null, 2)});
        } catch (err) {
            this.setState({error: err});
        }
    };

    render() {
        const {result, error} = this.state;

        const replaced = result
            .replace(/&nbsp;/g, `\\u00a0`) // space
            .replace(/&mdash;/g, `\\u2014`) // —
            .replace(/&ndash;/g, `\\u2013`) // –
            .replace(/&laquo;/g, `\\u00AB`) // «
            .replace(/&raquo;/g, `\\u00BB`) // »
            .replace(/&#8381;/g, `\\u20BD`) // ₽
            .replace(/₽/g, `\\u20BD`) // ₽
            .replace(/&#8198;/g, `\\u2006`); // Six-Per-Em Space

        return (
            <div className="App">
                <div>
                    <p>put json into input below</p>
                  <textarea
                      style={{width: "calc(100vw - 10%)", height: "40vh"}}
                      onChange={this.onInputChange}
                  />
                </div>
                {error && <p>Ошибка, скорее всего невалидный json</p>}
                <div>
                    <p>json output</p>
                  <textarea
                      style={{width: "calc(100vw - 10%)", height: "40vh"}}
                      value={replaced}
                  />
                </div>
            </div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);

function patch(root) {
    if (Array.isArray(root)) {
        return root.map(el => patch(el));
    } else if (root !== null && typeof root === "object") {
        return Object.entries(root).reduce((acc, [k, v]) => {
            if (typeof v === "string") {
                acc[k] = typograf.execute(v);
            } else {
                acc[k] = patch(v);
            }

            return acc;
        }, {});
    } else if (typeof root === "string") {
        return typograf.execute(root);
    } else {
        return root;
    }
}
