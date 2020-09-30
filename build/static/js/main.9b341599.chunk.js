(this["webpackJsonpzeroheight-docs-generator"]=this["webpackJsonpzeroheight-docs-generator"]||[]).push([[0],{59:function(e,t,n){e.exports=n(95)},64:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(58),u=n.n(r),c=(n(64),n(18)),o=n(19),m=n(12),i=n(39),s=n.n(i);n(94);function E(e){var t=e.propDefs,n=e.editProp,r=Object(a.useState)(null),u=Object(m.a)(r,2),c=u[0],o=u[1];return t.length?l.a.createElement("table",null,l.a.createElement("tbody",null,t.map((function(e){if(e.id===c)return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("h3",null,"Editing Prop"),l.a.createElement(d,{prefilledValues:e,onSubmit:function(t){o(null),n(e.id,t)}})));var t=e.id,a=e.name,r=e.description,u=e.isRequired,m=e.default,i=e.notes,s=e.example;return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,a),l.a.createElement("br",null),l.a.createElement("br",null),r,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Is required"),l.a.createElement("td",null,u?"Yes":"No")),l.a.createElement("tr",null,l.a.createElement("td",null,"Default"),l.a.createElement("td",null,m)),l.a.createElement("tr",null,l.a.createElement("td",null,"Notes"),l.a.createElement("td",null,i)),l.a.createElement("tr",null,l.a.createElement("td",null,"Example"),l.a.createElement("td",null,s)))),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){o(t)}},"Edit")))})))):"None"}function d(e){var t=e.prefilledValues,n=e.onSubmit,r=Object(a.useState)(t||{name:"",description:"",isRequired:!1,default:null,notes:null,example:null}),u=Object(m.a)(r,2),i=u[0],s=u[1],E=function(e,t){return s(Object(o.a)({},i,Object(c.a)({},e,t)))};return l.a.createElement("form",{onSubmit:function(e){n(i),e.preventDefault()}},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",{width:"25%"}),l.a.createElement("td",{width:"50%"}),l.a.createElement("td",null))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Name"),l.a.createElement("td",null,l.a.createElement("small",null,"The name of the prop.")),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:i.name,onChange:function(e){return E("name",e.target.value)}})),l.a.createElement("td",null,i.name)),l.a.createElement("tr",null,l.a.createElement("td",null,"Description"),l.a.createElement("td",null,l.a.createElement("small",null,"Explain why it exists in one or two sentences max.")),l.a.createElement("td",null,l.a.createElement("textarea",{value:i.description,onChange:function(e){return E("description",e.target.value)}})),l.a.createElement("td",null,i.description)),l.a.createElement("tr",null,l.a.createElement("td",null,"Type"),l.a.createElement("td",null,l.a.createElement("small",null,"Always required. One of these values (make sure you keep the formatting). If a Flow type use code style. Use a pipe for multiple types. Use React Component(s) not the Flow type. eg:",l.a.createElement("ul",null,l.a.createElement("li",null,"Number"),l.a.createElement("li",null,"String"),l.a.createElement("li",null,"Boolean"),l.a.createElement("li",null,"String | Number"),l.a.createElement("li",null,"(someVal: number) => void"),l.a.createElement("li",null,"See Types / MyTypeName React Component(s)")))),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:i.type,onChange:function(e){return E("type",e.target.value)}})),l.a.createElement("td",null,i.type)),l.a.createElement("tr",null,l.a.createElement("td",null,"Is Required"),l.a.createElement("td",null,l.a.createElement("small",null,"Does the component error or misbehave if this prop isn't provided?")),l.a.createElement("td",null,l.a.createElement("input",{type:"checkbox",checked:i.isRequired,onChange:function(){return E("isRequired",!i.isRequired)}})),l.a.createElement("td",null,i.isRequired?"Yes":"No")),l.a.createElement("tr",null,l.a.createElement("td",null,"Default"),l.a.createElement("td",null,l.a.createElement("small",null,"Only for optional props. Can leave empty.")),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:i.default,onChange:function(e){return E("default",e.target.value)}})),l.a.createElement("td",null,i.default)),l.a.createElement("tr",null,l.a.createElement("td",null,"Notes"),l.a.createElement("td",null,l.a.createElement("small",null,'Things the consumer should know before they use it. eg. "if you do not provide enough array items it will throw an error"')),l.a.createElement("td",null,l.a.createElement("textarea",{value:i.notes,onChange:function(e){return E("notes",e.target.value)}})),l.a.createElement("td",null,i.notes)),l.a.createElement("tr",null,l.a.createElement("td",null,"Example"),l.a.createElement("td",null,l.a.createElement("small",null,"Help the consumer quickly use the prop. eg. an example array of items")),l.a.createElement("td",null,l.a.createElement("textarea",{value:i.example,onChange:function(e){return E("example",e.target.value)}})),l.a.createElement("td",null,i.example)))),l.a.createElement("button",{type:"submit"},"Save"))}function p(e){var t=e.typesDefs,n=e.editType,r=Object(a.useState)(null),u=Object(m.a)(r,2),c=u[0],o=u[1];return t.length?l.a.createElement("table",null,l.a.createElement("tbody",null,t.map((function(e){if(e.id===c)return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("h3",null,"Editing Type"),l.a.createElement(h,{prefilledValues:e,onSubmit:function(t){o(null),n(e.id,t)}})));var t=e.id,a=e.name,r=e.description,u=e.value;return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,a),l.a.createElement("br",null),l.a.createElement("br",null),r,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("code",null,u),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){o(t)}},"Edit")))})))):"None"}function h(e){var t=e.prefilledValues,n=e.onSubmit,r=Object(a.useState)(t||{name:"",description:"",value:""}),u=Object(m.a)(r,2),i=u[0],s=u[1],E=function(e,t){return s(Object(o.a)({},i,Object(c.a)({},e,t)))};return l.a.createElement("form",{onSubmit:function(e){n(i),e.preventDefault()}},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",{width:"25%"}),l.a.createElement("td",{width:"50%"}),l.a.createElement("td",null))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Name"),l.a.createElement("td",null,l.a.createElement("small",null,"The name of the Flow type.")),l.a.createElement("td",null,l.a.createElement("input",{type:"text",value:i.name,onChange:function(e){return E("name",e.target.value)}})),l.a.createElement("td",null,i.name)),l.a.createElement("tr",null,l.a.createElement("td",null,"Description"),l.a.createElement("td",null,l.a.createElement("small",null,"Explain why it exists in one or two sentences max.")),l.a.createElement("td",null,l.a.createElement("textarea",{value:i.description,onChange:function(e){return E("description",e.target.value)}})),l.a.createElement("td",null,i.description)),l.a.createElement("tr",null,l.a.createElement("td",null,"Value"),l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement("textarea",{className:"code",value:i.value,onChange:function(e){return E("value",e.target.value)}})),l.a.createElement("td",null,l.a.createElement("code",null,i.value))))),l.a.createElement("button",{type:"submit"},"Save"))}var f="json",b="yaml",g=function(e){var t=e.selectedFormat,n=e.onChange;return l.a.createElement(a.Fragment,null,l.a.createElement("input",{type:"radio",value:f,checked:t===f,onChange:function(){return n(f)}})," ","JSON",l.a.createElement("input",{type:"radio",value:b,checked:t===b,onChange:function(){return n(b)}})," ","YAML")};function y(e){return e.sort((function(e,t){var n=e.name,a=t.name;return n.localeCompare(a)}))}var v=0;var x=function(){var e=Object(a.useState)({}),t=Object(m.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)({}),i=Object(m.a)(u,2),b=i[0],x=i[1],w=Object(a.useState)([]),O=Object(m.a)(w,2),S=O[0],C=O[1],j=Object(a.useState)([]),T=Object(m.a)(j,2),N=T[0],k=T[1],D=Object(a.useState)({}),q=Object(m.a)(D,2),R=q[0],W=q[1],A=Object(a.useState)(null),F=Object(m.a)(A,2),I=F[0],M=F[1],P=Object(a.useState)(f),J=Object(m.a)(P,2),V=J[0],H=J[1],B=Object(a.useState)(f),U=Object(m.a)(B,2),Y=U[0],z=U[1],L=function(e,t){return r((function(n){return Object(o.a)({},n,Object(c.a)({},e,t))}))},Z=function(e,t){return x((function(n){return Object(o.a)({},n,Object(c.a)({},e,t))}))},G=function(e,t){C((function(e){return y(e.map((function(e){return e.id,t})))}))},$={aboutTab:n,usageTab:b,props:S,types:N,compatibilityTab:R};return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,"ZeroHeight Docs Generator"),l.a.createElement("br",null),l.a.createElement("strong",null," NOTE:  ")," When in doubt consult the current ",l.a.createElement("a",{href:"https://atomix.hexagonmining.com/"}," Atomix documentation ")," for reference.",l.a.createElement("hr",null),l.a.createElement("h2",null,"About Tab"),l.a.createElement("h3",null,"What is my component?"),l.a.createElement("p",null,"A short paragraph explaining what the component is and what it is used for. Do not go into too much depth - just summarise it."),l.a.createElement("p",null,"eg. Checkbox is a interactive box that, when selected by the user, shows that a particular feature has been enabled or a particular option chosen."),l.a.createElement("textarea",{value:n.what,onChange:function(e){return L("what",e.target.value)}}),l.a.createElement("h3",null,"Why would I use this component?"),l.a.createElement("p",null,"Explain why and when someone might consume your new component."),l.a.createElement("p",null,"eg. Checkbox should be used in cases where multiple selection is the most obvious use case. In use cases where only one selection of a group is allowed, use the radio button component instead of the checkbox."),l.a.createElement("textarea",{value:n.why,onChange:function(e){return L("why",e.target.value)}}),l.a.createElement("h3",null,"What are the different types?"),l.a.createElement("p",null,"How does the component change functionality depending on props."),l.a.createElement("p",null,"eg. The checkbox has 2 style types, Round box and Square box."),l.a.createElement("textarea",{value:n.types,onChange:function(e){return L("types",e.target.value)}}),l.a.createElement("h3",null,"What are the different states?"),l.a.createElement("p",null,'Does the component change functionality or appearance if the "state" changes.'),l.a.createElement("p",null,"eg. The checkbox component has different states: default, enabled, disabled, erroneous, loading"),l.a.createElement("textarea",{value:n.states,onChange:function(e){return L("states",e.target.value)}}),l.a.createElement("hr",null),l.a.createElement("h2",null,"Usage Tab"),l.a.createElement("h3",null,"Import"),l.a.createElement("p",null,"The 1 line of code to import your component as a consumer"),l.a.createElement("p",null,"eg."," ",l.a.createElement("code",null,"import MyComponent from 'atomix/molecules/MyComponent'")),l.a.createElement("textarea",{className:"code",value:b.import,onChange:function(e){return Z("import",e.target.value)}}),l.a.createElement("h3",null,"Example"),l.a.createElement("p",null,"A minimal example of how to use the component. Similar to the sandbox but even slimmer."),l.a.createElement("p",null,"eg."," ",l.a.createElement("code",null,"import React, { useState } from 'react'\nimport MyComponent from 'atomix/molecules/MyComponent'\n\nconst MyExampleComponent = () => {\n  const [someState, setSomeState] = useState(false)\n\n  return <MyComponent something={someState} />\n}")),l.a.createElement("textarea",{className:"code",value:b.example,onChange:function(e){return Z("example",e.target.value)}}),l.a.createElement("hr",null),l.a.createElement("h2",null,"Required Props"),l.a.createElement(E,{propDefs:S.filter((function(e){return e.isRequired})),editProp:G}),l.a.createElement("h2",null,"Optional Props"),l.a.createElement(E,{propDefs:S.filter((function(e){return!e.isRequired})),editProp:G}),l.a.createElement("h2",null,"Add Prop"),l.a.createElement(d,{onSubmit:function(e){return C((function(t){return y(t.concat([Object(o.a)({},e,{id:v++})]))}))}}),l.a.createElement("hr",null),l.a.createElement("h2",null,"Flow Types"),l.a.createElement(p,{typesDefs:N,editType:function(e,t){k((function(e){return y(e.map((function(e){return e.id,t})))}))}}),l.a.createElement("h2",null,"Add Flow Type"),l.a.createElement(h,{onSubmit:function(e){return k((function(t){return y(t.concat([Object(o.a)({},e,{id:v++})]))}))}}),l.a.createElement("hr",null),l.a.createElement("h2",null,"Compatibility"),l.a.createElement("p",null,"What testing have you done in browsers and devices? We strongly recommend you test on these browsers/devices:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Chrome (macOS or Windows)"),l.a.createElement("li",null,"Safari (macOS)"),l.a.createElement("li",null,"Firefox (macOS or Windows)"),l.a.createElement("li",null,"Edge (Windows - Chromium)"),l.a.createElement("li",null,"Chrome for Android"),l.a.createElement("li",null,"Safari (iOS)")),l.a.createElement("p",null,"List only the ones you have tested and dont forget to specify the version tested. An example is shown below."),l.a.createElement("p",null,"Tested on:",l.a.createElement("ul",null,l.a.createElement("li",null,"Chrome 22.44.10 for Windows"),l.a.createElement("li",null,"Safari 33.4 for macOS"),l.a.createElement("li",null,"Firefox 44.54 for macOS and Windows")),"Compatibility:",l.a.createElement("ul",null,l.a.createElement("li",null,"Desktop"),l.a.createElement("li",null,"Tablet"),l.a.createElement("li",null,"Mobile"))),l.a.createElement("textarea",{className:"code",value:R.value,onChange:function(e){return t="value",n=e.target.value,W((function(e){return Object(o.a)({},e,Object(c.a)({},t,n))}));var t,n}}),l.a.createElement("hr",null),l.a.createElement("h2",null,"Export"),l.a.createElement("p",null,"Export this JSON blob so other people can import it (eg. people converting it for ZeroHeight)."),l.a.createElement("p",null,"It automatically updates."),l.a.createElement(g,{onChange:z,selectedFormat:Y}),l.a.createElement("textarea",{value:Y===f?JSON.stringify($,"","\t"):s.a.stringify($)}),l.a.createElement("hr",null),l.a.createElement("h2",null,"Import"),l.a.createElement("p",null,"Paste a JSON blob and it will fill in all of the fields above."),l.a.createElement(g,{onChange:H,selectedFormat:V}),l.a.createElement("textarea",{onChange:function(e){return M(e.target.value)}}),l.a.createElement("button",{onClick:function(){if(I){var e=V===f?JSON.parse(I):s.a.parse(I);r(e.aboutTab),x(e.usageTab),C(y(e.props)),k(y(e.types)),W(e.compatibilityTab)}}},"Apply"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[59,1,2]]]);
//# sourceMappingURL=main.9b341599.chunk.js.map