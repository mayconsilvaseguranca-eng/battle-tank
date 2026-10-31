/* @net:begin — conexão do TESTE NO CLAUDE (salas do Claude, capability "room"). Gerado por claude-teste/build.py */
const NET=(()=>{
  let room=null,hosts=[],lastAd='';
  const api={ok:false,settled:false,openHost,sendTo,broadcast,join,send,close,lobbyTick,
    lobbyRooms:()=>hosts,lobbyReady:()=>!!room,inviteUrl:code=>code.toUpperCase()};
  (async()=>{
    try{room=window.claude&&window.claude.use?await window.claude.use('room'):null}catch(e){room=null}
    api.ok=!!room;api.settled=true;
    if(!room)$('#netnote').innerHTML='<span class="warn">Modo online indisponível nesta visualização.</span> Abra pelo link do Claude, com login, para jogar com amigos. O treino com bots funciona normalmente.';
    else room.onPeers(ch=>{hosts=ch.peers.filter(p=>!p.sameTab&&p.presence&&p.presence.host).map(p=>p.presence.host);renderRooms()},()=>{});
    renderRooms();
  })();
  async function openHost(m,cb){const code=genCode();let r;
    try{r=await room.join('tk-'+code)}catch(e){cb.fail(e&&e.code||'erro');return}
    if(mode!==m){r.leave().catch(()=>{});return}
    m.r=r;m.seen=new Set();m.full=new Set();m.hb=0;
    r.onPeers(ch=>{if(mode!==m)return;const now=new Set();
      for(const p of ch.peers){if(p.sameTab||!p.presence||p.presence.role!=='p')continue;now.add(p.peer);
        if(!m.seen.has(p.peer)){m.seen.add(p.peer);hostPeerJoin(m,p.peer)}
        hostPeerData(m,p.peer,p.presence.d)}
      for(const id of [...m.seen])if(!now.has(id)){m.seen.delete(id);m.full.delete(id);hostPeerLeave(m,id)}},()=>{});
    cb.ready(code)}
  function sendTo(m,id,msg){if(msg.t==='full'&&m.full)m.full.add(id)}
  function broadcast(m,msg){if(m.r)m.r.presence({role:'h',st:msg.st,hb:++m.hb,full:[...m.full].slice(0,16)}).catch(()=>{})}
  async function join(m,code,h){let r;
    try{r=await room.join('tk-'+code)}catch(e){h.closed('Não foi possível entrar na sala ('+(e&&e.code||'erro')+').');return}
    if(mode!==m){r.leave().catch(()=>{});return}
    m.r=r;
    r.onPeers(ch=>{if(mode!==m)return;let host=null;
      for(const p of ch.peers){if(p.sameTab){if(!m.myPeer)h.id(p.peer)}else if(!host&&p.presence&&p.presence.role==='h'&&p.presence.st)host=p}
      if(!host)return;const pr=host.presence;if(pr===m.lastPr)return;m.lastPr=pr;
      if(m.myPeer&&Array.isArray(pr.full)&&pr.full.includes(m.myPeer)){h.data({t:'full'});return}
      h.data({t:'s',st:pr.st})},()=>{});
    send(m,{t:'i',in:0,nm:myName(),tw:-1})}
  function send(m,msg){if(!m.r)return;const k=JSON.stringify(msg),now=performance.now();
    if(k===m.lastSent&&now-(m.lastSentAt||0)<1000)return;m.lastSent=k;m.lastSentAt=now;
    m.r.presence({role:'p',d:msg}).catch(()=>{})}
  function close(m){if(m.r)m.r.leave().catch(()=>{});m.r=null;if(m.host&&room){room.presence({host:null}).catch(()=>{});lastAd=''}}
  function lobbyTick(ad){if(!room)return;const k=JSON.stringify(ad);if(k!==lastAd){lastAd=k;room.presence({host:ad}).catch(()=>{})}}
  return api;
})();
/* @net:end */
