import{C as f}from"./index-30b4f218.js";import{l as w,K as q,F as T,L as x,M as W,c as k,N as E,O as R,P as M,Q as D,R as G,S as H,T as Z,U as K,V as I,W as F,X as J,Y as U,Z as Q}from"./vendor-fortawesome-05d7e447.js";import{_ as y,u as l,k as r,z as b,E as i,G as c,y as g,x as e,F as a,l as n,q as S,B,N,M as $}from"./vendor-06e11d0e.js";import{C as X,p as Y,a as ee,L as te,b as se,P as oe,c as ae,T as ie,i as re,d as ce,e as ne}from"./vendor-chartjs-888a84c2.js";import"./vendor-bootstrap-4263d7eb.js";import"./vendor-jquery-9fc083b4.js";import"./vendor-axios-22b906fb.js";import"./vendor-sortablejs-0bb60e5b.js";import"./vendor-luxon-8ddd27a0.js";w.add(q);const le={name:"ChargePointSumCard",components:{FontAwesomeIcon:T},mixins:[f],computed:{baseTopic:{get(){return"openWB/chargepoint"}}}},de={class:"text-right"},pe={class:"row"},ue={class:"col text-right text-monospace"},he={class:"row"},ge={class:"col-4 text-right text-monospace"},me={class:"col-4 text-right text-monospace"},be={class:"row"},_e={class:"col-4 text-right text-monospace"},ve={class:"col-4 text-right text-monospace"};function fe(s,o,u,m,_,t){const p=l("font-awesome-icon"),d=l("openwb-base-card");return r(),b(d,{subtype:"primary",collapsible:!0,collapsed:!0,class:"pb-0"},{header:i(()=>[c(p,{"fixed-width":"",icon:["fas","charging-station"]}),o[0]||(o[0]=g(" Alle Ladepunkte "))]),actions:i(()=>[e("span",de,a(s.formatNumberTopic(t.baseTopic+"/get/power",3,3,.001))+" kW ",1)]),default:i(()=>[c(d,{subtype:"white","body-bg":"white",class:"py-1 mb-2"},{default:i(()=>[o[1]||(o[1]=e("div",{class:"row py-2"},[e("div",{class:"col font-weight-bold"},"Ladevorgang"),e("div",{class:"col text-right"},"Leistung")],-1)),e("div",pe,[e("div",ue,a(s.formatNumberTopic(t.baseTopic+"/get/power",3,3,.001)),1)])]),_:1}),c(d,{subtype:"white","body-bg":"white",class:"py-1 mb-2",title:"Zählerstände"},{default:i(()=>[o[4]||(o[4]=e("div",{class:"row justify-content-end"},[e("div",{class:"col-4 text-right"},"Geladen"),e("div",{class:"col-4 text-right"},"Entladen")],-1)),e("div",he,[o[2]||(o[2]=e("div",{class:"col text-right"},"Heute",-1)),e("div",ge,a(s.formatNumberTopic(t.baseTopic+"/get/daily_imported",3,3,.001)+" kWh"),1),e("div",me,a(s.formatNumberTopic(t.baseTopic+"/get/daily_exported",3,3,.001)+" kWh"),1)]),e("div",be,[o[3]||(o[3]=e("div",{class:"col text-right"},"Gesamt",-1)),e("div",_e,a(s.formatNumberTopic(t.baseTopic+"/get/imported",3,3,.001)+" kWh"),1),e("div",ve,a(s.formatNumberTopic(t.baseTopic+"/get/exported",3,3,.001)+" kWh"),1)])]),_:1})]),_:1})}const ye=y(le,[["render",fe],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/ChargePointSumCard.vue"]]);w.add(x,W,k,q,E,R,M,D,G,H,Z);const we={name:"ChargePointCard",components:{FontAwesomeIcon:T},mixins:[f],props:{installedChargePointKey:{type:String,required:!0},installedChargePoint:{type:Object,required:!0}},computed:{chargePointIndex:{get(){return parseInt(this.installedChargePointKey.match(/(?:\/)(\d+)(?=\/)/)[1])}},baseTopic:{get(){return"openWB/chargepoint/"+this.chargePointIndex}},chargingStatus:{get(){let s=this.chargePointIndex,o=this.$store.state.mqtt["openWB/chargepoint/"+s+"/get/plug_state"],u=this.$store.state.mqtt["openWB/chargepoint/"+s+"/get/charge_state"];return o==1&&u==1?{icon:["fas","plug-circle-bolt"],text:"Fahrzeug angesteckt, Ladevorgang aktiv"}:o==1?{icon:["fas","plug-circle-check"],text:"Fahrzeug angesteckt, kein Ladevorgang aktiv"}:{icon:["fas","plug-circle-minus"],text:"Kein Fahrzeug angesteckt"}}}}},Te={key:0,class:"text-right"},xe={key:0},We={key:1},ke={class:"row py-2"},Se={class:"col text-right"},Be={style:{"white-space":"pre-wrap"}},Ce={class:"row"},Ne={class:"col text-right text-monospace"},$e={class:"col text-right text-monospace"},Pe={class:"row"},qe={key:0,class:"col text-right text-monospace"},Ie={key:1,class:"col text-right text-monospace"},Fe={class:"col text-right text-monospace"},Ae={class:"row"},Le={class:"col-4 text-right text-monospace"},je={class:"col-4 text-right text-monospace"},Oe={class:"row"},Ve={class:"col-4 text-right text-monospace"},ze={class:"col-4 text-right text-monospace"},Ee={class:"row"},Re={class:"col text-right text-monospace"},Me={class:"col text-right text-monospace"},De={class:"col text-right text-monospace"},Ge={class:"row"},He={class:"col text-right text-monospace"},Ze={class:"col text-right text-monospace"},Ke={class:"col text-right text-monospace"},Je={class:"row"},Ue={class:"col text-right text-monospace"},Qe={class:"col text-right text-monospace"},Xe={class:"col text-right text-monospace"},Ye={class:"row"},et={class:"col text-right text-monospace"},tt={class:"col text-right text-monospace"},st={class:"col text-right text-monospace"},ot={class:"row"},at={class:"col text-center text-monospace"},it={class:"container"},rt={class:"row"},ct={class:"col px-0"},nt={style:{"white-space":"pre-wrap"}},lt={class:"col col-auto pr-0"},dt={class:"text-right"};function pt(s,o,u,m,_,t){const p=l("font-awesome-icon"),d=l("openwb-base-alert"),h=l("openwb-base-card");return r(),b(h,{subtype:"primary",collapsible:!0,collapsed:!0,class:"pb-0"},{header:i(()=>[c(p,{"fixed-width":"",icon:["fas","charging-station"]}),g(" "+a(u.installedChargePoint.name),1)]),actions:i(()=>[s.getFaultStateSubtype(t.baseTopic)=="success"?(r(),n("div",Te,[g(a(s.formatNumberTopic(t.baseTopic+"/get/power",3,3,.001))+" kW ",1),c(p,{"fixed-width":"",icon:t.chargingStatus.icon,title:t.chargingStatus.text},null,8,["icon","title"])])):(r(),n("span",{key:1,class:S("subheader pill bg-"+s.getFaultStateSubtype(t.baseTopic))},[s.getFaultStateSubtype(t.baseTopic)=="warning"?(r(),n("div",xe,"Warnung")):(r(),n("div",We,"Fehler"))],2))]),footer:i(()=>[e("div",it,[e("div",rt,[e("div",ct,[c(d,{subtype:s.getFaultStateSubtype(t.baseTopic)},{default:i(()=>[c(p,{"fixed-width":"",icon:s.stateIcon},null,8,["icon"]),o[12]||(o[12]=g(" Modulmeldung: ")),e("span",nt,a(s.$store.state.mqtt[t.baseTopic+"/get/fault_str"]),1)]),_:1},8,["subtype"])]),e("div",lt,[e("div",dt,"ID: "+a(t.chargePointIndex),1)])])])]),default:i(()=>[c(h,{subtype:"white","body-bg":"white",class:"py-1 mb-2"},{default:i(()=>[e("div",ke,[o[0]||(o[0]=e("div",{class:"col col-auto font-weight-bold"},"Status",-1)),e("div",Se,[c(p,{"fixed-width":"",icon:t.chargingStatus.icon,title:t.chargingStatus.text},null,8,["icon","title"]),g(" "+a(t.chargingStatus.text),1)])]),c(d,{subtype:"info"},{default:i(()=>[o[1]||(o[1]=g(" Statusmeldung: ")),e("span",Be,a(s.$store.state.mqtt[t.baseTopic+"/get/state_str"]),1)]),_:1})]),_:1}),c(h,{subtype:"white","body-bg":"white",class:"py-1 mb-2",title:"Ladevorgang"},{default:i(()=>[o[2]||(o[2]=e("div",{class:"row"},[e("div",{class:"col text-right"},"Ladestrom Vorgabe"),e("div",{class:"col text-right"},"Leistung")],-1)),e("div",Ce,[e("div",Ne,a(s.formatNumberTopic(t.baseTopic+"/set/current",2))+" A",1),e("div",$e,a(s.formatNumberTopic(t.baseTopic+"/get/power",3,3,.001))+" kW ",1)]),o[3]||(o[3]=e("div",{class:"row"},[e("div",{class:"col text-right"},"Phasen Vorgabe"),e("div",{class:"col text-right"},"Phasen Aktuell")],-1)),e("div",Pe,[s.$store.state.mqtt["openWB/general/extern"]===!0?(r(),n("div",qe,a(s.formatNumberTopic("openWB/internal_chargepoint/"+t.chargePointIndex+"/data/phases_to_use")),1)):(r(),n("div",Ie,a(s.formatNumberTopic(t.baseTopic+"/set/phases_to_use")),1)),e("div",Fe,a(s.formatNumberTopic(t.baseTopic+"/get/phases_in_use")),1)])]),_:1}),c(h,{subtype:"white","body-bg":"white",class:"py-1 mb-2",title:"Zählerstände"},{default:i(()=>[o[6]||(o[6]=e("div",{class:"row justify-content-end"},[e("div",{class:"col-4 text-right"},"Geladen"),e("div",{class:"col-4 text-right"},"Entladen")],-1)),e("div",Ae,[o[4]||(o[4]=e("div",{class:"col text-right"},"Heute",-1)),e("div",Le,a(s.formatNumberTopic(t.baseTopic+"/get/daily_imported",3,3,.001))+" kWh ",1),e("div",je,a(s.formatNumberTopic(t.baseTopic+"/get/daily_exported",3,3,.001))+" kWh ",1)]),e("div",Oe,[o[5]||(o[5]=e("div",{class:"col text-right"},"Gesamt",-1)),e("div",Ve,a(s.formatNumberTopic(t.baseTopic+"/get/imported",3,3,.001))+" kWh ",1),e("div",ze,a(s.formatNumberTopic(t.baseTopic+"/get/exported",3,3,.001))+" kWh ",1)])]),_:1}),c(h,{subtype:"white","body-bg":"white",class:"py-1 mb-2",title:"Werte pro Phase"},{default:i(()=>[e("div",Ee,[o[7]||(o[7]=e("div",{class:"col-md-4 pr-1 text-center text-md-right"},"Spannung [V]",-1)),e("div",Re,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/voltages",1).split(" / ")[0]),1),e("div",Me,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/voltages",1).split(" / ")[1]),1),e("div",De,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/voltages",1).split(" / ")[2]),1)]),e("div",Ge,[o[8]||(o[8]=e("div",{class:"col-md-4 pr-1 text-center text-md-right"},"Strom [A]",-1)),e("div",He,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/currents",2).split(" / ")[0]),1),e("div",Ze,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/currents",2).split(" / ")[1]),1),e("div",Ke,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/currents",2).split(" / ")[2]),1)]),e("div",Je,[o[9]||(o[9]=e("div",{class:"col-md-4 pr-1 text-center text-md-right"},"Wirkleistung [kW]",-1)),e("div",Ue,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/powers",3,3,.001).split(" / ")[0]),1),e("div",Qe,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/powers",3,3,.001).split(" / ")[1]),1),e("div",Xe,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/powers",3,3,.001).split(" / ")[2]),1)]),e("div",Ye,[o[10]||(o[10]=e("div",{class:"col-md-4 pr-1 text-center text-md-right"},"Leistungsfaktor",-1)),e("div",et,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/power_factors",2).split(" / ")[0]),1),e("div",tt,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/power_factors",2).split(" / ")[1]),1),e("div",st,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/power_factors",2).split(" / ")[2]),1)]),e("div",ot,[o[11]||(o[11]=e("div",{class:"col-md-4 pr-1 text-center text-md-right"},"Netzfrequenz",-1)),e("div",at,a(s.formatNumberTopic(t.baseTopic+"/get/frequency",3))+" Hz ",1)])]),_:1})]),_:1})}const ut=y(we,[["render",pt],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/ChargePointCard.vue"]]);w.add(x,W,k,K);const ht={name:"CounterCard",components:{FontAwesomeIcon:T},mixins:[f],props:{counter:{type:Object,required:!0}},computed:{baseTopic:{get(){return"openWB/counter/"+this.counter.id}}}},gt={key:0,class:"text-right"},mt={key:0},bt={key:1},_t={class:"row"},vt={class:"col text-right text-monospace pl-0"},ft={class:"col text-right text-monospace pl-0"},yt={class:"row"},wt={class:"col text-right text-monospace pl-0"},Tt={class:"col text-right text-monospace pl-0"},xt={class:"row"},Wt={class:"col"},kt={class:"row"},St={class:"col text-right text-monospace pl-0"},Bt={class:"col text-right text-monospace pl-0"},Ct={class:"col text-right text-monospace pl-0"},Nt={class:"row"},$t={class:"col"},Pt={class:"row"},qt={class:"col text-right text-monospace pl-0"},It={class:"col text-right text-monospace pl-0"},Ft={class:"col text-right text-monospace pl-0"},At={class:"row"},Lt={class:"col"},jt={class:"row"},Ot={class:"col text-right text-monospace pl-0"},Vt={class:"col text-right text-monospace pl-0"},zt={class:"col text-right text-monospace pl-0"},Et={class:"row"},Rt={class:"col"},Mt={class:"row"},Dt={class:"col text-right text-monospace pl-0"},Gt={class:"col text-right text-monospace pl-0"},Ht={class:"col text-right text-monospace pl-0"},Zt={class:"container"},Kt={class:"row"},Jt={class:"col px-0"},Ut={style:{"white-space":"pre-wrap"}},Qt={class:"col col-auto pr-0"},Xt={class:"text-right"};function Yt(s,o,u,m,_,t){const p=l("font-awesome-icon"),d=l("openwb-base-card"),h=l("openwb-base-alert");return r(),b(d,{subtype:"danger",collapsible:!0,collapsed:!0,class:"pb-0"},{header:i(()=>[c(p,{"fixed-width":"",icon:["fas","gauge-high"]}),g(" "+a(u.counter.name),1)]),actions:i(()=>[s.getFaultStateSubtype(t.baseTopic)=="success"?(r(),n("div",gt,a(s.formatNumberTopic(t.baseTopic+"/get/power",3,3,.001))+" kW ",1)):(r(),n("span",{key:1,class:S("subheader pill bg-"+s.getFaultStateSubtype(t.baseTopic))},[s.getFaultStateSubtype(t.baseTopic)=="warning"?(r(),n("div",mt,"Warnung")):(r(),n("div",bt,"Fehler"))],2))]),footer:i(()=>[e("div",Zt,[e("div",Kt,[e("div",Jt,[c(h,{subtype:s.getFaultStateSubtype(t.baseTopic)},{default:i(()=>[c(p,{"fixed-width":"",icon:s.stateIcon},null,8,["icon"]),o[6]||(o[6]=g(" Modulmeldung: ")),e("span",Ut,a(s.$store.state.mqtt[t.baseTopic+"/get/fault_str"]),1)]),_:1},8,["subtype"])]),e("div",Qt,[e("div",Xt,"ID: "+a(u.counter.id),1)])])])]),default:i(()=>[c(d,{title:"Aktuelle Werte",subtype:"white","body-bg":"white",class:"py-1 mb-2"},{default:i(()=>[o[0]||(o[0]=e("div",{class:"row"},[e("div",{class:"col-6 text-right"},"Leistung"),e("div",{class:"col-6 text-right"},"Netzfrequenz")],-1)),e("div",_t,[e("div",vt,a(s.formatNumberTopic(t.baseTopic+"/get/power",3,3,.001)+" kW"),1),e("div",ft,a(s.formatNumberTopic(t.baseTopic+"/get/frequency",3)+" Hz"),1)])]),_:1}),c(d,{title:"Zählerstände",subtype:"white","body-bg":"white",class:"py-1 mb-2"},{default:i(()=>[o[1]||(o[1]=e("div",{class:"row"},[e("div",{class:"col-6 text-right"},"Export"),e("div",{class:"col-6 text-right"},"Import")],-1)),e("div",yt,[e("div",wt,a(s.formatNumberTopic(t.baseTopic+"/get/exported",3,3,.001)+" kWh"),1),e("div",Tt,a(s.formatNumberTopic(t.baseTopic+"/get/imported",3,3,.001)+" kWh"),1)])]),_:1}),c(d,{title:"Werte pro Phase",subtype:"white","body-bg":"white",class:"py-1 mb-2"},{default:i(()=>[e("div",xt,[o[2]||(o[2]=e("div",{class:"col-md-4 pr-0 text-center text-md-right"},"Spannung [V]",-1)),e("div",Wt,[e("div",kt,[e("div",St,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/voltages",1).split(" / ")[0]),1),e("div",Bt,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/voltages",1).split(" / ")[1]),1),e("div",Ct,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/voltages",1).split(" / ")[2]),1)])])]),e("div",Nt,[o[3]||(o[3]=e("div",{class:"col-md-4 pr-0 text-center text-md-right"},"Strom [A]",-1)),e("div",$t,[e("div",Pt,[e("div",qt,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/currents",2).split(" / ")[0]),1),e("div",It,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/currents",2).split(" / ")[1]),1),e("div",Ft,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/currents",2).split(" / ")[2]),1)])])]),e("div",At,[o[4]||(o[4]=e("div",{class:"col-md-4 pr-0 text-center text-md-right"},"Wirkleistung [kW]",-1)),e("div",Lt,[e("div",jt,[e("div",Ot,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/powers",3,3,.001).split(" / ")[0]),1),e("div",Vt,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/powers",3,3,.001).split(" / ")[1]),1),e("div",zt,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/powers",3,3,.001).split(" / ")[2]),1)])])]),e("div",Et,[o[5]||(o[5]=e("div",{class:"col-md-4 pr-0 text-center text-md-right"},"Leistungsfaktor",-1)),e("div",Rt,[e("div",Mt,[e("div",Dt,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/power_factors",2).split(" / ")[0]),1),e("div",Gt,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/power_factors",2).split(" / ")[1]),1),e("div",Ht,a(s.formatPhaseArrayNumberTopic(t.baseTopic+"/get/power_factors",2).split(" / ")[2]),1)])])])]),_:1})]),_:1})}const es=y(ht,[["render",Yt],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/CounterCard.vue"]]);w.add(x,W,k,I);const ts={name:"InverterSumCard",components:{FontAwesomeIcon:T},mixins:[f],computed:{baseTopic:{get(){return"openWB/pv"}}}},ss={key:0,class:"text-right"},os={key:0},as={key:1},is={class:"row"},rs={class:"col text-right text-monospace"},cs={class:"col text-right text-monospace"},ns={class:"row"},ls={class:"col text-right text-monospace"},ds={class:"col text-right text-monospace"},ps={class:"col text-right text-monospace"},us={class:"container"},hs={class:"row"},gs={class:"col px-0"},ms={style:{"white-space":"pre-wrap"}};function bs(s,o,u,m,_,t){const p=l("font-awesome-icon"),d=l("openwb-base-card"),h=l("openwb-base-alert");return r(),b(d,{subtype:"success",collapsible:!0,collapsed:!0,class:"pb-0"},{header:i(()=>[c(p,{"fixed-width":"",icon:["fas","solar-panel"]}),o[0]||(o[0]=g(" Alle Wechselrichter "))]),actions:i(()=>[s.getFaultStateSubtype(t.baseTopic)=="success"?(r(),n("div",ss,a(s.formatNumberTopic(t.baseTopic+"/get/power",3,3,.001))+" kW ",1)):(r(),n("span",{key:1,class:S("subheader pill bg-"+s.getFaultStateSubtype(t.baseTopic))},[s.getFaultStateSubtype(t.baseTopic)=="warning"?(r(),n("div",os,"Warnung")):(r(),n("div",as,"Fehler"))],2))]),footer:i(()=>[e("div",us,[e("div",hs,[e("div",gs,[c(h,{subtype:s.getFaultStateSubtype(t.baseTopic)},{default:i(()=>[c(p,{"fixed-width":"",icon:s.stateIcon},null,8,["icon"]),o[3]||(o[3]=g(" Modulmeldung: ")),e("span",ms,a(s.$store.state.mqtt[t.baseTopic+"/get/fault_str"]),1)]),_:1},8,["subtype"])])])])]),default:i(()=>[c(d,{title:"Aktuelle Werte",subtype:"white","body-bg":"white",class:"py-1 mb-2"},{default:i(()=>[o[1]||(o[1]=e("div",{class:"row"},[e("div",{class:"col text-right"},"Leistung"),e("div",{class:"col text-right"},"Zählerstand")],-1)),e("div",is,[e("div",rs,a(s.formatNumberTopic(t.baseTopic+"/get/power",3,3,.001))+" kW ",1),e("div",cs,a(s.formatNumberTopic(t.baseTopic+"/get/exported",3,3,.001))+" kWh ",1)])]),_:1}),c(d,{title:"Erträge",subtype:"white","body-bg":"white",class:"py-1 mb-2"},{default:i(()=>[o[2]||(o[2]=e("div",{class:"row"},[e("div",{class:"col text-right"},"Heute"),e("div",{class:"col text-right"},"Monat"),e("div",{class:"col text-right"},"Jahr")],-1)),e("div",ns,[e("div",ls,a(s.formatNumberTopic(t.baseTopic+"/get/daily_exported",3,3,.001))+" kWh ",1),e("div",ds,a(s.formatNumberTopic(t.baseTopic+"/get/monthly_exported",1,1,.001))+" kWh ",1),e("div",ps,a(s.formatNumberTopic(t.baseTopic+"/get/yearly_exported",0,0,.001))+" kWh ",1)])]),_:1})]),_:1})}const _s=y(ts,[["render",bs],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/InverterSumCard.vue"]]);w.add(x,W,k,I);const vs={name:"InverterCard",components:{FontAwesomeIcon:T},mixins:[f],props:{inverter:{type:Object,required:!0}},computed:{baseTopic:{get(){return"openWB/pv/"+this.inverter.id}}}},fs={key:0,class:"text-right"},ys={key:0},ws={key:1},Ts={class:"row"},xs={class:"col text-right text-monospace"},Ws={class:"col text-right text-monospace"},ks={class:"row"},Ss={class:"col text-right text-monospace"},Bs={class:"col text-right text-monospace"},Cs={class:"col text-right text-monospace"},Ns={class:"container"},$s={class:"row"},Ps={class:"col px-0"},qs={style:{"white-space":"pre-wrap"}},Is={class:"col col-auto pr-0"},Fs={class:"text-right"};function As(s,o,u,m,_,t){const p=l("font-awesome-icon"),d=l("openwb-base-card"),h=l("openwb-base-alert");return r(),b(d,{subtype:"success",collapsible:!0,collapsed:!0,class:"pb-0"},{header:i(()=>[c(p,{"fixed-width":"",icon:["fas","solar-panel"]}),g(" "+a(u.inverter.name),1)]),actions:i(()=>[s.getFaultStateSubtype(t.baseTopic)=="success"?(r(),n("div",fs,a(s.formatNumberTopic(t.baseTopic+"/get/power",3,3,.001))+" kW ",1)):(r(),n("span",{key:1,class:S("subheader pill bg-"+s.getFaultStateSubtype(t.baseTopic))},[s.getFaultStateSubtype(t.baseTopic)=="warning"?(r(),n("div",ys,"Warnung")):(r(),n("div",ws,"Fehler"))],2))]),footer:i(()=>[e("div",Ns,[e("div",$s,[e("div",Ps,[c(h,{subtype:s.getFaultStateSubtype(t.baseTopic)},{default:i(()=>[c(p,{"fixed-width":"",icon:s.stateIcon},null,8,["icon"]),o[2]||(o[2]=g(" Modulmeldung: ")),e("span",qs,a(s.$store.state.mqtt[t.baseTopic+"/get/fault_str"]),1)]),_:1},8,["subtype"])]),e("div",Is,[e("div",Fs,"ID: "+a(u.inverter.id),1)])])])]),default:i(()=>[c(d,{title:"Aktuelle Werte",subtype:"white","body-bg":"white",class:"py-1 mb-2"},{default:i(()=>[o[0]||(o[0]=e("div",{class:"row"},[e("div",{class:"col text-right"},"Leistung"),e("div",{class:"col text-right"},"Zählerstand")],-1)),e("div",Ts,[e("div",xs,a(s.formatNumberTopic(t.baseTopic+"/get/power",3,3,.001))+" kW ",1),e("div",Ws,a(s.formatNumberTopic(t.baseTopic+"/get/exported",3,3,.001))+" kWh ",1)])]),_:1}),c(d,{title:"Erträge",subtype:"white","body-bg":"white",class:"py-1 mb-2"},{default:i(()=>[o[1]||(o[1]=e("div",{class:"row"},[e("div",{class:"col text-right"},"Heute"),e("div",{class:"col text-right"},"Monat"),e("div",{class:"col text-right"},"Jahr")],-1)),e("div",ks,[e("div",Ss,a(s.formatNumberTopic(t.baseTopic+"/get/daily_exported",3,3,.001))+" kWh ",1),e("div",Bs,a(s.formatNumberTopic(t.baseTopic+"/get/monthly_exported",1,1,.001))+" kWh ",1),e("div",Cs,a(s.formatNumberTopic(t.baseTopic+"/get/yearly_exported",0,0,.001))+" kWh ",1)])]),_:1})]),_:1})}const Ls=y(vs,[["render",As],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/InverterCard.vue"]]);w.add(x,W,k,F);const js={name:"BatterySumCard",components:{FontAwesomeIcon:T},mixins:[f],computed:{baseTopic:{get(){return"openWB/bat"}}}},Os={key:0,class:"text-right"},Vs={key:0},zs={key:1},Es={class:"row"},Rs={class:"col text-right text-monospace pl-0"},Ms={class:"col text-right text-monospace pl-0"},Ds={class:"row"},Gs={class:"col text-right text-monospace"},Hs={class:"col text-right text-monospace"},Zs={class:"row"},Ks={class:"col text-right text-monospace"},Js={class:"col text-right text-monospace"},Us={style:{"white-space":"pre-wrap"}};function Qs(s,o,u,m,_,t){const p=l("font-awesome-icon"),d=l("openwb-base-card"),h=l("openwb-base-alert");return r(),b(d,{subtype:"warning",collapsible:!0,collapsed:!0,class:"pb-0"},{header:i(()=>[c(p,{"fixed-width":"",icon:["fas","car-battery"]}),o[0]||(o[0]=g(" Alle Speicher "))]),actions:i(()=>[s.getFaultStateSubtype(t.baseTopic)=="success"?(r(),n("div",Os,a(s.formatNumberTopic(t.baseTopic+"/get/power",1,1,.001))+" kW / "+a(s.$store.state.mqtt[t.baseTopic+"/get/soc"])+" % ",1)):(r(),n("span",{key:1,class:S("subheader pill bg-"+s.getFaultStateSubtype(t.baseTopic))},[s.getFaultStateSubtype(t.baseTopic)=="warning"?(r(),n("div",Vs,"Warnung")):(r(),n("div",zs,"Fehler"))],2))]),footer:i(()=>[c(h,{subtype:s.getFaultStateSubtype(t.baseTopic)},{default:i(()=>[c(p,{"fixed-width":"",icon:s.stateIcon},null,8,["icon"]),o[5]||(o[5]=g(" Modulmeldung: ")),e("span",Us,a(s.$store.state.mqtt[t.baseTopic+"/get/fault_str"]),1)]),_:1},8,["subtype"])]),default:i(()=>[c(d,{title:"Aktuelle Werte",subtype:"white","body-bg":"white",class:"py-1 mb-2"},{default:i(()=>[o[1]||(o[1]=e("div",{class:"row"},[e("div",{class:"col-6 text-right"},"Leistung"),e("div",{class:"col-6 text-right"},"Ladestand")],-1)),e("div",Es,[e("div",Rs,a(s.formatNumberTopic(t.baseTopic+"/get/power",3,3,.001))+" kW ",1),e("div",Ms,a(s.$store.state.mqtt[t.baseTopic+"/get/soc"])+" %",1)])]),_:1}),c(d,{title:"Zählerstände",subtype:"white","body-bg":"white",class:"py-1 mb-2"},{default:i(()=>[o[4]||(o[4]=e("div",{class:"row"},[e("div",{class:"col"}),e("div",{class:"col text-right"},"Geladen"),e("div",{class:"col text-right"},"Entladen")],-1)),e("div",Ds,[o[2]||(o[2]=e("div",{class:"col text-right"},"Heute",-1)),e("div",Gs,a(s.formatNumberTopic(t.baseTopic+"/get/daily_imported",3,3,.001))+" kWh ",1),e("div",Hs,a(s.formatNumberTopic(t.baseTopic+"/get/daily_exported",3,3,.001))+" kWh ",1)]),e("div",Zs,[o[3]||(o[3]=e("div",{class:"col text-right"},"Gesamt",-1)),e("div",Ks,a(s.formatNumberTopic(t.baseTopic+"/get/imported",3,3,.001))+" kWh ",1),e("div",Js,a(s.formatNumberTopic(t.baseTopic+"/get/exported",3,3,.001))+" kWh ",1)])]),_:1})]),_:1})}const Xs=y(js,[["render",Qs],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/BatterySumCard.vue"]]);w.add(x,W,k,F);const Ys={name:"BatteryCard",components:{FontAwesomeIcon:T},mixins:[f],props:{battery:{type:Object,required:!0}},computed:{baseTopic:{get(){return"openWB/bat/"+this.battery.id}}}},eo={key:0,class:"text-right"},to={key:0},so={key:1},oo={class:"row"},ao={class:"col text-right text-monospace pl-0"},io={class:"col text-right text-monospace pl-0"},ro={class:"row"},co={class:"col text-right text-monospace"},no={class:"col text-right text-monospace"},lo={class:"row"},po={class:"col text-right text-monospace"},uo={class:"col text-right text-monospace"},ho={class:"container"},go={class:"row"},mo={class:"col px-0"},bo={style:{"white-space":"pre-wrap"}},_o={class:"col col-auto pr-0"},vo={class:"text-right"};function fo(s,o,u,m,_,t){const p=l("font-awesome-icon"),d=l("openwb-base-card"),h=l("openwb-base-alert");return r(),b(d,{subtype:"warning",collapsible:!0,collapsed:!0,class:"pb-0"},{header:i(()=>[c(p,{"fixed-width":"",icon:["fas","car-battery"]}),g(" "+a(u.battery.name),1)]),actions:i(()=>[s.getFaultStateSubtype(t.baseTopic)=="success"?(r(),n("div",eo,a(s.formatNumberTopic(t.baseTopic+"/get/power",1,1,.001))+" kW / "+a(s.$store.state.mqtt[t.baseTopic+"/get/soc"])+" % ",1)):(r(),n("span",{key:1,class:S("subheader pill bg-"+s.getFaultStateSubtype(t.baseTopic))},[s.getFaultStateSubtype(t.baseTopic)=="warning"?(r(),n("div",to,"Warnung")):(r(),n("div",so,"Fehler"))],2))]),footer:i(()=>[e("div",ho,[e("div",go,[e("div",mo,[c(h,{subtype:s.getFaultStateSubtype(t.baseTopic)},{default:i(()=>[c(p,{"fixed-width":"",icon:s.stateIcon},null,8,["icon"]),o[4]||(o[4]=g(" Modulmeldung: ")),e("span",bo,a(s.$store.state.mqtt[t.baseTopic+"/get/fault_str"]),1)]),_:1},8,["subtype"])]),e("div",_o,[e("div",vo,"ID: "+a(u.battery.id),1)])])])]),default:i(()=>[c(d,{title:"Aktuelle Werte",subtype:"white","body-bg":"white",class:"py-1 mb-2"},{default:i(()=>[o[0]||(o[0]=e("div",{class:"row"},[e("div",{class:"col-6 text-right"},"Leistung"),e("div",{class:"col-6 text-right"},"Ladestand")],-1)),e("div",oo,[e("div",ao,a(s.formatNumberTopic(t.baseTopic+"/get/power",3,3,.001))+" kW ",1),e("div",io,a(s.$store.state.mqtt[t.baseTopic+"/get/soc"])+" %",1)])]),_:1}),c(d,{title:"Zählerstände",subtype:"white","body-bg":"white",class:"py-1 mb-2"},{default:i(()=>[o[3]||(o[3]=e("div",{class:"row"},[e("div",{class:"col"}),e("div",{class:"col text-right"},"Geladen"),e("div",{class:"col text-right"},"Entladen")],-1)),e("div",ro,[o[1]||(o[1]=e("div",{class:"col text-right"},"Heute",-1)),e("div",co,a(s.formatNumberTopic(t.baseTopic+"/get/daily_imported",3,3,.001))+" kWh ",1),e("div",no,a(s.formatNumberTopic(t.baseTopic+"/get/daily_exported",3,3,.001))+" kWh ",1)]),e("div",lo,[o[2]||(o[2]=e("div",{class:"col text-right"},"Gesamt",-1)),e("div",po,a(s.formatNumberTopic(t.baseTopic+"/get/imported",3,3,.001))+" kWh ",1),e("div",uo,a(s.formatNumberTopic(t.baseTopic+"/get/exported",3,3,.001))+" kWh ",1)])]),_:1})]),_:1})}const yo=y(Ys,[["render",fo],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/BatteryCard.vue"]]);w.add(x,W,k,J);const wo={name:"RippleControlReceiverCard",components:{FontAwesomeIcon:T},mixins:[f],data(){return{mqttTopicsToSubscribe:["openWB/general/ripple_control_receiver/get/fault_state","openWB/general/ripple_control_receiver/get/fault_str","openWB/general/ripple_control_receiver/get/override_value","openWB/general/ripple_control_receiver/module"]}},computed:{baseTopic:{get(){return"openWB/general/ripple_control_receiver"}}}},To={class:"row"},xo={key:0,class:"col"},Wo={key:1,class:"col"},ko={style:{"white-space":"pre-wrap"}};function So(s,o,u,m,_,t){const p=l("font-awesome-icon"),d=l("openwb-base-card"),h=l("openwb-base-alert");return s.$store.state.mqtt[t.baseTopic+"/module"]&&s.$store.state.mqtt[t.baseTopic+"/module"].type?(r(),b(d,{key:0,subtype:"secondary",collapsible:!0,collapsed:!0,class:"pb-0"},{header:i(()=>[c(p,{icon:["fas","tower-broadcast"]}),o[0]||(o[0]=g(" Steuerbare Verbrauchseinrichtung (RSE) "))]),footer:i(()=>[c(h,{subtype:s.getFaultStateSubtype(t.baseTopic)},{default:i(()=>[c(p,{"fixed-width":"",icon:s.stateIcon},null,8,["icon"]),o[2]||(o[2]=g(" Modulmeldung: ")),e("span",ko,a(s.$store.state.mqtt[t.baseTopic+"/get/fault_str"]),1)]),_:1},8,["subtype"])]),default:i(()=>[c(d,{title:"Aktuelle Werte",subtype:"white","body-bg":"white",class:"py-1 mb-2"},{default:i(()=>[e("div",To,[o[1]||(o[1]=e("div",{class:"col"},"Status",-1)),s.$store.state.mqtt[t.baseTopic+"/get/override_value"]==0?(r(),n("div",xo," Laden gesperrt ")):(r(),n("div",Wo," Laden erlaubt ("+a(s.$store.state.mqtt[t.baseTopic+"/get/override_value"])+" %) ",1))])]),_:1})]),_:1})):B("",!0)}const Bo=y(wo,[["render",So],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/RippleControlReceiver.vue"]]);w.add(x,W,k,U);const Co={name:"VehicleCard",components:{FontAwesomeIcon:T},mixins:[f],props:{vehicle:{type:Object,required:!1,default:void 0},vehicleKey:{type:String,required:!0},vehicleName:{type:String,default:""}},computed:{vehicleIndex:{get(){return parseInt(this.vehicleKey.match(/(?:\/)(\d+)(?=\/)/)[1])}},soc:{get(){return this.formatNumberTopic(this.baseTopic+"/get/soc")}},socTimestamp:{get(){return this.$store.state.mqtt["openWB/vehicle/"+this.vehicleIndex+"/get/soc_timestamp"]!==void 0?new Date(this.$store.state.mqtt["openWB/vehicle/"+this.vehicleIndex+"/get/soc_timestamp"]*1e3).toLocaleString():"-"}},socRange:{get(){return this.$store.state.mqtt["openWB/vehicle/"+this.vehicleIndex+"/get/range"]!==void 0?Math.round(this.$store.state.mqtt["openWB/vehicle/"+this.vehicleIndex+"/get/range"]):0}},getVehicleStatus:{get(){return this.$store.state.mqtt["openWB/vehicle/"+this.vehicleIndex+"/get/fault_state"]===void 0?"success":this.statusLevel[this.$store.state.mqtt["openWB/vehicle/"+this.vehicleIndex+"/get/fault_state"]]||"success"}},baseTopic:{get(){return"openWB/vehicle/"+this.vehicleIndex}}}},No={key:0,class:"text-right"},$o={key:0},Po={key:0},qo={key:1},Io={class:"row"},Fo={class:"col text-right text-monospace"},Ao={class:"col text-right text-monospace"},Lo={class:"col text-right text-monospace"},jo={class:"container"},Oo={class:"row"},Vo={class:"col px-0"},zo={style:{"white-space":"pre-wrap"}},Eo={class:"col col-auto pr-0"},Ro={class:"text-right"};function Mo(s,o,u,m,_,t){const p=l("font-awesome-icon"),d=l("openwb-base-card"),h=l("openwb-base-alert");return r(),b(d,{subtype:"info",collapsible:!0,collapsed:!0,class:"pb-0"},{header:i(()=>[c(p,{"fixed-width":"",icon:["fas","car"]}),g(" "+a(u.vehicleName),1)]),actions:i(()=>[t.getVehicleStatus=="success"?(r(),n("div",No,[t.soc!="-"?(r(),n("div",$o,a(t.soc)+" %",1)):B("",!0)])):(r(),n("span",{key:1,class:S(["subheader pill","bg-"+t.getVehicleStatus])},[t.getVehicleStatus=="warning"?(r(),n("div",Po,"Warnung")):(r(),n("div",qo,"Fehler"))],2))]),footer:i(()=>[e("div",jo,[e("div",Oo,[e("div",Vo,[c(h,{subtype:t.getVehicleStatus},{default:i(()=>[c(p,{"fixed-width":"",icon:s.stateIcon},null,8,["icon"]),o[1]||(o[1]=g(" Modulmeldung: ")),e("span",zo,a(s.$store.state.mqtt[t.baseTopic+"/get/fault_str"]),1)]),_:1},8,["subtype"])]),e("div",Eo,[e("div",Ro,"ID: "+a(t.vehicleIndex),1)])])])]),default:i(()=>[c(d,{title:"Fahrzeugdaten",subtype:"white","body-bg":"white",class:"py-1 mb-2"},{default:i(()=>[o[0]||(o[0]=e("div",{class:"row"},[e("div",{class:"col pr-0 text-right"},"Ladestand"),e("div",{class:"col pr-0 text-right"},"Reichweite"),e("div",{class:"col pr-0 text-right"},"Letzter Zeitstempel")],-1)),e("div",Io,[e("div",Fo,a(t.soc)+" %",1),e("div",Ao,a(t.socRange)+" km",1),e("div",Lo,a(t.socTimestamp),1)])]),_:1})]),_:1})}const Do=y(Co,[["render",Mo],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/VehicleCard.vue"]]);w.add(x,W,k,Q);X.register(Y,ee,te,se,oe,ae,ie,re,ce);const Go={name:"ElectricityTariffCard",components:{ChartjsLine:ne,FontAwesomeIcon:T},mixins:[f],data(){return{mqttTopicsToSubscribe:["openWB/optional/et/provider","openWB/optional/et/get/fault_state","openWB/optional/et/get/fault_str","openWB/optional/et/get/prices"],chartDatasets:{datasets:[{label:"Stromtarif",unit:"ct/kWh",type:"line",stepped:!0,borderColor:"rgba(255, 0, 0, 0.7)",backgroundColor:"rgba(255, 10, 13, 0.3)",fill:!1,pointStyle:"circle",pointRadius:0,pointHoverRadius:4,cubicInterpolationMode:"monotone",hidden:!1,borderWidth:1,data:void 0,yAxisID:"y",parsing:{xAxisKey:"timestamp",yAxisKey:"price"}}]},chartOptions:{plugins:{title:{display:!1},tooltip:{enabled:!0},legend:{display:!1}},elements:{point:{radius:2}},responsive:!0,maintainAspectRatio:!1,interaction:{mode:"index",intersect:!1},scales:{x:{type:"time",time:{unit:"hour",text:"Zeit",maxTicksLimit:24},display:!0,title:{display:!0,text:"Uhrzeit"},ticks:{font:{size:12},maxTicksLimit:0},grid:{}},y:{position:"left",type:"linear",display:"auto",title:{font:{size:12},display:!0,text:"Preis [ct/kWh]"},grid:{},ticks:{font:{size:12},stepSize:.01,maxTicksLimit:11}}}}}},computed:{electricityTariffConfigured(){const s=this.$store.state.mqtt["openWB/optional/et/provider"];return s!==void 0?s.type!==null:!1},chartDataRead(){return this.chartDataObject.datasets[0].data!=null},chartDataObject(){if(this.$store.state.mqtt["openWB/optional/et/get/prices"]){var s=this.$store.state.mqtt["openWB/optional/et/get/prices"],o=[];for(const[_,t]of Object.entries(s))o.push({timestamp:_*1e3,price:t*1e5});const m=o.slice(-1)[0];o.push({timestamp:m.timestamp+(60*60-1)*1e3,price:m.price})}const u=this.chartDatasets;return u.datasets[0].data=o,u},currentPrice(){return this.formatNumber(this.chartDataObject.datasets[0].data[0].price||0,2)},baseTopic:{get(){return"openWB/optional/et"}}}},Ho={key:0,class:"text-right"},Zo={key:0},Ko={key:1},Jo={class:"openwb-chart"},Uo={style:{"white-space":"pre-wrap"}};function Qo(s,o,u,m,_,t){const p=l("font-awesome-icon"),d=l("chartjs-line"),h=l("openwb-base-card"),P=l("openwb-base-alert");return t.electricityTariffConfigured?(r(),b(h,{key:0,subtype:"secondary",collapsible:!0,collapsed:!0,class:"pb-0"},{header:i(()=>[c(p,{"fixed-width":"",icon:["fas","ranking-star"]}),o[0]||(o[0]=g(" Variabler Stromtarif "))]),actions:i(()=>[s.getFaultStateSubtype(t.baseTopic)=="success"?(r(),n("div",Ho,a(t.currentPrice)+" ct/kWh ",1)):(r(),n("span",{key:1,class:S("subheader pill bg-"+s.getFaultStateSubtype(t.baseTopic))},[s.getFaultStateSubtype(t.baseTopic)=="warning"?(r(),n("div",Zo,"Warnung")):(r(),n("div",Ko,"Fehler"))],2))]),footer:i(()=>[c(P,{subtype:s.getFaultStateSubtype(t.baseTopic)},{default:i(()=>[c(p,{"fixed-width":"",icon:s.stateIcon},null,8,["icon"]),o[1]||(o[1]=g(" Modulmeldung: ")),e("span",Uo,a(s.$store.state.mqtt[t.baseTopic+"/get/fault_str"]),1)]),_:1},8,["subtype"])]),default:i(()=>[c(h,{title:"Anbieter: "+s.$store.state.mqtt[t.baseTopic+"/provider"].name,subtype:"white","body-bg":"white",class:"py-1 mb-2"},{default:i(()=>[e("div",Jo,[t.chartDataRead?(r(),b(d,{key:0,ref:"myChart",data:t.chartDataObject,options:_.chartOptions},null,8,["data","options"])):B("",!0)])]),_:1},8,["title"])]),_:1})):B("",!0)}const Xo=y(Go,[["render",Qo],["__scopeId","data-v-f4769d2f"],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/status/ElectricityTariffCard.vue"]]);const Yo={name:"OpenwbStatusView",components:{ChargePointSumCard:ye,ChargePointCard:ut,CounterCard:es,InverterSumCard:_s,InverterCard:Ls,BatterySumCard:Xs,BatteryCard:yo,RippleControlReceiverCard:Bo,VehicleCard:Do,ElectricityTariffCard:Xo},mixins:[f],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/chargepoint/get/power","openWB/chargepoint/get/imported","openWB/chargepoint/get/exported","openWB/chargepoint/get/daily_imported","openWB/chargepoint/get/daily_exported","openWB/chargepoint/+/config","openWB/chargepoint/+/get/+","openWB/chargepoint/+/get/connected_vehicle/info","openWB/chargepoint/+/set/+","openWB/internal_chargepoint/+/data/phases_to_use","openWB/system/device/+/component/+/config","openWB/counter/+/get/+","openWB/pv/get/+","openWB/pv/+/get/+","openWB/bat/get/+","openWB/bat/+/get/+","openWB/vehicle/+/name","openWB/vehicle/+/get/+"]}},computed:{installedChargePoints:{get(){let s=this.getWildcardTopics("openWB/chargepoint/+/config"),o={};for(const[u,m]of Object.entries(s))(m.type==="internal_openwb"||this.$store.state.mqtt["openWB/general/extern"]===!1)&&(o[u]=m);return o}},numChargePointsInstalled:{get(){return Object.keys(this.installedChargePoints).length}},counterConfigs:{get(){return this.$store.state.mqtt["openWB/general/extern"]===!0?{}:this.filterComponentsByType(this.getWildcardTopics("openWB/system/device/+/component/+/config"),"counter")}},numInvertersInstalled:{get(){return Object.keys(this.inverterConfigs).length}},inverterConfigs:{get(){return this.$store.state.mqtt["openWB/general/extern"]===!0?{}:this.filterComponentsByType(this.getWildcardTopics("openWB/system/device/+/component/+/config"),"inverter")}},numBatteriesInstalled:{get(){return Object.keys(this.batteryConfigs).length}},batteryConfigs:{get(){return this.$store.state.mqtt["openWB/general/extern"]===!0?{}:this.filterComponentsByType(this.getWildcardTopics("openWB/system/device/+/component/+/config"),"bat")}},vehicleNames:{get(){return this.$store.state.mqtt["openWB/general/extern"]===!0?{}:this.getWildcardTopics("openWB/vehicle/+/name")}}},methods:{filterComponentsByType(s,o){return Object.keys(s).filter(u=>s[u].type.includes(o)).reduce((u,m)=>({...u,[m]:s[m]}),{})}}},ea={class:"status"};function ta(s,o,u,m,_,t){const p=l("charge-point-sum-card"),d=l("charge-point-card"),h=l("counter-card"),P=l("inverter-sum-card"),A=l("inverter-card"),L=l("battery-sum-card"),j=l("battery-card"),O=l("vehicle-card"),V=l("electricity-tariff-card"),z=l("ripple-control-receiver-card");return r(),n("div",ea,[t.numChargePointsInstalled>1&&s.$store.state.mqtt["openWB/general/extern"]===!1?(r(),b(p,{key:0})):B("",!0),(r(!0),n(N,null,$(t.installedChargePoints,(v,C)=>(r(),b(d,{key:C,"installed-charge-point":v,"installed-charge-point-key":C},null,8,["installed-charge-point","installed-charge-point-key"]))),128)),(r(!0),n(N,null,$(t.counterConfigs,v=>(r(),b(h,{key:v.id,counter:v},null,8,["counter"]))),128)),t.numInvertersInstalled>1&&s.$store.state.mqtt["openWB/general/extern"]===!1?(r(),b(P,{key:1})):B("",!0),(r(!0),n(N,null,$(t.inverterConfigs,v=>(r(),b(A,{key:v.id,inverter:v},null,8,["inverter"]))),128)),t.numBatteriesInstalled>1&&s.$store.state.mqtt["openWB/general/extern"]===!1?(r(),b(L,{key:2})):B("",!0),(r(!0),n(N,null,$(t.batteryConfigs,v=>(r(),b(j,{key:v.id,battery:v},null,8,["battery"]))),128)),(r(!0),n(N,null,$(t.vehicleNames,(v,C)=>(r(),b(O,{key:C,"vehicle-key":C,"vehicle-name":v},null,8,["vehicle-key","vehicle-name"]))),128)),c(V),c(z)])}const pa=y(Yo,[["render",ta],["__scopeId","data-v-051028a3"],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/Status.vue"]]);export{pa as default};
