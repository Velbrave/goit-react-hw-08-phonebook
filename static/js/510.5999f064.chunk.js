(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[510,749],{4510:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return R}});var a=t(2791),r=t(9434),s=t(93),o=t(749),c=t(4942),i=t(1413),l=t(9439),u=t(8174),h="ContactForm_form__dhl+T",m="ContactForm_label__-cVXI",d="ContactForm_input__Bl93P",p="ContactForm_button__eSwX9",_=t(2007),f=t.n(_),b=t(2392),x=t(184),v=function(){var e=(0,a.useState)({name:"",number:""}),n=(0,l.Z)(e,2),t=n[0],o=n[1],_=(0,r.v9)(s.PX),f=(0,r.I0)(),v=function(e){o((function(n){return(0,i.Z)((0,i.Z)({},n),{},(0,c.Z)({},e.target.name,e.target.value))}))},j=t.name,y=t.number;return(0,x.jsxs)("form",{className:h,onSubmit:function(e){e.preventDefault();var n={name:j,number:y};_.contacts.find((function(e){return e.name===j}))?u.Am.error("This contact already exists"):f((0,b.uK)(n)),o({name:"",number:""})},children:[(0,x.jsxs)("label",{className:m,htmlFor:"",children:["Name",(0,x.jsx)("input",{className:d,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:j,onChange:v})]}),(0,x.jsxs)("label",{className:m,htmlFor:"",children:["Phone",(0,x.jsx)("input",{className:d,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"(XXX) XXX-XX-XX",value:y,onChange:v})]}),(0,x.jsx)("button",{className:p,type:"submit",children:"add contact"})]})},j=v;v.protoTypes={name:f().string,phone:f().number,handleChange:f().func};var y="ContactList_list__csErn",C="ContactList_item__EZYHO",g="ContactList_text__+NWAW",N="ContactList_button__7kL4l",k=function(){var e=(0,r.I0)(),n=(0,r.v9)(s.zK),t=(0,r.v9)(s.vS),o=(0,r.v9)(s.by);(0,a.useEffect)((function(){e((0,b.yF)())}),[e]);var c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,x.jsxs)("ul",{className:y,children:[o&&(0,x.jsx)("p",{children:"Error..."}),Array.isArray(c)&&c.map((function(n){var t=n.id,a=n.name,r=n.number;return(0,x.jsxs)("li",{className:C,children:[(0,x.jsxs)("p",{className:g,children:[(0,x.jsx)("b",{children:"Name: "}),a]}),(0,x.jsxs)("p",{className:g,children:[(0,x.jsx)("b",{children:"Phone: "}),r]}),(0,x.jsx)("button",{className:N,type:"button",onClick:function(){return e((0,b.GK)(t))},children:"delete"})]},t)}))]})},T=k;k.protoTypes={contacts:f().shape({id:f().string,name:f().string,phone:f().number}),onDeleteContact:f().func};var F="Filter_label__vEd1E",P="Filter_input__N7T3z",S=t(3767),X=function(){var e=(0,r.I0)(),n=(0,r.v9)(s.zK);return(0,x.jsxs)("label",{className:F,htmlFor:"",children:["Find contacts by name",(0,x.jsx)("input",{className:P,type:"text",value:n,onChange:function(n){e((0,S.Ot)(n.target.value))}})]})},E=X;X.protoTypes={value:f().string,onChange:f().func};var w=t(9046),A="Searchbar_Phonebook__uZiWd",O="Searchbar_Contacts__1eBHc",L="Searchbar_item__icRhF",I="Searchbar_text__nMSA0",Z="Searchbar_btn__n8YgV",z=function(){var e=(0,r.I0)(),n=(0,r.v9)(s.rM);return(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:L,children:[(0,x.jsxs)("p",{className:I,children:[(0,x.jsx)("b",{children:"Email: "}),n]}),(0,x.jsx)("button",{type:"button",onClick:function(){e((0,w.gt)())},className:Z,children:"Log out"})]}),(0,x.jsx)("h1",{className:A,children:"Phonebook"}),(0,x.jsx)(j,{}),(0,x.jsx)("h2",{className:O,children:"Contacts"}),(0,x.jsx)(E,{}),(0,x.jsx)(T,{})]})},R=function(){var e=(0,r.v9)(s.Ne);return(0,x.jsx)("div",{children:e?(0,x.jsx)(z,{}):(0,x.jsx)(o.default,{})})}},749:function(e,n,t){"use strict";t.r(n);t(2791);var a=t(1155),r=t(184);n.default=function(){return(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:a,alt:"Phonebook",width:"100%"})})}},888:function(e,n,t){"use strict";var a=t(9047);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,n,t,r,s,o){if(o!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function n(){return e}e.isRequired=e;var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:n,element:e,elementType:e,instanceOf:n,node:e,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:s,resetWarningCache:r};return t.PropTypes=t,t}},2007:function(e,n,t){e.exports=t(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1155:function(e,n,t){"use strict";e.exports=t.p+"static/media/phonebook.b6cf75fb6fd5d3f84377.jpeg"}}]);
//# sourceMappingURL=510.5999f064.chunk.js.map