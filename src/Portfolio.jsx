import { useState, useEffect, useRef } from "react";

const t = {
  en: {
    nav: { solutions: "Solutions", work: "Work", process: "Process", contact: "Contact" },
    hero: {
      badge: "Available for new projects",
      pre: "I build digital systems that",
      title: "Automate your business\nwhile you sleep",
      sub: "Telegram bots that sell for you. AI agents that make decisions. Analytics dashboards that show what's really happening. I turn manual chaos into automated systems that actually work.",
      cta: "Let's talk in Telegram",
      trust: "6+ years building production systems",
      trustClients: "20+ projects delivered"
    },
    solutions: {
      label: "What I build",
      title: "Solutions that pay for themselves",
      items: [
        {
          iconId: "sales",
          name: "Sales & Marketing Automation",
          desc: "Telegram bots that qualify leads, answer questions, and close deals 24/7. Auto-funnels that nurture prospects while you focus on strategy.",
          points: ["Bots that sell without a manager", "Lead collection & qualification", "Auto-funnels & drip sequences", "CRM integrations"]
        },
        {
          iconId: "ai",
          name: "Smart Assistants & AI Agents",
          desc: "Bots that behave like real people — they understand context, make decisions, and handle complex conversations. Not another FAQ chatbot.",
          points: ["Human-like conversation bots", "AI agents with autonomous decisions", "Customer support automation", "Data collection through dialogue"]
        },
        {
          iconId: "content",
          name: "AI Content Production",
          desc: "Product photos without a studio. Ad videos without a production team. Blog posts and social media on autopilot. AI generates, edits, and publishes — your brand voice, your style, zero manual work.",
          points: ["AI photo & video generation", "Blog posts & social media on schedule", "Ad creatives & banners", "Consistent brand voice across channels"]
        },
        {
          iconId: "analytics",
          name: "Analytics & Business Intelligence",
          desc: "Stop guessing. Get dashboards that show real numbers — revenue, team performance, ad spend ROI. Updated automatically, every day.",
          points: ["Real-time dashboards", "Automated daily/weekly reports", "Migration from spreadsheets", "Data-driven decision making"]
        }
      ]
    },
    cases: {
      label: "Results",
      title: "Projects that moved the needle",
      items: [
        {
          tag: "Sales Automation",
          name: "Telegram bot replaced 3 sales managers",
          problem: "A marketing agency was spending 40+ hours per week on repetitive client inquiries. Managers were copy-pasting the same answers, qualifying leads manually, and losing prospects who messaged after hours.",
          solution: "Built an intelligent Telegram bot that qualifies leads through a conversational flow, collects project details, assigns price ranges, and books calls — all without human intervention.",
          metrics: [
            { value: "40+", unit: "hrs/week saved" },
            { value: "24/7", unit: "lead processing" },
            { value: "3x", unit: "faster response" }
          ]
        },
        {
          tag: "Business Intelligence",
          name: "From 60 spreadsheets to one dashboard",
          problem: "A 130-person company was running on 60+ Google Sheets. Reports took hours to compile, data was scattered, and nobody trusted the numbers.",
          solution: "Migrated everything to a unified database with automated dashboards. Real-time analytics for sales, operations, and management — updated automatically every day.",
          metrics: [
            { value: "60+", unit: "spreadsheets eliminated" },
            { value: "130", unit: "employees onboarded" },
            { value: "15K+", unit: "daily transactions" }
          ]
        },
        {
          tag: "AI Document Processing",
          name: "AI that reads 1000s of scanned docs so accountants don't have to",
          problem: "A tax outsourcing firm was drowning in paper. Clients sent over 10,000 hand-scanned files containing around 40,000 documents in different formats — invoices, contracts, receipts, all at different angles and quality levels. Staff spent hours manually extracting data and cross-referencing it with their electronic document management system and tax registries.",
          solution: "Built an AI-powered document processing pipeline: bulk upload of scanned files, contextual analysis identifies and separates documents within each scan, extracts key fields (amounts, dates, counterparties, tax IDs), then auto-matches each document against the EDM system and regulatory registries. What took a team months now runs in hours.",
          metrics: [
            { value: "10K", unit: "scans processed" },
            { value: "40K", unit: "documents extracted" },
            { value: "95%+", unit: "auto-match rate" }
          ]
        }
      ]
    },
    process: {
      label: "How it works",
      title: "Simple process, no surprises",
      steps: [
        { num: "01", name: "We talk", desc: "You tell me what's not working. I ask questions, dig into the real problem, and figure out if I can help. No sales pitch — just an honest conversation." },
        { num: "02", name: "I build", desc: "I design the solution and build it. You get weekly updates, a shared task board, and direct access to me — the person writing the code. No middlemen." },
        { num: "03", name: "You grow", desc: "The system goes live. I make sure everything works, train your team if needed, and stick around for support. You see real results — or we fix it together." }
      ]
    },
    testimonials: {
      label: "What clients say",
      items: [
        { text: "Egor built us a system that completely changed how we operate. What used to take our team half a day now happens automatically every morning.", name: "Alex K.", role: "CEO, Marketing Agency" },
        { text: "I was skeptical about automation, but the Telegram bot he built generates more qualified leads than our sales team did manually. And it works on weekends.", name: "Maria S.", role: "Founder, EdTech Startup" },
        { text: "The analytics dashboard alone was worth every penny. For the first time, I actually understand where our money goes and which channels perform.", name: "Dmitry V.", role: "COO, E-commerce" }
      ]
    },
    about: {
      title: "Who's behind this",
      text: "I'm Egor — a developer who's spent 6+ years building systems that businesses actually rely on. Not just writing code, but solving problems: automating what wastes your time, making sense of your data, and building tools that your team will actually use.",
      text2: "I personally work on every project. For larger tasks, I bring in trusted specialists — design, frontend, QA — so you get a complete solution without agency overhead or communication gaps.",
      stat1v: "6+", stat1l: "years in production",
      stat2v: "20+", stat2l: "projects delivered",
      stat3v: "15K+", stat3l: "daily transactions handled"
    },
    contact: {
      label: "Start a project",
      title: "Got an idea?\nLet's make it work.",
      sub: "Tell me what's not working in your business. I'll tell you honestly if I can help — and how.",
      cta: "Message me in Telegram",
      or: "or drop a quick note",
      namePh: "Your name",
      msgPh: "What's the challenge? A few sentences is enough.",
      send: "Send"
    },
    footer: { copy: "© 2026 Monroe Tech", built: "built with purpose" }
  },
  ru: {
    nav: { solutions: "Решения", work: "Кейсы", process: "Процесс", contact: "Контакт" },
    hero: {
      badge: "Открыт для новых проектов",
      pre: "Я строю цифровые системы, которые",
      title: "Автоматизируют ваш бизнес\nпока вы спите",
      sub: "Telegram-боты, которые продают за вас. AI-агенты, которые принимают решения. Дашборды, которые показывают, что реально происходит. Я превращаю ручной хаос в автоматизированные системы, которые работают.",
      cta: "Написать в Telegram",
      trust: "6+ лет в продакшене",
      trustClients: "20+ проектов сдано"
    },
    solutions: {
      label: "Что я строю",
      title: "Решения, которые окупают себя",
      items: [
        {
          iconId: "sales",
          name: "Автоматизация продаж",
          desc: "Telegram-боты, которые квалифицируют лидов, отвечают на вопросы и закрывают сделки 24/7. Автоворонки, которые прогревают клиентов, пока вы занимаетесь стратегией.",
          points: ["Боты, которые продают без менеджера", "Сбор и квалификация лидов", "Автоворонки и цепочки сообщений", "Интеграции с CRM"]
        },
        {
          iconId: "ai",
          name: "Умные ассистенты и AI-агенты",
          desc: "Боты, которые ведут себя как живые люди — понимают контекст, принимают решения, ведут сложные диалоги. Не очередной FAQ-чатбот.",
          points: ["Боты с человеческим поведением", "AI-агенты с автономными решениями", "Автоматизация поддержки", "Сбор данных через диалог"]
        },
        {
          iconId: "content",
          name: "AI-контент: фото, видео, тексты",
          desc: "Продуктовые фото без студии. Рекламные видео без продакшн-команды. Блоги и соцсети на автопилоте. AI генерирует, редактирует и публикует — ваш стиль, ваш голос бренда, ноль ручной работы.",
          points: ["AI-генерация фото и видео", "Посты и статьи по расписанию", "Рекламные креативы и баннеры", "Единый голос бренда на всех площадках"]
        },
        {
          iconId: "analytics",
          name: "Аналитика и бизнес-разведка",
          desc: "Хватит гадать. Получите дашборды с реальными цифрами — выручка, эффективность команды, ROI рекламы. Обновляются автоматически, каждый день.",
          points: ["Дашборды в реальном времени", "Автоотчёты — день/неделя/месяц", "Миграция с Google Sheets", "Решения на основе данных"]
        }
      ]
    },
    cases: {
      label: "Результаты",
      title: "Проекты, которые сдвинули дело",
      items: [
        {
          tag: "Автоматизация продаж",
          name: "Telegram-бот заменил 3 менеджеров",
          problem: "Маркетинговое агентство тратило 40+ часов в неделю на однотипные вопросы клиентов. Менеджеры копипастили одинаковые ответы, квалифицировали лидов вручную и теряли тех, кто писал в нерабочее время.",
          solution: "Собрал умного Telegram-бота, который квалифицирует лидов через диалог, собирает детали проекта, оценивает бюджет и записывает на звонок — без участия человека.",
          metrics: [
            { value: "40+", unit: "ч/нед сэкономлено" },
            { value: "24/7", unit: "обработка лидов" },
            { value: "3x", unit: "быстрее ответ" }
          ]
        },
        {
          tag: "Бизнес-аналитика",
          name: "От 60 таблиц к одному дашборду",
          problem: "Компания на 130 человек жила на 60+ Google Sheets. Отчёты собирались часами, данные были разбросаны, и никто не верил цифрам.",
          solution: "Мигрировал всё в единую базу с автоматическими дашбордами. Аналитика продаж, операций и управления в реальном времени — обновляется автоматически каждый день.",
          metrics: [
            { value: "60+", unit: "таблиц ликвидировано" },
            { value: "130", unit: "сотрудников" },
            { value: "15K+", unit: "транзакций/день" }
          ]
        },
        {
          tag: "AI-обработка документов",
          name: "AI читает тысячи сканов вместо бухгалтеров",
          problem: "Компания по налоговому аутсорсингу тонула в бумаге. Клиенты прислали более 10 000 отсканированных вручную файлов, внутри которых — около 40 000 документов разных форматов: счета, договоры, акты, всё под разными углами и в разном качестве. Сотрудники часами извлекали данные вручную и сверяли с системой ЭДО и реестрами.",
          solution: "Собрал AI-пайплайн обработки документов: массовая загрузка сканов, контекстный анализ определяет и разделяет документы внутри каждого скана, извлекает ключевые поля (суммы, даты, контрагенты, ИНН), затем автоматически сопоставляет каждый документ с ЭДО и регуляторными реестрами. То, на что у команды уходили месяцы, теперь занимает часы.",
          metrics: [
            { value: "10K", unit: "сканов обработано" },
            { value: "40K", unit: "документов извлечено" },
            { value: "95%+", unit: "авто-сопоставление" }
          ]
        }
      ]
    },
    process: {
      label: "Как это работает",
      title: "Простой процесс, без сюрпризов",
      steps: [
        { num: "01", name: "Разговариваем", desc: "Вы рассказываете, что не работает. Я задаю вопросы, докапываюсь до реальной проблемы и честно говорю, могу ли помочь. Никаких продаж — просто разговор." },
        { num: "02", name: "Строю", desc: "Проектирую решение и собираю его. Вы получаете еженедельные апдейты, общую доску задач и прямой доступ ко мне — человеку, который пишет код. Без посредников." },
        { num: "03", name: "Вы растёте", desc: "Система запускается. Я убеждаюсь, что всё работает, обучаю команду если нужно и остаюсь на поддержке. Вы видите реальные результаты — или мы чиним вместе." }
      ]
    },
    testimonials: {
      label: "Что говорят клиенты",
      items: [
        { text: "Егор построил нам систему, которая полностью изменила то, как мы работаем. То, на что у команды уходило полдня, теперь происходит автоматически каждое утро.", name: "Алексей К.", role: "CEO, маркетинговое агентство" },
        { text: "Я скептически относился к автоматизации, но Telegram-бот, который он собрал, генерирует больше квалифицированных лидов, чем наш отдел продаж вручную. И работает по выходным.", name: "Мария С.", role: "Основатель, EdTech стартап" },
        { text: "Один только дашборд аналитики окупил всё. Впервые я реально понимаю, куда уходят деньги и какие каналы работают.", name: "Дмитрий В.", role: "COO, e-commerce" }
      ]
    },
    about: {
      title: "Кто за этим стоит",
      text: "Я Егор — разработчик с 6+ годами опыта в системах, на которые бизнес реально полагается. Не просто пишу код, а решаю задачи: автоматизирую то, что отнимает ваше время, навожу порядок в данных и строю инструменты, которыми ваша команда реально будет пользоваться.",
      text2: "Я лично работаю над каждым проектом. Для масштабных задач привлекаю проверенных специалистов — дизайн, фронтенд, QA — чтобы вы получили полное решение без агентских наценок и проблем с коммуникацией.",
      stat1v: "6+", stat1l: "лет в продакшене",
      stat2v: "20+", stat2l: "проектов сдано",
      stat3v: "15K+", stat3l: "транзакций в день"
    },
    contact: {
      label: "Начать проект",
      title: "Есть идея?\nДавайте реализуем.",
      sub: "Расскажите, что не работает в вашем бизнесе. Я честно скажу, могу ли помочь — и как.",
      cta: "Написать в Telegram",
      or: "или оставьте короткое сообщение",
      namePh: "Ваше имя",
      msgPh: "В чём задача? Пары предложений достаточно.",
      send: "Отправить"
    },
    footer: { copy: "© 2026 Monroe Tech", built: "built with purpose" }
  }
};

const useInView = (threshold = 0.12) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
};

const Reveal = ({ children, delay = 0, className = "" }) => {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
};

const SolutionIcon = ({ id, color }) => {
  const icons = {
    sales: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>,
    ai: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect x="2" y="2" width="20" height="8" rx="2"/><path d="M2 14h20"/><rect x="2" y="14" width="20" height="8" rx="2"/><path d="M6 6h.01M6 18h.01"/></svg>,
    analytics: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 5 5-9"/></svg>,
    content: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="18" rx="2"/><path d="M10 9l5 3-5 3V9z"/></svg>,
  };
  return <div style={{ width:40, height:40, borderRadius:12, display:"flex", alignItems:"center", justifyContent:"center", background:`${color}14` }}>{icons[id]}</div>;
};

export default function Portfolio() {
  const [lang, setLang] = useState(() => {
    const bl = navigator.language || navigator.userLanguage || "";
    return bl.startsWith("ru") ? "ru" : "en";
  });
  const [dark, setDark] = useState(() => {
    return !window.matchMedia?.("(prefers-color-scheme: light)").matches;
  });
  const [menu, setMenu] = useState(false);
  const [activeCase, setActiveCase] = useState(0);
  const c = t[lang];

  const th = dark ? {
    bg: "#08080a", bg2: "#111114", bg3: "#18181c",
    card: "#131316", cardHover: "#1a1a1f",
    text: "#f0f0f2", text2: "#a0a0ab", text3: "#65656f",
    accent: "#6366f1", accentSoft: "rgba(99,102,241,0.12)", accentText: "#818cf8",
    green: "#22c55e",
    border: "#1f1f24", borderLight: "#2a2a30",
    gradient: "linear-gradient(135deg, #6366f1, #a855f7)",
    gradientText: "linear-gradient(135deg, #818cf8, #c084fc)",
    glass: "rgba(8,8,10,0.85)",
  } : {
    bg: "#fafafa", bg2: "#f0f0f2", bg3: "#e8e8ec",
    card: "#ffffff", cardHover: "#f8f8fa",
    text: "#111114", text2: "#555560", text3: "#888892",
    accent: "#4f46e5", accentSoft: "rgba(79,70,229,0.08)", accentText: "#4f46e5",
    green: "#16a34a",
    border: "#e4e4e8", borderLight: "#d4d4d8",
    gradient: "linear-gradient(135deg, #4f46e5, #9333ea)",
    gradientText: "linear-gradient(135deg, #4f46e5, #7c3aed)",
    glass: "rgba(250,250,250,0.88)",
  };

  const scrollTo = (id) => { setMenu(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div style={{ background: th.bg, color: th.text, minHeight: "100vh", fontFamily: "'DM Sans', system-ui, sans-serif", transition: "background 0.4s, color 0.4s" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />

      <style>{`
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        html { scroll-behavior:smooth; }
        ::selection { background:${th.accent}33; }
        @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:.4;} }
        .gradient-text { background:${th.gradientText}; -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; color:transparent; }

        .wrap { max-width:1080px; margin:0 auto; padding:0 24px; }
        .nav-link { cursor:pointer; padding:6px 0; color:${th.text2}; transition:color .2s; font-size:14px; font-weight:500; background:none; border:none; font-family:inherit; }
        .nav-link:hover { color:${th.text}; }
        .pill { display:inline-flex; align-items:center; gap:8px; background:${th.accentSoft}; border-radius:100px; padding:6px 16px 6px 12px; font-size:12px; font-weight:600; color:${th.accentText}; letter-spacing:0.03em; }
        .toggle { background:${th.bg2}; border:1px solid ${th.border}; border-radius:10px; padding:7px 12px; cursor:pointer; color:${th.text2}; font-size:13px; font-weight:500; transition:all .2s; font-family:inherit; }
        .toggle:hover { border-color:${th.borderLight}; color:${th.text}; }
        .card { background:${th.card}; border:1px solid ${th.border}; border-radius:20px; transition:all .35s cubic-bezier(.16,1,.3,1); }
        .card:hover { border-color:${th.accent}22; box-shadow:0 8px 32px ${th.accent}08; }
        .sol-card { padding:32px; cursor:default; height:100%; }
        .sol-card:hover { transform:translateY(-3px); }
        .case-tab { padding:10px 20px; border-radius:12px; border:1px solid ${th.border}; background:${th.bg2}; color:${th.text2}; font-size:13px; font-weight:600; cursor:pointer; transition:all .25s; font-family:inherit; white-space:nowrap; }
        .case-tab[data-active="true"] { background:${th.accentSoft}; border-color:${th.accent}44; color:${th.accentText}; }
        .metric-box { background:${th.bg2}; border:1px solid ${th.border}; border-radius:16px; padding:20px; text-align:center; min-width:140px; flex:1; }
        .metric-val { font-size:28px; font-weight:800; letter-spacing:-0.04em; background:${th.gradientText}; -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .metric-label { font-size:12px; color:${th.text3}; margin-top:4px; font-weight:500; }
        .step-num { font-size:48px; font-weight:800; letter-spacing:-0.05em; background:${th.gradientText}; -webkit-background-clip:text; -webkit-text-fill-color:transparent; opacity:0.3; line-height:1; margin-bottom:12px; }
        .testimonial-card { background:${th.card}; border:1px solid ${th.border}; border-radius:20px; padding:32px; }
        .stat-val { font-size:36px; font-weight:800; letter-spacing:-0.04em; background:${th.gradientText}; -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
        .stat-label { font-size:13px; color:${th.text3}; margin-top:4px; }
        .tg-btn { display:inline-flex; align-items:center; gap:10px; background:${th.gradient}; color:#fff; border:none; border-radius:14px; padding:16px 28px; font-size:16px; font-weight:600; cursor:pointer; font-family:inherit; transition:all .3s; text-decoration:none; }
        .tg-btn:hover { transform:translateY(-2px); box-shadow:0 8px 32px ${th.accent}33; }
        .tg-btn svg { width:20px; height:20px; }
        .tg-float { position:fixed; bottom:24px; right:24px; z-index:90; width:56px; height:56px; border-radius:16px; background:${th.gradient}; display:flex; align-items:center; justify-content:center; cursor:pointer; box-shadow:0 4px 20px ${th.accent}44; transition:transform .2s; text-decoration:none; }
        .tg-float:hover { transform:scale(1.08); }
        .tg-float svg { width:24px; height:24px; fill:#fff; }
        .input { background:${th.bg2}; border:1px solid ${th.border}; border-radius:14px; padding:14px 18px; color:${th.text}; font-size:15px; font-family:inherit; width:100%; outline:none; transition:border-color .25s; }
        .input:focus { border-color:${th.accent}; }
        .input::placeholder { color:${th.text3}; }
        .send-btn { background:${th.bg3}; border:1px solid ${th.border}; border-radius:14px; padding:14px 28px; color:${th.text}; font-size:15px; font-weight:600; cursor:pointer; font-family:inherit; transition:all .25s; }
        .send-btn:hover { border-color:${th.accent}; color:${th.accentText}; }
        .section-label { font-size:12px; font-weight:700; color:${th.accentText}; text-transform:uppercase; letter-spacing:0.12em; margin-bottom:8px; }
        .section-title { font-size:clamp(26px,5vw,40px); font-weight:800; letter-spacing:-0.035em; line-height:1.15; }

        .burger { display:none; background:none; border:none; cursor:pointer; padding:8px; flex-direction:column; gap:5px; }
        .burger span { display:block; width:20px; height:2px; background:${th.text}; border-radius:2px; }
        .mob-menu { position:fixed; inset:0; background:${th.glass}; backdrop-filter:blur(24px); z-index:99; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:28px; }
        .mob-menu button { background:none; border:none; color:${th.text}; font-size:22px; font-weight:600; cursor:pointer; font-family:inherit; }

        @media (max-width:768px) {
          .burger { display:flex; }
          .desk-nav { display:none !important; }
          .solutions-grid { grid-template-columns:1fr !important; }
          .metrics-row { flex-direction:column !important; }
          .steps-grid { grid-template-columns:1fr !important; }
          .testimonials-grid { grid-template-columns:1fr !important; }
          .stats-row { flex-direction:column !important; gap:24px !important; }
          .case-tabs { overflow-x:auto; -webkit-overflow-scrolling:touch; }
        }
      `}</style>

      {/* nav */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, background:th.glass, backdropFilter:"blur(16px)", borderBottom:`1px solid ${th.border}` }}>
        <div className="wrap" style={{ height:60, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ fontWeight:800, fontSize:18, letterSpacing:"-0.04em", cursor:"pointer" }} onClick={() => window.scrollTo({ top:0, behavior:"smooth" })}>
            <span className="gradient-text">Monroe Tech</span>
          </div>
          <div className="desk-nav" style={{ display:"flex", alignItems:"center", gap:24 }}>
            {Object.entries(c.nav).map(([k,v]) => <button key={k} className="nav-link" onClick={() => scrollTo(k)}>{v}</button>)}
            <div style={{ width:1, height:16, background:th.border }} />
            <button className="toggle" onClick={() => setLang(lang === "en" ? "ru" : "en")}>{lang === "en" ? "RU" : "EN"}</button>
            <button className="toggle" onClick={() => setDark(!dark)}>{dark ? "Light" : "Dark"}</button>
          </div>
          <button className="burger" onClick={() => setMenu(!menu)}><span /><span /><span /></button>
        </div>
      </nav>

      {menu && (
        <div className="mob-menu">
          <button style={{ position:"absolute", top:16, right:20, fontSize:28, fontWeight:400 }} onClick={() => setMenu(false)}>×</button>
          {Object.entries(c.nav).map(([k,v]) => <button key={k} onClick={() => scrollTo(k)}>{v}</button>)}
          <div style={{ display:"flex", gap:10, marginTop:12 }}>
            <button className="toggle" onClick={() => setLang(lang === "en" ? "ru" : "en")}>{lang === "en" ? "RU" : "EN"}</button>
            <button className="toggle" onClick={() => setDark(!dark)}>{dark ? "Light" : "Dark"}</button>
          </div>
        </div>
      )}

      {/* hero */}
      <header style={{ padding:"130px 0 80px" }}>
        <div className="wrap" style={{ maxWidth:780 }}>
          <Reveal>
            <div className="pill" style={{ marginBottom:28 }}>
              <span style={{ width:7, height:7, borderRadius:"50%", background:th.green, animation:"pulse 2s infinite" }} />
              {c.hero.badge}
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <p style={{ fontSize:15, color:th.text2, marginBottom:8, fontWeight:500 }}>{c.hero.pre}</p>
            <h1 style={{ fontSize:"clamp(36px,7vw,60px)", fontWeight:800, lineHeight:1.08, letterSpacing:"-0.045em", whiteSpace:"pre-line", marginBottom:24 }}>
              {c.hero.title}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize:17, lineHeight:1.7, color:th.text2, maxWidth:580, marginBottom:36 }}>{c.hero.sub}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <a href="https://t.me/topmonroe9" className="tg-btn" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
              {c.hero.cta}
            </a>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ display:"flex", gap:24, marginTop:28, flexWrap:"wrap" }}>
              <span style={{ fontSize:13, color:th.text3, fontFamily:"'JetBrains Mono',monospace" }}>→ {c.hero.trust}</span>
              <span style={{ fontSize:13, color:th.text3, fontFamily:"'JetBrains Mono',monospace" }}>→ {c.hero.trustClients}</span>
            </div>
          </Reveal>
        </div>
      </header>

      {/* solutions */}
      <section id="solutions" style={{ padding:"80px 0" }}>
        <div className="wrap">
          <Reveal><p className="section-label">{c.solutions.label}</p></Reveal>
          <Reveal delay={0.05}><h2 className="section-title">{c.solutions.title}</h2></Reveal>
          <div className="solutions-grid" style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:16, marginTop:40 }}>
            {c.solutions.items.map((s,i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="card sol-card">
                  <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:14 }}>
                    <SolutionIcon id={s.iconId} color={th.accentText} />
                    <h3 style={{ fontSize:17, fontWeight:700, letterSpacing:"-0.02em" }}>{s.name}</h3>
                  </div>
                  <p style={{ fontSize:14, lineHeight:1.7, color:th.text2, marginBottom:16 }}>{s.desc}</p>
                  <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                    {s.points.map((p,j) => (
                      <span key={j} style={{ fontSize:13, color:th.text3, paddingLeft:14, position:"relative" }}>
                        <span style={{ position:"absolute", left:0, color:th.accentText }}>›</span>{p}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* cases */}
      <section id="work" style={{ padding:"80px 0" }}>
        <div className="wrap">
          <Reveal><p className="section-label">{c.cases.label}</p></Reveal>
          <Reveal delay={0.05}><h2 className="section-title" style={{ marginBottom:32 }}>{c.cases.title}</h2></Reveal>
          <Reveal delay={0.1}>
            <div className="case-tabs" style={{ display:"flex", gap:8, marginBottom:32 }}>
              {c.cases.items.map((cs,i) => (
                <button key={i} className="case-tab" data-active={activeCase === i} onClick={() => setActiveCase(i)}>{cs.tag}</button>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            {(() => {
              const cs = c.cases.items[activeCase];
              return (
                <div className="card" style={{ padding:"40px 36px", borderRadius:24 }}>
                  <h3 style={{ fontSize:22, fontWeight:800, marginBottom:20, letterSpacing:"-0.03em", lineHeight:1.3 }}>{cs.name}</h3>
                  <div style={{ display:"grid", gap:20, marginBottom:28 }}>
                    <div>
                      <p style={{ fontSize:12, fontWeight:700, color:th.text3, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:8 }}>
                        {lang === "en" ? "The problem" : "Проблема"}
                      </p>
                      <p style={{ fontSize:15, lineHeight:1.7, color:th.text2 }}>{cs.problem}</p>
                    </div>
                    <div>
                      <p style={{ fontSize:12, fontWeight:700, color:th.text3, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:8 }}>
                        {lang === "en" ? "What I built" : "Что я построил"}
                      </p>
                      <p style={{ fontSize:15, lineHeight:1.7, color:th.text2 }}>{cs.solution}</p>
                    </div>
                  </div>
                  <div className="metrics-row" style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                    {cs.metrics.map((m,i) => (
                      <div key={i} className="metric-box">
                        <div className="metric-val">{m.value}</div>
                        <div className="metric-label">{m.unit}</div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </Reveal>
        </div>
      </section>

      {/* process */}
      <section id="process" style={{ padding:"80px 0" }}>
        <div className="wrap">
          <Reveal><p className="section-label">{c.process.label}</p></Reveal>
          <Reveal delay={0.05}><h2 className="section-title" style={{ marginBottom:40 }}>{c.process.title}</h2></Reveal>
          <div className="steps-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
            {c.process.steps.map((s,i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="card" style={{ padding:32 }}>
                  <div className="step-num">{s.num}</div>
                  <h3 style={{ fontSize:18, fontWeight:700, marginBottom:10, letterSpacing:"-0.02em" }}>{s.name}</h3>
                  <p style={{ fontSize:14, lineHeight:1.7, color:th.text2 }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* testimonials */}
      <section style={{ padding:"80px 0" }}>
        <div className="wrap">
          <Reveal><p className="section-label">{c.testimonials.label}</p></Reveal>
          <div className="testimonials-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16, marginTop:28 }}>
            {c.testimonials.items.map((tm,i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="testimonial-card">
                  <div style={{ fontSize:32, color:th.accent, opacity:0.3, marginBottom:12, lineHeight:1 }}>"</div>
                  <p style={{ fontSize:14, lineHeight:1.7, color:th.text2, marginBottom:20 }}>{tm.text}</p>
                  <div>
                    <p style={{ fontSize:14, fontWeight:600 }}>{tm.name}</p>
                    <p style={{ fontSize:12, color:th.text3 }}>{tm.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* about */}
      <section style={{ padding:"80px 0" }}>
        <div className="wrap">
          <Reveal>
            <div className="card" style={{ padding:"48px 40px", borderRadius:24 }}>
              <h2 className="section-title" style={{ marginBottom:20 }}>{c.about.title}</h2>
              <p style={{ fontSize:16, lineHeight:1.75, color:th.text2, maxWidth:620, marginBottom:12 }}>{c.about.text}</p>
              <p style={{ fontSize:16, lineHeight:1.75, color:th.text2, maxWidth:620, marginBottom:36 }}>{c.about.text2}</p>
              <div className="stats-row" style={{ display:"flex", gap:48, flexWrap:"wrap" }}>
                <div style={{ textAlign:"center" }}><div className="stat-val">{c.about.stat1v}</div><div className="stat-label">{c.about.stat1l}</div></div>
                <div style={{ textAlign:"center" }}><div className="stat-val">{c.about.stat2v}</div><div className="stat-label">{c.about.stat2l}</div></div>
                <div style={{ textAlign:"center" }}><div className="stat-val">{c.about.stat3v}</div><div className="stat-label">{c.about.stat3l}</div></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* contact */}
      <section id="contact" style={{ padding:"80px 0 120px" }}>
        <div className="wrap">
          <Reveal><p className="section-label">{c.contact.label}</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title" style={{ whiteSpace:"pre-line", marginBottom:12 }}>{c.contact.title}</h2>
            <p style={{ fontSize:16, color:th.text2, lineHeight:1.7, maxWidth:500, marginBottom:32 }}>{c.contact.sub}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <a href="https://t.me/topmonroe9" className="tg-btn" target="_blank" rel="noopener" style={{ marginBottom:32, display:"inline-flex" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width:20, height:20 }}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
              {c.contact.cta}
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <p style={{ fontSize:13, color:th.text3, marginBottom:16 }}>{c.contact.or}</p>
            <div style={{ maxWidth:440, display:"flex", flexDirection:"column", gap:12 }}>
              <input className="input" placeholder={c.contact.namePh} />
              <textarea className="input" placeholder={c.contact.msgPh} rows={3} style={{ resize:"vertical" }} />
              <button className="send-btn" style={{ alignSelf:"flex-start" }}>{c.contact.send}</button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* footer */}
      <footer style={{ borderTop:`1px solid ${th.border}`, padding:20 }}>
        <div className="wrap" style={{ display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
          <span style={{ fontSize:12, color:th.text3 }}>{c.footer.copy}</span>
          <span style={{ fontSize:12, color:th.text3, fontFamily:"'JetBrains Mono',monospace" }}>{c.footer.built}</span>
        </div>
      </footer>

      {/* floating telegram */}
      <a href="https://t.me/topmonroe9" className="tg-float" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
      </a>
    </div>
  );
}
