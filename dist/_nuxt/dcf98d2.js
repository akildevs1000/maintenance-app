(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{645:function(o,t,e){var content=e(674);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(23).default)("c6f1291c",content,!0,{sourceMap:!1})},673:function(o,t,e){"use strict";e(645)},674:function(o,t,e){var n=e(22)((function(i){return i[1]}));n.push([o.i,".transition-icon[data-v-48766b4a]{transition:transform .3s ease-in-out}.transition-icon[data-v-48766b4a]:hover{transform:rotate(180deg)}",""]),n.locals={},o.exports=n},677:function(o,t,e){"use strict";e.r(t);var n=e(644),c=e(131),r={props:{left:{default:893},top:{default:-13}},methods:{iconClass:function(o){return o?"white primary--text":"white--text grey"}}},l=(e(673),e(91)),component=Object(l.a)(r,(function(){var o=this,t=o._self._c;return t(n.a,{scopedSlots:o._u([{key:"default",fn:function(e){var n=e.hover,r=e.props;return[t("span",o._b({},"span",r,!1),[t("div",{staticStyle:{position:"absolute",width:"100%"}},[t("span",{style:{position:"absolute",zIndex:1,left:"".concat(o.left,"px"),top:"".concat(o.top,"px")}},[t(c.a,{staticClass:"transition-icon",class:o.iconClass(n),staticStyle:{"border-radius":"50px",width:"15px",height:"15px"},attrs:{size:"30"},on:{click:function(t){return o.$emit("click")}}},[o._v("\n          mdi-close-circle\n        ")])],1)])])]}}])})}),[],!1,null,"48766b4a",null);t.default=component.exports},734:function(o,t,e){"use strict";e.r(t);var n=e(132),c=e(119),r=e(96),l=e(635),d=e(288),h=e(131),k=e(269),m=e(177),v=e(270),_=e(83),f=e(630),D=e(394),R=e(725),w=e(287),y=e(726),C=e(90),O=(e(32),e(34),e(14),e(12),e(18),e(11),e(19),e(75)),x=e(40),I=e(3);e(120),e(5),e(42),e(55),e(13),e(293),e(72),e(28),e(56),e(70),e(647),e(39),e(649),e(650),e(651),e(654),e(655),e(656),e(657),e(659),e(661),e(663),e(665),e(666),e(667),e(668),e(669),e(671),e(47);function B(object,o){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);o&&(e=e.filter((function(o){return Object.getOwnPropertyDescriptor(object,o).enumerable}))),t.push.apply(t,e)}return t}function j(o){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(t){Object(I.a)(o,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(source,t))}))}return o}var A={props:["searchQuery","tabFilter","data","calenderColorCodes","filterDate"],layout:function(o){var t=o.$auth;return"company"!=t.user.user_type&&0==t.user.is_verified?"guest":"default"},data:function(){var o;return o={room:"",currentDate:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),menu2:!1,colors:["#92d050","#ff0000","#ffc000","#0D652D","#174EA6"],key:1,reservation:[],rightClickRoomId:"",selected_booked_room_id:"",selected_booking_id:"",cancelCheckInDialog:!1,checkInCancelReason:"",chart:{eco:35},check_out_menu:!1,check_out:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),temp:"",isPageLoad:!1,loading:!1,cancelLoad:!1,snackbar:!1,response:"",isDirty:!0,DirtyRoomsReportDialog:!1,PaidRoomReportDialog:!1,BookedRoomReportDialog:!1,AvailableRoomsReportDialog:!1,ExpectCheckOutReportDialog:!1,ExpectCheckInReportDialog:!1,FoodDialog:!1,checkInDialog:!1,checkInKey:1,checkOutDialog:!1,GRCDialog:!1,postingDialog:!1,NewBooking:!1,formTitle:"",selectedItem:0,showMenu:!1,showMenuForNewBooking:!1,bookingStatus:0,eventStatus:"",x:0,y:0,elevations:[6,12,18],first_login_auth:1},Object(I.a)(o,"loading",!0),Object(I.a)(o,"logs",[]),Object(I.a)(o,"total_items",[]),Object(I.a)(o,"items_by_cities",[]),Object(I.a)(o,"test_headers",[{text:"Customer",align:"left",sortable:!1,value:"company_name"},{text:"Order Total",align:"left",sortable:!1,value:"order_total"}]),Object(I.a)(o,"orders",""),Object(I.a)(o,"products",""),Object(I.a)(o,"customers",""),Object(I.a)(o,"daily_orders",""),Object(I.a)(o,"weekly_orders",""),Object(I.a)(o,"monthly_orders",""),Object(I.a)(o,"evenIid",""),Object(I.a)(o,"eventStatus",""),Object(I.a)(o,"rooms",[]),Object(I.a)(o,"dirtyRoomsList",[]),Object(I.a)(o,"confirmedBookingList",[]),Object(I.a)(o,"notAvailableRooms",[]),Object(I.a)(o,"availableRooms",[]),Object(I.a)(o,"blockedRooms",[]),Object(I.a)(o,"Occupied",[]),Object(I.a)(o,"checkIn",[]),Object(I.a)(o,"checkOut",[]),Object(I.a)(o,"reservedWithoutAdvance",[]),Object(I.a)(o,"confirmedBooking",""),Object(I.a)(o,"waitingBooking",""),Object(I.a)(o,"reason",""),Object(I.a)(o,"totalTransactionAmount",0),Object(I.a)(o,"new_payment",0),Object(I.a)(o,"new_advance",0),Object(I.a)(o,"AdvancePayLoading",!1),Object(I.a)(o,"reference",0),Object(I.a)(o,"full_payment",0),Object(I.a)(o,"isPrintInvoice",!1),Object(I.a)(o,"items",[]),Object(I.a)(o,"transactions",[]),Object(I.a)(o,"checkData",{}),Object(I.a)(o,"roomData",null),Object(I.a)(o,"customerId",""),Object(I.a)(o,"bookingId",0),Object(I.a)(o,"document",null),Object(I.a)(o,"lastTapTime",null),Object(I.a)(o,"isDbCLick",!1),Object(I.a)(o,"members",{adult:0,child:0,baby:0}),Object(I.a)(o,"foodplan",null),Object(I.a)(o,"dirtyRooms",0),Object(I.a)(o,"expectCheckIn",""),Object(I.a)(o,"expectCheckOut",""),Object(I.a)(o,"newBookingRoom",{}),Object(I.a)(o,"isIndex",!0),Object(I.a)(o,"showMenu",!1),Object(I.a)(o,"filtered",{AvailableRooms:[]}),o},watch:{checkInDialog:function(){this.formTitle="Check In",this.get_data(),++this.checkInKey,this.checkInDialog?this.isIndex=!1:this.isIndex=!0},NewBooking:function(){this.NewBooking?this.isIndex=!1:this.isIndex=!0},postingDialog:function(){this.formTitle="Posting",this.get_data()},checkOutDialog:function(){this.formTitle="Check Out",this.get_data()}},created:function(){this.room_list(),this.first_login_auth=this.$auth.user.first_login,this.get_food_plan()},methods:{getRelatedIcon:function(o){var t=o.booking_type,e=o.group_name;return"hall"==t?"mdi-sofa":"yes"==e?"mdi-account-group":"mdi-account"},filteredRooms:function(o){var t=this;if(!this.searchQuery)return o;return o.filter((function(o){var e=o.booked_room,n=(void 0===e?{}:e).customer;return o.room_no.toLowerCase().includes(t.searchQuery.toLowerCase())||n&&function(o,t){var e=t.toLowerCase();return["first_name","last_name","contact_no","whatsapp","email","nationality","address","full_name"].some((function(t){var n;return null===(n=o[t])||void 0===n?void 0:n.toLowerCase().includes(e)}))}(n,t.searchQuery)}))},get_next_day:function(){var o=new Date;o.setDate(o.getDate()+1);var t=o.getFullYear(),e=String(o.getMonth()+1).padStart(2,"0"),n=String(o.getDate()).padStart(2,"0");return"".concat(t,"-").concat(e,"-").concat(n)},goToBookingPage:function(){var o=this,t=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10);this.reservation.isCalculate=!0,this.reservation.room_id=this.newBookingRoom.id,this.reservation.room_type=this.newBookingRoom.room_type.name,this.reservation.room_no=this.newBookingRoom.room_no,this.reservation.check_in=t,this.reservation.booking_status=2,this.reservation.check_out=this.get_next_day();var e={params:{company_id:this.$auth.user.company.id,roomType:this.reservation.room_type,room_no:this.reservation.room_no,checkin:this.reservation.check_in,checkout:this.reservation.check_out}};this.$store.commit("booking_payload",e),this.$axios.get("get_data_by_select_with_tax",e).then((function(t){var data=t.data;if(!data.status)return o.alert("Failure!",data.data,"error"),!1;o.reservation.room_id=data.room.id,o.reservation.price=data.total_price,o.reservation.priceList=data.data,o.reservation.total_tax=data.total_tax,o.reservation.total_price_after_discount=data.total_price_after_discount,o.reservation.total_price=data.total_price,o.reservation.total_discount=data.total_discount;var e=j({},o.reservation);o.$store.commit("reservation",e),o.$router.push("/hotel/new2")}))},logout:function(){var o=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o.$axios.get("/logout").then((function(t){t.res;o.$auth.logout(),o.$router.push("/login")}));case 1:case"end":return t.stop()}}),t)})))()},can:function(){return!(this.$auth.user.employee_role_id>0&&0==this.$auth.user.is_verified)||(this.logout(),this.$router.push("login"),!1)},handleTouchstart:function(o,t){var e,n,c;this.touchstart(o,null==t||null===(e=t.booked_room)||void 0===e?void 0:e.id,null==t||null===(n=t.booked_room)||void 0===n||null===(c=n.booking)||void 0===c?void 0:c.booking_status)},handleMouseOver:function(o){var t,e,n;this.mouseOver(null==o||null===(t=o.booked_room)||void 0===t?void 0:t.id,null==o||null===(e=o.booked_room)||void 0===e||null===(n=e.booking)||void 0===n?void 0:n.booking_status)},getButtonClass:function(o){var t;return"linear-gradient(135deg, #4390FC 0, #4390FC 100%)"===(null===(t=o.booked_room)||void 0===t?void 0:t.background)?"element":""},getBackgroundImage:function(o){var t;return(null==o||null===(t=o.booked_room)||void 0===t?void 0:t.background)||""},isDeviceStatusActive:function(o){var t;return 1===(null===(t=o.device)||void 0===t?void 0:t.latest_status)},caps:function(o){return""==o||null==o?"---":o.toString().replace(/\b\w/g,(function(o){return o.toUpperCase()}))},mouseOver:function(o,t){this.evenIid=o,this.bookingStatus=t},touchstart:function(o,t,e){this.evenIid=t,this.bookingStatus=e,this.show(o,!0)},mouseOverForAvailable:function(o){},closeNewCheckin:function(){this.newBookingRoom=!1,this.NewBooking=!1},get_data:function(){var o=this;if(0==this.evenIid)return!1;this.selected_booked_room_id=this.evenIid;var t={params:{id:this.evenIid,company_id:this.$auth.user.company.id}};this.rightClickRoomId="---",this.$axios.get("get_booked_room",t).then((function(t){var data=t.data;o.checkData=data.booking,o.roomData=data,o.bookingId=data.booking.id,o.rightClickRoomId=data.booking.resourceId,o.full_payment="",o.bookingStatus=data.booking_status,o.customerId=data.booking.customer_id,o.isDbCLick&&o.get_event_by_db_click()}))},show:function(o){var t=this,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.showMenuForNewBooking=!1,o.preventDefault(),this.get_data(),e){var n=(new Date).getTime();if(this.lastTapTime&&n-this.lastTapTime<300)return void this.$router.push("/customer/details/".concat(this.bookingId));this.lastTapTime=n}if(e){var c=o.touches[0];this.x=c.clientX,this.y=c.clientY}else this.x=o.clientX,this.y=o.clientY;this.$nextTick((function(){t.showMenu=!0}))},showExpectCheckOut:function(o,t){var e=this,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.evenIid=t.booked_room.id,this.showMenuForNewBooking=!1,o.preventDefault(),this.get_data(),n){var c=(new Date).getTime();if(this.lastTapTime&&c-this.lastTapTime<300)return void this.$router.push("/customer/details/".concat(this.bookingId));this.lastTapTime=c}if(n){var r=o.touches[0];this.x=r.clientX,this.y=r.clientY}else this.x=o.clientX,this.y=o.clientY;this.$nextTick((function(){e.showMenu=!0}))},makeNewBookingForTouch:function(o,t){var e=this;this.newBookingRoom=t,this.showMenu=!1,o.preventDefault();var n=o.touches[0];this.x=n.clientX,this.y=n.clientY,this.$nextTick((function(){e.showMenuForNewBooking=!0}))},makeNewBooking:function(o,t){var e=this;this.newBookingRoom=t,o.preventDefault(),this.x=o.clientX,this.y=o.clientY,this.$nextTick((function(){e.showMenuForNewBooking=!0}))},roomStatus:function(o){var t=this,e={company_id:this.$auth.user.company.id,room_no:this.newBookingRoom.room_no};this.$axios.post("set_room_status/".concat(o),e).then((function(o){var data=o.data;if(!data.status)return t.snackbar=data.status,void(t.response=data.message);t.room_list(),t.snackbar=data.status,t.response=data.message})).catch((function(o){return console.log(o)}))},get_remaining:function(o){this.checkData.remaining_price},get_food_plan:function(){var o=this,t={params:{company_id:this.$auth.user.company.id}};this.$axios.get("foodplan-count",t).then((function(t){var data=t.data;o.foodplan=data}))},alert:function(){var title=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Success!",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"hello",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"error";this.$swal(title,o,t)},room_list:function(){var o=this;if(this.data){var data=this.data;this.rooms=data,this.dirtyRooms=data.dirtyRooms,this.notAvailableRooms=data.notAvailableRooms,this.blockedRooms=data.blockedRooms,this.confirmedBooking=data.confirmedBooking,this.waitingBooking=data.waitingBooking,this.expectCheckIn=data.expectCheckIn,this.expectCheckOut=data.expectCheckOut,this.Occupied=data.checkIn,this.checkOut=data.checkOut,this.confirmedBookingList=data.confirmedBookingList,this.dirtyRoomsList=data.dirtyRoomsList,this.reservedWithoutAdvance=data.reservedWithoutAdvance;var t=data.reservedWithoutAdvance.map((function(o){return o.room_no})),e=data.expectCheckOut.map((function(o){return o.room_no})),n=data.checkIn.map((function(o){return o.room_no})),c=data.blockedRooms.map((function(o){return o.room_no})),r=data.dirtyRoomsList.map((function(o){return o.room_no})),l=[].concat(Object(O.a)(t),Object(O.a)(e),Object(O.a)(n),Object(O.a)(c),Object(O.a)(r)),d=Object(O.a)(new Set(l));return this.availableRooms=data.availableRooms.filter((function(o){return!d.includes(o.room_no)})),this.members=j({},data.members),this.isIndex=!0,this.isPageLoad=!0,!1}var h={params:{company_id:this.$auth.user&&this.$auth.user.company.id,check_in:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)}};this.$axios.get("room_list_grid",h).then((function(t){var data=t.data;if(!data.status)return o.alert("Failure!",data.data,"error"),!1;o.rooms=data,o.dirtyRooms=data.dirtyRooms,o.availableRooms=data.availableRooms,o.notAvailableRooms=data.notAvailableRooms,o.blockedRooms=data.blockedRooms,o.confirmedBooking=data.confirmedBooking,o.waitingBooking=data.waitingBooking,o.expectCheckIn=data.expectCheckIn,o.expectCheckOut=data.expectCheckOut,o.Occupied=data.checkIn,o.checkOut=data.checkOut,o.confirmedBookingList=data.confirmedBookingList,o.dirtyRoomsList=data.dirtyRoomsList,o.reservedWithoutAdvance=data.reservedWithoutAdvance,o.members=j({},data.members),o.isIndex=!0,o.isPageLoad=!0}))},checkedOutDoubleClick:function(o){var t=o.booked_room;this.evenIid=t.id,this.isDbCLick=!0,this.get_data()},dblclick:function(){this.isDbCLick=!0,this.get_data()},get_event_by_db_click:function(){var o=this;this.$nextTick((function(){var t=o.$refs.BookingSingleComp;t?t.ViewBookingDialog=!0:console.warn("BookingSingleComp ref is undefined"),o.isDbCLick=!1}))},changeCheckInAdminProcess:function(){var o=this;if("admin"!=this.$auth.user.role.name.toLowerCase())return this.alert("Failure!","You are not authorized to Cancel the Checkin","error"),!1;if(""!=this.checkInCancelReason){this.cancelLoad=!0;var t={cancel_checkin_reason:this.checkInCancelReason,cancel_checkin_userid:this.$auth.user.id,booking_id:this.bookingId,company_id:this.$auth.user.company.id,booked_room_id:this.selected_booked_room_id};this.$axios.post("change_checkin_to_booking_admin/".concat(this.evenIid),t).then((function(t){var data=t.data;if(!data.status)return o.snackbar=data.status,o.response=data.message,void(o.cancelLoad=!1);o.cancelLoad=!1,o.room_list(),o.reason="",o.snackbar=data.status,o.response=data.message,o.cancelCheckInDialog=!1})).catch((function(o){return console.log(o)}))}else alert("Enter reason")},setAvailable:function(o){var t=this,e=o.id,n=o.booking_id,c={cancel_by:this.$auth.user.id,bookedRoomId:e};this.$axios.post("set_available/".concat(n),c).then((function(o){var data=o.data;data.status?t.closeCheckInAndOpenGRC():alert(data.message)})).catch((function(o){return console.log(o)}))},setMaintenance:function(){var o=this,t={cancel_by:this.$auth.user.id};this.$axios.post("set_maintenance/".concat(this.bookingId),t).then((function(t){var data=t.data;if(!data.status)return o.snackbar=data.status,void(o.response=data.message);o.room_list(),o.cancelDialog=!1,o.snackbar=data.status,o.response=data.message})).catch((function(o){return console.log(o)}))},succuss:function(data){var o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],t=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&(this.checkData={},this.checkInDialog=!1,this.new_payment=0),t&&(this.checkData={},this.checkOutDialog=!1),o&&(this.posting={},this.postingDialog=!1),this.room_list(),this.errors=[],this.loading=!1,this.snackbar=!0,data&&(this.response=data.message)},close:function(){this.checkInDialog=!1,this.new_payment=0,this.new_advance=0,this.checkOutDialog=!1,this.document=null},closeCheckOut:function(){this.checkOutDialog=!1},closeDialogs:function(o){this.succuss(o)},closeCheckInAndOpenGRC:function(){this.$emit("call_room_list"),this.room_list(),this.checkInDialog=!1,this.NewBooking=!1}}},F=A,$=e(91),component=Object($.a)(F,(function(){var o,t,e,O,x,I=this,B=I._self._c;return I.isPageLoad?B("div",[B("div",{staticClass:"text-center ma-2"},[B(R.a,{attrs:{top:"",absolute:"",color:"secondary",elevation:"24"},model:{value:I.snackbar,callback:function(o){I.snackbar=o},expression:"snackbar"}},[I._v("\n      "+I._s(I.response)+"\n    ")])],1),I._v(" "),I.bookingId?B("BookingSingle",{key:I.bookingId,ref:"BookingSingleComp",attrs:{noLabel:!0,BookingId:I.bookingId,roomData:I.roomData}}):I._e(),I._v(" "),B("div",[B(d.a,{staticClass:"checkin-models",attrs:{persistent:"",width:900},model:{value:I.GRCDialog,callback:function(o){I.GRCDialog=o},expression:"GRCDialog"}},[B(c.a,[B(C.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[B("span",[I._v(I._s(I.formTitle))]),I._v(" "),B(w.a),I._v(" "),B(h.a,{staticClass:"pa-0",attrs:{dark:""},on:{click:function(o){I.GRCDialog=!1}}},[I._v("mdi-close")])],1),I._v(" "),B(r.b,[B("Grc",{attrs:{bookingId:I.checkData.id}})],1),I._v(" "),B(l.a),I._v(" "),B(r.a)],1)],1),I._v(" "),B(d.a,{attrs:{persistent:"","max-width":"700px"},model:{value:I.BookedRoomReportDialog,callback:function(o){I.BookedRoomReportDialog=o},expression:"BookedRoomReportDialog"}},[B(c.a,[B(C.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[B("span",[I._v("Reserved Room Report (Unpaid)")]),I._v(" "),B(w.a),I._v(" "),B(h.a,{staticClass:"pa-0",attrs:{dark:""},on:{click:function(o){I.BookedRoomReportDialog=!1}}},[I._v("\n            mdi-close\n          ")])],1),I._v(" "),B(r.b,[B(l.a,[B("BookedRoomsReport",{attrs:{data:I.reservedWithoutAdvance},on:{"close-dialog":I.closeDialogs}})],1)],1)],1)],1),I._v(" "),B(d.a,{attrs:{persistent:"","max-width":"700px"},model:{value:I.PaidRoomReportDialog,callback:function(o){I.PaidRoomReportDialog=o},expression:"PaidRoomReportDialog"}},[B(c.a,[B(C.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[B("span",[I._v("Paid Room Report")]),I._v(" "),B(w.a),I._v(" "),B(h.a,{staticClass:"pa-0",attrs:{dark:""},on:{click:function(o){I.PaidRoomReportDialog=!1}}},[I._v("\n            mdi-close\n          ")])],1),I._v(" "),B(r.b,[B(l.a,[B("PaidRoomsReport",{attrs:{data:I.confirmedBookingList},on:{"close-dialog":I.closeDialogs}})],1)],1)],1)],1),I._v(" "),B(d.a,{attrs:{persistent:"","max-width":"700px"},model:{value:I.DirtyRoomsReportDialog,callback:function(o){I.DirtyRoomsReportDialog=o},expression:"DirtyRoomsReportDialog"}},[B(c.a,[B(C.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[B("span",[I._v("Dirty Rooms Report")]),I._v(" "),B(w.a),I._v(" "),B(h.a,{staticClass:"pa-0",attrs:{dark:""},on:{click:function(o){I.DirtyRoomsReportDialog=!1}}},[I._v("\n            mdi-close\n          ")])],1),I._v(" "),B(r.b,[B(l.a,[B("DirtyRoomsReport",{attrs:{data:I.dirtyRoomsList},on:{"close-dialog":I.closeDialogs}})],1)],1)],1)],1),I._v(" "),B(d.a,{attrs:{persistent:"","max-width":"700px"},model:{value:I.AvailableRoomsReportDialog,callback:function(o){I.AvailableRoomsReportDialog=o},expression:"AvailableRoomsReportDialog"}},[B(c.a,[B(C.a,{staticClass:"rounded-md",attrs:{color:"background",dense:"",flat:"",dark:""}},[B("span",[I._v("Available Rooms Report")]),I._v(" "),B(w.a),I._v(" "),B(h.a,{staticClass:"pa-0",attrs:{dark:""},on:{click:function(o){I.AvailableRoomsReportDialog=!1}}},[I._v("\n            mdi-close\n          ")])],1),I._v(" "),B(r.b,[B(l.a,[B("AvailableRoomsReport",{attrs:{data:I.availableRooms},on:{"close-dialog":I.closeDialogs}})],1)],1)],1)],1),I._v(" "),B(d.a,{attrs:{persistent:"","max-width":"700px"},model:{value:I.FoodDialog,callback:function(o){I.FoodDialog=o},expression:"FoodDialog"}},[B(c.a,[B(C.a,{staticClass:"rounded-md",attrs:{color:"primary",dense:"",flat:"",dark:""}},[B("span",[I._v("Food Orders")]),I._v(" "),B(w.a),I._v(" "),B(h.a,{staticClass:"pa-0",attrs:{dark:""},on:{click:function(o){I.FoodDialog=!1}}},[I._v("\n            mdi mdi-close\n          ")])],1),I._v(" "),B(r.b,[B(l.a,[B("FoodOrderRooms",{on:{"close-dialog":I.closeDialogs}})],1)],1)],1)],1),I._v(" "),B(d.a,{attrs:{persistent:"","max-width":"500"},model:{value:I.cancelCheckInDialog,callback:function(o){I.cancelCheckInDialog=o},expression:"cancelCheckInDialog"}},[B(c.a,[B(r.c,{staticClass:"text-h6"},[I._v("\n          Are you sure you want to cancel CheckIn?\n        ")]),I._v(" "),B(l.a,{attrs:{"grid-list-xs":""}},[B(y.a,{attrs:{placeholder:"Reason",rows:"3",dense:"",outlined:""},model:{value:I.checkInCancelReason,callback:function(o){I.checkInCancelReason=o},expression:"checkInCancelReason"}})],1),I._v(" "),B(r.a,[B(n.a,{staticClass:"primary",attrs:{small:"",loading:I.cancelLoad},on:{click:function(o){return I.changeCheckInAdminProcess()}}},[I._v("\n            Yes\n          ")]),I._v(" "),B(n.a,{staticClass:"error",attrs:{small:""},on:{click:function(o){I.cancelCheckInDialog=!1}}},[I._v("\n            Cancel\n          ")])],1)],1)],1),I._v(" "),B(d.a,{attrs:{persistent:"",width:"1000"},model:{value:I.NewBooking,callback:function(o){I.NewBooking=o},expression:"NewBooking"}},[B("AssetsIconClose",{attrs:{left:"990"},on:{click:I.closeCheckInAndOpenGRC}}),I._v(" "),I.NewBooking?B("BookingDirectCheckIn",{attrs:{reservation:I.newBookingRoom},on:{"close-dialog":I.closeCheckInAndOpenGRC}}):I._e()],1)],1),I._v(" "),B("div",[B(D.a,{staticClass:"flex",attrs:{justify:"center"}}),I._v(" "),B(f.a,{attrs:{"position-x":I.x,"position-y":I.y,absolute:"","offset-y":""},model:{value:I.showMenu,callback:function(o){I.showMenu=o},expression:"showMenu"}},[B(k.a,[B(v.a,{model:{value:I.selectedItem,callback:function(o){I.selectedItem=o},expression:"selectedItem"}},[B(m.a,[B(_.b,{staticStyle:{color:"green"}},[I._v("Room: "+I._s(I.rightClickRoomId))])],1),I._v(" "),1==I.bookingStatus&&I.checkData&&I.checkData.id?[I.currentDate==I.filterDate?B(m.a,[B(_.b,[B("BookingCheckIn",{key:"".concat(I.evenIid,"1").concat(I.checkData.id),attrs:{BookingData:I.checkData,roomData:I.roomData},on:{"close-dialog":I.closeCheckInAndOpenGRC}})],1)],1):I._e(),I._v(" "),B(m.a,[B(_.b,[B("BookingPayAdvance",{key:"".concat(I.evenIid,"2").concat(I.checkData.id),attrs:{BookingData:I.checkData,roomData:I.roomData},on:{"close-dialog":I.closeCheckInAndOpenGRC}})],1)],1),I._v(" "),B(m.a,[B(_.b,[B("BookingModifyRoom",{key:"".concat(I.evenIid,"3").concat(I.checkData.id),attrs:{BookedRoomId:I.evenIid},on:{"close-calender-room":I.closeCheckInAndOpenGRC}}),I._v(" "),I._e()],1)],1),I._v(" "),B(m.a,[B(_.b,[B("BookingSingle",{key:"".concat(I.evenIid,"4").concat(I.checkData.id),attrs:{BookingId:I.checkData.id}})],1)],1),I._v(" "),B(m.a,[B(_.b,[B("BookingCancel",{key:"".concat(I.evenIid,"5").concat(I.checkData.id),attrs:{BookingData:I.checkData,roomData:I.roomData,evenIid:I.evenIid},on:{"close-dialog":I.closeCheckInAndOpenGRC}})],1)],1)]:2==I.bookingStatus&&I.checkData&&I.checkData.id?[B(m.a,[B(_.b,[B("BookingCheckOut",{key:"".concat(I.evenIid,"1").concat(I.checkData.id),attrs:{BookingData:I.checkData,roomData:I.roomData},on:{"close-dialog":I.closeCheckInAndOpenGRC}})],1)],1),I._v(" "),B(m.a,[B(_.b,[B("BookingPosting",{key:"".concat(I.evenIid,"2").concat(I.checkData.id),attrs:{BookingData:I.checkData,evenIid:I.evenIid},on:{"close-dialog":I.closeCheckInAndOpenGRC}})],1)],1),I._v(" "),B(m.a,[B(_.b,[B("BookingPayAdvance",{key:"".concat(I.evenIid,"3").concat(I.checkData.id),attrs:{BookingData:I.checkData,roomData:I.roomData},on:{"close-dialog":I.closeCheckInAndOpenGRC}})],1)],1),I._v(" "),B(m.a,[B(_.b,[B("BookingViewPosting",{key:"".concat(I.evenIid,"4").concat(I.checkData.id),attrs:{evenIid:I.evenIid},on:{"close-dialog":I.closeCheckInAndOpenGRC}})],1)],1),I._v(" "),B(m.a,[B(_.b,[B("BookingModifyRoom",{key:"".concat(I.evenIid,"5").concat(I.checkData.id),attrs:{BookedRoomId:I.evenIid},on:{"close-calender-room":I.closeCheckInAndOpenGRC}}),I._v(" "),I._e()],1)],1),I._v(" "),B(m.a,[B(_.b,[B("BookingSingle",{key:"".concat(I.evenIid,"6").concat(I.checkData.id),attrs:{BookingId:I.checkData.id}})],1)],1),I._v(" "),"admin"==(null===(o=I.$auth)||void 0===o||null===(t=o.user)||void 0===t||null===(e=t.role)||void 0===e?void 0:e.name.toLowerCase())?B(m.a,{on:{click:function(o){I.cancelCheckInDialog=!0}}},[B(_.b,{attrs:{color:"red"}},[I._v("Cancel Check-in(admin)\n              ")])],1):I._e()]:3==I.bookingStatus&&I.checkData&&I.checkData.id?[B(m.a,{on:{click:I.setAvailable}},[B(_.b,[I._v("Make Available")])],1)]:I._e()],2)],1)],1),I._v(" "),B(f.a,{attrs:{"position-x":I.x,"position-y":I.y,absolute:"","offset-y":""},model:{value:I.showMenuForNewBooking,callback:function(o){I.showMenuForNewBooking=o},expression:"showMenuForNewBooking"}},[B(k.a,[I.newBookingRoom&&I.newBookingRoom.booked_room?B(v.a,[3==(null===(O=I.newBookingRoom)||void 0===O||null===(x=O.booked_room)||void 0===x?void 0:x.booking_status)?B(m.a,{on:{click:function(o){return I.setAvailable(I.newBookingRoom.booked_room)}}},[B(_.b,[I._v("Make Available")])],1):I._e()],1):B(v.a,[0==I.newBookingRoom.status&&I.currentDate==I.filterDate?B(m.a,{on:{click:function(o){I.NewBooking=!0}}},[B(_.b,[I._v("Check In")])],1):I._e(),I._v(" "),0==I.newBookingRoom.status?B(m.a,{on:{click:function(o){return I.roomStatus("1")}}},[B(_.b,[I._v("Block")])],1):I._e(),I._v(" "),1==I.newBookingRoom.status?B(m.a,{on:{click:function(o){return I.roomStatus("0")}}},[B(_.b,[I._v("Unblock")])],1):I._e()],1)],1)],1)],1),I._v(" "),B(D.a,["available"==I.tabFilter||"All"==I.tabFilter?B("div",I._l(I.filteredRooms(I.availableRooms),(function(o,t){var e,n;return B("div",{key:t,staticClass:"roombox1"},[B(c.a,{class:" darken-2 ",attrs:{dark:""},on:{contextmenu:function(t){return I.makeNewBooking(t,o)},mouseover:function(t){return I.mouseOverForAvailable(o)},touchstart:function(t){return I.makeNewBookingForTouch(t,o)}}},[B(r.b,{staticClass:"green111 p-3 roombox available",style:"padding: 0px;",attrs:{title:o.device&&1==o.device.latest_status?"Available and Light On":"Available"}},[B("div",{staticClass:"text-center white--text boxheight"},[B(h.a,{attrs:{color:o.device&&1==o.device.latest_status?"red":""}},[I._v("\n                "+I._s("hall"==(null==o||null===(e=o.room_type)||void 0===e?void 0:e.type)?"mdi-sofa":"mdi-bed")+"\n              ")]),I._v(" "),B("div",[I._v(I._s((null==o?void 0:o.room_no)||"---"))]),I._v(" "),"hall"!==(null==o||null===(n=o.room_type)||void 0===n?void 0:n.type)?B("div",[I._v("\n                "+I._s(o?I.caps(o.room_type.name):"---")+"\n              ")]):B("div",[I._v("---")])],1)])],1)],1)})),0):I._e(),I._v(" "),"expected_arrival"==I.tabFilter||"All"==I.tabFilter?B("div",I._l(I.filteredRooms(I.reservedWithoutAdvance),(function(o,i){return B("div",{key:i,staticClass:"roombox1"},[B(c.a,{class:" ",attrs:{dark:""},on:{mouseenter:function(o){I.showMenu=!1},mousedown:function(o){I.showMenu=!1},mouseup:function(o){I.showMenu=!1},contextmenu:I.show,touchstart:function(t){return I.handleTouchstart(t,o)},mouseover:function(t){return I.handleMouseOver(o)},dblclick:I.dblclick}},[B(r.b,{staticClass:"blue1111 p-3 roombox booked",style:"padding: 0px;",attrs:{title:"Expected Arrival"}},[B("div",{staticClass:"text-center white--text boxheight"},[B(h.a,{attrs:{color:o.device&&1==o.device.latest_status?"red":""}},[I._v("\n                "+I._s(I.getRelatedIcon(o.booked_room.booking))+"\n              ")]),I._v(" "),B("div",[I._v("\n                "+I._s((null==o?void 0:o.room_no)||"---")+"\n              ")]),I._v(" "),B("div",[I._v("\n                "+I._s("hall"!==o.booked_room.booking.booking_type?I.caps(o.room_type.name):"---")+"\n              ")])],1)])],1)],1)})),0):I._e(),I._v(" "),"All"==I.tabFilter||"occupied"==I.tabFilter?B("div",I._l(I.filteredRooms(I.expectCheckOut),(function(o,t){return B("div",{key:t+50,staticClass:"roombox1"},[B(c.a,{class:"zoom-card darken-2",attrs:{elevation:0,dark:""},on:{mouseenter:function(o){I.showMenu=!1},mousedown:function(o){I.showMenu=!1},mouseup:function(o){I.showMenu=!1},contextmenu:I.show,touchstart:function(t){return I.touchstart(t,o&&o.booked_room&&o.booked_room.id,o&&o.booked_room&&o.booked_room.booking&&o.booked_room.booking.booking_status)},mouseover:function(t){return I.mouseOver(o&&o.booked_room&&o.booked_room.id,o&&o.booked_room&&o.booked_room.booking&&o.booked_room.booking.booking_status)},dblclick:I.dblclick}},[B(r.b,{staticClass:"p-3 roombox occupied",style:"padding: 0px;",attrs:{title:"Occupied"}},[B("div",{staticClass:"text-center white--text boxheight boxheight"},[B(h.a,{attrs:{color:o.device&&1==o.latest_status?"red":""}},[I._v("\n                "+I._s(I.getRelatedIcon(o.booked_room.booking))+"\n              ")]),I._v(" "),B("div",[I._v(I._s((null==o?void 0:o.room_no)||"---"))]),I._v(" "),B("div",[I._v("\n                "+I._s(o?I.caps(o.room_type.name):"---")+"\n              ")])],1)])],1)],1)})),0):I._e(),I._v(" "),"All"==I.tabFilter||"occupied"==I.tabFilter?B("div",I._l(I.filteredRooms(I.Occupied),(function(o,t){return B("div",{key:t+50,staticClass:"roombox1"},[B(c.a,{class:" darken-2",attrs:{elevation:0,dark:""},on:{mouseenter:function(o){I.showMenu=!1},mousedown:function(o){I.showMenu=!1},mouseup:function(o){I.showMenu=!1},contextmenu:I.show,touchstart:function(t){return I.touchstart(t,o&&o.booked_room&&o.booked_room.id,o&&o.booked_room&&o.booked_room.booking&&o.booked_room.booking.booking_status)},mouseover:function(t){return I.mouseOver(o&&o.booked_room&&o.booked_room.id,o&&o.booked_room&&o.booked_room.booking&&o.booked_room.booking.booking_status)},dblclick:I.dblclick}},[B(r.b,{staticClass:"p-3 roombox occupied",style:"padding: 0px;",attrs:{title:"Occupied"}},[B("div",{staticClass:"text-center white--text boxheight boxheight"},[B(h.a,{attrs:{color:o.device&&1==o.latest_status?"red":""}},[I._v("\n                "+I._s(I.getRelatedIcon(o.booked_room.booking))+"\n              ")]),I._v(" "),B("div",[I._v(I._s((null==o?void 0:o.room_no)||"---"))]),I._v(" "),B("div",[I._v("\n                "+I._s(o?I.caps(o.room_type.name):"---")+"\n              ")])],1)])],1)],1)})),0):I._e(),I._v(" "),"checkedout"==I.tabFilter||"All"==I.tabFilter?B("div",I._l(I.filteredRooms(I.dirtyRoomsList),(function(o,t){return B("div",{key:t,staticClass:"roombox1"},[B(c.a,{class:" darken-2 ",attrs:{dark:""},on:{dblclick:function(t){return I.checkedOutDoubleClick(o)},contextmenu:function(t){return I.makeNewBooking(t,o)},mouseover:function(t){return I.mouseOverForAvailable(o)},touchstart:function(t){return I.makeNewBookingForTouch(t,o)}}},[B(r.b,{staticClass:"purple333 p-3 roombox checked_out",style:"padding: 0px;",attrs:{title:"Checked Out/Dirty"}},[B("div",{staticClass:"text-center white--text boxheight"},[B(h.a,{attrs:{color:o.device&&1==o.device.latest_status?"red":""}},[I._v("\n                "+I._s(I.getRelatedIcon(o.booked_room.booking))+"\n              ")]),I._v(" "),B("div",[I._v(I._s((null==o?void 0:o.room_no)||"---"))]),I._v(" "),B("div",[I._v("\n                "+I._s(o?I.caps(o.room_type.name):"---")+"\n              ")])],1)])],1)],1)})),0):I._e(),I._v(" "),"blocked"==I.tabFilter||"All"==I.tabFilter?B("div",{staticClass:"roombox1"},I._l(I.filteredRooms(I.blockedRooms),(function(o,t){var e,n;return B(c.a,{key:t,attrs:{dark:""},on:{contextmenu:function(t){return I.makeNewBooking(t,o)},mouseover:function(t){return I.mouseOverForAvailable(o)},touchstart:function(t){return I.makeNewBookingForTouch(t,o)}}},[B(r.b,{staticClass:"p-3 roombox blocked",style:"padding: 0px;",attrs:{title:" Blocked\n          "}},[B("div",{staticClass:"text-center white--text boxheight"},[B(h.a,{attrs:{color:o.device&&1==o.device.latest_status?"red":""}},[I._v("\n              "+I._s("hall"==(null===(e=I.room)||void 0===e||null===(n=e.room_type)||void 0===n?void 0:n.type)?"mdi-sofa":"mdi-bed")+"\n            ")]),I._v(" "),B("div",[I._v(I._s((null==o?void 0:o.room_no)||"---"))]),I._v(" "),B("div",[I._v("\n              "+I._s(o?I.caps(o.room_type.name):"---")+"\n            ")])],1)])],1)})),1):I._e()])],1):B("Preloader")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AssetsIconClose:e(677).default})}}]);