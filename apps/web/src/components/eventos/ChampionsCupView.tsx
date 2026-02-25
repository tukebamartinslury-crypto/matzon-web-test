'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ChampionsBracket } from './ChampionsBracket';

const av=['https://randomuser.me/api/portraits/men/32.jpg','https://randomuser.me/api/portraits/men/44.jpg','https://randomuser.me/api/portraits/men/55.jpg','https://randomuser.me/api/portraits/men/62.jpg','https://randomuser.me/api/portraits/men/71.jpg','https://randomuser.me/api/portraits/men/83.jpg','https://randomuser.me/api/portraits/men/91.jpg','https://randomuser.me/api/portraits/men/22.jpg','https://randomuser.me/api/portraits/men/36.jpg','https://randomuser.me/api/portraits/men/48.jpg','https://randomuser.me/api/portraits/men/57.jpg','https://randomuser.me/api/portraits/men/68.jpg','https://randomuser.me/api/portraits/men/77.jpg','https://randomuser.me/api/portraits/men/88.jpg','https://randomuser.me/api/portraits/men/12.jpg','https://randomuser.me/api/portraits/men/19.jpg','https://randomuser.me/api/portraits/men/25.jpg','https://randomuser.me/api/portraits/men/28.jpg','https://randomuser.me/api/portraits/men/31.jpg','https://randomuser.me/api/portraits/men/35.jpg','https://randomuser.me/api/portraits/men/40.jpg','https://randomuser.me/api/portraits/men/42.jpg','https://randomuser.me/api/portraits/men/50.jpg','https://randomuser.me/api/portraits/men/60.jpg','https://randomuser.me/api/portraits/men/64.jpg','https://randomuser.me/api/portraits/men/70.jpg','https://randomuser.me/api/portraits/men/75.jpg','https://randomuser.me/api/portraits/men/80.jpg','https://randomuser.me/api/portraits/men/85.jpg','https://randomuser.me/api/portraits/men/90.jpg'];

const standings=[
  {pos:1,name:'Faker',img:av[0],j:5,g:5,e:0,d:0,gf:14,gc:3,gd:'+11',pts:15,form:['W','W','W','W','W'],qual:'direct'},
  {pos:2,name:'Coldzera',img:av[1],j:5,g:4,e:1,d:0,gf:12,gc:4,gd:'+8',pts:13,form:['W','W','D','W','W'],qual:'direct'},
  {pos:3,name:'S1mple',img:av[2],j:5,g:4,e:0,d:1,gf:11,gc:5,gd:'+6',pts:12,form:['D','W','W','W','W'],qual:'direct'},
  {pos:4,name:'NiKo',img:av[3],j:5,g:4,e:0,d:1,gf:10,gc:5,gd:'+5',pts:12,form:['W','L','W','W','W'],qual:'direct'},
  {pos:5,name:'TenZ',img:av[4],j:5,g:3,e:1,d:1,gf:9,gc:5,gd:'+4',pts:10,form:['W','W','L','W','D'],qual:'direct'},
  {pos:6,name:'Shroud',img:av[5],j:5,g:3,e:1,d:1,gf:8,gc:5,gd:'+3',pts:10,form:['L','D','W','W','W'],qual:'direct'},
  {pos:7,name:'Kscerato',img:av[6],j:5,g:3,e:0,d:2,gf:9,gc:7,gd:'+2',pts:9,form:['W','L','W','W','L'],qual:'direct'},
  {pos:8,name:'Device',img:av[7],j:5,g:3,e:0,d:2,gf:8,gc:7,gd:'+1',pts:9,form:['L','D','W','W','W'],qual:'direct'},
  {pos:9,name:'Apex',img:av[8],j:5,g:2,e:2,d:1,gf:7,gc:6,gd:'+1',pts:8,form:['W','L','D','W','D'],qual:'playoff'},
  {pos:10,name:'Rain',img:av[9],j:5,g:2,e:2,d:1,gf:7,gc:7,gd:'0',pts:8,form:['D','W','L','W','D'],qual:'playoff'},
  {pos:11,name:'Krimz',img:av[10],j:5,g:2,e:1,d:2,gf:7,gc:7,gd:'0',pts:7,form:['W','D','L','W','L'],qual:'playoff'},
  {pos:12,name:'Twistzz',img:av[11],j:5,g:2,e:1,d:2,gf:6,gc:7,gd:'-1',pts:7,form:['L','W','D','W','L'],qual:'playoff'},
  {pos:13,name:'ZywOo',img:av[12],j:5,g:2,e:1,d:2,gf:6,gc:8,gd:'-2',pts:7,form:['W','L','D','L','W'],qual:'playoff'},
  {pos:14,name:'EliGE',img:av[13],j:5,g:2,e:0,d:3,gf:6,gc:8,gd:'-2',pts:6,form:['L','W','L','W','L'],qual:'playoff'},
  {pos:15,name:'Mixer',img:av[14],j:5,g:2,e:0,d:3,gf:6,gc:9,gd:'-3',pts:6,form:['L','L','W','W','L'],qual:'playoff'},
  {pos:16,name:'Xantares',img:av[15],j:5,g:2,e:0,d:3,gf:5,gc:8,gd:'-3',pts:6,form:['D','L','W','L','W'],qual:'playoff'},
  {pos:17,name:'GuardiaN',img:av[16],j:5,g:1,e:2,d:2,gf:5,gc:7,gd:'-2',pts:5,form:['L','D','W','L','D'],qual:'playoff'},
  {pos:18,name:'kennyS',img:av[17],j:5,g:1,e:2,d:2,gf:4,gc:7,gd:'-3',pts:5,form:['L','D','L','W','D'],qual:'playoff'},
  {pos:19,name:'Stewie2K',img:av[18],j:5,g:1,e:1,d:3,gf:4,gc:8,gd:'-4',pts:4,form:['D','L','L','W','L'],qual:'playoff'},
  {pos:20,name:'Tarik',img:av[19],j:5,g:1,e:1,d:3,gf:3,gc:8,gd:'-5',pts:4,form:['L','L','D','L','W'],qual:'playoff'},
  {pos:21,name:'BnTeT',img:av[20],j:5,g:1,e:1,d:3,gf:3,gc:9,gd:'-6',pts:4,form:['L','D','L','L','W'],qual:'playoff'},
  {pos:22,name:'Smooya',img:av[21],j:5,g:1,e:0,d:4,gf:3,gc:9,gd:'-6',pts:3,form:['L','L','W','L','L'],qual:'playoff'},
  {pos:23,name:'Jame',img:av[22],j:5,g:1,e:0,d:4,gf:3,gc:10,gd:'-7',pts:3,form:['L','W','L','L','L'],qual:'playoff'},
  {pos:24,name:'Yekindar',img:av[23],j:5,g:1,e:0,d:4,gf:2,gc:10,gd:'-8',pts:3,form:['W','L','L','L','L'],qual:'playoff'},
  {pos:25,name:'Brehze',img:av[24],j:5,g:0,e:2,d:3,gf:3,gc:10,gd:'-7',pts:2,form:['D','L','D','L','L'],qual:'eliminated'},
  {pos:26,name:'Magisk',img:av[25],j:5,g:0,e:2,d:3,gf:2,gc:9,gd:'-7',pts:2,form:['L','D','D','L','L'],qual:'eliminated'},
  {pos:27,name:'Xyp9x',img:av[26],j:5,g:0,e:1,d:4,gf:2,gc:10,gd:'-8',pts:1,form:['L','L','D','L','L'],qual:'eliminated'},
  {pos:28,name:'dupreeh',img:av[27],j:5,g:0,e:1,d:4,gf:2,gc:11,gd:'-9',pts:1,form:['L','D','L','L','L'],qual:'eliminated'},
  {pos:29,name:'gla1ve',img:av[28],j:5,g:0,e:1,d:4,gf:1,gc:11,gd:'-10',pts:1,form:['D','L','L','L','L'],qual:'eliminated'},
  {pos:30,name:'cadiaN',img:av[29],j:5,g:0,e:0,d:5,gf:1,gc:13,gd:'-12',pts:0,form:['L','L','L','L','L'],qual:'eliminated'},
];

const fC=(r:string)=>r==='W'?'#34A853':r==='D'?'#F5A623':'#EA4335';
const fL=(r:string)=>r==='W'?'V':r==='D'?'E':'D';
const qC=(q:string)=>q==='direct'?'#005EFA':q==='playoff'?'#FA7B17':'#EA4335';

export function ChampionsCupView(){
  const router=useRouter();
  const [tab,setTab]=useState<'Classificacao'|'Bracket'|'Sobre'>('Classificacao');

  const tabStyle=(t:string)=>({background:'none',border:'none',cursor:'pointer',fontSize:13,fontWeight:700,color:tab===t?'#fff':'#9AA4B6',padding:'14px 0',borderBottom:tab===t?'3px solid #F59E0B':'3px solid transparent',outline:'none',whiteSpace:'nowrap' as const});

  return(
    <div style={{backgroundColor:'#0B121E',color:'#fff',fontFamily:"'Inter',sans-serif",minHeight:'100vh',paddingBottom:80}}>
      <div style={{background:'linear-gradient(180deg,#1A1200 0%,#0B121E 100%)',padding:'80px 20px 24px'}}>
        <button onClick={()=>router.push('/eventos')} style={{background:'none',border:'none',color:'#9AA4B6',fontSize:13,fontWeight:600,cursor:'pointer',marginBottom:20,display:'flex',alignItems:'center',gap:6,padding:0}}>← Voltar aos Eventos</button>
        <div style={{display:'flex',alignItems:'center',gap:16,marginBottom:16}}>
          <div style={{width:64,height:64,borderRadius:16,background:'linear-gradient(135deg,#F59E0B,#D97706)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:32,boxShadow:'0 0 30px rgba(245,158,11,0.5)',flexShrink:0}}>🏆</div>
          <div>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:6}}>
              <h1 style={{fontSize:22,fontWeight:900,margin:0}}>Champions Cup</h1>
              <span style={{fontSize:10,fontWeight:800,backgroundColor:'#D97706',color:'#fff',padding:'3px 8px',borderRadius:6}}>OFICIAL</span>
            </div>
            <div style={{fontSize:12,color:'#9AA4B6',fontWeight:600}}>Torneio MATZON · 30 jogadores · Eliminatórias</div>
          </div>
        </div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:8}}>
          {[{label:'Jogadores',value:'30'},{label:'Fase Grupos',value:'5 jogos'},{label:'Prémio',value:'$255'},{label:'Play-Off',value:'Ida/Volta'}].map((s,i)=>(
            <div key={i} style={{backgroundColor:'rgba(245,158,11,0.15)',borderRadius:10,padding:'10px 8px',textAlign:'center'}}>
              <div style={{fontSize:16,fontWeight:900,color:'#FCD34D'}}>{s.value}</div>
              <div style={{fontSize:10,color:'#9AA4B6',fontWeight:600,marginTop:2}}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{display:'flex',gap:24,padding:'0 20px',borderBottom:'1px solid #262F44',overflowX:'auto'}}>
        {(['Classificacao','Bracket','Sobre'] as const).map(t=>(
          <button key={t} style={tabStyle(t)} onClick={()=>setTab(t)}>{t}</button>
        ))}
      </div>

      {tab==='Classificacao'&&(
        <div style={{padding:'16px 0'}}>
          <div style={{display:'flex',gap:8,flexWrap:'wrap',padding:'0 20px',marginBottom:14}}>
            {[{q:'direct',c:'#005EFA',l:'Top 8 → Oitavos'},{q:'playoff',c:'#FA7B17',l:'9°-24° Play-Off'},{q:'eliminated',c:'#EA4335',l:'25°-30° Eliminados'}].map((z,i)=>(
              <div key={i} style={{display:'flex',alignItems:'center',gap:6,fontSize:11,backgroundColor:`${z.c}18`,padding:'4px 12px',borderRadius:20,border:`1px solid ${z.c}50`}}>
                <span style={{width:8,height:8,backgroundColor:z.c,borderRadius:2,display:'inline-block'}}/><span style={{color:z.c,fontWeight:700}}>{z.l}</span>
              </div>
            ))}
          </div>
          <div style={{backgroundColor:'#171E2D',margin:'0 20px',borderRadius:12,overflow:'hidden'}}>
            <div style={{overflowX:'auto'}}>
              <table style={{width:'100%',borderCollapse:'collapse',whiteSpace:'nowrap'}}>
                <thead><tr>
                  <th style={{fontSize:9,color:'#9AA4B6',fontWeight:700,padding:'10px 8px 10px 16px',borderBottom:'1px solid #222A3B',textAlign:'left'}}>JOGADOR</th>
                  {['J','V','E','D','GM','GS','DG'].map(h=><th key={h} style={{fontSize:9,color:'#9AA4B6',fontWeight:700,padding:'10px 6px',borderBottom:'1px solid #222A3B',textAlign:'center'}}>{h}</th>)}
                  <th style={{fontSize:9,color:'#9AA4B6',fontWeight:700,padding:'10px 8px',borderBottom:'1px solid #222A3B',textAlign:'center',borderLeft:'1px solid #222A3B'}}>PTS</th>
                  <th style={{fontSize:9,color:'#9AA4B6',fontWeight:700,padding:'10px 8px',borderBottom:'1px solid #222A3B',textAlign:'center'}}>FORMA</th>
                </tr></thead>
                <tbody>
                  {standings.map((s,i)=>(
                    <React.Fragment key={i}>
                      {s.pos===9&&<tr><td colSpan={10} style={{padding:'5px 20px',backgroundColor:'rgba(250,123,23,0.06)',borderTop:'1px solid rgba(250,123,23,0.2)',borderBottom:'1px solid rgba(250,123,23,0.15)'}}><span style={{fontSize:9,fontWeight:800,color:'#FA7B17',textTransform:'uppercase',letterSpacing:1}}>⚡ Play-Off — 9° ao 24°</span></td></tr>}
                      {s.pos===25&&<tr><td colSpan={10} style={{padding:'5px 20px',backgroundColor:'rgba(234,67,53,0.06)',borderTop:'1px solid rgba(234,67,53,0.2)',borderBottom:'1px solid rgba(234,67,53,0.15)'}}><span style={{fontSize:9,fontWeight:800,color:'#EA4335',textTransform:'uppercase',letterSpacing:1}}>✗ Eliminados — 25° ao 30°</span></td></tr>}
                      <tr style={{backgroundColor:i%2===1?'rgba(255,255,255,0.015)':'transparent'}}>
                        <td style={{padding:'9px 8px 9px 0',borderBottom:'1px solid rgba(255,255,255,0.02)',borderLeft:`3px solid ${qC(s.qual)}`}}>
                          <div style={{display:'flex',alignItems:'center',gap:8,paddingLeft:10}}>
                            <span style={{width:18,textAlign:'center',fontSize:11,color:s.pos<=8?'#005EFA':s.pos<=24?'#FA7B17':'#EA4335',fontWeight:700}}>{s.pos}</span>
                            <img src={s.img} style={{width:28,height:28,borderRadius:'50%',objectFit:'cover',flexShrink:0,border:'2px solid #222A3B'}}/>
                            <span style={{fontWeight:600,fontSize:12}}>{s.name}</span>
                          </div>
                        </td>
                        {[s.j,s.g,s.e,s.d,s.gf,s.gc,s.gd].map((v,vi)=>(
                          <td key={vi} style={{padding:'9px 6px',fontSize:12,textAlign:'center',borderBottom:'1px solid rgba(255,255,255,0.02)',color:vi===6?(String(v).startsWith('+')?'#34A853':String(v)==='0'?'#9AA4B6':'#EA4335'):'#fff'}}>{v}</td>
                        ))}
                        <td style={{padding:'9px 8px',textAlign:'center',fontWeight:800,borderLeft:'1px solid #222A3B',borderBottom:'1px solid rgba(255,255,255,0.02)',fontSize:13}}>{s.pts}</td>
                        <td style={{padding:'9px 8px',borderBottom:'1px solid rgba(255,255,255,0.02)'}}>
                          <div style={{display:'flex',gap:3,justifyContent:'center'}}>
                            {s.form.map((r,ri)=>(
                              <span key={ri} style={{width:18,height:18,borderRadius:4,backgroundColor:fC(r),display:'inline-flex',alignItems:'center',justifyContent:'center',fontSize:9,fontWeight:800,color:'#fff'}}>{fL(r)}</span>
                            ))}
                          </div>
                        </td>
                      </tr>
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {tab==='Bracket'&&(
        <div style={{padding:'20px'}}>
          <ChampionsBracket/>
        </div>
      )}

      {tab==='Sobre'&&(
        <div style={{padding:'25px 20px',color:'#9AA4B6',fontSize:13,lineHeight:1.7}}>
          <h2 style={{color:'#fff',fontSize:16,margin:'0 0 16px'}}>MATZON Champions Cup · Evento Oficial</h2>
          <h3 style={{color:'#fff',fontSize:13,margin:'0 0 8px'}}>Formato</h3>
          <ul style={{paddingLeft:18,display:'flex',flexDirection:'column',gap:5,marginBottom:16}}>
            <li>30 jogadores · 5 partidas de classificação</li>
            <li>Vitória = 3 pts · Empate = 1 pt · Derrota = 0 pts</li>
            <li>Top 8 → Oitavos direto</li>
            <li>9° ao 24° → Play-Off ida e volta (8 duelos)</li>
            <li>25° ao 30° → Eliminados</li>
            <li>Oitavos → Quartos → Meias → Final (jogo único)</li>
            <li>Empate → Prorrogação → Penáltis</li>
          </ul>
          <h3 style={{color:'#fff',fontSize:13,margin:'0 0 8px'}}>Premiação</h3>
          <ul style={{paddingLeft:18,display:'flex',flexDirection:'column',gap:5,marginBottom:16}}>
            <li>🥇 1° — $150 · 🥈 2° — $70 · 🥉 3°/4° — $35 cada</li>
            <li>Total: $255 USD (70% fundo acumulado)</li>
          </ul>
          <div style={{backgroundColor:'rgba(245,158,11,0.08)',borderRadius:10,padding:'12px 14px',border:'1px solid rgba(245,158,11,0.2)',fontSize:12}}>
            Fundo MATZON: $365 · $255 Champions Cup · $110 reserva institucional
          </div>
        </div>
      )}
    </div>
  );
}
