(function(e){function t(t){for(var r,n,s=t[0],l=t[1],c=t[2],u=0,h=[];u<s.length;u++)n=s[u],i[n]&&h.push(i[n][0]),i[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(h.length)h.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,s=1;s<o.length;s++){var l=o[s];0!==i[l]&&(r=!1)}r&&(a.splice(t--,1),e=n(n.s=o[0]))}return e}var r={},i={app:0},a=[];function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/portfolio/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"070a":function(e,t,o){"use strict";var r=o("8446"),i=o.n(r);i.a},"11de":function(e,t,o){"use strict";var r=o("c83d"),i=o.n(r);i.a},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var r=o("2b0e"),i=o("8c4f"),a=o("ecee"),n=o("c074"),s=o("f2d1"),l=o("faaa"),c=o("ad3d"),d=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("body",{style:{overflowY:e.scrollStatus},attrs:{id:"vue-bootstrap"}},[o("transition",{attrs:{name:"loadingAnimation"}},[e.isLoading?o("LoadingOverlay"):e._e()],1),o("Header"),o("Projects",{attrs:{projects:e.projects}}),o("transition",{attrs:{name:"articleAnimation"}},[o("router-view",{attrs:{currentProject:e.currentProject}})],1)],1)},u=[],h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},f=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"overlay"}},[o("div",{staticClass:"lds-css"},[o("div",{staticClass:"lds-facebook",staticStyle:{width:"100%",height:"100%"}},[o("div"),o("div"),o("div")])])])}],p={name:"LoadingOverlay"},m=p,v=(o("66cd"),o("2877")),b=Object(v["a"])(m,h,f,!1,null,"54ce0216",null),g=b.exports,w=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",[o("h1",[e._v("Emit")]),o("h2",[e._v("I'm Emiliano Tálamo, a web developer located in Buenos Aires, Argentina. And this is some of my work 🚀")]),o("HeaderLinks")],1)},y=[],k=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",e._l(e.links,function(e){return o("li",{key:e.name},[o("a",{attrs:{href:e.href,title:e.name,"aria-label":e.name}},[o("fa",{attrs:{icon:[e.iconFamily,e.iconName]}})],1)])}),0)},S=[],P={name:"HeaderLinks",data:function(){return{links:[{name:"Resume",href:"http://emilianotalamo.github.io/cv",iconFamily:"far",iconName:"file-alt",newtab:!1},{name:"GitHub",href:"https://github.com/emilianotalamo",iconFamily:"fab",iconName:"github-alt",newtab:!0},{name:"LinkedIn",href:"http://linkedin.com/in/emilianotalamo/",iconFamily:"fab",iconName:"linkedin-in",newtab:!0},{name:"E-Mail",href:"mailto:emilianotalamo@gmail.com",iconFamily:"far",iconName:"envelope",newtab:!1}]}}},T=P,j=(o("c0da"),Object(v["a"])(T,k,S,!1,null,"7e85e126",null)),_=j.exports,I={name:"Header",components:{HeaderLinks:_}},L=I,x=(o("7cbd"),Object(v["a"])(L,w,y,!1,null,"e97cf028",null)),E=x.exports,C=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("main",[o("ul",{attrs:{id:"linksContainer"}},e._l(e.projects,function(t){return o("li",{key:t.folder},[o("router-link",{class:{lightItem:t.isbright},style:{backgroundColor:t.color},attrs:{to:"/"+t.folder}},[e._v(e._s(t.title))])],1)}),0)])},H=[],A={name:"Projects",props:["projects"]},O=A,M=(o("11de"),Object(v["a"])(O,C,H,!1,null,"122324fe",null)),q=M.exports,F=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.currentProject?o("article",[o("router-link",{attrs:{to:"/",id:"close"}},[e._v("×")]),o("div",{attrs:{id:"content"}},[o("h1",[e._v(e._s(e.currentProject.title))]),o("ul",{attrs:{id:"tech"}},e._l(e.currentProject.tech,function(t){return o("li",{key:t.tech},[e._v(e._s(t))])}),0),o("div",{attrs:{id:"info"}},e._l(e.formattedInfo,function(t,r){return o("p",{key:r},[e._v(e._s(t))])}),0),o("ProjectLinks",{attrs:{code:e.currentProject.code,view:e.currentProject.view}}),e.currentProject.ssqt>0?o("GalleryThumbnails",{attrs:{currentProject:e.currentProject}}):e._e()],1)],1):e._e()},J=[],z=(o("28a5"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("aside",[o("Flickity",{ref:"flickity",staticClass:"flickity carousel",attrs:{options:e.flickityOptions}},e._l(e.images,function(t,r){return o("div",{key:r,staticClass:"carousel-cell"},[o("img",{staticClass:"carousel-cell-image",attrs:{"data-flickity-lazyload":t,alt:e.currentProject.title}})])}),0)],1)}),B=[],$=o("b394"),D={name:"galleryThumbs",components:{Flickity:$["a"]},props:["currentProject"],data:function(){return{index:null,flickityOptions:{draggable:!0,dragThreshold:10,freeScroll:!1,wrapAround:!1,autoPlay:3e3,fullscreen:!1,imagesLoaded:!0,lazyLoad:!0,prevNextButtons:!0,pageDots:!0,setGallerySize:!1,percentPosition:!0,adaptiveHeight:!1}}},computed:{images:function(){for(var e=[],t=this.currentProject.ssqt,o=this.currentProject.folder,r=1;r<=t;r++)e.push("../assets/gallery/".concat(o,"/").concat(r,".jpg"));return e}}},G=D,N=(o("fdaf"),Object(v["a"])(G,z,B,!1,null,null,null)),Q=N.exports,V=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"links"}},[e.code?o("a",{staticClass:"btn code",attrs:{href:""}},[o("fa",{attrs:{icon:"code"}}),e._v("\n\t\tCode")],1):e._e(),e.view?o("a",{staticClass:"btn view",attrs:{href:""}},[o("fa",{attrs:{icon:"external-link-alt"}}),e._v("\n\t\tView")],1):e._e()])},W=[],R={name:"ProjectLinks",props:["code","view"]},X=R,Y=(o("fb18"),Object(v["a"])(X,V,W,!1,null,"d4e5cd28",null)),K=Y.exports,U={name:"ProjectView",components:{GalleryThumbnails:Q,ProjectLinks:K},props:["currentProject"],computed:{formattedInfo:function(){return this.currentProject.info.split("\n")}}},Z=U,ee=(o("f300"),o("070a"),Object(v["a"])(Z,F,J,!1,null,"6f0ec6d6",null)),te=ee.exports,oe=o("d4bf"),re={name:"app",components:{LoadingOverlay:g,Header:E,Projects:q,ProjectView:te},data:function(){return{isLoading:!0,projects:oe.projects,scrollStatus:"auto"}},computed:{currentProject:function(){var e=this,t=this.projects.filter(function(t){return t.folder==e.$route.params.p});return 0!=t.length&&t[0]}},methods:{lockScroll:function(e){this.scrollStatus=e?"hidden":"auto"}},mounted:function(){var e=this;this.lockScroll(this.currentProject),window.addEventListener("keyup",function(t){void 0!=e.$router&&(27!==t.keyCode&&"Escape"!==t.key||e.$router.push("/"))}),this.$nextTick(function(){this.isLoading=!1})},watch:{currentProject:function(e){this.lockScroll(e)}}},ie=re,ae=(o("5c0b"),Object(v["a"])(ie,d,u,!1,null,null,null)),ne=ae.exports;r["a"].config.productionTip=!1,r["a"].use(i["a"]),a["c"].add(l["b"],s["a"],s["b"],l["a"],n["a"],n["b"]),r["a"].component("fa",c["a"]);var se=new i["a"]({mode:"history",routes:[{path:"/:p",component:te,props:function(e){return{p:e.query.p}}}]});new r["a"]({router:se,render:function(e){return e(ne)}}).$mount("#vue-bootstrap")},"5c0b":function(e,t,o){"use strict";var r=o("5e27"),i=o.n(r);i.a},"5e27":function(e,t,o){},6662:function(e,t,o){},"66cd":function(e,t,o){"use strict";var r=o("d802"),i=o.n(r);i.a},"7cbd":function(e,t,o){"use strict";var r=o("b6d8"),i=o.n(r);i.a},8446:function(e,t,o){},"9e6c":function(e,t,o){},b6d8:function(e,t,o){},c0da:function(e,t,o){"use strict";var r=o("6662"),i=o.n(r);i.a},c83d:function(e,t,o){},d4bf:function(e){e.exports={projects:[{title:"Circulo en el avatar generator",color:"#ee6e73",tech:["HTML","CSS","JavaScript","Canvas HTML","Responsive Design"],info:"I made this in my free time while Argentina was debating legalization of abortion.\nIn social networks, those who supported this, put a green circle in their profile picture. But I noticed that there were many people who did not know how to do it without relying on complex programs on their computers, or downloading apps.\nSo, in roughly six hours, I coded this simple web page that allows you to upload any photo and put a customizable circle in it with any combination of colors to use it as avatar in any social network.\nThe site was quite successful, and was used by plenty of people.\nOn the technical side, I did not use any complex or overkill framework since I prioritized loading speed, so the end users can have a snappy experience.",folder:"circulo",ssqt:2,code:"https://github.com/EmilianoTalamo/circulo",view:"https://emilianotalamo.github.io/circulo/"},{title:"Tweetdrafter 2 App (Online)",color:"#1E88E5",tech:["AngularJS","jQuery","Cordova","HTML","JavaScript","AJAX","CSS","PHP","MySQL","Illustrator","Sketch","Git"],info:"This is an updated version of the app that I developed the previous year, but rewritten from scatch in AngularJS (previously in jQuery Mobile).\nTweetdrafter is a very simple app that allows you to write drafts for tweets. On the surface it looks like a notes app, but it provides personalized features such as character counter and the ability to send the tweet directly to Twitter.\nThis version corrected many bugs that had been pending, and provides many new features such as cloud storage, but it still can be used in offline mode if preferred.",folder:"td-2online",ssqt:4,code:"https://github.com/EmilianoTalamo/tweetdrafter-2-online",view:!1},{title:"140 Social Network",color:"#E91E63",tech:["HTML","CSS","JavaScript","PHP","MySQL","Illustrator"],info:"A basic Twitter clone that I had to do for my PHP class. It was completely designed and developed by me in less that three weeks.\nSome basic features are the ability to follow or unfollow other users, post messages, like other users' posts and browse profiles.\nIn addition, it includes an administrator panel that only users marked as admin on the database can access to, and it shows statistics of the site and users' behaviour, similar to Google Analytics.",folder:"140",ssqt:3,code:"https://github.com/EmilianoTalamo/portfolio/tree/master/work/src/140",view:!1},{title:"Turistic Brochure Design",color:"#4CAF50",tech:["InDesign","Illustrator","Photoshop"],info:"A simple turistic brochure of my hometown that I had to design for Graphic Design class.",folder:"si-brochure",ssqt:4,code:!1,view:!1},{title:"Les Luthiers PHP-Template Based Web",color:"#FF9800",tech:["HTML","CSS","JavaScript","PHP"],info:'This is a college project that I did for PHP class. It\'s a webside based on the comedy band "Les Luthiers", designed by me.\nWhat this web has in particular is that the navigation is achieved with PHP-includes, by having a base skeleton and managing which template load from the server with GET requests.',folder:"lesluthiers",ssqt:2,code:"https://github.com/EmilianoTalamo/portfolio/tree/master/work/src/lesluthiers",view:!1},{title:"Tweetdrafter Landing Page",color:"#1E88E5",tech:["HTML","CSS","Responsive Design","Illustrator","JavaScript","Premiere"],info:"Single Page Landing to promote my app \"Tweetdrafter\", made completely by me without using third-party frameworks. The interface is similar to Boostrap, using the app's palette.\nThe website adapts all its elements in terms of position, size and behavior depending on the size of the users' viewport or device.",folder:"td-landing",ssqt:5,code:"https://github.com/EmilianoTalamo/portfolio/tree/master/work/src/td-landing",view:"./work/src/td-landing/"},{title:"DV Store E-Commerce Design",color:"#F44336",tech:["HTML","JavaScript","CSS","Illustrator"],info:"Functioning simple e-commerce design coded in plain JavaScript, and designed by me.\nThe products are divided into categories, and these can be previewed in a modal window with more information and a photo gallery. Here you can also choose size, color and quantity before adding them to the shopping cart.\nThe cart itself adds up automatically each product added, giving you the total on top. It also identifies if the same product is added twice, summing up to the quantity.\nThe checkout is a simulated payment since it doesn't have any server-side behavior, and it has several forms with validation, and at the end a summary of all the data entered by the user and the products to be purchased.",folder:"dvstore",ssqt:4,code:"https://github.com/EmilianoTalamo/portfolio/tree/master/work/src/dvstore",view:"./work/src/dvstore/"},{title:"Music Festival Poster Design",color:"#607D8B",tech:["Illustrator"],info:"A fictional music festival poster drawn by me in Adobe Illustrator.",folder:"lineup",ssqt:4,code:!1,view:"https://www.behance.net/gallery/69926823/Nekromantia-Festivaali"},{title:"Sergio F. Telegram Bot",color:"#009688",tech:["NodeJS","Telegram API","Heroku","Git"],info:"A Telegram Bot that I coded during my free time to remind me and my colleagues of our exams and assignment due dates with a single command.",folder:"sergiobot",ssqt:2,code:!1,view:!1},{title:"Flexbox Helper",color:"#B71C1C",tech:["HTML","CSS","JavaScript"],info:"I made this webpage on my freetime on my first year of learning web development.\nI created it so it was simpler for me to learn and use CSS Flexbox easily, since it was a new thing for the time.\nIt may have some missing features, but it helped me a lot, and sometimes it still does.",folder:"flexboxhelper",ssqt:1,code:"https://github.com/EmilianoTalamo/flexboxhelper",view:"https://emilianotalamo.github.io/flexboxhelper"},{title:"San Isidro Web Mockup",color:"#3F51B5",tech:["Photoshop","Illustrator"],info:"A mockup for a webpage of my hometown that I had to do for Photoshop Class, using the 960 Grid System.",folder:"sanisidro",ssqt:3,code:!1,view:!1},{title:"NieR:Automata Vectorized Illustration",color:"#BDB8A4",isbright:!0,tech:["Illustrator"],info:"A vectorized illustration that I drawn during my free time.\nI made it in Illustrator in one sit, in roughly 10 hours.",folder:"2b",ssqt:0,code:!1,view:"https://www.behance.net/gallery/69927033/2B"},{title:"Tweetdrafter App",color:"#1E88E5",tech:["jQuery","Cordova","jQuery Mobile","HTML","CSS","Illustrator","Sketch","Git"],info:"Tweetdrafter is a very simple app that allows you to write drafts for tweets. On the surface it looks like a notes app, but it provides personalized features such as character counter and the ability to send the tweet directly to Twitter.\nEverything, from the design of the logo and the app to the developent of it was  done entirely by me. I used Sketch for the mockup of the interface, Illustrator for the design of the logo and the icons, and jQuery Mobile as the base framework.\nThe following year I remade this app in AngularJS.",folder:"td",ssqt:2,code:"https://github.com/EmilianoTalamo/tweetdrafter",view:!1},{title:"Dota XHTML-Strict Web",color:"#795548",tech:["XHTML","CSS","PHP"],info:"College project of my first year of web development. This is my first fully functional complex web ever made.\nThe webpage is purely informative, with a structure similar of a blog, and is written in XHTML-Strict, validated by W3C.\nThe markup used is totally accesible, using semantic HTML to help screenreader users to understand the contents meaning. The document's structure do not depend on JavaScript or CSS to make sense, so it still can be navigable without relying on these.\nSome extra stuff that this web has are the support of a print stylesheet, and all the icons are laid in a single image as a sprite for resource optimizations.\nThere's also a section with a third party gallery, and another one that includes a form that saves the data inputted by the user to the server, using PHP.",folder:"dota",ssqt:2,code:"https://github.com/EmilianoTalamo/portfolio/tree/master/work/src/dota",view:"./work/src/dota/"}]}},d802:function(e,t,o){},eccb:function(e,t,o){},f300:function(e,t,o){"use strict";var r=o("f721"),i=o.n(r);i.a},f721:function(e,t,o){},fb18:function(e,t,o){"use strict";var r=o("eccb"),i=o.n(r);i.a},fdaf:function(e,t,o){"use strict";var r=o("9e6c"),i=o.n(r);i.a}});
//# sourceMappingURL=app.8066011d.js.map