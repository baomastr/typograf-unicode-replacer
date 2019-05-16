(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{252:function(e,t,n){},253:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),u=n(15),l=n.n(u),o=n(23),c=n(24),p=n(26),s=n(25),i=n(27),m=n(5),d=n.n(m),f=n(94),h=n.n(f),b=n(95),g=n.n(b),O=n(55),v=n.n(O),y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,u=new Array(a),l=0;l<a;l++)u[l]=arguments[l];return(n=Object(p.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(u)))).renderInput=function(e,t){return r.a.createElement(v.a,{id:"outlined-textarea",label:"Paste content here",placeholder:"Input",multiline:!0,margin:"normal",variant:"outlined",className:"textArea",error:t,onChange:e,rows:15})},n.renderOutput=function(e,t){return r.a.createElement(v.a,{id:"outlined-textarea",label:"Copy output",placeholder:"Output",multiline:!0,margin:"normal",variant:"outlined",className:"textArea",value:e,rows:15,inputRef:t})},n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onChange,n=e.value,a=e.isOutput,r=e.hasError,u=e.inputRef;return a?this.renderOutput(n,u):this.renderInput(t,r)}}]),t}(r.a.PureComponent);y.defaultProps={onChange:function(){},value:"",isOutput:!1,hasError:!1,inputRef:{}};var C=y,E=n(91),R=n.n(E),j=n(92),N=n.n(j),x=n(93),w=n.n(x),L=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(p.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={value:0},n.handleChange=function(e,t){n.setState({value:t})},n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.tabsContent,t=this.state.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{position:"sticky",color:"default"},r.a.createElement(N.a,{value:t,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",centered:!0},e.map(function(e,t){return r.a.createElement(w.a,{key:t,label:e.label})}))),e.map(function(e,n){return t===n&&r.a.createElement("main",{key:n,className:"page"},e.component)}))}}]),t}(r.a.PureComponent),T=function(e){return e.replace(/&nbsp;/g,"\\u00a0").replace(/&mdash;/g,"\\u2014").replace(/&ndash;/g,"\\u2013").replace(/&laquo;/g,"\\u00AB").replace(/&raquo;/g,"\\u00BB").replace(/&#8381;/g,"\\u20BD").replace(/&#8198;/g,"\\u2006")},S=n(96),A=n(39),I=n.n(A);I.a.addRule({name:"ru/nbsp/groupNumbersNew",handler:function(e){var t=new RegExp("(^ ?|\\D |".concat(I.a._privateLabel,")(\\d{1,3}([ \xa0\u202f\u2009]\\d{3})+)(?! ?[\\d-])"),"gm");return e.replace(t,function(e,t,n){return t+n.replace(/\s/g,"\xa0")})}}).addRule({name:"common/nbsp/TinkoffBank",handler:function(e){return e.replace(/(\u0422\u0438\u043d\u044c\u043a\u043e\u0444\u0444)\s+(\u0411\u0430\u043d\u043a)/gi,"$1\xa0$2")}}).addRule({name:"common/nbsp/TinkoffBlack",handler:function(e){return e.replace(/(Tinkoff)\s+(Black)/gi,"$1\xa0$2")}}).addRule({name:"common/nbsp/betweenWordAndNumber",handler:function(e){return e.replace(/([\w\u0430-\u044f]+) (\d+)/gi,"$1\xa0$2")}}).addRule({name:"common/nbsp/betweenNumbers",handler:function(e){return e.replace(/(\d+) (\d+)/gi,"$1\xa0$2")}}).addRule({name:"common/nbsp/ALLGames",handler:function(e){return e.replace(/ALL Games/gi,"ALL\xa0Games")}});var k=new I.a({locale:["ru","en-US"],live:!1,htmlEntity:{type:"name",onlyInvisible:!0}});k.enableRule("ru/money/currency").enableRule("common/punctuation/*").enableRule("common/nbsp/afterNumber").enableRule("common/symbols/*").disableRule("ru/nbsp/groupNumbers").disableRule("ru/date/fromISO").disableRule("common/number/fraction");var B=function(e){return k.execute(e)},J=function e(t){return Array.isArray(t)?t.map(function(t){return e(t)}):null!==t&&"object"===typeof t?Object.entries(t).reduce(function(t,n){var a=Object(S.a)(n,2),r=a[0],u=a[1];return t[r]="string"===typeof u?B(u):e(u),t},{}):"string"===typeof t?B(t):t},H={JSON:"JSON",HTML:"HTML",REPLACER:"REPLACER"},P=[{name:H.JSON,label:"Json Typograf",textInput:"\u2193 paste json \u2193",textError:"\u2297 invalid json \u2297",textOutput:"json output \u21b5"},{name:H.HTML,label:"Html Typograf",textInput:"\u2193 paste text \u2193",textOutput:"html/json output \u21b5"},{name:H.REPLACER,label:"String Replacer",textInput:"\u2193 paste text \u2193",textOutput:"replaced text output \u21b5"}],M=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(p.a)(this,Object(s.a)(t).call(this,e))).state={result:"",error:null},n.handleInputJSONTypografChange=function(e){var t=e.target.value;try{var a=JSON.parse(t),r=J(a);n.setState({error:null,result:T(JSON.stringify(r,null,2))})}catch(u){n.setState({error:u})}},n.handleInputHTMLTypografChange=function(e){var t=e.target.value;n.setState({result:B(t)})},n.handleInputReplacerChange=function(e){var t=e.target.value;n.setState({result:T(t)})},n.handleCopyOutput=function(e){return function(){e.current.select(),document.execCommand("copy")}},n.getCaseHandler=function(e){switch(e){case H.JSON:return n.handleInputJSONTypografChange;case H.HTML:return n.handleInputHTMLTypografChange;case H.REPLACER:return n.handleInputReplacerChange}},n.renderCopyButton=function(e){return r.a.createElement(h.a,{onClick:n.handleCopyOutput(e),color:"primary","aria-label":"Copy",className:"btnCopy"},r.a.createElement(g.a,null))},n.renderOutputField=function(e,t){return r.a.createElement(C,{inputRef:e,value:t?T(n.state.result):n.state.result,isOutput:!0})},n.renderCase=function(e){var t=n.state.error,a=e.name,u=e.textInput,l=e.textOutput,o=e.textError,c=a===H.JSON,p=a===H.HTML;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,u),r.a.createElement(C,{onChange:n.getCaseHandler(a),hasError:c&&!!t}),r.a.createElement("div",{className:"outputWrapper"},r.a.createElement("p",{className:d()({errorMessage:t&&!!o})},t&&o?o:l),p?r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"column"},n.renderCopyButton(n.htmlOutput),n.renderOutputField(n.htmlOutput)),r.a.createElement("div",{className:"column"},n.renderCopyButton(n.replacedOutput),n.renderOutputField(n.replacedOutput,!0))):r.a.createElement(r.a.Fragment,null,n.renderCopyButton(n.jsonOutput),n.renderOutputField(n.jsonOutput))))},n.getTabsContent=function(){return P.map(function(e){return{name:e.name,label:e.label,component:n.renderCase(e)}})},n.htmlOutput=r.a.createRef(),n.replacedOutput=r.a.createRef(),n.jsonOutput=r.a.createRef(),n}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(L,{tabsContent:this.getTabsContent()}))}}]),t}(r.a.PureComponent),$=(n(252),document.getElementById("root"));l.a.render(r.a.createElement(M,null),$)},97:function(e,t,n){e.exports=n(253)}},[[97,1,2]]]);
//# sourceMappingURL=main.2036ef49.chunk.js.map