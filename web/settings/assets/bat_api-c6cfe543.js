import{_ as c,u as n,k as p,l as d,D as a,N as o,y as s,x as u,z as _}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const l={name:"DeviceVartaAPIBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-varta-bat"},m={class:"small"};function b(e,t,g,v,h,w){const i=n("openwb-base-heading"),r=n("openwb-base-alert");return p(),d("div",f,[a(i,null,{default:o(()=>[s(" Einstellungen für Varta API Batteriespeicher "),u("span",m,"(Modul: "+_(e.$options.name)+")",1)]),_:1}),a(r,{subtype:"info"},{default:o(()=>[s(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const x=c(l,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/varta/bat_api.vue"]]);export{x as default};
