'use client';
import React, { useState, useRef, useEffect } from 'react';

const ME = { id: 'me', name: 'Eu', img: 'https://randomuser.me/api/portraits/men/32.jpg' };

const CONTACTS = [
  { id: '1', name: 'Faker',     img: 'https://randomuser.me/api/portraits/men/44.jpg', online: true,  unread: 2, lastMsg: 'GG aquela partida ontem!', lastTime: '21:04' },
  { id: '2', name: 'S1mple',   img: 'https://randomuser.me/api/portraits/men/55.jpg', online: true,  unread: 0, lastMsg: 'Quando jogas de novo?',      lastTime: '19:30' },
  { id: '3', name: 'NiKo',     img: 'https://randomuser.me/api/portraits/men/62.jpg', online: false, unread: 1, lastMsg: 'Bora duelo amanhã?',          lastTime: 'Ontem' },
  { id: '4', name: 'TenZ',     img: 'https://randomuser.me/api/portraits/men/71.jpg', online: false, unread: 0, lastMsg: 'Boa sorte no ranking 🔥',     lastTime: 'Seg'   },
  { id: '5', name: 'Shroud',   img: 'https://randomuser.me/api/portraits/men/83.jpg', online: true,  unread: 0, lastMsg: 'Clutch insano hoje',          lastTime: 'Dom'   },
  { id: '6', name: 'Kscerato', img: 'https://randomuser.me/api/portraits/men/91.jpg', online: false, unread: 0, lastMsg: 'Tens Discord?',               lastTime: 'Sab'   },
];

const ROOMS = [
  { id: 'geral',    name: '# Geral',         unread: 5 },
  { id: 'torneios', name: '# Torneios',       unread: 0 },
  { id: 'liga',     name: '# Liga Elite',     unread: 2 },
  { id: 'champions',name: '# Champions Cup',  unread: 0 },
  { id: 'off',      name: '# Off-topic',      unread: 0 },
];

type Msg = { id: number; from: string; img: string; text: string; time: string; mine: boolean };

const INIT_DMS: Record<string, Msg[]> = {
  '1': [
    { id: 1, from: 'Faker',   img: CONTACTS[0].img, text: 'Ei, boa partida ontem!',        time: '20:58', mine: false },
    { id: 2, from: 'Eu',      img: ME.img,           text: 'Obrigado, foi intensa 😅',      time: '21:00', mine: true  },
    { id: 3, from: 'Faker',   img: CONTACTS[0].img, text: 'GG aquela partida ontem!',      time: '21:04', mine: false },
  ],
  '2': [
    { id: 1, from: 'S1mple',  img: CONTACTS[1].img, text: 'Quando jogas de novo?',         time: '19:28', mine: false },
    { id: 2, from: 'Eu',      img: ME.img,           text: 'Amanhã à noite provavelmente',  time: '19:30', mine: true  },
  ],
  '3': [
    { id: 1, from: 'NiKo',    img: CONTACTS[2].img, text: 'Bora duelo amanhã?',            time: 'Ontem', mine: false },
  ],
  '4': [{ id: 1, from: 'TenZ',    img: CONTACTS[3].img, text: 'Boa sorte no ranking 🔥',  time: 'Seg',   mine: false }],
  '5': [{ id: 1, from: 'Shroud',  img: CONTACTS[4].img, text: 'Clutch insano hoje',        time: 'Dom',   mine: false }],
  '6': [{ id: 1, from: 'Kscerato',img: CONTACTS[5].img, text: 'Tens Discord?',             time: 'Sab',   mine: false }],
};

const INIT_ROOMS: Record<string, Msg[]> = {
  geral: [
    { id: 1, from: 'Faker',    img: CONTACTS[0].img, text: 'Alguém vai jogar esta noite?',         time: '20:00', mine: false },
    { id: 2, from: 'S1mple',   img: CONTACTS[1].img, text: 'Eu estou dentro! Que horas?',           time: '20:02', mine: false },
    { id: 3, from: 'Eu',       img: ME.img,           text: 'Às 21h funciona para todos?',           time: '20:05', mine: true  },
    { id: 4, from: 'TenZ',     img: CONTACTS[3].img, text: 'Perfeito 👌',                            time: '20:06', mine: false },
    { id: 5, from: 'NiKo',     img: CONTACTS[2].img, text: 'Chego um pouco mais tarde, guardem vaga', time: '20:10', mine: false },
  ],
  torneios: [
    { id: 1, from: 'Shroud',   img: CONTACTS[4].img, text: 'Próximo torneio quando começa?',        time: '18:00', mine: false },
    { id: 2, from: 'Kscerato', img: CONTACTS[5].img, text: 'Liga Elite começa na próxima semana',   time: '18:05', mine: false },
    { id: 3, from: 'Eu',       img: ME.img,           text: 'Já me inscrevi! 🏆',                   time: '18:10', mine: true  },
  ],
  liga: [
    { id: 1, from: 'Faker',    img: CONTACTS[0].img, text: 'Estou no topo da Liga 😎',              time: '17:00', mine: false },
    { id: 2, from: 'Eu',       img: ME.img,           text: 'Por agora... 😄',                       time: '17:02', mine: true  },
  ],
  champions: [
    { id: 1, from: 'S1mple',   img: CONTACTS[1].img, text: 'Champions Cup a cada 10 temporadas é épico', time: '15:00', mine: false },
  ],
  off: [
    { id: 1, from: 'TenZ',     img: CONTACTS[3].img, text: 'Alguém viu o jogo ontem? 🔥',           time: '22:00', mine: false },
  ],
};

function now() {
  return new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
}

export function ChatView() {
  const [tab, setTab]           = useState<'dms'|'rooms'>('dms');
  const [activeDM, setActiveDM] = useState<string|null>(null);
  const [activeRoom, setActiveRoom] = useState<string|null>(null);
  const [dmMsgs, setDmMsgs]     = useState(INIT_DMS);
  const [roomMsgs, setRoomMsgs] = useState(INIT_ROOMS);
  const [input, setInput]       = useState('');
  const [search, setSearch]     = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  const activeContact = CONTACTS.find(c => c.id === activeDM);
  const activeRoomObj = ROOMS.find(r => r.id === activeRoom);
  const messages = activeDM
    ? dmMsgs[activeDM] || []
    : activeRoom
    ? roomMsgs[activeRoom] || []
    : [];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages.length, activeDM, activeRoom]);

  const send = () => {
    if (!input.trim()) return;
    const msg: Msg = { id: Date.now(), from: 'Eu', img: ME.img, text: input.trim(), time: now(), mine: true };
    if (activeDM) {
      setDmMsgs(prev => ({ ...prev, [activeDM]: [...(prev[activeDM]||[]), msg] }));
    } else if (activeRoom) {
      setRoomMsgs(prev => ({ ...prev, [activeRoom]: [...(prev[activeRoom]||[]), msg] }));
    }
    setInput('');
  };

  const filteredContacts = CONTACTS.filter(c => c.name.toLowerCase().includes(search.toLowerCase()));

  const inConversation = activeDM !== null || activeRoom !== null;

  return (
    <div style={{ backgroundColor: '#0B121E', color: '#fff', fontFamily: "'Inter',sans-serif", minHeight: '100vh', paddingTop: 64, display: 'flex', flexDirection: 'column' }}>

      {/* ── LISTA (quando não está em conversa) ── */}
      {!inConversation && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>

          {/* Header */}
          <div style={{ padding: '20px 20px 0' }}>
            <h1 style={{ fontSize: 20, fontWeight: 900, margin: '0 0 16px' }}>Mensagens</h1>
            <div style={{ backgroundColor: '#1C2436', borderRadius: 10, display: 'flex', alignItems: 'center', padding: '0 14px', gap: 8, marginBottom: 16 }}>
              <span style={{ color: '#9AA4B6' }}>🔍</span>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Pesquisar..." style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: 13, height: 42, width: '100%', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', gap: 0, backgroundColor: '#151C2B', borderRadius: 10, padding: 4, marginBottom: 20 }}>
              {(['dms','rooms'] as const).map(t => (
                <button key={t} onClick={() => setTab(t)} style={{ flex: 1, background: tab === t ? '#005EFA' : 'none', border: 'none', borderRadius: 8, color: tab === t ? '#fff' : '#9AA4B6', fontSize: 13, fontWeight: 700, padding: '8px 0', cursor: 'pointer' }}>
                  {t === 'dms' ? '💬 Diretas' : '# Salas'}
                </button>
              ))}
            </div>
          </div>

          {/* DMs */}
          {tab === 'dms' && (
            <div style={{ flex: 1, padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {filteredContacts.map(c => (
                <button key={c.id} onClick={() => setActiveDM(c.id)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', backgroundColor: '#151C2B', border: 'none', borderRadius: 12, cursor: 'pointer', textAlign: 'left', width: '100%' }}>
                  <div style={{ position: 'relative', flexShrink: 0 }}>
                    <img src={c.img} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover' }} />
                    <span style={{ position: 'absolute', bottom: 1, right: 1, width: 11, height: 11, borderRadius: '50%', backgroundColor: c.online ? '#34A853' : '#9AA4B6', border: '2px solid #151C2B' }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 }}>
                      <span style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{c.name}</span>
                      <span style={{ fontSize: 11, color: '#9AA4B6' }}>{c.lastTime}</span>
                    </div>
                    <div style={{ fontSize: 12, color: '#9AA4B6', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.lastMsg}</div>
                  </div>
                  {c.unread > 0 && (
                    <div style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: '#005EFA', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, flexShrink: 0 }}>{c.unread}</div>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Salas */}
          {tab === 'rooms' && (
            <div style={{ flex: 1, padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {ROOMS.map(r => (
                <button key={r.id} onClick={() => setActiveRoom(r.id)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', backgroundColor: '#151C2B', border: 'none', borderRadius: 12, cursor: 'pointer', textAlign: 'left', width: '100%' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, backgroundColor: 'rgba(0,94,250,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>💬</div>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{r.name}</span>
                    <div style={{ fontSize: 11, color: '#9AA4B6', marginTop: 2 }}>Sala MATZON</div>
                  </div>
                  {r.unread > 0 && (
                    <div style={{ width: 20, height: 20, borderRadius: '50%', backgroundColor: '#EA4335', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, flexShrink: 0 }}>{r.unread}</div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── CONVERSA ABERTA ── */}
      {inConversation && (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', height: 'calc(100vh - 64px)' }}>

          {/* Header conversa */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px', backgroundColor: '#0D1625', borderBottom: '1px solid #1C2436', flexShrink: 0 }}>
            <button onClick={() => { setActiveDM(null); setActiveRoom(null); }} style={{ background: 'none', border: 'none', color: '#9AA4B6', fontSize: 22, cursor: 'pointer', padding: 0, lineHeight: 1 }}>‹</button>
            {activeContact && (
              <>
                <div style={{ position: 'relative' }}>
                  <img src={activeContact.img} style={{ width: 38, height: 38, borderRadius: '50%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', bottom: 0, right: 0, width: 10, height: 10, borderRadius: '50%', backgroundColor: activeContact.online ? '#34A853' : '#9AA4B6', border: '2px solid #0D1625' }} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800 }}>{activeContact.name}</div>
                  <div style={{ fontSize: 11, color: activeContact.online ? '#34A853' : '#9AA4B6' }}>{activeContact.online ? 'Online' : 'Offline'}</div>
                </div>
              </>
            )}
            {activeRoomObj && (
              <div>
                <div style={{ fontSize: 14, fontWeight: 800 }}>{activeRoomObj.name}</div>
                <div style={{ fontSize: 11, color: '#9AA4B6' }}>Sala MATZON</div>
              </div>
            )}
          </div>

          {/* Mensagens */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {messages.map((msg, i) => (
              <div key={msg.id} style={{ display: 'flex', flexDirection: msg.mine ? 'row-reverse' : 'row', alignItems: 'flex-end', gap: 8 }}>
                {!msg.mine && <img src={msg.img} style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, marginBottom: 2 }} />}
                <div style={{ maxWidth: '72%' }}>
                  {!msg.mine && i === 0 && <div style={{ fontSize: 11, color: '#9AA4B6', fontWeight: 600, marginBottom: 4, paddingLeft: 4 }}>{msg.from}</div>}
                  {!msg.mine && i > 0 && messages[i-1].from !== msg.from && <div style={{ fontSize: 11, color: '#9AA4B6', fontWeight: 600, marginBottom: 4, paddingLeft: 4 }}>{msg.from}</div>}
                  <div style={{
                    backgroundColor: msg.mine ? '#005EFA' : '#1C2436',
                    color: '#fff', borderRadius: msg.mine ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    padding: '10px 14px', fontSize: 13, lineHeight: 1.5,
                  }}>{msg.text}</div>
                  <div style={{ fontSize: 10, color: '#9AA4B6', marginTop: 4, textAlign: msg.mine ? 'right' : 'left', paddingLeft: 4, paddingRight: 4 }}>{msg.time}</div>
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: '12px 16px', backgroundColor: '#0D1625', borderTop: '1px solid #1C2436', display: 'flex', gap: 10, alignItems: 'flex-end', flexShrink: 0 }}>
            <div style={{ flex: 1, backgroundColor: '#1C2436', borderRadius: 12, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && send()}
                placeholder="Escreve uma mensagem..."
                style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: 13, flex: 1, outline: 'none' }}
              />
              <button style={{ background: 'none', border: 'none', fontSize: 18, cursor: 'pointer', padding: 0 }}>😊</button>
            </div>
            <button onClick={send} style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: input.trim() ? '#005EFA' : '#1C2436', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, transition: 'background 0.2s', flexShrink: 0 }}>
              ➤
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
