import{_ as c,u as r,k as p,l as _,D as n,N as d,y as l,x as f,z as g}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const b={name:"DeviceSolarEdgeExternalInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},v={class:"device-solaredge-external-inverter"},h={class:"small"};function x(t,e,a,w,S,i){const u=r("openwb-base-heading"),m=r("openwb-base-alert"),s=r("openwb-base-number-input");return p(),_("div",v,[n(u,null,{default:d(()=>[l(" Einstellungen für SolarEdge externen Wechselrichter "),f("span",h,"(Modul: "+g(t.$options.name)+")",1)]),_:1}),n(m,{subtype:"info"},{default:d(()=>[l(' Diese Komponente nur konfigurieren, wenn ein weiteres Solaredge SmartMeter verbaut ist, welches z.B. die Leistung einer vorhandenen Bestands-PV-Anlage erfasst. Dieses zusätzliche SmartMeter muss dann als "Zähler 2" / "Position 2" im Wechselrichter-Konfigurationsmenü konfiguriert sein. ')]),_:1}),n(s,{title:"SolarEdge-Geräte-ID",required:"","model-value":a.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=o=>i.updateConfiguration(o,"configuration.modbus_id"))},null,8,["model-value"]),n(s,{title:"SolarEdge-Meter-ID","model-value":a.configuration.meter_id,min:"1",max:"255","onUpdate:modelValue":e[1]||(e[1]=o=>i.updateConfiguration(o,"configuration.meter_id"))},null,8,["model-value"])])}const B=c(b,[["render",x],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solaredge/external_inverter.vue"]]);export{B as default};
