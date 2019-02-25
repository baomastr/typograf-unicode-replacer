(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{253:function(e,t,n){},254:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),u=n(15),l=n.n(u),o=n(91),c=n(23),p=n(24),i=n(26),s=n(25),m=n(27),d=n(5),f=n.n(d),h=n(96),b=n.n(h),g=n(97),O=n.n(g),v=n(56),y=n.n(v),C=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,u=new Array(a),l=0;l<a;l++)u[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(u)))).renderInput=function(e,t){return r.a.createElement(y.a,{id:"outlined-textarea",label:"Paste content here",placeholder:"Input",multiline:!0,margin:"normal",variant:"outlined",className:"textArea",error:t,onChange:e,rows:15})},n.renderOutput=function(e,t){return console.log(e),r.a.createElement(y.a,{id:"outlined-textarea",label:"Copy output",placeholder:"Output",multiline:!0,margin:"normal",variant:"outlined",className:"textArea",value:e,rows:15,inputRef:t})},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onChange,n=e.value,a=e.isOutput,r=e.hasError,u=e.inputRef;return a?this.renderOutput(n,u):this.renderInput(t,r)}}]),t}(r.a.PureComponent);C.defaultProps={onChange:function(){},value:"",isOutput:!1,hasError:!1,inputRef:{}};var E=C,R=n(55),j=n(93),x=n.n(j),N=n(94),w=n.n(N),L=n(95),S=n.n(L);function T(e){return r.a.createElement("div",{style:{padding:24}},e.children)}var k=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={value:0},n.handleChange=function(e,t){n.setState({value:t})},n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.tabsContent,a=this.state.value;return r.a.createElement("div",{className:t.root},r.a.createElement(x.a,{position:"sticky",color:"default"},r.a.createElement(w.a,{value:a,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",centered:!0},n.map(function(e,t){return r.a.createElement(S.a,{key:t,label:e.label})}))),n.map(function(e,t){return a===t&&r.a.createElement(T,{key:t},e.component)}))}}]),t}(r.a.Component),A=Object(R.withStyles)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}})(k),I=function(e){return e.replace(/&nbsp;/g,"\\u00a0").replace(/&mdash;/g,"\\u2014").replace(/&ndash;/g,"\\u2013").replace(/&laquo;/g,"\\u00AB").replace(/&raquo;/g,"\\u00BB").replace(/&#8381;/g,"\\u20BD").replace(/&#8198;/g,"\\u2006")},B=n(98),J=n(39),H=n.n(J);H.a.addRule({name:"ru/nbsp/groupNumbersNew",handler:function(e){var t=new RegExp("(^ ?|\\D |".concat(H.a._privateLabel,")(\\d{1,3}([ \xa0\u202f\u2009]\\d{3})+)(?! ?[\\d-])"),"gm");return e.replace(t,function(e,t,n){return t+n.replace(/\s/g,"\xa0")})}}).addRule({name:"common/nbsp/TinkoffBank",handler:function(e){return e.replace(/(\u0422\u0438\u043d\u044c\u043a\u043e\u0444\u0444)\s+(\u0411\u0430\u043d\u043a)/gi,"$1\xa0$2")}}).addRule({name:"common/nbsp/TinkoffBlack",handler:function(e){return e.replace(/(Tinkoff)\s+(Black)/gi,"$1\xa0$2")}}).addRule({name:"common/nbsp/betweenWordAndNumber",handler:function(e){return e.replace(/([\w\u0430-\u044f]+) (\d+)/gi,"$1\xa0$2")}}).addRule({name:"common/nbsp/ALLGames",handler:function(e){return e.replace(/ALL Games/gi,"ALL\xa0Games")}});var M=new H.a({locale:["ru","en-US"],live:!0,htmlEntity:{type:"name",onlyInvisible:!0}});M.enableRule("ru/money/currency").enableRule("common/punctuation/*").enableRule("common/nbsp/afterNumber").enableRule("common/symbols/*").disableRule("ru/nbsp/groupNumbers").disableRule("ru/date/fromISO").disableRule("common/number/fraction");var P=function(e){return M.execute(e)},F=function e(t){return Array.isArray(t)?t.map(function(t){return e(t)}):null!==t&&"object"===typeof t?Object.entries(t).reduce(function(t,n){var a=Object(B.a)(n,2),r=a[0],u=a[1];return t[r]="string"===typeof u?P(u):e(u),t},{}):"string"===typeof t?P(t):t},$={JSON:"JSON",HTML:"HTML",REPLACER:"REPLACER"},G=[{name:$.JSON,label:"Json Typograf",textInput:"\u2193 paste json \u2193",textError:"\u2297 invalid json \u2297",textOutput:"json output \u21b5"},{name:$.HTML,label:"Html Typograf",textInput:"\u2193 paste text \u2193",textOutput:"html/json output \u21b5"},{name:$.REPLACER,label:"String Replacer",textInput:"\u2193 paste text \u2193",textOutput:"replaced text output \u21b5"}],q=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={result:"",error:null},n.handleInputJSONTypografChange=function(e){var t=e.target.value;try{var a=JSON.parse(t),r=F(a);n.setState({error:null,result:I(JSON.stringify(r,null,2))})}catch(u){n.setState({error:u})}},n.handleInputHTMLTypografChange=function(e){var t=e.target.value;n.setState({result:P(t)})},n.handleInputReplacerChange=function(e){var t=e.target.value;n.setState({result:I(t)})},n.handleCopyOutput=function(e){return function(){e.current.select(),document.execCommand("copy")}},n.getCaseHandler=function(e){switch(e){case $.JSON:return n.handleInputJSONTypografChange;case $.HTML:return n.handleInputHTMLTypografChange;case $.REPLACER:return n.handleInputReplacerChange}},n.renderCopyButton=function(e){return r.a.createElement(b.a,{onClick:n.handleCopyOutput(e),color:"primary","aria-label":"Copy",className:"btnCopy"},r.a.createElement(O.a,null))},n.renderOutputField=function(e){return r.a.createElement(E,{inputRef:e,value:n.state.result,isOutput:!0})},n.renderCase=function(e){var t=n.state.error,u=e.name,l=e.textInput,c=e.textOutput,p=e.textError,i=u===$.JSON,s=u===$.HTML;return r.a.createElement(a.Fragment,null,r.a.createElement("span",null,l),r.a.createElement(E,{onChange:n.getCaseHandler(u),hasError:i&&!!t}),r.a.createElement("div",{className:"outputWrapper"},r.a.createElement("p",{className:f()(Object(o.a)({},"errorMessage",t))},t?p:c),s?r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"column"},n.renderCopyButton(n.htmlOutput),n.renderOutputField(n.htmlOutput)),r.a.createElement("div",{className:"column"},n.renderCopyButton(n.replacedOutput),n.renderOutputField(n.replacedOutput))):r.a.createElement(a.Fragment,null,n.renderCopyButton(n.jsonOutput),n.renderOutputField(n.jsonOutput))))},n.getTabsContent=function(){return G.map(function(e){return{name:e.name,label:e.label,component:n.renderCase(e)}})},n.htmlOutput=r.a.createRef(),n.replacedOutput=r.a.createRef(),n.jsonOutput=r.a.createRef(),n}return Object(m.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(A,{tabsContent:this.getTabsContent()}))}}]),t}(r.a.PureComponent),D=(n(253),document.getElementById("root"));l.a.render(r.a.createElement(q,null),D)},99:function(e,t,n){e.exports=n(254)}},[[99,1,2]]]);
//# sourceMappingURL=main.6dd2dd8b.chunk.js.map