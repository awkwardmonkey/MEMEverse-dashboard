(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fc9213f"],{"2db4":function(t,e,i){"use strict";i("caad"),i("a9e3");var o=i("ade3"),n=(i("ca71"),i("8dd9")),a=i("a9ad"),s=i("7560"),r=i("f2e7"),c=i("fe6c"),l=i("58df"),d=i("80d2"),m=i("d9bd");e["a"]=Object(l["a"])(n["a"],a["a"],r["a"],Object(c["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"===typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:s["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,i=t.bottom,o=t.footer,n=t.insetFooter,a=t.left,s=t.right,r=t.top;return{paddingBottom:Object(d["g"])(i+o+n),paddingLeft:this.app?Object(d["g"])(a):void 0,paddingRight:this.app?Object(d["g"])(s):void 0,paddingTop:Object(d["g"])(e+r)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(m["e"])("auto-height",this),0==this.timeout&&Object(m["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(d["r"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(o["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(d["r"])(this)])},genWrapper:function(){var t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:n["a"].options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}]});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},ae79:function(t,e,i){"use strict";i.r(e);var o,n,a,s,r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{id:"inspire"}},[i("v-main",[i("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{cols:"4"}},[i("RegisterDomain")],1),i("v-col",{attrs:{cols:"6"}},[i("DomainList")],1)],1)],1)],1)],1)},c=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.domains,loading:t.domainDataTableLoading,search:t.search,"sort-by":"user"},on:{"click:row":t.rowClicked},scopedSlots:t._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[t._v("Domains")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-spacer"),i("v-text-field",{staticClass:"mt-7 mx-2",attrs:{solo:"",label:"Search",clearable:""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),i("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({attrs:{color:"primary",small:"",fab:""},on:{click:function(e){return t.retrieveDomainList()}}},"v-btn",n,!1),o),[i("v-icon",[t._v(" mdi-refresh ")])],1)]}}])},[i("span",[t._v("Refresh Domain List")])]),i("v-dialog",{attrs:{width:"500",color:"primary"},model:{value:t.domainDialogShow,callback:function(e){t.domainDialogShow=e},expression:"domainDialogShow"}},[i("v-card",[i("v-card-title",[t._v(" "+t._s(t.domainDialog.name)+" ")]),i("v-card-text",{staticClass:"text-left"},[i("v-list",{staticClass:"transparent"},[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Domain Name ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.name)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Users ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.users)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Ice Server ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.iceServer)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Domain ID ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.domainID)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Owner Account ID ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.sponsorAccountId)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Protocol ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.protocol)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[t._v(" Version ")]),i("v-list-item-subtitle",[t._v(" "+t._s(t.domainDialog.version)+" ")])],1)],1),i("v-list-item",[i("v-expansion-panels",[i("v-expansion-panel",[i("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},scopedSlots:t._u([{key:"actions",fn:function(){return[i("v-icon",{attrs:{color:"primary"}},[t._v("mdi-information-variant")])]},proxy:!0}])},[t._v(" Public Key ")]),i("v-expansion-panel-content",[t._v(" "+t._s(t.domainDialog.publicKey)+" ")])],1)],1)],1)],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var o=e.item;return[i("v-tooltip",{attrs:{right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-icon",t._g(t._b({attrs:{small:"",color:"red",disabled:!t.canEditDomain(o.sponsorAccountId)},on:{click:function(e){return e.stopPropagation(),t.deleteDomain(o.domainID,o.name)}}},"v-icon",a,!1),n),[t._v(" mdi-delete-alert ")])]}}],null,!0)},[i("span",[t._v("Delete Domain")])])]}},{key:"item.images",fn:function(t){var e=t.item;return[i("v-avatar",[i("img",{attrs:{src:e.images.thumbnail}})])]}}])})},d=[],m=(i("4160"),i("b0c0"),i("159b"),i("ade3")),u=(i("8552"),o={name:"DomainList",props:{source:String},data:function(){return{dialog:!1,headers:[{text:"Domain Name",align:"start",sortable:!0,value:"name"},{text:"Version",value:"version"},{text:"Users",value:"users"},{text:"Actions",value:"actions",sortable:!1}],domainDataTableLoading:!1,domainDialogShow:!1,domainDialog:{name:"",users:"",domainID:"",version:"",protocol:"",publicKey:"",iceServer:"",sponsorAccountId:"",networkingMode:""},search:null,editingDomain:null,domains:[]}},computed:{},watch:{},created:function(){n=this,a=this.$store.state,s=a.metaverseConfig.server,this.initialize()}},Object(m["a"])(o,"computed",{}),Object(m["a"])(o,"methods",{initialize:function(){this.retrieveDomainList()},rowClicked:function(t){this.domainDialogShow=!0,this.domainDialog.name=t.name,this.domainDialog.domainID=t.domainID,this.domainDialog.version=t.version,this.domainDialog.protocol=t.protocol,this.domainDialog.publicKey=t.publicKey,this.domainDialog.iceServer=t.iceServer,this.domainDialog.sponsorAccountId=t.sponsorAccountId,this.domainDialog.networkingMode=t.networkingMode,this.domainDialog.users=t.users},canEditDomain:function(t){return a.account.useAsAdmin||a.account.accountId===t},beginEditingDomain:function(t){this.editingDomain=t},savePlaceName:function(t){this.postUpdateDomain(this.editingDomain,{place_name:t})},deleteDomain:function(t,e){confirm("Are you sure you want to delete "+e+"?")&&this.postDeleteDomain(t)},retrieveDomainList:function(){var t=window.$.param({asAdmin:a.account.useAsAdmin});t="?"+t,this.domainDataTableLoading=!0,window.$.ajax({type:"GET",url:s+"/api/v1/domains"+t,contentType:"application/json"}).done((function(t){n.domainDataTableLoading=!1,n.domains=[],t.data.domains.forEach((function(t,e){n.domains.push({name:t.name,domainID:t.domainId,users:t.total_users,protocol:t.protocol_version,publicKey:t.public_key,version:t.version,iceServer:t.ice_server_address,sponsorAccountId:t.sponsor_account_id,networkingMode:t.networking_mode})}))})).fail((function(t){console.info("Failed to retrieve domain list: ",t),n.domainDataTableLoading=!1,n.$store.commit("mutate",{property:"error",with:{title:"Failed to retrieve domain list.",code:"2",full:t.responseJSON.error}}),n.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0})}))},postUpdateDomain:function(t,e){var i=window.$.param({asAdmin:a.account.useAsAdmin});i="?"+i,window.$.ajax({type:"POST",url:s+"/api/v1/domains/"+t+i,contentType:"application/json",data:{domain:{dataToUpdate:e}}}).done((function(e){console.info("Successfully updated domain:",t),n.retrieveDomainList()})).fail((function(e){console.info("Failed to update domain:",t),n.$store.commit("mutate",{property:"error",with:{title:"Failed to update domain:"+t,code:"3",full:e.responseJSON.error}}),n.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0}),n.retrieveDomainList()}))},postDeleteDomain:function(t){var e=window.$.param({asAdmin:a.account.useAsAdmin});e="?"+e,window.$.ajax({type:"DELETE",url:s+"/api/v1/domains/"+t+e}).done((function(e){console.info("Successfully deleted domain:",t),n.retrieveDomainList()})).fail((function(e){console.info("Failed to delete domain:",t),n.$store.commit("mutate",{property:"error",with:{title:"Failed to delete domain:"+t,code:"3",full:e.responseJSON.error}}),n.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0}),n.retrieveDomainList()}))}}),o),v=u,p=i("2877"),h=i("6544"),f=i.n(h),g=i("8212"),b=i("8336"),k=i("b0af"),D=i("99d9"),_=i("8fea"),w=i("169a"),T=i("ce7e"),y=i("cd55"),S=i("49e2"),x=i("c865"),C=i("0393"),V=i("132d"),A=i("8860"),O=i("da13"),L=i("5d23"),E=i("2fa4"),I=i("8654"),j=i("71d9"),$=i("2a7f"),B=i("3a2f"),P=Object(p["a"])(v,l,d,!1,null,null,null),N=P.exports;f()(P,{VAvatar:g["a"],VBtn:b["a"],VCard:k["a"],VCardText:D["b"],VCardTitle:D["c"],VDataTable:_["a"],VDialog:w["a"],VDivider:T["a"],VExpansionPanel:y["a"],VExpansionPanelContent:S["a"],VExpansionPanelHeader:x["a"],VExpansionPanels:C["a"],VIcon:V["a"],VList:A["a"],VListItem:O["a"],VListItemContent:L["a"],VListItemSubtitle:L["b"],VListItemTitle:L["c"],VSpacer:E["a"],VTextField:I["a"],VToolbar:j["a"],VToolbarTitle:$["a"],VTooltip:B["a"]});var F,G,J,K,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-list-item",{staticClass:"mb-4",attrs:{"three-line":""}},[i("v-list-item-content",[i("v-list-item-title",{staticClass:"headline mb-4"},[t._v(" Register A Domain ")]),i("v-list-item-subtitle",[t._v(" Use the access token that is generated to allow your domain server to log in to the metaverse. ")])],1)],1),i("v-list-item",{staticClass:"mb-4"},[i("p",{staticClass:"overline text-center mt-4",staticStyle:{width:"100%","font-size":"1.0rem !important"},attrs:{id:"generatedToken"},domProps:{textContent:t._s(t.generatedToken)}}),i("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({directives:[{name:"show",rawName:"v-show",value:t.generatedToken,expression:"generatedToken"}],attrs:{color:"input",small:"",fab:""},on:{click:t.copyGeneratedToken}},"v-btn",n,!1),o),[i("v-icon",[t._v("mdi-content-copy")])],1)]}}])},[i("span",[t._v("Copy")])])],1),i("v-list-item-subtitle",{domProps:{textContent:t._s(t.generatedTokenText)}}),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{rounded:"",color:"input"},on:{click:function(e){return t.postGenerateDomainToken()}}},[t._v(" Generate ")])],1),i("v-snackbar",{attrs:{color:"success"},scopedSlots:t._u([{key:"action",fn:function(e){var o=e.attrs;return[i("v-btn",t._b({attrs:{text:""},on:{click:function(e){t.copiedToClipboardSnackbar=!1}}},"v-btn",o,!1),[t._v(" Close ")])]}}]),model:{value:t.copiedToClipboardSnackbar,callback:function(e){t.copiedToClipboardSnackbar=e},expression:"copiedToClipboardSnackbar"}},[t._v(" Copied to clipboard. ")])],1)},U=[],z=(F={name:"DomainList",props:{source:String},data:function(){return{generatedToken:null,generatedTokenText:'Click "Generate" to create a token.',copiedToClipboardSnackbar:!1}},computed:{},watch:{},created:function(){G=this,J=this.$store.state,K=J.metaverseConfig.server,this.initialize()}},Object(m["a"])(F,"computed",{}),Object(m["a"])(F,"methods",{initialize:function(){},copyGeneratedToken:function(){navigator.clipboard.writeText(this.generatedToken),this.copiedToClipboardSnackbar=!0},postGenerateDomainToken:function(){var t=window.$.param({asAdmin:J.account.useAsAdmin,scope:"domain"});t="?"+t,window.$.ajax({type:"POST",url:K+"/api/v1/token/new"+t,contentType:"application/json"}).done((function(t){console.info("Successfully generated token:",t),G.generatedToken=t.data.token,G.generatedTokenText="Paste this token into your domain server."})).fail((function(t){console.info("Failed to generate token:",t),G.generatedToken=t.responseJSON.error,G.generatedTokenText="",G.$store.commit("mutate",{property:"error",with:{title:"Failed to generate token",code:"3",full:t.responseJSON.error}}),G.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0})}))}}),F),M=z,W=i("2db4"),H=Object(p["a"])(M,R,U,!1,null,null,null),q=H.exports;f()(H,{VBtn:b["a"],VCard:k["a"],VCardActions:D["a"],VIcon:V["a"],VListItem:O["a"],VListItemContent:L["a"],VListItemSubtitle:L["b"],VListItemTitle:L["c"],VSnackbar:W["a"],VSpacer:E["a"],VTooltip:B["a"]});var Q={name:"Domain",props:{source:String},components:{DomainList:N,RegisterDomain:q}},X=Q,Y=i("7496"),Z=i("62ad"),tt=i("a523"),et=i("f6c4"),it=i("0fd9"),ot=Object(p["a"])(X,r,c,!1,null,null,null);e["default"]=ot.exports;f()(ot,{VApp:Y["a"],VCol:Z["a"],VContainer:tt["a"],VMain:et["a"],VRow:it["a"]})},ca71:function(t,e,i){}}]);
//# sourceMappingURL=chunk-1fc9213f.0b162ac0.js.map