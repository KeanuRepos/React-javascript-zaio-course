(this.webpackJsonpsearch_bar=this.webpackJsonpsearch_bar||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),l=(a(13),a(1)),c=a(2),s=a(4),u=a(3),m=a(5),p=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"filterUpdate",value:function(e){var t=e.target.value;console.log("searchText",t),this.props.filterUpdate(t)}},{key:"render",value:function(){return console.log("filterTextValue",this.props.filterText),r.a.createElement("div",{className:"inputBox"},r.a.createElement("input",{className:"form-control my-0 py-1",type:"text",placeholder:"Search","aria-label":"Search",onChange:this.filterUpdate.bind(this)}))}}]),t}(n.Component),f=function(e){var t=e.data,a=e.filterText;console.log("localistData",t),console.log("localistFilter",a);var n=t.filter((function(e){return e.toLowerCase().indexOf(a.toLowerCase())>=0})).map((function(e){return r.a.createElement("li",{className:"list-group-item"},e)}));return r.a.createElement("div",{className:"locations"},r.a.createElement("ul",{className:"list-group"},n))},h=function(e){return function(t){return console.log("searchsum",t),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"form-row"},r.a.createElement("div",{className:"col mt-2"},r.a.createElement("h3",null,"Logo")),r.a.createElement("div",{className:"col-4"},r.a.createElement("div",{className:"input-group md-form form-sm form-1 pl-0 mt-2"}),r.a.createElement(e,t))))}}(function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={filterText:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"filterUpdate",value:function(e){this.setState({filterText:e})}},{key:"render",value:function(){return console.log("Application",this.props.location),console.log("AppfilterText",this.state.filterText),r.a.createElement("div",{className:"App"},r.a.createElement(p,{filterText:this.state.filterText,filterUpdate:this.filterUpdate.bind(this)}),r.a.createElement(f,{data:this.props.location,filterText:this.state.filterText}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d="Durban,SA\nCape Town,SA\nPE,SA\nJohannesburg,SA\nPretoria,SA\nDelhi,India \nGujarat,India\nBig Ben,UK\nCalifornia,USA\nLondon,UK".split("\n");i.a.render(r.a.createElement(h,{location:d}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.57809bf7.chunk.js.map