(function(e){function t(t){for(var r,i,o=t[0],_=t[1],l=t[2],c=0,p=[];c<o.length;c++)i=o[c],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&p.push(n[i][0]),n[i]=0;for(r in _)Object.prototype.hasOwnProperty.call(_,r)&&(e[r]=_[r]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,o=1;o<a.length;o++){var _=a[o];0!==n[_]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},s=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p=" /";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],_=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=_;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"1fa3":function(e,t,a){},"272b":function(e,t,a){"use strict";a("1fa3")},"2f3e":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[e._m(0),a("Norma")],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"header"},[r("img",{attrs:{src:a("b835"),alt:"Logo Unisc",width:"200px"}})])}],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"wrapperNorma"},[a("div",{staticStyle:{width:"80vw","min-width":"50vw"}},[a("h1",[e._v("Máquina Norma")]),a("form",{on:{keypress:function(t){return e.isNumber(t)}}},[e._v(" Quantidade de registradores: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.CountReg,expression:"CountReg"}],attrs:{type:"number",name:"CountReg",min:"2",max:"7"},domProps:{value:e.CountReg},on:{input:function(t){t.target.composing||(e.CountReg=t.target.value)}}}),e._v(" "),a("br"),a("br"),e._m(0),a("input",{ref:"myFileReg",attrs:{id:"uploadBtnReg",type:"file"},on:{change:e.uploadArquivoReg}}),e._v(" "),a("i",{staticClass:"far fa-question-circle",staticStyle:{"font-size":"20px",cursor:"help"},on:{mouseover:function(t){e.showHelp=!0},mouseleave:function(t){e.showHelp=!1}}}),1==e.showHelp?a("div",{staticClass:"tooltipReg"},[a("h1",{staticStyle:{"font-size":"20px"}},[e._v("Exemplos de arquivos txt válidos:")]),e._v(" reg=7 //Numero de reg"),a("br"),e._v(" A=2 //Atribuição ao registrador A"),a("br"),e._v(" B=3"),a("br"),e._v(" C=3"),a("br"),e._v(" D=1"),a("br"),e._v(" G=4"),a("br"),e._v(" Se nenhum valor foi setado e o número de registradores cobre o registrador ele iniciará como 0, como é o caso do E e do F neste exemplo. ")]):e._e(),0==e.isTxtReg?a("p",{staticStyle:{color:"red","font-size":"20"}},[a("b",[e._v("Erro:")]),e._v(" Apenas permitidos arquivos com extensão .txt")]):e._e(),a("p",[e._v("Valor de entrada para A:"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Aalt,expression:"Aalt"}],attrs:{type:"text",name:"A"},domProps:{value:e.Aalt},on:{input:function(t){t.target.composing||(e.Aalt=t.target.value)}}})]),a("p",[e._v("Valor de entrada para B:"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Balt,expression:"Balt"}],attrs:{type:"text",name:"B"},domProps:{value:e.Balt},on:{input:function(t){t.target.composing||(e.Balt=t.target.value)}}})]),e.CountReg>=3?a("p",[e._v("Valor de entrada para C:"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Calt,expression:"Calt"}],attrs:{type:"text",name:"C"},domProps:{value:e.Calt},on:{input:function(t){t.target.composing||(e.Calt=t.target.value)}}})]):e._e(),e.CountReg>=4?a("p",[e._v("Valor de entrada para D:"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Dalt,expression:"Dalt"}],attrs:{type:"text",name:"D"},domProps:{value:e.Dalt},on:{input:function(t){t.target.composing||(e.Dalt=t.target.value)}}})]):e._e(),e.CountReg>=5?a("p",[e._v("Valor de entrada para E:"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Ealt,expression:"Ealt"}],attrs:{type:"text",name:"E"},domProps:{value:e.Ealt},on:{input:function(t){t.target.composing||(e.Ealt=t.target.value)}}})]):e._e(),e.CountReg>=6?a("p",[e._v("Valor de entrada para F:"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Falt,expression:"Falt"}],attrs:{type:"text",name:"F"},domProps:{value:e.Falt},on:{input:function(t){t.target.composing||(e.Falt=t.target.value)}}})]):e._e(),e.CountReg>=7?a("p",[e._v("Valor de entrada para G:"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.Galt,expression:"Galt"}],attrs:{type:"text",name:"G"},domProps:{value:e.Galt},on:{input:function(t){t.target.composing||(e.Galt=t.target.value)}}})]):e._e(),e.isLtr?a("p",{staticStyle:{color:"red","font-size":"20"}},[a("b",[e._v("Erro:")]),e._v(" Apenas números não decimais serão aceitos.")]):e._e()]),a("hr"),e._m(1),a("p",[e._v("A: "+e._s(e.Aalt))]),a("p",[e._v("B: "+e._s(e.Balt))]),e.CountReg>=3?a("p",[e._v("C: "+e._s(e.Calt))]):e._e(),e.CountReg>=4?a("p",[e._v("D: "+e._s(e.Dalt))]):e._e(),e.CountReg>=5?a("p",[e._v("E: "+e._s(e.Ealt))]):e._e(),e.CountReg>=6?a("p",[e._v("F: "+e._s(e.Falt))]):e._e(),e.CountReg>=7?a("p",[e._v("G: "+e._s(e.Galt))]):e._e()]),a("div",{staticClass:"descBlock"},[a("p",{staticStyle:{"margin-left":"8px"}},[e._v("INSTRUÇÕES")]),a("hr"),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.valueInst,expression:"valueInst"}],staticStyle:{"text-align":"left"},attrs:{placeholder:"id: condição/operação variável ex:           1: se zero_b então vá_para9 senão vá_para2"},domProps:{value:e.valueInst},on:{input:function(t){t.target.composing||(e.valueInst=t.target.value)}}}),a("br"),e._m(2),a("input",{ref:"myFile",attrs:{id:"uploadBtn",type:"file"},on:{change:e.uploadArquivo}}),0==e.isTxt?a("p",{staticStyle:{color:"red","font-size":"20"}},[a("b",[e._v("Erro:")]),e._v(" Apenas permitidos arquivos com extensão .txt")]):e._e(),e._m(3)]),a("br"),a("button",{staticClass:"func1Btn",on:{click:function(t){return e.testInst()}}},[a("i",{staticClass:"far fa-play-circle"}),e._v(" Começar")]),a("div",{staticClass:"logResultado"},[a("h1",{staticStyle:{"font-size":"20px"}},[e._v("Histórico/Log:")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.logVal,expression:"logVal"}],attrs:{readonly:"",placeholder:"Log..."},domProps:{value:e.logVal},on:{input:function(t){t.target.composing||(e.logVal=t.target.value)}}})])])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"uploadBtnReg"}},[a("i",{staticClass:"fas fa-upload"}),e._v("Selecionar um arquivo")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("b",[e._v("Registros inseridos:")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"uploadBtn"}},[a("i",{staticClass:"fas fa-upload"}),e._v("Selecionar um arquivo")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticStyle:{"background-color":"#1f1f1f"}},[a("b",[e._v("Digitar no layout: ")]),a("br"),e._v(" 1: se zero_b então vá_para9 senão vá_para2 "),a("br"),e._v(" 2: faça ad_a vá_para3 "),a("br"),e._v(" 3: faça ad_a vá_para4 "),a("br"),e._v(" 4: faça sub_b vá_para1 ")])}],_=a("9b8f"),l=_["a"],u=(a("272b"),a("2877")),c=Object(u["a"])(l,i,o,!1,null,"409434f7",null),p=c.exports,d={name:"App",components:{Norma:p}},v=d,f=(a("034f"),a("6f42"),Object(u["a"])(v,n,s,!1,null,"48e9588f",null)),m=f.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(m)}}).$mount("#app")},"6f42":function(e,t,a){"use strict";a("2f3e")},"85ec":function(e,t,a){},"9b8f":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("ac1f"),core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("1276"),core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("caad"),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("2532"),core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("498a"),core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_4__);__webpack_exports__["a"]={name:"Norma",data:function(){return{A:0,B:0,C:0,D:0,E:0,F:0,G:0,Aalt:0,Balt:0,Calt:0,Dalt:0,Ealt:0,Falt:0,Galt:0,showHelp:!1,handleReg:[],isLtr:null,isTxt:null,isTxtReg:null,valueInst:null,logVal:[],index:0,CountReg:2,Resultado:null}},methods:{uploadArquivoReg:function(){var e=this,t=this.$refs.myFileReg.files[0];if(t&&"text/plain"===t.type){this.isTxtReg=!0;var a=new FileReader;a.readAsText(t,"UTF-8"),a.onload=function(t){e.handleReg=t.target.result;var a=[];a=e.handleReg.split("\n"),console.log(a);for(var r=0;r<a.length;r++)a[r].includes("reg=")&&(e.CountReg=a[r].substring(a[r].indexOf("reg=")+4)),a[r].includes("A=")&&(e.Aalt=a[r].substring(a[r].indexOf("A=")+2)),a[r].includes("B=")&&(e.Balt=0,e.Balt=a[r].substring(a[r].indexOf("B=")+2)),a[r].includes("C=")&&(e.Calt=a[r].substring(a[r].indexOf("C=")+2)),a[r].includes("D=")&&(e.Dalt=a[r].substring(a[r].indexOf("D=")+2)),a[r].includes("E=")&&(e.Ealt=a[r].substring(a[r].indexOf("E=")+2)),a[r].includes("F=")&&(e.Falt=a[r].substring(a[r].indexOf("F=")+2)),a[r].includes("G=")&&(e.Galt=a[r].substring(a[r].indexOf("G=")+2))},a.onerror=function(e){console.error(e)}}else this.isTxtReg=!1},uploadArquivo:function(){var e=this,t=this.$refs.myFile.files[0];if(t&&"text/plain"===t.type){this.isTxt=!0;var a=new FileReader;a.readAsText(t,"UTF-8"),a.onload=function(t){e.valueInst=t.target.result},a.onerror=function(e){console.error(e)}}else this.isTxt=!1},isNumber:function(e){e=e||window.event;var t=e.which?e.which:e.keyCode;45==(t>31&&(t<48||t>57))?(this.isLtr=!0,e.preventDefault()):this.isLtr=!1},testInst:function testInst(){this.A=this.Aalt,this.B=this.Balt,this.logVal=[],this.index=0;var arr=[];arr=this.valueInst.split("\n");var x=0;do{if(arr[x].includes("faça")){if(arr[x].includes("ad_")){var pivot=arr[x].substring(arr[x].indexOf("ad_")+3,arr[x].indexOf("v")-1).toUpperCase();console.log(eval("this.".concat(pivot,"++"))),console.log("Letra:"+pivot+" Val:"+eval("this.".concat(pivot))),this.logVal[this.index++]="\n("+this.index+", ID:"+(x+1)+" A: "+this.A+" B: "+this.B+")",arr[x].includes("vá_para")&&(x=arr[x].split(" ").pop().trim().substr(-1)-1)}else if(arr[x].includes("sub_")){var _pivot=arr[x].substring(arr[x].indexOf("sub_")+4,arr[x].indexOf("v")-1).toUpperCase();console.log(eval("this.".concat(_pivot,"--"))),console.log("Letra:"+_pivot+" Val:"+eval("this.".concat(_pivot))),0==eval("this.".concat(_pivot))?this.logVal[this.index++]="\n("+this.index+", ID:Final A: "+this.A+" B: "+this.B+")":this.logVal[this.index++]="\n("+this.index+", ID:"+(x+1)+" A: "+this.A+" B: "+this.B+")",arr[x].includes("vá_para")&&(x=arr[x].split(" ").pop().trim().substr(-1)-1)}}else if(arr[x].includes("se")&&arr[x].substring(arr[x].indexOf("zero_")+5,arr[x].indexOf("então")-1)){var _pivot2=void 0;_pivot2=arr[x].substring(arr[x].indexOf("zero_")+5,arr[x].indexOf("então")-1).toUpperCase(),0==eval("this.".concat(_pivot2))?arr[x].includes("vá_para")&&(this.logVal[this.index++]="\n("+this.index+", ID:"+arr[x].substring(arr[x].indexOf("vá_para")+7,arr[x].indexOf("senão")-1)+" A: "+eval("this.".concat(_pivot2))+" "+_pivot2+" "+eval("this.".concat(_pivot2))+")"):arr[x].includes("vá_para")&&(x=arr[x].split(" ").pop().trim().substr(-1)-1)}}while(0!=this.B)},func1:function(){do{this.func2()}while(this.B>0);this.logVal[this.index++]="\n"+this.index+": (9, A:"+this.A+" B:"+this.B+")"},func4:function(){this.B--,this.logVal[this.index++]="\n"+this.index+": (4, A:"+this.A+" B:"+this.B+")"},func3:function(){this.A++,this.logVal[this.index++]="\n"+this.index+": (3, A:"+this.A+" B:"+this.B+")",this.func4()},func2:function(){this.A++,this.logVal[this.index++]="\n"+this.index+": (2, A:"+this.A+" B:"+this.B+")",this.func3()}}}},b835:function(e,t,a){e.exports=a.p+"img/LOGO-UNISC.e7f49688.png"}});
//# sourceMappingURL=app.271c317f.js.map