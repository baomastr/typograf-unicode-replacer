(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{250:function(e,t,n){},251:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),u=n(14),l=n.n(u),o=n(20),c=n(21),i=n(23),p=n(22),s=n(24),m=n(28),d=n(57),f=n.n(d),h=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,u=new Array(a),l=0;l<a;l++)u[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(u)))).renderInput=function(e,t){return r.a.createElement(f.a,{id:"outlined-textarea",label:"Paste content here",placeholder:"Input",multiline:!0,margin:"normal",variant:"outlined",className:"textArea",error:t,onChange:e,rows:15})},n.renderOutput=function(e){return r.a.createElement(f.a,{id:"outlined-textarea",label:"Copy output",placeholder:"Output",multiline:!0,margin:"normal",variant:"outlined",className:"textArea",value:e,rows:15})},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onChange,n=e.value,a=e.isOutput,r=e.hasError;return a?this.renderOutput(n):this.renderInput(t,r)}}]),t}(r.a.Component);h.defaultProps={onChange:function(){},value:"",isOutput:!1,hasError:!1};var b=Object(m.withStyles)(function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit},dense:{marginTop:16},menu:{width:200}}})(h),g=n(87),v=n.n(g),O=n(88),y=n.n(O),E=n(89),C=n.n(E);function w(e){return r.a.createElement("div",{style:{padding:24}},e.children)}var x=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(n=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={value:0},n.handleChange=function(e,t){n.setState({value:t})},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.tabsContent,a=this.state.value;return r.a.createElement("div",{className:t.root},r.a.createElement(v.a,{position:"static",color:"default"},r.a.createElement(y.a,{value:a,onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",scrollable:!1,scrollButtons:"auto",centered:!0},n.map(function(e,t){return r.a.createElement(C.a,{key:t,label:e.label})}))),n.map(function(e,t){return a===t&&r.a.createElement(w,{key:t},e.component)}))}}]),t}(r.a.Component),j=Object(m.withStyles)(function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}})(x),R=function(e){return e.replace(/&nbsp;/g,"\\u00a0").replace(/&mdash;/g,"\\u2014").replace(/&ndash;/g,"\\u2013").replace(/&laquo;/g,"\\u00AB").replace(/&raquo;/g,"\\u00BB").replace(/&#8381;/g,"\\u20BD").replace(/&#8198;/g,"\\u2006")},N=n(90),S=n(37),T=n.n(S);T.a.addRule({name:"ru/nbsp/groupNumbersNew",handler:function(e){var t=new RegExp("(^ ?|\\D |".concat(T.a._privateLabel,")(\\d{1,3}([ \xa0\u202f\u2009]\\d{3})+)(?! ?[\\d-])"),"gm");return e.replace(t,function(e,t,n){return t+n.replace(/\s/g,"\xa0")})}}).addRule({name:"common/nbsp/TinkoffBank",handler:function(e){return e.replace(/(\u0422\u0438\u043d\u044c\u043a\u043e\u0444\u0444)\s+(\u0411\u0430\u043d\u043a)/gi,"$1\xa0$2")}}).addRule({name:"common/nbsp/TinkoffBlack",handler:function(e){return e.replace(/(Tinkoff)\s+(Black)/gi,"$1\xa0$2")}}).addRule({name:"common/nbsp/betweenWordAndNumber",handler:function(e){return e.replace(/([\w\u0430-\u044f]+) (\d+)/gi,"$1\xa0$2")}}).addRule({name:"common/nbsp/ALLGames",handler:function(e){return e.replace(/ALL Games/gi,"ALL\xa0Games")}});var L=new T.a({locale:["ru","en-US"],live:!0,htmlEntity:{type:"name",onlyInvisible:!0}});L.enableRule("ru/money/currency").enableRule("common/punctuation/*").enableRule("common/nbsp/afterNumber").enableRule("common/symbols/*").disableRule("ru/nbsp/groupNumbers").disableRule("ru/date/fromISO").disableRule("common/number/fraction");var A=function(e){return L.execute(e)},I=function e(t){return Array.isArray(t)?t.map(function(t){return e(t)}):null!==t&&"object"===typeof t?Object.entries(t).reduce(function(t,n){var a=Object(N.a)(n,2),r=a[0],u=a[1];return t[r]="string"===typeof u?A(u):e(u),t},{}):"string"===typeof t?A(t):t},k={JSON:"json",HTML:"html",REPLACER:"replacer"},J=[{name:k.JSON,label:"Json Typograf",textInput:"\u2193 put json into input below \u2193",textError:"\u2297 invalid json \u2297",textOutput:"json output \u21b5"},{name:k.HTML,label:"Html Typograf",textInput:"\u2193 put text into input below \u2193",textOutput:"html/json output \u21b5"},{name:k.REPLACER,label:"String Replacer",textInput:"\u2193 put text into input below \u2193",textOutput:"replaced text output \u21b5"}],B=function(e){function t(){var e,n;Object(o.a)(this,t);for(var u=arguments.length,l=new Array(u),c=0;c<u;c++)l[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={result:"",error:null},n.handleInputJSONTypografChange=function(e){var t=e.target.value;try{var a=JSON.parse(t),r=I(a);n.setState({error:null,result:R(JSON.stringify(r,null,2))})}catch(u){n.setState({error:u})}},n.handleInputHTMLTypografChange=function(e){var t=e.target.value;n.setState({result:A(t)})},n.handleInputReplacerChange=function(e){var t=e.target.value;n.setState({result:R(t)})},n.getCaseHandler=function(e){switch(e){case k.JSON:return n.handleInputJSONTypografChange;case k.HTML:return n.handleInputHTMLTypografChange;case k.REPLACER:return n.handleInputReplacerChange}},n.renderCase=function(e){var t=n.state,u=t.result,l=t.error;return r.a.createElement(a.Fragment,null,r.a.createElement("p",null,e.textInput),r.a.createElement(b,{onChange:n.getCaseHandler(e.name),hasError:e.name===k.JSON&&l}),l&&e.textError&&r.a.createElement("p",null,e.textError),r.a.createElement("p",null,e.textOutput),e.name===k.HTML?r.a.createElement("div",{className:"flex-row"},r.a.createElement(b,{value:u,isOutput:!0}),r.a.createElement(b,{value:R(u),isOutput:!0})):r.a.createElement(b,{value:u,isOutput:!0}))},n.getTabsContent=function(){for(var e=[],t=0;t<J.length;t++)e.push({name:J[t].name,label:J[t].label,component:n.renderCase(J[t])});return e},n}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,{tabsContent:this.getTabsContent()}))}}]),t}(r.a.PureComponent),H=(n(250),document.getElementById("root"));l.a.render(r.a.createElement(B,null),H)},91:function(e,t,n){e.exports=n(251)}},[[91,1,2]]]);
//# sourceMappingURL=main.1713db1b.chunk.js.map