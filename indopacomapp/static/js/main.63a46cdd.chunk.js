(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{218:function(e,t,n){e.exports=n(465)},460:function(e,t,n){},461:function(e,t,n){},465:function(e,t,n){"use strict";n.r(t);n(219),n(228);var a=n(0),r=n.n(a),o=n(94),c=n.n(o),i=n(42),u=n(14),s=n(96),l=n.n(s),f=n(210),p=n.n(f),m=n(36),g=n.n(m),h=n(95),b=n.n(h);function y(e){var t,n=e.currentCategory,o=e.onCurrentCategoryChange,c=e.emptyListMessage,i=e.showFilterInList,f=Object(a.useState)(""),m=Object(u.a)(f,2),h=m[0],y=m[1];return n?r.a.createElement("div",{className:"List"},r.a.createElement(p.a,{className:"Panel"},(t=n).parent?function e(t,n){var a=r.a.createElement("span",null,r.a.createElement(g.a,{inline:!0,onClick:function(){var e;(e=t)&&o(e)}},t.title)," ","> ",n);return t.parent?e(t.parent,a):a}(t.parent,r.a.createElement("span",{className:"currentTab"},t.title," (",t.count,")")):r.a.createElement("span",{className:"currentTab"},t.title," (",t.count,")")),i&&r.a.createElement(b.a,{placeholder:"Find ..",value:h,onChange:function(e){!function(e){y(e.target.value)}(e)}}),r.a.createElement(l.a,{className:"SideNav"},r.a.createElement("nav",{tabIndex:0},n.categories&&n.categories.length>0?n.categories.filter((function(e){return""!==h?e.count>0&&e.title.toLowerCase().indexOf(h.toLowerCase())>-1:e.count>0})).map((function(e,t){return r.a.createElement(s.SideNavLink,{key:t,onClick:function(t){return function(e){e.parent.categories&&(y(""),o(e))}(e)}},e.title," (",e.count,")")})):r.a.createElement(s.SideNavLink,null,c)))):null}var d=n(211),v=function(e,t){var n="".concat(t.nameAttribute," = '").concat(e.title,"'");return t.parentNameAttribute&&(n="".concat(n," AND ").concat(t.parentNameAttribute," = '").concat(e.parent.title,"'")),n},E=function(e,t,n,a){if(t&&!1===e)t.labelsVisible=!1;else if(t&&n&&a){var r=t.labelingInfo[0];r.where=v(a,n),t.labelingInfo=[r],t.labelsVisible=!0}};function C(e){var t=e.portalUrl,n=e.webmapid,o=e.currentCategory,c=e.onCurrentCategoryChangeByName,s=e.layerInfosConfig,l=e.categoryDataByLevel,f=e.rootCategory,p=Object(a.useState)(),m=Object(u.a)(p,2),g=m[0],h=m[1],b=Object(a.useRef)(),y=Object(a.useState)([]),C=Object(u.a)(y,2),w=C[0],O=C[1],j=Object(a.useState)([]),N=Object(u.a)(j,2),x=N[0],L=N[1],k=Object(a.useState)(),S=Object(u.a)(k,2),I=S[0],P=S[1],M=Object(a.useState)(!1),A=Object(u.a)(M,2),B=A[0],T=A[1],D=Object(a.useState)(),F=Object(u.a)(D,2),W=F[0],U=F[1];Object(a.useEffect)((function(){Object(i.loadModules)(["esri/WebMap","esri/views/MapView"]).then((function(e){var a=Object(u.a)(e,2),r=a[0],o=new(0,a[1])({map:new r({portalItem:{id:n,portal:{url:t}}}),container:b.current});o.when((function(){R(o),T(o)}))}))}),[]);var R=function(e){if(e){Object(i.loadModules)(["esri/widgets/Home"]).then((function(t){var n=new(0,Object(u.a)(t,1)[0])({view:e});e.ui.add(n,{position:"top-left",index:0}),n.on("go",(function(){c("/Categories/INDOPACOM")}))})),h(e.extent.clone());var t=s.map((function(t){var n=e.map.layers.find((function(e){return e.title===t.layerTitle}));return t.layer=n,e.whenLayerView(n)}));Promise.all(t).then((function(e){L(e),e.forEach((function(e,t){e.filter={where:s[t].filter}}));var t=e.map((function(e){return e.layer.load()}));Promise.all(t).then((function(e){e.forEach((function(e,t){e.set(s[t].layerProperties)})),O(e)}))}))}};return Object(d.a)(B,"click",(function(e){B.hitTest(e).then((function(e){var t,n,a=f;s.forEach((function(r,o){e.results.forEach((function(e){e.graphic.layer.title===r.layerTitle&&(t=e.graphic.attributes[r.nameAttribute],a?(t="".concat(a,"/").concat(t),a=t):a=t,n=o)}))}));var r=l[n+1].find((function(e){return e.category===t}));r?c(r.category):console.error("error, probably with data",t)}))})),Object(a.useEffect)((function(){if(o&&x&&x.length>0&&w){I&&I.remove();var e,t=o.category.split("/").length-4;if(t>=0)x&&x.length>0&&x[t]?e=x[t]:console.error("PROBLEM - could not find layerView:",x),e?(function(e,t,n,a){return new Promise((function(r,o){var c=t.layer,i=c.createQuery();i.set({where:v(a,n)}),c.queryFeatures(i).then((function(n){if(n.features.length){var a=n.features[0];e.goTo({target:a.geometry.extent.clone().expand(1.2)}).then((function(){r(t.highlight(a))}))}else console.warn("Invalid query or can't find feature: ")}),(function(e){o(e)}))}))}(B,e,s[t],o).then((function(e){P(e)})),1===t?E(!0,e.layer,s[t],o):E(!1,w[1])):console.log("no layerView");else B&&B.goTo({target:g}),E(!1,w[1])}}),[o,g,I,s,x,w,B]),Object(a.useEffect)((function(){if(!W&&o&&w&&w.length>0){var e={};o.categories.forEach((function(t){e[t.title]=t.count}));var t=w[0],n=t.labelingInfo[0],a="var countLabelsByFeature = Dictionary('".concat(JSON.stringify(e),"'); if(hasKey(countLabelsByFeature, $feature.").concat(s[0].nameAttribute,")) {return countLabelsByFeature[$feature.").concat(s[0].nameAttribute,"];} else {return 0;}");n.labelExpressionInfo={expression:a},t.labelingInfo=[n],U(n)}}),[o,W,s,w]),r.a.createElement("div",{className:"Map"},r.a.createElement("div",{ref:b}))}var w=n(41),O=n(212),j=n.n(O);function N(e){var t=e.title,n=e.portalUrl,a=e.webmap,o=e.currentCategory,c=e.onCurrentCategoryChange,i=e.onCurrentCategoryChangeByName,u=e.layerInfosConfig,s=e.categoryDataByLevel,l=e.emptyListMessage,f=e.showFilterInList,p=e.rootCategory;return r.a.createElement("div",{className:"Sidebar"},r.a.createElement("div",{className:"SuggestLinkWrapper"},r.a.createElement(g.a,{transparent:!0,href:"https://www.esri.com/en-us/covid-19/community-maps/maps-apps",target:"_blank",title:"Suggest an idea for this Esri template","aria-label":"Suggest an idea for this Esri template"},r.a.createElement(j.a,null))),r.a.createElement(w.CalciteH3,{style:{paddingRight:"28px"}},t),r.a.createElement(y,{currentCategory:o,onCurrentCategoryChange:c,emptyListMessage:l,showFilterInList:f}),r.a.createElement(C,{portalUrl:n,webmapid:a,currentCategory:o,onCurrentCategoryChangeByName:i,layerInfosConfig:u,categoryDataByLevel:s,rootCategory:p}))}var x=n(97),L=n.n(x),k=n(213);function S(e){var t=e.currentUrl,n=Object(a.useRef)(null);return r.a.createElement("div",{className:"LinkPanel"},r.a.createElement(k.FormControl,{fullWidth:!0,success:!0,style:{margin:"0px"}},r.a.createElement(b.a,{ref:n,value:t,fullWidth:!0,clear:!0,readonly:!0,rightAdornmentNoWrap:!0,"aria-label":"Application URL - copy this into a new tab to view full screen",rightAdornment:r.a.createElement(m.ButtonGroup,null,r.a.createElement(g.a,{onClick:function(){n.current.select(),document.execCommand("copy")}},"Copy"),r.a.createElement(g.a,{href:t,target:"_blank"},"Open"))})))}function I(e){var t=e.currentContent,n=e.noPanelMessage,o=Object(a.useState)(0),c=Object(u.a)(o,2),i=c[0],s=c[1];Object(a.useEffect)((function(){s(0)}),[t]);return r.a.createElement("div",{className:"Tabs"},r.a.createElement(L.a,{className:"TabsHeaders",onTabChange:function(e){s(e)},activeTabIndex:i},r.a.createElement(x.TabNav,null,t&&t.map((function(e,t){return r.a.createElement(x.TabTitle,{key:t},e.title)})))),r.a.createElement("div",{className:"iframeWrapper"},t&&t[i]&&t[i].url&&t[i].url.startsWith("https")&&r.a.createElement("iframe",{className:"mainIframe",src:t&&t[i].url,title:t&&t[i].title}),t&&t[i]&&t[i].url&&!t[i].url.startsWith("https")&&r.a.createElement("div",{className:"noPanelMessage"},"Please use the 'open' button at the bottom right to view this item in a new browser tab..."),!(t&&t[i]&&t[i].url)&&r.a.createElement("div",{className:"noPanelMessage"},n)),t&&t[i]&&t[i].url&&r.a.createElement(S,{currentUrl:t&&t[i].url}))}function P(e){var t=e.currentContent,n=e.noPanelMessage;return r.a.createElement("div",{className:"MainArea"},r.a.createElement(I,{currentContent:t,noPanelMessage:n}))}var M=n(214),A=n.n(M),B=n(469);function T(e){var t=e.title,n=e.content,o=Object(a.useState)(!1),c=Object(u.a)(o,2),i=c[0],s=c[1],l=Object(B.a)(["seen-modal"]),f=Object(u.a)(l,2),p=f[0],m=f[1];function h(){m("seen-modal","true"),s(!1)}return Object(a.useEffect)((function(){p.hasOwnProperty("seen-modal")||s(!0)}),[p]),r.a.createElement(A.a,{open:i,onRequestClose:h,appElement:document.body,overlayStyle:{position:"absolute"},title:t,actions:[r.a.createElement(g.a,{key:"ok",onClick:h},"Okay")]},r.a.createElement(w.CalciteP,null,n))}n(460),n(461);var D=n(216),F=n(28),W=n.n(F),U=n(53),R=n(468),V=function(){var e=Object(U.a)(W.a.mark((function e(t,n){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){Object(R.a)("".concat(t,"/sharing/rest/community/groups/").concat(n,"/categorySchema"),{params:{f:"json"}}).then((function(t){e(t.categorySchema)}),(function(e){a(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z=function(){var e=Object(U.a)(W.a.mark((function e(t,n){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,a){Object(R.a)("".concat(t,"/sharing/rest/content/groups/").concat(n,"/search"),{params:{f:"json",countFields:"groupCategories",countSize:200}}).then((function(t){e(t)}),(function(e){a(e)}))})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=function(){var e=Object(U.a)(W.a.mark((function e(t,n,a){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("_groupSearch",a),e.abrupt("return",new Promise((function(e,r){Object(R.a)("".concat(t,"/sharing/rest/content/groups/").concat(n,"/search"),{params:a}).then((function(t){e(t)}),(function(e){r(e)}))})));case 2:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),H=function(){var e=Object(U.a)(W.a.mark((function e(t,n,a){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(U.a)(W.a.mark((function e(r,o){var c,i,u;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=0,i=[];case 2:if(-1==c){e.next=10;break}return e.next=5,q(t,n,Object.assign({start:c},a));case 5:u=e.sent,i=i.concat(u.results),c=u.nextStart,e.next=2;break;case 10:r(i);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),G=function e(t,n,a){if(a&&(t.category="".concat(a.category,"/").concat(t.title)),t.count=function(e,t){var n=e.find((function(e){return e.value===t.toLowerCase()}));return n?n.count:0}(n,t.category),t.parent=a,!(t.categories&&t.categories.length>0))return!0;t.categories.forEach((function(a){e(a,n,t)}))},J=function(){var e=Object(U.a)(W.a.mark((function e(t,n,a){var r,o,c,i;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z(t,n);case 3:return r=e.sent,o=r.aggregations.counts[0].fieldValues.filter((function(e){return e.value.startsWith(a.toLowerCase())})),e.next=7,V(t,n);case 7:if(1!==(c=e.sent).length){e.next=15;break}return(i=c[0].categories.find((function(e){return e.title===K(a)}))).category=a,G(i,o,!1),e.abrupt("return",i);case 15:throw new Error("Got wrong number of category schemas.");case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(0),new Error("Error getInitialAppData");case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,n,a){return e.apply(this,arguments)}}(),K=function(e){var t=e.lastIndexOf("/")+1;return e.substr(t)},$=function(e){var t=e.groupCategories.find((function(e){return e.includes("/Order/")}));return t?Number(t.slice(t.lastIndexOf("/")+1)):999};var _=function(e){var t=e.application,n=(e.applicationBase,Object(a.useState)()),o=Object(u.a)(n,2),c=o[0],i=o[1],s=Object(a.useState)(),l=Object(u.a)(s,2),f=l[0],p=l[1],m=Object(a.useState)(),g=Object(u.a)(m,2),h=g[0],b=g[1],y=Object(a.useState)(),d=Object(u.a)(y,2),v=d[0],E=d[1];function C(e){var n,a,r,o,c;(n=t.portalUrl,a=t.group,r=t.customConfig.excludedItemTypes,o=t.customConfig.excludedItemIDs,c=e.category,console.log("getGroupCategoryContent"),new Promise((function(e,t){H(n,a,{categories:c,num:100}).then((function(t){console.log("queryResponse",t);var n=t.filter((function(e){return!r.includes(e.type)&&!o.includes(e.id)})).filter((function(e){return e.groupCategories.find((function(e){return e===c}))}));n.sort((function(e,t){return $(e)-$(t)})),n.forEach((function(e){var t;"Web Experience"===e.type?e.url="https://experience.arcgis.com/experience/".concat(e.id):"Dashboard"===e.type&&(e.url="".concat((t=e,t.portal?t.portal.urlKey?"https://".concat(t.portal.urlKey,".").concat(t.portal.customBaseUrl):t.portal.url:"https://www.arcgis.com"),"/apps/opsdashboard/index.html#/").concat(e.id))})),e(n)}),(function(e){t(e)}))}))).then((function(t){E(t),b(e)}),(function(e){console.log("error getting group content"),console.error(e)}))}return Object(a.useEffect)((function(){J(t.portalUrl,t.group,t.customConfig.rootCategory).then((function(e){var n,a,r=function(e){var t=[];return function e(n,a){a>=t.length&&t.push([]),n.categories&&0!==n.categories.length?(t[a].push(n),n.categories.forEach((function(t){e(t,a+1)}))):t[a].push(n)}(e,0),t}(e);p(r),n=t.customConfig.layerInfos,a=r,n.forEach((function(e,t){if(a[t+1]){var r=a[t+1].filter((function(e){return e.count>0})).map((function(a){return n[t-1]&&e.parentNameAttribute?"".concat(e.parentNameAttribute," = '").concat(a.parent.title,"' AND ").concat(e.nameAttribute," = '").concat(a.title,"'"):"".concat(e.nameAttribute," = '").concat(a.title,"'")}));e.filter="(".concat(r.join(") OR ("),")")}})),i(e),b(e),C(e)}),(function(e){console.error("Error getting initial data")}))}),[]),c?r.a.createElement(D.a,{className:"App",sizes:[25,75],minSize:100,expandToMin:!1,gutterSize:10,direction:"horizontal",cursor:"col-resize"},r.a.createElement("div",{className:"split"},r.a.createElement(T,{title:t.title,content:t.customConfig.initialModalMessage}),r.a.createElement(N,{title:t.title,portalUrl:t.portalUrl,webmap:t.webmap,currentCategory:h,onCurrentCategoryChange:C,onCurrentCategoryChangeByName:function(e){C(function e(t,n){if(t.category===n)return t;if(t.hasOwnProperty("categories")&&t.categories.length>0){for(var a=null,r=0;null==a&&r<t.categories.length;r++)a=e(t.categories[r],n);return a}return null}(c,e))},layerInfosConfig:t.customConfig.layerInfos,categoryDataByLevel:f,emptyListMessage:t.customConfig.emptyListMessage,showFilterInList:t.customConfig.showFilterInList,rootCategory:t.customConfig.rootCategory})),r.a.createElement("div",{className:"split"},r.a.createElement(P,{currentContent:v,noPanelMessage:t.customConfig.noPanelMessage}))):r.a.createElement("div",{className:"LoadingDiv"},"Loading ...")};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=n(23),X=n.n(Q),Y=n(215);Object(i.setDefaultOptions)({css:!0}),Promise.all([fetch("./config/application.json"),fetch("./config/applicationBase.json")]).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(e){var t=e[0],n=e[1];c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,t.title)),r.a.createElement(X.a,null,r.a.createElement(_,{application:t,applicationBase:n}))),document.getElementById("root"))})).catch((function(e){console.error("Error - could not get configuration variables."),console.error(e)})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[218,1,2]]]);
//# sourceMappingURL=main.63a46cdd.chunk.js.map