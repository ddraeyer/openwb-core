import{_ as r,u as t,k as c,l as p,D as n,N as l,y as _,x as m,z as f}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const b={name:"DeviceFoxEssBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(o,e=void 0){this.$emit("update:configuration",{value:o,object:e})}}},g={class:"device-fox_ess-bat"},v={class:"small"};function x(o,e,s,h,w,a){const i=t("openwb-base-heading"),d=t("openwb-base-number-input");return c(),p("div",g,[n(i,null,{default:l(()=>[_(" Einstellungen für FoxEss Batteriespeicher "),m("span",v,"(Modul: "+f(o.$options.name)+")",1)]),_:1}),n(d,{title:"Modbus ID",required:"","model-value":s.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=u=>a.updateConfiguration(u,"configuration.modbus_id"))},null,8,["model-value"])])}const D=r(b,[["render",x],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/fox_ess/bat.vue"]]);export{D as default};
