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
  footer: {
    privacy: string;
    terms: string;
    faq: string;
    rights: string;
    chromeOfficial: string;
  };
  faq: {
    seoTitle: string;
    seoDescription: string;
    title: string;
    intro: string;
    items: { question: string; answer: string }[];
    installCta: string;
  };
  common: {
    installNow: string;
    viewFeatures: string;
    featuresTitle: string;
    learnMore: string;
    close: string;
    backToFeatures: string;
    otherFeatures: string;
  };
  home: {
    badge: string;
    title: string;
    description: string;
    bullets: string[];
  };
  features: {
    intro: string;
    cards: { slug: string; title: string; detail: string; longDetail: string; points: string[] }[];
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
    entries: { version: string; date: string; changes: string[] }[];
  };
  legal: {
    effectiveDateLabel: string;
    date: string;
    privacyIntro: string;
    termsIntro: string;
  };
  pet: {
    feed: string;
    pat: string;
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
    footer: {
      privacy: "隐私政策",
      terms: "使用条款",
      faq: "常见问题",
      rights: "版权所有",
      chromeOfficial: "Chrome 商店官方扩展",
    },
    faq: {
      seoTitle: "常见问题 | Chrome 桌面宠物插件 Pudding",
      seoDescription:
        "关于 Pudding Chrome 扩展的安装、划词翻译、桌面宠物、隐私与 Chrome 网上应用店下载的常见问题解答。",
      title: "常见问题",
      intro: "",
      items: [
        {
          question: "Pudding 是什么？",
          answer: "Chrome 桌面宠物扩展，带划词翻译、番茄钟和工具箱。",
        },
        {
          question: "怎么安装？",
          answer: "点「立即安装」跳转 Chrome 商店，安装后点工具栏图标即可。",
        },
        {
          question: "免费吗？",
          answer: "扩展免费。部分 AI 功能需在扩展内自行配置服务商。",
        },
        {
          question: "支持哪些浏览器？",
          answer: "Chrome 114+，Edge 114+ 通常也可用。",
        },
        {
          question: "会收集个人数据吗？",
          answer: "官网不收集个人信息。扩展数据处理见隐私政策。",
        },
      ],
      installCta: "前往 Chrome 商店安装",
    },
    common: {
      installNow: "立即安装",
      viewFeatures: "查看功能",
      featuresTitle: "核心能力",
      learnMore: "了解更多",
      close: "关闭",
      backToFeatures: "返回功能概览",
      otherFeatures: "其他功能",
    },
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
      intro: "宠物陪伴与效率工具，集于一个扩展。",
      cards: [
        {
          slug: "pet",
          title: "宠物互动",
          detail: "浏览时有轻量互动反馈，让工作学习更有陪伴感。",
          longDetail:
            "宠物可在任意网页角落陪伴，支持跟随、喂食、摸头等轻量互动，并可拖动到合适位置，不遮挡主要内容区域。",
          points: [
            "跟随鼠标、喂食、摸头等轻量互动",
            "可拖到角落或收起，尽量不挡正文",
            "与翻译、番茄钟等同属一个扩展",
          ],
        },
        {
          slug: "translation",
          title: "翻译助手",
          detail: "快速翻译网页文本，降低跨语言阅读成本。",
          longDetail:
            "选中页面文字即可触发划词翻译，适合阅读外文资讯、技术文档与社区帖子，减少在翻译网站与当前页之间来回切换。",
          points: [
            "选中文字即可显示译文气泡",
            "无需跳转翻译网站或新开标签",
            "适合文章、文档、论坛等阅读场景",
          ],
        },
        {
          slug: "toolbox",
          title: "工具箱",
          detail: "集合常用小工具，减少频繁切换页面和应用。",
          longDetail:
            "将截图、提醒、小游戏等常用能力收纳在同一扩展面板中，降低打开多个标签页或独立应用的成本。",
          points: [
            "截图、提醒等常用能力集中在一处",
            "内置小游戏，适合短暂休息",
            "少装扩展，减轻浏览器负担",
          ],
        },
        {
          slug: "pomodoro",
          title: "番茄钟",
          detail: "专注计时与休息节奏管理，提升稳定产出。",
          longDetail:
            "内置番茄钟与计时提醒，帮助你在长时间浏览或办公时保持专注与休息节奏，与宠物陪伴场景自然结合。",
          points: [
            "可配置专注时长与休息间隔",
            "到点提醒，避免无意识刷网页",
            "在浏览器内完成，不必另开 App",
          ],
        },
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
      entries: [
        {
          version: "0.0.4",
          date: "2026-06-01",
          changes: [
            "重构 AI Provider 系统，统一管理 AI 服务，修复 AI 分组功能异常。",
            "优化宠物说话模块，重构对话逻辑，支持边走边静态，新增内容总结功能。",
            "新增 Tabs 标签页功能，游戏窗口支持自由调节大小，优化 Doodle Jump 体验。",
            "全面优化番茄钟、闹钟与计时器 UI，恢复阅读模式与 Cookie 功能，精简多语言实现。",
          ],
        },
        {
          version: "0.0.2",
          date: "2026-05-28",
          changes: [
            "发布通用版官网，包含展示与下载链路。",
            "新增来源参数跳转路由，便于后续统计转化。",
            "补齐隐私政策、使用条款与基础 SEO 文件。",
          ],
        },
      ],
    },
    legal: {
      effectiveDateLabel: "生效日期",
      date: "2026-06-01",
      privacyIntro: "Pudding 网站仅用于产品展示和下载引导。我们默认不收集可识别个人身份的信息。",
      termsIntro: "访问本网站或下载扩展，即表示你同意相关条款。",
    },
    pet: { feed: "喂食", pat: "摸头" },
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
    footer: {
      privacy: "Privacy",
      terms: "Terms",
      faq: "FAQ",
      rights: "All rights reserved",
      chromeOfficial: "Official Chrome Web Store extension",
    },
    faq: {
      seoTitle: "FAQ | Pudding Desktop Pet Chrome Extension",
      seoDescription:
        "Answers about installing Pudding, selection translation, the desktop pet, privacy, and downloading from the Chrome Web Store.",
      title: "Frequently Asked Questions",
      intro: "",
      items: [
        {
          question: "What is Pudding?",
          answer: "A Chrome desktop pet extension with translate, Pomodoro, and tools.",
        },
        {
          question: "How do I install?",
          answer: 'Click "Install now" to open the Chrome Web Store, then pin the icon.',
        },
        {
          question: "Is it free?",
          answer: "Yes. Some AI features need providers you configure in settings.",
        },
        {
          question: "Which browsers?",
          answer: "Chrome 114+. Edge 114+ usually works too.",
        },
        {
          question: "Privacy?",
          answer: "This site collects no personal data. See the privacy policy for the extension.",
        },
      ],
      installCta: "Install from Chrome Web Store",
    },
    common: {
      installNow: "Install now",
      viewFeatures: "View features",
      featuresTitle: "Core features",
      learnMore: "Learn more",
      close: "Close",
      backToFeatures: "Back to features",
      otherFeatures: "Other features",
    },
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
      intro: "Pet companion and productivity tools in one extension.",
      cards: [
        {
          slug: "pet",
          title: "Pet Interaction",
          detail: "Light playful feedback while you browse and work.",
          longDetail:
            "A pet can stay in the corner of any page with follow, feed, and pat interactions—draggable so it does not cover main content.",
          points: [
            "Follow, feed, and pat without leaving the page",
            "Drag to a corner or tuck away when focusing",
            "Lives in the same extension as translate and Pomodoro",
          ],
        },
        {
          slug: "translation",
          title: "Translation Assistant",
          detail: "Translate selected web content quickly and smoothly.",
          longDetail:
            "Select text to trigger inline translation—ideal for foreign articles, docs, and forums without switching tabs.",
          points: [
            "Selection shows a translation bubble in place",
            "No extra tab or translation site needed",
            "Great for articles, docs, and forum threads",
          ],
        },
        {
          slug: "toolbox",
          title: "Toolbox",
          detail: "Useful mini tools in one place to reduce context switching.",
          longDetail:
            "Screenshots, reminders, mini games, and more in one extension panel instead of many separate apps or tabs.",
          points: [
            "Screenshots and reminders in one panel",
            "Mini games for short breaks",
            "Fewer extensions cluttering the toolbar",
          ],
        },
        {
          slug: "pomodoro",
          title: "Pomodoro Timer",
          detail: "Keep a stable focus rhythm with work and break cycles.",
          longDetail:
            "Built-in Pomodoro and timers help you balance focus and breaks while browsing or working alongside your pet.",
          points: [
            "Configurable focus and break blocks",
            "Alerts when a block ends",
            "Stays in the browser—no separate app",
          ],
        },
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
      entries: [
        {
          version: "0.0.4",
          date: "2026-06-01",
          changes: [
            "Refactored AI Provider system with unified AI service management; fixed AI group unavailable issue.",
            "Overhauled pet speech module, reworked dialogue logic, added static-while-walking pose and content summarization.",
            "Added Tabs support, game window resizing, and improved Doodle Jump experience.",
            "Improved Pomodoro, alarm, and timer UI; restored reading mode and cookie support; streamlined i18n.",
          ],
        },
        {
          version: "0.0.2",
          date: "2026-05-28",
          changes: [
            "Published the general website with showcase and download flow.",
            "Added source-aware redirect route for conversion tracking.",
            "Added privacy, terms, and baseline SEO files.",
          ],
        },
      ],
    },
    legal: {
      effectiveDateLabel: "Effective date",
      date: "2026-06-01",
      privacyIntro: "Pudding website is for product showcase and download guidance only. We do not collect personally identifiable information by default.",
      termsIntro: "By accessing this website or downloading the extension, you agree to these terms.",
    },
    pet: { feed: "Feed", pat: "Head Pat" },
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
    footer: {
      privacy: "プライバシー",
      terms: "利用規約",
      faq: "よくある質問",
      rights: "無断転載を禁じます",
      chromeOfficial: "Chrome ウェブストア公式拡張",
    },
    faq: {
      seoTitle: "よくある質問 | Pudding Chrome デスクトップペット拡張",
      seoDescription:
        "Pudding のインストール、選択翻訳、デスクトップペット、プライバシー、Chrome ウェブストアからのダウンロードに関する FAQ。",
      title: "よくある質問",
      intro: "",
      items: [
        { question: "Pudding とは？", answer: "Chrome デスクトップペット拡張。翻訳・ポモドーロ・ツール付き。" },
        { question: "インストールは？", answer: "「今すぐインストール」から Chrome ストアで追加。" },
        { question: "無料？", answer: "拡張は無料。AI は設定次第。" },
        { question: "対応ブラウザ？", answer: "Chrome 114+、Edge 114+ も可。" },
        { question: "プライバシー？", answer: "サイトは個人情報を収集しません。詳細はプライバシーポリシー。" },
      ],
      installCta: "Chrome ストアでインストール",
    },
    common: {
      installNow: "今すぐインストール",
      viewFeatures: "機能を見る",
      featuresTitle: "主な機能",
      learnMore: "詳しく見る",
      close: "閉じる",
      backToFeatures: "機能一覧に戻る",
      otherFeatures: "その他の機能",
    },
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
      intro: "ペット体験と効率ツールを一つの拡張に。",
      cards: [
        {
          slug: "pet",
          title: "ペットインタラクション",
          detail: "作業の邪魔をしない軽い反応で寄り添います。",
          longDetail: "任意のページの隅でペットが寄り添い、追従・エサ・なでなでなどの軽い操作ができ、ドラッグで位置を調整できます。",
          points: [
            "追従・エサ・なでななどの軽い操作",
            "隅に置いたりドラッグして邪魔にならない位置へ",
            "翻訳やポモドーロと同じ拡張機能内",
          ],
        },
        {
          slug: "translation",
          title: "翻訳アシスタント",
          detail: "Web 上のテキストをすばやく翻訳できます。",
          longDetail: "テキストを選択するだけで翻訳を表示。外文の記事やドキュメントを読むときにタブ移動を減らせます。",
          points: [
            "選択した文字列の訳をバブルで表示",
            "翻訳サイトへの移動が不要",
            "記事・ドキュメント・フォーラム向け",
          ],
        },
        {
          slug: "toolbox",
          title: "ツールボックス",
          detail: "よく使う小ツールをまとめて利用できます。",
          longDetail: "スクリーンショット、リマインダー、ミニゲームなどを一つのパネルに集約し、作業の切り替えを減らします。",
          points: [
            "スクショやリマインダーを一箇所に",
            "短い休憩用のミニゲーム",
            "拡張機能の乱立を防ぐ",
          ],
        },
        {
          slug: "pomodoro",
          title: "ポモドーロ",
          detail: "作業と休憩のリズムを安定させます。",
          longDetail: "内蔵のポモドーロとタイマーで、長時間の閲覧や作業中も集中と休憩のバランスを保てます。",
          points: [
            "集中・休憩の時間を設定可能",
            "終了時に通知",
            "ブラウザ内で完結",
          ],
        },
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
      entries: [
        {
          version: "0.0.4",
          date: "2026-06-01",
          changes: [
            "AI Provider システムをリファクタリングし、AI サービスを統一管理。AIグループ利用不可の問題を修正。",
            "ペット発話モジュールを刷新し、歩行中の静止ポーズ表示と内容要約機能を追加。",
            "タブ機能を追加し、ゲームウィンドウのサイズ変更に対応、Doodle Jump の体験を改善。",
            "ポモドーロ・アラーム・タイマーの UI を改善。リーディングモードと Cookie 機能を復元、多言語実装を簡略化。",
          ],
        },
        {
          version: "0.0.2",
          date: "2026-05-28",
          changes: [
            "一般版サイトを公開し、紹介とダウンロード導線を整備。",
            "流入元付きリダイレクトを追加し、転換計測に対応。",
            "プライバシー、利用規約、SEO 基本設定を追加。",
          ],
        },
      ],
    },
    legal: {
      effectiveDateLabel: "発効日",
      date: "2026-06-01",
      privacyIntro: "Pudding サイトは製品紹介とダウンロード案内のためのものです。個人を特定できる情報は原則収集しません。",
      termsIntro: "本サイトの利用または拡張機能のダウンロードにより、本規約に同意したものとみなされます。",
    },
    pet: { feed: "エサをあげる", pat: "なでなで" },
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
    footer: {
      privacy: "개인정보처리방침",
      terms: "이용약관",
      faq: "자주 묻는 질문",
      rights: "모든 권리 보유",
      chromeOfficial: "Chrome 웹 스토어 공식 확장",
    },
    faq: {
      seoTitle: "자주 묻는 질문 | Pudding Chrome 데스크톱 펫 확장",
      seoDescription:
        "Pudding 설치, 선택 번역, 데스크톱 펫, 개인정보, Chrome 웹 스토어 다운로드에 대한 FAQ.",
      title: "자주 묻는 질문",
      intro: "",
      items: [
        { question: "Pudding이란?", answer: "Chrome 데스크톱 펫 확장. 번역·포모도로·도구함 포함." },
        { question: "설치 방법?", answer: "「지금 설치」로 Chrome 스토어에서 추가." },
        { question: "무료?", answer: "확장은 무료. AI는 설정에 따름." },
        { question: "지원 브라우저?", answer: "Chrome 114+, Edge 114+ 가능." },
        { question: "개인정보?", answer: "사이트는 개인정보를 수집하지 않습니다. 확장은 개인정보처리방침 참고." },
      ],
      installCta: "Chrome 스토어에서 설치",
    },
    common: {
      installNow: "지금 설치",
      viewFeatures: "기능 보기",
      featuresTitle: "핵심 기능",
      learnMore: "자세히 보기",
      close: "닫기",
      backToFeatures: "기능 개요로 돌아가기",
      otherFeatures: "다른 기능",
    },
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
      intro: "펫 동반과 생산성 도구를 하나의 확장에.",
      cards: [
        {
          slug: "pet",
          title: "펫 상호작용",
          detail: "작업 흐름을 방해하지 않는 가벼운 반응을 제공합니다.",
          longDetail: "모든 페이지 구석에서 펫이 함께하며, 따라오기·먹이주기·쓰다듬기 등 가벼운 상호작용과 드래그 이동을 지원합니다.",
          points: [
            "따라오기·먹이주기·쓰다듬기 등 가벼운 상호작용",
            "구석으로 옮겨 본문을 가리지 않음",
            "번역·포모도로와 같은 확장 프로그램",
          ],
        },
        {
          slug: "translation",
          title: "번역 도우미",
          detail: "웹 텍스트를 빠르고 자연스럽게 번역합니다.",
          longDetail: "텍스트를 선택하면 인라인 번역이 표시되어 외국어 기사와 문서를 읽을 때 탭 전환을 줄일 수 있습니다.",
          points: [
            "선택한 텍스트의 번역을 버블로 표시",
            "번역 사이트로 이동할 필요 없음",
            "기사·문서·포럼 읽기에 적합",
          ],
        },
        {
          slug: "toolbox",
          title: "도구함",
          detail: "자주 쓰는 미니 도구를 한곳에 모았습니다.",
          longDetail: "스크린샷, 알림, 미니 게임 등을 하나의 패널에 모아 여러 앱이나 탭을 오가는 비용을 줄입니다.",
          points: [
            "스크린샷·알림 등을 한 패널에",
            "짧은 휴식용 미니 게임",
            "확장 프로그램 난립 감소",
          ],
        },
        {
          slug: "pomodoro",
          title: "포모도로",
          detail: "작업/휴식 리듬을 안정적으로 유지합니다.",
          longDetail: "내장 포모도로와 타이머로 장시간 브라우징·작업 중에도 집중과 휴식의 균형을 유지할 수 있습니다.",
          points: [
            "집중·휴식 시간 블록 설정",
            "종료 시 알림",
            "브라우저 안에서 사용",
          ],
        },
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
      entries: [
        {
          version: "0.0.4",
          date: "2026-06-01",
          changes: [
            "AI Provider 시스템 리팩터링으로 AI 서비스를 통합 관리하고 AI 그룹 오류를 수정했습니다.",
            "펫 말하기 모듈을 재구성하고, 걸으면서 멈추는 자세와 내용 요약 기능을 추가했습니다.",
            "탭 기능 추가, 게임 창 크기 조절 지원, Doodle Jump 경험을 개선했습니다.",
            "포모도로·알람·타이머 UI 개선, 읽기 모드 및 Cookie 기능 복원, 다국어 구현 간소화.",
          ],
        },
        {
          version: "0.0.2",
          date: "2026-05-28",
          changes: [
            "일반 웹사이트를 공개하고 소개/다운로드 흐름을 구성했습니다.",
            "유입 출처를 포함한 리다이렉트를 추가해 전환 추적을 지원합니다.",
            "개인정보처리방침, 약관, 기본 SEO를 추가했습니다.",
          ],
        },
      ],
    },
    legal: {
      effectiveDateLabel: "시행일",
      date: "2026-06-01",
      privacyIntro: "Pudding 웹사이트는 제품 소개와 다운로드 안내 용도입니다. 기본적으로 개인 식별 정보를 수집하지 않습니다.",
      termsIntro: "이 웹사이트를 이용하거나 확장 프로그램을 다운로드하면 본 약관에 동의한 것으로 간주됩니다.",
    },
    pet: { feed: "먹이주기", pat: "머리쓰다듬기" },
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
    footer: {
      privacy: "Privacidade",
      terms: "Termos",
      faq: "Perguntas frequentes",
      rights: "Todos os direitos reservados",
      chromeOfficial: "Extensão oficial na Chrome Web Store",
    },
    faq: {
      seoTitle: "Perguntas frequentes | Extensão Pudding pet desktop Chrome",
      seoDescription:
        "Respostas sobre instalação do Pudding, tradução por seleção, pet de desktop, privacidade e download na Chrome Web Store.",
      title: "Perguntas frequentes",
      intro: "",
      items: [
        { question: "O que é o Pudding?", answer: "Extensão Chrome com pet, tradução, Pomodoro e ferramentas." },
        { question: "Como instalar?", answer: 'Clique em "Instalar agora" na Chrome Web Store.' },
        { question: "É grátis?", answer: "Sim. IA depende do que você configurar." },
        { question: "Navegadores?", answer: "Chrome 114+. Edge 114+ geralmente funciona." },
        { question: "Privacidade?", answer: "O site não coleta dados pessoais. Veja a política de privacidade." },
      ],
      installCta: "Instalar na Chrome Web Store",
    },
    common: {
      installNow: "Instalar agora",
      viewFeatures: "Ver recursos",
      featuresTitle: "Recursos principais",
      learnMore: "Saiba mais",
      close: "Fechar",
      backToFeatures: "Voltar aos recursos",
      otherFeatures: "Outros recursos",
    },
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
      intro: "Pet e ferramentas de produtividade em uma extensão.",
      cards: [
        {
          slug: "pet",
          title: "Interação com pet",
          detail: "Feedbacks leves e agradáveis durante o uso.",
          longDetail:
            "Um pet pode ficar no canto de qualquer página com seguir, alimentar e acariciar—arrastável para não cobrir o conteúdo.",
          points: [
            "Seguir, alimentar e acariciar sem sair da página",
            "Arraste para o canto quando precisar de foco",
            "Mesma extensão da tradução e do Pomodoro",
          ],
        },
        {
          slug: "translation",
          title: "Assistente de tradução",
          detail: "Traduza textos da web de forma rápida.",
          longDetail:
            "Selecione texto para tradução inline—ideal para artigos e documentos em outros idiomas sem trocar de aba.",
          points: [
            "Bolha de tradução ao selecionar texto",
            "Sem site de tradução ou aba extra",
            "Bom para artigos, docs e fóruns",
          ],
        },
        {
          slug: "toolbox",
          title: "Caixa de ferramentas",
          detail: "Mini ferramentas úteis em um só lugar.",
          longDetail:
            "Capturas de tela, lembretes e mini jogos em um painel, reduzindo apps e abas separados.",
          points: [
            "Capturas e lembretes num painel",
            "Mini jogos para pausas curtas",
            "Menos extensões na barra",
          ],
        },
        {
          slug: "pomodoro",
          title: "Pomodoro",
          detail: "Mantenha um ritmo estável entre foco e pausa.",
          longDetail:
            "Pomodoro e timers integrados ajudam a equilibrar foco e pausas durante navegação e trabalho.",
          points: [
            "Blocos de foco e pausa configuráveis",
            "Alerta ao fim de cada bloco",
            "Funciona dentro do navegador",
          ],
        },
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
      entries: [
        {
          version: "0.0.4",
          date: "2026-06-01",
          changes: [
            "Refatoração do sistema AI Provider com gerenciamento unificado de IA; corrigido problema de grupo de IA indisponível.",
            "Módulo de fala do pet reformulado com pose estática durante o caminhar e nova função de resumo de conteúdo.",
            "Adicionado suporte a abas (Tabs), redimensionamento da janela de jogo e melhora na experiência do Doodle Jump.",
            "Melhorias de UI no Pomodoro, alarme e timer; modo de leitura e cookies restaurados; i18n simplificado.",
          ],
        },
        {
          version: "0.0.2",
          date: "2026-05-28",
          changes: [
            "Lançamento do site geral com vitrine e fluxo de download.",
            "Adição de redirecionamento com origem para medir conversão.",
            "Inclusão de privacidade, termos e SEO básico.",
          ],
        },
      ],
    },
    legal: {
      effectiveDateLabel: "Data de vigência",
      date: "2026-06-01",
      privacyIntro: "O site do Pudding é usado apenas para apresentação do produto e orientação de download. Não coletamos dados pessoais identificáveis por padrão.",
      termsIntro: "Ao acessar este site ou baixar a extensão, você concorda com estes termos.",
    },
    pet: { feed: "Alimentar", pat: "Acariciar" },
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
