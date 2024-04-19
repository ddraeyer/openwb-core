import{_ as v,q as s,k as p,l as c,B as n,M as u,x as l}from"./vendor-f0f38b48.js";import"./vendor-sortablejs-cbf37f8f.js";const m={name:"VehicleSocEVCC",emits:["update:configuration"],props:{vehicleId:{required:!0,type:Number},vehicle:{required:!0,type:Object}},data(){return{}},methods:{updateConfiguration(r,e=void 0){this.$emit("update:configuration",{value:r,object:e})}}},x={class:"vehicle-soc-evcc"};function g(r,e,a,f,h,o){const i=s("openwb-base-text-input"),d=s("openwb-base-select-input");return p(),c("div",x,[n(i,{title:"EVCC Sponsor Token",subtype:"password",required:"","model-value":a.vehicle.configuration.sponsor_token,"onUpdate:modelValue":e[0]||(e[0]=t=>o.updateConfiguration(t,"configuration.sponsor_token"))},{help:u(()=>[l(" EVCC Sponsor Token angeben, dies ist notwendig um SoC über EVCC abrufen zu können. https://sponsor.evcc.io/ ")]),_:1},8,["model-value"]),n(i,{title:"Benutzername",subtype:"text",required:"","model-value":a.vehicle.configuration.user_id,"onUpdate:modelValue":e[1]||(e[1]=t=>o.updateConfiguration(t,"configuration.user_id"))},{help:u(()=>[l(" Benutzername beim Fahrzeughersteller. ")]),_:1},8,["model-value"]),n(i,{title:"Kennwort",subtype:"password",required:"","model-value":a.vehicle.configuration.password,"onUpdate:modelValue":e[2]||(e[2]=t=>o.updateConfiguration(t,"configuration.password"))},{help:u(()=>[l(" Kennwort beim Fahrzeughersteller. ")]),_:1},8,["model-value"]),n(d,{title:"Marke",required:"",notSelected:"Bitte auswählen",options:[{value:"aiways",text:"Aiways"},{value:"audi",text:"Audi"},{value:"etron",text:"Audi e-tron"},{value:"bmw",text:"BMW"},{value:"dacia",text:"Dacia"},{value:"fiat",text:"Fiat"},{value:"ford",text:"Ford"},{value:"hyundai",text:"Hyundai"},{value:"jaguar",text:"Jaguar"},{value:"kia",text:"Kia"},{value:"landrover",text:"Landrover"},{value:"mg",text:"Mg"},{value:"mini",text:"Mini"},{value:"nissan",text:"Nissan"},{value:"carwings",text:"Nissan (Leaf pre 2019)"},{value:"ovms",text:"OVMS"},{value:"polestar",text:"Polestar"},{value:"porsche",text:"Porsche"},{value:"renault",text:"Renault"},{value:"seat",text:"Seat"},{value:"cupra",text:"Seat Cupra"},{value:"skoda",text:"Škoda"},{value:"enyaq",text:"Škoda Enyaq"},{value:"smart",text:"Smart"},{value:"smart-hello",text:"Smart-Hello"},{value:"template",text:"Template"},{value:"volvo",text:"Volvo"},{value:"volvo-connected",text:"Volvo-Connected"},{value:"vw",text:"VW"},{value:"id",text:"VW ID"}],"model-value":a.vehicle.configuration.vehicle_type,"onUpdate:modelValue":e[3]||(e[3]=t=>o.updateConfiguration(t,"configuration.vehicle_type"))},{help:u(()=>[l(" Marke aus des Fahrzeugs.")]),_:1},8,["options","model-value"]),n(i,{title:"VIN",subtype:"text","model-value":a.vehicle.configuration.VIN,"onUpdate:modelValue":e[4]||(e[4]=t=>o.updateConfiguration(t,"configuration.VIN"))},{help:u(()=>[l(" Fahrgestellnummer (VIN) des Fahrzeugs. Notwendig falls mehrere Fahrzeuge im Account des Herstellers vorhanden sind. ")]),_:1},8,["model-value"])])}const V=v(m,[["render",g],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/evcc/vehicle.vue"]]);export{V as default};
