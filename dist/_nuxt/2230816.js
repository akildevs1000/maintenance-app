(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{689:function(e,t,n){"use strict";n.r(t);var l=n(131),o=(n(32),n(34),n(291),{props:{label:{default:"Upload your attachment",type:String},name:{default:"Photo",type:String},color:{default:"purple",type:String},validationMessage:{default:"Item not found",type:String},rule:{default:!0}},data:function(){return{isFileSelect:!1,preview:null,currentComponent:null,viewFileSrc:"",newDialogKey:1,imageSize:null}},methods:{clearImage:function(){this.preview=null,this.isFileSelect=!1,this.$refs.fileInput.value=""},triggerFileInput:function(){this.rule?this.$refs.fileInput.click():alert(this.validationMessage)},handleFileInputChange:function(e){var t=this,n=e.target.files[0];if(console.log(n),n){this.isFileSelect=!0;var l=new FileReader;l.readAsDataURL(n),l.onload=function(e){var img=new Image;img.src=e.target.result,img.onload=function(){var canvas=document.createElement("canvas"),e=canvas.getContext("2d");canvas.width=img.width,canvas.height=img.height,e.drawImage(img,0,0),canvas.toBlob((function(e){var l=new File([e],n.name,{type:"image/jpeg",lastModified:Date.now()}),o=new FileReader;o.readAsDataURL(l),o.onload=function(e){var n=e.target.result;t.preview=n;var o=(l.size/1024).toFixed(2);t.imageSize="(".concat(o," KB)"),t.$emit("file-preview",n),t.$emit("file-selected",n),++t.newDialogKey,t.currentComponent="WidgetsViewTempFile"}}),"image/jpeg",.3)}}}else this.isFileSelect=!1}}}),r=n(91),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("span",[t("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file"},on:{change:e.handleFileInputChange}}),e._v(" "),e.isFileSelect?t(l.a,{attrs:{color:"red","x-small":""},on:{click:e.clearImage}},[e._v("mdi-close")]):e._e(),e._v(" "),e.isFileSelect?t("span",[t(e.currentComponent,{key:e.newDialogKey,tag:"component",attrs:{label:"".concat(e.name," ").concat(e.imageSize),icon:"mdi-eye-outline",src:e.preview}})],1):t(l.a,{attrs:{small:"",color:e.color},on:{click:e.triggerFileInput}},[e._v("mdi-camera-outline")])],1)}),[],!1,null,null,null);t.default=component.exports}}]);