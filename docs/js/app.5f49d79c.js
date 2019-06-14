(function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],f=0,d=[];f<c.length;f++)i=c[f],o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/portfolio/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"06ac":function(t,e,n){},"15c9":function(t,e,n){},"39dd":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("8c4f"),a=n("ecee"),i=n("c074"),c=n("f2d1"),s=n("faaa"),u=n("ad3d"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("body",{class:{modalOnScreen:t.modalOnScreen},attrs:{id:"vue-bootstrap"}},[n("transition",{attrs:{name:"loadingAnimation"}},[t.isLoading?n("LoadingOverlay"):t._e()],1),n("Header"),n("Projects",{attrs:{projects:t.projects}}),n("transition",{attrs:{name:"articleAnimation",mode:"out-in"}},[n("router-view",{attrs:{currentProject:t.currentProject}})],1)],1)},f=[],d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"overlay"}},[n("div",{staticClass:"lds-css"},[n("div",{staticClass:"lds-facebook",staticStyle:{width:"100%",height:"100%"}},[n("div"),n("div"),n("div")])])])}],m={name:"LoadingOverlay"},h=m,v=(n("66cd"),n("2877")),b=Object(v["a"])(h,d,p,!1,null,"54ce0216",null),j=b.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",[t._v("Emit")]),n("h2",[t._v("I'm Emiliano Tálamo, a web developer located in Buenos Aires, Argentina. And this is some of my work 🚀")]),n("HeaderLinks")],1)},y=[],g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.links,function(t){return n("li",{key:t.name},[n("a",{attrs:{href:t.href,title:t.name,"aria-label":t.name}},[n("fa",{attrs:{icon:[t.iconFamily,t.iconName]}})],1)])}),0)},k=[],P={name:"HeaderLinks",data:function(){return{links:[{name:"Resume",href:"http://emilianotalamo.github.io/cv",iconFamily:"far",iconName:"file-alt",newtab:!1},{name:"GitHub",href:"https://github.com/emilianotalamo",iconFamily:"fab",iconName:"github-alt",newtab:!0},{name:"LinkedIn",href:"http://linkedin.com/in/emilianotalamo/",iconFamily:"fab",iconName:"linkedin-in",newtab:!0},{name:"E-Mail",href:"mailto:emilianotalamo@gmail.com",iconFamily:"far",iconName:"envelope",newtab:!1}]}}},w=P,O=(n("c0da"),Object(v["a"])(w,g,k,!1,null,"7e85e126",null)),x=O.exports,$={name:"Header",components:{HeaderLinks:x}},L=$,E=(n("7cbd"),Object(v["a"])(L,_,y,!1,null,"e97cf028",null)),S=E.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("ul",{attrs:{id:"linksContainer"}},t._l(t.projects,function(e){return n("li",{key:e.folder},[n("router-link",{class:{lightItem:e.isbright},style:{backgroundColor:e.color},attrs:{to:{path:e.folder}}},[t._v(t._s(e.title))])],1)}),0)])},I=[],T={name:"Projects",props:["projects"]},H=T,N=(n("e147"),Object(v["a"])(H,C,I,!1,null,"8af48e0e",null)),A=N.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.currentProject?n("article",{key:t.currentProject.folder,staticClass:"Project",attrs:{"data-simplebar":""}},[n("router-link",{attrs:{to:{path:"/"},id:"close"}},[t._v("×")]),n("div",{class:[t.ready?"ready":"load"],attrs:{id:"content"}},[n("h1",[t._v(t._s(t.currentProject.title))]),n("ul",{attrs:{id:"tech"}},t._l(t.currentProject.tech,function(e){return n("li",{key:e.tech},[t._v(t._s(e))])}),0),n("img",{staticClass:"load",attrs:{src:t.imgPath,alt:t.currentProject.title,onload:"setTimeout(() => this.className = 'ready', 66)",onerror:"this.className = 'error'"}}),n("div",{attrs:{id:"info"}},t._l(t.formattedInfo,function(e,r){return n("p",{key:r},[t._v(t._s(e))])}),0),n("ProjectLinks",{attrs:{code:t.currentProject.code,view:t.currentProject.view}})],1)],1):t._e()},M=[],V=(n("28a5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"links"}},[t.code?n("a",{staticClass:"btn code",attrs:{href:t.code,target:"_blank"}},[n("fa",{attrs:{icon:"code"}}),t._v("\n\t\tCode")],1):t._e(),t.view?n("a",{staticClass:"btn view",attrs:{href:t.view,target:"_blank"}},[n("fa",{attrs:{icon:"external-link-alt"}}),t._v("\n\t\tView")],1):t._e()])}),J=[],q={name:"ProjectLinks",props:["code","view"]},B=q,G=(n("7e1a"),Object(v["a"])(B,V,J,!1,null,"7cc885f0",null)),R=G.exports,U=(n("a6f9"),n("8195"),n("5118")),z={name:"ProjectView",components:{ProjectLinks:R},props:["currentProject"],data:function(){return{publicPath:"/portfolio/",ready:!1}},computed:{formattedInfo:function(){return this.currentProject.info.split("\n")},imgPath:function(){return this.getImg()}},methods:{getImg:function(){var t="".concat(this.publicPath,"assets/gallery/").concat(this.currentProject.folder,".jpg");return t}},watch:{$route:function(t,e){t!=e&&(this.ready=!1,this.$forceUpdate())}},mounted:function(){var t=this;this.$nextTick(function(){return t.ready=!0}),this.getImg(!1)},updated:function(){var t=this;Object(U["setTimeout"])(function(){return t.ready=!0},66)}},D=z,K=(n("8873"),n("8336"),Object(v["a"])(D,F,M,!1,null,"522eccba",null)),Q=K.exports,W={name:"app",components:{LoadingOverlay:j,Header:S,Projects:A,ProjectView:Q},data:function(){return{isLoading:!0,projects:[],modalOnScreen:!1}},computed:{currentProject:function(){var t=this,e=this.projects.filter(function(e){return e.folder==t.$route.params.p});return 0!=e.length&&e[0]}},methods:{lockScroll:function(t){this.modalOnScreen=!!t}},beforeCreate:function(){var t=this;fetch("".concat("/portfolio/","projects.json")).then(function(t){return t.json()}).then(function(e){return t.projects=e}).catch(function(t){return console.log(t)})},mounted:function(){var t=this;this.lockScroll(this.currentProject),window.addEventListener("keyup",function(e){void 0!=t.$router&&(27!==e.keyCode&&"Escape"!==e.key||t.$router.push("/"))}),this.$nextTick(function(){this.isLoading=!1})},watch:{currentProject:function(t){this.lockScroll(t)}}},X=W,Y=(n("5c0b"),Object(v["a"])(X,l,f,!1,null,null,null)),Z=Y.exports;r["a"].config.productionTip=!1,r["a"].use(o["a"]),a["c"].add(s["b"],c["a"],c["b"],s["a"],i["a"],i["b"]),r["a"].component("fa",u["a"]);var tt=new o["a"]({routes:[{path:"*/:p",component:Q,props:function(t){return{p:t.query.p}}}]});new r["a"]({router:tt,render:function(t){return t(Z)}}).$mount("#vue-bootstrap")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(t,e,n){},6662:function(t,e,n){},"66cd":function(t,e,n){"use strict";var r=n("d802"),o=n.n(r);o.a},"7cbd":function(t,e,n){"use strict";var r=n("b6d8"),o=n.n(r);o.a},"7e1a":function(t,e,n){"use strict";var r=n("06ac"),o=n.n(r);o.a},8192:function(t,e,n){},8336:function(t,e,n){"use strict";var r=n("8192"),o=n.n(r);o.a},8873:function(t,e,n){"use strict";var r=n("15c9"),o=n.n(r);o.a},b6d8:function(t,e,n){},c0da:function(t,e,n){"use strict";var r=n("6662"),o=n.n(r);o.a},d802:function(t,e,n){},e147:function(t,e,n){"use strict";var r=n("39dd"),o=n.n(r);o.a}});
//# sourceMappingURL=app.5f49d79c.js.map