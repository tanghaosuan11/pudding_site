import type { Locale } from "@/app/lib/i18n";

export const featureSlugs = ["pet", "translation", "toolbox", "pomodoro"] as const;
export type FeatureSlug = (typeof featureSlugs)[number];

export type FeaturePageContent = {
  seoTitle: string;
  seoDescription: string;
  title: string;
  intro: string;
  sections: { heading: string; body: string }[];
  highlights: string[];
};

export type FeaturePagesDict = Record<FeatureSlug, FeaturePageContent>;

const zh_CN: FeaturePagesDict = {
  pet: {
    seoTitle: "Chrome 桌面宠物插件 | Pudding 浏览器宠物陪伴",
    seoDescription:
      "Pudding 让你在浏览任意网页时拥有可爱桌面宠物：轻量互动、可拖动收纳、喂食摸头，不打扰阅读与办公。免费 Chrome 扩展，官方下载。",
    title: "Chrome 桌面宠物：浏览网页时的轻量陪伴",
    intro:
      "Pudding 把桌面宠物带进浏览器——在写文章、查资料、刷社区时，角落里的宠物提供恰到好处的陪伴感，而不是分散注意力。",
    sections: [
      {
        heading: "任意网页都能陪伴",
        body: "安装 Pudding 后，宠物会出现在你打开的每个标签页中。无论是技术文档、新闻还是视频网站，它都能以轻量动画和互动反馈陪你完成手头任务。",
      },
      {
        heading: "可拖动、可收纳",
        body: "宠物支持自由拖动到屏幕角落，避免遮挡正文。需要专注时可将其收起或调低互动频率，在扩展设置中按需调整行为。",
      },
      {
        heading: "轻量互动，不打断心流",
        body: "跟随鼠标、喂食、摸头等互动设计得简短有趣，不会弹出全屏或强制打断。适合长时间面对屏幕的开发者、学生和远程办公用户。",
      },
      {
        heading: "与效率工具一体",
        body: "宠物与划词翻译、番茄钟、工具箱集成在同一扩展中，不必在多个插件之间切换。一个 Pudding，兼顾陪伴与效率。",
      },
    ],
    highlights: [
      "适用于 Chrome 114+ 与 Edge 114+",
      "Manifest V3 扩展，轻量运行",
      "免费安装，官方 Chrome 网上应用店分发",
      "多语言界面，支持中/英/日/韩/葡语",
    ],
  },
  translation: {
    seoTitle: "浏览器划词翻译插件 | Pudding Chrome 翻译助手",
    seoDescription:
      "Pudding 划词翻译：选中网页文字即可翻译，无需跳转翻译网站。适合外文阅读、技术文档与社区帖子，免费 Chrome 扩展。",
    title: "划词翻译：选中即译，留在当前页面",
    intro:
      "阅读外文内容时，最打断节奏的是不断切换标签页。Pudding 的翻译助手让你在原页面选中文字即可获得译文，保持阅读连贯性。",
    sections: [
      {
        heading: "选中文字，即时翻译",
        body: "在任意网页上用鼠标选中一段文字，Pudding 会以气泡或侧边面板展示翻译结果。适合段落级阅读，而非整页机器翻译。",
      },
      {
        heading: "降低跨语言阅读成本",
        body: "浏览 GitHub Issue、Stack Overflow、外文博客或产品文档时，遇到生僻表达可立刻查译，不必复制到外部翻译工具再粘贴回来。",
      },
      {
        heading: "与宠物场景自然结合",
        body: "翻译面板与桌面宠物同属 Pudding 扩展，界面风格统一。阅读时宠物在旁，遇到难点划词即解，体验连贯。",
      },
      {
        heading: "可配合 AI 能力扩展",
        body: "扩展支持配置 AI 服务商（可选），在基础翻译之上获得更自然的表述。具体可用能力与额度以扩展内设置为准。",
      },
    ],
    highlights: [
      "无需离开当前标签页",
      "适合文章、文档、论坛等场景",
      "与番茄钟、工具箱同一扩展",
      "隐私政策透明，可在设置中管理功能",
    ],
  },
  toolbox: {
    seoTitle: "Chrome 效率工具箱扩展 | Pudding 浏览器小工具合集",
    seoDescription:
      "Pudding 工具箱将截图、提醒、小游戏等常用能力收纳进一个 Chrome 扩展，减少切换标签和应用。配合桌面宠物与番茄钟，提升浏览效率。",
    title: "浏览器工具箱：常用能力，一个扩展搞定",
    intro:
      "日常浏览时经常需要截图、计时、小游戏放松或快速备忘。Pudding 工具箱把这些能力集中在一个面板里，减少在多个扩展和网站之间来回跳转。",
    sections: [
      {
        heading: "截图与页面工具",
        body: "在浏览过程中快速截取可见区域或所需内容，便于写文档、反馈 Bug 或保存参考信息，无需再打开系统截图后手动裁剪。",
      },
      {
        heading: "提醒与计时",
        body: "工具箱与番茄钟、闹钟模块协同，帮助你在长时间上网时保持节奏。到点提醒、休息提示均可在一处管理。",
      },
      {
        heading: "轻量小游戏放松",
        body: "工作间隙可在扩展内体验 Doodle Jump 等小游戏，短暂放松后回到正题。游戏窗口支持调节大小，不占据整个屏幕。",
      },
      {
        heading: "少装几个扩展",
        body: "每多装一个扩展，浏览器就多一分负担。Pudding 将宠物、翻译、番茄钟与工具箱整合，降低扩展栏拥挤和权限管理成本。",
      },
    ],
    highlights: [
      "截图、提醒、游戏等能力集成",
      "与 Pomodoro 模块联动",
      "统一 Pudding 面板，学习成本低",
      "持续更新，详见官网更新日志",
    ],
  },
  pomodoro: {
    seoTitle: "番茄钟浏览器插件 | Pudding Chrome 专注计时",
    seoDescription:
      "Pudding 内置番茄钟与专注计时，在浏览器中管理工作与休息节奏。配合桌面宠物与划词翻译，适合远程办公与学习场景。免费 Chrome 扩展。",
    title: "番茄钟：在浏览器里守住专注节奏",
    intro:
      "在浏览器里工作很容易一刷就是几小时。Pudding 的番茄钟帮你划分专注时段与休息时段，配合宠物陪伴，让长时间屏幕时间更有结构。",
    sections: [
      {
        heading: "经典番茄工作法",
        body: "按番茄工作法设置专注时长与短休、长休间隔。计时状态在扩展面板中清晰可见，到点会有提醒，避免无声无息地透支注意力。",
      },
      {
        heading: "与浏览场景无缝结合",
        body: "研究、写代码、读文档往往就在浏览器里完成。把番茄钟做进扩展，不必再开手机 App 或桌面软件，减少上下文切换。",
      },
      {
        heading: "宠物陪你专注",
        body: "专注过程中宠物以低干扰方式待在角落；休息时段可进行互动或查看翻译、工具箱，形成「专注—休息」的完整循环。",
      },
      {
        heading: "UI 持续优化",
        body: "Pudding 团队持续改进番茄钟、闹钟与计时器界面，并在更新日志中公开版本变化。安装后可在扩展内体验最新交互。",
      },
    ],
    highlights: [
      "专注 / 短休 / 长休可配置",
      "与翻译、工具箱同一扩展",
      "适合学生、开发者、远程办公",
      "免费从 Chrome 网上应用店安装",
    ],
  },
};

const en: FeaturePagesDict = {
  pet: {
    seoTitle: "Desktop Pet Chrome Extension | Pudding Browser Companion",
    seoDescription:
      "Pudding adds a cute desktop pet to every webpage—light interactions, drag to corner, feed and pat. Free Chrome extension. Official download.",
    title: "Desktop pet for Chrome: light company while you browse",
    intro:
      "Pudding brings a desktop pet into your browser. Whether you read docs, research, or scroll forums, a corner companion adds warmth without pulling you out of flow.",
    sections: [
      {
        heading: "On every tab you open",
        body: "After install, your pet appears on each tab—articles, docs, or video sites—with subtle animation and playful feedback as you work.",
      },
      {
        heading: "Drag, tuck away, stay out of the way",
        body: "Move the pet to any corner so it never covers content. Lower interaction frequency or tuck it away when you need deep focus.",
      },
      {
        heading: "Interactions that respect focus",
        body: "Follow, feed, and pat gestures are short and optional—no fullscreen takeovers. Built for developers, students, and remote workers at the screen all day.",
      },
      {
        heading: "One extension, pet plus productivity",
        body: "Pet, selection translate, Pomodoro, and toolbox live in one extension—no juggling multiple plugins.",
      },
    ],
    highlights: [
      "Chrome 114+ and Edge 114+",
      "Lightweight Manifest V3 extension",
      "Free on the Chrome Web Store",
      "UI in EN, ZH, JA, KO, PT-BR",
    ],
  },
  translation: {
    seoTitle: "Selection Translation Chrome Extension | Pudding Translate",
    seoDescription:
      "Translate selected text on any page without leaving the tab. Pudding is a free Chrome extension for foreign articles, docs, and forums.",
    title: "Selection translate: read without tab hopping",
    intro:
      "Switching to a translation site breaks reading rhythm. Pudding shows translations in-place when you select text—stay on the page, stay in context.",
    sections: [
      {
        heading: "Select text, get translation",
        body: "Highlight a phrase or paragraph and Pudding shows a bubble or panel with the result—ideal for paragraph reading, not noisy full-page MT.",
      },
      {
        heading: "Lower the cost of foreign content",
        body: "GitHub issues, Stack Overflow, blogs, and product docs become easier when you can look up wording instantly—no copy-paste to another tool.",
      },
      {
        heading: "Fits the pet experience",
        body: "Translation UI matches the rest of Pudding. Your pet stays nearby while you resolve language bumps in one cohesive extension.",
      },
      {
        heading: "Optional AI providers",
        body: "Configure AI services inside the extension for richer phrasing when you need it. Availability depends on your settings and quotas.",
      },
    ],
    highlights: [
      "No extra tab required",
      "Great for articles, docs, forums",
      "Same extension as Pomodoro and toolbox",
      "Transparent privacy policy and settings",
    ],
  },
  toolbox: {
    seoTitle: "Chrome Productivity Toolbox Extension | Pudding Mini Tools",
    seoDescription:
      "Screenshots, reminders, mini games, and more in one Chrome extension. Pudding toolbox cuts tab and app switching alongside your desktop pet.",
    title: "Browser toolbox: everyday tools in one place",
    intro:
      "Browsing often needs screenshots, timers, quick breaks, or notes. Pudding’s toolbox packs these into one panel instead of many separate extensions.",
    sections: [
      {
        heading: "Screenshots and page utilities",
        body: "Capture what you see for docs, bug reports, or references—without OS screenshot tools and manual cropping.",
      },
      {
        heading: "Reminders and timers",
        body: "Works with Pomodoro and alarms so long sessions stay structured. Break prompts live in the same extension.",
      },
      {
        heading: "Mini games for short breaks",
        body: "Doodle Jump and similar games for quick resets. Resize the game window—it never has to own the full screen.",
      },
      {
        heading: "Fewer extensions, less overhead",
        body: "Each extra extension adds weight. Pudding combines pet, translate, Pomodoro, and toolbox to keep the toolbar clean.",
      },
    ],
    highlights: [
      "Screenshots, reminders, games integrated",
      "Works with Pomodoro module",
      "Single Pudding panel to learn",
      "See changelog for latest updates",
    ],
  },
  pomodoro: {
    seoTitle: "Pomodoro Browser Extension | Pudding Chrome Focus Timer",
    seoDescription:
      "Pomodoro and focus timers inside your browser. Pudding helps remote workers and students balance work and breaks with a desktop pet. Free Chrome extension.",
    title: "Pomodoro: guard your focus rhythm in the browser",
    intro:
      "Hours disappear in the browser without structure. Pudding’s Pomodoro splits focus and rest—with a pet nearby, screen time feels more intentional.",
    sections: [
      {
        heading: "Classic Pomodoro cycles",
        body: "Set focus, short break, and long break intervals. Status is clear in the panel; alerts arrive when a block ends so attention doesn’t silently drain.",
      },
      {
        heading: "Built where you already work",
        body: "Research, coding, and reading happen in the browser. A built-in timer beats opening another phone app or desktop program.",
      },
      {
        heading: "Pet keeps you company",
        body: "During focus the pet stays low-key in the corner; on breaks you can interact, translate, or use toolbox tools in one loop.",
      },
      {
        heading: "Actively improved UI",
        body: "The team ships Pomodoro, alarm, and timer UI improvements regularly—check the site changelog for each release.",
      },
    ],
    highlights: [
      "Configurable focus / break blocks",
      "Same extension as translate and toolbox",
      "For students, devs, remote work",
      "Free from the Chrome Web Store",
    ],
  },
};

const ja: FeaturePagesDict = {
  pet: {
    seoTitle: "Chrome デスクトップペット拡張 | Pudding ブラウザペット",
    seoDescription:
      "Pudding で任意の Web ページにかわいいデスクトップペット。軽いインタラクション、ドラッグ移動、エサ・なでなで。無料 Chrome 拡張、公式ダウンロード。",
    title: "Chrome デスクトップペット：閲覧中の軽い寄り添い",
    intro:
      "Pudding はデスクトップペットをブラウザに持ち込みます。記事執筆、調べ物、コミュニティ閲覧の際、隅で適度な陪伴感を提供し、集中を妨げません。",
    sections: [
      {
        heading: "どのタブでも一緒",
        body: "インストール後、開いた各タブにペットが表示されます。技術文書、ニュース、動画サイトなど、作業を軽いフィードバックで支えます。",
      },
      {
        heading: "ドラッグして片付け",
        body: "画面の隅へ自由に移動でき、本文を遮りません。集中したいときは収納や反応頻度を設定で調整できます。",
      },
      {
        heading: "心の流れを壊さない",
        body: "マウス追従、エサ、なでなでは短く任意。全画面を占有せず、開発者・学生・リモートワーカー向けに設計されています。",
      },
      {
        heading: "効率ツールと一体",
        body: "選択翻訳、ポモドーロ、ツールボックスと同一拡張。複数プラグインの切り替えは不要です。",
      },
    ],
    highlights: ["Chrome 114+ / Edge 114+", "Manifest V3 で軽量", "Chrome ウェブストアで無料", "5言語 UI 対応"],
  },
  translation: {
    seoTitle: "ブラウザ選択翻訳拡張 | Pudding Chrome 翻訳アシスタント",
    seoDescription:
      "Pudding の選択翻訳：テキストを選ぶだけで訳文表示。翻訳サイトへの移動不要。外文記事・技術文書向け無料 Chrome 拡張。",
    title: "選択翻訳：ページを離れずに読む",
    intro:
      "タブを切り替えるたびに読書のリズムが崩れます。Pudding は選択した文字列の訳をその場で表示し、文脈を保ったまま読み進められます。",
    sections: [
      {
        heading: "選択して即翻訳",
        body: "任意のページで文字列を選択すると、バブルやパネルに訳が表示されます。段落単位の読解に適しています。",
      },
      {
        heading: "多言語コンテンツの壁を下げる",
        body: "GitHub Issue、Stack Overflow、外文ブログや製品ドキュメントで、わからない表現をすぐ確認できます。",
      },
      {
        heading: "ペット体験と統一 UI",
        body: "翻訳パネルは Pudding 全体とデザインが揃い、読書中もペットがそばにいる一体感があります。",
      },
      {
        heading: "AI 連携（任意）",
        body: "拡張内で AI プロバイダを設定すると、より自然な訳文が得られる場合があります。利用可否は設定と枠に依存します。",
      },
    ],
    highlights: ["タブ移動不要", "記事・文書・フォーラム向け", "ポモドーロ等と同一拡張", "プライバシーポリシー公開"],
  },
  toolbox: {
    seoTitle: "Chrome 効率ツールボックス拡張 | Pudding ミニツール集",
    seoDescription:
      "スクリーンショット、リマインダー、ミニゲームなどを Pudding の一つの Chrome 拡張に集約。デスクトップペット・ポモドーロと併用。",
    title: "ブラウザツールボックス：よく使う機能を一箇所に",
    intro:
      "スクショ、タイマー、短い休憩、メモなど、日常のブラウジングに必要な機能を一つのパネルにまとめ、拡張の乱立を防ぎます。",
    sections: [
      {
        heading: "スクリーンショットとページツール",
        body: "ドキュメント、バグ報告、参考保存のために表示内容を素早くキャプチャできます。",
      },
      {
        heading: "リマインダーとタイマー",
        body: "ポモドーロやアラームと連携し、長時間の作業でもリズムを保てます。",
      },
      {
        heading: "ミニゲームで気分転換",
        body: "Doodle Jump などで短い休憩。ウィンドウサイズを調整でき、画面全体を占有しません。",
      },
      {
        heading: "拡張を減らす",
        body: "ペット、翻訳、ポモドーロ、ツールボックスを統合し、ツールバーの負担を軽減します。",
      },
    ],
    highlights: ["スクショ・リマインダー・ゲーム統合", "ポモドーロ連携", "単一パネルで学習コスト低", "changelog で更新確認"],
  },
  pomodoro: {
    seoTitle: "ポモドーロブラウザ拡張 | Pudding Chrome 集中タイマー",
    seoDescription:
      "Pudding 内蔵ポモドーロで作業と休憩のリズムを管理。デスクトップペット・選択翻訳と併用。リモートワーク・学習向け無料 Chrome 拡張。",
    title: "ポモドーロ：ブラウザで集中リズムを守る",
    intro:
      "ブラウザ作業は気づくと何時間も続きます。Pudding のポモドーロが集中と休息を区切り、ペットと一緒に画面時間を構造化します。",
    sections: [
      {
        heading: "クラシックなポモドーロ",
        body: "集中・短休憩・長休憩の間隔を設定。パネルで状態が分かり、終了時に通知されます。",
      },
      {
        heading: "作業場所に組み込み",
        body: "調査、コーディング、読書はブラウザで完結しがち。別アプリを開かずタイマーを使えます。",
      },
      {
        heading: "ペットと一緒に集中",
        body: "集中中はペットが低干渉で隅に。休憩時にインタラクションや翻訳・ツールが使えます。",
      },
      {
        heading: "UI を継続改善",
        body: "ポモドーロ・アラーム・タイマーの UI は定期的に改善。更新履歴で各バージョンを確認できます。",
      },
    ],
    highlights: ["集中/休憩ブロック設定可", "翻訳・ツールと同一拡張", "学生・開発者・リモート向け", "Chrome ストアで無料"],
  },
};

const ko: FeaturePagesDict = {
  pet: {
    seoTitle: "Chrome 데스크톱 펫 확장 | Pudding 브라우저 펫",
    seoDescription:
      "Pudding으로 모든 웹페이지에 귀여운 데스크톱 펫. 가벼운 상호작용, 드래그 이동, 먹이주기·쓰다듬기. 무료 Chrome 확장, 공식 다운로드.",
    title: "Chrome 데스크톱 펫: 브라우징 중 가벼운 동반",
    intro:
      "Pudding은 데스크톱 펫을 브라우저로 가져옵니다. 글쓰기, 자료 조사, 커뮤니티 탐색 시 구석에서 적당한 동반감을 주며 집중을 방해하지 않습니다.",
    sections: [
      {
        heading: "열린 모든 탭에서",
        body: "설치 후 각 탭에 펫이 나타납니다. 기술 문서, 뉴스, 동영상 사이트에서 가벼운 피드백과 함께 작업할 수 있습니다.",
      },
      {
        heading: "드래그·수납",
        body: "화면 구석으로 옮겨 본문을 가리지 않습니다. 집중이 필요할 때 반응 빈도를 낮추거나 숨길 수 있습니다.",
      },
      {
        heading: "흐름을 끊지 않는 상호작용",
        body: "따라오기, 먹이주기, 쓰다듬기는 짧고 선택적입니다. 개발자, 학생, 재택 근무자를 위해 설계되었습니다.",
      },
      {
        heading: "생산성 도구와 일체",
        body: "선택 번역, 포모도로, 도구함이 하나의 확장에 있습니다. 여러 플러그인을 오갈 필요가 없습니다.",
      },
    ],
    highlights: ["Chrome 114+ / Edge 114+", "가벼운 Manifest V3", "Chrome 웹 스토어 무료", "5개 언어 UI"],
  },
  translation: {
    seoTitle: "브라우저 선택 번역 확장 | Pudding Chrome 번역 도우미",
    seoDescription:
      "Pudding 선택 번역: 텍스트를 선택하면 바로 번역. 번역 사이트 이동 불필요. 외국어 기사·기술 문서용 무료 Chrome 확장.",
    title: "선택 번역: 탭을 벗어나지 않고 읽기",
    intro:
      "번역 사이트로 이동할 때마다 읽기 리듬이 끊깁니다. Pudding은 선택한 텍스트의 번역을 페이지 안에서 보여 줍니다.",
    sections: [
      {
        heading: "선택 즉시 번역",
        body: "문단이나 구절을 선택하면 버블이나 패널에 결과가 표시됩니다. 단락 단위 읽기에 적합합니다.",
      },
      {
        heading: "다국어 콘텐츠 장벽 완화",
        body: "GitHub Issue, Stack Overflow, 외국어 블로그·문서에서 모르는 표현을 즉시 확인할 수 있습니다.",
      },
      {
        heading: "펫 경험과 통일된 UI",
        body: "번역 패널은 Pudding 전체와 디자인이 맞으며, 읽는 동안 펫이 곁에 있습니다.",
      },
      {
        heading: "AI 연동(선택)",
        body: "확장 내 AI 제공자 설정으로 더 자연스러운 번역을 얻을 수 있습니다. 가용성은 설정과 할당량에 따릅니다.",
      },
    ],
    highlights: ["추가 탭 불필요", "기사·문서·포럼에 적합", "포모도로 등과 동일 확장", "개인정보처리방침 공개"],
  },
  toolbox: {
    seoTitle: "Chrome 생산성 도구함 확장 | Pudding 미니 도구 모음",
    seoDescription:
      "스크린샷, 알림, 미니 게임 등을 Pudding 하나의 Chrome 확장에 모았습니다. 데스크톱 펫·포모도로와 함께 사용.",
    title: "브라우저 도구함: 자주 쓰는 기능 한곳에",
    intro:
      "스크린샷, 타이머, 짧은 휴식, 메모 등 일상 브라우징에 필요한 기능을 한 패널에 모아 확장 난립을 줄입니다.",
    sections: [
      {
        heading: "스크린샷·페이지 도구",
        body: "문서, 버그 리포트, 참고 자료를 위해 화면을 빠르게 캡처할 수 있습니다.",
      },
      {
        heading: "알림·타이머",
        body: "포모도로·알람과 연동해 긴 세션에서도 리듬을 유지합니다.",
      },
      {
        heading: "미니 게임으로 휴식",
        body: "Doodle Jump 등으로 짧게 쉬고 돌아올 수 있습니다. 창 크기 조절 가능.",
      },
      {
        heading: "확장 수 줄이기",
        body: "펫, 번역, 포모도로, 도구함을 통합해 툴바 부담을 줄입니다.",
      },
    ],
    highlights: ["스크린샷·알림·게임 통합", "포모도로 연동", "단일 패널", "changelog에서 업데이트 확인"],
  },
  pomodoro: {
    seoTitle: "포모도로 브라우저 확장 | Pudding Chrome 집중 타이머",
    seoDescription:
      "Pudding 내장 포모도로로 작업·휴식 리듬 관리. 데스크톱 펫·선택 번역과 함께. 재택·학습용 무료 Chrome 확장.",
    title: "포모도로: 브라우저에서 집중 리듬 지키기",
    intro:
      "브라우저에서 작업하다 보면 몇 시간이 훌쩍 지나가기 쉽습니다. Pudding 포모도로가 집중과 휴식을 나누고, 펫과 함께 화면 시간을 구조화합니다.",
    sections: [
      {
        heading: "클래식 포모도로",
        body: "집중·짧은 휴식·긴 휴식 간격을 설정합니다. 패널에서 상태를 확인하고 종료 시 알림을 받습니다.",
      },
      {
        heading: "작업 공간에 내장",
        body: "조사, 코딩, 읽기는 브라우저에서 끝나는 경우가 많습니다. 별도 앱 없이 타이머를 씁니다.",
      },
      {
        heading: "펫과 함께 집중",
        body: "집중 중 펫은 구석에서 저방해로 함께하고, 휴식 때 상호작용·번역·도구를 씁니다.",
      },
      {
        heading: "UI 지속 개선",
        body: "포모도로·알람·타이머 UI는 정기적으로 개선됩니다. 업데이트 내역에서 확인하세요.",
      },
    ],
    highlights: ["집중/휴식 블록 설정", "번역·도구와 동일 확장", "학생·개발자·재택", "Chrome 스토어 무료"],
  },
};

const pt_BR: FeaturePagesDict = {
  pet: {
    seoTitle: "Extensão pet desktop Chrome | Pudding companheiro no navegador",
    seoDescription:
      "Pudding traz um pet fofo em qualquer página: interações leves, arrastar para o canto, alimentar e acariciar. Extensão Chrome gratuita.",
    title: "Pet de desktop no Chrome: companhia leve ao navegar",
    intro:
      "O Pudding leva um pet de desktop ao navegador. Ao ler, pesquisar ou navegar em fóruns, um companheiro no canto traz calor sem tirar você do fluxo.",
    sections: [
      {
        heading: "Em cada aba aberta",
        body: "Após instalar, o pet aparece em cada aba—artigos, docs ou vídeos—com feedback leve enquanto você trabalha.",
      },
      {
        heading: "Arraste e guarde",
        body: "Mova para qualquer canto sem cobrir o conteúdo. Reduza interações ou guarde o pet quando precisar de foco profundo.",
      },
      {
        heading: "Interações que respeitam o foco",
        body: "Seguir, alimentar e acariciar são rápidos e opcionais—sem tomar a tela inteira. Para devs, estudantes e trabalho remoto.",
      },
      {
        heading: "Pet e produtividade juntos",
        body: "Pet, tradução por seleção, Pomodoro e caixa de ferramentas numa só extensão.",
      },
    ],
    highlights: ["Chrome 114+ / Edge 114+", "Manifest V3 leve", "Grátis na Chrome Web Store", "UI em 5 idiomas"],
  },
  translation: {
    seoTitle: "Extensão tradução por seleção Chrome | Assistente Pudding",
    seoDescription:
      "Traduza texto selecionado sem sair da aba. Pudding é extensão Chrome gratuita para artigos, docs e fóruns em outros idiomas.",
    title: "Tradução por seleção: leia sem trocar de aba",
    intro:
      "Ir a um site de tradução quebra o ritmo. O Pudding mostra a tradução no lugar quando você seleciona o texto.",
    sections: [
      {
        heading: "Selecione e traduza",
        body: "Destaque um trecho e o Pudding exibe bolha ou painel—ideal para leitura por parágrafos.",
      },
      {
        heading: "Menos barreira em conteúdo estrangeiro",
        body: "Issues no GitHub, Stack Overflow, blogs e docs ficam mais fáceis com consulta instantânea.",
      },
      {
        heading: "UI alinhada ao pet",
        body: "O painel de tradução combina com o resto do Pudding; o pet fica por perto enquanto você lê.",
      },
      {
        heading: "Provedores de IA opcionais",
        body: "Configure serviços de IA na extensão para frases mais naturais, conforme suas configurações.",
      },
    ],
    highlights: ["Sem aba extra", "Artigos, docs, fóruns", "Mesma extensão do Pomodoro", "Política de privacidade clara"],
  },
  toolbox: {
    seoTitle: "Extensão caixa de ferramentas Chrome | Mini ferramentas Pudding",
    seoDescription:
      "Capturas, lembretes e mini jogos numa extensão Chrome. A caixa Pudding reduz troca de abas junto com pet e Pomodoro.",
    title: "Caixa de ferramentas: utilitários do dia a dia num lugar",
    intro:
      "Navegar pede capturas, timers, pausas e notas. A caixa do Pudding reúne isso num painel em vez de várias extensões.",
    sections: [
      {
        heading: "Capturas e utilitários",
        body: "Capture a tela para docs, bugs ou referências—sem ferramentas do SO e recorte manual.",
      },
      {
        heading: "Lembretes e timers",
        body: "Integra com Pomodoro e alarmes para sessões longas com ritmo.",
      },
      {
        heading: "Mini jogos na pausa",
        body: "Doodle Jump e similares para pausas curtas, com janela redimensionável.",
      },
      {
        heading: "Menos extensões",
        body: "Pet, tradução, Pomodoro e ferramentas unificados para uma barra mais limpa.",
      },
    ],
    highlights: ["Captura, lembrete, jogos", "Integra Pomodoro", "Painel único", "Changelog com novidades"],
  },
  pomodoro: {
    seoTitle: "Extensão Pomodoro navegador | Timer foco Pudding Chrome",
    seoDescription:
      "Pomodoro e timers de foco no navegador. Pudding ajuda trabalho remoto e estudos com pet de desktop. Extensão Chrome gratuita.",
    title: "Pomodoro: ritmo de foco no navegador",
    intro:
      "Horas somem no navegador sem estrutura. O Pomodoro do Pudding divide foco e pausa; com o pet por perto, o tempo na tela fica mais intencional.",
    sections: [
      {
        heading: "Ciclos clássicos",
        body: "Configure foco, pausa curta e longa. Status claro no painel e alertas ao fim de cada bloco.",
      },
      {
        heading: "Onde você já trabalha",
        body: "Pesquisa, código e leitura acontecem no navegador. Timer embutido evita outro app.",
      },
      {
        heading: "Pet na companhia",
        body: "No foco o pet fica discreto; na pausa você interage, traduz ou usa ferramentas.",
      },
      {
        heading: "UI em evolução",
        body: "Melhorias regulares em Pomodoro, alarme e timer—veja o changelog do site.",
      },
    ],
    highlights: ["Blocos configuráveis", "Mesma extensão da tradução", "Estudantes e remoto", "Grátis na Chrome Web Store"],
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
