!function(n){function e(e){for(var r,a,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)a=s[d],i[a]&&f.push(i[a][0]),i[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(n[r]=c[r]);for(u&&u(e);f.length;)f.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],r=!0,s=1;s<t.length;s++){var c=t[s];0!==i[c]&&(r=!1)}r&&(o.splice(e--,1),n=a(a.s=t[0]))}return n}var r={},i={0:0},o=[];function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=r,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)a.d(t,r,function(e){return n[e]}.bind(null,r));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([132,1]),t()}({130:function(n,e,t){var r=t(131);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(37)(r,i);r.locals&&(n.exports=r.locals)},131:function(n,e,t){(n.exports=t(36)(!1)).push([n.i,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n\n*,\n*::before,\n*::after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n  font-family: "Noto Sans TC", sans-serif;\n}\n',""])},132:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t.n(r),o=t(64),a=t.n(o),s=t(2),c=t.n(s),l=t(8),u=t.n(l),d=t(17),f=t.n(d),p=t(18),h=t.n(p),m=t(19),b=t.n(m),g=t(20),v=t.n(g),y=t(6),x=t.n(y),w=t(21),k=t.n(w),z=t(4),E=t.n(z),C=t(27),I=t.n(C),S=t(35),A=t.n(S),U=t(65),R=t.n(U),P=new Date,O=A.a.bind(R.a),F=function(n){function e(){var n,t;f()(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=b()(this,(n=v()(e)).call.apply(n,[this].concat(i))),E()(x()(t),"state",{year:P.getFullYear(),month:P.getMonth+1,records:[]}),t}return k()(e,n),h()(e,[{key:"render",value:function(){var n=this.props,e=n.email,t=n.uid;return i.a.createElement("div",{className:O("main")},"From App Yo!",i.a.createElement("p",null,"uid: ",t),i.a.createElement("p",null,"email: ",e))}}]),e}(i.a.Component);E()(F,"propTypes",{uid:I.a.string.isRequired,email:I.a.string.isRequired});var j=t(66),_=t.n(j),M=t(80);t(63),M.initializeApp({apiKey:"AIzaSyBzFQMFo8w-x42skkGUFsaq1P3y_5KltO0",authDomain:"accounting-55f19.firebaseapp.com",databaseURL:"https://accounting-55f19.firebaseio.com",projectId:"accounting-55f19",storageBucket:"accounting-55f19.appspot.com",messagingSenderId:"726377193451"});var T=M;t(128);var L=new T.auth.GoogleAuthProvider;var D={signIn:function(){return T.auth().signInWithPopup(L)},checkAuth:function(){return new Promise(function(n){T.auth().onAuthStateChanged(function(e){n(!!e)})})},getUserInfo:function(){return T.auth().currentUser}};t(63);var q=T.firestore();var B={selectUsers:function(){return q.collection("users").get()},selectUser:function(n){return q.collection("users").where("email","==",n).get()},addUser:function(n,e){return q.collection("users").doc(e).set({email:e,uid:n})}},G=t(67),N=t.n(G);var J={transformUsers:function(n){var e=[];return n.forEach(function(n){e.push(N()({id:n.id},n.data()))}),e}};function K(){return(K=u()(c.a.mark(function n(){var e,t;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,B.selectUsers();case 2:return e=n.sent,t=J.transformUsers(e),n.abrupt("return",t);case 5:case"end":return n.stop()}},n)}))).apply(this,arguments)}function Y(){return(Y=u()(c.a.mark(function n(e){var t;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,B.selectUser(e);case 2:return t=n.sent,n.abrupt("return",!1===t.empty);case 4:case"end":return n.stop()}},n)}))).apply(this,arguments)}function H(){return(H=u()(c.a.mark(function n(e,t){var r;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,B.addUser(e,t);case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}},n)}))).apply(this,arguments)}var Q={selectUsers:function(){return K.apply(this,arguments)},checkUserExist:function(n){return Y.apply(this,arguments)},registerUser:function(n,e){return H.apply(this,arguments)}},V=A.a.bind(_.a),W=function(n){function e(){var n,t;f()(this,e);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=b()(this,(n=v()(e)).call.apply(n,[this].concat(i))),E()(x()(t),"state",{hadClosedPopUp:!1}),E()(x()(t),"handleClick",u()(c.a.mark(function n(){var e,r,i,o,a;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.props.onSignIn,n.prev=1,n.next=4,D.signIn();case 4:return r=n.sent,i=r.user,o=i.uid,a=i.email,n.next=8,Q.checkUserExist(a);case 8:if(!1!==n.sent){n.next=12;break}return n.next=12,Q.registerUser(o,a);case 12:e(o,a),n.next=18;break;case 15:n.prev=15,n.t0=n.catch(1),t.setState({hadClosedPopUp:!0});case 18:case"end":return n.stop()}},n,null,[[1,15]])}))),t}return k()(e,n),h()(e,[{key:"componentDidMount",value:function(){this.handleClick()}},{key:"render",value:function(){var n=this.state.hadClosedPopUp;return i.a.createElement("div",{className:V("sign-in")},i.a.createElement("h1",null,"Please sign in first"),i.a.createElement("span",null,"If you see no any pop-up window, please allow the pop-up on the right of the URL bar."),n&&i.a.createElement("button",{onClick:this.handleClick},"sign in"))}}]),e}(i.a.Component);E()(W,"propTypes",{onSignIn:I.a.func.isRequired});var X=function(n){function e(){var n,t;f()(this,e);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return t=b()(this,(n=v()(e)).call.apply(n,[this].concat(o))),E()(x()(t),"state",{uid:"",email:"",isLoading:!0,hasAuth:!1}),E()(x()(t),"handleSignIn",function(n,e){t.setState({uid:n,email:e})}),E()(x()(t),"switchPage",function(n,e,r){switch(n){case!0:return i.a.createElement(F,{uid:e,email:r});case!1:return i.a.createElement(W,{onSignIn:t.handleSignIn})}}),t}return k()(e,n),h()(e,[{key:"componentDidMount",value:function(){var n;(n=u()(c.a.mark(function n(e){var t,r,i,o;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,D.checkAuth();case 2:t=n.sent,r=D.getUserInfo(),i=r.uid,o=r.email,e.setState({isLoading:!1,hasAuth:t,uid:i,email:o});case 5:case"end":return n.stop()}},n)})),function(e){return n.apply(this,arguments)})(this)}},{key:"render",value:function(){var n=this.state,e=n.isLoading,t=n.hasAuth,r=n.uid,o=n.email;return e?i.a.createElement("div",null,"Loading la"):this.switchPage(t,r,o)}}]),e}(i.a.Component);t(130);a.a.render(i.a.createElement(X,null),document.getElementById("root"))},65:function(n,e,t){var r=t(77);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(37)(r,i);r.locals&&(n.exports=r.locals)},66:function(n,e,t){var r=t(79);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(37)(r,i);r.locals&&(n.exports=r.locals)},77:function(n,e,t){(e=n.exports=t(36)(!1)).push([n.i,".e1094de3_main {\n  font-size: 20px;\n  font-weight: 600;\n  color: #333; }\n",""]),e.locals={main:"e1094de3_main"}},79:function(n,e,t){(e=n.exports=t(36)(!1)).push([n.i,"._3f4a7f94_sign-in {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  min-height: 100vh;\n  font-size: 26px;\n  font-weight: 600;\n  font-family: Helvetica, Arial, Verdana, Tahoma, sans-serif; }\n",""]),e.locals={"sign-in":"_3f4a7f94_sign-in"}}});