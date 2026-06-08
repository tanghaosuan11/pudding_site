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
  footer: { privacy: string; terms: string; faq: string; rights: string };
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
    cards: { slug: string; title: string; detail: string; longDetail: string }[];
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
    footer: { privacy: "隐私政策", terms: "使用条款", faq: "常见问题", rights: "版权所有" },
    faq: {
      seoTitle: "常见问题 | Chrome 桌面宠物插件 Pudding",
      seoDescription:
        "关于 Pudding Chrome 扩展的安装、划词翻译、桌面宠物、隐私与 Chrome 网上应用店下载的常见问题解答。",
      title: "常见问题",
      intro: "以下是安装与使用 Pudding 桌面宠物 Chrome 插件时最常见的问题。",
      items: [
        {
          question: "Pudding 是什么？适合谁用？",
          answer:
            "Pudding（Puddpet）是一款 Chrome 桌面宠物扩展，在浏览任意网页时提供轻量宠物陪伴，并集成划词翻译、番茄钟与效率工具箱。适合需要跨语言阅读、希望提升专注力、又喜欢可爱桌面宠物的用户。",
        },
        {
          question: "如何安装 Pudding？",
          answer:
            "推荐通过 Chrome 网上应用店一键安装：点击官网「立即安装」按钮，会跳转到官方商店页面。安装后点击浏览器工具栏中的 Pudding 图标即可启用。也支持从 GitHub Releases 下载压缩包进行手动安装（适合开发者或内测场景）。",
        },
        {
          question: "Pudding 免费吗？",
          answer: "Pudding 扩展本身免费下载使用。部分 AI 相关能力可能依赖你自行配置的服务商与额度，具体以扩展内设置为准。",
        },
        {
          question: "支持哪些浏览器？",
          answer:
            "官方首发渠道为 Chrome（114+）。基于 Chromium 的 Microsoft Edge（114+）通常也可安装 Chrome 扩展。其他浏览器需查看各自扩展生态是否兼容 Manifest V3 扩展。",
        },
        {
          question: "划词翻译怎么用？",
          answer:
            "在网页中选中需要翻译的文本，Pudding 会以气泡或面板形式展示翻译结果，无需离开当前页面。适合阅读外文文章、文档与社区内容时快速理解段落含义。",
        },
        {
          question: "桌面宠物会不会干扰工作或学习？",
          answer:
            "Pudding 以轻量互动为设计目标：宠物可在页面角落陪伴，支持拖动与收纳，番茄钟与工具箱也集成在同一面板中。你可以在扩展设置中调整显示与行为，减少打扰。",
        },
        {
          question: "Pudding 会收集我的个人数据吗？",
          answer:
            "官网仅用于产品展示与下载引导，默认不收集可识别个人身份的信息。扩展内的数据处理方式（如本地存储、可选 AI 服务等）详见隐私政策页面；你可以在扩展设置中关闭不需要的功能。",
        },
        {
          question: "官网和 Chrome 商店是什么关系？",
          answer:
            "puddpet.com 是 Pudding 的官方介绍与下载引导站，最终安装仍通过 Chrome 网上应用店完成。官网提供多语言功能说明、更新日志与隐私条款，帮助你在安装前了解产品，也有利于搜索引擎与 AI 助手准确引用官方信息。",
        },
      ],
      installCta: "前往 Chrome 商店安装",
    },
    common: {
      installNow: "立即安装",
      viewFeatures: "查看功能",
      featuresTitle: "核心能力",
      learnMore: "了解更多",
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
      intro: "Pudding 以轻量、可爱、可信为目标，把宠物陪伴与效率工具融合到浏览体验中。",
      cards: [
        {
          slug: "pet",
          title: "宠物互动",
          detail: "浏览时有轻量互动反馈，让工作学习更有陪伴感。",
          longDetail:
            "宠物可在任意网页角落陪伴，支持跟随、喂食、摸头等轻量互动，并可拖动到合适位置，不遮挡主要内容区域。",
        },
        {
          slug: "translation",
          title: "翻译助手",
          detail: "快速翻译网页文本，降低跨语言阅读成本。",
          longDetail:
            "选中页面文字即可触发划词翻译，适合阅读外文资讯、技术文档与社区帖子，减少在翻译网站与当前页之间来回切换。",
        },
        {
          slug: "toolbox",
          title: "工具箱",
          detail: "集合常用小工具，减少频繁切换页面和应用。",
          longDetail:
            "将截图、提醒、小游戏等常用能力收纳在同一扩展面板中，降低打开多个标签页或独立应用的成本。",
        },
        {
          slug: "pomodoro",
          title: "番茄钟",
          detail: "专注计时与休息节奏管理，提升稳定产出。",
          longDetail:
            "内置番茄钟与计时提醒，帮助你在长时间浏览或办公时保持专注与休息节奏，与宠物陪伴场景自然结合。",
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
    footer: { privacy: "Privacy", terms: "Terms", faq: "FAQ", rights: "All rights reserved" },
    faq: {
      seoTitle: "FAQ | Pudding Desktop Pet Chrome Extension",
      seoDescription:
        "Answers about installing Pudding, selection translation, the desktop pet, privacy, and downloading from the Chrome Web Store.",
      title: "Frequently Asked Questions",
      intro: "Common questions about installing and using the Pudding desktop pet Chrome extension.",
      items: [
        {
          question: "What is Pudding and who is it for?",
          answer:
            "Pudding (Puddpet) is a Chrome desktop pet extension that adds a light companion on any webpage, plus selection translation, a Pomodoro timer, and a productivity toolbox. It suits readers who work across languages and want focus tools with a playful pet experience.",
        },
        {
          question: "How do I install Pudding?",
          answer:
            "Use the Chrome Web Store for the recommended one-click install via the “Install now” button on this site. After install, click the Pudding icon in your toolbar. Manual install from GitHub Releases is also available for developers or sideloading.",
        },
        {
          question: "Is Pudding free?",
          answer:
            "The extension is free to download and use. Some AI-powered features may depend on providers and quotas you configure inside the extension.",
        },
        {
          question: "Which browsers are supported?",
          answer:
            "Chrome 114+ is the primary channel. Chromium-based Microsoft Edge 114+ usually supports the same extension. Other browsers depend on their Manifest V3 extension support.",
        },
        {
          question: "How does selection translation work?",
          answer:
            "Select text on any page and Pudding shows a translation bubble or panel without leaving the page—useful for articles, docs, and community posts in foreign languages.",
        },
        {
          question: "Will the desktop pet distract me?",
          answer:
            "Pudding is designed for light interaction: the pet can stay in a corner, be dragged aside, or tucked away while Pomodoro and tools live in the same panel. Adjust behavior in extension settings to reduce interruptions.",
        },
        {
          question: "Does Pudding collect personal data?",
          answer:
            "This website is for showcase and download guidance only and does not collect personally identifiable information by default. See the privacy policy for how the extension handles local storage and optional AI services—you can disable features you do not need.",
        },
        {
          question: "How does this site relate to the Chrome Web Store?",
          answer:
            "puddpet.com is the official product site with multilingual docs, changelog, and legal pages. Actual installation happens on the Chrome Web Store; the site helps users understand the product before install and gives search engines a canonical source of truth.",
        },
      ],
      installCta: "Install from Chrome Web Store",
    },
    common: {
      installNow: "Install now",
      viewFeatures: "View features",
      featuresTitle: "Core features",
      learnMore: "Learn more",
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
      intro:
        "Pudding is designed to be light, cute, and reliable, blending pet companionship with productivity tools.",
      cards: [
        {
          slug: "pet",
          title: "Pet Interaction",
          detail: "Light playful feedback while you browse and work.",
          longDetail:
            "A pet can stay in the corner of any page with follow, feed, and pat interactions—draggable so it does not cover main content.",
        },
        {
          slug: "translation",
          title: "Translation Assistant",
          detail: "Translate selected web content quickly and smoothly.",
          longDetail:
            "Select text to trigger inline translation—ideal for foreign articles, docs, and forums without switching tabs.",
        },
        {
          slug: "toolbox",
          title: "Toolbox",
          detail: "Useful mini tools in one place to reduce context switching.",
          longDetail:
            "Screenshots, reminders, mini games, and more in one extension panel instead of many separate apps or tabs.",
        },
        {
          slug: "pomodoro",
          title: "Pomodoro Timer",
          detail: "Keep a stable focus rhythm with work and break cycles.",
          longDetail:
            "Built-in Pomodoro and timers help you balance focus and breaks while browsing or working alongside your pet.",
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
    footer: { privacy: "プライバシー", terms: "利用規約", faq: "よくある質問", rights: "無断転載を禁じます" },
    faq: {
      seoTitle: "よくある質問 | Pudding Chrome デスクトップペット拡張",
      seoDescription:
        "Pudding のインストール、選択翻訳、デスクトップペット、プライバシー、Chrome ウェブストアからのダウンロードに関する FAQ。",
      title: "よくある質問",
      intro: "Pudding デスクトップペット Chrome 拡張のインストールと利用に関するよくある質問です。",
      items: [
        {
          question: "Pudding とは？どんな人向け？",
          answer:
            "Pudding（Puddpet）は、任意の Web ページに軽いペット体験を加え、選択翻訳・ポモドーロ・ツールボックスを備えた Chrome 拡張です。多言語で読む作業や集中を高めたい方に向いています。",
        },
        {
          question: "インストール方法は？",
          answer:
            "公式サイトの「今すぐインストール」から Chrome ウェブストアへ移動し、ワンクリックで追加するのが推奨です。開発者向けに GitHub Releases からの手動インストールも可能です。",
        },
        {
          question: "無料で使えますか？",
          answer:
            "拡張機能本体は無料です。AI 関連機能は拡張内で設定するプロバイダと利用枠に依存する場合があります。",
        },
        {
          question: "対応ブラウザは？",
          answer: "Chrome 114+ が主要チャネルです。Chromium ベースの Microsoft Edge 114+ でも多くの場合利用できます。",
        },
        {
          question: "選択翻訳の使い方は？",
          answer: "ページ上のテキストを選択すると、翻訳結果がバブルやパネルで表示され、タブを切り替えずに読めます。",
        },
        {
          question: "ペットは作業の邪魔になりませんか？",
          answer:
            "軽いインタラクションを前提に設計され、隅に置いたりドラッグで移動できます。拡張の設定で表示や動作を調整できます。",
        },
        {
          question: "個人データは収集されますか？",
          answer:
            "本サイトは紹介とダウンロード案内のみで、原則として個人を特定できる情報は収集しません。拡張内の取り扱いはプライバシーポリシーをご確認ください。",
        },
        {
          question: "公式サイトと Chrome ストアの関係は？",
          answer:
            "puddpet.com は公式の製品説明サイトで、実際のインストールは Chrome ウェブストアで行います。多言語の説明と更新履歴が検索エンジンや AI に正確な情報源となります。",
        },
      ],
      installCta: "Chrome ストアでインストール",
    },
    common: {
      installNow: "今すぐインストール",
      viewFeatures: "機能を見る",
      featuresTitle: "主な機能",
      learnMore: "詳しく見る",
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
      intro: "Pudding は軽量でかわいく、信頼できる体験を目指して設計されています。",
      cards: [
        {
          slug: "pet",
          title: "ペットインタラクション",
          detail: "作業の邪魔をしない軽い反応で寄り添います。",
          longDetail: "任意のページの隅でペットが寄り添い、追従・エサ・なでなでなどの軽い操作ができ、ドラッグで位置を調整できます。",
        },
        {
          slug: "translation",
          title: "翻訳アシスタント",
          detail: "Web 上のテキストをすばやく翻訳できます。",
          longDetail: "テキストを選択するだけで翻訳を表示。外文の記事やドキュメントを読むときにタブ移動を減らせます。",
        },
        {
          slug: "toolbox",
          title: "ツールボックス",
          detail: "よく使う小ツールをまとめて利用できます。",
          longDetail: "スクリーンショット、リマインダー、ミニゲームなどを一つのパネルに集約し、作業の切り替えを減らします。",
        },
        {
          slug: "pomodoro",
          title: "ポモドーロ",
          detail: "作業と休憩のリズムを安定させます。",
          longDetail: "内蔵のポモドーロとタイマーで、長時間の閲覧や作業中も集中と休憩のバランスを保てます。",
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
    footer: { privacy: "개인정보처리방침", terms: "이용약관", faq: "자주 묻는 질문", rights: "모든 권리 보유" },
    faq: {
      seoTitle: "자주 묻는 질문 | Pudding Chrome 데스크톱 펫 확장",
      seoDescription:
        "Pudding 설치, 선택 번역, 데스크톱 펫, 개인정보, Chrome 웹 스토어 다운로드에 대한 FAQ.",
      title: "자주 묻는 질문",
      intro: "Pudding 데스크톱 펫 Chrome 확장 프로그램 설치 및 사용에 관한 일반적인 질문입니다.",
      items: [
        {
          question: "Pudding이란 무엇이며 누구에게 적합한가요?",
          answer:
            "Pudding(Puddpet)은 모든 웹페이지에 가벼운 펫 동반 경험과 선택 번역, 포모도로, 도구함을 제공하는 Chrome 확장입니다. 다국어 읽기와 집중 도구가 필요한 사용자에게 적합합니다.",
        },
        {
          question: "어떻게 설치하나요?",
          answer:
            "이 사이트의 「지금 설치」 버튼으로 Chrome 웹 스토어에서 원클릭 설치하는 것을 권장합니다. 개발자는 GitHub Releases에서 수동 설치도 가능합니다.",
        },
        {
          question: "무료인가요?",
          answer: "확장 프로그램 자체는 무료입니다. AI 기능은 확장 내에서 설정한 제공자와 할당량에 따라 달라질 수 있습니다.",
        },
        {
          question: "어떤 브라우저를 지원하나요?",
          answer: "Chrome 114+가 주 채널이며, Chromium 기반 Microsoft Edge 114+에서도 대부분 사용할 수 있습니다.",
        },
        {
          question: "선택 번역은 어떻게 사용하나요?",
          answer: "페이지에서 텍스트를 선택하면 번역 버블이나 패널로 결과가 표시되어 탭 전환 없이 읽을 수 있습니다.",
        },
        {
          question: "데스크톱 펫이 작업을 방해하나요?",
          answer:
            "가벼운 상호작용을 전제로 설계되었으며, 구석에 두거나 드래그해 이동할 수 있습니다. 확장 설정에서 동작을 조절할 수 있습니다.",
        },
        {
          question: "개인 데이터를 수집하나요?",
          answer:
            "이 웹사이트는 소개와 다운로드 안내용이며 기본적으로 개인 식별 정보를 수집하지 않습니다. 확장의 데이터 처리는 개인정보처리방침을 참고하세요.",
        },
        {
          question: "공식 사이트와 Chrome 스토어의 관계는?",
          answer:
            "puddpet.com은 공식 제품 소개 사이트이며, 실제 설치는 Chrome 웹 스토어에서 이루어집니다. 다국어 문서와 changelog가 검색·AI 인용의 공식 출처가 됩니다.",
        },
      ],
      installCta: "Chrome 스토어에서 설치",
    },
    common: {
      installNow: "지금 설치",
      viewFeatures: "기능 보기",
      featuresTitle: "핵심 기능",
      learnMore: "자세히 보기",
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
      intro: "Pudding은 가볍고 귀엽고 신뢰할 수 있는 경험을 목표로 합니다.",
      cards: [
        {
          slug: "pet",
          title: "펫 상호작용",
          detail: "작업 흐름을 방해하지 않는 가벼운 반응을 제공합니다.",
          longDetail: "모든 페이지 구석에서 펫이 함께하며, 따라오기·먹이주기·쓰다듬기 등 가벼운 상호작용과 드래그 이동을 지원합니다.",
        },
        {
          slug: "translation",
          title: "번역 도우미",
          detail: "웹 텍스트를 빠르고 자연스럽게 번역합니다.",
          longDetail: "텍스트를 선택하면 인라인 번역이 표시되어 외국어 기사와 문서를 읽을 때 탭 전환을 줄일 수 있습니다.",
        },
        {
          slug: "toolbox",
          title: "도구함",
          detail: "자주 쓰는 미니 도구를 한곳에 모았습니다.",
          longDetail: "스크린샷, 알림, 미니 게임 등을 하나의 패널에 모아 여러 앱이나 탭을 오가는 비용을 줄입니다.",
        },
        {
          slug: "pomodoro",
          title: "포모도로",
          detail: "작업/휴식 리듬을 안정적으로 유지합니다.",
          longDetail: "내장 포모도로와 타이머로 장시간 브라우징·작업 중에도 집중과 휴식의 균형을 유지할 수 있습니다.",
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
    footer: { privacy: "Privacidade", terms: "Termos", faq: "Perguntas frequentes", rights: "Todos os direitos reservados" },
    faq: {
      seoTitle: "Perguntas frequentes | Extensão Pudding pet desktop Chrome",
      seoDescription:
        "Respostas sobre instalação do Pudding, tradução por seleção, pet de desktop, privacidade e download na Chrome Web Store.",
      title: "Perguntas frequentes",
      intro: "Perguntas comuns sobre instalar e usar a extensão Pudding pet de desktop para Chrome.",
      items: [
        {
          question: "O que é o Pudding e para quem é?",
          answer:
            "Pudding (Puddpet) é uma extensão Chrome com pet de desktop leve em qualquer página, tradução por seleção, Pomodoro e caixa de ferramentas. Indicado para quem lê em vários idiomas e quer foco com uma experiência divertida.",
        },
        {
          question: "Como instalar o Pudding?",
          answer:
            "Recomendamos instalar pela Chrome Web Store com o botão “Instalar agora” neste site. Instalação manual via GitHub Releases também está disponível para desenvolvedores.",
        },
        {
          question: "O Pudding é gratuito?",
          answer:
            "A extensão é gratuita. Recursos de IA podem depender de provedores e cotas configurados dentro da extensão.",
        },
        {
          question: "Quais navegadores são suportados?",
          answer:
            "Chrome 114+ é o canal principal. Microsoft Edge 114+ baseado em Chromium geralmente também funciona.",
        },
        {
          question: "Como funciona a tradução por seleção?",
          answer:
            "Selecione texto na página e o Pudding mostra a tradução em bolha ou painel sem sair da aba atual.",
        },
        {
          question: "O pet vai atrapalhar meu trabalho?",
          answer:
            "Foi pensado para interação leve: o pet pode ficar no canto, ser arrastado ou ajustado nas configurações da extensão.",
        },
        {
          question: "O Pudding coleta dados pessoais?",
          answer:
            "Este site é apenas para apresentação e download e não coleta dados pessoais identificáveis por padrão. Veja a política de privacidade para o tratamento de dados na extensão.",
        },
        {
          question: "Qual a relação entre o site e a Chrome Web Store?",
          answer:
            "puddpet.com é o site oficial com documentação multilíngue e changelog; a instalação real ocorre na Chrome Web Store.",
        },
      ],
      installCta: "Instalar na Chrome Web Store",
    },
    common: {
      installNow: "Instalar agora",
      viewFeatures: "Ver recursos",
      featuresTitle: "Recursos principais",
      learnMore: "Saiba mais",
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
      intro: "O Pudding foi criado para ser leve, fofo e confiável no dia a dia.",
      cards: [
        {
          slug: "pet",
          title: "Interação com pet",
          detail: "Feedbacks leves e agradáveis durante o uso.",
          longDetail:
            "Um pet pode ficar no canto de qualquer página com seguir, alimentar e acariciar—arrastável para não cobrir o conteúdo.",
        },
        {
          slug: "translation",
          title: "Assistente de tradução",
          detail: "Traduza textos da web de forma rápida.",
          longDetail:
            "Selecione texto para tradução inline—ideal para artigos e documentos em outros idiomas sem trocar de aba.",
        },
        {
          slug: "toolbox",
          title: "Caixa de ferramentas",
          detail: "Mini ferramentas úteis em um só lugar.",
          longDetail:
            "Capturas de tela, lembretes e mini jogos em um painel, reduzindo apps e abas separados.",
        },
        {
          slug: "pomodoro",
          title: "Pomodoro",
          detail: "Mantenha um ritmo estável entre foco e pausa.",
          longDetail:
            "Pomodoro e timers integrados ajudam a equilibrar foco e pausas durante navegação e trabalho.",
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
