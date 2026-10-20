import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Heart, Mail, Gift, Flower2, Sparkles, LockKeyhole, Music2, Star, X } from 'lucide-react';
import './style.css';

const floatingHearts = Array.from({ length: 18 }, (_, i) => ({
  left: `${(i * 37 + 7) % 100}%`, delay: `${(i % 9) * -1.7}s`, duration: `${10 + (i % 7) * 1.8}s`, size: `${12 + (i % 5) * 6}px`
}));

const letters = [
  { icon: '💌', title: 'افتحيها لما تكوني زعلانة يا يويو', text: 'تعالي هنا يا يويو يا حبيبي وركزي مش لازم كل يوم يبقى حلو ومش لازم كل حاجة تمشي زي ما خططنا. يوم صعب انا عارف مش معناه اننا خلاص لا عملنا الي علينا. أنا شايف تعبك ومجهودك، وفخور بيكي أوي إنك بتحاولي ❤️' },
  { icon: '🌷', title: 'افتحيها ياحبيبي ادلعك سيكه😂🌚❤️', text: 'عمتا عمتاااا بحبك موووووت يابتتت شبر ونص وقعت كيرلس ازاااي ياجدعان😂🌚❤️بس وقعه حلوه اكدب يعني عايز كويسه يحبيبي وفكي كده يلعن الامتحان انا عايزك كويسه ومبسوطه ديما فكيييي يايويووو واضحكي ومتضايقيش عايزين الباقي في شواااال بحبك يايويووو❤️.' },
  { icon: '🧸', title: 'افتحيها في حضن😂🌚❤️', text: 'دي حضن كبير أوي من بعيد يا يويو 🫂❤️ مش لازم تقولي حاجة ولا تشرحي حاجة. ارتاحي شوية وسيبي اليوم يعدّي ومتضايقيش إنتي تستاهلي كل الحنية وكل حاجه حلوه زي عيونك والراحة، مش الضغط طول الوقت.' }
];

function App() {
  const [opened, setOpened] = useState(false);
  const [activeLetter, setActiveLetter] = useState(null);
  const [surprise, setSurprise] = useState(false);
  const [name, setName] = useState('يا أجمل حاجة في حياتي');
  const [editingName, setEditingName] = useState(false);

  return (
    <main className="page">
      <div className="glow glow-one" /><div className="glow glow-two" />
      <div className="floating-layer" aria-hidden="true">{floatingHearts.map((h, i) => <Heart key={i} className="float-heart" fill="currentColor" style={{ left: h.left, animationDelay: h.delay, animationDuration: h.duration, width: h.size, height: h.size }} />)}</div>

      <header className="topbar">
        <a className="brand" href="#home"><span className="brand-icon"><Heart fill="currentColor" size={21}/></span> هاي يويو اتفضلي شوفي باقي الحاجه😂🩷</a>
        <span className="top-note"><Sparkles size={15}/> حاجه بسيطه ليكي يايويو يارب تفكي😂</span>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot"/> حاجه صغننه تفكك من اليوم والامتحان 🌚❤️</div>
          <h1>الامتحان كان صعب وايه يعني يايويو🌚<br/><span>تعالي أهون عليكي</span> <Heart className="title-heart" fill="currentColor" /></h1>
          <p className="lead">عارف إن الامتحان كان صعب، وانك مضايقة بس يايويو عملنا الي علينا فكي كده يحبيبي فداكي الدنيا كلها عايزك تضحكي كده ورينا الضحكههههه. 🌚😂</p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={() => setOpened(true)}>{opened ? 'أنا هنا معاكي ❤️' : 'افتحي الرساله يابطوطي'} <Heart size={18} fill="currentColor"/></button>
            <a className="soft-link" href="#letters">فيه رسائل تانية ليكي <span>↓</span></a>
          </div>
          {opened && <div className="revealed-note"><Sparkles size={18}/><span>بصي ياقلبي إنتِ عملتي اللي عليكي ودا اهم حاجه أنا فخور بيكي اوي مهما كانت النتيجة المهم انك بخير وكويسه ❤️</span></div>}
          <div className="tiny-signature"><span className="signature-line"/> كملي لسه لسه😂<Heart size={13} fill="currentColor"/></div>
        </div>
        <div className="hero-art" aria-label="رسمة قلب وورود رومانسية">
          <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
          <div className="heart-sun"><Heart size={110} fill="currentColor" strokeWidth={1.2}/><span>♡</span></div>
          <div className="flower flower-a">🌷</div><div className="flower flower-b">🌸</div><div className="flower flower-c">🌹</div>
          <div className="sparkle s-one">✦</div><div className="sparkle s-two">✧</div><div className="sparkle s-three">✦</div>
          <div className="art-caption"><span>a little reminder</span><strong>إنتِ كفاية وزيادة 💗</strong></div>
        </div>
      </section>

      <section className="reassurance section-card">
        <div className="round-icon"><Flower2 size={24}/></div>
        <div><p className="mini-label">كلمتين بسسسسسس</p><h2>الامتحان الصعب مش مقياس لشطارتك اصلا يابت</h2></div>
        <span className="corner-heart">♡</span>
      </section>

      <section className="letters-section" id="letters">
        <div className="section-heading"><span className="mini-label">اختاري يايويو براحتككك🌚💗</span><h2>ظروف صغننه زيك كده 💌</h2><p>كل ظرف جواه رسالة ليكي في وقت مختلف.</p></div>
        <div className="letter-grid">{letters.map((letter, i) => <button className="letter-card" key={letter.title} onClick={() => setActiveLetter(letter)}><span className="letter-emoji">{letter.icon}</span><span className="letter-lock"><LockKeyhole size={13}/></span><strong>{letter.title}</strong><small>اضغطي عشان تفتحي الرسالة</small><span className="card-bottom">رسالة رقم 0{i + 1} <span>↙</span></span></button>)}</div>
      </section>

      <section className="promise-card">
        <div className="promise-icon"><Gift size={29}/></div><div className="promise-text"><span className="mini-label">وعد صغير</span><h2>بعد ضغط الامتحانات انشاء الله هنتقابل وارخم غليكي 🌚🎀</h2></div><button className="gift-button" onClick={() => setSurprise(true)}>المفاجأة الأخيرة <Heart size={17} fill="currentColor"/></button>
      </section>

      <footer><div className="footer-heart"><Heart fill="currentColor" size={18}/></div><p></p><strong></strong><span className="footer-stars">✧　♡　✧</span></footer>

      {activeLetter && <div className="modal-backdrop" onClick={() => setActiveLetter(null)}><article className="letter-modal" onClick={e => e.stopPropagation()}><button className="close-btn" onClick={() => setActiveLetter(null)} aria-label="إغلاق"><X size={20}/></button><div className="modal-emoji">{activeLetter.icon}</div><span className="mini-label">رسالة مخصوص ليكي</span><h2>{activeLetter.title}</h2><p>{activeLetter.text}</p><div className="modal-sign">خدي بالك من قلبك يا حبيبتي ♡</div><button className="primary-btn modal-done" onClick={() => setActiveLetter(null)}>الي بعدووو❤️</button></article></div>}
      {surprise && <div className="modal-backdrop" onClick={() => setSurprise(false)}><article className="letter-modal surprise-modal" onClick={e => e.stopPropagation()}><button className="close-btn" onClick={() => setSurprise(false)} aria-label="إغلاق"><X size={20}/></button><div className="surprise-hearts">💗 🌷 💗</div><span className="mini-label">آخر مفاجأة</span><h2>إنتِ تستاهلي كل الحلو</h2><p>نفسي أقدر أشيل عنك أي زعل، بس لحد ما أقدر خليكي فاكرة إن فيه حد بيتمنالك النجاح والراحة والفرحة من قلبه. فخووور بيكي يحبيبي ديما ومبسوط شايفك مش بتقصري وبتعملي الي عليكي مبسوط بيكي ديما يايويوو بموت فيكي لو متعرفيش😂🌚. ❤️</p><div className="big-love">بحب أشوفك مبسوطة ♡</div><button className="primary-btn modal-done" onClick={() => setSurprise(false)}>اضحكي بقى 🥹💗</button></article></div>}
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
