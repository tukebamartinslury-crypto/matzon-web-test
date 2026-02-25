'use client';
import React, { useState } from 'react';

const tabs = ['Em Destaque', 'Classificacao', 'Bracket', 'Sobre'];
const liveMatches = [
  { date: 'HOJE 21:00', team1: 'MATZON FC', team2: 'Elite Squad', score: '2 - 1', live: true, time: null },
  { date: 'AMANHA 18:00', team1: 'Pro Lions', team2: 'Storm Kings', score: null, live: false, time: '18:00' },
  { date: 'QUI 20:00', team1: 'Cyber Wolves', team2: 'Royal Flash', score: null, live: false, time: '20:00' },
];
const standings = [
  { pos:1,  name:'MATZON FC',    img:'https://i.pravatar.cc/40?img=1',  j:10, g:9, e:1, d:0, gf:28, gc:6,  gd:'+22', pts:28, form:['W','W','W','W','W'], qual:'direct' },
  { pos:2,  name:'Elite Squad',  img:'https://i.pravatar.cc/40?img=2',  j:10, g:8, e:1, d:1, gf:24, gc:8,  gd:'+16', pts:25, form:['W','W','D','W','W'], qual:'direct' },
  { pos:3,  name:'Pro Lions',    img:'https://i.pravatar.cc/40?img=3',  j:10, g:7, e:2, d:1, gf:20, gc:9,  gd:'+11', pts:23, form:['D','W','W','D','W'], qual:'direct' },
  { pos:4,  name:'Storm Kings',  img:'https://i.pravatar.cc/40?img=4',  j:10, g:7, e:1, d:2, gf:19, gc:10, gd:'+9',  pts:22, form:['W','L','W','W','D'], qual:'direct' },
  { pos:5,  name:'Cyber Wolves', img:'https://i.pravatar.cc/40?img=5',  j:10, g:6, e:2, d:2, gf:17, gc:10, gd:'+7',  pts:20, form:['W','W','L','W','D'], qual:'direct' },
  { pos:6,  name:'Royal Flash',  img:'https://i.pravatar.cc/40?img=6',  j:10, g:6, e:1, d:3, gf:16, gc:11, gd:'+5',  pts:19, form:['L','D','W','W','W'], qual:'direct' },
  { pos:7,  name:'Night Hawks',  img:'https://i.pravatar.cc/40?img=7',  j:10, g:6, e:1, d:3, gf:15, gc:11, gd:'+4',  pts:19, form:['W','L','W','D','W'], qual:'direct' },
  { pos:8,  name:'Alpha Dogs',   img:'https://i.pravatar.cc/40?img=8',  j:10, g:5, e:2, d:3, gf:14, gc:12, gd:'+2',  pts:17, form:['L','D','W','W','W'], qual:'direct' },
  { pos:9,  name:'Iron Wolves',  img:'https://i.pravatar.cc/40?img=9',  j:10, g:5, e:2, d:3, gf:13, gc:12, gd:'+1',  pts:17, form:['W','L','D','W','W'], qual:'direct' },
  { pos:10, name:'Flash Kings',  img:'https://i.pravatar.cc/40?img=10', j:10, g:5, e:1, d:4, gf:13, gc:13, gd:'0',   pts:16, form:['D','W','L','W','W'], qual:'direct' },
  { pos:11, name:'Dark Horse',   img:'https://i.pravatar.cc/40?img=11', j:10, g:5, e:1, d:4, gf:12, gc:13, gd:'-1',  pts:16, form:['W','D','L','W','L'], qual:'direct' },
  { pos:12, name:'Red Bulls',    img:'https://i.pravatar.cc/40?img=12', j:10, g:4, e:2, d:4, gf:11, gc:13, gd:'-2',  pts:14, form:['L','W','D','W','L'], qual:'direct' },
  { pos:13, name:'Blue Star',    img:'https://i.pravatar.cc/40?img=13', j:10, g:4, e:2, d:4, gf:11, gc:14, gd:'-3',  pts:14, form:['W','L','D','L','W'], qual:'direct' },
  { pos:14, name:'Storm Boys',   img:'https://i.pravatar.cc/40?img=14', j:10, g:4, e:1, d:5, gf:10, gc:14, gd:'-4',  pts:13, form:['L','W','L','W','D'], qual:'direct' },
  { pos:15, name:'Alpha Unit',   img:'https://i.pravatar.cc/40?img=15', j:10, g:4, e:1, d:5, gf:10, gc:15, gd:'-5',  pts:13, form:['L','L','W','W','D'], qual:'direct' },
  { pos:16, name:'Wolves FC',    img:'https://i.pravatar.cc/40?img=16', j:10, g:4, e:1, d:5, gf:9,  gc:15, gd:'-6',  pts:13, form:['D','L','W','L','W'], qual:'direct' },
  { pos:17, name:'Cyber Force',  img:'https://i.pravatar.cc/40?img=17', j:10, g:3, e:3, d:4, gf:9,  gc:14, gd:'-5',  pts:12, form:['D','D','W','L','D'], qual:'playoff' },
  { pos:18, name:'Iron Clan',    img:'https://i.pravatar.cc/40?img=18', j:10, g:3, e:3, d:4, gf:8,  gc:14, gd:'-6',  pts:12, form:['D','W','D','L','W'], qual:'playoff' },
  { pos:19, name:'Neon Vipers',  img:'https://i.pravatar.cc/40?img=19', j:10, g:3, e:2, d:5, gf:8,  gc:15, gd:'-7',  pts:11, form:['L','W','D','L','W'], qual:'playoff' },
  { pos:20, name:'Ghost Squad',  img:'https://i.pravatar.cc/40?img=20', j:10, g:3, e:2, d:5, gf:7,  gc:15, gd:'-8',  pts:11, form:['W','L','D','L','L'], qual:'playoff' },
  { pos:21, name:'Steel Titans', img:'https://i.pravatar.cc/40?img=21', j:10, g:3, e:1, d:6, gf:7,  gc:16, gd:'-9',  pts:10, form:['L','W','L','D','L'], qual:'playoff' },
  { pos:22, name:'Blaze Unit',   img:'https://i.pravatar.cc/40?img=22', j:10, g:3, e:1, d:6, gf:6,  gc:16, gd:'-10', pts:10, form:['L','L','W','D','L'], qual:'playoff' },
  { pos:23, name:'Frost Giants', img:'https://i.pravatar.cc/40?img=23', j:10, g:2, e:3, d:5, gf:6,  gc:16, gd:'-10', pts:9,  form:['D','L','D','L','W'], qual:'playoff' },
  { pos:24, name:'Shadow Kings', img:'https://i.pravatar.cc/40?img=24', j:10, g:2, e:3, d:5, gf:5,  gc:16, gd:'-11', pts:9,  form:['D','D','L','W','L'], qual:'playoff' },
  { pos:25, name:'Acid Rain',    img:'https://i.pravatar.cc/40?img=25', j:10, g:2, e:2, d:6, gf:5,  gc:17, gd:'-12', pts:8,  form:['L','D','L','W','L'], qual:'' },
  { pos:26, name:'Thunder Boys', img:'https://i.pravatar.cc/40?img=26', j:10, g:2, e:2, d:6, gf:5,  gc:18, gd:'-13', pts:8,  form:['L','L','D','L','W'], qual:'' },
  { pos:27, name:'Wild Hawks',   img:'https://i.pravatar.cc/40?img=27', j:10, g:2, e:1, d:7, gf:4,  gc:18, gd:'-14', pts:7,  form:['L','W','L','L','D'], qual:'' },
  { pos:28, name:'Solar Flares', img:'https://i.pravatar.cc/40?img=28', j:10, g:2, e:1, d:7, gf:4,  gc:19, gd:'-15', pts:7,  form:['L','L','W','L','L'], qual:'' },
  { pos:29, name:'Venom Squad',  img:'https://i.pravatar.cc/40?img=29', j:10, g:1, e:2, d:7, gf:4,  gc:20, gd:'-16', pts:5,  form:['D','L','L','W','L'], qual:'eliminated' },
  { pos:30, name:'Razor Edge',   img:'https://i.pravatar.cc/40?img=30', j:10, g:1, e:2, d:7, gf:3,  gc:21, gd:'-18', pts:5,  form:['L','D','L','L','D'], qual:'eliminated' },
  { pos:31, name:'Cosmic Dust',  img:'https://i.pravatar.cc/40?img=31', j:10, g:1, e:1, d:8, gf:3,  gc:23, gd:'-20', pts:4,  form:['L','L','D','L','L'], qual:'eliminated' },
  { pos:32, name:'Zero Hour',    img:'https://i.pravatar.cc/40?img=32', j:10, g:0, e:1, d:9, gf:2,  gc:30, gd:'-28', pts:1,  form:['L','L','L','D','L'], qual:'eliminated' },
];
const fC = (r:string) => r==='W'?'#34A853':r==='D'?'#9AA4B6':'#EA4335';
const qC = (q:string) => q==='direct'?'#4285F4':q==='playoff'?'#FA7B17':'transparent';
type BM = { t1:string; s1:number|null; t2:string; s2:number|null; winner:number; date:string };

function BracketCard({ m }: { m: BM }) {
  const done = m.s1 !== null;
  const tbd = m.t1 === 'TBD' && m.t2 === 'TBD';
  return (
    <div style={{ backgroundColor:'#171E2D', borderRadius:10, border:'1px solid #222A3B', overflow:'hidden', opacity:tbd?0.4:1, width:160 }}>
      <div style={{ padding:'4px 10px', borderBottom:'1px solid #222A3B', fontSize:9, fontWeight:700, color:'#005EFA', letterSpacing:1, textTransform:'uppercase' }}>{m.date}</div>
      {[{ t:m.t1, s:m.s1, w:m.winner===1 }, { t:m.t2, s:m.s2, w:m.winner===2 }].map((tm, ti) => (
        <div key={ti} style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'8px 10px', borderBottom:ti===0?'1px solid rgba(255,255,255,0.05)':'none', backgroundColor:done&&tm.w?'rgba(0,94,250,0.12)':'transparent' }}>
          <div style={{ display:'flex', alignItems:'center', gap:7 }}>
            <img src={tm.t === 'TBD' ? 'https://i.pravatar.cc/40?img=20' : getImg(tm.t)} style={{ width:20, height:20, borderRadius:'50%', objectFit:'cover', flexShrink:0, border:'1px solid #222A3B', opacity: tm.t === 'TBD' ? 0.3 : 1 }}/>
            <span style={{ fontSize:11, fontWeight:done&&tm.w?700:500, color:done&&!tm.w&&m.winner!==0?'#444':'#fff' }}>{tm.t}</span>
          </div>
          <span style={{ fontSize:13, fontWeight:800, color:done&&tm.w?'#fff':'#555', minWidth:14, textAlign:'right' }}>{tm.s!==null?tm.s:'—'}</span>
        </div>
      ))}
    </div>
  );
}

const TBD: BM = { t1:'TBD', s1:null, t2:'TBD', s2:null, winner:0, date:'A definir' };

const teamImg: Record<string, string> = {
  'MATZON FC':   'https://i.pravatar.cc/40?img=1',
  'Elite Squad': 'https://i.pravatar.cc/40?img=2',
  'Pro Lions':   'https://i.pravatar.cc/40?img=3',
  'Night Hawks': 'https://i.pravatar.cc/40?img=7',
  'Storm Kings': 'https://i.pravatar.cc/40?img=4',
  'Cyber Force': 'https://i.pravatar.cc/40?img=5',
  'Royal Flash': 'https://i.pravatar.cc/40?img=6',
  'Alpha Dogs':  'https://i.pravatar.cc/40?img=8',
  'Wolves FC':   'https://i.pravatar.cc/40?img=16',
  'Storm Boys':  'https://i.pravatar.cc/40?img=14',
  'Dark Horse':  'https://i.pravatar.cc/40?img=11',
  'Flash Kings': 'https://i.pravatar.cc/40?img=10',
  'Red Bulls':   'https://i.pravatar.cc/40?img=12',
  'Blue Star':   'https://i.pravatar.cc/40?img=13',
  'Alpha Unit':  'https://i.pravatar.cc/40?img=15',
  'Iron Clan':   'https://i.pravatar.cc/40?img=18',
};
const getImg = (name: string) => teamImg[name] || 'https://i.pravatar.cc/40?img=20';

// Dados do bracket
const r16L: BM[] = [
  { t1:'MATZON FC', s1:4, t2:'Wolves FC', s2:1, winner:1, date:'11 Fev' },
  { t1:'Elite Squad', s1:3, t2:'Storm Boys', s2:0, winner:1, date:'11 Fev' },
  { t1:'Pro Lions', s1:2, t2:'Dark Horse', s2:2, winner:0, date:'12 Fev' },
  { t1:'Night Hawks', s1:1, t2:'Flash Kings', s2:0, winner:1, date:'12 Fev' },
  { t1:'Storm Kings', s1:null, t2:'Red Bulls', s2:null, winner:0, date:'18 Fev' },
  { t1:'Cyber Force', s1:null, t2:'Alpha Unit', s2:null, winner:0, date:'18 Fev' },
  { t1:'Royal Flash', s1:null, t2:'Blue Star', s2:null, winner:0, date:'19 Fev' },
  { t1:'Alpha Dogs', s1:null, t2:'Iron Clan', s2:null, winner:0, date:'19 Fev' },
];
const qfL: BM[] = [
  { t1:'MATZON FC', s1:3, t2:'Elite Squad', s2:1, winner:1, date:'25 Fev' },
  { t1:'Pro Lions', s1:null, t2:'Night Hawks', s2:null, winner:0, date:'25 Fev' },
  { t1:'TBD', s1:null, t2:'TBD', s2:null, winner:0, date:'Mar' },
  { t1:'TBD', s1:null, t2:'TBD', s2:null, winner:0, date:'Mar' },
];
const sfL: BM[] = [
  { t1:'MATZON FC', s1:null, t2:'TBD', s2:null, winner:0, date:'04 Mar' },
  { t1:'TBD', s1:null, t2:'TBD', s2:null, winner:0, date:'05 Mar' },
];
const finalM: BM = { t1:'TBD', s1:null, t2:'TBD', s2:null, winner:0, date:'08 Mar' };
const sfR: BM[] = [TBD, TBD];
const qfR: BM[] = [TBD, TBD, TBD, TBD];
const r16R: BM[] = Array(8).fill(TBD);

function BracketUCL() {
  const CW = 160, CH = 82, GAP = 28, RG = 10, TH = 62;

  const r16Y = Array.from({length:8}, (_,i) => TH + i*(CH+RG));
  const r16Cy = r16Y.map(y => y + CH/2);
  const qfY = [0,1,2,3].map(i => (r16Cy[i*2]+r16Cy[i*2+1])/2 - CH/2);
  const qfCy = qfY.map(y => y + CH/2);
  const sfY = [0,1].map(i => (qfCy[i*2]+qfCy[i*2+1])/2 - CH/2);
  const sfCy = sfY.map(y => y + CH/2);
  const finY = (sfCy[0]+sfCy[1])/2 - CH/2;
  const finCy = finY + CH/2;

  const cR16L=0, cQFL=CW+GAP, cSFL=2*(CW+GAP), cFin=3*(CW+GAP), cSFR=4*(CW+GAP), cQFR=5*(CW+GAP), cR16R=6*(CW+GAP);
  const W = 7*CW+6*GAP, H = TH+8*CH+7*RG+30;
  const mx = (c:number) => c+CW+GAP/2;

  const LabelH = ({text, col, color}: {text:string, col:number, color:string}) => (
    <div style={{ position:'absolute', left:col, top:TH-20, width:CW, textAlign:'center', fontSize:8, fontWeight:800, color, textTransform:'uppercase', letterSpacing:1 }}>{text}</div>
  );

  return (
    <div style={{ overflowX:'auto', paddingBottom:20 }}>
      <div style={{ position:'relative', width:W, height:H }}>
        <svg style={{ position:'absolute', inset:0, overflow:'visible', pointerEvents:'none' }} width={W} height={H}>
          {/* R16-L → QF-L */}
          {[0,1,2,3].map(i => { const t=r16Cy[i*2],b=r16Cy[i*2+1],m=(t+b)/2; return (
            <g key={"a"+i}>
              <line x1={cR16L+CW} y1={t} x2={mx(cR16L)} y2={t} stroke="#1E293B" strokeWidth="2"/>
              <line x1={cR16L+CW} y1={b} x2={mx(cR16L)} y2={b} stroke="#1E293B" strokeWidth="2"/>
              <line x1={mx(cR16L)} y1={t} x2={mx(cR16L)} y2={b} stroke="#1E293B" strokeWidth="2"/>
              <line x1={mx(cR16L)} y1={m} x2={cQFL} y2={qfCy[i]} stroke="#1E293B" strokeWidth="2"/>
            </g>
          );})}
          {/* QF-L → SF-L */}
          {[0,1].map(i => { const t=qfCy[i*2],b=qfCy[i*2+1],m=(t+b)/2; return (
            <g key={"b"+i}>
              <line x1={cQFL+CW} y1={t} x2={mx(cQFL)} y2={t} stroke="#334155" strokeWidth="2"/>
              <line x1={cQFL+CW} y1={b} x2={mx(cQFL)} y2={b} stroke="#334155" strokeWidth="2"/>
              <line x1={mx(cQFL)} y1={t} x2={mx(cQFL)} y2={b} stroke="#334155" strokeWidth="2"/>
              <line x1={mx(cQFL)} y1={m} x2={cSFL} y2={sfCy[i]} stroke="#334155" strokeWidth="2"/>
              <circle cx={cSFL} cy={sfCy[i]} r="3" fill="#005EFA"/>
            </g>
          );})}
          {/* SF-L → FINAL */}
          <line x1={cSFL+CW} y1={sfCy[0]} x2={mx(cSFL)} y2={sfCy[0]} stroke="#005EFA" strokeWidth="2"/>
          <line x1={cSFL+CW} y1={sfCy[1]} x2={mx(cSFL)} y2={sfCy[1]} stroke="#005EFA" strokeWidth="2"/>
          <line x1={mx(cSFL)} y1={sfCy[0]} x2={mx(cSFL)} y2={sfCy[1]} stroke="#005EFA" strokeWidth="2"/>
          <line x1={mx(cSFL)} y1={finCy} x2={cFin} y2={finCy} stroke="#005EFA" strokeWidth="2"/>
          <circle cx={cFin} cy={finCy} r="5" fill="#FFD60A"/>
          {/* FINAL → SF-R */}
          <line x1={cFin+CW} y1={finCy} x2={mx(cFin)} y2={finCy} stroke="#005EFA" strokeWidth="2"/>
          <line x1={mx(cFin)} y1={sfCy[0]} x2={mx(cFin)} y2={sfCy[1]} stroke="#005EFA" strokeWidth="2"/>
          <line x1={mx(cFin)} y1={sfCy[0]} x2={cSFR} y2={sfCy[0]} stroke="#005EFA" strokeWidth="2"/>
          <line x1={mx(cFin)} y1={sfCy[1]} x2={cSFR} y2={sfCy[1]} stroke="#005EFA" strokeWidth="2"/>
          {/* SF-R → QF-R */}
          {[0,1].map(i => { const t=qfCy[i*2],b=qfCy[i*2+1]; return (
            <g key={"c"+i}>
              <line x1={cSFR+CW} y1={sfCy[i]} x2={mx(cSFR)} y2={sfCy[i]} stroke="#334155" strokeWidth="2"/>
              <line x1={mx(cSFR)} y1={t} x2={mx(cSFR)} y2={b} stroke="#334155" strokeWidth="2"/>
              <line x1={mx(cSFR)} y1={t} x2={cQFR} y2={t} stroke="#334155" strokeWidth="2"/>
              <line x1={mx(cSFR)} y1={b} x2={cQFR} y2={b} stroke="#334155" strokeWidth="2"/>
            </g>
          );})}
          {/* QF-R → R16-R */}
          {[0,1,2,3].map(i => { const t=r16Cy[i*2],b=r16Cy[i*2+1]; return (
            <g key={"d"+i}>
              <line x1={cQFR+CW} y1={qfCy[i]} x2={mx(cQFR)} y2={qfCy[i]} stroke="#1E293B" strokeWidth="2"/>
              <line x1={mx(cQFR)} y1={t} x2={mx(cQFR)} y2={b} stroke="#1E293B" strokeWidth="2"/>
              <line x1={mx(cQFR)} y1={t} x2={cR16R} y2={t} stroke="#1E293B" strokeWidth="2"/>
              <line x1={mx(cQFR)} y1={b} x2={cR16R} y2={b} stroke="#1E293B" strokeWidth="2"/>
            </g>
          );})}
        </svg>

        {/* TROFEU - topo centro */}
        <div style={{ position:'absolute', left:cFin, top:0, width:CW, textAlign:'center' }}>
          <div style={{ fontSize:30 }}>🏆</div>
          <div style={{ fontSize:8, color:'#FFD60A', fontWeight:800, textTransform:'uppercase', letterSpacing:2, marginTop:2 }}>Campeao</div>
        </div>

        <LabelH text="Oitavos" col={cR16L} color="#64748B"/>
        <LabelH text="Quartos" col={cQFL} color="#9AA4B6"/>
        <LabelH text="Meias" col={cSFL} color="#005EFA"/>
        <LabelH text="Final" col={cFin} color="#FFD60A"/>
        <LabelH text="Meias" col={cSFR} color="#005EFA"/>
        <LabelH text="Quartos" col={cQFR} color="#9AA4B6"/>
        <LabelH text="Oitavos" col={cR16R} color="#64748B"/>

        {/* R16 ESQUERDA */}
        <div style={{ position:'absolute', left:cR16L, top:TH }}>
          <div style={{ display:'flex', flexDirection:'column', gap:RG }}>{r16L.map((m,i)=><BracketCard key={i} m={m}/>)}</div>
        </div>
        {/* QF ESQUERDA */}
        <div style={{ position:'absolute', left:cQFL, top:qfY[0] }}>
          <div style={{ display:'flex', flexDirection:'column', gap:qfY[1]-qfY[0]-CH }}>{qfL.map((m,i)=><BracketCard key={i} m={m}/>)}</div>
        </div>
        {/* SF ESQUERDA */}
        <div style={{ position:'absolute', left:cSFL, top:sfY[0] }}>
          <div style={{ display:'flex', flexDirection:'column', gap:sfY[1]-sfY[0]-CH }}>{sfL.map((m,i)=><BracketCard key={i} m={m}/>)}</div>
        </div>
        {/* FINAL */}
        <div style={{ position:'absolute', left:cFin, top:finY }}><BracketCard m={finalM}/></div>
        {/* SF DIREITA */}
        <div style={{ position:'absolute', left:cSFR, top:sfY[0] }}>
          <div style={{ display:'flex', flexDirection:'column', gap:sfY[1]-sfY[0]-CH }}>{sfR.map((m,i)=><BracketCard key={i} m={m}/>)}</div>
        </div>
        {/* QF DIREITA */}
        <div style={{ position:'absolute', left:cQFR, top:qfY[0] }}>
          <div style={{ display:'flex', flexDirection:'column', gap:qfY[1]-qfY[0]-CH }}>{qfR.map((m,i)=><BracketCard key={i} m={m}/>)}</div>
        </div>
        {/* R16 DIREITA */}
        <div style={{ position:'absolute', left:cR16R, top:TH }}>
          <div style={{ display:'flex', flexDirection:'column', gap:RG }}>{r16R.map((m,i)=><BracketCard key={i} m={m}/>)}</div>
        </div>
      </div>
    </div>
  );
}

export function TorneiosView() {
  const [activeTab, setActiveTab] = useState('Em Destaque');
  const [bView, setBView] = useState<'chaveamento'|'lista'>('chaveamento');

  return (
    <div style={{ backgroundColor:'#0B121E', color:'#F8F9FA', fontFamily:"'Inter',sans-serif", minHeight:'100vh', paddingBottom:40 }}>
      <div style={{ position:'relative', height:180, overflow:'hidden', marginTop:80 }}>
        <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top,#0B121E 0%,rgba(11,18,30,0.4) 100%)' }}/>
        <div style={{ position:'absolute', bottom:15, left:20, zIndex:10 }}>
          <div style={{ fontSize:11, fontWeight:700, color:'#005EFA', letterSpacing:1, textTransform:'uppercase', marginBottom:4 }}>MATZON Champions Cup 2026</div>
          <h1 style={{ fontSize:22, fontWeight:800, lineHeight:1.1, margin:0 }}>Torneios em Destaque</h1>
        </div>
        <div style={{ position:'absolute', bottom:15, right:20, zIndex:10, width:44, height:44, borderRadius:'50%', background:'linear-gradient(135deg,#005EFA,#7C3AED)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:900, fontSize:12, color:'#fff' }}>MZ</div>
      </div>
      <div style={{ display:'flex', borderBottom:'1px solid #222A3B', padding:'0 20px', overflowX:'auto' }}>
        {['Em Destaque','Classificacao','Bracket','Sobre'].map(tab => (
          <button key={tab} onClick={()=>setActiveTab(tab)} style={{ background:'none', border:'none', color:activeTab===tab?'#F8F9FA':'#9AA4B6', fontSize:15, fontWeight:600, padding:'15px 0', marginRight:25, cursor:'pointer', whiteSpace:'nowrap', borderBottom:activeTab===tab?'3px solid #005EFA':'3px solid transparent', outline:'none' }}>{tab}</button>
        ))}
      </div>

      {activeTab==='Em Destaque' && (
        <div>
          <div style={{ padding:'25px 20px 0' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:15 }}>
              <h2 style={{ fontSize:16, fontWeight:700, margin:0 }}>Jogos Ao Vivo & Proximos</h2>
              <a href="#" style={{ color:'#005EFA', fontSize:13, fontWeight:500 }}>Ver todos</a>
            </div>
            <div style={{ display:'flex', gap:12, overflowX:'auto', paddingBottom:10 }}>
              {liveMatches.map((m,i) => (
                <div key={i} style={{ backgroundColor:'#171E2D', borderRadius:12, padding:12, minWidth:260, position:'relative', flexShrink:0, border:m.live?'1px solid rgba(255,59,48,0.3)':'1px solid transparent' }}>
                  <div style={{ fontSize:11, color:'#9AA4B6', fontWeight:600, marginBottom:8 }}>{m.date}</div>
                  {m.live && <div style={{ position:'absolute', top:12, right:12, width:6, height:6, backgroundColor:'#FF3B30', borderRadius:'50%' }}/>}
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <div style={{ display:'flex', flexDirection:'column', gap:8, flex:1 }}>
                      {[m.team1,m.team2].map((t,ti) => (
                        <div key={ti} style={{ display:'flex', alignItems:'center', gap:8, fontSize:13, fontWeight:600 }}>
                          <div style={{ width:20, height:20, borderRadius:'50%', backgroundColor:ti===0?'#005EFA':'#7C3AED', flexShrink:0 }}/>{t}
                        </div>
                      ))}
                    </div>
                    <div style={{ fontSize:m.live?18:13, fontWeight:700, color:m.live?'#fff':'#9AA4B6', marginLeft:12 }}>{m.score??m.time}</div>
                  </div>
                  {m.live && <div style={{ marginTop:8, fontSize:10, fontWeight:800, color:'#FF3B30', textTransform:'uppercase', letterSpacing:1 }}>Ao Vivo</div>}
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding:'25px 20px 0' }}>
            <h2 style={{ fontSize:16, fontWeight:700, margin:'0 0 15px' }}>Torneios Ativos</h2>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {[
                { name:'Champions Cup 2026', prize:'EUR 25.000', teams:32, badge:'A decorrer', bc:'#30D158', tc:'#fff', img:'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400' },
                { name:'Pro League Season 3', prize:'EUR 10.000', teams:16, badge:'Inscricoes abertas', bc:'#005EFA', tc:'#fff', img:'https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=400' },
                { name:'World Masters 2026', prize:'EUR 100.000', teams:64, badge:'Internacional', bc:'#FFD60A', tc:'#000', img:'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400' },
                { name:'Night Cup Series', prize:'EUR 3.000', teams:8, badge:'Esgotado', bc:'#FF453A', tc:'#fff', img:'https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400' },
              ].map((t,i) => (
                <div key={i} style={{ backgroundColor:'#171E2D', borderRadius:12, overflow:'hidden', display:'flex', border:'1px solid #222A3B' }}>
                  <img src={t.img} style={{ width:80, height:80, objectFit:'cover', flexShrink:0, filter:t.badge==='Esgotado'?'grayscale(60%)':'none' }}/>
                  <div style={{ padding:'10px 14px', flex:1 }}>
                    <span style={{ fontSize:10, fontWeight:800, backgroundColor:t.bc, color:t.tc, padding:'2px 8px', borderRadius:20, display:'inline-block', marginBottom:6 }}>{t.badge}</span>
                    <div style={{ fontSize:14, fontWeight:700, marginBottom:4 }}>{t.name}</div>
                    <div style={{ display:'flex', gap:12, fontSize:12, color:'#9AA4B6' }}>
                      <span style={{ color:'#005EFA', fontWeight:700 }}>{t.prize}</span>
                      <span>{t.teams} equipas</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab==='Classificacao' && (
        <div style={{ padding:'20px' }}>
          <div style={{ backgroundColor:'#171E2D', borderRadius:12, overflow:'hidden' }}>
            <div style={{ padding:'20px 20px 15px', borderBottom:'1px solid #222A3B' }}>
              <h2 style={{ fontSize:18, fontWeight:600, margin:'0 0 4px' }}>Classificacao</h2>
              <div style={{ fontSize:11, color:'#9AA4B6' }}>Temporada</div>
              <div style={{ fontSize:14, color:'#fff', fontWeight:600 }}>Champions Cup 2026</div>
            </div>
            <div style={{ overflowX:'auto' }}>
              <table style={{ width:'100%', borderCollapse:'collapse', whiteSpace:'nowrap' }}>
                <thead><tr>
                  <th style={{ fontSize:10, color:'#9AA4B6', fontWeight:600, padding:'12px 8px 12px 20px', borderBottom:'1px solid #222A3B', textAlign:'left' }}>POS</th>
                  {['J','G','E','D','GM','GS','DG'].map(h=><th key={h} style={{ fontSize:10, color:'#9AA4B6', fontWeight:600, padding:'12px 8px', borderBottom:'1px solid #222A3B', textAlign:'center' }}>{h}</th>)}
                  <th style={{ fontSize:10, color:'#9AA4B6', fontWeight:600, padding:'12px 8px', borderBottom:'1px solid #222A3B', textAlign:'center', borderLeft:'1px solid #222A3B' }}>PTS</th>
                  <th style={{ fontSize:10, color:'#9AA4B6', fontWeight:600, padding:'12px 8px', borderBottom:'1px solid #222A3B', textAlign:'center' }}>FORMA</th>
                </tr></thead>
                <tbody>
                  {standings.map((s,i) => (
                    <tr key={i} style={{ backgroundColor:i%2===1?'rgba(255,255,255,0.02)':'transparent' }}>
                      <td style={{ padding:'10px 8px 10px 0', borderBottom:'1px solid rgba(255,255,255,0.02)', borderLeft:`3px solid ${qC(s.qual)}` }}>
                        <div style={{ display:'flex', alignItems:'center', gap:10, paddingLeft:12 }}>
                          <span style={{ width:20, textAlign:'center', fontSize:12, color:'#9AA4B6' }}>{s.pos}</span>
                          <img src={s.img} style={{ width:28, height:28, borderRadius:'50%', objectFit:'cover', flexShrink:0, border:'2px solid #222A3B' }}/>
                          <span style={{ fontWeight:600, fontSize:13 }}>{s.name}</span>
                        </div>
                      </td>
                      {[s.j,s.g,s.e,s.d,s.gf,s.gc,s.gd].map((v,vi)=><td key={vi} style={{ padding:'10px 8px', fontSize:13, textAlign:'center', borderBottom:'1px solid rgba(255,255,255,0.02)', color:'#fff' }}>{v}</td>)}
                      <td style={{ padding:'10px 8px', textAlign:'center', fontWeight:700, borderLeft:'1px solid #222A3B', borderBottom:'1px solid rgba(255,255,255,0.02)', fontSize:13 }}>{s.pts}</td>
                      <td style={{ padding:'10px 8px', borderBottom:'1px solid rgba(255,255,255,0.02)' }}>
                        <div style={{ display:'flex', gap:3, justifyContent:'center' }}>
                          {s.form.map((r,ri)=><span key={ri} style={{ width:14, height:14, borderRadius:'50%', backgroundColor:fC(r), display:'inline-block' }}/>)}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:20, padding:20, backgroundColor:'#121825', borderRadius:'0 0 12px 12px' }}>
              {[{color:'#4285F4',label:'Qualificacao Direta'},{color:'#FA7B17',label:'Playoff'},{color:'#EA4335',label:'Eliminado'}].map((l,i)=>(
                <div key={i} style={{ display:'flex', alignItems:'center', gap:8, fontSize:11, color:'#9AA4B6' }}>
                  <span style={{ width:8, height:8, backgroundColor:l.color, borderRadius:1, display:'inline-block' }}/>{l.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab==='Bracket' && (
        <div style={{ padding:'20px' }}>
          <div style={{ display:'flex', gap:10, marginBottom:20 }}>
            {(['chaveamento','lista'] as const).map(v=>(
              <button key={v} onClick={()=>setBView(v)} style={{ flex:1, backgroundColor:bView===v?'#005EFA':'#171E2D', color:bView===v?'#fff':'#9AA4B6', border:'none', padding:10, borderRadius:8, fontSize:13, fontWeight:600, cursor:'pointer', outline:'none' }}>
                {v==='chaveamento'?'Chaveamento':'Lista'}
              </button>
            ))}
          </div>
          {bView==='chaveamento' && <BracketUCL/>}
          {bView==='lista' && (
            <div style={{ display:'flex', flexDirection:'column', gap:24 }}>
              {[
                { label:'Oitavos de Final', color:'#64748B', matches:r16L },
                { label:'Quartos de Final', color:'#9AA4B6', matches:qfL },
                { label:'Meias-Finais', color:'#005EFA', matches:sfL },
                { label:'Final', color:'#FFD60A', matches:[finalM] },
              ].map((round,ri)=>(
                <div key={ri}>
                  <div style={{ fontSize:11, fontWeight:700, color:round.color, textTransform:'uppercase', letterSpacing:1, marginBottom:12 }}>{round.label}</div>
                  <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                    {round.matches.map((m,mi)=><BracketCard key={mi} m={m}/>)}
                  </div>
                </div>
              ))}
              <div style={{ textAlign:'center', padding:'20px 0' }}>
                <div style={{ fontSize:40 }}>🏆</div>
                <div style={{ fontSize:12, color:'#FFD60A', fontWeight:800, textTransform:'uppercase', letterSpacing:1, marginTop:8 }}>Final - 08 Mar</div>
              </div>
            </div>
          )}
          <div style={{ marginTop:20, backgroundColor:'#121825', borderRadius:12, padding:'14px 16px' }}>
            <div style={{ fontSize:11, fontWeight:700, color:'#fff', marginBottom:10 }}>Legenda</div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:12 }}>
              {[{c:'rgba(0,94,250,0.3)',l:'Equipa vencedora'},{c:'#34A853',l:'Vitoria confirmada'},{c:'#9AA4B6',l:'Por determinar'}].map((x,i)=>(
                <div key={i} style={{ display:'flex', alignItems:'center', gap:6, fontSize:11, color:'#9AA4B6' }}>
                  <span style={{ width:10, height:10, backgroundColor:x.c, borderRadius:2, display:'inline-block' }}/>{x.l}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab==='Sobre' && (
        <div style={{ padding:'25px 20px', color:'#9AA4B6', fontSize:13, lineHeight:1.6 }}>
          <h2 style={{ color:'#fff', fontSize:16, margin:'0 0 15px' }}>Sobre a Champions Cup 2026</h2>
          <p>A Champions Cup e o torneio mais prestigiado da MATZON, reunindo as 32 melhores equipas em competicao pelo titulo e EUR 25.000 em premios.</p>
          <h3 style={{ color:'#fff', fontSize:14, margin:'20px 0 8px' }}>Formato</h3>
          <ul style={{ paddingLeft:20 }}>
            <li>Oitavos de Final - 16 equipas por lado</li>
            <li>Quartos, Meias e Final eliminacao direta</li>
          </ul>
          <h3 style={{ color:'#fff', fontSize:14, margin:'20px 0 8px' }}>Premios</h3>
          <ul style={{ paddingLeft:20 }}>
            <li>1 Lugar - EUR 15.000</li>
            <li>2 Lugar - EUR 7.000</li>
            <li>3/4 Lugar - EUR 1.500 cada</li>
          </ul>
        </div>
      )}
    </div>
  );
}
