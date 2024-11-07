import{_ as b,C as L}from"./index-84ae27ac.js";import{_ as M}from"./dynamic-import-helper-be004503.js";import{_ as h,u as s,k as a,l as u,G as n,E as o,y as i,F as B,x as l,a1 as O,z as W,a2 as q,N as F,B as y}from"./vendor-f90150d8.js";const U={props:{electricityTariff:{type:Object,required:!0}},emits:["update:configuration"],methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},A=h(U,[["__file","/opt/openWB-dev/openwb-ui-settings/src/components/electricity_tariffs/ElectricityTariffConfigMixin.vue"]]),D={name:"ElectricityTariffConfigFallback",mixins:[A]},N={class:"backup-cloud-fallback"};function I(t,e,m,k,z,g){const d=s("openwb-base-alert"),p=s("openwb-base-textarea");return a(),u("div",N,[n(d,{subtype:"warning"},{default:o(()=>[i(' Es wurde keine Konfigurationsseite für den Anbieter "'+B(t.electricityTariff.name)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),n(p,{title:"Konfiguration",subtype:"json","model-value":t.electricityTariff.configuration,"onUpdate:modelValue":e[0]||(e[0]=c=>t.updateConfiguration(c,"configuration"))},{help:o(()=>e[1]||(e[1]=[i(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")])),_:1},8,["model-value"]),n(d,{subtype:"info"},{default:o(()=>[l("pre",null,B(JSON.stringify(t.electricityTariff.configuration,void 0,2)),1)]),_:1})])}const Z=h(D,[["render",I],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/electricity_tariffs/OpenwbElectricityTariffConfigFallback.vue"]]),j={name:"OpenwbElectricityTariffProxy",props:{electricityTariff:{type:Object,required:!0}},emits:["update:configuration"],computed:{myComponent(){return console.debug(`loading electricity tariff cloud: ${this.electricityTariff.type}`),O({loader:()=>M(Object.assign({"./awattar/electricity_tariff.vue":()=>b(()=>import("./electricity_tariff-34848e5f.js"),["assets/electricity_tariff-34848e5f.js","assets/vendor-f90150d8.js","assets/vendor-sortablejs-cfc19546.js","assets/vendor-aab9f734.css","assets/index-84ae27ac.js","assets/vendor-fortawesome-8488187c.js","assets/vendor-bootstrap-99f0c261.js","assets/vendor-jquery-99ccf6d7.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-871a0510.js","assets/index-25de8c12.css","assets/dynamic-import-helper-be004503.js"]),"./energycharts/electricity_tariff.vue":()=>b(()=>import("./electricity_tariff-9e37ea6f.js"),["assets/electricity_tariff-9e37ea6f.js","assets/vendor-f90150d8.js","assets/vendor-sortablejs-cfc19546.js","assets/vendor-aab9f734.css","assets/index-84ae27ac.js","assets/vendor-fortawesome-8488187c.js","assets/vendor-bootstrap-99f0c261.js","assets/vendor-jquery-99ccf6d7.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-871a0510.js","assets/index-25de8c12.css","assets/dynamic-import-helper-be004503.js"]),"./rabot/electricity_tariff.vue":()=>b(()=>import("./electricity_tariff-ab16b9b7.js"),["assets/electricity_tariff-ab16b9b7.js","assets/vendor-f90150d8.js","assets/vendor-sortablejs-cfc19546.js","assets/vendor-aab9f734.css","assets/index-84ae27ac.js","assets/vendor-fortawesome-8488187c.js","assets/vendor-bootstrap-99f0c261.js","assets/vendor-jquery-99ccf6d7.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-871a0510.js","assets/index-25de8c12.css","assets/dynamic-import-helper-be004503.js"]),"./tibber/electricity_tariff.vue":()=>b(()=>import("./electricity_tariff-e811d4bf.js"),["assets/electricity_tariff-e811d4bf.js","assets/vendor-f90150d8.js","assets/vendor-sortablejs-cfc19546.js","assets/vendor-aab9f734.css","assets/index-84ae27ac.js","assets/vendor-fortawesome-8488187c.js","assets/vendor-bootstrap-99f0c261.js","assets/vendor-jquery-99ccf6d7.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-871a0510.js","assets/index-25de8c12.css","assets/dynamic-import-helper-be004503.js"]),"./voltego/electricity_tariff.vue":()=>b(()=>import("./electricity_tariff-e4723cf3.js"),["assets/electricity_tariff-e4723cf3.js","assets/vendor-f90150d8.js","assets/vendor-sortablejs-cfc19546.js","assets/vendor-aab9f734.css","assets/index-84ae27ac.js","assets/vendor-fortawesome-8488187c.js","assets/vendor-bootstrap-99f0c261.js","assets/vendor-jquery-99ccf6d7.js","assets/vendor-bootstrap-c4951098.css","assets/vendor-axios-871a0510.js","assets/index-25de8c12.css","assets/dynamic-import-helper-be004503.js"])}),`./${this.electricityTariff.type}/electricity_tariff.vue`),errorComponent:Z})}},methods:{updateConfiguration(t){this.$emit("update:configuration",t)}}};function R(t,e,m,k,z,g){const d=s("openwb-base-heading");return a(),u(F,null,[n(d,null,{default:o(()=>[i(' Einstellungen für Modul "'+B(m.electricityTariff.name)+'" ',1)]),_:1}),(a(),W(q(g.myComponent),{"electricity-tariff":m.electricityTariff,"onUpdate:configuration":e[0]||(e[0]=p=>g.updateConfiguration(p))},null,40,["electricity-tariff"]))],64)}const H=h(j,[["render",R],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/electricity_tariffs/OpenwbElectricityTariffProxy.vue"]]),G={name:"OpenwbGeneralChargeConfigView",components:{OpenwbElectricityTariffProxy:H},mixins:[L],emits:["save","reset","defaults"],data(){return{mqttTopicsToSubscribe:["openWB/bat/config/power_limit_mode","openWB/bat/get/power_limit_controllable","openWB/general/extern","openWB/general/chargemode_config/phase_switch_delay","openWB/general/chargemode_config/retry_failed_phase_switches","openWB/general/chargemode_config/unbalanced_load","openWB/general/chargemode_config/unbalanced_load_limit","openWB/general/prices/bat","openWB/general/prices/grid","openWB/general/prices/pv","openWB/optional/et/provider","openWB/optional/ocpp/config","openWB/system/configurable/electricity_tariffs"]}},computed:{electricityTariffList(){return this.$store.state.mqtt["openWB/system/configurable/electricity_tariffs"]}},methods:{getElectricityTariffDefaultConfiguration(t){const e=this.electricityTariffList.find(m=>m.value==t);return Object.prototype.hasOwnProperty.call(e,"defaults")?{...e.defaults}:(console.warn("no default configuration found for electricity tariff type!",t),{})},updateSelectedElectricityTariff(t){this.updateState("openWB/optional/et/provider",t,"type"),this.updateState("openWB/optional/et/provider",this.getElectricityTariffDefaultConfiguration(t))},updateConfiguration(t,e){console.debug("updateConfiguration",t,e),this.updateState(t,e.value,e.object)}}},x={class:"generalChargeConfig"},J={name:"generalChargeConfigForm"},K={key:0},Q={key:1},X={key:2},Y={key:0},ee={key:1},te={key:0},ne={key:2},ie={key:3},re={key:0};function oe(t,e,m,k,z,g){const d=s("openwb-base-alert"),p=s("openwb-base-button-group-input"),c=s("openwb-base-range-input"),v=s("openwb-base-heading"),_=s("openwb-base-number-input"),w=s("openwb-base-card"),S=s("openwb-base-select-input"),$=s("openwb-electricity-tariff-proxy"),V=s("openwb-base-text-input"),T=s("openwb-base-submit-buttons");return a(),u("div",x,[l("form",J,[n(w,{title:"Allgemein"},{default:o(()=>[t.$store.state.mqtt["openWB/general/extern"]===!0?(a(),u("div",K,[n(d,{subtype:"info"},{default:o(()=>e[16]||(e[16]=[i(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')])),_:1})])):(a(),u("div",Q,[n(p,{title:"Begrenzung der Schieflast",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":t.$store.state.mqtt["openWB/general/chargemode_config/unbalanced_load"],"onUpdate:modelValue":e[0]||(e[0]=r=>t.updateState("openWB/general/chargemode_config/unbalanced_load",r))},{help:o(()=>e[17]||(e[17]=[i(" Wenn diese Option aktiviert ist, werden nicht-dreiphasige Ladevorgänge so geregelt, dass am Netzanschlusspunkt (EVU-Zähler) die eingestellte Grenze für die Schieflast nicht überschritten wird. Hierfür muss der EVU-Zähler einzelne Phasenströme bereitstellen!"),l("br",null,null,-1),i(' Weiterhin müssen bei den Ladepunkten sowie Fahrzeugen sämtliche Angaben zur Anzahl angeschlossener/unterstützter Phasen und der Phasenrotation hinterlegt werden, damit der Regelung bekannt ist, welcher Ladevorgang welche Phase am Netzanschluss beeinflusst. siehe "Konfiguration - Ladepunkte -> elektrischer Anschluss - Phase 1" und "Konfiguration - Fahrzeuge -> Fahrzeug-Profile" ')])),_:1},8,["model-value"]),t.$store.state.mqtt["openWB/general/chargemode_config/unbalanced_load"]?(a(),W(c,{key:0,title:"Erlaubte Schieflast",min:10,max:32,step:1,unit:"A","model-value":t.$store.state.mqtt["openWB/general/chargemode_config/unbalanced_load_limit"],"onUpdate:modelValue":e[1]||(e[1]=r=>t.updateState("openWB/general/chargemode_config/unbalanced_load_limit",r))},{help:o(()=>e[18]||(e[18]=[i(" Hiermit wird festgelegt, welche Schieflast am Netzanschlusspunkt erlaubt ist. Bei Überschreitung werden gezielt einzelne Ladevorgänge in der Leistung begrenzt. ")])),_:1},8,["model-value"])):y("",!0),n(p,{title:"Phasenumschaltung wiederholt anstoßen",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":t.$store.state.mqtt["openWB/general/chargemode_config/retry_failed_phase_switches"],"onUpdate:modelValue":e[2]||(e[2]=r=>t.updateState("openWB/general/chargemode_config/retry_failed_phase_switches",r))},{help:o(()=>e[19]||(e[19]=[i(" Wenn diese Option aktiviert ist, werden bis zu drei Umschaltversuche vorgenommen, wenn die vorgegebene und genutzte Phasenzahl nicht übereinstimmen. Wird die Option deaktiviert, wird nur eine Umschaltung durchgeführt."),l("br",null,null,-1),i(" Die gezählten Fehlversuche werden mit dem Abstecken zurückgesetzt. ")])),_:1},8,["model-value"]),n(c,{title:"Verzögerung automat. Phasenumschaltung",min:0,max:14,step:1,labels:[{label:"1⇑ 15⇓ Min.",value:1},{label:"2⇑ 14⇓ Min.",value:2},{label:"3⇑ 13⇓ Min.",value:3},{label:"4⇑ 12⇓ Min.",value:4},{label:"5⇑ 11⇓ Min.",value:5},{label:"6⇑ 10⇓ Min.",value:6},{label:"7⇑ 9⇓ Min.",value:7},{label:"8⇑ 8⇓ Min.",value:8},{label:"9⇑ 7⇓ Min.",value:9},{label:"10⇑ 6⇓ Min.",value:10},{label:"11⇑ 5⇓ Min.",value:11},{label:"12⇑ 4⇓ Min.",value:12},{label:"13⇑ 3⇓ Min.",value:13},{label:"14⇑ 2⇓ Min.",value:14},{label:"15⇑ 1⇓ Min.",value:15}],"model-value":t.$store.state.mqtt["openWB/general/chargemode_config/phase_switch_delay"],"onUpdate:modelValue":e[3]||(e[3]=r=>t.updateState("openWB/general/chargemode_config/phase_switch_delay",r))},{help:o(()=>e[20]||(e[20]=[i(" Um zu viele Umschaltungen zu vermeiden, wird Anhand dieses Wertes definiert, wann die Umschaltung erfolgen soll. Ist für durchgehend x Minuten die Maximalstromstärke erreicht, wird auf mehrphasige Ladung ⇑ umgestellt. Ist die Ladung nur für ein Intervall unterhalb der Maximalstromstärke, beginnt das Intervall für die Umschaltung erneut. Ist die Ladung im mehrphasigen Modus für 16 - x Minuten auf der Minimalstromstärke, wird wieder auf einphasige Ladung ⇓ gewechselt."),l("br",null,null,-1),i(" Ist ausreichend Überschuss vorhanden, wird beim Ladestart die Umschaltverzögerung nicht abgewartet, sondern direkt mit mehrphasiger Ladung begonnen. ")])),_:1},8,["model-value"]),e[24]||(e[24]=l("hr",null,null,-1)),n(v,null,{help:o(()=>e[21]||(e[21]=[i(" Zur Berechnung der Ladekosten im Lade-Protokoll werden stundenweise die Anteile der Stromquellen (Speicher, Netz, PV) berechnet und mit den hier angegebenen Preisen multipliziert."),l("br",null,null,-1),i(" Ist die Abrechnung über das Ladeprotokoll, z.B. mit dem Arbeitgeber, vereinbart, ist bei allen drei Feldern der vereinbarte Preis einzutragen. ")])),default:o(()=>[e[22]||(e[22]=i(" Berechnung der Ladekosten "))]),_:1}),t.$store.state.mqtt["openWB/optional/et/provider"]&&t.$store.state.mqtt["openWB/optional/et/provider"].type?(a(),W(d,{key:1,subtype:"info"},{default:o(()=>e[23]||(e[23]=[i(" Für den Netzbezug wird der dynamische Strompreis des Anbieters für variable Stromtarife verwendet. ")])),_:1})):(a(),u("div",X,[n(_,{title:"Preis für Netzbezug",step:.001,precision:3,unit:"ct/kWh",required:"","model-value":t.$store.state.mqtt["openWB/general/prices/grid"]*1e5,"onUpdate:modelValue":e[4]||(e[4]=r=>t.updateState("openWB/general/prices/grid",parseFloat((r/1e5).toFixed(7))))},null,8,["model-value"])])),n(_,{title:"Preis für Speicherentladung",step:.001,precision:3,unit:"ct/kWh",required:"","model-value":t.$store.state.mqtt["openWB/general/prices/bat"]*1e5,"onUpdate:modelValue":e[5]||(e[5]=r=>t.updateState("openWB/general/prices/bat",parseFloat((r/1e5).toFixed(7))))},null,8,["model-value"]),n(_,{title:"Preis für PV-Strom",step:.001,precision:3,unit:"ct/kWh",required:"","model-value":t.$store.state.mqtt["openWB/general/prices/pv"]*1e5,"onUpdate:modelValue":e[6]||(e[6]=r=>t.updateState("openWB/general/prices/pv",parseFloat((r/1e5).toFixed(7))))},null,8,["model-value"])]))]),_:1}),n(w,{title:"Optional"},{default:o(()=>[t.$store.state.mqtt["openWB/general/extern"]===!0?(a(),u("div",Y,[n(d,{subtype:"info"},{default:o(()=>e[25]||(e[25]=[i(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Steuerungsmodus "secondary" befindet. ')])),_:1})])):(a(),u("div",ee,[n(v,null,{default:o(()=>e[26]||(e[26]=[i(" Variable Stromtarife ")])),_:1}),n(d,{subtype:"info"},{default:o(()=>e[27]||(e[27]=[i(" Bei Sofort- und Zeitladen wird nur geladen, wenn der Strompreis unter dem angegebenen maximalen Strompreis liegt. Für Zielladen wird die Ladedauer ermittelt und dann zu den günstigsten Stunden geladen."),l("br",null,null,-1),i(" Wenn keine Preise abgefragt werden können, wird bei Sofort- und Zeitladen immer geladen und bei Zielladen zunächst mit PV-Überschuss und zum Erreichen des Zieltermins mit Netzstrom. ")])),_:1}),n(S,{class:"mb-2",title:"Anbieter",options:g.electricityTariffList,"model-value":t.$store.state.mqtt["openWB/optional/et/provider"]?t.$store.state.mqtt["openWB/optional/et/provider"].type:"","onUpdate:modelValue":e[7]||(e[7]=r=>g.updateSelectedElectricityTariff(r))},null,8,["options","model-value"]),t.$store.state.mqtt["openWB/optional/et/provider"]&&t.$store.state.mqtt["openWB/optional/et/provider"].type?(a(),u("div",te,[n($,{"electricity-tariff":t.$store.state.mqtt["openWB/optional/et/provider"],"onUpdate:configuration":e[8]||(e[8]=r=>g.updateConfiguration("openWB/optional/et/provider",r))},null,8,["electricity-tariff"])])):y("",!0)])),e[31]||(e[31]=l("hr",null,null,-1)),n(v,null,{default:o(()=>e[28]||(e[28]=[i(" Speicher-Entladung ins Fahrzeug steuern ")])),_:1}),t.$store.state.mqtt["openWB/bat/get/power_limit_controllable"]===!0?(a(),u("div",ne,[n(p,{title:"Speicher-Entladung",buttons:[{buttonValue:"no_limit",text:"immer"},{buttonValue:"limit_stop",text:"gesperrt, wenn Fahrzeug lädt"},{buttonValue:"limit_to_home_consumption",text:"für Hausverbrauch"}],"model-value":t.$store.state.mqtt["openWB/bat/config/power_limit_mode"],"onUpdate:modelValue":e[9]||(e[9]=r=>t.updateState("openWB/bat/config/power_limit_mode",r))},{help:o(()=>e[29]||(e[29]=[i(" Wenn das Entladen des Speichers immer erlaubt ist, wird das Fahrzeug aus dem Speicher geladen anstatt Strom aus dem Netz zu beziehen. "),l("br",null,null,-1),i(' Im Modus "gesperrt, wenn Fahrzeug lädt", wird die Entladung nur zugelassen, wenn alle Fahrzeuge im Modus PV-Laden ohne Mindeststrom oder Zielladen mit PV-Überschuss laden.'),l("br",null,null,-1),i(' Wenn das Entladen des Speichers auf den Hausverbrauch begrenzt ist und mindestens Fahrzeuge nicht im Modus PV-Laden ohne Mindeststrom oder Zielladen lädt, wird die Entladung des Speichers in Höhe des Hausverbrauchs zugelassen. Kann die Entladung am Speicher nur komplett gesperrt werden, verhält sich diese Einstellung wie "gesperrt, wenn Fahrzeug lädt".'),l("br",null,null,-1),i(" Diese Einstellung übersteuert ggf die Einstellungen zur Speicher-Beachtung im Modus PV-Laden. ")])),_:1},8,["model-value"])])):(a(),u("div",ie,[n(d,{subtype:"info"},{default:o(()=>e[30]||(e[30]=[i(" Die Speicher-Entladung ins Fahrzeug kann nicht gesteuert werden, da die Entladeleistung nicht an den/die konfigurierten Speicher übergeben werden kann. ")])),_:1})]))]),_:1}),n(w,{title:"OCPP Anbindung"},{default:o(()=>{var r,P,E,C;return[n(p,{title:"OCPP aktivieren",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":(r=t.$store.state.mqtt["openWB/optional/ocpp/config"])==null?void 0:r.active,"onUpdate:modelValue":e[10]||(e[10]=f=>t.updateState("openWB/optional/ocpp/config",f,"active"))},null,8,["model-value"]),((P=t.$store.state.mqtt["openWB/optional/ocpp/config"])==null?void 0:P.active)===!0?(a(),u("div",re,[n(d,{subtype:"info"},{default:o(()=>e[32]||(e[32]=[i(" Die Ladepunkte übermitteln den ID-Tag, Heartbeat und den Zählerstand zum Zeitpunkt des Ansteckens, Absteckens und alle 5 Minuten. Eine Steuerung per OCPP ist nicht möglich."),l("br",null,null,-1),i(" Alle Ladepunkte, die ihre Daten an das OCPP-Backend übermitteln sollen, müssen zunächst im OCPP-Backend angelegt werden. Die dort eingetragene Chargebox ID muss in der openWB in den Einstellungen des Ladepunkts eingetragen werden. ")])),_:1}),n(V,{title:"URL des OCPP-Backends",subtype:"host","model-value":(E=t.$store.state.mqtt["openWB/optional/ocpp/config"])==null?void 0:E.url,"onUpdate:modelValue":e[11]||(e[11]=f=>t.updateState("openWB/optional/ocpp/config",f,"url"))},null,8,["model-value"]),n(S,{title:"Version","not-selected":"Bitte auswählen",options:[{value:"ocpp1.6",text:"OCPP 1.6"},{value:"ocpp2.0.1",text:"OCPP 2.0.1"}],"model-value":(C=t.$store.state.mqtt["openWB/optional/ocpp/config"])==null?void 0:C.version,"onUpdate:modelValue":e[12]||(e[12]=f=>t.updateState("openWB/optional/ocpp/config",f,"version"))},null,8,["model-value"])])):y("",!0)]}),_:1}),n(T,{"form-name":"generalChargeConfigForm",onSave:e[13]||(e[13]=r=>t.$emit("save")),onReset:e[14]||(e[14]=r=>t.$emit("reset")),onDefaults:e[15]||(e[15]=r=>t.$emit("defaults"))})])])}const ae=h(G,[["render",oe],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/GeneralChargeConfig.vue"]]),de=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"}));export{A as E,de as G};
