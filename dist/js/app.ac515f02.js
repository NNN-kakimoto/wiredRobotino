(function(t){function e(e){for(var i,s,o=e[0],h=e[1],c=e[2],d=0,u=[];d<o.length;d++)s=o[d],r[s]&&u.push(r[s][0]),r[s]=0;for(i in h)Object.prototype.hasOwnProperty.call(h,i)&&(t[i]=h[i]);l&&l(e);while(u.length)u.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,o=1;o<n.length;o++){var h=n[o];0!==r[h]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var i={},r={app:0},a=[];function s(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=i,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],h=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var l=h;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=n("ce5b"),a=n.n(r);n("bf40");i["default"].use(a.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},iconfont:"md"});var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",[t._v("クソ診断ジェネレータ")])]),n("v-spacer"),n("v-btn",{attrs:{flat:"",href:"https://twitter.com/kakimoto_itc",target:"_blank"}},[n("span",{staticClass:"mr-2"},[t._v("つくったひと")])])],1),n("v-content",[n("work-area")],1)],1)},o=[],h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("v-img",{staticClass:"my-3",attrs:{src:n("9b19"),contain:"",height:"200"}})],1),i("v-flex",{attrs:{"mb-4":""}},[i("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n        Welcome to Vuetify\n      ")]),i("p",{staticClass:"subheading font-weight-regular"},[t._v("\n        For help and collaboration with other Vuetify developers,\n        "),i("br"),t._v("please join our online\n        "),i("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),i("v-flex",{attrs:{"mb-5":"",xs12:""}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),i("v-layout",{attrs:{"justify-center":""}},t._l(t.whatsNext,function(e,n){return i("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),i("v-flex",{attrs:{xs12:"","mb-5":""}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),i("v-layout",{attrs:{"justify-center":""}},t._l(t.importantLinks,function(e,n){return i("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1),i("v-flex",{attrs:{xs12:"","mb-5":""}},[i("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),i("v-layout",{attrs:{"justify-center":""}},t._l(t.ecosystem,function(e,n){return i("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v("\n          "+t._s(e.text)+"\n        ")])}),0)],1)],1)],1)},c=[],l={data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuetifyjs.com"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},d=l,u=n("2877"),f=Object(u["a"])(d,h,c,!1,null,null,null),b=f.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-card",[n("v-text-field",{attrs:{label:"診断名"},on:{change:function(e){return t.generate()}},model:{value:t.judgement.judgement_name,callback:function(e){t.$set(t.judgement,"judgement_name",e)},expression:"judgement.judgement_name"}}),n("v-text-field",{attrs:{label:"質問文"},on:{change:function(e){return t.generate()}},model:{value:t.judgement.conditions_branch,callback:function(e){t.$set(t.judgement,"conditions_branch",e)},expression:"judgement.conditions_branch"}}),n("v-select",{attrs:{items:[2,3],label:"選択肢の数","return-object":""},on:{change:function(e){return t.branch_count_change()}},model:{value:t.judgement.branch_count,callback:function(e){t.$set(t.judgement,"branch_count",e)},expression:"judgement.branch_count"}})],1)],1),n("v-flex",{class:t.branch_quantity.layout},[n("v-card",[n("v-text-field",{attrs:{label:"選択肢1"},on:{change:function(e){return t.generate()}},model:{value:t.branches.branch1.display_text,callback:function(e){t.$set(t.branches.branch1,"display_text",e)},expression:"branches.branch1.display_text"}}),n("v-text-field",{attrs:{label:"あなたは..."},on:{change:function(e){return t.generate()}},model:{value:t.branches.branch1.result,callback:function(e){t.$set(t.branches.branch1,"result",e)},expression:"branches.branch1.result"}})],1)],1),t.branches.branch3.exists?n("v-flex",{class:t.branch_quantity.layout},[n("v-card",[n("v-text-field",{attrs:{label:"選択肢3"},on:{change:function(e){return t.generate()}},model:{value:t.branches.branch3.display_text,callback:function(e){t.$set(t.branches.branch3,"display_text",e)},expression:"branches.branch3.display_text"}}),n("v-text-field",{attrs:{label:"あなたは..."},on:{change:function(e){return t.generate()}},model:{value:t.branches.branch3.result,callback:function(e){t.$set(t.branches.branch3,"result",e)},expression:"branches.branch3.result"}})],1)],1):t._e(),n("v-flex",{class:t.branch_quantity.layout},[n("v-card",[n("v-text-field",{attrs:{label:"選択肢2"},on:{change:function(e){return t.generate()}},model:{value:t.branches.branch2.display_text,callback:function(e){t.$set(t.branches.branch2,"display_text",e)},expression:"branches.branch2.display_text"}}),n("v-text-field",{attrs:{label:"あなたは..."},on:{change:function(e){return t.generate()}},model:{value:t.branches.branch2.result,callback:function(e){t.$set(t.branches.branch2,"result",e)},expression:"branches.branch2.result"}})],1)],1)],1)],1),n("v-container",[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-card",[n("canvas",{directives:[{name:"show",rawName:"v-show",value:!t.isGenerated,expression:"!isGenerated"}],attrs:{id:"output_field",width:"2880",height:"1620"}}),n("img",{directives:[{name:"show",rawName:"v-show",value:t.isGenerated,expression:"isGenerated"}],staticClass:"output_image",attrs:{src:t.src}})])],1)],1)],1)],1)},x=[],P={data:function(){return{judgement:{judgement_name:"5秒でわかるサイコパス診断",conditions_branch:"きのこ派？たけのこ派？",branch_count:2},branches:{branch1:{display_text:"きのこ派",result:"サイコパス"},branch2:{display_text:"たけのこ派",result:"人間"},branch3:{exists:!1,display_text:"",result:""}},branch_quantity:{layout:"sm6"},src:"",isGenerated:!1,drawPoint:{xCenter:1440,yCenter:810,conditionCenter:500,diaWidth:720,branchBar:200,branchHeight:150,resultHeight:1300,resultBoxHeight:250}}},mounted:function(){this.generate()},methods:{branch_count_change:function(){3==this.judgement.branch_count?(this.branch_quantity.layout="sm4",this.branches.branch3.exists=!0):"2"==this.judgement.branch_count&&(this.branch_quantity.layout="sm6",this.branches.branch3.exists=!1),this.generate()},generate:function(){var t=document.getElementById("output_field").getContext("2d");this.drawInitial(t),this.drawTitle(t),this.branches.branch3.exists&&this.drawBranch3(t),this.drawBranch1(t),this.drawBranch2(t),t=document.getElementById("output_field"),this.isGenerated=!0,this.src=t.toDataURL()},drawTitle:function(t){t.font="120px sans-serif",t.textAlign="center",t.fillStyle="#000",t.fillText(this.judgement.judgement_name,this.drawPoint.xCenter,200),t.font="75px sans-serif",t.fillText(this.judgement.conditions_branch,this.drawPoint.xCenter,this.drawPoint.conditionCenter)},drawCaption:function(t,e,n,i){t.textAlign=n,t.lineWidth=5,t.fillStyle="#FFF",t.font="90px cursive",t.fillText(e,i["x"],i["y"]),t.strokeStyle="gray",t.strokeText(e,i["x"],i["y"])},resetCanvas:function(t){t.fillStyle="#fff",t.fillRect(0,0,2880,1620)},drawInitial:function(t){this.resetCanvas(t),t.beginPath(),t.strokeStyle="#000",t.lineWidth="5",t.moveTo(this.drawPoint.xCenter,this.drawPoint.conditionCenter-200),t.lineTo(this.drawPoint.xCenter+this.drawPoint.diaWidth,this.drawPoint.conditionCenter-25),t.lineTo(this.drawPoint.xCenter,this.drawPoint.conditionCenter+175),t.lineTo(this.drawPoint.xCenter-this.drawPoint.diaWidth,this.drawPoint.conditionCenter-25),t.closePath(),t.stroke()},drawBranch1:function(t){if(t.beginPath(),t.strokeStyle="#000",t.lineWidth="5",t.moveTo(this.drawPoint.xCenter-this.drawPoint.diaWidth,this.drawPoint.conditionCenter-25),t.lineTo(this.drawPoint.xCenter/4,this.drawPoint.conditionCenter-25),t.lineTo(this.drawPoint.xCenter/4,this.drawPoint.conditionCenter+175+this.drawPoint.branchBar),t.moveTo(this.drawPoint.xCenter/4-350,this.drawPoint.conditionCenter+175+this.drawPoint.branchBar),t.lineTo(this.drawPoint.xCenter/4+350,this.drawPoint.conditionCenter+175+this.drawPoint.branchBar),t.lineTo(this.drawPoint.xCenter/4+350,this.drawPoint.conditionCenter+175+this.drawPoint.branchBar+this.drawPoint.branchHeight),t.lineTo(this.drawPoint.xCenter/4-350,this.drawPoint.conditionCenter+175+this.drawPoint.branchBar+this.drawPoint.branchHeight),t.closePath(),t.font="110px sans-serif",t.textAlign="center",t.fillStyle="#000",t.fillText(this.branches.branch1.display_text,this.drawPoint.xCenter/4,this.drawPoint.conditionCenter+150+this.drawPoint.branchBar+this.drawPoint.branchHeight),t.moveTo(this.drawPoint.xCenter/4,this.drawPoint.conditionCenter+175+this.drawPoint.branchBar+this.drawPoint.branchHeight),t.lineTo(this.drawPoint.xCenter/4,this.drawPoint.resultHeight),t.moveTo(this.drawPoint.xCenter/4-350,this.drawPoint.resultHeight),t.lineTo(this.drawPoint.xCenter/4+350,this.drawPoint.resultHeight),t.lineTo(this.drawPoint.xCenter/4+350,this.drawPoint.resultHeight+this.drawPoint.resultBoxHeight),t.lineTo(this.drawPoint.xCenter/4-350,this.drawPoint.resultHeight+this.drawPoint.resultBoxHeight),t.closePath(),t.stroke(),""==this.branches.branch1.result)return!0;t.font="80px sans-serif",t.fillText("あなたは",this.drawPoint.xCenter/4,this.drawPoint.resultHeight+115),t.fillText(this.branches.branch1.result+"です",this.drawPoint.xCenter/4,this.drawPoint.resultHeight+190)},drawBranch2:function(t){if(t.beginPath(),t.strokeStyle="#000",t.lineWidth="5",t.moveTo(this.drawPoint.xCenter+this.drawPoint.diaWidth,this.drawPoint.conditionCenter-25),t.lineTo(this.drawPoint.xCenter/4*7,this.drawPoint.conditionCenter-25),t.lineTo(this.drawPoint.xCenter/4*7,this.drawPoint.conditionCenter+175+this.drawPoint.branchBar),t.moveTo(this.drawPoint.xCenter/4*7-350,this.drawPoint.conditionCenter+175+this.drawPoint.branchBar),t.lineTo(this.drawPoint.xCenter/4*7+350,this.drawPoint.conditionCenter+175+this.drawPoint.branchBar),t.lineTo(this.drawPoint.xCenter/4*7+350,this.drawPoint.conditionCenter+175+this.drawPoint.branchBar+this.drawPoint.branchHeight),t.lineTo(this.drawPoint.xCenter/4*7-350,this.drawPoint.conditionCenter+175+this.drawPoint.branchBar+this.drawPoint.branchHeight),t.closePath(),t.font="110px sans-serif",t.textAlign="center",t.fillStyle="#000",t.fillText(this.branches.branch2.display_text,this.drawPoint.xCenter/4*7,this.drawPoint.conditionCenter+150+this.drawPoint.branchBar+this.drawPoint.branchHeight),t.moveTo(this.drawPoint.xCenter/4*7,this.drawPoint.conditionCenter+175+this.drawPoint.branchBar+this.drawPoint.branchHeight),t.lineTo(this.drawPoint.xCenter/4*7,this.drawPoint.resultHeight),t.moveTo(this.drawPoint.xCenter/4*7-360,this.drawPoint.resultHeight),t.lineTo(this.drawPoint.xCenter/4*7+360,this.drawPoint.resultHeight),t.lineTo(this.drawPoint.xCenter/4*7+360,this.drawPoint.resultHeight+this.drawPoint.resultBoxHeight),t.lineTo(this.drawPoint.xCenter/4*7-360,this.drawPoint.resultHeight+this.drawPoint.resultBoxHeight),t.closePath(),t.stroke(),""==this.branches.branch2.result)return!0;t.font="80px sans-serif",t.fillText("あなたは",this.drawPoint.xCenter/4*7,this.drawPoint.resultHeight+115),t.fillText(this.branches.branch2.result+"です",this.drawPoint.xCenter/4*7,this.drawPoint.resultHeight+190)},drawBranch3:function(t){if(t.beginPath(),t.strokeStyle="#000",t.lineWidth="5",t.moveTo(this.drawPoint.xCenter,this.drawPoint.conditionCenter+175),t.lineTo(this.drawPoint.xCenter,this.drawPoint.conditionCenter+175+this.drawPoint.branchBar),t.closePath(),t.moveTo(1080,this.drawPoint.conditionCenter+175+this.drawPoint.branchBar),t.lineTo(1800,this.drawPoint.conditionCenter+175+this.drawPoint.branchBar),t.lineTo(1800,this.drawPoint.conditionCenter+175+this.drawPoint.branchBar+this.drawPoint.branchHeight),t.lineTo(1080,this.drawPoint.conditionCenter+175+this.drawPoint.branchBar+this.drawPoint.branchHeight),t.closePath(),t.font="110px sans-serif",t.textAlign="center",t.fillStyle="#000",t.fillText(this.branches.branch3.display_text,this.drawPoint.xCenter,this.drawPoint.conditionCenter+150+this.drawPoint.branchBar+this.drawPoint.branchHeight),t.moveTo(this.drawPoint.xCenter,this.drawPoint.conditionCenter+175+this.drawPoint.branchBar+this.drawPoint.branchHeight),t.lineTo(this.drawPoint.xCenter,this.drawPoint.resultHeight),t.moveTo(1080,this.drawPoint.resultHeight),t.lineTo(1800,this.drawPoint.resultHeight),t.lineTo(1800,this.drawPoint.resultHeight+this.drawPoint.resultBoxHeight),t.lineTo(1080,this.drawPoint.resultHeight+this.drawPoint.resultBoxHeight),t.closePath(),t.stroke(),""==this.branches.branch3.result)return!0;t.font="80px sans-serif",t.fillText("あなたは",this.drawPoint.xCenter,this.drawPoint.resultHeight+115),t.fillText(this.branches.branch3.result+"です",this.drawPoint.xCenter,this.drawPoint.resultHeight+190)}}},g=P,m=(n("661d"),Object(u["a"])(g,w,x,!1,null,"3f3e3d83",null)),v=m.exports,p={name:"App",components:{HelloWorld:b,WorkArea:v},data:function(){return{}}},y=p,C=Object(u["a"])(y,s,o,!1,null,null,null),_=C.exports;n("d5e8"),n("d1e7");i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(_)}}).$mount("#app")},"661d":function(t,e,n){"use strict";var i=n("7478"),r=n.n(i);r.a},7478:function(t,e,n){},"9b19":function(t,e,n){t.exports=n.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=app.ac515f02.js.map