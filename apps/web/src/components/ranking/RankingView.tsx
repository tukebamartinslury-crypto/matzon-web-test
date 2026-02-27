'use client';
import React, { useState, useMemo } from 'react';

const av=['https://randomuser.me/api/portraits/men/32.jpg','https://randomuser.me/api/portraits/men/44.jpg','https://randomuser.me/api/portraits/men/55.jpg','https://randomuser.me/api/portraits/men/62.jpg','https://randomuser.me/api/portraits/men/71.jpg','https://randomuser.me/api/portraits/men/83.jpg','https://randomuser.me/api/portraits/men/91.jpg','https://randomuser.me/api/portraits/men/22.jpg','https://randomuser.me/api/portraits/men/36.jpg','https://randomuser.me/api/portraits/men/48.jpg','https://randomuser.me/api/portraits/men/57.jpg','https://randomuser.me/api/portraits/men/68.jpg','https://randomuser.me/api/portraits/men/77.jpg','https://randomuser.me/api/portraits/men/88.jpg','https://randomuser.me/api/portraits/men/12.jpg','https://randomuser.me/api/portraits/men/19.jpg','https://randomuser.me/api/portraits/men/25.jpg','https://randomuser.me/api/portraits/men/28.jpg','https://randomuser.me/api/portraits/men/31.jpg','https://randomuser.me/api/portraits/men/35.jpg','https://randomuser.me/api/portraits/men/40.jpg','https://randomuser.me/api/portraits/men/42.jpg','https://randomuser.me/api/portraits/men/50.jpg','https://randomuser.me/api/portraits/men/60.jpg','https://randomuser.me/api/portraits/men/64.jpg','https://randomuser.me/api/portraits/men/70.jpg','https://randomuser.me/api/portraits/men/75.jpg','https://randomuser.me/api/portraits/men/80.jpg','https://randomuser.me/api/portraits/men/85.jpg','https://randomuser.me/api/portraits/men/90.jpg','https://randomuser.me/api/portraits/men/94.jpg','https://randomuser.me/api/portraits/men/96.jpg','https://randomuser.me/api/portraits/men/98.jpg','https://randomuser.me/api/portraits/men/15.jpg','https://randomuser.me/api/portraits/men/17.jpg'];

const rawPlayers=[
  {name:'Faker',     img:av[0],  pts:40,v:13,sg:26,top3:2,trend:'up'},
  {name:'Coldzera',  img:av[1],  pts:35,v:11,sg:19,top3:1,trend:'up'},
  {name:'S1mple',    img:av[2],  pts:32,v:10,sg:14,top3:1,trend:'up'},
  {name:'NiKo',      img:av[3],  pts:31,v:10,sg:11,top3:0,trend:'down'},
  {name:'TenZ',      img:av[4],  pts:29,v:9, sg:8, top3:0,trend:'up'},
  {name:'Shroud',    img:av[5],  pts:28,v:9, sg:6, top3:0,trend:'same'},
  {name:'Kscerato',  img:av[6],  pts:27,v:8, sg:4, top3:0,trend:'up'},
  {name:'Device',    img:av[7],  pts:26,v:8, sg:2, top3:0,trend:'down'},
  {name:'Apex',      img:av[8],  pts:25,v:7, sg:1, top3:0,trend:'up'},
  {name:'Rain',      img:av[9],  pts:24,v:7, sg:-1,top3:0,trend:'same'},
  {name:'Krimz',     img:av[10], pts:23,v:7, sg:-2,top3:0,trend:'down'},
  {name:'Twistzz',   img:av[11], pts:22,v:6, sg:-3,top3:0,trend:'up'},
  {name:'ZywOo',     img:av[12], pts:21,v:6, sg:-5,top3:0,trend:'same'},
  {name:'EliGE',     img:av[13], pts:20,v:6, sg:-6,top3:0,trend:'down'},
  {name:'Mixer',     img:av[14], pts:19,v:5, sg:-7,top3:0,trend:'up'},
  {name:'Xantares',  img:av[15], pts:18,v:5, sg:-8,top3:0,trend:'same'},
  {name:'GuardiaN',  img:av[16], pts:17,v:5, sg:-10,top3:0,trend:'down'},
  {name:'kennyS',    img:av[17], pts:16,v:4, sg:-11,top3:0,trend:'up'},
  {name:'Stewie2K',  img:av[18], pts:15,v:4, sg:-12,top3:0,trend:'same'},
  {name:'Tarik',     img:av[19], pts:14,v:4, sg:-14,top3:0,trend:'down'},
  {name:'BnTeT',     img:av[20], pts:13,v:3, sg:-15,top3:0,trend:'up'},
  {name:'Smooya',    img:av[21], pts:12,v:3, sg:-17,top3:0,trend:'down'},
  {name:'Jame',      img:av[22], pts:11,v:3, sg:-18,top3:0,trend:'same'},
  {name:'Yekindar',  img:av[23], pts:10,v:2, sg:-19,top3:0,trend:'down'},
  {name:'Brehze',    img:av[24], pts:9, v:2, sg:-21,top3:0,trend:'same'},
  {name:'Magisk',    img:av[25], pts:8, v:2, sg:-23,top3:0,trend:'down'},
  {name:'Xyp9x',     img:av[26], pts:7, v:1, sg:-24,top3:0,trend:'same'},
  {name:'dupreeh',   img:av[27], pts:6, v:1, sg:-26,top3:0,trend:'down'},
  {name:'gla1ve',    img:av[28], pts:5, v:1, sg:-28,top3:0,trend:'same'},
  {name:'cadiaN',    img:av[29], pts:2, v:0, sg:-36,top3:0,trend:'down'},
  {name:'fl0m',      img:av[30], pts:18,v:5, sg:-9, top3:0,trend:'up'},
  {name:'Karrigan',  img:av[31], pts:15,v:4, sg:-13,top3:0,trend:'down'},
  {name:'nexa',      img:av[32], pts:12,v:3, sg:-16,top3:0,trend:'up'},
  {name:'JaCkz',     img:av[33], pts:9, v:2, sg:-20,top3:0,trend:'same'},
  {name:'XANTARES2', img:av[34], pts:7, v:1, sg:-25,top3:0,trend:'down'},
];

// Global Score = (pts×1.0) + (v×2) + (sg×0.5) + (top3×10)
const players = rawPlayers
  .map(p=>({...p, score: parseFloat((p.pts*1.0 + p.v*2 + p.sg*0.5 + p.top3*10).toFixed(1))}))
  .sort((a,b)=>b.score-a.score)
  .map((p,i)=>({...p,pos:i+1}));

export function RankingView(){
  const [search,setSearch]=useState('');
  const [tab,setTab]=useState<'ranking'|'formula'>('ranking');

  const filtered=useMemo(()=>players.filter(p=>p.name.toLowerCase().includes(search.toLowerCase())),[search]);

  const tabStyle=(t:string)=>({background:'none',border:'none',cursor:'pointer',fontSize:13,fontWeight:700,color:tab===t?'#fff':'#9AA4B6',padding:'14px 0',borderBottom:tab===t?'3px solid #005EFA':'3px solid transparent',outline:'none',whiteSpace:'nowrap' as const});

  const trendIcon=(t:string)=>t==='up'?{icon:'↑',color:'#34A853'}:t==='down'?{icon:'↓',color:'#EA4335'}:{icon:'→',color:'#9AA4B6'};

  return(
    <div style={{backgroundColor:'#0B121E',color:'#fff',fontFamily:"'Inter',sans-serif",minHeight:'100vh',paddingBottom:80}}>

      {/* HEADER */}
      <div style={{background:'linear-gradient(180deg,#0A1628 0%,#0B121E 100%)',padding:'80px 20px 24px'}}>
        <div style={{display:'flex',alignItems:'center',gap:14,marginBottom:16}}>
          <div style={{width:56,height:56,borderRadius:14,background:'linear-gradient(135deg,#005EFA,#0038A8)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:28,boxShadow:'0 0 24px rgba(0,94,250,0.4)',flexShrink:0}}>🌍</div>
          <div>
            <h1 style={{fontSize:20,fontWeight:900,margin:'0 0 4px'}}>Ranking Global MATZON</h1>
            <div style={{fontSize:12,color:'#9AA4B6',fontWeight:600}}>Sistema oficial de classificação · Temporada atual</div>
          </div>
        </div>

        {/* TOP 3 destaque */}
        <div style={{display:'grid',gridTemplateColumns:'1fr 1.1fr 1fr',gap:8,marginBottom:16}}>
          {[players[1],players[0],players[2]].map((p,i)=>{
            const isCenter=i===1;
            return(
              <div key={p.pos} style={{backgroundColor:isCenter?'rgba(0,94,250,0.15)':'rgba(255,255,255,0.04)',borderRadius:14,padding:'14px 10px',textAlign:'center',border:isCenter?'1px solid rgba(0,94,250,0.4)':'1px solid #262F44',position:'relative'}}>
                {isCenter&&<div style={{position:'absolute',top:-10,left:'50%',transform:'translateX(-50%)',fontSize:20}}>👑</div>}
                <div style={{fontSize:isCenter?24:18,marginBottom:4}}>{i===0?'🥈':i===1?'🥇':'🥉'}</div>
                <img src={p.img} style={{width:isCenter?44:36,height:isCenter?44:36,borderRadius:'50%',objectFit:'cover',border:`2px solid ${isCenter?'#005EFA':'#262F44'}`,marginBottom:6}}/>
                <div style={{fontSize:isCenter?13:11,fontWeight:800,color:'#fff'}}>{p.name}</div>
                <div style={{fontSize:isCenter?15:13,fontWeight:900,color:'#005EFA',marginTop:2}}>{p.score}</div>
                <div style={{fontSize:9,color:'#9AA4B6',marginTop:1}}>Global Score</div>
              </div>
            );
          })}
        </div>

        {/* Stats */}
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8}}>
          {[{label:'Jogadores',value:players.length},{label:'Classificados CUP',value:'Top 30'},{label:'Temporada',value:'2026'}].map((s,i)=>(
            <div key={i} style={{backgroundColor:'rgba(0,94,250,0.1)',borderRadius:10,padding:'10px 8px',textAlign:'center'}}>
              <div style={{fontSize:15,fontWeight:900,color:'#60A5FA'}}>{s.value}</div>
              <div style={{fontSize:10,color:'#9AA4B6',fontWeight:600,marginTop:2}}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* TABS */}
      <div style={{display:'flex',gap:24,padding:'0 20px',borderBottom:'1px solid #262F44'}}>
        <button style={tabStyle('ranking')} onClick={()=>setTab('ranking')}>Ranking</button>
        <button style={tabStyle('formula')} onClick={()=>setTab('formula')}>Fórmula</button>
      </div>

      {tab==='ranking'&&(
        <div style={{padding:'16px 0'}}>
          {/* Pesquisa */}
          <div style={{padding:'0 20px',marginBottom:14}}>
            <div style={{backgroundColor:'#1C2436',borderRadius:8,display:'flex',alignItems:'center',padding:'0 15px',gap:10}}>
              <span style={{color:'#9AA4B6'}}>🔍</span>
              <input type="text" placeholder="Pesquisar jogador..." value={search} onChange={e=>setSearch(e.target.value)} style={{background:'transparent',border:'none',color:'#fff',fontSize:13,width:'100%',height:42,outline:'none'}}/>
            </div>
          </div>

          {/* Legenda */}
          <div style={{display:'flex',gap:8,padding:'0 20px',marginBottom:12,flexWrap:'wrap'}}>
            <div style={{display:'flex',alignItems:'center',gap:5,fontSize:11,backgroundColor:'rgba(0,94,250,0.12)',padding:'4px 10px',borderRadius:20,border:'1px solid rgba(0,94,250,0.3)'}}>
              <span style={{width:8,height:8,backgroundColor:'#34A853',borderRadius:'50%',display:'inline-block'}}/><span style={{color:'#60A5FA',fontWeight:700}}>Top 30 → Champions Cup</span>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:5,fontSize:11,backgroundColor:'rgba(234,67,53,0.08)',padding:'4px 10px',borderRadius:20,border:'1px solid rgba(234,67,53,0.3)'}}>
              <span style={{width:8,height:8,backgroundColor:'#EA4335',borderRadius:'50%',display:'inline-block'}}/><span style={{color:'#EA4335',fontWeight:700}}>Fora da zona</span>
            </div>
          </div>

          {/* Tabela */}
          <div style={{backgroundColor:'#171E2D',margin:'0 20px',borderRadius:12,overflow:'hidden'}}>
            <div style={{overflowX:'auto'}}>
              <table style={{width:'100%',borderCollapse:'collapse',whiteSpace:'nowrap'}}>
                <thead><tr style={{backgroundColor:'rgba(0,0,0,0.3)'}}>
                  <th style={{fontSize:9,color:'#9AA4B6',fontWeight:700,padding:'10px 8px 10px 14px',borderBottom:'1px solid #222A3B',textAlign:'left'}}>#</th>
                  <th style={{fontSize:9,color:'#9AA4B6',fontWeight:700,padding:'10px 8px',borderBottom:'1px solid #222A3B',textAlign:'left'}}>JOGADOR</th>
                  <th style={{fontSize:9,color:'#005EFA',fontWeight:800,padding:'10px 8px',borderBottom:'1px solid #222A3B',textAlign:'center'}}>SCORE</th>
                  <th style={{fontSize:9,color:'#9AA4B6',fontWeight:700,padding:'10px 8px',borderBottom:'1px solid #222A3B',textAlign:'center'}}>PTS</th>
                  <th style={{fontSize:9,color:'#9AA4B6',fontWeight:700,padding:'10px 8px',borderBottom:'1px solid #222A3B',textAlign:'center'}}>V</th>
                  <th style={{fontSize:9,color:'#9AA4B6',fontWeight:700,padding:'10px 8px',borderBottom:'1px solid #222A3B',textAlign:'center'}}>SG</th>
                  <th style={{fontSize:9,color:'#9AA4B6',fontWeight:700,padding:'10px 8px 10px 0',borderBottom:'1px solid #222A3B',textAlign:'center'}}>↑↓</th>
                </tr></thead>
                <tbody>
                  {filtered.map((p,i)=>{
                    const inTop30=p.pos<=30;
                    const trend=trendIcon(p.trend);
                    const isTop3=p.pos<=3;
                    return(
                      <React.Fragment key={i}>
                        {p.pos===31&&!search&&<tr><td colSpan={7} style={{padding:'5px 20px',backgroundColor:'rgba(234,67,53,0.06)',borderTop:'1px solid rgba(234,67,53,0.2)',borderBottom:'1px solid rgba(234,67,53,0.15)'}}><span style={{fontSize:9,fontWeight:800,color:'#EA4335',textTransform:'uppercase',letterSpacing:1}}>✗ Fora da zona Champions Cup</span></td></tr>}
                        <tr style={{backgroundColor:i%2===1?'rgba(255,255,255,0.012)':'transparent'}}>
                          <td style={{padding:'10px 8px 10px 0',borderBottom:'1px solid rgba(255,255,255,0.02)',borderLeft:`3px solid ${inTop30?'#005EFA':'#EA4335'}`}}>
                            <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:32,height:32,borderRadius:'50%',backgroundColor:isTop3?'rgba(0,94,250,0.2)':'transparent',marginLeft:6}}>
                              <span style={{fontSize:12,fontWeight:800,color:isTop3?'#60A5FA':inTop30?'#fff':'#9AA4B6'}}>{p.pos}</span>
                            </div>
                          </td>
                          <td style={{padding:'10px 8px',borderBottom:'1px solid rgba(255,255,255,0.02)'}}>
                            <div style={{display:'flex',alignItems:'center',gap:8}}>
                              <div style={{position:'relative'}}>
                                <img src={p.img} style={{width:30,height:30,borderRadius:'50%',objectFit:'cover',border:`2px solid ${inTop30?'rgba(0,94,250,0.5)':'#262F44'}`}}/>
                                <span style={{position:'absolute',bottom:-2,right:-2,width:8,height:8,borderRadius:'50%',backgroundColor:inTop30?'#34A853':'#EA4335',border:'1px solid #0B121E'}}/>
                              </div>
                              <span style={{fontWeight:600,fontSize:12,color:inTop30?'#fff':'#9AA4B6'}}>{p.name}</span>
                            </div>
                          </td>
                          <td style={{padding:'10px 8px',borderBottom:'1px solid rgba(255,255,255,0.02)',textAlign:'center'}}>
                            <span style={{fontSize:13,fontWeight:900,color:isTop3?'#60A5FA':inTop30?'#fff':'#9AA4B6'}}>{p.score}</span>
                          </td>
                          <td style={{padding:'10px 6px',fontSize:12,textAlign:'center',borderBottom:'1px solid rgba(255,255,255,0.02)',color:'#fff'}}>{p.pts}</td>
                          <td style={{padding:'10px 6px',fontSize:12,textAlign:'center',borderBottom:'1px solid rgba(255,255,255,0.02)',color:'#fff'}}>{p.v}</td>
                          <td style={{padding:'10px 6px',fontSize:12,textAlign:'center',borderBottom:'1px solid rgba(255,255,255,0.02)',color:p.sg>0?'#34A853':p.sg===0?'#9AA4B6':'#EA4335'}}>{p.sg>0?`+${p.sg}`:p.sg}</td>
                          <td style={{padding:'10px 8px',textAlign:'center',borderBottom:'1px solid rgba(255,255,255,0.02)'}}><span style={{fontSize:14,fontWeight:900,color:trend.color}}>{trend.icon}</span></td>
                        </tr>
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {tab==='formula'&&(
        <div style={{padding:'20px',display:'flex',flexDirection:'column',gap:14}}>
          <div style={{backgroundColor:'#151C2B',borderRadius:14,padding:'18px',border:'1px solid rgba(0,94,250,0.2)'}}>
            <div style={{fontSize:12,color:'#9AA4B6',fontWeight:700,marginBottom:10,textTransform:'uppercase',letterSpacing:1}}>Fórmula Global Score</div>
            <div style={{backgroundColor:'rgba(0,94,250,0.08)',borderRadius:10,padding:'14px',fontFamily:'monospace',fontSize:13,lineHeight:2,color:'#60A5FA',border:'1px solid rgba(0,94,250,0.2)'}}>
              Global Score =<br/>
              &nbsp;&nbsp;(Pontos Temporada × <span style={{color:'#FFD700'}}>1.0</span>)<br/>
              + (Vitórias × <span style={{color:'#34A853'}}>2</span>)<br/>
              + (Saldo de Gols × <span style={{color:'#F5A623'}}>0.5</span>)<br/>
              + (Bónus Top 3 × <span style={{color:'#A78BFA'}}>10</span>)
            </div>
          </div>

          {[
            {icon:'📊',title:'Pontos da Temporada × 1.0',desc:'Base principal do ranking. Cada ponto da liga conta directamente para o score global.',color:'#FFD700'},
            {icon:'⚽',title:'Vitórias × 2',desc:'Recompensa jogadores ofensivos. Vencer vale o dobro — diferencia quem empata de quem vence.',color:'#34A853'},
            {icon:'📈',title:'Saldo de Gols × 0.5',desc:'Desempate qualitativo. Jogadores com saldo positivo sobem no ranking em caso de igualdade.',color:'#F5A623'},
            {icon:'🏅',title:'Bónus Top 3 × 10',desc:'Incentiva alto desempenho. Terminar no Top 3 da Liga Elite vale +10 pontos por vez.',color:'#A78BFA'},
          ].map((item,i)=>(
            <div key={i} style={{backgroundColor:'#151C2B',borderRadius:12,padding:'14px 16px',display:'flex',gap:14,alignItems:'flex-start',border:'1px solid #262F44'}}>
              <div style={{width:40,height:40,borderRadius:10,backgroundColor:`${item.color}18`,display:'flex',alignItems:'center',justifyContent:'center',fontSize:20,flexShrink:0,border:`1px solid ${item.color}30`}}>{item.icon}</div>
              <div>
                <div style={{fontSize:13,fontWeight:800,color:item.color,marginBottom:4}}>{item.title}</div>
                <div style={{fontSize:12,color:'#9AA4B6',lineHeight:1.6}}>{item.desc}</div>
              </div>
            </div>
          ))}

          <div style={{backgroundColor:'rgba(0,94,250,0.08)',borderRadius:12,padding:'14px 16px',border:'1px solid rgba(0,94,250,0.2)'}}>
            <div style={{fontSize:12,fontWeight:800,color:'#60A5FA',marginBottom:8}}>📋 Critérios de Desempate</div>
            {['1. Global Score','2. Pontos da temporada','3. Número de vitórias','4. Saldo de gols','5. Confronto directo','6. Sorteio técnico (último recurso)'].map((c,i)=>(
              <div key={i} style={{fontSize:12,color:'#9AA4B6',padding:'3px 0',borderBottom:i<5?'1px solid rgba(255,255,255,0.04)':'none'}}>{c}</div>
            ))}
          </div>

          <div style={{backgroundColor:'rgba(52,168,83,0.08)',borderRadius:12,padding:'14px 16px',border:'1px solid rgba(52,168,83,0.2)'}}>
            <div style={{fontSize:12,fontWeight:800,color:'#34A853',marginBottom:8}}>🏆 Qualificação Champions Cup</div>
            <div style={{fontSize:12,color:'#9AA4B6',lineHeight:1.7}}>Os <strong style={{color:'#fff'}}>Top 30 do Ranking Global</strong> qualificam-se automaticamente para a Champions Cup após o encerramento oficial da temporada. O ranking é congelado na data de corte. Sem play-off de qualificação — apenas mérito.</div>
          </div>
        </div>
      )}
    </div>
  );
}
