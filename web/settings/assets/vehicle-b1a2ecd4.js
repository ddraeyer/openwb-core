import{_ as u,u as l,k as s,l as d,D as a,N as c,y as m}from"./vendor-f2b8aa6f.js";import"./vendor-sortablejs-2f1828d0.js";const p={name:"VehicleSocSmarthello",emits:["update:configuration"],props:{vehicleId:{required:!0,type:Number},vehicle:{required:!0,type:Object}},data(){return{}},methods:{updateConfiguration(r,e=void 0){this.$emit("update:configuration",{value:r,object:e})}}},f={class:"vehicle-soc-smarthello"};function v(r,e,o,h,g,n){const i=l("openwb-base-text-input");return s(),d("div",f,[a(i,{title:"Benutzername",subtype:"text",required:"","model-value":o.vehicle.configuration.user_id,"onUpdate:modelValue":e[0]||(e[0]=t=>n.updateConfiguration(t,"configuration.user_id"))},null,8,["model-value"]),a(i,{title:"Kennwort",subtype:"password",required:"","model-value":o.vehicle.configuration.password,"onUpdate:modelValue":e[1]||(e[1]=t=>n.updateConfiguration(t,"configuration.password"))},null,8,["model-value"]),a(i,{title:"VIN",subtype:"text","model-value":o.vehicle.configuration.VIN,"onUpdate:modelValue":e[2]||(e[2]=t=>n.updateConfiguration(t,"configuration.VIN"))},{help:c(()=>[m(" Fahrgestellnummer (VIN) des Fahrzeugs. Notwendig falls mehrere Fahrzeuge im Account des Herstellers vorhanden sind. ")]),_:1},8,["model-value"])])}const V=u(p,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/smarthello/vehicle.vue"]]);export{V as default};
