import{u as S}from"./index-AtLAf1dw.js";import{l as y,C as x,F as k,D as V}from"./vendor-fortawesome-CVmDIOjI.js";import{_ as h}from"./vendor-inkline-7C7Ddj37.js";import{l as o,o as m,n as _,p as e,k as s,s as t,I as M,j as A,i as C}from"./vendor-Cv1UtYRW.js";import{D as I}from"./DashBoardCard-BnSsjBAn.js";y.add(x);const P={name:"ReloadButton",components:{FontAwesomeIcon:k},props:{},data(){return{}},methods:{reloadDisplay(){location.reload()}}};function F(w,l,f,b,d,c){const u=o("FontAwesomeIcon"),n=o("i-button");return m(),_(n,{color:"success",size:"lg",onClick:l[0]||(l[0]=a=>c.reloadDisplay())},{default:e(()=>[s(" Display neu laden "),t(u,{"fixed-width":"",icon:["fas","fa-undo"]})]),_:1})}const z=h(P,[["render",F]]);y.add(x);const D={name:"RebootButton",components:{FontAwesomeIcon:k},props:{},data(){return{mqttStore:S(),showModal:!1}},methods:{toggleModal(){this.showModal=!this.showModal},cancel(){this.toggleModal()},confirm(){this.toggleModal(),console.log("reboot requested"),this.mqttStore.settings.parentChargePoint1!==void 0?(console.log("rebooting secondary charge point:",this.mqttStore.settings.parentChargePoint1),this.$root.sendSystemCommand("chargepointReboot",{chargePoint:this.mqttStore.settings.parentChargePoint1})):(console.log("rebooting primary system"),this.$root.sendSystemCommand("systemReboot"))}}};function N(w,l,f,b,d,c){const u=o("FontAwesomeIcon"),n=o("i-container"),a=o("i-button"),r=o("i-column"),p=o("i-row"),g=o("i-modal");return m(),_(a,{color:"warning",size:"lg",onClick:l[3]||(l[3]=i=>c.toggleModal())},{default:e(()=>[s(" openWB neu starten "),t(u,{"fixed-width":"",icon:["fas","fa-undo"]}),(m(),_(M,{to:"body"},[t(g,{modelValue:d.showModal,"onUpdate:modelValue":l[2]||(l[2]=i=>d.showModal=i),size:"sm"},{header:e(()=>[s(" openWB neu starten... ")]),footer:e(()=>[t(n,null,{default:e(()=>[t(p,null,{default:e(()=>[t(r,{class:"_text-align:right"},{default:e(()=>[t(a,{color:"success",onClick:l[0]||(l[0]=i=>c.cancel())},{default:e(()=>[s(" Zurück ")]),_:1})]),_:1}),t(r,null,{default:e(()=>[t(a,{color:"danger",onClick:l[1]||(l[1]=i=>c.confirm())},{default:e(()=>[s(" Neustart ")]),_:1})]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(n,null,{default:e(()=>[s(" Möchten Sie diese openWB wirklich neu starten? ")]),_:1})]),_:1},8,["modelValue"])]))]),_:1})}const R=h(D,[["render",N]]);y.add(V);const W={name:"ShutdownButton",components:{FontAwesomeIcon:k},props:{},data(){return{mqttStore:S(),showModal:!1}},methods:{toggleModal(){this.showModal=!this.showModal},cancel(){this.toggleModal()},confirm(){this.toggleModal(),console.log("shutdown requested"),this.mqttStore.settings.parentChargePoint1!==void 0?(console.log("shutting down secondary charge point:",this.mqttStore.settings.parentChargePoint1),this.$root.sendSystemCommand("chargepointShutdown",{chargePoint:this.mqttStore.settings.parentChargePoint1})):(console.log("shutting down primary system"),this.$root.sendSystemCommand("systemShutdown"))}}},L=A("br",null,null,-1);function T(w,l,f,b,d,c){const u=o("FontAwesomeIcon"),n=o("i-container"),a=o("i-button"),r=o("i-column"),p=o("i-row"),g=o("i-modal");return m(),_(a,{color:"danger",size:"lg",onClick:l[3]||(l[3]=i=>c.toggleModal())},{default:e(()=>[s(" openWB ausschalten "),t(u,{"fixed-width":"",icon:["fas","fa-power-off"]}),(m(),_(M,{to:"body"},[t(g,{modelValue:d.showModal,"onUpdate:modelValue":l[2]||(l[2]=i=>d.showModal=i),size:"sm"},{header:e(()=>[s(" openWB ausschalten... ")]),footer:e(()=>[t(n,null,{default:e(()=>[t(p,null,{default:e(()=>[t(r,{class:"_text-align:right"},{default:e(()=>[t(a,{color:"success",onClick:l[0]||(l[0]=i=>c.cancel())},{default:e(()=>[s(" Zurück ")]),_:1})]),_:1}),t(r,null,{default:e(()=>[t(a,{color:"danger",onClick:l[1]||(l[1]=i=>c.confirm())},{default:e(()=>[s(" Ausschalten ")]),_:1})]),_:1})]),_:1})]),_:1})]),default:e(()=>[t(n,null,{default:e(()=>[s(" Möchten Sie diese openWB wirklich ausschalten?"),L,s(" Nach dem Ausschalten muss die Ladestation komplett spannungsfrei geschaltet werden. Erst beim erneuten Zuschalten der Spannung fährt das System wieder hoch. ")]),_:1})]),_:1},8,["modelValue"])]))]),_:1})}const U=h(W,[["render",T]]),Z={name:"StatusView",components:{ReloadButton:z,RebootButton:R,ShutdownButton:U,DashBoardCard:I},props:{changesLocked:{required:!1,type:Boolean,default:!1}},data(){return{mqttStore:S()}}};function E(w,l,f,b,d,c){const u=o("i-form-label"),n=o("i-column"),a=o("i-input"),r=o("i-row"),p=o("i-form-group"),g=o("reload-button"),i=o("reboot-button"),v=o("shutdown-button"),q=o("i-form"),B=o("i-container"),$=o("dash-board-card");return m(),_($,{color:"primary"},{headerLeft:e(()=>[s(" Status ")]),default:e(()=>[t(B,null,{default:e(()=>[t(q,null,{default:e(()=>[t(r,null,{default:e(()=>[t(n,null,{default:e(()=>[t(p,null,{default:e(()=>[t(r,{class:"_margin-top:2"},{default:e(()=>[t(n,{xl:"2",lg:"3",md:"4"},{default:e(()=>[t(u,null,{default:e(()=>[s(" IP-Adresse ")]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(a,{id:"input_system_ip",plaintext:"","model-value":d.mqttStore.getSystemIp},null,8,["model-value"])]),_:1})]),_:1}),t(r,{class:"_margin-top:1"},{default:e(()=>[t(n,{xl:"2",lg:"3",md:"4"},{default:e(()=>[t(u,null,{default:e(()=>[s(" Systemzeit ")]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(a,{id:"input_system_time",plaintext:"","model-value":d.mqttStore.getSystemTime},null,8,["model-value"])]),_:1})]),_:1}),t(r,{class:"_margin-top:1"},{default:e(()=>[t(n,{xl:"2",lg:"3",md:"4"},{default:e(()=>[t(u,null,{default:e(()=>[s(" Version ")]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(a,{id:"input_system_version",plaintext:"","model-value":d.mqttStore.getSystemVersion},null,8,["model-value"])]),_:1})]),_:1}),t(r,{class:"_margin-top:1"},{default:e(()=>[t(n,{xl:"2",lg:"3",md:"4"},{default:e(()=>[t(u,null,{default:e(()=>[s(" Version (Details) ")]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(a,{id:"input_system_commit",plaintext:"","model-value":d.mqttStore.getSystemCurrentCommit},null,8,["model-value"])]),_:1})]),_:1}),t(r,{class:"_margin-top:1"},{default:e(()=>[t(n,{xl:"2",lg:"3",md:"4"},{default:e(()=>[t(u,null,{default:e(()=>[s(" Entwicklungszweig ")]),_:1})]),_:1}),t(n,null,{default:e(()=>[t(a,{id:"input_system_branch",plaintext:"","model-value":d.mqttStore.getSystemBranch},null,8,["model-value"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),f.changesLocked?C("",!0):(m(),_(r,{key:0,class:"_margin-top:5",between:""},{default:e(()=>[t(n,null,{default:e(()=>[t(g,{block:""})]),_:1})]),_:1})),f.changesLocked?C("",!0):(m(),_(r,{key:1,between:""},{default:e(()=>[t(n,null,{default:e(()=>[t(i,{block:"",class:"_margin-top:2"})]),_:1}),t(n,null,{default:e(()=>[t(v,{block:"",class:"_margin-top:2"})]),_:1})]),_:1}))]),_:1})]),_:1})]),_:1})}const K=h(Z,[["render",E]]);export{K as default};
