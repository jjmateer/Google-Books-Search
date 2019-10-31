(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,n){e.exports=n(71)},39:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(29),r=n.n(l),i=(n(39),n(9)),c=n(10),s=n(12),u=n(11),m=n(13),v=n(31),d=n(7),f=n(30),h=n(15),b=n.n(h),g={getBooks:function(e){return b.a.get("https://www.googleapis.com/books/v1/volumes?q="+e).catch(function(e){return console.log(e)})},getSavedBooks:function(){return b.a.get("/api/books")},deleteBook:function(e){return b.a.delete("/api/books/"+e)},saveBook:function(e){return console.log(e),b.a.post("/api/books",e).catch(function(e){return console.log(e)})}};n(57);var k=function(){return o.a.createElement("div",{id:"banner",className:"jumbotron"},o.a.createElement("div",null,o.a.createElement("h1",null,"Google Books Search")))};n(58);var p=function(e){var t=e.q,n=e.handleInputChange,a=e.handleFormSubmit;return o.a.createElement("div",null,o.a.createElement("form",{id:"searchForm",className:"form-group"},o.a.createElement("h1",null,"Search By Title"),o.a.createElement("input",{className:"form-control",placeholder:"Title",value:t,name:"q",onChange:n,required:!0}),o.a.createElement("button",{id:"submitBtn",className:"btn btn-success",type:"submit",onClick:a},"Submit")))};n(59);var E=function(e){var t=e.icon,n=e.title,a=e.children;return o.a.createElement("div",{id:"results",className:"card mt-4 text-white bg-dark"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h3",null,o.a.createElement("strong",null,o.a.createElement("i",{className:"fa fa-".concat(t),"aria-hidden":"true"})," ",n))),o.a.createElement("div",{className:"card-body"},a))};n(60);var N=function(e){var t=e.title,n=e.subtitle,a=e.authors,l=e.link,r=e.description,i=e.image,c=e.Button;return o.a.createElement("div",null,o.a.createElement("h3",{className:"font-italic"},t),n&&o.a.createElement("h5",{className:"font-italic"},n),o.a.createElement("div",{className:"btn-container"},o.a.createElement("p",{className:"font-italic small"},"Written by ",a),o.a.createElement("img",{className:"img-thumbnailw-100",src:i,alt:t}),o.a.createElement("p",null,r),o.a.createElement(c,null),o.a.createElement("a",{className:"btn btn-warning",target:"_blank",rel:"noopener noreferrer",href:l},"View")))},w=(n(61),function(e){var t=e.children;return o.a.createElement("ul",{className:"list-group"},t)});function B(e){var t=e.children;return o.a.createElement("li",{className:"list-group-item"},t)}var I=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],q:"",message:"Search For A Book!"},n.handleInputChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(f.a)({},a,o))},n.handleFormSubmit=function(e){e.preventDefault(),n.getBooks()},n.getBooks=function(){g.getBooks(n.state.q).then(function(e){return n.setState({books:e.data.items})}).catch(function(){return n.setState({books:[],message:"No books found."})})},n.handleBookSave=function(e){var t=n.state.books.find(function(t){return t.id===e});g.saveBook({googleId:t.id,title:t.volumeInfo.title,subtitle:t.volumeInfo.subtitle?t.volumeInfo.subtitle:"No subtitle available",link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors?t.volumeInfo.authors:"No authors available.",description:t.volumeInfo.description?t.volumeInfo.description:"No description available.",image:t.volumeInfo.imageLinks.thumbnail?t.volumeInfo.imageLinks.thumbnail:"No thumbnail available."}).then(function(){return n.getBooks()}).then(function(){return alert("Book saved!")})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(k,null),o.a.createElement(p,{handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit,q:this.state.q}),o.a.createElement(E,{title:"Results"},this.state.books.length?o.a.createElement(w,null,this.state.books.map(function(t){return o.a.createElement(B,{key:t.id},o.a.createElement(N,{key:t.id,title:t.volumeInfo.title?t.volumeInfo.title:"No title available.",subtitle:t.volumeInfo.subtitle,link:t.volumeInfo.infoLink,authors:t.volumeInfo.authors?t.volumeInfo.authors:"No authors available.",description:t.volumeInfo.description?t.volumeInfo.description:"No description available.",image:t.volumeInfo.imageLinks.thumbnail?t.volumeInfo.imageLinks.thumbnail:"No image available.",Button:function(){return o.a.createElement("button",{onClick:function(){return e.handleBookSave(t.id)},className:"btn btn-success"}," Save")}}))})):o.a.createElement("h2",{className:"text-center"},this.state.message)))}}]),t}(a.Component),S=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],message:"You have no saved books."},n.getSavedBooks=function(){g.getSavedBooks().then(function(e){return n.setState({books:e.data})}).catch(function(e){return console.log(e)})},n.handleBookDelete=function(e){g.deleteBook(e).then(function(e){return n.getSavedBooks()})},n}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getSavedBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(k,null),o.a.createElement(E,{title:"Saved Books"},this.state.books.length?o.a.createElement(w,null,this.state.books.map(function(t){return o.a.createElement(B,{key:t._id},o.a.createElement(N,{key:t._id,title:t.title,subtitle:t.subtitle,link:t.link,authors:t.authors,description:t.description,image:t.image,Button:function(){return o.a.createElement("button",{onClick:function(){return e.handleBookDelete(t._id)},className:"btn btn-danger ml-2"},"Delete")}}))})):o.a.createElement("h2",{className:"text-center"},this.state.message)))}}]),t}(a.Component);n(62);var y=function(){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},o.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},o.a.createElement("ul",{className:"navbar-nav"},o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"/"===window.location.pathname?"nav-link active":"nav-link",href:"/"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement("a",{className:"/saved"===window.location.pathname?"nav-link active":"nav-link",href:"saved"},"Saved")))))},j=(n(63),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(v.a,null,o.a.createElement("div",null,o.a.createElement(y,null),o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/",component:I}),o.a.createElement(d.a,{exact:!0,path:"/saved",component:S}))))}}]),t}(a.Component)),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(j,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");O?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):C(e)})}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.95acc561.chunk.js.map