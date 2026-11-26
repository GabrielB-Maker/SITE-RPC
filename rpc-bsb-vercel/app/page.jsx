'use client';

import { useState } from 'react';

const CONFIG = {
  // Preencha com o WhatsApp oficial do RPC, somente números com DDI e DDD.
  whatsapp: '5561999999999',
  // E-mail oficial para contato (substitua antes de publicar).
  email: 'CONTATO@SEUDOMINIO.COM',
};

const gallery = [
  { title: 'Comunhão', image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Adoração', image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Juventude em movimento', image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=85' },
];

const ministries = [
  ['01', 'Santidade', 'Uma geração que busca viver uma fé verdadeira e uma vida dedicada a Deus.'],
  ['02', 'Identidade', 'Jovens firmes em quem são e no propósito que receberam no Reino.'],
  ['03', 'Imersão', 'Experiências de comunhão, aprendizado, adoração e crescimento espiritual.'],
];

function SectionTitle({ eyebrow, children, light = false }) {
  return <div className={`section-title ${light ? 'light' : ''}`}><span>{eyebrow}</span><h2>{children}</h2></div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ nome:'', telefone:'', igreja:'', pastor:'', telefoneLider:'', restricoes:'', lider:'', emergencia:'', email:'', nascimento:'' });
  const [sent, setSent] = useState(false);
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const message = `INSCRIÇÃO ACAMP RPC 2027\n${Object.entries(form).map(([k,v]) => `${k}: ${v}`).join('\n')}`;
    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSent(true);
  };

  return <>
    <header className="header">
      <a className="brand" href="#inicio" aria-label="RPC BSB início"><span className="brand-mark">rpc</span><span className="brand-sub">RENOVADOS DO PLANALTO CENTRAL</span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">☰</button>
      <nav className={menuOpen ? 'nav open' : 'nav'}>
        {['Início','Quem somos','Programação','Acampamento','Loja','Equipe','Contato'].map((n,i)=><a key={n} href={['#inicio','#sobre','#programacao','#acampamento','#loja','#equipe','#contato'][i]} onClick={()=>setMenuOpen(false)}>{n}</a>)}
      </nav>
      <a className="header-cta" href="#acampamento">PARTICIPE <span>↗</span></a>
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero-bg" />
        <div className="hero-content">
          <p className="eyebrow">UMA GERAÇÃO • UM PROPÓSITO • UM REINO</p>
          <h1>RENOVADOS<br/><em>DO PLANALTO</em><br/>CENTRAL<span>.</span></h1>
          <p className="hero-sub">Buscando Renovação no Reino de Deus</p>
          <div className="hero-actions"><a className="button button-orange" href="#sobre">CONHEÇA O RPC <span>↗</span></a><a className="text-link" href="#programacao">EXPLORE A JORNADA ↓</a></div>
        </div>
        <div className="hero-bottom"><span>BRASÍLIA & ENTORNO</span><span>RPC — 2027</span><span>FÉ QUE CONECTA GERAÇÕES</span></div>
        <div className="hero-stamp">R<br/>P<br/>C</div>
      </section>

      <section className="intro section-pad" id="sobre">
        <div className="intro-label"><span>01 / QUEM SOMOS</span><span className="line"/></div>
        <div className="intro-grid"><div><SectionTitle eyebrow="NOSSA HISTÓRIA">Uma juventude<br/>com <i>propósito.</i></SectionTitle></div><div className="intro-copy"><p>Somos o RPC — Renovados do Planalto Central. Uma transição da antiga Federação de Jovens, criada nos anos 90, com o propósito de promover congressos e acampamentos envolvendo as IPRs de Brasília e entorno.</p><p>Hoje, trabalhamos para auxiliar no crescimento, maturidade e conexão entre jovens das IPRs de Brasília e região.</p><a className="under-link" href="#valores">NOSSA ESSÊNCIA <span>↗</span></a></div></div>
        <div className="mission-grid" id="valores">
          <article><span>01 — MISSÃO</span><h3>Renovar.<br/>Conectar.<br/>Discipular.</h3><p>Sermos renovados diariamente pelo Espírito Santo, auxiliando líderes de jovens por meio de eventos e projetos evangelísticos e interativos.</p></article>
          <article><span>02 — VISÃO</span><h3>Uma geração<br/>unida em<br/>seu propósito.</h3><p>Em 2027, ter uma juventude unida trabalhando para alcançar novas gerações e jovens convictos de seu propósito no Reino.</p></article>
          <article><span>03 — VALORES</span><h3>Fé que se<br/>transforma<br/>em atitude.</h3><p>Renovação espiritual, família, integridade, unidade, pregação da Palavra, discipulado e serviço.</p></article>
        </div>
      </section>

      <section className="feature" id="programacao"><div className="feature-image"/><div className="feature-content"><span className="eyebrow">02 / VISTA O RPC</span><h2>VISTA<br/><i>O RPC.</i></h2><p>Carregue com você aquilo em que acreditamos. Confira os produtos oficiais e vista essa visão.</p><a className="button button-dark" href="#loja">CONHECER PRODUTOS <span>↗</span></a></div></section>

      <section className="program section-pad"><div className="program-head"><SectionTitle eyebrow="03 / NOSSA JORNADA">Santidade. Identidade.<br/><i>Imersão.</i></SectionTitle><p>Explore nossas áreas de ministério e encontre os encontros que fazem parte da caminhada de fé.</p></div><div className="ministry-list">{ministries.map(([num,title,desc])=><article className="ministry" key={num}><span>{num}</span><h3>{title}</h3><p>{desc}</p><span className="arrow">↗</span></article>)}</div></section>

      <section className="camp" id="acampamento"><div className="camp-image"/><div className="camp-content"><span className="eyebrow">04 / RESERVE ESSA EXPERIÊNCIA</span><p className="camp-kicker">RPC APRESENTA</p><h2>ACAMP<br/><i>2027</i></h2><p>Prepare-se para dias de comunhão, crescimento e renovação. Faça sua inscrição e venha viver essa experiência com a gente.</p><a className="button button-orange" href="#inscricao">QUERO ME INSCREVER <span>↗</span></a></div><div className="camp-year">2027</div></section>

      <section className="registration section-pad" id="inscricao"><div className="registration-info"><SectionTitle eyebrow="INSCRIÇÕES ABERTAS">Faça parte<br/>do <i>ACAMP 2027.</i></SectionTitle><p>Preencha seus dados com atenção. As informações serão encaminhadas à equipe do RPC pelo WhatsApp.</p><div className="notice">ATENÇÃO <span>Informe alergias, restrições alimentares e contatos de emergência.</span></div><p className="small-note">Os períodos e valores dos lotes devem ser confirmados com a organização.</p></div><form className="form" onSubmit={submit}><div className="form-heading"><span>FORMULÁRIO DE INSCRIÇÃO</span><span>RPC / 2027</span></div><div className="form-grid">
        <label>Nome completo *<input required name="nome" value={form.nome} onChange={update} placeholder="Seu nome"/></label>
        <label>Telefone / WhatsApp *<input required name="telefone" value={form.telefone} onChange={update} placeholder="(61) 99999-9999"/></label>
        <label>Igreja *<input required name="igreja" value={form.igreja} onChange={update} placeholder="Sua IPR"/></label>
        <label>Nome do pastor *<input required name="pastor" value={form.pastor} onChange={update} placeholder="Nome do pastor"/></label>
        <label>Telefone do líder *<input required name="telefoneLider" value={form.telefoneLider} onChange={update} placeholder="(61) 99999-9999"/></label>
        <label>Líder responsável *<input required name="lider" value={form.lider} onChange={update} placeholder="Nome do líder"/></label>
        <label className="full">Alergias, comorbidades ou restrições alimentares *<textarea required name="restricoes" value={form.restricoes} onChange={update} placeholder="Caso não possua, escreva: não possuo."/></label>
        <label>Contato de emergência *<input required name="emergencia" value={form.emergencia} onChange={update} placeholder="(61) 99999-9999"/></label>
        <label>E-mail *<input required type="email" name="email" value={form.email} onChange={update} placeholder="voce@email.com"/></label>
        <label>Data de nascimento *<input required type="date" name="nascimento" value={form.nascimento} onChange={update}/></label>
      </div><button className="button button-orange submit" type="submit">ENVIAR INSCRIÇÃO <span>↗</span></button>{sent&&<p className="success">O WhatsApp foi aberto com seus dados. Confira e envie a mensagem para concluir.</p>}<p className="privacy">Ao enviar, você concorda em compartilhar esses dados com a organização do evento.</p></form></section>

      <section className="location"><div className="location-copy"><span className="eyebrow">05 / COMO CHEGAR</span><h2>O PRÓXIMO<br/>PASSO É <i>JUNTOS.</i></h2><p><strong>SÍTIO MAGISTRAL</strong><br/>DF-430 — Brazlândia, Brasília - DF, 72707-970</p><div className="location-actions"><a href="https://www.google.com/maps/search/?api=1&query=S%C3%ADtio+Magistral+DF-430+Brazl%C3%A2ndia+Bras%C3%ADlia" target="_blank" rel="noreferrer">GOOGLE MAPS ↗</a><a href="https://waze.com/ul?q=S%C3%ADtio%20Magistral%20Brazl%C3%A2ndia" target="_blank" rel="noreferrer">WAZE ↗</a></div></div><div className="map-frame"><iframe title="Mapa do Sítio Magistral" src="https://www.google.com/maps?q=S%C3%ADtio%20Magistral%20DF-430%20Brazl%C3%A2ndia%20Bras%C3%ADlia&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div></section>

      <section className="agenda section-pad"><div><span className="eyebrow">06 / MARQUE NA AGENDA</span><h2>AGENDA RPC<br/><i>2027.</i></h2><p>Fique por dentro dos próximos encontros, eventos e momentos de comunhão.</p><a className="under-link" href="#contato">ACOMPANHE AS NOVIDADES <span>↗</span></a></div><div className="agenda-card"><div className="agenda-number">27</div><div><span>RPC • CALENDÁRIO 2027</span><h3>Próximos encontros</h3><p>As datas e inscrições dos próximos eventos serão divulgadas pelos canais oficiais.</p></div><span className="agenda-arrow">↗</span></div></section>

      <section className="gallery-section"><div className="gallery-head"><SectionTitle eyebrow="07 / MOMENTOS RPC">Mais que eventos.<br/><i>Conexões reais.</i></SectionTitle><p>Uma juventude que cresce, serve, adora e caminha unida.</p></div><div className="gallery">{gallery.map((g,i)=><div className={`gallery-item g${i+1}`} key={g.title}><img src={g.image} alt={g.title}/><span>{g.title}</span></div>)}</div></section>

      <section className="team section-pad" id="equipe"><div className="team-head"><SectionTitle eyebrow="08 / QUEM CAMINHA À FRENTE">Nossa <i>equipe.</i></SectionTitle><p>Liderança que serve e trabalha para conectar a juventude das IPRs de Brasília e entorno.</p></div><div className="team-grid"><article><div className="team-photo photo-one">JB</div><span>PRESIDENTE</span><h3>João Borges</h3></article><article><div className="team-photo photo-two">LS</div><span>VICE-PRESIDENTE</span><h3>Lília Soares</h3></article><article><div className="team-photo photo-three">LM</div><span>LÍDER MÍDIA</span><h3>Leonardo</h3></article><article><div className="team-photo photo-four">+</div><span>LÍDER STAFF</span><h3>Equipe RPC</h3></article></div></section>

      <section className="shop section-pad" id="loja"><div><span className="eyebrow">09 / LOJA OFICIAL</span><h2>VISTA A<br/><i>VISÃO.</i></h2><p>Produtos oficiais RPC. O catálogo e a disponibilidade serão atualizados aqui.</p><a className="button button-dark" href="mailto:" onClick={(e)=>{e.preventDefault();window.location.href=`mailto:${CONFIG.email}?subject=${encodeURIComponent('Produtos RPC')}`}}>CONSULTAR PRODUTOS ↗</a></div><div className="shop-art"><div className="shirt">RPC<span>RENOVADOS<br/>DO PLANALTO<br/>CENTRAL</span></div><span>RPC / MERCH</span></div></section>

      <section className="contact section-pad" id="contato"><div><span className="eyebrow">10 / FALE COM A GENTE</span><h2>VAMOS<br/><i>CAMINHAR JUNTOS?</i></h2></div><div className="contact-side"><p>Quer saber mais sobre o RPC, participar de um encontro ou falar com a equipe? Entre em contato pelos canais oficiais.</p><a className="button button-orange" href={`https://wa.me/${CONFIG.whatsapp}`} target="_blank" rel="noreferrer">CHAMAR NO WHATSAPP ↗</a><a className="email-link" href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a></div></section>
    </main>

    <footer className="footer"><a className="brand footer-brand" href="#inicio"><span className="brand-mark">rpc</span><span className="brand-sub">RENOVADOS DO PLANALTO CENTRAL</span></a><span>BUSCANDO RENOVAÇÃO NO REINO DE DEUS</span><span>© RPC BSB 2027</span><a href="#inicio">VOLTAR AO TOPO ↑</a></footer>
  </>;
}
