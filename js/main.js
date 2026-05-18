/* ─── i18n Translations ──────────────────────────────────────────── */
const LANG = {
  en: {
    'nav.about': 'About', 'nav.work': 'Work', 'nav.ideas': 'Ideas', 'nav.contact': 'Contact',

    'hero.eyebrow': 'est. mmxxv / vsike.com',
    'hero.tagline': '<span class="em">velocity.</span>  style.  instinct.',
    'hero.sub': 'A digital atelier at the intersection of vision and velocity. Where design meets instinct, and ideas become momentum.',
    'hero.cta1': 'Enter the space  →', 'hero.cta2': 'View work',

    'qn.about.desc': 'The story, the why, the vision behind vsike.',
    'qn.work.desc': 'Selected projects and digital experiments.',
    'qn.ideas.desc': 'Thinking out loud. Notes from the field.',
    'qn.contact.desc': "Let's build something worth remembering.",

    'phi.label': 'Philosophy',
    'phi.quote': '“We move fast, but we never lose sight of the details that make things beautiful.”',
    'phi.p1': "vsike was born from a simple belief: that speed and elegance aren’t opposites. That you can ship with velocity and still obsess over the pixel. That instinct, refined by experience, is the sharpest tool in any maker’s kit.",
    'phi.p2': 'We live in an age of infinite noise. vsike is a signal — deliberate, considered, relentless in its pursuit of what actually matters.',
    'phi.p3': 'Every line of code, every composition, every word chosen here is the product of that obsession. Not perfection for its own sake — momentum with precision.',
    'phi.cta': 'Read the manifesto  →',
    'stat.iterations': 'Iterations', 'stat.direction': 'Direction', 'stat.forward': 'Always forward',

    'about.eyebrow': 'About vsike',
    'about.title': 'Vision.<br>Style.<br>Instinct.',
    'about.sub': 'A philosophy, a practice, and an obsession with making things that actually matter.',
    'manifesto.label': 'The Manifesto',
    'manifesto.intro': "vsike is not a studio. It’s not an agency. It’s a stance.",
    'manifesto.p1': "In a world that rewards speed over substance, vsike bets on both. True velocity isn’t just fast — it’s directed. It’s the kind of momentum that comes from knowing exactly where you’re going, and why each step matters.",
    'manifesto.p2': "Style, here, isn’t decoration. It’s clarity made visible. The discipline to remove everything that doesn’t belong, and the courage to commit fully to what does. A style is a worldview — consistent, recognizable, earned.",
    'manifesto.p3': "And instinct? That’s the hardest thing to teach and the most valuable thing to develop. The gut-level knowing that comes from years of looking, making, failing, and looking again. vsike exists to sharpen that edge — for the work, and for the maker behind it.",
    'manifesto.p4': 'We believe the best work happens at the intersection of all three: a clear vision to aim at, the style to carry it through, and the instinct to know when you’ve arrived.',
    'pillar.v': 'Vision', 'pillar.s': 'Style', 'pillar.i': 'Instinct',
    'path.label': 'The Path',
    'about.cta.text': "Ready to see what we’ve made?",
    'about.cta1': 'View work  →', 'about.cta2': 'Get in touch',

    'work.eyebrow': 'Selected Work',
    'work.title': "Things<br>we’ve built.",
    'work.sub': 'A curated collection of digital work — interfaces, systems, and experiments made with intention.',
    'work.section.label': 'Projects', 'work.section.count': '06 works',
    'work.cta1': 'Start a project  →', 'work.cta2.label': 'New inquiries open',

    'ideas.eyebrow': 'Ideas',
    'ideas.title': 'Thinking<br>out loud.',
    'ideas.sub': 'Notes on AI security, design, and the places where they collide. Covering LLM exploits, zero-days, and the craft of building things that last.',
    'ideas.section.label': 'All Posts', 'ideas.section.count': '57 entries',
    'ideas.loop.label': 'Stay in the loop',
    'ideas.loop.title': "New ideas, when they’re ready.",
    'ideas.loop.cta': 'Get notified  →',

    'contact.eyebrow': 'Contact',
    'contact.title': "Let’s make<br>something.",
    'contact.sub': "New projects, collaborations, sharp ideas — all welcome. If it’s worth building, it’s worth talking about.",
    'contact.direct': 'Direct line', 'contact.elsewhere': 'Elsewhere',
    'contact.available': 'Available for new projects — 2025',
    'contact.based': 'Based', 'contact.form.title': 'Send a message',
    'contact.form.name': 'Name', 'contact.form.email': 'Email',
    'contact.form.subject': 'Subject', 'contact.form.message': 'Message',
    'contact.form.submit': 'Send message  →', 'contact.form.sent': 'Message sent →',
    'contact.placeholder.name': 'Your name',
    'contact.placeholder.subject': "What’s this about?",
    'contact.placeholder.message': 'Tell me about your project, idea, or just say hello.',
    'contact.quote': '”The best collaborations start with someone who has a real problem and someone who genuinely wants to solve it.”',
    'contact.link.site.label': 'About this site',
    'contact.link.site': 'Stack, design decisions & colophon  →',
    'contact.link.careers.label': 'Join the team',
    'contact.link.careers': 'View open roles  →',
    'nav.site': 'This Site',
    'nav.careers': 'Careers',
    'article.back': '← All Ideas',
  },

  zh: {
    'nav.about': '关于', 'nav.work': '作品', 'nav.ideas': '想法', 'nav.contact': '联系',

    'hero.eyebrow': '创立 mmxxv / vsike.com',
    'hero.tagline': '<span class="em">速度。</span>  风格。  直觉。',
    'hero.sub': '一间聚焦于视觉与速度交汇处的数字工作室。设计与直觉在此相遇，想法化为前进的动力。',
    'hero.cta1': '进入空间  →', 'hero.cta2': '查看作品',

    'qn.about.desc': '关于 vsike 的故事、初心与愿景。',
    'qn.work.desc': '精选项目与数字实验。',
    'qn.ideas.desc': '大声思考，来自实践的笔记。',
    'qn.contact.desc': '让我们共同创造值得被记住的东西。',

    'phi.label': '理念',
    'phi.quote': '「我们快速前行，但从不忽视那些让事物变得美好的细节。」',
    'phi.p1': 'vsike 诞生于一个简单的信念：速度与优雅并不对立。你可以快速交付，同时仍然对每一个像素精益求精。经验磨砺的直觉，是每一位创造者工具箱中最锋利的武器。',
    'phi.p2': '我们生活在一个充满无尽噪音的时代。vsike 是一个信号——深思熟虑，有的放矢，不懈追求真正重要的事物。',
    'phi.p3': '这里的每一行代码、每一种构图、每一个选词，都是这种执念的产物。不是为了完美而完美——而是带有精准的动力。',
    'phi.cta': '阅读宣言  →',
    'stat.iterations': '迭代', 'stat.direction': '方向', 'stat.forward': '始终向前',

    'about.eyebrow': '关于 vsike',
    'about.title': '愿景。<br>风格。<br>直觉。',
    'about.sub': '一种哲学，一种实践，一种对真正有价值的事物的执着追求。',
    'manifesto.label': '宣言',
    'manifesto.intro': 'vsike 不是一个工作室，不是一家机构。它是一种立场。',
    'manifesto.p1': '在一个奖励速度而非深度的世界里，vsike 两者兼顾。真正的速度不只是快——它是有方向的。它是那种来自清晰知道自己去向何处、以及为何每一步都重要的动力。',
    'manifesto.p2': '风格，在这里，不是装饰。它是被具象化的清晰。是去除一切不属于这里的事物的纪律，以及全力投入于真正所需之物的勇气。风格是一种世界观——一致的、可辨识的、被赋予的。',
    'manifesto.p3': '那直觉呢？那是最难教授却最值得培养的东西。多年观察、创作、失败、再观察所积累的那种本能。vsike 存在的意义，就是磨砺这把利刃——为了作品，也为了背后的创造者。',
    'manifesto.p4': '我们相信，最好的作品发生在三者的交汇处：一个清晰的愿景作为目标，一种风格贯穿始终，以及一种当你到达时便能知晓的直觉。',
    'pillar.v': '愿景', 'pillar.s': '风格', 'pillar.i': '直觉',
    'path.label': '我们的历程',
    'about.cta.text': '准备好看看我们做了什么？',
    'about.cta1': '查看作品  →', 'about.cta2': '联系我们',

    'work.eyebrow': '精选作品',
    'work.title': '我们构建<br>的作品。',
    'work.sub': '一批精心策划的数字作品——有意为之的界面、系统与实验。',
    'work.section.label': '项目', 'work.section.count': '06 件',
    'work.cta1': '开启项目  →', 'work.cta2.label': '现开放新项目咨询',

    'ideas.eyebrow': '想法',
    'ideas.title': '大声<br>思考。',
    'ideas.sub': '关于 AI 安全、设计以及两者交汇之处的笔记。涵盖 LLM 漏洞、零日攻击与经久耐用的构建之道。',
    'ideas.section.label': '全部文章', 'ideas.section.count': '57 篇',
    'ideas.loop.label': '保持关注',
    'ideas.loop.title': '新想法，准备好就发布。',
    'ideas.loop.cta': '订阅通知  →',

    'contact.eyebrow': '联系',
    'contact.title': '来做点<br>什么吧。',
    'contact.sub': '新项目、合作机会、犀利想法——一切皆欢迎。值得构建的，就值得谈论。',
    'contact.direct': '直接联系', 'contact.elsewhere': '社交媒体',
    'contact.available': '现接受新项目 — 2025',
    'contact.based': '位置', 'contact.form.title': '发送消息',
    'contact.form.name': '姓名', 'contact.form.email': '邮箱',
    'contact.form.subject': '主题', 'contact.form.message': '消息',
    'contact.form.submit': '发送消息  →', 'contact.form.sent': '消息已发送 →',
    'contact.placeholder.name': '您的姓名',
    'contact.placeholder.subject': '主题是什么？',
    'contact.placeholder.message': '请告诉我您的项目、想法，或只是打个招呼。',
    'contact.quote': '「最好的合作，始于真正有问题的人，遇见真正想解决问题的人。」',
    'contact.link.site.label': '关于本站',
    'contact.link.site': '技术栈、设计决策与版权页  →',
    'contact.link.careers.label': '加入团队',
    'contact.link.careers': '查看开放职位  →',
    'nav.site': '本站',
    'nav.careers': '招聘',
    'article.back': '← 全部想法',
  },

  ja: {
    'nav.about': 'について', 'nav.work': '作品', 'nav.ideas': 'アイデア', 'nav.contact': 'お問い合わせ',

    'hero.eyebrow': '設立 mmxxv / vsike.com',
    'hero.tagline': '<span class="em">速度。</span>  スタイル。  直感。',
    'hero.sub': 'ビジョンと速度が交差するデジタルアトリエ。デザインと直感が出会い、アイデアが推進力へと変わる場所。',
    'hero.cta1': '空間へ入る  →', 'hero.cta2': '作品を見る',

    'qn.about.desc': 'vsike の物語、理由、そしてビジョン。',
    'qn.work.desc': '厳選されたプロジェクトとデジタル実験。',
    'qn.ideas.desc': '声に出して考える。現場からのノート。',
    'qn.contact.desc': '記憶に残るものを一緒につくりましょう。',

    'phi.label': '哲学',
    'phi.quote': '「速く動く。でも、物事を美しくする細部は決して見失わない。」',
    'phi.p1': 'vsike はシンプルな信念から生まれた。速さと優雅さは対立しない。速度を持って届けながら、同時にピクセルにこだわることができる。経験によって磨かれた直感は、どんなクリエイターにとっても最も鋭いツールだ。',
    'phi.p2': '私たちは無限のノイズの時代に生きている。vsike はシグナルだ——意図的で、熟考された、本当に重要なことへの飽くなき追求。',
    'phi.p3': 'ここにあるすべてのコード、すべての構成、すべての言葉は、その執念の産物だ。それ自体のための完璧さではなく——精度を持った推進力。',
    'phi.cta': 'マニフェストを読む  →',
    'stat.iterations': 'イテレーション', 'stat.direction': '方向性', 'stat.forward': '常に前へ',

    'about.eyebrow': 'vsike について',
    'about.title': 'ビジョン。<br>スタイル。<br>直感。',
    'about.sub': '哲学であり、実践であり、本当に重要なものを作ることへの執着。',
    'manifesto.label': 'マニフェスト',
    'manifesto.intro': 'vsike はスタジオではない。エージェンシーでもない。それはスタンスだ。',
    'manifesto.p1': '実質より速さを重んじる世界で、vsike は両方を追求する。真の速度とは単に速いことではなく、方向性を持つことだ。どこへ向かうのか、なぜ一歩一歩が重要なのかを明確に知ることから生まれる推進力だ。',
    'manifesto.p2': 'スタイルとは、ここでは装飾ではない。可視化された明晰さだ。属さないものをすべて取り除く規律と、本当に必要なものに完全にコミットする勇気。スタイルは世界観——一貫した、認識可能な、獲得されたもの。',
    'manifesto.p3': '直感は？それは最も教えにくく、最も価値のある能力だ。見て、作って、失敗して、また見ることを繰り返す年月から生まれる、本能的な知。vsike はその刃を研ぐために存在する——作品のために、そしてその背後にいるクリエイターのために。',
    'manifesto.p4': '私たちは、最高の仕事は三つが交差するときに生まれると信じている。目指すべき明確なビジョン、それを実現するスタイル、そして到達したときに知ることができる直感。',
    'pillar.v': 'ビジョン', 'pillar.s': 'スタイル', 'pillar.i': '直感',
    'path.label': '歩み',
    'about.cta.text': '私たちが作ったものをご覧になりますか？',
    'about.cta1': '作品を見る  →', 'about.cta2': 'お問い合わせ',

    'work.eyebrow': '厳選作品',
    'work.title': '私たちが<br>作ったもの。',
    'work.sub': 'インターフェース、システム、実験——意図を持って作られたデジタル作品のコレクション。',
    'work.section.label': 'プロジェクト', 'work.section.count': '06 件',
    'work.cta1': 'プロジェクトを始める  →', 'work.cta2.label': '新規案件受付中',

    'ideas.eyebrow': 'アイデア',
    'ideas.title': '声に出して<br>考える。',
    'ideas.sub': 'AIセキュリティ、デザイン、そしてその交差点に関するノート。LLMの脆弱性、ゼロデイ攻撃、長続きするものの作り方について。',
    'ideas.section.label': 'すべての投稿', 'ideas.section.count': '57 件',
    'ideas.loop.label': '最新情報を受け取る',
    'ideas.loop.title': '準備できたら新しいアイデアをお届けします。',
    'ideas.loop.cta': '通知を受け取る  →',

    'contact.eyebrow': 'お問い合わせ',
    'contact.title': '何か作り<br>ましょう。',
    'contact.sub': '新しいプロジェクト、コラボレーション、鋭いアイデア——すべて歓迎します。',
    'contact.direct': '直接連絡', 'contact.elsewhere': 'SNS',
    'contact.available': '新規プロジェクト受付中 — 2025',
    'contact.based': '拠点', 'contact.form.title': 'メッセージを送る',
    'contact.form.name': 'お名前', 'contact.form.email': 'メールアドレス',
    'contact.form.subject': '件名', 'contact.form.message': 'メッセージ',
    'contact.form.submit': '送信する  →', 'contact.form.sent': '送信しました →',
    'contact.placeholder.name': 'お名前',
    'contact.placeholder.subject': '件名は何ですか？',
    'contact.placeholder.message': 'プロジェクト、アイデア、またはご挨拶をお聞かせください。',
    'contact.quote': '「最高のコラボレーションは、本物の問題を持つ人と、それを本当に解決したい人との出会いから始まる。」',
    'contact.link.site.label': 'このサイトについて',
    'contact.link.site': 'スタック、デザインの決断、コロフォン  →',
    'contact.link.careers.label': 'チームに参加',
    'contact.link.careers': 'オープンポジションを見る  →',
    'nav.site': 'このサイト',
    'nav.careers': '採用',
    'article.back': '← アイデア一覧',
  }
};

/* Merge article-specific translations when present (inline script on detail pages) */
if (window.ARTICLE_TRANS) {
  ['en', 'zh', 'ja'].forEach(lang => {
    if (LANG[lang] && window.ARTICLE_TRANS[lang]) {
      Object.assign(LANG[lang], window.ARTICLE_TRANS[lang]);
    }
  });
}

/* ─── Apply Language ─────────────────────────────────────────────── */
function applyLang(lang) {
  if (!LANG[lang]) return;
  const t = LANG[lang];

  document.documentElement.lang = lang;
  localStorage.setItem('vsike-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = t[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const v = t[el.dataset.i18nPlaceholder];
    if (v !== undefined) el.placeholder = v;
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
    btn.setAttribute('aria-pressed', btn.dataset.lang === lang ? 'true' : 'false');
  });
}

/* Language switcher clicks */
document.addEventListener('click', e => {
  const btn = e.target.closest('.lang-btn');
  if (btn && btn.dataset.lang) applyLang(btn.dataset.lang);
});

/* Init on page load */
const initLang = localStorage.getItem('vsike-lang') || 'en';
applyLang(initLang);

/* ─── Navigation Scroll State ────────────────────────────────────── */
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  update();
  window.addEventListener('scroll', update, { passive: true });
})();

/* ─── Mobile Nav ─────────────────────────────────────────────────── */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const mobile = document.querySelector('.nav-mobile');
  if (!toggle || !mobile) return;

  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    mobile.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });

  mobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle.classList.remove('open');
      mobile.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
})();

/* ─── Active Nav Link ─────────────────────────────────────────────── */
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();

/* ─── Page Transition ─────────────────────────────────────────────── */
(function () {
  const curtain = document.querySelector('.page-transition');
  if (!curtain) return;

  curtain.classList.add('entering');
  curtain.addEventListener('animationend', () => {
    curtain.classList.remove('entering');
    curtain.style.transform = 'translateY(-100%)';
    triggerAboveFold();
  }, { once: true });

  document.addEventListener('click', e => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http')) return;
    e.preventDefault();
    curtain.style.transform = '';
    curtain.classList.add('leaving');
    curtain.addEventListener('animationend', () => { window.location = href; }, { once: true });
  });
})();

/* ─── Scroll Reveal ───────────────────────────────────────────────── */
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => observer.observe(el));
})();

function triggerAboveFold() {
  document.querySelectorAll('.hero .reveal, .page-hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 140);
  });
}

/* ─── Contact Form ────────────────────────────────────────────────── */
(function () {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type=submit]');
    if (!btn) return;
    const original = btn.innerHTML;
    const lang = localStorage.getItem('vsike-lang') || 'en';
    btn.innerHTML = LANG[lang]['contact.form.sent'] || 'Sent →';
    btn.disabled = true;
    setTimeout(() => { btn.innerHTML = original; btn.disabled = false; }, 3000);
  });
})();
