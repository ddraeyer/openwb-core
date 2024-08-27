import{C as l}from"./index-625b6e82.js";import{_,u as o,k as a,l as i,x as b,D as s,N as r,y as m}from"./vendor-f2b8aa6f.js";import"./vendor-fortawesome-71546160.js";import"./vendor-bootstrap-4ad604fa.js";import"./vendor-jquery-d3cb8fad.js";import"./vendor-axios-65ecee4b.js";import"./vendor-sortablejs-2f1828d0.js";const h={name:"OpenwbTimeChargeConfigView",mixins:[l],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/general/chargemode_config/time_charging/phases_to_use"]}}},c={class:"timeChargeConfig"},f={name:"timeChargeConfigForm"},v={key:0},w={key:1};function C(t,e,$,B,k,V){const u=o("openwb-base-alert"),p=o("openwb-base-button-group-input"),g=o("openwb-base-card"),d=o("openwb-base-submit-buttons");return a(),i("div",c,[b("form",f,[s(g,{title:"Phasenumschaltung"},{default:r(()=>[t.$store.state.mqtt["openWB/general/extern"]===!0?(a(),i("div",v,[s(u,{subtype:"info"},{default:r(()=>[m(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')]),_:1})])):(a(),i("div",w,[s(p,{title:"Anzahl Phasen",buttons:[{buttonValue:1,text:"1"},{buttonValue:3,text:"Maximum"}],"model-value":t.$store.state.mqtt["openWB/general/chargemode_config/time_charging/phases_to_use"],"onUpdate:modelValue":e[0]||(e[0]=n=>t.updateState("openWB/general/chargemode_config/time_charging/phases_to_use",n))},{help:r(()=>[m(' Hier kann eingestellt werden, ob Ladevorgänge im Modus "Zeitladen" mit nur einer Phase oder dem möglichen Maximum in Abhängigkeit der "Ladepunkt"- und "Fahrzeug"-Einstellungen durchgeführt werden. Voraussetzung ist die verbaute Umschaltmöglichkeit zwischen 1- und 3-phasig (s.g. 1p3p). ')]),_:1},8,["model-value"])]))]),_:1}),s(d,{formName:"timeChargeConfigForm",onSave:e[1]||(e[1]=n=>t.$emit("save")),onReset:e[2]||(e[2]=n=>t.$emit("reset")),onDefaults:e[3]||(e[3]=n=>t.$emit("defaults"))})])])}const q=_(h,[["render",C],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/TimeChargeConfig.vue"]]);export{q as default};
