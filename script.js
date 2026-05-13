window.addEventListener('scroll',()=>{
  const scrolled = (window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;
  document.getElementById('scroll-progress').style.width = scrolled+'%';
});
  let prog=0;
const loaderInterval = setInterval(()=>{
  prog += Math.random()*15;
  if(prog>=100){prog=100;clearInterval(loaderInterval);
    setTimeout(()=>{
      const l=document.getElementById('loader');
      l.style.opacity='0';
      setTimeout(()=>l.style.display='none',500);
    },200);
  }
  document.getElementById('loader-bar').style.width=prog+'%';
},100);
const countriesData = [
  {flag:"🇧🇷",name:"Бразилия",capital:"Бразилия",area:"8 515 767",pop:"217 млн.",lang:"Португалски"},
  {flag:"🇦🇷",name:"Аржентина",capital:"Буенос Айрес",area:"2 780 400",pop:"46 млн.",lang:"Испански"},
  {flag:"🇵🇪",name:"Перу",capital:"Лима",area:"1 285 216",pop:"33 млн.",lang:"Испански, кечуа"},
  {flag:"🇨🇴",name:"Колумбия",capital:"Богота",area:"1 141 748",pop:"52 млн.",lang:"Испански"},
  {flag:"🇧🇴",name:"Боливия",capital:"Сукре / Ла Пас",area:"1 098 581",pop:"12 млн.",lang:"Испански, аймара"},
  {flag:"🇻🇪",name:"Венецуела",capital:"Каракас",area:"916 445",pop:"29 млн.",lang:"Испански"},
  {flag:"🇨🇱",name:"Чили",capital:"Сантяго",area:"756 102",pop:"19 млн.",lang:"Испански"},
  {flag:"🇵🇾",name:"Парагвай",capital:"Асунсион",area:"406 752",pop:"7 млн.",lang:"Испански, гуарани"},
  {flag:"🇪🇨",name:"Еквадор",capital:"Кито",area:"283 561",pop:"18 млн.",lang:"Испански"},
  {flag:"🇬🇾",name:"Гаяна",capital:"Джорджтаун",area:"214 969",pop:"0.8 млн.",lang:"Английски"},
  {flag:"🇺🇾",name:"Уругвай",capital:"Монтевидео",area:"176 215",pop:"3.5 млн.",lang:"Испански"},
  {flag:"🇸🇷",name:"Суринам",capital:"Парамарибо",area:"163 820",pop:"0.6 млн.",lang:"Нидерландски"},
  {flag:"🇬🇫",name:"Фр. Гвиана",capital:"Кайен",area:"83 534",pop:"0.3 млн.",lang:"Френски"},
];

const tbody = document.getElementById('countries-table');
if(tbody){
  countriesData.forEach((c,i)=>{
    const tr = document.createElement('tr');
    tr.style.cssText = `border-bottom:1px solid rgba(255,255,255,0.05);background:${i%2===0?'rgba(255,255,255,0.02)':'transparent'};transition:background 0.2s`;
    tr.onmouseover=()=>tr.style.background='rgba(46,204,113,0.07)';
    tr.onmouseout=()=>tr.style.background=i%2===0?'rgba(255,255,255,0.02)':'transparent';
    tr.innerHTML=`
      <td style="padding:0.9rem 1rem;color:#c8f0d5;font-weight:600">${c.flag} ${c.name}</td>
      <td style="padding:0.9rem 1rem;color:#a8d5b5">${c.capital}</td>
      <td style="padding:0.9rem 1rem;color:#a8d5b5;text-align:right">${c.area}</td>
      <td style="padding:0.9rem 1rem;color:#a8d5b5;text-align:right">${c.pop}</td>
      <td style="padding:0.9rem 1rem;color:#7fb89a">${c.lang}</td>
    `;
    tbody.appendChild(tr);
  });
}
// ---- PARTICLES ----
(function(){
  const c = document.getElementById('particles');
  for(let i=0;i<30;i++){
    const s = document.createElement('span');
    s.style.cssText = `left:${Math.random()*100}%;animation-duration:${6+Math.random()*10}s;animation-delay:${-Math.random()*10}s;width:${1+Math.random()*2}px;height:${1+Math.random()*2}px`;
    c.appendChild(s);
  }
})();

// ---- ACCORDION ----
function toggleZone(el){
  const body = el.nextElementSibling;
  const tog = el.querySelector('.zone-toggle');
  const isOpen = body.classList.contains('open');
  document.querySelectorAll('.zone-body').forEach(b=>{b.classList.remove('open')});
  document.querySelectorAll('.zone-toggle').forEach(t=>{t.style.transform=''});
  if(!isOpen){body.classList.add('open');tog.style.transform='rotate(180deg)';}
}

// ---- COUNTRY TABS ----
function showCountry(id, tab){
  document.querySelectorAll('.country-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.country-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('panel-'+id).classList.add('active');
  tab.classList.add('active');
}
function toggleMenu(){
  document.querySelector('.nav-links').classList.toggle('open');
}
// ---- HYDROGRAMS ----
const riverData = {
  amazon: [8,9,15,18,15,12,10,8,7,8,10,9],
  parana: [15,14,13,12,11,10,8,7,8,9,12,14],
  orinoco: [5,4,5,7,10,14,17,15,12,10,8,6]
};
function buildBars(id, data, color){
  const el = document.getElementById(id);
  if(!el) return;
  const max = Math.max(...data);
  data.forEach(v=>{
    const bar = document.createElement('div');
    bar.className = 'hbar';
    const pct = (v/max)*100;
    bar.style.cssText = `height:${pct}%;background:${color};opacity:0.85`;
    el.appendChild(bar);
  });
}
buildBars('amazon-bars', riverData.amazon, 'linear-gradient(to top,#1a5276,#2980b9)');
buildBars('parana-bars', riverData.parana, 'linear-gradient(to top,#1e8449,#2ecc71)');
buildBars('orinoco-bars', riverData.orinoco, 'linear-gradient(to top,#7d6608,#f1c40f)');

// ---- QUIZ ----
const questions = [
  {q:"Коя е най-дългата и пълноводна река на Земята?",opts:["р. Нил","р. Амазонка","р. Парана","р. Конго"],a:1,ex:"р. Амазонка е с дължина 7025 km и носи 1/5 от прясната вода на планетата."},
  {q:"Кой е най-висшият връх на Южна Америка и Западното полукълбо?",opts:["Котопахи","Денали","Акончагуа","Уайна Потоси"],a:2,ex:"Акончагуа е 6962 м и се намира в Аржентина."},
  {q:"Пустинята Атакама е най-сухото място на Земята. В коя страна се намира?",opts:["Аржентина","Бразилия","Чили","Перу"],a:2,ex:"Атакама се простира по тихоокеанското крайбрежие на Чили. Валежи само 1.5 мм/г."},
  {q:"Как се казва езерото на границата между Перу и Боливия, намиращо се на 3812 м н.в.?",opts:["Маракайбо","Титикака","Поопо","Ла Плата"],a:1,ex:"Езерото Титикака е най-голямото высоко планинско езеро – плавателно."},
  {q:"Коя е столицата на Бразилия?",opts:["Рио де Жанейро","Сао Пауло","Буенос Айрес","Бразилия"],a:3,ex:"Бразилия е специално изграденият нов столичен град, открит за столица от 1960 г."},
  {q:"Какво означава названието 'Аржентина'?",opts:["Земята на огъня","Страната на среброто","Земята на пампите","Синята страна"],a:1,ex:"Argentum на латински означава сребро. Елементът сребро е №47 в периодичната таблица."},
  {q:"Водопадът Анхел (Ангел) е най-висок в света. Колко метра е той?",opts:["480 м","750 м","1054 м","1200 м"],a:2,ex:"Водопадът Анхел е 1054 м висок и се намирана приток на р. Ориноко, Венецуела."},
  {q:"Какъв е официалният език на Бразилия?",opts:["Испански","Португалски","Бразилски","Английски"],a:1,ex:"Бразилия е единствената страна в ЮА, където се говори португалски (от колонизатори XVI в.)."},
  {q:"Коя природна зона обхваща 2/3 от Южна Америка?",opts:["Степи и пустини","Екваториални гори и савани","Смесени гори","Тундра"],a:1,ex:"Зоните на екваториалните гори и саваните обхващат 2/3 от территорията на континента."},
  {q:"Как се казват традиционните аржентински животновъди в Пампата?",opts:["Льянерос","Гаучос","Ранчерос","Вакерос"],a:1,ex:"Гаучосите са символ на Аржентина и са прозвището на аржентинския национален отбор по футбол."},
  {q:"Кой ВЕЦ произвежда 85% от електроенергията на Бразилия и е обявен за съвременно чудо на света?",opts:["Три клисури","Сяолангди","Итайпу","Асуан"],a:2,ex:"ВЕЦ Итайпу на р. Парана е обявен за едно от 7-те съвременни чудеса от ASCE (1994 г.)."},
  {q:"Каква е средната гъстота на населнието в Южна Америка?",opts:["5 д/км²","24.6 д/км²","85 д/км²","120 д/км²"],a:1,ex:"Средната гъстота е 24.6 д/км², но е неравномерно разпределена – концентрирано по крайбрежията."},
  {q:"В коя страна се намират руините на Мачу Пикчу?",opts:["Бразилия","Боливия","Чили","Перу"],a:3,ex:"Мачу Пикчу е инкски град на 2430 м н.в. в Перуанските Анди."},
  {q:"Каква е площта на Бразилия?",opts:["2.7 млн. км²","5.5 млн. км²","8.5 млн. км²","17.8 млн. км²"],a:2,ex:"Бразилия е 8 515 000 км² – 5-та по площ в света, почти половината от ЮА."},
  {q:"Коя е реката с най-голям водосборен басейн в света?",opts:["р. Конго","р. Нил","р. Амазонка","р. Яндзъ"],a:2,ex:"Водосборният басейн на Амазонка е около 7 млн. км² – най-голям на Земята."},
  {q:"На коя граница се намират водопадите Игуасу?",opts:["Бразилия-Боливия","Бразилия-Аржентина","Аржентина-Чили","Парагвай-Бразилия"],a:1,ex:"Каскадата Игуасу от 275 водопада е на границата Бразилия-Аржентина на р. Парана."},
  {q:"Коя е най-богатата на видово разнообразие природна зона в Южна Америка?",opts:["Пампата","Патагония","Атакама","Екваториалните гори"],a:3,ex:"Екваториалните гори (Селвас) са с над 4000 вида дървета, 2000+ вида пеперуди и много животни."},
  {q:"Кой водопад е символ на Венецуела?",opts:["Игуасу","Виктория","Анхел (Ангел)","Ниагара"],a:2,ex:"Анхел (1054 м) е на р. Чурун, приток на Ориноко, и е открит от авиатора Джими Анхел (1933 г.)."},
  {q:"Какъв е политическия строй на Бразилия?",opts:["Монархия","Конфедерация","Федерална република","Унитарна република"],a:2,ex:"Бразилия е федерална република, обединяваща 26 щата и 1 федерален окръг."},
  {q:"Как се казват бедните квартали в бразилските градове?",opts:["Баррио","Трущоби","Фавели","Слуми"],a:2,ex:"Фавелите са бедните квартали (фавели), образувани поради бързото нарастване на градското население."},
];

let current=0, score=0, answered=false, userAnswers=[];

function renderQuestion(){
  const q = questions[current];
  document.getElementById('q-num').textContent = `ВЪПРОС ${current+1}`;
  document.getElementById('q-current').textContent = `Въпрос ${current+1} от ${questions.length}`;
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('q-progress').style.width = `${((current)/questions.length)*100+5}%`;
  document.getElementById('q-feedback').textContent = '';
  document.getElementById('q-next').disabled = true;
  const opts = document.getElementById('q-opts');
  opts.innerHTML = '';
  const letters = ['A','B','C','D'];
  q.opts.forEach((opt,i)=>{
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.innerHTML = `<span class="quiz-opt-letter">${letters[i]}</span>${opt}`;
    btn.onclick = ()=>selectAnswer(i);
    opts.appendChild(btn);
  });
  answered = false;
}

function selectAnswer(idx){
  if(answered) return;
  answered = true;
  const q = questions[current];
  const opts = document.querySelectorAll('.quiz-option');
  opts.forEach(o=>o.classList.add('answered'));
  opts[idx].classList.add(idx===q.a ? 'correct' : 'wrong');
  opts[q.a].classList.add('correct');
  const correct = idx===q.a;
  if(correct){ score++; document.getElementById('q-score-live').textContent=`Резултат: ${score}`; }
  document.getElementById('q-feedback').textContent = (correct ? '✅ Правилно! ' : '❌ Грешно! ') + q.ex;
  document.getElementById('q-next').disabled = false;
  userAnswers.push({q:q.q, correct, chosen:q.opts[idx], right:q.opts[q.a]});
}

function nextQuestion(){
  current++;
  if(current >= questions.length){ showScore(); return; }
  renderQuestion();
}

function showScore(){
  document.getElementById('quiz-card').style.display='none';
  document.getElementById('q-current').textContent='Тестът приключи!';
  document.getElementById('q-progress').style.width='100%';
  const sd = document.getElementById('quiz-score');
  sd.style.display='block';
  document.getElementById('final-score').textContent = score;
  const pct = Math.round((score/questions.length)*100);
  let title, sub;
  if(pct>=90){title='🏆 Отличен резултат!';sub=`${pct}% – Ти си истински експерт по Южна Америка!`;}
  else if(pct>=70){title='👏 Много добре!';sub=`${pct}% – Знаеш много за Южна Америка!`;}
  else if(pct>=50){title='📚 Добре!';sub=`${pct}% – Повтори материала и ще се справиш по-добре!`;}
  else{title='💪 Продължавай!';sub=`${pct}% – Прегледай урока и опитай отново!`;}
  document.getElementById('score-title').textContent = title;
  document.getElementById('score-sub').textContent = sub;
  const sa = document.getElementById('score-answers');
  sa.innerHTML = '<div style="font-weight:700;color:#c8f0d5;margin-bottom:1rem;font-size:1rem">Преглед на отговорите:</div>';
  userAnswers.forEach((a,i)=>{
    const div = document.createElement('div');
    div.className = 'sa-item ' + (a.correct ? 'sa-correct' : 'sa-wrong');
    div.innerHTML = `<span class="sa-icon">${a.correct?'✅':'❌'}</span><div><div class="sa-q">${i+1}. ${a.q}</div><div class="sa-a">${a.correct?'Правилно: '+a.right:'Избрал: '+a.chosen+' → Правилно: '+a.right}</div></div>`;
    sa.appendChild(div);
  });
}

function restartQuiz(){
  current=0;score=0;answered=false;userAnswers=[];
  document.getElementById('quiz-card').style.display='flex';
  document.getElementById('quiz-score').style.display='none';
  document.getElementById('q-score-live').textContent='Резултат: 0';
  renderQuestion();
}

renderQuestion();
const glossaryData = [
  {term:"Селвас",def:"Екваториалните гори на Южна Америка. От португалски – 'гори'."},
  {term:"Пампа",def:"Степната зона на Аржентина – плодородни черноземи, говедовъдство."},
  {term:"Льяноси",def:"Саваните на север около р. Ориноко (Венецуела, Колумбия)."},
  {term:"Кампоси",def:"Саваните на Бразилската планинска земя."},
  {term:"Патагония",def:"Студеното платовидно полупустинно плато в Южна Аржентина."},
  {term:"Атакама",def:"Най-сухото място на Земята – пустиня по тихоокеанското крайбрежие на Чили."},
  {term:"Анди",def:"Младонагънати планини по западния край – 9000 km, най-дълги на Земята."},
  {term:"Акончагуа",def:"Най-висок връх на Южна Америка и Западното полукълбо – 6962 м."},
  {term:"Амазонка",def:"Най-пълноводната и с най-голям водосборен басейн река на Земята – 7025 km."},
  {term:"Титикака",def:"Най-голямото планинско плавателно езеро на Земята – 3812 м н.в."},
  {term:"Итайпу",def:"ВЕЦ на р. Парана – 2-ри по мощност в света, 7 съвременни чудеса."},
  {term:"Фавела",def:"Беден квартал в бразилските градове, образуван от бързата урбанизация."},
  {term:"Гаучо",def:"Традиционен аржентински животновъд в Пампата."},
  {term:"Маракайбо",def:"Най-голямото по площ езеро в Южна Америка – Венецуела."},
  {term:"Метис",def:"Потомък от смесен брак между европеец и индианец."},
  {term:"Мулат",def:"Потомък от смесен брак между европеец и африканец."},
  {term:"Кондор",def:"Един от най-едрите летящи птици на Земята – живее в Андите."},
  {term:"Пау Бразил",def:"Дърво, дало името на Бразилия. Ценна червена боя, почти изсечено."},
  {term:"Хевея",def:"Каучуконосно дърво от Амазония – основна суровина за натурален каучук."},
  {term:"Пасати",def:"Постоянни ветрове от Атлантика – носят влага към изтока на континента."},
];

function renderGlossary(data){
  const list = document.getElementById('glossary-list');
  list.innerHTML = data.map(item=>`
    <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:1.2rem;transition:all 0.3s" onmouseover="this.style.borderColor='rgba(46,204,113,0.3)'" onmouseout="this.style.borderColor='rgba(255,255,255,0.07)'">
      <div style="font-weight:700;color:var(--green-light);margin-bottom:0.5rem;font-size:1rem">${item.term}</div>
      <div style="color:#a8d5b5;font-size:0.88rem;line-height:1.6">${item.def}</div>
    </div>
  `).join('');
}

function filterGlossary(){
  const val = document.getElementById('glossary-search').value.toLowerCase();
  renderGlossary(glossaryData.filter(i=>i.term.toLowerCase().includes(val)||i.def.toLowerCase().includes(val)));
}

renderGlossary(glossaryData);
const observer = new IntersectionObserver(els=>{
  els.forEach(el=>{if(el.isIntersecting) el.target.classList.add('visible')});
},{threshold:0.1});
document.querySelectorAll('.overview-card,.relief-card,.river-card,.animal-card,.fact-card,.econ-card,.geo-fact').forEach(el=>{
  el.classList.add('reveal');
  observer.observe(el);
});
window.addEventListener('scroll',()=>{
  document.getElementById('back-top').style.display = window.scrollY > 400 ? 'block' : 'none';
});
const timelineData = [
  {year:"XII в.",title:"Империята на инките",desc:"Индианското племе инка създава могъща империя. Столица Куско – най-старият постоянно населен град в Америка.",side:"left"},
  {year:"1492",title:"Христофор Колумб",desc:"Първа европейска експедиция достига Карибите. Континентите стават известни с името 'Нов свят'.",side:"right"},
  {year:"XVI в.",title:"Амерго Веспучи",desc:"Италианецът на португалска служба плава по крайбрежието и описва новооткритите земи. По негово име е наречена Америка.",side:"left"},
  {year:"1519–1522",title:"Фернандо Магелан",desc:"Първото околосветско плаване. Магелан достига южните крайбрежия, пресича протока наречен на негово име и навлиза в Тихия океан.",side:"right"},
  {year:"1533",title:"Испанско завоевание",desc:"Испанците завземат инкската столица Куско и ограбват 7 тона златни предмети. Колониалният период започва.",side:"left"},
  {year:"XVI–XIX в.",title:"Колониален период",desc:"Испански и португалски колонизатори, и в по-малка степен английски, французки и нидерландски, изнасят природните богатства.",side:"right"},
  {year:"XIX в.",title:"Независимост",desc:"В резултат на националноосвободителни борби почти всички страни извоюват своята независимост в началото на XIX в.",side:"left"},
  {year:"1960",title:"Нова столица на Бразилия",desc:"Бразилия изгражда нова столица – град Бразилия, специално построен в географския център на страната.",side:"right"},
  {year:"Днес",title:"Съвременна Южна Америка",desc:"Континентът се развива, създавайки икономически обединения като МЕРКОСУР. Водещ производител на кафе, захар, соя и нефт.",side:"left"},
];

const tlContainer = document.getElementById('timeline-items');
if(tlContainer){
  timelineData.forEach(item=>{
    const isLeft = item.side==='left';
    const div = document.createElement('div');
    div.style.cssText = `display:flex;justify-content:${isLeft?'flex-start':'flex-end'};margin-bottom:2rem;position:relative`;
    div.innerHTML=`
      <div style="width:45%;background:rgba(255,255,255,0.04);border:1px solid rgba(46,204,113,0.15);border-radius:12px;padding:1.2rem;${isLeft?'margin-right:auto':'margin-left:auto'}">
        <div style="color:var(--green-light);font-weight:700;font-size:0.8rem;letter-spacing:1px;margin-bottom:0.5rem">${item.year}</div>
        <div style="color:#c8f0d5;font-weight:700;margin-bottom:0.5rem">${item.title}</div>
        <div style="color:#7fb89a;font-size:0.85rem;line-height:1.5">${item.desc}</div>
      </div>
      <div style="position:absolute;left:50%;top:1rem;width:12px;height:12px;background:var(--green-light);border-radius:50%;transform:translateX(-50%);border:2px solid #0a1e14"></div>
    `;
    tlContainer.appendChild(div);
  });
}
const didYouKnow = [
  "🌊 р. Амазонка носи 1/5 от прясната вода на цялата планета!",
  "🌵 В пустинята Атакама на места не е валяло над 500 години!",
  "🦋 В екваториалните гори на ЮА живеят над 2000 вида пеперуди!",
  "🏔️ Акончагуа (6962 м) е най-висок връх на Западното полукълбо!",
  "💧 Водопадът Анхел е 16 пъти по-висок от Ниагарския водопад!",
  "🌿 Дървото пау бразил е дало името на цяла държава – Бразилия!",
  "🐟 Пираните са само 20–30 см, но зъбите им са остри като скалпел!",
  "🏙️ Сао Пауло е по-голям от Лондон, Париж и Берлин взети заедно!",
  "⚡ ВЕЦ Итайпу произвежда толкова ток, колкото 20 ядрени централи!",
  "🦙 Ламата е единственото голямо домашно животно, отгледано в Америка!",
  "🗺️ Чили е най-тясната страна в света – 4300 km дълга и ~180 km широка!",
  "🌊 Амазонската делта е толкова голяма, че в нея се губи остров с размерите на Швейцария!",
  "🔋 Аржентина притежава 3-ти по големина запаси от литий в света!",
  "🦅 Кондорът може да лети до 5500 м н.в. и да живее над 70 години!",
];
let lastFact = -1;
function newFact(){
  let idx;
  do { idx = Math.floor(Math.random()*didYouKnow.length); } while(idx===lastFact);
  lastFact = idx;
  const card = document.getElementById('did-card');
  card.style.opacity='0';
  card.style.transform='scale(0.95)';
  setTimeout(()=>{
    document.getElementById('did-text').textContent = didYouKnow[idx];
    card.style.opacity='1';
    card.style.transform='scale(1)';
  },200);
}
newFact();
const ddPairs = [
  {capital:"Бразилия",country:"Бразилия 🇧🇷"},
  {capital:"Буенос Айрес",country:"Аржентина 🇦🇷"},
  {capital:"Лима",country:"Перу 🇵🇪"},
  {capital:"Богота",country:"Колумбия 🇨🇴"},
  {capital:"Сантяго",country:"Чили 🇨🇱"},
  {capital:"Каракас",country:"Венецуела 🇻🇪"},
  {capital:"Кито",country:"Еквадор 🇪🇨"},
  {capital:"Асунсион",country:"Парагвай 🇵🇾"},
];
let dragItem = null;
let ddMatched = 0;

function initDragDrop(){
  const capList = document.getElementById('capitals-list');
  const couList = document.getElementById('countries-list');
  if(!capList || !couList) return;
  ddMatched = 0;
  document.getElementById('dd-result').textContent = '';
  const shuffledCaps = [...ddPairs].sort(()=>Math.random()-0.5);
  const shuffledCou = [...ddPairs].sort(()=>Math.random()-0.5);
  capList.innerHTML = shuffledCaps.map(p=>`
    <div draggable="true" data-capital="${p.capital}"
      ondragstart="dragItem=this;this.style.opacity='0.5'"
      ondragend="this.style.opacity='1'"
      style="background:rgba(46,204,113,0.08);border:1px solid rgba(46,204,113,0.2);border-radius:10px;padding:0.8rem 1rem;color:#c8f0d5;font-weight:600;cursor:grab;transition:all 0.2s"
      onmouseover="this.style.background='rgba(46,204,113,0.15)'"
      onmouseout="this.style.background='rgba(46,204,113,0.08)'"
    >${p.capital}</div>
  `).join('');
  couList.innerHTML = shuffledCou.map(p=>`
    <div data-country="${p.capital}"
      ondragover="event.preventDefault();this.style.borderColor='var(--green-light)'"
      ondragleave="this.style.borderColor='rgba(255,255,255,0.1)'"
      ondrop="dropOnCountry(this)"
      style="background:rgba(255,255,255,0.03);border:2px dashed rgba(255,255,255,0.1);border-radius:10px;padding:0.8rem 1rem;color:#a8d5b5;transition:all 0.2s;min-height:44px"
    >${p.country}</div>
  `).join('');
}

function dropOnCountry(el){
  el.style.borderColor='rgba(255,255,255,0.1)';
  if(!dragItem) return;
  const cap = dragItem.dataset.capital;
  const correctCap = el.dataset.country;
  if(cap === correctCap){
    el.style.background='rgba(46,204,113,0.15)';
    el.style.borderColor='var(--green-light)';
    el.style.borderStyle='solid';
    el.innerHTML = `✅ ${el.textContent} ← ${cap}`;
    dragItem.style.display='none';
    ddMatched++;
    if(ddMatched === ddPairs.length){
      document.getElementById('dd-result').innerHTML='<span style="color:var(--green-light);font-weight:700">🏆 Браво! Всички столици са правилно наредени!</span>';
    }
  } else {
    el.style.borderColor='#e74c3c';
    setTimeout(()=>el.style.borderColor='rgba(255,255,255,0.1)',800);
    document.getElementById('dd-result').textContent = `❌ ${cap} не е столица на ${el.textContent.replace(/🇦🇷|🇧🇷|🇵🇪|🇨🇴|🇨🇱|🇻🇪|🇪🇨|🇵🇾/g,'').trim()}`;
  }
}
const fillData = [
  {text:"Най-дългата река на Земята е р. ___ с дължина 7025 km.",answer:"Амазонка"},
  {text:"Най-сухото място на Земята е пустинята ___ в Чили.",answer:"Атакама"},
  {text:"Най-висок връх на Южна Америка е ___ – 6962 м.",answer:"Акончагуа"},
  {text:"Официалният език на Бразилия е ___.",answer:"португалски"},
  {text:"ВЕЦ ___ произвежда 85% от електроенергията на Бразилия.",answer:"Итайпу"},
  {text:"Езерото ___ е най-голямото планинско плавателно езеро – 3812 м н.в.",answer:"Титикака"},
  {text:"Водопадът ___ е най-висок в света – 1054 м, Венецуела.",answer:"Анхел"},
  {text:"Аржентина означава 'страната на ___' на латински.",answer:"среброто"},
];

function renderFill(){
  const c = document.getElementById('fill-container');
  if(!c) return;
  document.getElementById('fill-score').textContent='';
  c.innerHTML = fillData.map((item,i)=>{
    const parts = item.text.split('___');
    return `<div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:1.5rem">
      <div style="color:#a8d5b5;font-size:1rem;line-height:2">
        ${parts[0]}<input id="fill-${i}" type="text" placeholder="..." style="background:rgba(46,204,113,0.08);border:1px solid rgba(46,204,113,0.3);border-radius:6px;padding:4px 12px;color:#c8f0d5;font-family:'Nunito',sans-serif;font-size:0.95rem;outline:none;width:160px;text-align:center">${parts[1]}
      </div>
      <div id="fill-fb-${i}" style="font-size:0.85rem;margin-top:0.5rem;min-height:20px"></div>
    </div>`;
  }).join('');
}

function checkFill(){
  let correct=0;
  fillData.forEach((item,i)=>{
    const val = (document.getElementById('fill-'+i).value||'').trim().toLowerCase();
    const ans = item.answer.toLowerCase();
    const fb = document.getElementById('fill-fb-'+i);
    const input = document.getElementById('fill-'+i);
    if(val===ans){
      correct++;
      input.style.borderColor='var(--green-light)';
      input.style.background='rgba(46,204,113,0.12)';
      fb.innerHTML=`<span style="color:var(--green-light)">✅ Правилно!</span>`;
    } else {
      input.style.borderColor='#e74c3c';
      input.style.background='rgba(231,76,60,0.08)';
      fb.innerHTML=`<span style="color:#f1948a">❌ Правилният отговор е: <b>${item.answer}</b></span>`;
    }
  });
  document.getElementById('fill-score').innerHTML=`<span style="color:var(--green-light);font-weight:700">Резултат: ${correct} от ${fillData.length}</span>`;
}

function resetFill(){ renderFill(); }
renderFill();
function resetDragDrop(){ initDragDrop(); }
initDragDrop();
