import type { Locale } from "@/app/lib/i18n";

export const featureSlugs = ["pet", "translation", "toolbox", "pomodoro"] as const;
export type FeatureSlug = (typeof featureSlugs)[number];

/** SEO metadata + one short on-page blurb (detail pages stay minimal). */
export type FeaturePageContent = {
  seoTitle: string;
  seoDescription: string;
  title: string;
  summary: string;
};

export type FeaturePagesDict = Record<FeatureSlug, FeaturePageContent>;

const zh_CN: FeaturePagesDict = {
  pet: {
    seoTitle: "Chrome 桌面宠物插件 | Pudding 浏览器宠物陪伴",
    seoDescription:
      "Pudding 让你在浏览任意网页时拥有可爱桌面宠物：轻量互动、可拖动收纳。免费 Chrome 扩展。",
    title: "桌面宠物",
    summary: "浏览任意网页时，角落里的宠物提供轻量陪伴，可拖动、可收纳，不挡内容。",
  },
  translation: {
    seoTitle: "浏览器划词翻译插件 | Pudding Chrome 翻译助手",
    seoDescription:
      "选中网页文字即可翻译，无需跳转翻译网站。适合外文阅读，免费 Chrome 扩展。",
    title: "划词翻译",
    summary: "选中文字即可看到译文，留在当前页面阅读。",
  },
  toolbox: {
    seoTitle: "Chrome 效率工具箱扩展 | Pudding 浏览器小工具",
    seoDescription:
      "截图、提醒与小游戏收纳在一个 Chrome 扩展里，配合桌面宠物与番茄钟使用。",
    title: "工具箱",
    summary: "常用小工具集中在一个面板，少装几个扩展。",
  },
  pomodoro: {
    seoTitle: "番茄钟浏览器插件 | Pudding Chrome 专注计时",
    seoDescription:
      "浏览器内置番茄钟，管理工作与休息节奏。免费 Chrome 扩展。",
    title: "番茄钟",
    summary: "在浏览器里设定专注与休息时段，到点提醒。",
  },
};

const en: FeaturePagesDict = {
  pet: {
    seoTitle: "Desktop Pet Chrome Extension | Pudding Browser Companion",
    seoDescription:
      "A cute desktop pet on every page—light interactions, drag to corner. Free Chrome extension.",
    title: "Desktop pet",
    summary: "A corner companion on any tab. Drag it aside when you need focus.",
  },
  translation: {
    seoTitle: "Selection Translation Chrome Extension | Pudding Translate",
    seoDescription:
      "Translate selected text without leaving the page. Free Chrome extension.",
    title: "Selection translate",
    summary: "Highlight text and read the translation in place.",
  },
  toolbox: {
    seoTitle: "Chrome Productivity Toolbox | Pudding Mini Tools",
    seoDescription:
      "Screenshots, reminders, and mini games in one Chrome extension.",
    title: "Toolbox",
    summary: "Everyday mini tools in one panel—fewer extensions to manage.",
  },
  pomodoro: {
    seoTitle: "Pomodoro Browser Extension | Pudding Focus Timer",
    seoDescription:
      "Pomodoro timer built into your browser. Free Chrome extension.",
    title: "Pomodoro",
    summary: "Set focus and break blocks with simple reminders.",
  },
};

const ja: FeaturePagesDict = {
  pet: {
    seoTitle: "Chrome デスクトップペット拡張 | Pudding",
    seoDescription: "任意のページでかわいいペットが寄り添う無料 Chrome 拡張。",
    title: "デスクトップペット",
    summary: "各タブの隅で軽く寄り添い、ドラッグで移動できます。",
  },
  translation: {
    seoTitle: "選択翻訳 Chrome 拡張 | Pudding",
    seoDescription: "テキストを選ぶだけで翻訳。無料 Chrome 拡張。",
    title: "選択翻訳",
    summary: "選択した文字の訳をその場で表示します。",
  },
  toolbox: {
    seoTitle: "効率ツールボックス Chrome 拡張 | Pudding",
    seoDescription: "スクショやミニゲームなどを一つの拡張に。",
    title: "ツールボックス",
    summary: "よく使う小ツールを一つのパネルにまとめます。",
  },
  pomodoro: {
    seoTitle: "ポモドーロ Chrome 拡張 | Pudding",
    seoDescription: "ブラウザ内蔵のポモドーロタイマー。無料。",
    title: "ポモドーロ",
    summary: "集中と休憩の時間を区切ってリマインドします。",
  },
};

const ko: FeaturePagesDict = {
  pet: {
    seoTitle: "Chrome 데스크톱 펫 확장 | Pudding",
    seoDescription: "모든 페이지에서 귀여운 펫과 함께하는 무료 Chrome 확장.",
    title: "데스크톱 펫",
    summary: "탭 구석에서 가볍게 동행하고, 드래그로 옮길 수 있습니다.",
  },
  translation: {
    seoTitle: "선택 번역 Chrome 확장 | Pudding",
    seoDescription: "텍스트를 선택해 바로 번역. 무료 Chrome 확장.",
    title: "선택 번역",
    summary: "선택한 문장의 번역을 페이지 안에서 확인합니다.",
  },
  toolbox: {
    seoTitle: "생산성 도구함 Chrome 확장 | Pudding",
    seoDescription: "스크린샷·미니게임 등을 하나의 확장에.",
    title: "도구함",
    summary: "자주 쓰는 미니 도구를 한 패널에 모았습니다.",
  },
  pomodoro: {
    seoTitle: "포모도로 Chrome 확장 | Pudding",
    seoDescription: "브라우저 내장 포모도로 타이머. 무료.",
    title: "포모도로",
    summary: "집중·휴식 시간을 나누고 알림을 받습니다.",
  },
};

const pt_BR: FeaturePagesDict = {
  pet: {
    seoTitle: "Extensão pet desktop Chrome | Pudding",
    seoDescription: "Pet fofo em qualquer página. Extensão Chrome gratuita.",
    title: "Pet de desktop",
    summary: "Companhia leve no canto da aba; arraste quando precisar de foco.",
  },
  translation: {
    seoTitle: "Tradução por seleção Chrome | Pudding",
    seoDescription: "Traduza texto selecionado sem sair da página.",
    title: "Tradução por seleção",
    summary: "Selecione o texto e leia a tradução no lugar.",
  },
  toolbox: {
    seoTitle: "Caixa de ferramentas Chrome | Pudding",
    seoDescription: "Capturas e mini jogos em uma extensão.",
    title: "Caixa de ferramentas",
    summary: "Mini ferramentas do dia a dia em um painel só.",
  },
  pomodoro: {
    seoTitle: "Extensão Pomodoro Chrome | Pudding",
    seoDescription: "Timer Pomodoro no navegador. Grátis.",
    title: "Pomodoro",
    summary: "Blocos de foco e pausa com lembretes simples.",
  },
};

export const featurePagesByLocale: Record<Locale, FeaturePagesDict> = {
  zh_CN,
  en,
  ja,
  ko,
  pt_BR,
};

export function isFeatureSlug(value: string): value is FeatureSlug {
  return (featureSlugs as readonly string[]).includes(value);
}

export function getFeaturePage(locale: Locale, slug: FeatureSlug): FeaturePageContent {
  return featurePagesByLocale[locale][slug];
}
