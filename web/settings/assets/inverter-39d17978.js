import{_ as u,u as o,k as l,l as c,D as t,N as p,y as m,x as _,z as f}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const g={name:"DeviceSolarEdgeInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},b={class:"device-solaredge-inverter"},v={class:"small"};function h(n,e,a,w,x,i){const r=o("openwb-base-heading"),s=o("openwb-base-number-input");return l(),c("div",b,[t(r,null,{default:p(()=>[m(" Einstellungen für SolarEdge Wechselrichter "),_("span",v,"(Modul: "+f(n.$options.name)+")",1)]),_:1}),t(s,{title:"SolarEdge-Geräte-ID",required:"","model-value":a.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=d=>i.updateConfiguration(d,"configuration.modbus_id"))},null,8,["model-value"])])}const C=u(g,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solaredge/inverter.vue"]]);export{C as default};
