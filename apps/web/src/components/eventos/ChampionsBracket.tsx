'use client';
import React from 'react';
import { Trophy } from 'lucide-react';

const av=['https://randomuser.me/api/portraits/men/32.jpg','https://randomuser.me/api/portraits/men/44.jpg','https://randomuser.me/api/portraits/men/55.jpg','https://randomuser.me/api/portraits/men/62.jpg','https://randomuser.me/api/portraits/men/71.jpg','https://randomuser.me/api/portraits/men/83.jpg','https://randomuser.me/api/portraits/men/91.jpg','https://randomuser.me/api/portraits/men/22.jpg','https://randomuser.me/api/portraits/men/36.jpg','https://randomuser.me/api/portraits/men/48.jpg','https://randomuser.me/api/portraits/men/57.jpg','https://randomuser.me/api/portraits/men/68.jpg','https://randomuser.me/api/portraits/men/77.jpg','https://randomuser.me/api/portraits/men/88.jpg','https://randomuser.me/api/portraits/men/12.jpg','https://randomuser.me/api/portraits/men/19.jpg'];
const LINE='rgba(255,255,255,0.18)';
const MW=145,MH=86,GAP=48,IH=MH+GAP,CW=32;
const X0=0,X1=X0+MW+CW,X2=X1+MW+CW,X3=X2+MW+CW,X4=X3+MW+CW,X5=X4+MW+CW,X6=X5+MW+CW,TW=X6+MW;
const R1Y=[0,IH,IH*2,IH*3],R2Y=[IH/2,IH*2+IH/2],SFY=IH+IH/2,FY=SFY,CHAMPION_Y=FY-175;
const mc=(y:number)=>y+MH/2;

function MatchCard({winner,loser,sw,sl,label,date,x,y,isFinal=false}:{winner:{name:string;avatar:string};loser:{name:string;avatar:string};sw:number|null;sl:number|null;label:string;date:string;x:number;y:number;isFinal?:boolean}){
  return(
    <div style={{position:'absolute',width:MW,top:y,left:x,backgroundColor:'rgba(255,255,255,0.04)',borderRadius:12,overflow:'hidden'}}>
      <div style={{display:'flex',alignItems:'center',gap:8,padding:'8px 12px',borderBottom:'1px solid rgba(255,255,255,0.04)',backgroundColor:'rgba(0,94,250,0.09)'}}>
        <img src={winner.avatar} style={{width:24,height:24,borderRadius:'50%',objectFit:'cover',flexShrink:0}}/>
        <span style={{fontSize:11,fontWeight:700,flex:1,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',color:'#fff'}}>{winner.name}</span>
        <span style={{fontSize:11,fontWeight:900,color:'#005EFA',flexShrink:0}}>{sw??'?'}</span>
      </div>
      <div style={{display:'flex',alignItems:'center',gap:8,padding:'8px 12px'}}>
        <img src={loser.avatar} style={{width:24,height:24,borderRadius:'50%',objectFit:'cover',flexShrink:0,opacity:0.5}}/>
        <span style={{fontSize:11,flex:1,overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',color:'#9AA4B6'}}>{loser.name}</span>
        <span style={{fontSize:11,color:'#9AA4B6',flexShrink:0}}>{sl??'?'}</span>
      </div>
      <div style={{padding:'4px 12px',backgroundColor:'rgba(255,255,255,0.02)'}}>
        <span style={{fontSize:8,fontWeight:700,color:'#9AA4B6'}}>{label}{date?` · ${date}`:''}{isFinal&&<span style={{marginLeft:4,padding:'1px 6px',borderRadius:99,backgroundColor:'rgba(0,94,250,0.2)',color:'#005EFA'}}> FINAL</span>}</span>
      </div>
    </div>
  );
}

export function ChampionsBracket(){
  const TOTAL_H=IH*4;
  return(
    <div style={{overflowX:'auto',paddingBottom:16}}>
      <div style={{display:'flex',marginBottom:12,width:TW}}>
        {([{label:'Oitavos',w:MW+CW},{label:'Quartos',w:MW+CW},{label:'Semi',w:MW+CW},{label:'Final',w:MW+CW},{label:'Semi',w:MW+CW},{label:'Quartos',w:MW+CW},{label:'Oitavos',w:MW}]).map((r,i)=>(
          <div key={i} style={{width:r.w,fontSize:9,fontWeight:800,textTransform:'uppercase',textAlign:'center',letterSpacing:2,color:i===3?'#005EFA':'#9AA4B6',flexShrink:0}}>{r.label}</div>
        ))}
      </div>
      <div style={{position:'relative',width:TW,height:TOTAL_H+60}}>
        <svg style={{position:'absolute',inset:0,pointerEvents:'none',overflow:'visible'}} width={TW} height={TOTAL_H+60}>
          <line x1={X0+MW} y1={mc(R1Y[0])} x2={X0+MW+CW/2} y2={mc(R1Y[0])} stroke={LINE} strokeWidth={1.5}/><line x1={X0+MW+CW/2} y1={mc(R1Y[0])} x2={X0+MW+CW/2} y2={mc(R1Y[1])} stroke={LINE} strokeWidth={1.5}/><line x1={X0+MW} y1={mc(R1Y[1])} x2={X0+MW+CW/2} y2={mc(R1Y[1])} stroke={LINE} strokeWidth={1.5}/><line x1={X0+MW+CW/2} y1={(mc(R1Y[0])+mc(R1Y[1]))/2} x2={X1} y2={(mc(R1Y[0])+mc(R1Y[1]))/2} stroke={LINE} strokeWidth={1.5}/>
          <line x1={X0+MW} y1={mc(R1Y[2])} x2={X0+MW+CW/2} y2={mc(R1Y[2])} stroke={LINE} strokeWidth={1.5}/><line x1={X0+MW+CW/2} y1={mc(R1Y[2])} x2={X0+MW+CW/2} y2={mc(R1Y[3])} stroke={LINE} strokeWidth={1.5}/><line x1={X0+MW} y1={mc(R1Y[3])} x2={X0+MW+CW/2} y2={mc(R1Y[3])} stroke={LINE} strokeWidth={1.5}/><line x1={X0+MW+CW/2} y1={(mc(R1Y[2])+mc(R1Y[3]))/2} x2={X1} y2={(mc(R1Y[2])+mc(R1Y[3]))/2} stroke={LINE} strokeWidth={1.5}/>
          <line x1={X1+MW} y1={mc(R2Y[0])} x2={X1+MW+CW/2} y2={mc(R2Y[0])} stroke={LINE} strokeWidth={1.5}/><line x1={X1+MW+CW/2} y1={mc(R2Y[0])} x2={X1+MW+CW/2} y2={mc(R2Y[1])} stroke={LINE} strokeWidth={1.5}/><line x1={X1+MW} y1={mc(R2Y[1])} x2={X1+MW+CW/2} y2={mc(R2Y[1])} stroke={LINE} strokeWidth={1.5}/><line x1={X1+MW+CW/2} y1={mc(SFY)} x2={X2} y2={mc(SFY)} stroke={LINE} strokeWidth={1.5}/>
          <line x1={X3+MW/2} y1={FY-49} x2={X3+MW/2} y2={FY} stroke={LINE} strokeWidth={1.5}/>
          <line x1={X2+MW} y1={mc(SFY)} x2={X3} y2={mc(FY)} stroke={LINE} strokeWidth={1.5}/>
          <line x1={X3+MW} y1={mc(FY)} x2={X4} y2={mc(SFY)} stroke={LINE} strokeWidth={1.5}/>
          <line x1={X4+MW} y1={mc(SFY)} x2={X4+MW+CW/2} y2={mc(SFY)} stroke={LINE} strokeWidth={1.5}/><line x1={X4+MW+CW/2} y1={mc(R2Y[0])} x2={X4+MW+CW/2} y2={mc(R2Y[1])} stroke={LINE} strokeWidth={1.5}/><line x1={X4+MW+CW/2} y1={mc(R2Y[0])} x2={X5} y2={mc(R2Y[0])} stroke={LINE} strokeWidth={1.5}/><line x1={X4+MW+CW/2} y1={mc(R2Y[1])} x2={X5} y2={mc(R2Y[1])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={X5+MW} y1={mc(R2Y[0])} x2={X5+MW+CW/2} y2={mc(R2Y[0])} stroke={LINE} strokeWidth={1.5}/><line x1={X5+MW+CW/2} y1={mc(R1Y[0])} x2={X5+MW+CW/2} y2={mc(R1Y[1])} stroke={LINE} strokeWidth={1.5}/><line x1={X5+MW+CW/2} y1={mc(R1Y[0])} x2={X6} y2={mc(R1Y[0])} stroke={LINE} strokeWidth={1.5}/><line x1={X5+MW+CW/2} y1={mc(R1Y[1])} x2={X6} y2={mc(R1Y[1])} stroke={LINE} strokeWidth={1.5}/>
          <line x1={X5+MW} y1={mc(R2Y[1])} x2={X5+MW+CW/2} y2={mc(R2Y[1])} stroke={LINE} strokeWidth={1.5}/><line x1={X5+MW+CW/2} y1={mc(R1Y[2])} x2={X5+MW+CW/2} y2={mc(R1Y[3])} stroke={LINE} strokeWidth={1.5}/><line x1={X5+MW+CW/2} y1={mc(R1Y[2])} x2={X6} y2={mc(R1Y[2])} stroke={LINE} strokeWidth={1.5}/><line x1={X5+MW+CW/2} y1={mc(R1Y[3])} x2={X6} y2={mc(R1Y[3])} stroke={LINE} strokeWidth={1.5}/>
        </svg>
        <div style={{position:'absolute',width:MW,top:CHAMPION_Y,left:X3,backgroundColor:'rgba(255,214,10,0.08)',borderRadius:16,padding:'12px 16px',display:'flex',flexDirection:'column',alignItems:'center',gap:6}}>
          <Trophy size={20} color="#FFD60A"/><span style={{fontSize:9,fontWeight:800,textTransform:'uppercase',letterSpacing:2,color:'#FFD60A'}}>CAMPEÃO</span>
          <img src={av[0]} style={{width:36,height:36,borderRadius:'50%',objectFit:'cover',border:'2px solid #FFD60A'}}/>
          <span style={{fontSize:12,fontWeight:700,color:'#fff'}}>Faker</span>
        </div>
        <MatchCard winner={{name:'Faker',avatar:av[0]}} loser={{name:'Coldzera',avatar:av[12]}} sw={3} sl={2} label="FINAL" date="30 MAI." x={X3} y={FY} isFinal/>
        <MatchCard winner={{name:'Faker',avatar:av[0]}} loser={{name:'Kscerato',avatar:av[6]}} sw={3} sl={2} label="SF1" date="28 ABR." x={X2} y={SFY}/>
        <MatchCard winner={{name:'Faker',avatar:av[0]}} loser={{name:'S1mple',avatar:av[2]}} sw={3} sl={2} label="QF1" date="7 ABR." x={X1} y={R2Y[0]}/>
        <MatchCard winner={{name:'Kscerato',avatar:av[6]}} loser={{name:'TenZ',avatar:av[4]}} sw={3} sl={1} label="QF2" date="7 ABR." x={X1} y={R2Y[1]}/>
        <MatchCard winner={{name:'Faker',avatar:av[0]}} loser={{name:'ZywOo',avatar:av[1]}} sw={3} sl={1} label="WPO1" date="10 MAR." x={X0} y={R1Y[0]}/>
        <MatchCard winner={{name:'S1mple',avatar:av[2]}} loser={{name:'NiKo',avatar:av[3]}} sw={3} sl={2} label="WPO2" date="10 MAR." x={X0} y={R1Y[1]}/>
        <MatchCard winner={{name:'TenZ',avatar:av[4]}} loser={{name:'Shroud',avatar:av[5]}} sw={3} sl={0} label="WPO3" date="10 MAR." x={X0} y={R1Y[2]}/>
        <MatchCard winner={{name:'Kscerato',avatar:av[6]}} loser={{name:'Device',avatar:av[7]}} sw={3} sl={1} label="WPO4" date="10 MAR." x={X0} y={R1Y[3]}/>
        <MatchCard winner={{name:'Coldzera',avatar:av[12]}} loser={{name:'Apex',avatar:av[9]}} sw={3} sl={1} label="SF2" date="28 ABR." x={X4} y={SFY}/>
        <MatchCard winner={{name:'Apex',avatar:av[9]}} loser={{name:'Rain',avatar:av[11]}} sw={3} sl={1} label="QF3" date="7 ABR." x={X5} y={R2Y[0]}/>
        <MatchCard winner={{name:'Coldzera',avatar:av[12]}} loser={{name:'Twistzz',avatar:av[15]}} sw={3} sl={2} label="QF4" date="7 ABR." x={X5} y={R2Y[1]}/>
        <MatchCard winner={{name:'Apex',avatar:av[9]}} loser={{name:'Mixer',avatar:av[8]}} sw={3} sl={1} label="WPO5" date="10 MAR." x={X6} y={R1Y[0]}/>
        <MatchCard winner={{name:'Rain',avatar:av[11]}} loser={{name:'Krimz',avatar:av[10]}} sw={3} sl={2} label="WPO6" date="10 MAR." x={X6} y={R1Y[1]}/>
        <MatchCard winner={{name:'Coldzera',avatar:av[12]}} loser={{name:'EliGE',avatar:av[13]}} sw={3} sl={0} label="WPO7" date="10 MAR." x={X6} y={R1Y[2]}/>
        <MatchCard winner={{name:'Twistzz',avatar:av[15]}} loser={{name:'Xantares',avatar:av[14]}} sw={3} sl={2} label="WPO8" date="10 MAR." x={X6} y={R1Y[3]}/>
      </div>
    </div>
  );
}
