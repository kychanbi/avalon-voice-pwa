(this["webpackJsonpavalon-pwa"]=this["webpackJsonpavalon-pwa"]||[]).push([[0],{83:function(e,t,n){},84:function(e,t,n){},93:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),o=(n(83),n(84),n(23)),s=n(124),l=n(136),b=n(130),u=n(70),d=n.n(u),j=n(32),O=n(18),g=n(126),v=n(137),f=n(132),m=n(138),p=n(128),h=n(129),P=n(135),x=n(97),y=n(139),k={totalNumberOfPlayers:{5:{good:3,evil:2},6:{good:4,evil:2},7:{good:4,evil:3},8:{good:5,evil:3},9:{good:6,evil:3},10:{good:6,evil:4}},label:{isPercivalPresent:"\u6d3e\u897f\u7dad\u723e",isMordredPresent:"\u83ab\u5fb7\u96f7\u5fb7",isMorganaPresent:"\u83ab\u7518\u5a1c",isOberonPresent:"\u5967\u67cf\u502b",isLancelotPresent:"\u862d\u65af\u6d1b\u7279"},voice:"zh-HK"};Object.freeze(k);var S,C=n(5),w={totalNumberOfPlayer:"5",isPercivalPresent:!1,isMordredPresent:!1,isMorganaPresent:!1,isOberonPresent:!1,isLancelotPresent:!1,speakingRate:.8,countingRate:.65},N=Object(O.a)({numberOfGood:3,numberOfEvil:2},w);!function(e){e.totalNumberOfPlayer="totalNumberOfPlayer",e.isPercivalPresent="isPercivalPresent",e.isMordredPresent="isMordredPresent",e.isMorganaPresent="isMorganaPresent",e.isOberonPresent="isOberonPresent",e.isLancelotPresent="isLancelotPresent"}(S||(S={}));var M=r.a.createContext({allSetting:N,editSetting:function(){}}),R=function(e){var t=e.children,n=Object(a.useState)(w),r=Object(o.a)(n,2),c=r[0],i=r[1],s=Object(a.useState)(N),l=Object(o.a)(s,2),b=l[0],u=l[1];return Object(a.useEffect)((function(){var e,t,n=(t=null!==(e=c.totalNumberOfPlayer)&&void 0!==e?e:w.totalNumberOfPlayer,{numberOfGood:k.totalNumberOfPlayers[t].good,numberOfEvil:k.totalNumberOfPlayers[t].evil}),a=n.numberOfGood,r=n.numberOfEvil,i=Object(O.a)(Object(O.a)({},c),{},{numberOfGood:a,numberOfEvil:r});u(i)}),[c]),Object(C.jsx)(M.Provider,{value:{allSetting:b,editSetting:function(e,t){console.log("editSetting",e,t);var n=Object(O.a)(Object(O.a)({},c),{},Object(j.a)({},e,t));i(n)}},children:t})},L=Object(s.a)((function(e){return{settingTab:{backgroundColor:e.palette.background.paper,width:"70%",height:"80%",padding:"3em",minWidth:320},selectFormControl:{margin:e.spacing(1),minWidth:"10em"},sliderWrap:{maxWidth:"55vw"}}})),W=k.label,E=function(){var e=L(),t=Object(a.useContext)(M),n=t.allSetting,r=t.editSetting,c=Object(a.useState)(null!==n&&void 0!==n?n:w),i=Object(o.a)(c,2),s=i[0],l=i[1],b=function(e){var t=e.target.name,n=e.target.value,a=e.target.checked,c=void 0===a?n:a;l(Object(O.a)(Object(O.a)({},s),{},Object(j.a)({},t,c))),r(t,c)},u=function(e){return function(t,n){Array.isArray(n)||(l(Object(O.a)(Object(O.a)({},s),{},Object(j.a)({},e,n))),r(e,n))}};return Object(C.jsxs)("div",{className:e.settingTab,children:[Object(C.jsxs)(g.a,{className:e.selectFormControl,children:[Object(C.jsx)(v.a,{children:"Number of Player"}),Object(C.jsx)(f.a,{labelId:"select-total-number-of-player-label",id:"select-total-number-of-player",value:s.totalNumberOfPlayer,onChange:b,name:"totalNumberOfPlayer",children:Object.keys(k.totalNumberOfPlayers).map((function(e){return Object(C.jsx)(m.a,{value:e,children:e},e)}))})]}),Object(C.jsxs)(p.a,{children:[Object(C.jsx)(h.a,{control:Object(C.jsx)(P.a,{checked:s.isPercivalPresent,onChange:b,name:"isPercivalPresent",color:"primary"}),label:W.isPercivalPresent}),Object(C.jsx)(h.a,{control:Object(C.jsx)(P.a,{checked:s.isMordredPresent,onChange:b,name:"isMordredPresent",color:"primary"}),label:W.isMordredPresent}),Object(C.jsx)(h.a,{control:Object(C.jsx)(P.a,{checked:s.isMorganaPresent,onChange:b,name:"isMorganaPresent",color:"primary"}),label:W.isMorganaPresent}),Object(C.jsx)(h.a,{control:Object(C.jsx)(P.a,{checked:s.isOberonPresent,onChange:b,name:"isOberonPresent",color:"primary"}),label:W.isOberonPresent}),Object(C.jsx)(h.a,{control:Object(C.jsx)(P.a,{checked:s.isLancelotPresent,onChange:b,name:"isLancelotPresent",color:"primary"}),label:W.isLancelotPresent}),Object(C.jsxs)("div",{className:e.sliderWrap,children:[Object(C.jsxs)(x.a,{gutterBottom:!0,children:["speaking speed :"," ",s.speakingRate]}),Object(C.jsx)(y.a,{name:"speakingRate",defaultValue:s.speakingRate,value:s.speakingRate,onChange:u("speakingRate"),valueLabelDisplay:"auto",min:.5,max:1.5,step:.05})]}),Object(C.jsxs)("div",{className:e.sliderWrap,children:[Object(C.jsxs)(x.a,{gutterBottom:!0,children:["counting speed :"," ",s.countingRate]}),Object(C.jsx)(y.a,{name:"countingRate",defaultValue:s.countingRate,value:s.countingRate,onChange:u("countingRate"),valueLabelDisplay:"auto",min:.6,max:1.6,step:.06})]})]})]})},B=n(133),D=n(131),T=n(68),F=n.n(T),G=n(69),I=n.n(G);n(43),n(58);function A(e){return window.speechSynthesis.getVoices().find((function(t){return t.lang===e}))}function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=window.speechSynthesis,a=new SpeechSynthesisUtterance(e);a.voice=A(k.voice),a.rate=t,n.speak(a),console.log(e),console.log(a)}function K(){window.speechSynthesis.cancel()}var V=Object(s.a)((function(e){return{mcCard:{padding:e.spacing(2)},playBtnWrap:{width:"100%",padding:"1em 0",textAlign:"center"}}})),J=function(e){var t=e.gameSetting,n=t.numberOfGood,a=t.numberOfEvil,r=t.totalNumberOfPlayer;return Object(C.jsxs)(B.a,{children:[Object(C.jsxs)(x.a,{variant:"subtitle1",children:["Total number of players:"," ",r]}),Object(C.jsxs)(x.a,{variant:"subtitle1",children:["Total number of Good players:"," ",n]}),Object(C.jsxs)(x.a,{variant:"subtitle1",children:["Total number of Evil players:"," ",a]})]})},H=function(e){var t=e.playOnClick;return Object(C.jsx)("div",{onClick:t,role:"button",tabIndex:0,onKeyDown:t,children:Object(C.jsxs)(b.a,{variant:"extended",color:"primary",children:[Object(C.jsx)(F.a,{})," ","Click to Play Script"]})})},U=function(e){var t=e.stopPlaying;return Object(C.jsx)("div",{onClick:t,role:"button",tabIndex:0,onKeyDown:t,children:Object(C.jsx)(b.a,{variant:"extended",color:"secondary",children:Object(C.jsx)(I.a,{})})})},$=function(){var e=Object(a.useContext)(M).allSetting,t=Object(a.useState)([]),n=Object(o.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)([]),s=Object(o.a)(i,2),l=s[0],b=s[1];Object(a.useEffect)((function(){var t=function(e){var t=e.isLancelotPresent,n=e.isMordredPresent,a=e.isMorganaPresent,r=e.isOberonPresent,c=e.isPercivalPresent,i="\u6240\u6709\u58de\u4eba\u64d8\u5927\u773c";return t&&r?i="\u9664\u3010\u5967\u67cf\u502b\u540c\u862d\u65af\u6d1b\u7279\u3011\u4ee5\u5916\uff0c".concat(i,"\uff0c\u862d\u65af\u6d1b\u7279\u8c4e\u8d77\u624b\u6307\u516c"):r?i="\u9664\u5de6\u3010\u5967\u67cf\u502b\u3011\u4ee5\u5916\uff0c".concat(i):t&&(i="\u9664\u5de6\u3010\u862d\u65af\u6d1b\u7279\u3011\u4ee5\u5916\uff0c".concat(i,"\uff0c\u862d\u65af\u6d1b\u7279\u8c4e\u8d77\u624b\u6307\u516c")),[i,"\u6240\u6709\u58de\u4eba\u5408\u57cb\u773c","".concat(n?"\u9664\u5de6\u3010\u83ab\u5fb7\u96f7\u5fb7\u3011\u4ee5\u5916":"","\uff0c\u8c4e\u8d77\u624b\u6307\u516c\u3002\u6885\u6797\u64d8\u5927\u773c"),"\u6885\u6797\u5408\u57cb\u773c\uff0c\u58de\u4eba\u6536\u8d77\u624b\u6307\u516c",c?"\u3010\u6885\u6797\u3011".concat(a&&"\u53ca\u3010\u83ab\u7518\u5a1c\u3011"," \u8c4e\u8d77\u624b\u6307\u516c\uff0c\u3010\u6d3e\u897f\u7dad\u723e\u3011\u64d8\u5927\u773c\u3002\n"):"",c?"\u3010\u6885\u6797\u3011".concat(a&&"\u53ca\u3010\u83ab\u7518\u5a1c\u3011"," \u6536\u8d77\u624b\u6307\u516c\uff0c\u3010\u6d3e\u897f\u7dad\u723e\u3011\u5408\u57cb\u773c\u3002"):"","\u6240\u6709\u4eba\u64d8\u5927\u773c"].filter((function(e){return!!e}))}(e),n=t.map((function(e){return[e,Object(C.jsx)("br",{})]})).reduce((function(e,t){return e.concat(t)}),[]);c(t),b(n)}),[e]);var u=Object(a.useCallback)((function(){K(),r.forEach((function(t){z("\u4e94\uff0c\u56db\uff0c\u4e09\uff0c\u4e8c\uff0c\u4e00\uff0e",e.countingRate),z(t,e.speakingRate)}))}),[r]);return{scriptArr:r,allSetting:e,playScript:u,scriptDisplay:l}},q=function(){var e=V(),t=$(),n=t.scriptDisplay,a=t.allSetting,r=t.playScript;return Object(C.jsxs)(D.a,{variant:"outlined",className:e.mcCard,children:[Object(C.jsx)(J,{gameSetting:a}),Object(C.jsx)(x.a,{children:n}),Object(C.jsx)("div",{className:e.playBtnWrap,children:Object(C.jsx)(H,{playOnClick:r})}),Object(C.jsx)("div",{className:e.playBtnWrap,children:Object(C.jsx)(U,{stopPlaying:K})})]})},Q=Object(s.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:"100vw",height:"100vh",position:"relative",boxSizing:"border-box",padding:e.spacing(2)},fab:{position:"absolute",bottom:e.spacing(3),right:e.spacing(3)}}})),X=function(){var e=Q(),t=Object(a.useState)(!1),n=Object(o.a)(t,2),r=n[0],c=n[1];return Object(C.jsx)(R,{children:Object(C.jsxs)("div",{className:e.root,children:[Object(C.jsx)(q,{}),Object(C.jsx)(l.a,{open:r,onClose:function(){c(!1)},fullWidth:!0,children:Object(C.jsx)(E,{})}),Object(C.jsx)(b.a,{color:"secondary","aria-label":"edit",onClick:function(){c(!0)},className:e.fab,children:Object(C.jsx)(d.a,{})})]})})};var Y=function(){return Object(C.jsx)(X,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,142)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(Y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),Z()}},[[93,1,2]]]);
//# sourceMappingURL=main.18a32400.chunk.js.map