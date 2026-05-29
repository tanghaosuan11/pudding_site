export const locales = ["en", "zh_CN", "ja", "ko", "pt_BR"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "zh_CN";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  zh_CN: "中文",
  ja: "日本語",
  ko: "한국어",
  pt_BR: "Português (Brasil)",
};

type Dict = {
  seo: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    ogImageAlt: string;
    keywords: string[];
  };
  nav: { home: string; features: string; download: string; changelog: string };
  footer: { privacy: string; terms: string; rights: string };
  common: { installNow: string; viewFeatures: string; featuresTitle: string };
  home: {
    badge: string;
    title: string;
    description: string;
    bullets: string[];
  };
  features: {
    intro: string;
    cards: { title: string; detail: string }[];
  };
  download: {
    intro: string;
    chromeDesc: string;
    edgeDesc: string;
    githubDesc: string;
    versionLabel: string;
    updatedLabel: string;
    requirementsLabel: string;
  };
  interactive: {
    title: string;
    videoPlaceholder: string;
    petHint: string;
    greeting: string;
    translationTitle: string;
    translationSource: string;
    translationResult: string;
    pomodoroIdle: string;
    pomodoroActive: string;
    pomodoroHint: string;
  };
  changelog: {
    changes: string[];
  };
  legal: {
    effectiveDateLabel: string;
    date: string;
    privacyIntro: string;
    termsIntro: string;
  };
};

const dictionaries: Record<Locale, Dict> = {
  zh_CN: {
    seo: {
      title: "Pudding（Puddpet）| Chrome 桌面宠物插件 · 划词翻译 · 番茄钟",
      description:
        "Pudding 官方站：免费 Chrome 桌面宠物扩展，浏览任意网页时可爱宠物陪伴，支持划词翻译、番茄钟与工具箱。从 Chrome 网上应用店一键安装。",
      ogTitle: "Pudding | Chrome 桌面宠物 · 划词翻译插件",
      ogDescription:
        "把桌面宠物带进浏览器：划词翻译、番茄钟、效率工具箱。Puddpet 官方下载与功能介绍。",
      ogImageAlt: "Pudding Chrome 桌面宠物插件预览图",
      keywords: [
        "Chrome 桌面宠物插件",
        "浏览器划词翻译插件",
        "Chrome 宠物扩展",
        "番茄钟浏览器插件",
        "Pudding 插件",
        "Puddpet",
        "AI 宠物助手 Chrome",
      ],
    },
    nav: { home: "首页", features: "功能", download: "下载", changelog: "更新日志" },
    footer: { privacy: "隐私政策", terms: "使用条款", rights: "版权所有" },
    common: { installNow: "立即安装", viewFeatures: "查看功能", featuresTitle: "核心能力" },
    home: {
      badge: "Chrome 宠物插件",
      title: "Pudding：翻译与效率并存的 AI 宠物助手",
      description:
        "把可爱的桌面宠物带进浏览器，在阅读时提供翻译支持，并通过番茄钟和工具箱帮你提升专注力。",
      bullets: [
        "🐾 宠物陪伴：浏览网页时保持轻量互动",
        "🌍 翻译支持：快速处理阅读中的跨语言内容",
        "⏱️ 效率面板：番茄钟与工具箱提升专注力",
      ],
    },
    features: {
      intro: "Pudding 以轻量、可爱、可信为目标，把宠物陪伴与效率工具融合到浏览体验中。",
      cards: [
        { title: "宠物互动", detail: "浏览时有轻量互动反馈，让工作学习更有陪伴感。" },
        { title: "翻译助手", detail: "快速翻译网页文本，降低跨语言阅读成本。" },
        { title: "工具箱", detail: "集合常用小工具，减少频繁切换页面和应用。" },
        { title: "番茄钟", detail: "专注计时与休息节奏管理，提升稳定产出。" },
      ],
    },
    download: {
      intro: "选择浏览器安装。所有下载按钮都会经过可统计的跳转路由。",
      chromeDesc: "推荐，官方首发平台。",
      edgeDesc: "可选，适合 Edge 用户。",
      githubDesc: "手动下载压缩包安装。",
      versionLabel: "版本号",
      updatedLabel: "更新日期",
      requirementsLabel: "系统要求",
    },
    interactive: {
      title: "互动展示区",
      videoPlaceholder: "产品演示视频（占位）",
      petHint: "鼠标移动试试，小宠物会跟随；点击会眨眼打招呼。",
      greeting: "嗨，我在这儿！",
      translationTitle: "气泡翻译动效 Mock",
      translationSource: "Hello! How are you?",
      translationResult: "你好呀，你今天怎么样？",
      pomodoroIdle: "开始番茄钟（Mock）",
      pomodoroActive: "专注中...",
      pomodoroHint: "点击按钮会弹出大只宠物一会儿后自动隐藏。",
    },
    changelog: {
      changes: [
        "发布通用版官网，包含展示与下载链路。",
        "新增来源参数跳转路由，便于后续统计转化。",
        "补齐隐私政策、使用条款与基础 SEO 文件。",
      ],
    },
    legal: {
      effectiveDateLabel: "生效日期",
      date: "2026-05-28",
      privacyIntro: "Pudding 网站仅用于产品展示和下载引导。我们默认不收集可识别个人身份的信息。",
      termsIntro: "访问本网站或下载扩展，即表示你同意相关条款。",
    },
  },
  en: {
    seo: {
      title: "Pudding (Puddpet) | Desktop Pet Chrome Extension – Translate & Pomodoro",
      description:
        "Official site for Pudding, a free Chrome extension: a desktop pet on every page, selection translation, Pomodoro timer and toolbox. Install from the Chrome Web Store.",
      ogTitle: "Pudding | Desktop Pet for Chrome – Translation Extension",
      ogDescription:
        "Cute desktop pet while you browse, plus selection translate, Pomodoro and mini tools. Official Puddpet download.",
      ogImageAlt: "Pudding desktop pet Chrome extension preview",
      keywords: [
        "desktop pet chrome extension",
        "selection translation chrome extension",
        "chrome pet extension",
        "pomodoro browser extension",
        "pudding chrome extension",
        "puddpet extension",
        "AI pet assistant chrome",
      ],
    },
    nav: { home: "Home", features: "Features", download: "Download", changelog: "Changelog" },
    footer: { privacy: "Privacy", terms: "Terms", rights: "All rights reserved" },
    common: { installNow: "Install now", viewFeatures: "View features", featuresTitle: "Core features" },
    home: {
      badge: "Chrome Pet Extension",
      title: "Pudding: AI pet companion for translation and productivity",
      description:
        "Bring a cute desktop pet into your browser, get quick translation support, and stay focused with pomodoro and mini tools.",
      bullets: [
        "🐾 Pet companion: light interactions while browsing",
        "🌍 Translation support: handle cross-language content quickly",
        "⏱️ Productivity panel: pomodoro and toolbox for focused work",
      ],
    },
    features: {
      intro:
        "Pudding is designed to be light, cute, and reliable, blending pet companionship with productivity tools.",
      cards: [
        { title: "Pet Interaction", detail: "Light playful feedback while you browse and work." },
        { title: "Translation Assistant", detail: "Translate selected web content quickly and smoothly." },
        { title: "Toolbox", detail: "Useful mini tools in one place to reduce context switching." },
        { title: "Pomodoro Timer", detail: "Keep a stable focus rhythm with work and break cycles." },
      ],
    },
    download: {
      intro: "Choose your browser. Every download button goes through a trackable redirect route.",
      chromeDesc: "Recommended and primary release channel.",
      edgeDesc: "Optional for Microsoft Edge users.",
      githubDesc: "Download package manually from releases.",
      versionLabel: "Version",
      updatedLabel: "Updated",
      requirementsLabel: "Requirements",
    },
    interactive: {
      title: "Interactive Showcase",
      videoPlaceholder: "Product demo video placeholder",
      petHint: "Move your mouse: pet follows. Click pet to blink and greet.",
      greeting: "Hi there!",
      translationTitle: "Translation Bubble Mock",
      translationSource: "Hello! How are you?",
      translationResult: "Hi! Nice to meet you.",
      pomodoroIdle: "Start Pomodoro (Mock)",
      pomodoroActive: "Focusing...",
      pomodoroHint: "Click to pop a bigger pet for a short moment.",
    },
    changelog: {
      changes: [
        "Published the general website with showcase and download flow.",
        "Added source-aware redirect route for conversion tracking.",
        "Added privacy, terms, and baseline SEO files.",
      ],
    },
    legal: {
      effectiveDateLabel: "Effective date",
      date: "2026-05-28",
      privacyIntro: "Pudding website is for product showcase and download guidance only. We do not collect personally identifiable information by default.",
      termsIntro: "By accessing this website or downloading the extension, you agree to these terms.",
    },
  },
  ja: {
    seo: {
      title: "Pudding（Puddpet）| Chrome デスクトップペット拡張 · 選択翻訳 · ポモドーロ",
      description:
        "Pudding 公式サイト：Chrome 用デスクトップペット拡張。閲覧中のかわいいペット、選択翻訳、ポモドーロ、ツールボックス。Chrome ウェブストアから無料インストール。",
      ogTitle: "Pudding | Chrome デスクトップペット · 翻訳拡張機能",
      ogDescription:
        "ブラウザにデスクトップペットを。選択翻訳とポモドーロで作業をサポート。Puddpet 公式ダウンロード。",
      ogImageAlt: "Pudding Chrome デスクトップペット拡張のプレビュー",
      keywords: [
        "Chrome デスクトップペット 拡張",
        "選択翻訳 Chrome 拡張",
        "Chrome ペット 拡張機能",
        "ポモドーロ ブラウザ 拡張",
        "Pudding 拡張機能",
        "Puddpet",
        "AI ペット Chrome",
      ],
    },
    nav: { home: "ホーム", features: "機能", download: "ダウンロード", changelog: "更新履歴" },
    footer: { privacy: "プライバシー", terms: "利用規約", rights: "無断転載を禁じます" },
    common: { installNow: "今すぐインストール", viewFeatures: "機能を見る", featuresTitle: "主な機能" },
    home: {
      badge: "Chrome ペット拡張",
      title: "Pudding: 翻訳と生産性を支える AI ペット",
      description:
        "かわいいデスクトップペットをブラウザに。翻訳サポートとポモドーロで日々の作業を快適にします。",
      bullets: [
        "🐾 ペット体験: 閲覧中に軽いインタラクション",
        "🌍 翻訳支援: 多言語コンテンツをすばやく理解",
        "⏱️ 効率パネル: ポモドーロとツールで集中維持",
      ],
    },
    features: {
      intro: "Pudding は軽量でかわいく、信頼できる体験を目指して設計されています。",
      cards: [
        { title: "ペットインタラクション", detail: "作業の邪魔をしない軽い反応で寄り添います。" },
        { title: "翻訳アシスタント", detail: "Web 上のテキストをすばやく翻訳できます。" },
        { title: "ツールボックス", detail: "よく使う小ツールをまとめて利用できます。" },
        { title: "ポモドーロ", detail: "作業と休憩のリズムを安定させます。" },
      ],
    },
    download: {
      intro: "ブラウザを選んでインストールしてください。全ボタンは計測可能なリダイレクトを通ります。",
      chromeDesc: "推奨。主要配布チャネルです。",
      edgeDesc: "Edge ユーザー向けの選択肢です。",
      githubDesc: "リリースから手動でパッケージを取得します。",
      versionLabel: "バージョン",
      updatedLabel: "更新日",
      requirementsLabel: "動作環境",
    },
    interactive: {
      title: "インタラクティブ展示",
      videoPlaceholder: "製品デモ動画（プレースホルダー）",
      petHint: "マウス移動で追従、クリックでまばたき＆あいさつ。",
      greeting: "やあ、ここだよ！",
      translationTitle: "翻訳バブル Mock",
      translationSource: "Hello! How are you?",
      translationResult: "こんにちは、元気ですか？",
      pomodoroIdle: "ポモドーロ開始（Mock）",
      pomodoroActive: "集中中...",
      pomodoroHint: "クリックで大きいペットが少し表示されます。",
    },
    changelog: {
      changes: [
        "一般版サイトを公開し、紹介とダウンロード導線を整備。",
        "流入元付きリダイレクトを追加し、転換計測に対応。",
        "プライバシー、利用規約、SEO 基本設定を追加。",
      ],
    },
    legal: {
      effectiveDateLabel: "発効日",
      date: "2026-05-28",
      privacyIntro: "Pudding サイトは製品紹介とダウンロード案内のためのものです。個人を特定できる情報は原則収集しません。",
      termsIntro: "本サイトの利用または拡張機能のダウンロードにより、本規約に同意したものとみなされます。",
    },
  },
  ko: {
    seo: {
      title: "Pudding(Puddpet) | Chrome 데스크톱 펫 확장 · 드래그 번역 · 포모도로",
      description:
        "Pudding 공식 사이트: 무료 Chrome 데스크톱 펫 확장. 웹서핑 중 귀여운 펫, 텍스트 선택 번역, 포모도로 타이머와 도구함. Chrome 웹 스토어에서 설치.",
      ogTitle: "Pudding | Chrome 데스크톱 펫 · 번역 확장 프로그램",
      ogDescription:
        "브라우저 속 데스크톱 펫, 선택 번역, 포모도로. Puddpet 공식 다운로드 및 기능 소개.",
      ogImageAlt: "Pudding Chrome 데스크톱 펫 확장 미리보기",
      keywords: [
        "Chrome 데스크톱 펫 확장",
        "선택 번역 크롬 확장",
        "Chrome 펫 확장 프로그램",
        "포모도로 브라우저 확장",
        "Pudding 크롬 확장",
        "Puddpet",
        "AI 펫 크롬 확장",
      ],
    },
    nav: { home: "홈", features: "기능", download: "다운로드", changelog: "업데이트 내역" },
    footer: { privacy: "개인정보처리방침", terms: "이용약관", rights: "모든 권리 보유" },
    common: { installNow: "지금 설치", viewFeatures: "기능 보기", featuresTitle: "핵심 기능" },
    home: {
      badge: "Chrome 펫 확장 프로그램",
      title: "Pudding: 번역과 생산성을 돕는 AI 펫",
      description:
        "귀여운 데스크톱 펫을 브라우저에서 만나고, 빠른 번역과 포모도로로 집중력을 높이세요.",
      bullets: [
        "🐾 펫 상호작용: 브라우징 중 가벼운 동반 경험",
        "🌍 번역 지원: 다국어 웹 콘텐츠를 빠르게 이해",
        "⏱️ 생산성 패널: 포모도로와 도구함으로 집중 유지",
      ],
    },
    features: {
      intro: "Pudding은 가볍고 귀엽고 신뢰할 수 있는 경험을 목표로 합니다.",
      cards: [
        { title: "펫 상호작용", detail: "작업 흐름을 방해하지 않는 가벼운 반응을 제공합니다." },
        { title: "번역 도우미", detail: "웹 텍스트를 빠르고 자연스럽게 번역합니다." },
        { title: "도구함", detail: "자주 쓰는 미니 도구를 한곳에 모았습니다." },
        { title: "포모도로", detail: "작업/휴식 리듬을 안정적으로 유지합니다." },
      ],
    },
    download: {
      intro: "브라우저를 선택해 설치하세요. 모든 버튼은 추적 가능한 리다이렉트 경로를 거칩니다.",
      chromeDesc: "권장 채널이며 기본 배포 플랫폼입니다.",
      edgeDesc: "Microsoft Edge 사용자를 위한 선택지입니다.",
      githubDesc: "릴리스에서 패키지를 수동 설치할 수 있습니다.",
      versionLabel: "버전",
      updatedLabel: "업데이트 날짜",
      requirementsLabel: "요구 사항",
    },
    interactive: {
      title: "인터랙션 데모",
      videoPlaceholder: "제품 데모 영상(자리표시자)",
      petHint: "마우스를 움직이면 펫이 따라오고, 클릭하면 깜빡이며 인사합니다.",
      greeting: "안녕! 여기 있어요!",
      translationTitle: "번역 버블 Mock",
      translationSource: "Hello! How are you?",
      translationResult: "안녕! 오늘 기분 어때?",
      pomodoroIdle: "포모도로 시작(Mock)",
      pomodoroActive: "집중 중...",
      pomodoroHint: "버튼을 누르면 큰 펫이 잠깐 나타났다 사라집니다.",
    },
    changelog: {
      changes: [
        "일반 웹사이트를 공개하고 소개/다운로드 흐름을 구성했습니다.",
        "유입 출처를 포함한 리다이렉트를 추가해 전환 추적을 지원합니다.",
        "개인정보처리방침, 약관, 기본 SEO를 추가했습니다.",
      ],
    },
    legal: {
      effectiveDateLabel: "시행일",
      date: "2026-05-28",
      privacyIntro: "Pudding 웹사이트는 제품 소개와 다운로드 안내 용도입니다. 기본적으로 개인 식별 정보를 수집하지 않습니다.",
      termsIntro: "이 웹사이트를 이용하거나 확장 프로그램을 다운로드하면 본 약관에 동의한 것으로 간주됩니다.",
    },
  },
  pt_BR: {
    seo: {
      title: "Pudding (Puddpet) | Pet de desktop para Chrome – tradução e Pomodoro",
      description:
        "Site oficial do Pudding: extensão gratuita para Chrome com pet de desktop em qualquer página, tradução por seleção, Pomodoro e caixa de ferramentas. Instale na Chrome Web Store.",
      ogTitle: "Pudding | Pet de desktop no Chrome – extensão de tradução",
      ogDescription:
        "Pet fofo enquanto você navega, tradução por seleção e Pomodoro. Download oficial Puddpet.",
      ogImageAlt: "Prévia da extensão Pudding pet de desktop para Chrome",
      keywords: [
        "extensão pet desktop chrome",
        "extensão tradução por seleção chrome",
        "extensão pet chrome brasil",
        "extensão pomodoro navegador",
        "extensão pudding chrome",
        "puddpet extensão",
        "assistente pet IA chrome",
      ],
    },
    nav: { home: "Início", features: "Recursos", download: "Baixar", changelog: "Changelog" },
    footer: { privacy: "Privacidade", terms: "Termos", rights: "Todos os direitos reservados" },
    common: { installNow: "Instalar agora", viewFeatures: "Ver recursos", featuresTitle: "Recursos principais" },
    home: {
      badge: "Extensão pet para Chrome",
      title: "Pudding: pet de IA para tradução e produtividade",
      description:
        "Leve um pet fofo para o navegador, com suporte rápido de tradução e ferramentas para manter o foco.",
      bullets: [
        "🐾 Companhia pet: interação leve durante a navegação",
        "🌍 Tradução: entenda conteúdo em vários idiomas rapidamente",
        "⏱️ Produtividade: pomodoro e caixa de ferramentas para foco",
      ],
    },
    features: {
      intro: "O Pudding foi criado para ser leve, fofo e confiável no dia a dia.",
      cards: [
        { title: "Interação com pet", detail: "Feedbacks leves e agradáveis durante o uso." },
        { title: "Assistente de tradução", detail: "Traduza textos da web de forma rápida." },
        { title: "Caixa de ferramentas", detail: "Mini ferramentas úteis em um só lugar." },
        { title: "Pomodoro", detail: "Mantenha um ritmo estável entre foco e pausa." },
      ],
    },
    download: {
      intro: "Escolha seu navegador. Todos os botões passam por uma rota de redirecionamento rastreável.",
      chromeDesc: "Recomendado e canal principal.",
      edgeDesc: "Opção para usuários do Microsoft Edge.",
      githubDesc: "Baixe o pacote manualmente pelos releases.",
      versionLabel: "Versão",
      updatedLabel: "Atualizado em",
      requirementsLabel: "Requisitos",
    },
    interactive: {
      title: "Vitrine Interativa",
      videoPlaceholder: "Placeholder de vídeo demo",
      petHint: "Mova o mouse para o pet seguir; clique para piscar e cumprimentar.",
      greeting: "Oi! Estou aqui!",
      translationTitle: "Mock de bolha de tradução",
      translationSource: "Hello! How are you?",
      translationResult: "Olá! Como você está?",
      pomodoroIdle: "Iniciar Pomodoro (Mock)",
      pomodoroActive: "Foco ativo...",
      pomodoroHint: "Ao clicar, um pet maior aparece por um instante.",
    },
    changelog: {
      changes: [
        "Lançamento do site geral com vitrine e fluxo de download.",
        "Adição de redirecionamento com origem para medir conversão.",
        "Inclusão de privacidade, termos e SEO básico.",
      ],
    },
    legal: {
      effectiveDateLabel: "Data de vigência",
      date: "2026-05-28",
      privacyIntro: "O site do Pudding é usado apenas para apresentação do produto e orientação de download. Não coletamos dados pessoais identificáveis por padrão.",
      termsIntro: "Ao acessar este site ou baixar a extensão, você concorda com estes termos.",
    },
  },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): Dict {
  return dictionaries[locale];
}

export function localePath(locale: Locale, path = ""): string {
  return `/${locale}${path}`;
}
