(this.webpackJsonprobotics=this.webpackJsonprobotics||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(8),o=n.n(s),a=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))}),i=n(0),h=function(e){var t=e.name,n=e.email,r=e.id;return Object(i.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(i.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200*200")}),";",Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:t}),Object(i.jsx)("p",{children:n})]})]})},l=function(e){var t=e.robots;return Object(i.jsx)("div",{children:t.map((function(e,n){return Object(i.jsx)(h,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},b=(n(15),n(2)),j=n(3),u=n(5),d=n(4),f=function(e){e.searchfield;var t=e.searchchange;return Object(i.jsx)("div",{className:"pa3 ba b--green bg-lightest-blue",children:Object(i.jsx)("input",{type:"search",placeholder:"search robots",onChange:t})})},O=function(e){return Object(i.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},g=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(b.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(j.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(i.jsx)("h1",{children:"Oops that went something wrong"}):this.props.children}}]),n}(r.Component),p=(n(7),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(b.a)(this,n),(e=t.call(this)).onSearchchange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?Object(i.jsx)("h1",{children:"Loading"}):Object(i.jsxs)("div",{className:"tc",children:[Object(i.jsx)("h1",{className:"f1",children:"Robofriends"}),Object(i.jsx)(f,{searchchange:this.onSearchchange}),Object(i.jsx)(O,{children:Object(i.jsx)(g,{children:Object(i.jsx)(l,{robots:t})})})]})}}]),n}(r.Component));o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),a()},7:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.6ce71f3c.chunk.js.map