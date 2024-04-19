import{_ as c,q as n,k as _,l as b,B as t,M as d,x as r,u as f,y as g}from"./vendor-f0f38b48.js";import"./vendor-sortablejs-cbf37f8f.js";const v={name:"DevicePowerdog",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},componentId:{required:!0}},methods:{updateConfiguration(a,e=void 0){this.$emit("update:configuration",{value:a,object:e})}}},w={class:"device-powerdog"},x={class:"small"};function C(a,e,i,q,V,u){const l=n("openwb-base-heading"),p=n("openwb-base-alert"),m=n("openwb-base-text-input"),s=n("openwb-base-number-input");return _(),b("div",w,[t(l,null,{default:d(()=>[r(" Einstellungen für Powerdog "),f("span",x,"(Modul: "+g(a.$options.name)+")",1)]),_:1}),t(p,{subtype:"info"},{default:d(()=>[r(" ModbusTCP muss aktiviert sein. ")]),_:1}),t(m,{title:"IP oder Hostname",subtype:"host",required:"","model-value":i.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=o=>u.updateConfiguration(o,"configuration.ip_address"))},null,8,["model-value"]),t(s,{title:"Port",required:"",min:1,max:65535,"model-value":i.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=o=>u.updateConfiguration(o,"configuration.port"))},null,8,["model-value"]),t(s,{title:"Modbus ID",required:"","model-value":i.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[2]||(e[2]=o=>u.updateConfiguration(o,"configuration.modbus_id"))},null,8,["model-value"])])}const P=c(v,[["render",C],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/powerdog/device.vue"]]);export{P as default};
