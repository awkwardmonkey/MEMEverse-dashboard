(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60d6cc0d"],{1681:function(e,t,i){},"2bfd":function(e,t,i){},"2db4":function(e,t,i){"use strict";i("caad"),i("a9e3");var a=i("ade3"),n=(i("ca71"),i("8dd9")),s=i("a9ad"),o=i("7560"),l=i("f2e7"),c=i("fe6c"),r=i("58df"),d=i("80d2"),u=i("d9bd");t["a"]=Object(r["a"])(n["a"],s["a"],l["a"],Object(c["b"])(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(e){return"string"===typeof e||!1===e}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:o["a"].options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var e=this.$vuetify.application,t=e.bar,i=e.bottom,a=e.footer,n=e.insetFooter,s=e.left,o=e.right,l=e.top;return{paddingBottom:Object(d["g"])(i+a+n),paddingLeft:this.app?Object(d["g"])(s):void 0,paddingRight:this.app?Object(d["g"])(o):void 0,paddingTop:Object(d["g"])(t+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(u["e"])("auto-height",this),0==this.timeout&&Object(u["d"])('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(d["r"])(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(a["a"])({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(d["r"])(this)])},genWrapper:function(){var e=this.hasBackground?this.setBackgroundColor:this.setTextColor,t=e(this.color,{staticClass:"v-snack__wrapper",class:n["a"].options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}]});return this.$createElement("div",t,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var e=this;window.clearTimeout(this.activeTimeout);var t=Number(this.timeout);this.isActive&&![0,-1].includes(t)&&(this.activeTimeout=window.setTimeout((function(){e.isActive=!1}),t))}},render:function(e){return e("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})},"4bd4":function(e,t,i){"use strict";i("4de4"),i("7db0"),i("4160"),i("caad"),i("07ac"),i("2532"),i("159b");var a=i("5530"),n=i("58df"),s=i("7e2b"),o=i("3206");t["a"]=Object(n["a"])(s["a"],Object(o["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,i=function(e){return e.$watch("hasError",(function(i){t.$set(t.errorBag,e._uid,i)}),{immediate:!0})},a={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=e.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(e._uid)||(a.valid=i(e)))})):a.valid=i(e),a},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var i=this.watchers.find((function(e){return e._uid===t._uid}));i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:Object(a["a"])({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},a844:function(e,t,i){"use strict";i("a9e3");var a=i("5530"),n=(i("1681"),i("8654")),s=i("58df"),o=Object(s["a"])(n["a"]);t["a"]=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return Object(a["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},n["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var e=this.$refs.input;if(e){e.style.height="0";var t=e.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(i,t)+"px"}},genInput:function(){var e=n["a"].options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput:function(e){n["a"].options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},ca71:function(e,t,i){},d377:function(e,t,i){"use strict";i.r(t);var a,n,s,o,l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",{attrs:{id:"inspire"}},[i("v-main",[i("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[i("v-row",{attrs:{align:"center",justify:"center"}},[i("PlacesList")],1)],1)],1)],1)},c=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.places,loading:e.placesDataTableLoading,search:e.search,"sort-by":"domain"},on:{"click:row":e.rowClicked},scopedSlots:e._u([{key:"top",fn:function(){return[i("v-toolbar",{attrs:{flat:""}},[i("v-toolbar-title",[e._v("Places")]),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),i("v-switch",{staticClass:"mt-5",attrs:{row:"",color:"input",label:"Show Only Mine"},model:{value:e.showOnlyMineStore,callback:function(t){e.showOnlyMineStore=t},expression:"showOnlyMineStore"}}),i("v-spacer"),i("v-text-field",{staticClass:"mt-7 mx-2",attrs:{solo:"",label:"Search",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),i("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,n=t.attrs;return[i("v-btn",e._g(e._b({attrs:{color:"primary",small:"",fab:""},on:{click:function(t){return e.showAddPlaceDialog()}}},"v-btn",n,!1),a),[i("v-icon",[e._v(" mdi-map-marker-plus ")])],1)]}}])},[i("span",[e._v("Create Place")])]),i("v-dialog",{attrs:{width:"500",color:"primary"},model:{value:e.placeDialogShow,callback:function(t){e.placeDialogShow=t},expression:"placeDialogShow"}},[i("v-card",[i("v-card-title",[e._v(" "+e._s(e.placeDialog.name)+" "),i("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "+e._s(e.placeDialog.domainUsers)+" users "),i("v-spacer"),i("v-tooltip",{attrs:{left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,n=t.attrs;return[i("v-btn",e._g(e._b({attrs:{color:"primary",small:"",fab:"",disabled:!e.canEditPlace(e.placeDialog.accountID)},on:{click:e.togglePlaceEditMode}},"v-btn",n,!1),a),[i("v-icon",{domProps:{textContent:e._s(e.placeEditMode?"mdi-image-text":"mdi-home-edit")}})],1)]}}])},[i("span",{domProps:{textContent:e._s(e.placeEditMode?"View":"Edit")}})])],1),i("v-scroll-x-transition",{attrs:{"hide-on-leave":!0}},[i("v-card-text",{directives:[{name:"show",rawName:"v-show",value:!e.placeEditMode,expression:"!placeEditMode"}],staticClass:"text-left",attrs:{transition:"scroll-x-transition"}},[i("v-list",{staticClass:"transparent"},[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[e._v(" Place Name ")]),i("v-list-item-subtitle",[e._v(" "+e._s(e.placeDialog.name)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[e._v(" Description ")]),i("v-list-item-subtitle",[e._v(" "+e._s(e.placeDialog.description)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[e._v(" Address ")]),i("v-list-item-subtitle",[e._v(" "+e._s(e.placeDialog.address)+" ")])],1)],1),i("v-list-item",[i("v-expansion-panels",[i("v-expansion-panel",[i("v-expansion-panel-header",{attrs:{"disable-icon-rotate":""},scopedSlots:e._u([{key:"actions",fn:function(){return[i("v-icon",{attrs:{color:"primary"}},[e._v("mdi-information-variant")])]},proxy:!0}])},[e._v(" Domain ")]),i("v-expansion-panel-content",[i("v-list",[i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[e._v(" Domain ID ")]),i("v-list-item-subtitle",[e._v(" "+e._s(e.placeDialog.domainID)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[e._v(" Domain Name ")]),i("v-list-item-subtitle",[e._v(" "+e._s(e.placeDialog.domainName)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[e._v(" Domain Network Address ")]),i("v-list-item-subtitle",[e._v(" "+e._s(e.placeDialog.domainNetworkAddress)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[e._v(" Domain Ice Server ")]),i("v-list-item-subtitle",[e._v(" "+e._s(e.placeDialog.domainID)+" ")])],1)],1),i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",[e._v(" Domain Last Checked In ")]),i("v-list-item-subtitle",[e._v(" "+e._s(e.placeDialog.domainLastSeen)+" ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1),i("v-scroll-x-reverse-transition",{attrs:{"hide-on-leave":!0}},[i("v-card-text",{directives:[{name:"show",rawName:"v-show",value:e.placeEditMode,expression:"placeEditMode"}],staticClass:"text-left"},[i("v-form",{ref:"editPlace.name"},[i("v-text-field",{attrs:{label:"Place Name",name:"editPlace.name","prepend-icon":"mdi-rename-box","append-icon":"mdi-content-save-outline",type:"text",rules:e.editPlace.nameRules,loading:e.editPlace.nameLoading,color:"input"},on:{"click:append":function(t){return e.postUpdatePlace(e.placeDialog.placeID,"name",e.editPlace.name)}},model:{value:e.editPlace.name,callback:function(t){e.$set(e.editPlace,"name",t)},expression:"editPlace.name"}})],1),i("v-form",{ref:"editPlace.description"},[i("v-textarea",{attrs:{label:"Description",name:"editPlace.description","prepend-icon":"mdi-image-text","append-icon":"mdi-content-save-outline",type:"text",rules:e.editPlace.descriptionRules,loading:e.editPlace.descriptionLoading,color:"input"},on:{"click:append":function(t){return e.postUpdatePlace(e.placeDialog.placeID,"description",e.editPlace.description)}},model:{value:e.editPlace.description,callback:function(t){e.$set(e.editPlace,"description",t)},expression:"editPlace.description"}})],1),i("v-form",{ref:"editPlace.address"},[i("v-text-field",{attrs:{label:"Address ( /x,y,z/x,y,z,w )",name:"editPlace.address","prepend-icon":"mdi-compass-outline","append-icon":"mdi-content-save-outline",type:"text",rules:e.editPlace.addressRules,loading:e.editPlace.addressLoading,color:"input"},on:{"click:append":function(t){return e.postUpdatePlace(e.placeDialog.placeID,"address",e.editPlace.address)}},model:{value:e.editPlace.address,callback:function(t){e.$set(e.editPlace,"address",t)},expression:"editPlace.address"}})],1)],1)],1)],1)],1),i("v-dialog",{attrs:{width:"500",color:"primary"},model:{value:e.addPlaceDialogShow,callback:function(t){e.addPlaceDialogShow=t},expression:"addPlaceDialogShow"}},[i("v-card",[i("v-card-title",[e._v(" Add Place ")]),i("v-card-text",[i("v-form",{ref:"addPlaceForm"},[i("v-text-field",{attrs:{label:"Place Name",name:"name","prepend-icon":"mdi-rename-box",type:"text",rules:e.addPlaceDialog.nameRules,color:"input"},model:{value:e.addPlaceDialog.name,callback:function(t){e.$set(e.addPlaceDialog,"name",t)},expression:"addPlaceDialog.name"}}),i("v-textarea",{attrs:{label:"Description",name:"description","prepend-icon":"mdi-image-text",type:"text",rules:e.addPlaceDialog.descriptionRules,color:"input"},model:{value:e.addPlaceDialog.description,callback:function(t){e.$set(e.addPlaceDialog,"description",t)},expression:"addPlaceDialog.description"}}),i("v-text-field",{attrs:{label:"Location & Orientation ( /x,y,z/x,y,z,w )",placeholder:"/0,0,0/0,0,0,1",name:"address","prepend-icon":"mdi-compass-outline",type:"text",rules:e.addPlaceDialog.addressRules,color:"input"},model:{value:e.addPlaceDialog.address,callback:function(t){e.$set(e.addPlaceDialog,"address",t)},expression:"addPlaceDialog.address"}}),i("v-autocomplete",{attrs:{"prepend-icon":"mdi-earth",items:e.domains,filled:"",chips:"",label:"Assign to Domain","item-text":"name","item-value":"domainID",filter:e.placeDialogFilter,rules:e.addPlaceDialog.domainIDRules,color:"input"},scopedSlots:e._u([{key:"item",fn:function(t){return[[i("v-list-item-content",[""!==t.item.name?i("v-list-item-title",{domProps:{innerHTML:e._s(t.item.name)}}):i("v-list-item-title",[e._v(" Unknown ")]),i("v-list-item-subtitle",{domProps:{innerHTML:e._s(t.item.domainID)}}),i("v-list-item-subtitle",{domProps:{innerHTML:e._s(t.item.created)}})],1)]]}},{key:"selection",fn:function(t){return[i("v-chip",e._b({attrs:{"input-value":t.selected}},"v-chip",t.attrs,!1),[""!==t.item.name?i("span",[e._v(e._s(t.item.name))]):i("span",[e._v(e._s(t.item.domainID))])])]}}]),model:{value:e.addPlaceDialog.domainID,callback:function(t){e.$set(e.addPlaceDialog,"domainID",t)},expression:"addPlaceDialog.domainID"}})],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"primary"},on:{click:e.postAddPlace}},[e._v(" Create ")])],1)],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(t){var a=t.item;return[i("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on,s=t.attrs;return[i("v-icon",e._g(e._b({attrs:{small:"",color:"red",disabled:!e.canEditPlace(a.accountID)},on:{click:function(t){return t.stopPropagation(),e.deletePlace(a.placeID,a.name)}}},"v-icon",s,!1),n),[e._v(" mdi-delete-alert ")])]}}],null,!0)},[i("span",[e._v("Delete Place")])])]}},{key:"item.images",fn:function(e){var t=e.item;return[i("v-avatar",[i("img",{attrs:{src:t.images.thumbnail}})])]}}])}),i("v-snackbar",{attrs:{timeout:e.snackbarSuccessTimeout,color:"success"},scopedSlots:e._u([{key:"action",fn:function(t){var a=t.attrs;return[i("v-btn",e._b({attrs:{color:"white",text:""},on:{click:function(t){e.snackbarSuccessShow=!1}}},"v-btn",a,!1),[e._v(" Close ")])]}}]),model:{value:e.snackbarSuccessShow,callback:function(t){e.snackbarSuccessShow=t},expression:"snackbarSuccessShow"}},[e._v(" "+e._s(e.snackbarSuccessText)+" ")])],1)},d=[],u=(i("a4d3"),i("e01a"),i("4160"),i("c975"),i("b0c0"),i("159b"),i("ade3")),h=i("8552"),p=(a={name:"PlacesList",props:{source:String},data:function(){return{dialog:!1,headers:[{text:"Place Name",align:"start",sortable:!0,value:"name"},{text:"Users",value:"domainUsers"},{text:"Actions",value:"actions",sortable:!1}],search:null,placesDataTableLoading:!1,placeDialogShow:!1,placeDialog:{name:null,placeID:null,address:null,description:null,accountID:null,thumbnail:null,images:null,domainID:null,domainName:null,domainNetworkAddress:null,domainIceServer:null,domainLastSeen:null,domainUsers:null},placeEditMode:!1,editPlace:{name:"",nameRules:[function(e){return!!e||"A place name is required."}],nameLoading:!1,address:"",addressRules:[function(e){return!!e||"A place address is required."}],addressLoading:!1,description:"",descriptionRules:[function(e){return!!e||"A place description is required."}],descriptionLoading:!1},addPlaceDialogShow:!1,addPlaceDialog:{name:null,nameRules:[function(e){return!!e||"A place name is required."}],description:null,descriptionRules:[function(e){return!!e||"A description is required."}],address:"/0,0,0/0,0,0,0",addressRules:[function(e){return!!e||"An address is required."}],domainID:null,domainIDRules:[function(e){return!!e||"A domain to assign this place to is required."}]},editingPlace:null,places:[],domains:[],snackbarSuccessShow:!1,snackbarSuccessText:"Success.",snackbarSuccessTimeout:6e3}},computed:{},watch:{showOnlyMineStore:{handler:function(){this.retrievePlacesList(o)}}},created:function(){n=this,s=this.$store.state,o=s.metaverseConfig.server,this.initialize()}},Object(u["a"])(a,"computed",{showOnlyMineStore:{get:function(){return this.$store.state.places.showOnlyMine},set:function(e){this.$store.commit("mutate",{update:!0,property:"places",with:{showOnlyMine:e}})}}}),Object(u["a"])(a,"methods",{sendEvent:function(e,t){h["a"].$emit(e,t)},initialize:function(){this.retrievePlacesList(o)},showAddPlaceDialog:function(){this.addPlaceDialogShow=!0,this.retrieveDomainList(o)},togglePlaceEditMode:function(){this.placeEditMode=!this.placeEditMode,!0===this.placeEditMode&&(this.editPlace.name=this.placeDialog.name,this.editPlace.description=this.placeDialog.description,this.editPlace.address=this.placeDialog.address)},placeDialogFilter:function(e,t){var i=e.name.toLowerCase(),a=e.domainID,n=t.toLowerCase();return i.indexOf(n)>-1||a.indexOf(n)>-1},rowClicked:function(e){this.placeEditMode=!1,this.placeDialogShow=!0,this.placeDialog.name=e.name,this.placeDialog.placeID=e.placeID,this.placeDialog.address=e.address,this.placeDialog.description=e.description,this.placeDialog.accountID=e.accountID,this.placeDialog.thumbanil=e.thumbanil,this.placeDialog.images=e.images,this.placeDialog.domainID=e.domainID,this.placeDialog.domainName=e.domainName,this.placeDialog.domainNetworkAddress=e.domainNetworkAddress,this.placeDialog.domainIceServer=e.domainIceServer,this.placeDialog.domainLastSeen=e.domainLastSeen,this.placeDialog.domainUsers=e.domainUsers},canEditPlace:function(e){return s.account.useAsAdmin||s.account.accountId===e},beginEditingPlace:function(e){this.editingPlace=e},deletePlace:function(e,t){confirm("Are you sure you want to delete "+t+"?")&&this.postDeletePlace(e)},retrievePlacesList:function(e){var t=window.$.param({asAdmin:s.account.useAsAdmin});t="?"+t,this.placesDataTableLoading=!0;var i="/api/v1/places";this.showOnlyMineStore&&(i="/api/v1/user/places"),window.$.ajax({type:"GET",url:e+i+t,contentType:"application/json"}).done((function(e){n.placesDataTableLoading=!1,n.places=[],e.data.places.forEach((function(e,t){var i={name:e.name,placeID:e.placeId,address:e.address,description:e.description,accountID:e.accountId,thumbnail:e.thumbanil,images:e.images};e.domain&&(i.domainID=e.domain.id,i.domainName=e.domain.name,i.domainNetworkAddress=e.domain.network_address,i.domainIceServer=e.domain.ice_server_address,i.domainLastSeen=e.domain.time_of_last_heartbeat,i.domainUsers=e.domain.num_users),n.places.push(i)}))})).fail((function(e){n.placesDataTableLoading=!1,console.info("Failed to retrieve places list: ",e),n.$store.commit("mutate",{property:"error",with:{title:"Failed to retrieve places list.",code:"2",full:e.responseJSON.error}}),n.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0})}))},retrieveDomainList:function(e){var t=window.$.param({asAdmin:s.account.useAsAdmin});t="?"+t,window.$.ajax({type:"GET",url:e+"/api/v1/domains"+t,contentType:"application/json"}).done((function(e){n.domains=[],e.data.domains.forEach((function(e,t){n.domains.push({name:e.name,domainID:e.domainId,created:e.when_domain_entry_created})}))})).fail((function(e){console.info("Failed to retrieve domain list: ",e)}))},postAddPlace:function(){if(this.$refs.addPlaceForm.validate()){this.addPlaceDialogShow=!1;var e={place:{name:n.addPlaceDialog.name,description:n.addPlaceDialog.description,address:n.addPlaceDialog.address,domainId:n.addPlaceDialog.domainID}},t=window.$.param({asAdmin:s.account.useAsAdmin});t="?"+t,window.$.ajax({type:"POST",url:o+"/api/v1/user/places"+t,contentType:"application/json",data:JSON.stringify(e)}).done((function(e){console.info("Add place successful."),n.snackbarSuccessText="Successfully created place.",n.snackbarSuccessShow=!0,n.$refs.addPlaceForm.reset(),n.retrievePlacesList(o)})).fail((function(e){console.info("Failed to add place:",e),n.$store.commit("mutate",{property:"error",with:{title:"Failed to add place "+n.addPlaceDialog.name,code:"3",full:e.responseJSON.error}}),n.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0}),n.retrievePlacesList(o)}))}},postUpdatePlace:function(e,t,i){var a=window.$.param({asAdmin:s.account.useAsAdmin});a="?"+a;var l={set:i};this.editPlace[t+"Loading"]=!0,window.$.ajax({type:"POST",url:o+"/api/v1/places/"+e+"/field/"+t+a,contentType:"application/json",data:JSON.stringify(l)}).done((function(a){console.info("Successfully updated place:",e),n.editPlace[t+"Loading"]=!1,n.placeDialog[t]=i,n.snackbarSuccessText="Successfully updated place.",n.snackbarSuccessShow=!0,n.retrievePlacesList(o)})).fail((function(i){console.info("Failed to update place:",e),n.editPlace[t+"Loading"]=!1,n.$store.commit("mutate",{property:"error",with:{title:"Failed to update place:"+e,code:"3",full:i.responseJSON.error}}),n.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0}),n.retrievePlacesList(o)}))},postDeletePlace:function(e){var t=window.$.param({asAdmin:s.account.useAsAdmin});t="?"+t,window.$.ajax({type:"DELETE",url:o+"/api/v1/user/places/"+e+t}).done((function(t){console.info("Successfully deleted place:",e),n.snackbarSuccessText="Successfully deleted place.",n.snackbarSuccessShow=!0,n.retrievePlacesList(o)})).fail((function(t){console.info("Failed to delete place:",e),n.$store.commit("mutate",{property:"error",with:{title:"Failed to delete place:"+e,code:"3",full:t.responseJSON.error}}),n.sendEvent("open-dialog",{which:"ErrorOccurred",shouldShow:!0}),n.retrievePlacesList(o)}))}}),a),m=p,v=i("2877"),f=i("6544"),g=i.n(f),b=(i("4de4"),i("7db0"),i("d81d"),i("45fc"),i("498a"),i("5530")),D=(i("2bfd"),i("b974")),w=i("8654"),S=i("d9f7"),I=i("80d2"),x=Object(b["a"])(Object(b["a"])({},D["b"]),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),P=D["a"].extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,i){return i.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:D["a"].options.props.menuProps.type,default:function(){return x}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(b["a"])(Object(b["a"])({},D["a"].options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var i=Object(I["q"])(t,e.itemText),a=null!=i?String(i):"";return e.filter(t,String(e.internalSearch),a)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch=e,this.$emit("update:search-input",e)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=D["a"].options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),Object(b["a"])(Object(b["a"])({},x),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(t){return e.valueComparator(e.getValue(t),e.getValue(e.internalValue))}))},listData:function(){var e=D["a"].options.computed.listData.call(this);return e.props=Object(b["a"])(Object(b["a"])({},e.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=void 0)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var i=this;e!==t&&(this.setMenuIndex(-1),this.$nextTick((function(){i.internalSearch&&(1===e.length||i.autoSelectFirst)&&(i.$refs.menu.getTiles(),i.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===I["w"].left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===I["w"].right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==I["w"].backspace&&e!==I["w"].delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var i=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===i){var a=this.selectedItems.length,n=e!==a-1?e:e-1,s=this.selectedItems[n];s?this.selectItem(t):this.setValue(this.multiple?[]:void 0),this.selectedIndex=n}else this.selectedIndex=i}},clearableCallback:function(){this.internalSearch=void 0,D["a"].options.methods.clearableCallback.call(this)},genInput:function(){var e=w["a"].options.methods.genInput.call(this);return e.data=Object(S["a"])(e.data,{attrs:{"aria-activedescendant":Object(I["o"])(this.$refs.menu,"activeTile.id"),autocomplete:Object(I["o"])(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot:function(){var e=D["a"].options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections:function(){return this.hasSlot||this.multiple?D["a"].options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,i=t.value;t.value&&this.activateMenu(),this.internalSearch=i,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;D["a"].options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){D["a"].options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){D["a"].options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){D["a"].options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){if(-1!==this.selectedIndex){var t=this.selectedItems[this.selectedIndex],i=this.getText(t);e.clipboardData.setData("text/plain",i),e.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",i),e.preventDefault()}}}}),y=i("8212"),_=i("8336"),k=i("b0af"),T=i("99d9"),O=i("cc20"),A=i("8fea"),C=i("169a"),V=i("ce7e"),$=i("cd55"),L=i("49e2"),E=i("c865"),j=i("0393"),M=i("4bd4"),N=i("132d"),F=i("8860"),B=i("da13"),R=i("5d23"),z=i("0789"),H=i("2db4"),U=i("2fa4"),G=i("b73d"),q=i("a844"),J=i("71d9"),K=i("2a7f"),W=i("3a2f"),X=Object(v["a"])(m,r,d,!1,null,null,null),Y=X.exports;g()(X,{VAutocomplete:P,VAvatar:y["a"],VBtn:_["a"],VCard:k["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:T["c"],VChip:O["a"],VDataTable:A["a"],VDialog:C["a"],VDivider:V["a"],VExpansionPanel:$["a"],VExpansionPanelContent:L["a"],VExpansionPanelHeader:E["a"],VExpansionPanels:j["a"],VForm:M["a"],VIcon:N["a"],VList:F["a"],VListItem:B["a"],VListItemContent:R["a"],VListItemSubtitle:R["b"],VListItemTitle:R["c"],VScrollXReverseTransition:z["e"],VScrollXTransition:z["f"],VSnackbar:H["a"],VSpacer:U["a"],VSwitch:G["a"],VTextField:w["a"],VTextarea:q["a"],VToolbar:J["a"],VToolbarTitle:K["a"],VTooltip:W["a"]});var Q={name:"Places",props:{source:String},components:{PlacesList:Y}},Z=Q,ee=i("7496"),te=i("a523"),ie=i("f6c4"),ae=i("0fd9"),ne=Object(v["a"])(Z,l,c,!1,null,null,null);t["default"]=ne.exports;g()(ne,{VApp:ee["a"],VContainer:te["a"],VMain:ie["a"],VRow:ae["a"]})}}]);
//# sourceMappingURL=chunk-60d6cc0d.3bbe65df.js.map