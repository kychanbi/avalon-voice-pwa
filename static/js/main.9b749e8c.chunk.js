(this["webpackJsonpavalon-pwa"]=this["webpackJsonpavalon-pwa"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),s=n.n(c),i=(n(90),n(91),n(16)),o=n(131),l=n(76),b=n(141),d=n(146),u=n(133),j=n(74),O=n.n(j),g=n(75),p=n.n(g),h=n(32),f=n(15),m=n(135),v=n(103),P=n(136),x=n(147),y=n(142),k=n(148),C=n(137),S=n(138),M=n(145),N=n(105),w=n(149),L=n(71),D=n.n(L),R={totalNumberOfPlayers:{5:{good:3,evil:2},6:{good:4,evil:2},7:{good:4,evil:3},8:{good:5,evil:3},9:{good:6,evil:3},10:{good:6,evil:4}},label:{isPercivalPresent:"\u6d3e\u897f\u7dad\u723e",isMordredPresent:"\u83ab\u5fb7\u96f7\u5fb7",isMorganaPresent:"\u83ab\u7518\u5a1c",isOberonPresent:"\u5967\u67cf\u502b",isLancelotPresent:"\u862d\u65af\u6d1b\u7279"},langs:["zh-HK","yue_HK_#Hant"],presets:{"preset-6":{totalNumberOfPlayer:"6",isPercivalPresent:!1,isMordredPresent:!0,isMorganaPresent:!1,isOberonPresent:!1,isLancelotPresent:!0,desc:"\u7d93\u5178\u516d\u4eba"},"preset-7":{totalNumberOfPlayer:"7",isPercivalPresent:!1,isMordredPresent:!0,isMorganaPresent:!1,isOberonPresent:!1,isLancelotPresent:!0,desc:"\u7d93\u5178\u4e03\u4eba"},"preset-8":{totalNumberOfPlayer:"8",isPercivalPresent:!0,isMordredPresent:!0,isMorganaPresent:!0,isOberonPresent:!1,isLancelotPresent:!0,desc:"\u7d93\u5178\u516b\u4eba"}},theme:{light:{palette:{type:"light"}},dark:{palette:{type:"dark"}}}};Object.freeze(R);var B,W=n(5),E={totalNumberOfPlayer:"5",isPercivalPresent:!1,isMordredPresent:!1,isMorganaPresent:!1,isOberonPresent:!1,isLancelotPresent:!1,speakingRate:.8,countingRate:.9,isDarkMode:!1},A=Object(f.a)({numberOfGood:3,numberOfEvil:2},E);!function(e){e.totalNumberOfPlayer="totalNumberOfPlayer",e.isPercivalPresent="isPercivalPresent",e.isMordredPresent="isMordredPresent",e.isMorganaPresent="isMorganaPresent",e.isOberonPresent="isOberonPresent",e.isLancelotPresent="isLancelotPresent",e.isDarkMode="isDarkMode"}(B||(B={}));var V=r.a.createContext({allSetting:A,editSetting:function(){},editAllCharacterSettings:function(){}}),F=function(e){var t=e.children,n=Object(a.useState)(E),r=Object(i.a)(n,2),c=r[0],s=r[1],o=Object(a.useState)(A),l=Object(i.a)(o,2),b=l[0],d=l[1];return Object(a.useEffect)((function(){var e,t,n=(t=null!==(e=c.totalNumberOfPlayer)&&void 0!==e?e:E.totalNumberOfPlayer,{numberOfGood:R.totalNumberOfPlayers[t].good,numberOfEvil:R.totalNumberOfPlayers[t].evil}),a=n.numberOfGood,r=n.numberOfEvil,s=Object(f.a)(Object(f.a)({},c),{},{numberOfGood:a,numberOfEvil:r});d(s)}),[c]),Object(W.jsx)(V.Provider,{value:{allSetting:b,editSetting:function(e,t){var n=Object(f.a)(Object(f.a)({},c),{},Object(h.a)({},e,t));s(n)},editAllCharacterSettings:function(e){var t=Object(f.a)(Object(f.a)({},c),e);s(t)}},children:t})},G=Object(o.a)((function(e){return{settingTab:{backgroundColor:e.palette.background.paper,width:"70%",height:"80%",padding:"5em 3em",minWidth:320},selectFormControl:{margin:"".concat(e.spacing(1),"px 0"),minWidth:"10em"},sliderWrap:{maxWidth:"55vw"},closeBtn:{position:"absolute",top:e.spacing(3),right:e.spacing(3),cursor:"pointer"},presetBtn:{margin:"".concat(e.spacing(2),"px 0")}}})),I=R.label,K=function(e){var t=e.closeDialog,n=G(),r=Object(a.useContext)(V),c=r.allSetting,s=r.editSetting,o=r.editAllCharacterSettings,l=Object(a.useState)(null!==c&&void 0!==c?c:E),b=Object(i.a)(l,2),d=b[0],j=b[1],O=function(e){var t=e.target.name,n=e.target.value,a=e.target.checked,r=void 0===a?n:a;j(Object(f.a)(Object(f.a)({},d),{},Object(h.a)({},t,r))),s(t,r)},g=function(e){return function(t,n){Array.isArray(n)||(j(Object(f.a)(Object(f.a)({},d),{},Object(h.a)({},e,n))),s(e,n))}};return Object(W.jsxs)("div",{className:n.settingTab,children:[Object(W.jsx)(u.a,{className:n.closeBtn,onClick:t,children:Object(W.jsx)(D.a,{})}),Object(W.jsx)(m.a,{className:n.presetBtn,color:"default",children:Object.keys(R.presets).map((function(e){return Object(W.jsxs)(v.a,{id:e,onClick:function(){return function(e){var t=R.presets[e];j(Object(f.a)(Object(f.a)({},d),t)),o(t)}(e)},children:[" ",R.presets[e].desc]},e)}))}),Object(W.jsxs)(P.a,{className:n.selectFormControl,children:[Object(W.jsx)(x.a,{children:"\u7e3d\u4eba\u6578"}),Object(W.jsx)(y.a,{labelId:"select-total-number-of-player-label",id:"select-total-number-of-player",value:d.totalNumberOfPlayer,onChange:O,name:"totalNumberOfPlayer",children:Object.keys(R.totalNumberOfPlayers).map((function(e){return Object(W.jsx)(k.a,{value:e,children:e},e)}))})]}),Object(W.jsxs)(C.a,{children:[Object(W.jsx)(S.a,{control:Object(W.jsx)(M.a,{checked:d.isPercivalPresent,onChange:O,name:"isPercivalPresent",color:"primary"}),label:I.isPercivalPresent}),Object(W.jsx)(S.a,{control:Object(W.jsx)(M.a,{checked:d.isMordredPresent,onChange:O,name:"isMordredPresent",color:"primary"}),label:I.isMordredPresent}),Object(W.jsx)(S.a,{control:Object(W.jsx)(M.a,{checked:d.isMorganaPresent,onChange:O,name:"isMorganaPresent",color:"primary"}),label:I.isMorganaPresent}),Object(W.jsx)(S.a,{control:Object(W.jsx)(M.a,{checked:d.isOberonPresent,onChange:O,name:"isOberonPresent",color:"primary"}),label:I.isOberonPresent}),Object(W.jsx)(S.a,{control:Object(W.jsx)(M.a,{checked:d.isLancelotPresent,onChange:O,name:"isLancelotPresent",color:"primary"}),label:I.isLancelotPresent}),Object(W.jsxs)("div",{className:n.sliderWrap,children:[Object(W.jsxs)(N.a,{gutterBottom:!0,children:["speaking speed :"," ",d.speakingRate]}),Object(W.jsx)(w.a,{name:"speakingRate",defaultValue:d.speakingRate,value:d.speakingRate,onChange:g("speakingRate"),valueLabelDisplay:"auto",min:.5,max:1.5,step:.05})]}),Object(W.jsxs)("div",{className:n.sliderWrap,children:[Object(W.jsxs)(N.a,{gutterBottom:!0,children:["counting speed :"," ",d.countingRate]}),Object(W.jsx)(w.a,{name:"countingRate",defaultValue:d.countingRate,value:d.countingRate,onChange:g("countingRate"),valueLabelDisplay:"auto",min:.6,max:1.6,step:.06})]})]})]})},z=n(143),H=n(139),T=n(140),J=n(72),_=n.n(J),U=n(73),$=n.n(U);n(46),n(61);function q(e){var t=window.speechSynthesis.getVoices(),n=t.filter((function(t){return e.includes(t.lang)})),a=Object(i.a)(n,1)[0];return console.debug(t),console.debug(e),console.debug(a),a}function Q(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=window.speechSynthesis,r=new SpeechSynthesisUtterance(e);r.voice=q(R.langs),r.lang=null===(t=r.voice)||void 0===t?void 0:t.lang,r.rate=n,a.speak(r),console.log(e),console.log(r)}function X(){window.speechSynthesis.cancel()}var Y=Object(o.a)((function(e){return{mcCard:{padding:e.spacing(2)},playBtnWrap:{width:"100%",padding:"1em 0",textAlign:"center"}}})),Z=function(e){var t=e.gameSetting,n=t.numberOfGood,a=t.numberOfEvil,r=t.totalNumberOfPlayer;return Object(W.jsxs)(z.a,{children:[Object(W.jsxs)(N.a,{variant:"subtitle1",children:["\u7e3d\u4eba\u6578:"," ",r]}),Object(W.jsxs)(N.a,{variant:"subtitle1",children:["\u597d\u4eba:"," ",n," ","\u500b"]}),Object(W.jsxs)(N.a,{variant:"subtitle1",children:["\u58de\u4eba:"," ",a," ","\u500b"]})]})},ee=function(e){var t=e.playOnClick;return Object(W.jsx)("div",{onClick:t,role:"button",tabIndex:0,onKeyDown:t,children:Object(W.jsxs)(u.a,{variant:"extended",color:"primary",children:[Object(W.jsx)(_.a,{})," ","Click to Play Script"]})})},te=function(e){var t=e.stopPlaying;return Object(W.jsx)("div",{onClick:t,role:"button",tabIndex:0,onKeyDown:t,children:Object(W.jsx)(u.a,{variant:"extended",color:"secondary",children:Object(W.jsx)($.a,{})})})},ne=function(){var e=Object(a.useContext)(V).allSetting,t=Object(a.useState)([]),n=Object(i.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)([]),o=Object(i.a)(s,2),l=o[0],b=o[1],d=Object(a.useState)(!1),u=Object(i.a)(d,2),j=u[0],O=u[1];Object(a.useEffect)((function(){var t=function(e){var t=e.isLancelotPresent,n=e.isMordredPresent,a=e.isMorganaPresent,r=e.isOberonPresent,c=e.isPercivalPresent,s="\u6240\u6709\u58de\u4eba\u64d8\u5927\u773c";return t&&r?s="\u9664\u3010\u5967\u67cf\u502b\u540c\u58de\u862d\u65af\u6d1b\u7279\u3011\u4ee5\u5916\uff0c".concat(s,"\uff0c\u58de\u862d\u65af\u6d1b\u7279\u8c4e\u8d77\u624b\u6307\u516c"):r?s="\u9664\u5de6\u3010\u5967\u67cf\u502b\u3011\u4ee5\u5916\uff0c".concat(s):t&&(s="\u9664\u5de6\u3010\u58de\u862d\u65af\u6d1b\u7279\u3011\u4ee5\u5916\uff0c".concat(s,"\uff0c\u58de\u862d\u65af\u6d1b\u7279\u8c4e\u8d77\u624b\u6307\u516c")),[s,"\u6240\u6709\u58de\u4eba\u5408\u57cb\u773c","".concat(n?"\u9664\u5de6\u3010\u83ab\u5fb7\u96f7\u5fb7\u3011\u4ee5\u5916\uff0c":"","\u58de\u4eba\u8c4e\u8d77\u624b\u6307\u516c\u3002\u6885\u6797\u64d8\u5927\u773c"),"\u6885\u6797\u5408\u57cb\u773c\uff0c\u58de\u4eba\u6536\u8d77\u624b\u6307\u516c",c?"\u3010\u6885\u6797\u3011".concat(a?"\u53ca\u3010\u83ab\u7518\u5a1c\u3011":""," \u8c4e\u8d77\u624b\u6307\u516c\uff0c\u3010\u6d3e\u897f\u7dad\u723e\u3011\u64d8\u5927\u773c\u3002\n"):"",c?"\u3010\u6885\u6797\u3011".concat(a?"\u53ca\u3010\u83ab\u7518\u5a1c\u3011":""," \u6536\u8d77\u624b\u6307\u516c\uff0c\u3010\u6d3e\u897f\u7dad\u723e\u3011\u5408\u57cb\u773c\u3002"):"","\u6240\u6709\u4eba\u64d8\u5927\u773c"].filter((function(e){return!!e}))}(e),n=t.map((function(e){return[e,Object(W.jsx)("br",{})]})).reduce((function(e,t){return e.concat(t)}),[]);c(t),b(n)}),[e]),Object(a.useEffect)((function(){var e=window.speechSynthesis;e.getVoices(),e.onvoiceschanged=function(){e.getVoices().length>0&&O(!0)}}),[]);var g=Object(a.useCallback)((function(){X(),r.forEach((function(t){Q("\u4e09\uff0c\u4e8c\uff0c\u4e00\uff0e",e.countingRate),Q(t,e.speakingRate)}))}),[r]);return{scriptArr:r,allSetting:e,playScript:g,scriptDisplay:l,areVoicesLoaded:j}},ae=function(){var e=Y(),t=ne(),n=t.scriptDisplay,a=t.allSetting,r=t.playScript,c=t.areVoicesLoaded;return Object(W.jsxs)(H.a,{variant:"outlined",className:e.mcCard,children:[Object(W.jsx)(Z,{gameSetting:a}),Object(W.jsx)(N.a,{children:n}),Object(W.jsx)("div",{className:e.playBtnWrap,children:c?Object(W.jsx)(ee,{playOnClick:r}):Object(W.jsx)(T.a,{})}),Object(W.jsx)("div",{className:e.playBtnWrap,children:Object(W.jsx)(te,{stopPlaying:X})})]})},re=Object(o.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:"100vw",height:"100vh",position:"relative",boxSizing:"border-box",padding:e.spacing(2)},fab:{position:"absolute",bottom:e.spacing(3),right:e.spacing(3)},fabLeft:{position:"absolute",bottom:e.spacing(3),left:e.spacing(3)}}})),ce=function(){var e=re(),t=Object(a.useContext)(V),n=t.allSetting,r=t.editSetting,c=Object(a.useState)(n.isDarkMode),s=Object(i.a)(c,2),o=(s[0],s[1],Object(a.useCallback)((function(){var e=n.isDarkMode;r("isDarkMode",!e)}),[n.isDarkMode,r])),j=Object(a.useMemo)((function(){return Object(l.a)(n.isDarkMode?R.theme.dark:R.theme.light)}),[n]),g=Object(a.useState)(!0),h=Object(i.a)(g,2),f=h[0],m=h[1],v=function(){m(!1)};return Object(W.jsx)(b.a,{theme:j,children:Object(W.jsxs)("div",{className:e.root,children:[Object(W.jsx)(ae,{}),Object(W.jsx)(d.a,{open:f,onClose:v,fullWidth:!0,children:Object(W.jsx)(K,{closeDialog:v})}),Object(W.jsx)(u.a,{color:"secondary","aria-label":"edit",onClick:function(){m(!0)},className:e.fab,children:Object(W.jsx)(O.a,{})}),Object(W.jsx)(u.a,{color:"secondary","aria-label":"toggle dark mode",onClick:o,className:e.fabLeft,children:Object(W.jsx)(p.a,{})})]})})};var se=function(){return Object(W.jsx)(F,{children:Object(W.jsx)(ce,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,152)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))};document.documentElement.lang="zh-HK",s.a.render(Object(W.jsx)(r.a.StrictMode,{children:Object(W.jsx)(se,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),ie()},90:function(e,t,n){},91:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.9b749e8c.chunk.js.map