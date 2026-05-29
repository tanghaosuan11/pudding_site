import type { Locale } from "@/app/lib/i18n";

export type PrivacySection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type PrivacyPolicy = {
  title: string;
  effectiveDateLabel: string;
  date: string;
  intro: string;
  sections: PrivacySection[];
};

/** Shared extension sections — inserted after "data categories" in each locale. */
const extensionTechnicalZh: PrivacySection[] = [
  {
    heading: "4. 权限与本地存储",
    paragraphs: [
      "为实现功能，本扩展申请并使用 Chrome 权限（包括但不限于 storage、alarms、tabs、scripting、notifications，以及对各网站的 host 访问）。我们会在你访问的网页上注入内容脚本，用于展示桌面宠物、划词翻译等界面。",
      "以下类型数据默认保存在你浏览器内的 chrome.storage.local，不会自动同步到我们的账号系统：",
    ],
    list: [
      "扩展设置与偏好（含隐私开关、界面语言等）；",
      "番茄钟、笔记、小游戏进度等效率相关数据；",
      "聊天会话记录（若你使用对话功能）；",
      "窗口位置、引导状态等界面状态。",
    ],
  },
  {
    heading: "5. 远程 AI 与 Agent 服务",
    paragraphs: [
      "本扩展的翻译、对话等 AI 能力通过你配置或默认的 Pudding Agent 服务端（serverUrl，例如生产环境的 Agent API）处理，而非仅在本地完成推理。",
      "当你主动使用上述功能时，扩展可能向该服务发送：",
    ],
    list: [
      "你选中的文本、输入的对话内容，以及完成功能所必需的最小上下文；",
      "功能类型标识（如 translation）、界面语言等元数据；",
      "安装标识（X-Install-Id）或你填写的激活码 / 服务密钥，用于鉴权、用量与防滥用（未配置时可能使用匿名占位标识）。",
    ],
  },
  {
    heading: "6. 扩展内隐私设置",
    paragraphs: [
      "扩展「设置 → 数据隐私」提供开关（默认关闭），与 Chrome 网上应用店的数据使用声明一致：",
    ],
    list: [
      "允许云端 LLM：关闭时不应向远程 Agent 发送数据，相关 AI 功能不可用或受限；",
      "分析页面内容：关闭时宠物与 AI 不应读取当前页面的正文内容用于建议；",
      "完整政策见 https://puddpet.com/zh_CN/privacy（各语言路径见网站语言切换）。",
    ],
  },
];

const extensionTechnicalEn: PrivacySection[] = [
  {
    heading: "4. Permissions and local storage",
    paragraphs: [
      "The Extension requests Chrome permissions including storage, alarms, tabs, scripting, notifications, and host access to websites. Content scripts may run on pages you visit to show the pet overlay, selection translation, and similar UI.",
      "By default, the following stay in chrome.storage.local on your device and are not synced to our account systems:",
    ],
    list: [
      "Extension settings and preferences (including privacy toggles and UI language);",
      "Pomodoro, notes, mini-game state, and other productivity data;",
      "Chat session history if you use conversational features;",
      "Window positions, onboarding state, and other UI state.",
    ],
  },
  {
    heading: "5. Remote AI and Agent service",
    paragraphs: [
      "Translation, chat, and other AI features are processed through the Pudding Agent service endpoint you configure (serverUrl), not solely on-device inference.",
      "When you use these features, the Extension may send to that service:",
    ],
    list: [
      "Text you select or type, plus the minimum context needed to complete the request;",
      "Metadata such as feature type (e.g. translation) and UI language;",
      "An install identifier (X-Install-Id) or activation / service key you provide, for authentication, quotas, and abuse prevention (an anonymous placeholder may be used if none is configured).",
    ],
  },
  {
    heading: "6. In-extension privacy controls",
    paragraphs: [
      "Under Settings → Data Privacy, toggles default to off and align with our Chrome Web Store disclosures:",
    ],
    list: [
      "Allow cloud LLM: when off, data should not be sent to the remote Agent and related AI features are unavailable or limited;",
      "Analyze page content: when off, the pet and AI should not read page body text for suggestions;",
      "Full policy: https://puddpet.com/en/privacy (other locales via the site language menu).",
    ],
  },
];

const extensionTechnicalJa: PrivacySection[] = [
  {
    heading: "4. 権限とローカル保存",
    paragraphs: [
      "本拡張は storage、alarms、tabs、scripting、notifications および各サイトへの host 権限などを使用します。訪問ページにコンテンツスクリプトを注入し、ペット表示や選択翻訳などを提供します。",
      "次のデータは原則 chrome.storage.local に保存され、当社のアカウントシステムへ自動同期されません：",
    ],
    list: [
      "設定・プライバシー関連の項目・UI 言語；",
      "ポモドーロ、メモ、ミニゲームの状態；",
      "会話機能利用時のチャット履歴；",
      "ウィンドウ位置、オンボーディング状態など。",
    ],
  },
  {
    heading: "5. リモート AI と Agent サービス",
    paragraphs: [
      "翻訳・会話などの AI 機能は、設定または既定の Pudding Agent（serverUrl）で処理されます。利用時に送信され得る情報：",
    ],
    list: [
      "選択または入力したテキストと、機能に必要な最小コンテキスト；",
      "機能種別（translation 等）、UI 言語などのメタデータ；",
      "X-Install-Id または有効化コード／サービスキー（未設定時は匿名プレースホルダーの可能性）。",
    ],
  },
  {
    heading: "6. 拡張内のプライバシー設定",
    paragraphs: ["設定 → データプライバシーの項目は既定でオフです："],
    list: [
      "クラウド LLM を許可：オフ時はリモート Agent へ送信せず、関連 AI 機能は利用不可または制限；",
      "ページ内容を分析：オフ時はページ本文を AI／ペットが読み取らない；",
      "全文：https://puddpet.com/ja/privacy",
    ],
  },
];

const extensionTechnicalKo: PrivacySection[] = [
  {
    heading: "4. 권한 및 로컬 저장",
    paragraphs: [
      "본 확장은 storage, alarms, tabs, scripting, notifications 및 사이트 host 권한 등을 사용하며, 방문 페이지에 콘텐츠 스크립트를 주입해 펫·번역 UI를 제공합니다.",
      "다음 데이터는 기본적으로 chrome.storage.local에 저장되며 당사 계정 시스템과 자동 동기화되지 않습니다:",
    ],
    list: [
      "설정·개인정보 항목·UI 언어;",
      "포모도로, 메모, 미니게임 상태;",
      "대화 기능 사용 시 채팅 기록;",
      "창 위치, 온보딩 상태 등.",
    ],
  },
  {
    heading: "5. 원격 AI 및 Agent 서비스",
    paragraphs: [
      "번역·대화 등 AI 기능은 설정 또는 기본 Pudding Agent(serverUrl)에서 처리됩니다. 사용 시 전송될 수 있는 정보:",
    ],
    list: [
      "선택·입력한 텍스트 및 필요한 최소 맥락;",
      "기능 유형(translation 등), UI 언어 등 메타데이터;",
      "X-Install-Id 또는 활성화 코드·서비스 키(미설정 시 익명 placeholder 가능).",
    ],
  },
  {
    heading: "6. 확장 내 개인정보 설정",
    paragraphs: ["설정 → 데이터 개인정보 항목은 기본 꺼짐:"],
    list: [
      "클라우드 LLM 허용: 끄면 원격 Agent 전송 없음, 관련 AI 제한;",
      "페이지 내용 분석: 끄면 페이지 본문을 AI/펫이 읽지 않음;",
      "전문: https://puddpet.com/ko/privacy",
    ],
  },
];

const extensionTechnicalPt: PrivacySection[] = [
  {
    heading: "4. Permissões e armazenamento local",
    paragraphs: [
      "A Extensão usa permissões do Chrome (storage, alarms, tabs, scripting, notifications, acesso a sites) e scripts de conteúdo nas páginas visitadas para o pet e tradução por seleção.",
      "Por padrão, estes dados ficam em chrome.storage.local e não são sincronizados com contas nossas:",
    ],
    list: [
      "Configurações e preferências (incluindo privacidade e idioma);",
      "Pomodoro, notas, estado de mini-jogos;",
      "Histórico de chat, se usar conversa;",
      "Posição de janelas e estado de onboarding.",
    ],
  },
  {
    heading: "5. IA remota e serviço Agent",
    paragraphs: [
      "Tradução, chat e outras funções de IA passam pelo endpoint Pudding Agent (serverUrl) configurado, não só no dispositivo.",
      "Ao usar essas funções, a Extensão pode enviar:",
    ],
    list: [
      "Texto selecionado ou digitado e o contexto mínimo necessário;",
      "Metadados (tipo de função, idioma da UI);",
      "Identificador de instalação (X-Install-Id) ou chave de ativação/serviço para autenticação e cotas.",
    ],
  },
  {
    heading: "6. Controles de privacidade na Extensão",
    paragraphs: ["Em Configurações → Privacidade de Dados, os interruptores vêm desligados por padrão:"],
    list: [
      "Permitir LLM na nuvem: desligado — sem envio ao Agent remoto; recursos de IA limitados;",
      "Analisar conteúdo da página: desligado — sem leitura do corpo da página para sugestões;",
      "Política completa: https://puddpet.com/pt_BR/privacy",
    ],
  },
];

function tailSections(
  use: "zh" | "en" | "ja" | "ko" | "pt",
): PrivacySection[] {
  const tails: Record<typeof use, PrivacySection[]> = {
    zh: [
      {
        heading: "7. 我们如何使用信息",
        paragraphs: ["我们使用上述信息用于："],
        list: [
          "提供与维护扩展功能（宠物陪伴、翻译、工具箱、番茄钟、提醒等）；",
          "在获得必要授权时，通过 Agent 服务完成 AI 推理；",
          "改进产品体验与稳定性；",
          "统计本网站的下载来源与页面表现（匿名或聚合层面）；",
          "响应你的支持请求。",
        ],
      },
      {
        heading: "8. 数据共享与出售",
        paragraphs: [
          "我们不会出售你的个人数据。",
          "我们不会将数据用于与扩展核心功能无关的目的。",
          "我们不会将数据用于信用评估或放贷。",
          "Agent 服务端由我们或你自行部署的基础设施运营；除完成功能所必需外，我们不会向无关第三方出售或共享你的内容。",
          "仅在以下情形可能进一步披露：遵守法律法规、保护用户与公众安全、经你明确同意，或与服务提供商（如托管）在必要范围内合作且其受保密义务约束。",
        ],
      },
      {
        heading: "9. 存储与安全",
        paragraphs: [
          "本网站不长期存储可识别个人身份的账户数据。",
          "扩展偏好与记录主要保存在本机浏览器；发送至 Agent 的请求由该服务端按其日志与安全策略处理（我们采取合理措施限制访问与保留时间）。",
          "我们采取合理的技术与管理措施降低未授权访问风险，但无法保证绝对安全。",
        ],
      },
      {
        heading: "10. 你的选择与权利",
        paragraphs: ["你可以："],
        list: [
          "在扩展设置中管理「允许云端 LLM」「分析页面内容」等开关；",
          "在浏览器中卸载本扩展以停止扩展侧数据处理；",
          "在浏览器设置中管理扩展权限；",
          "通过下方联系方式咨询、更正或删除你向我们主动提交的信息（如适用）。",
        ],
      },
      {
        heading: "11. 未成年人",
        paragraphs: ["本扩展不面向未满法定年龄的儿童主动推广。若你认为我们误收了未成年人信息，请联系我们处理。"],
      },
      {
        heading: "12. 政策更新",
        paragraphs: [
          "我们可能不时更新本政策。更新后会在本页修改生效日期；重大变更时，我们可能通过网站或扩展内提示。",
        ],
      },
      {
        heading: "13. 联系我们",
        paragraphs: ["如对本政策有疑问，请联系：", "邮箱：sajshuai@163.com"],
      },
    ],
    en: [
      {
        heading: "7. How we use information",
        paragraphs: ["We use information to:"],
        list: [
          "Provide and maintain Extension features (pet, translation, toolbox, Pomodoro, reminders);",
          "Complete AI inference via the Agent service when authorized;",
          "Improve product experience and reliability;",
          "Measure download sources and Site performance (anonymous or aggregated where possible);",
          "Respond to support requests.",
        ],
      },
      {
        heading: "8. Sharing and sale of data",
        paragraphs: [
          "We do not sell your personal data.",
          "We do not use data for purposes unrelated to the Extension’s core functionality.",
          "We do not use data to determine creditworthiness or for lending purposes.",
          "The Agent service runs on infrastructure we or you configure; we do not sell your content to unrelated third parties beyond what is needed to provide features.",
          "We may disclose when required by law, to protect users and the public, with your explicit consent, or with service providers under confidentiality obligations.",
        ],
      },
      {
        heading: "9. Storage and security",
        paragraphs: [
          "The Site does not maintain long-term identifiable account data.",
          "Extension preferences and records stay on your device; requests sent to the Agent are handled per that service’s logging and security practices.",
          "We apply reasonable safeguards, but no method of transmission or storage is 100% secure.",
        ],
      },
      {
        heading: "10. Your choices and rights",
        paragraphs: ["You may:"],
        list: [
          "Use in-extension toggles for cloud LLM and page content analysis;",
          "Uninstall the Extension to stop Extension-side processing;",
          "Manage Extension permissions in browser settings;",
          "Contact us about information you submitted to us directly, where applicable.",
        ],
      },
      {
        heading: "11. Children",
        paragraphs: [
          "The Extension is not directed at children below the applicable legal age. Contact us if you believe we have received a child’s information in error.",
        ],
      },
      {
        heading: "12. Changes to this policy",
        paragraphs: [
          "We may update this policy from time to time. The effective date on this page will be revised; material changes may be communicated via the Site or the Extension.",
        ],
      },
      {
        heading: "13. Contact",
        paragraphs: ["Questions about this policy:", "Email: sajshuai@163.com"],
      },
    ],
    ja: [
      {
        heading: "7. 利用目的",
        paragraphs: ["情報は次の目的で利用します："],
        list: [
          "拡張機能の提供・維持（ペット、翻訳、ツール、ポモドーロなど）；",
          "許可された場合の Agent 経由 AI 処理；",
          "体験・安定性の改善；",
          "ダウンロード経路の統計（匿名・集計）；",
          "サポート対応。",
        ],
      },
      {
        heading: "8. 共有と販売",
        paragraphs: [
          "個人データを販売しません。核心機能と無関係な目的・信用・融資には使用しません。",
          "Agent は当社またはユーザー設定のインフラで運用し、機能提供に必要な範囲を超えてコンテンツを販売しません。",
          "法令、安全、同意、守秘義務のある提供者との必要最小限の開示に限る場合があります。",
        ],
      },
      {
        heading: "9. 保存とセキュリティ",
        paragraphs: [
          "本サイトは長期の識別可能アカウントデータを保持しません。",
          "拡張の設定・記録は主に端末内；Agent への送信は当該サービスのログ・安全方針に従います。",
        ],
      },
      {
        heading: "10. ユーザーの選択",
        paragraphs: ["拡張内の設定、アンインストール、ブラウザ権限、お問い合わせにより対応できます。"],
      },
      {
        heading: "11. 未成年者",
        paragraphs: ["法定年齢未満の児童を対象としていません。"],
      },
      {
        heading: "12. ポリシーの変更",
        paragraphs: ["本ページの発効日を改定する場合があります。"],
      },
      {
        heading: "13. お問い合わせ",
        paragraphs: ["メール：sajshuai@163.com"],
      },
    ],
    ko: [
      {
        heading: "7. 이용 목적",
        paragraphs: ["다음 목적으로 사용합니다:"],
        list: [
          "확장 기능 제공·유지;",
          "허용 시 Agent 경유 AI 처리;",
          "제품 개선;",
          "다운로드 통계;",
          "지원 응대.",
        ],
      },
      {
        heading: "8. 공유 및 판매",
        paragraphs: [
          "개인 데이터를 판매하지 않으며, 무관한 목적·신용·대출에 사용하지 않습니다.",
          "Agent는 당사 또는 사용자 인프라에서 운영되며, 기능 제공 범위를 넘어 콘텐츠를 판매하지 않습니다.",
        ],
      },
      {
        heading: "9. 보관 및 보안",
        paragraphs: [
          "본 사이트는 장기 식별 계정 데이터를 보관하지 않습니다.",
          "확장 설정·기록은 주로 기기 내; Agent 전송은 해당 서비스 정책을 따릅니다.",
        ],
      },
      {
        heading: "10. 이용자 선택권",
        paragraphs: ["확장 내 설정, 제거, 브라우저 권한, 문의로 대응할 수 있습니다."],
      },
      {
        heading: "11. 미성년자",
        paragraphs: ["법정 연령 미만 아동을 대상으로 하지 않습니다."],
      },
      {
        heading: "12. 방침 변경",
        paragraphs: ["시행일을 업데이트할 수 있습니다."],
      },
      {
        heading: "13. 문의",
        paragraphs: ["이메일: sajshuai@163.com"],
      },
    ],
    pt: [
      {
        heading: "7. Como usamos as informações",
        paragraphs: ["Usamos as informações para:"],
        list: [
          "Fornecer recursos da Extensão (pet, tradução, ferramentas, Pomodoro);",
          "Processamento de IA via Agent quando autorizado;",
          "Melhorar o produto;",
          "Estatísticas de download;",
          "Suporte.",
        ],
      },
      {
        heading: "8. Compartilhamento e venda",
        paragraphs: [
          "Não vendemos dados pessoais nem usamos para fins não relacionados, crédito ou empréstimos.",
          "O Agent opera em infraestrutura nossa ou configurada por você, sem venda de conteúdo a terceiros além do necessário.",
        ],
      },
      {
        heading: "9. Armazenamento e segurança",
        paragraphs: [
          "O Site não mantém contas identificáveis a longo prazo.",
          "Preferências da Extensão ficam no dispositivo; pedidos ao Agent seguem as práticas desse serviço.",
        ],
      },
      {
        heading: "10. Suas escolhas",
        paragraphs: ["Interruptores na Extensão, desinstalar, permissões do navegador ou contato."],
      },
      {
        heading: "11. Crianças",
        paragraphs: ["Não é direcionado a menores abaixo da idade legal."],
      },
      {
        heading: "12. Alterações",
        paragraphs: ["Podemos atualizar esta política e a data nesta página."],
      },
      {
        heading: "13. Contato",
        paragraphs: ["E-mail: sajshuai@163.com"],
      },
    ],
  };
  return tails[use];
}

const policies: Record<Locale, PrivacyPolicy> = {
  zh_CN: {
    title: "隐私政策",
    effectiveDateLabel: "生效日期",
    date: "2026-05-29",
    intro:
      "本政策说明 Pudding 官方网站（以下简称「本网站」）与 Pudding 浏览器扩展（以下简称「本扩展」）如何处理相关信息。本政策与 Chrome 网上应用店中关于本扩展的数据使用披露一致。使用本网站或安装本扩展，即表示你已阅读并理解本政策。",
    sections: [
      {
        heading: "1. 适用范围",
        paragraphs: [
          "本政策适用于通过本网站提供的展示、下载引导服务，以及你安装使用的 Pudding Chrome 扩展。",
          "若你仅使用扩展而未访问本网站，请重点阅读第 3 节及之后与扩展相关的条款。",
        ],
      },
      {
        heading: "2. 本网站收集的信息",
        paragraphs: ["本网站为轻量静态站点，不要求注册或登录。我们可能处理："],
        list: [
          "访问与下载跳转的技术日志（例如来源页面参数、时间、目标链接），用于统计安装转化；",
          "浏览器与设备的基础技术信息（如 User-Agent、语言偏好），由托管服务商（如 Vercel）在提供服务时自动记录；",
          "你主动通过邮件联系我们时提供的信息。",
        ],
      },
      {
        heading: "3. 本扩展访问的数据类别",
        paragraphs: [
          "根据 Chrome 网上应用店披露，本扩展可能访问以下类别的数据，并仅在提供功能所必需的范围内使用：",
        ],
        list: [
          "浏览历史（Web history）：用于页面感知、快捷访问、上下文相关提示等；",
          "用户活动（User activity）：用于宠物互动、提醒、番茄钟、标签页状态等；",
          "网站内容（Website content）：用于划词翻译、截图、阅读辅助，以及在开启「分析页面内容」时用于宠物建议。",
        ],
      },
      ...extensionTechnicalZh,
      ...tailSections("zh"),
    ],
  },
  en: {
    title: "Privacy Policy",
    effectiveDateLabel: "Effective date",
    date: "2026-05-29",
    intro:
      "This policy explains how the Pudding official website (the “Site”) and the Pudding browser extension (the “Extension”) handle information. It aligns with our Chrome Web Store data-use disclosures for the Extension.",
    sections: [
      {
        heading: "1. Scope",
        paragraphs: [
          "This policy applies to the Site and your use of the Pudding Chrome extension.",
          "If you only use the Extension, focus on Sections 3 onward.",
        ],
      },
      {
        heading: "2. Information collected on the Site",
        paragraphs: ["The Site is a lightweight static site with no account registration. We may process:"],
        list: [
          "Technical logs for download redirects (e.g. source parameters, timestamp, destination);",
          "Basic technical data (e.g. User-Agent, language) logged by our hosting provider (e.g. Vercel);",
          "Information you voluntarily send when contacting us by email.",
        ],
      },
      {
        heading: "3. Data categories accessed by the Extension",
        paragraphs: [
          "As disclosed on the Chrome Web Store, the Extension may access the following, only as needed:",
        ],
        list: [
          "Web history — page awareness, quick access, contextual features;",
          "User activity — pet interaction, reminders, Pomodoro, tab-related state;",
          "Website content — selection translation, screenshots, reading help, and (when enabled) page analysis for pet suggestions.",
        ],
      },
      ...extensionTechnicalEn,
      ...tailSections("en"),
    ],
  },
  ja: {
    title: "プライバシーポリシー",
    effectiveDateLabel: "発効日",
    date: "2026-05-29",
    intro:
      "本ポリシーは Pudding 公式サイトおよびブラウザ拡張機能の情報取扱いを説明し、Chrome ウェブストアのデータ使用開示と一致します。",
    sections: [
      {
        heading: "1. 適用範囲",
        paragraphs: [
          "本サイトの案内および本拡張の利用に適用されます。拡張のみ利用する場合は第 3 節以降をご確認ください。",
        ],
      },
      {
        heading: "2. 本サイトで収集する情報",
        paragraphs: ["本サイトは静的サイトで登録不要です。以下を処理する場合があります："],
        list: [
          "ダウンロードリダイレクトの技術ログ；",
          "ホスティング提供者（例：Vercel）の基本技術ログ；",
          "お問い合わせメールの情報。",
        ],
      },
      {
        heading: "3. 本拡張がアクセスするデータカテゴリ",
        paragraphs: ["Chrome ウェブストアの開示に基づくカテゴリ："],
        list: [
          "閲覧履歴（Web history）；",
          "ユーザーアクティビティ（User activity）；",
          "ウェブサイトのコンテンツ（Website content）。",
        ],
      },
      ...extensionTechnicalJa,
      ...tailSections("ja"),
    ],
  },
  ko: {
    title: "개인정보처리방침",
    effectiveDateLabel: "시행일",
    date: "2026-05-29",
    intro:
      "본 방침은 Pudding 공식 사이트와 브라우저 확장의 정보 처리를 설명하며 Chrome 웹 스토어 공개와 일치합니다.",
    sections: [
      {
        heading: "1. 적용 범위",
        paragraphs: ["본 사이트 및 본 확장 사용에 적용됩니다. 확장만 사용 시 제 3절 이후를 참고하세요."],
      },
      {
        heading: "2. 본 사이트에서 수집하는 정보",
        paragraphs: ["정적 사이트이며 계정 가입이 필요하지 않습니다."],
        list: [
          "다운로드 리다이렉트 기술 로그;",
          "호스팅 제공자(예: Vercel) 기본 기술 정보;",
          "문의 이메일 정보.",
        ],
      },
      {
        heading: "3. 본 확장이 접근하는 데이터 유형",
        paragraphs: ["Chrome 웹 스토어 공개 유형:"],
        list: [
          "웹 기록(Web history);",
          "사용자 활동(User activity);",
          "웹사이트 콘텐츠(Website content).",
        ],
      },
      ...extensionTechnicalKo,
      ...tailSections("ko"),
    ],
  },
  pt_BR: {
    title: "Política de Privacidade",
    effectiveDateLabel: "Data de vigência",
    date: "2026-05-29",
    intro:
      "Esta política descreve o Site e a Extensão Pudding e está alinhada às divulgações de uso de dados na Chrome Web Store.",
    sections: [
      {
        heading: "1. Escopo",
        paragraphs: [
          "Aplica-se ao Site e à Extensão Pudding para Chrome. Se usar só a Extensão, veja da Seção 3 em diante.",
        ],
      },
      {
        heading: "2. Informações no Site",
        paragraphs: ["Site estático, sem cadastro. Podemos processar:"],
        list: [
          "Logs de redirecionamento de download;",
          "Dados técnicos do provedor (ex.: Vercel);",
          "E-mail de contato voluntário.",
        ],
      },
      {
        heading: "3. Categorias de dados da Extensão",
        paragraphs: ["Conforme a Chrome Web Store:"],
        list: [
          "Histórico da web (Web history);",
          "Atividade do usuário (User activity);",
          "Conteúdo de sites (Website content).",
        ],
      },
      ...extensionTechnicalPt,
      ...tailSections("pt"),
    ],
  },
};

export function getPrivacyPolicy(locale: Locale): PrivacyPolicy {
  return policies[locale];
}
