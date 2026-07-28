document.documentElement.classList.add("js");

const translations = {
  en: {
    "aria.home": "Soft KVM home",
    "aria.mainNavigation": "Main navigation",
    "aria.mobileNavigation": "Mobile navigation",
    "aria.language": "Language",
    "aria.screen": "Soft KVM screen",
    "aria.licenseDocuments": "License documents",
    "aria.currentRelease": "Current Soft KVM release",
    "aria.sceneStages": "Connection stages",
    "aria.secureChannel": "Authenticated encrypted channel between both PCs",
    "aria.sharePage": "Share this page",
    "nav.features": "Features",
    "nav.setup": "Setup",
    "nav.security": "Security",
    "nav.compatibility": "Compatibility",
    "nav.faq": "FAQ",
    "nav.menu": "Menu",
    "nav.download": "Download",
    "hero.eyebrow": "ONE DESK. TWO WINDOWS PCS.",
    "hero.title": "Your keyboard and mouse, on both PCs.",
    "hero.lead": "Soft KVM moves your input between two Windows PCs over your local network. No account, cloud service, or extra hardware.",
    "hero.releaseLabel": "CURRENT RELEASE",
    "hero.releaseFacts": "Windows 10/11 x64 · Single EXE · Private publisher signature",
    "hero.trustHelp": "Trust setup files:",
    "hero.signatureVerified": "Private publisher signature verified",
    "hero.hashAvailable": "SHA-256 available",
    "hero.zipDownload": "Download complete ZIP · 44 MB",
    "hero.zipHelp": "EXE and trust files in one folder",
    "hero.recommended": "RECOMMENDED",
    "hero.guide": "View setup guide",
    "hero.share": "Share page",
    "hero.linkCopied": "Link copied",
    "scene.controlPc": "CONTROL PC",
    "scene.waitPc": "WAIT PC",
    "scene.mainPc": "Main desk",
    "scene.remotePc": "Remote desk",
    "scene.controlMode": "CONTROL MODE",
    "scene.waitMode": "WAIT MODE",
    "scene.oneInput": "ONE KEYBOARD + MOUSE",
    "scene.localInput": "LOCAL INPUT → CONTROL PC",
    "scene.remoteInput": "REMOTE INPUT → WAIT PC",
    "scene.wait.title": "Wait PC is ready",
    "scene.wait.body": "Connection code 42 is shown on the remote PC.",
    "scene.code.title": "Enter the same code on Control PC",
    "scene.code.body": "Soft KVM checks that both PCs are in the same connection group.",
    "scene.connect.title": "Connected. Input remains on Control PC.",
    "scene.connect.body": "The LAN channel is ready, but keyboard and mouse control has not moved yet.",
    "scene.remote.title": "Input moves to the Wait PC",
    "scene.remote.body": "The same keyboard and mouse now control the remote desktop.",
    "tour.eyebrow": "ACTUAL APP",
    "tour.title": "Small on your desktop. Clear when you need it.",
    "tour.body": "The compact bar keeps Wait and Control one click away. Open Settings only when you need pairing, input, Swap mode, or startup options.",
    "tour.quick": "Quick bar",
    "tour.control": "Control",
    "tour.settings": "Full settings",
    "tour.captured": "BASED ON THE ACTUAL v1.5b UI",
    "tour.quickTitle": "Ready without taking over your screen",
    "tour.quickBody": "The main window stays compact until you open Settings or start a connection.",
    "tour.controlTitle": "Enter the remote PC's code and start",
    "tour.controlBody": "Control mode replaces the center of the compact bar with a code field and a clear Start action.",
    "tour.settingsTitle": "Every connection option in one place",
    "tour.settingsBody": "Pairing, monitor choice, input controls, Swap mode, startup, manual, and updates stay together.",
    "setup.eyebrow": "QUICK SETUP",
    "setup.title": "Running on both PCs in a few minutes.",
    "setup.lead": "Use the same release files on both computers. One PC waits; the other controls.",
    "setup.step1.title": "Download the release",
    "setup.step1.body": "Download the complete ZIP, or keep the EXE, certificate, and setup CMD in the same folder.",
    "setup.step2.title": "Complete trust setup once",
    "setup.step2.body": "After the first launch, approve the Soft KVM trust setup prompt.",
    "setup.step3.title": "Choose each PC's role",
    "setup.step3.body": "Select Wait on the remote PC and Control on your main PC.",
    "setup.step4.title": "Confirm and connect",
    "setup.step4.body": "Check the pairing code on both PCs, then approve the connection.",
    "download.label": "CURRENT RELEASE",
    "download.facts": "v1.5b · Windows 10/11 x64 · 111 MB · Single EXE · Private publisher signature",
    "download.exeAction": "Download EXE · 111 MB",
    "download.trustFiles": "One-time trust setup files",
    "download.trustHelp": "Keep both files in the same folder as the EXE for first launch.",
    "download.bundleAction": "Download complete ZIP · 44 MB",
    "download.bundleContents": "EXE, checksum, trust setup, and documents",
    "download.hashFile": "Checksum file",
    "download.copyHash": "Copy",
    "download.copiedHash": "Copied",
    "download.released": "Released",
    "download.releaseNotes": "Release notes",
    "download.allFiles": "View all release files",
    "security.eyebrow": "SECURITY",
    "security.title": "Local control protected by encryption and mutual verification.",
    "security.lead": "Captured traffic is designed to remain unreadable, while tampered or replayed messages are rejected.",
    "security.channel.pair": "PAIR",
    "security.channel.ecdh": "ECDH",
    "security.channel.verify": "VERIFY",
    "security.pair.title": "Verified pairing",
    "security.pair.body": "Both PCs must show and approve the same pairing code before first control.",
    "security.encrypt.title": "Encrypted input",
    "security.encrypt.body": "Keyboard and mouse traffic travels through an authenticated ECDH/AES-GCM channel.",
    "security.update.title": "Verified updates",
    "security.update.body": "Updates must pass SHA-256 and pinned publisher signature checks before installation.",
    "security.subnet.title": "Local-subnet firewall boundary",
    "security.subnet.body": "Generated firewall rules accept connections only from the Windows LocalSubnet scope.",
    "security.note.title": "Built for trusted local networks",
    "security.note.body": "Do not expose Soft KVM discovery or listening ports directly to the internet.",
    "security.note.link": "Read the security model",
    "license.eyebrow": "LICENSE",
    "license.title": "Free for personal use. Licensed for business.",
    "license.lead": "Soft KVM is free for personal and non-commercial use. Business, organizational, and work-related use requires a paid license.",
    "license.contactLabel": "BUSINESS LICENSE CONTACT",
    "license.terms": "License terms",
    "license.privacy": "Privacy notice",
    "license.install": "Installation guide",
    "license.loading": "Loading document...",
    "license.loadError": "Could not load this document. Use the complete ZIP or release files to read it.",
    "compat.eyebrow": "COMPATIBILITY",
    "compat.title": "Check the environment before connecting.",
    "compat.lead": "Soft KVM is focused on direct control between two Windows PCs on a trusted local network.",
    "compat.network.title": "Same local network",
    "compat.network.body": "Both PCs must be connected to the same trusted LAN. Internet relay and port forwarding are not supported.",
    "compat.windows.title": "Windows x64 on both PCs",
    "compat.windows.body": "Use Windows 10 or 11 x64 and the same Soft KVM version on both computers.",
    "compat.games.title": "Anti-cheat restrictions",
    "compat.games.body": "Games that block synthetic Windows input through anti-cheat are not supported.",
    "compat.uac.title": "UAC control requires elevation",
    "compat.uac.body": "Enable Control UAC screens on the Wait PC and approve the Windows elevation prompt.",
    "compat.recovery.title": "Firewall and reconnection",
    "compat.recovery.body": "Allow Windows Defender Firewall access for the local network. After a disconnect, return to Wait and Control, then connect again.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Before you download.",
    "faq.internet.q": "Can I control a PC over the internet?",
    "faq.internet.a": "Soft KVM is designed for trusted local networks. Do not expose its ports through your router.",
    "faq.dotnet.q": "Do I need to install .NET?",
    "faq.dotnet.a": "No. The public Windows x64 build is self-contained.",
    "faq.game.q": "Does it work with games?",
    "faq.game.a": "Game input mode supports many games and 3D apps. Games that block Windows synthetic input through anti-cheat are not supported.",
    "faq.smartscreen.q": "Why can Windows SmartScreen appear?",
    "faq.smartscreen.a": "Soft KVM currently uses a private publisher certificate, not a paid public code-signing certificate. Check the official release source before running it.",
    "final.title": "Keep both PCs within reach.",
    "final.download": "Download for Windows",
    "footer.tagline": "Local keyboard and mouse sharing for Windows.",
    "footer.contact": "Contact",
    "footer.license": "License",
    "footer.privacy": "Privacy",
    "footer.release": "Release v1.5b"
  },
  ko: {
    "aria.home": "Soft KVM 홈",
    "aria.mainNavigation": "주요 메뉴",
    "aria.mobileNavigation": "모바일 메뉴",
    "aria.language": "언어",
    "aria.screen": "Soft KVM 화면",
    "aria.licenseDocuments": "라이선스 문서",
    "aria.currentRelease": "현재 Soft KVM 릴리즈",
    "aria.sceneStages": "연결 단계",
    "aria.secureChannel": "두 PC 사이의 인증된 암호화 채널",
    "aria.sharePage": "이 페이지 공유",
    "nav.features": "기능",
    "nav.setup": "설치",
    "nav.security": "보안",
    "nav.compatibility": "호환성",
    "nav.faq": "FAQ",
    "nav.menu": "메뉴",
    "nav.download": "다운로드",
    "hero.eyebrow": "책상 하나, WINDOWS PC 두 대",
    "hero.title": "키보드와 마우스 하나로 두 PC를 제어하세요.",
    "hero.lead": "Soft KVM은 같은 로컬 네트워크의 Windows PC 두 대 사이에서 키보드와 마우스 입력을 전환합니다. 계정, 클라우드 서비스, 추가 장비가 필요하지 않습니다.",
    "hero.releaseLabel": "현재 릴리즈",
    "hero.releaseFacts": "Windows 10/11 x64 · 단일 EXE · 개인 게시자 서명",
    "hero.trustHelp": "신뢰 설정 파일:",
    "hero.signatureVerified": "개인 게시자 서명 확인",
    "hero.hashAvailable": "SHA-256 제공",
    "hero.zipDownload": "전체 ZIP 다운로드 · 44MB",
    "hero.zipHelp": "EXE와 신뢰 설정 파일을 한 폴더에 포함",
    "hero.recommended": "권장",
    "hero.guide": "설치 방법 보기",
    "hero.share": "공유",
    "hero.linkCopied": "링크 복사됨",
    "scene.controlPc": "CONTROL PC",
    "scene.waitPc": "WAIT PC",
    "scene.mainPc": "주 작업 PC",
    "scene.remotePc": "원격 PC",
    "scene.controlMode": "CONTROL MODE",
    "scene.waitMode": "WAIT MODE",
    "scene.oneInput": "키보드·마우스 하나",
    "scene.localInput": "로컬 입력 → CONTROL PC",
    "scene.remoteInput": "원격 입력 → WAIT PC",
    "scene.wait.title": "Wait PC가 대기합니다",
    "scene.wait.body": "제어받을 PC에 연결 코드 42가 표시됩니다.",
    "scene.code.title": "Control PC에 같은 코드를 입력합니다",
    "scene.code.body": "Soft KVM이 두 PC의 연결 그룹과 코드를 확인합니다.",
    "scene.connect.title": "연결됐지만 입력은 아직 Control PC에 있습니다",
    "scene.connect.body": "LAN 채널만 준비된 상태이며 키보드와 마우스 제어는 아직 이동하지 않았습니다.",
    "scene.remote.title": "입력이 Wait PC로 이동합니다",
    "scene.remote.body": "같은 키보드와 마우스로 원격 화면을 제어합니다.",
    "tour.eyebrow": "실제 앱 화면",
    "tour.title": "평소에는 작게, 필요할 때는 명확하게.",
    "tour.body": "작은 바에서 Wait와 Control을 바로 선택합니다. 페어링, 입력, Swap mode, 시작 옵션이 필요할 때만 Settings를 엽니다.",
    "tour.quick": "빠른 실행 바",
    "tour.control": "Control",
    "tour.settings": "전체 설정",
    "tour.captured": "실제 v1.5b UI 기반",
    "tour.quickTitle": "화면을 차지하지 않는 준비 상태",
    "tour.quickBody": "Settings를 열거나 연결을 시작하기 전까지 메인 창은 작게 유지됩니다.",
    "tour.controlTitle": "상대 PC 코드를 입력하고 시작",
    "tour.controlBody": "Control mode에서는 작은 바 중앙이 코드 입력란으로 바뀌고 오른쪽에서 바로 Start를 누를 수 있습니다.",
    "tour.settingsTitle": "연결 옵션을 한 화면에",
    "tour.settingsBody": "페어링, 모니터, 입력 제어, Swap mode, 자동 시작, 설명서와 업데이트를 함께 관리합니다.",
    "setup.eyebrow": "빠른 설치",
    "setup.title": "몇 분이면 두 PC에서 사용할 수 있습니다.",
    "setup.lead": "두 컴퓨터에서 같은 릴리즈 파일을 사용합니다. 한쪽은 대기하고, 다른 쪽에서 제어합니다.",
    "setup.step1.title": "릴리즈 파일 다운로드",
    "setup.step1.body": "전체 ZIP을 받거나 EXE, 인증서, 설치 CMD를 같은 폴더에 둡니다.",
    "setup.step2.title": "신뢰 설정 1회 완료",
    "setup.step2.body": "최초 실행 후 Soft KVM 신뢰 설정 안내를 승인합니다.",
    "setup.step3.title": "각 PC 역할 선택",
    "setup.step3.body": "제어받을 PC는 Wait, 주 PC는 Control을 선택합니다.",
    "setup.step4.title": "확인 후 연결",
    "setup.step4.body": "양쪽 PC의 페어링 코드를 확인하고 연결을 승인합니다.",
    "download.label": "현재 릴리즈",
    "download.facts": "v1.5b · Windows 10/11 x64 · 111MB · 단일 EXE · 개인 게시자 서명",
    "download.exeAction": "EXE 다운로드 · 111MB",
    "download.trustFiles": "최초 1회 신뢰 설정 파일",
    "download.trustHelp": "최초 실행을 위해 두 파일을 EXE와 같은 폴더에 두세요.",
    "download.bundleAction": "전체 ZIP 다운로드 · 44MB",
    "download.bundleContents": "EXE, 체크섬, 신뢰 설정, 문서 포함",
    "download.hashFile": "체크섬 파일",
    "download.copyHash": "복사",
    "download.copiedHash": "복사됨",
    "download.released": "릴리즈",
    "download.releaseNotes": "변경 내역",
    "download.allFiles": "전체 릴리즈 파일 보기",
    "security.eyebrow": "보안",
    "security.title": "암호화와 상호 인증으로 보호되는 안전한 로컬 제어.",
    "security.lead": "패킷을 가로채더라도 입력 내용을 읽기 어렵고, 변조되거나 재전송된 메시지는 거부되도록 설계했습니다.",
    "security.channel.pair": "페어링",
    "security.channel.ecdh": "키 교환",
    "security.channel.verify": "검증",
    "security.pair.title": "검증된 페어링",
    "security.pair.body": "최초 제어 전 양쪽 PC에 같은 페어링 코드가 표시되는지 확인하고 승인합니다.",
    "security.encrypt.title": "입력 암호화",
    "security.encrypt.body": "키보드와 마우스 입력은 인증된 ECDH/AES-GCM 채널로 전송됩니다.",
    "security.update.title": "업데이트 검증",
    "security.update.body": "업데이트는 SHA-256과 고정된 게시자 서명 검증을 통과해야 설치됩니다.",
    "security.subnet.title": "로컬 서브넷 방화벽 경계",
    "security.subnet.body": "생성되는 방화벽 규칙은 Windows LocalSubnet 범위의 연결만 허용합니다.",
    "security.note.title": "신뢰할 수 있는 로컬 네트워크용",
    "security.note.body": "Soft KVM 검색 및 수신 포트를 인터넷에 직접 노출하지 마십시오.",
    "security.note.link": "보안 모델 보기",
    "license.eyebrow": "라이선스",
    "license.title": "개인 사용은 무료, 기업·업무용 사용은 유료입니다.",
    "license.lead": "Soft KVM은 개인 및 비상업적 사용에 무료입니다. 기업·기관 및 업무 목적 사용에는 유료 라이선스가 필요합니다.",
    "license.contactLabel": "기업 라이선스 문의",
    "license.terms": "라이선스 이용 조건",
    "license.privacy": "개인정보 안내",
    "license.install": "설치 안내",
    "license.loading": "문서를 불러오는 중...",
    "license.loadError": "문서를 불러오지 못했습니다. 전체 ZIP 또는 릴리즈 파일에서 확인하세요.",
    "compat.eyebrow": "호환성 및 알려진 제한",
    "compat.title": "연결 전에 사용 환경을 확인하세요.",
    "compat.lead": "Soft KVM은 신뢰할 수 있는 로컬 네트워크에서 Windows PC 두 대를 직접 제어하는 용도에 맞춰져 있습니다.",
    "compat.network.title": "같은 로컬 네트워크",
    "compat.network.body": "두 PC가 같은 신뢰할 수 있는 LAN에 연결되어 있어야 합니다. 인터넷 중계와 포트 포워딩은 지원하지 않습니다.",
    "compat.windows.title": "두 PC 모두 Windows x64",
    "compat.windows.body": "Windows 10 또는 11 x64와 동일한 Soft KVM 버전을 두 컴퓨터에서 사용하세요.",
    "compat.games.title": "안티치트 제한",
    "compat.games.body": "Windows 합성 입력을 차단하는 안티치트 게임은 지원하지 않습니다.",
    "compat.uac.title": "UAC 제어에는 권한 상승 필요",
    "compat.uac.body": "Wait PC에서 UAC 화면 제어를 켜고 Windows 권한 상승 요청을 승인해야 합니다.",
    "compat.recovery.title": "방화벽 및 재연결",
    "compat.recovery.body": "Windows Defender 방화벽의 로컬 네트워크 접근을 허용하세요. 연결이 끊기면 Wait와 Control 상태로 돌아가 다시 연결합니다.",
    "faq.eyebrow": "자주 묻는 질문",
    "faq.title": "다운로드 전 확인하세요.",
    "faq.internet.q": "인터넷을 거쳐 제어할 수 있나요?",
    "faq.internet.a": "Soft KVM은 신뢰할 수 있는 로컬 네트워크용입니다. 라우터를 통해 포트를 외부에 노출하지 마십시오.",
    "faq.dotnet.q": ".NET을 별도로 설치해야 하나요?",
    "faq.dotnet.a": "아니요. 공개 Windows x64 빌드는 필요한 런타임을 포함합니다.",
    "faq.game.q": "게임에서도 사용할 수 있나요?",
    "faq.game.a": "Game input mode로 여러 게임과 3D 앱을 지원합니다. Windows 합성 입력을 차단하는 안티치트 게임은 지원하지 않습니다.",
    "faq.smartscreen.q": "Windows SmartScreen이 왜 표시될 수 있나요?",
    "faq.smartscreen.a": "현재 Soft KVM은 유료 공인 코드서명 인증서가 아닌 개인 게시자 인증서를 사용합니다. 실행 전 공식 릴리즈 출처를 확인하십시오.",
    "final.title": "두 PC를 손끝에 두세요.",
    "final.download": "Windows용 다운로드",
    "footer.tagline": "Windows용 로컬 키보드·마우스 공유 도구.",
    "footer.contact": "문의",
    "footer.license": "라이선스",
    "footer.privacy": "개인정보",
    "footer.release": "릴리즈 v1.5b"
  }
};

const languageButtons = document.querySelectorAll("[data-lang]");
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const translatableElements = document.querySelectorAll("[data-i18n]");
const translatableAriaElements = document.querySelectorAll("[data-i18n-aria-label]");
const description = document.querySelector('meta[name="description"]');
const shotButtons = document.querySelectorAll("[data-shot]");
const kvmScene = document.querySelector("[data-kvm-scene]");
const controlSurface = document.querySelector("[data-control-surface]");
const waitSurface = document.querySelector("[data-wait-surface]");
const sceneButtons = document.querySelectorAll("[data-scene-index]");
const inputTarget = document.querySelector("[data-input-target]");
const tourSurface = document.querySelector("[data-tour-surface]");
const tourTitle = document.querySelector("[data-tour-title]");
const tourBody = document.querySelector("[data-tour-body]");
const hashCopyButton = document.querySelector("[data-copy-hash]");
const sharePageButtons = document.querySelectorAll("[data-share-page]");
const documentButtons = document.querySelectorAll("[data-doc-trigger]");
const documentPanel = document.querySelector("[data-doc-panel]");
const documentPanelWrap = document.querySelector("#license-document-panel");
const documentPanelTitle = document.querySelector("[data-doc-title]");
const documentPanelClose = document.querySelector("[data-doc-close]");
const documentCache = new Map();
let currentDocumentKey = "";

document.querySelectorAll("[data-technical-grid]").forEach((grid) => {
  const cells = document.createDocumentFragment();
  for (let index = 0; index < 96; index += 1) {
    cells.append(document.createElement("span"));
  }
  grid.append(cells);
});

const heroKeyboard = document.querySelector("[data-hero-keyboard]");
if (heroKeyboard) {
  const keys = document.createDocumentFragment();
  for (let index = 0; index < 43; index += 1) {
    keys.append(document.createElement("span"));
  }
  heroKeyboard.append(keys);
}

const shotContent = {
  home: {
    titleKey: "tour.quickTitle",
    bodyKey: "tour.quickBody",
    label: {
      en: "Soft KVM compact quick bar",
      ko: "Soft KVM 빠른 실행 바"
    }
  },
  control: {
    titleKey: "tour.controlTitle",
    bodyKey: "tour.controlBody",
    label: {
      en: "Soft KVM Control code entry",
      ko: "Soft KVM Control 코드 입력 화면"
    }
  },
  settings: {
    titleKey: "tour.settingsTitle",
    bodyKey: "tour.settingsBody",
    label: {
      en: "Soft KVM full settings panel",
      ko: "Soft KVM 전체 설정 화면"
    }
  }
};
let currentLanguage = "en";
let currentShot = "home";

function toggleMarkup(label, enabled = true, checked = false) {
  return `
    <span class="demo-option ${enabled ? "" : "is-disabled"}">
      <span>${label}</span>
      <i class="demo-toggle ${checked ? "is-on" : ""}" aria-hidden="true"><b></b></i>
    </span>
  `;
}

function createSoftKvmMarkup(state) {
  const isControl = state === "control";
  const isWaiting = state === "wait";
  const isConnected = state === "connected";
  const showSettings = state === "settings";

  if (state === "wait-flow" || state === "control-flow") {
    const settingsButton = `<span class="demo-settings-button" aria-label="Settings">⚙</span>`;
    const defaultToolbar = `
      ${settingsButton}
      <span class="demo-wait-button">Wait</span>
      <span class="demo-control-button">Control</span>
    `;
    const resultToolbar = state === "wait-flow"
      ? `
        <span class="demo-code-display">42</span>
        <span class="demo-wait-button">Stop</span>
        <span class="demo-control-button is-disabled">Control</span>
      `
      : `
        ${settingsButton}
        <span class="demo-code-entry demo-code-entry-flow"><b><span>42</span></b><i>x</i></span>
        <span class="demo-control-button">Start</span>
      `;

    return `
      <div class="softkvm-demo state-${state}">
        <div class="demo-titlebar">
          <span class="demo-app-title"><img src="assets/softkvm-icon.ico" alt="">Soft KVM</span>
          <span class="demo-window-actions" aria-hidden="true"><i></i><i></i><i></i></span>
        </div>
        <div class="demo-toolbar demo-flow-toolbar">
          <div class="demo-flow-step flow-default">${defaultToolbar}</div>
          <div class="demo-flow-step flow-result">${resultToolbar}</div>
        </div>
      </div>
    `;
  }

  return `
    <div class="softkvm-demo state-${state} ${showSettings ? "show-settings" : ""}">
      <div class="demo-titlebar">
        <span class="demo-app-title"><img src="assets/softkvm-icon.ico" alt="">Soft KVM</span>
        <span class="demo-window-actions" aria-hidden="true"><i></i><i></i><i></i></span>
      </div>
      <div class="demo-toolbar">
        ${isWaiting
          ? `<span class="demo-code-display">42</span>`
          : `<span class="demo-settings-button" aria-label="Settings">⚙</span>`}
        ${isConnected
          ? `<span class="demo-control-button">Stop</span><span class="demo-pause-button">Pause</span>`
          : `${isControl
            ? `<span class="demo-code-entry"><b>42</b><i>×</i></span>`
            : `<span class="demo-wait-button">${isWaiting ? "Stop" : "Wait"}</span>`}
            <span class="demo-control-button ${isWaiting ? "is-disabled" : ""}">${isControl ? "Start" : "Control"}</span>`}
      </div>
      ${showSettings ? `
        <div class="demo-settings-body">
          <section class="demo-group demo-pair-group">
            <label>Connection group <span class="demo-input">SoftKVM</span></label>
            <label>Pairing <strong class="demo-warning">Not paired</strong></label>
            <label>Monitor: <span class="demo-select">Monitor 1&nbsp; 2560×1440 <i>▾</i></span><span class="demo-action">Refresh</span></label>
          </section>
          <section class="demo-group demo-simultaneous">
            <h4>Simultaneous control</h4>
            <div>${toggleMarkup("Keyboard control", false, true)}${toggleMarkup("Mouse control", false, true)}</div>
            <div>${toggleMarkup("Block local key", false)}${toggleMarkup("Block local clicks", false)}</div>
          </section>
          <div class="demo-inline-options">
            ${toggleMarkup("Game input mode")}
            <span class="demo-check"><i>✓</i>Control UAC screens</span>
          </div>
          <section class="demo-group demo-swap">
            <h4><span class="demo-check"><i>✓</i>Swap mode</span></h4>
            <label>Control direction: <span class="demo-select">Left <i>▾</i></span></label>
            <label>Swap time: <span class="demo-select">1 s <i>▾</i></span></label>
          </section>
          <div class="demo-startup">
            <span class="demo-check"><i>✓</i>Start with Windows</span>
            <span class="demo-check"><i></i>Minimize while waiting</span>
          </div>
          <p class="demo-command">Commands: hold K+M for 1 second&nbsp; / &nbsp;Emergency: E</p>
          <div class="demo-footer">
            <span>Manual</span>
            <span class="demo-action">Check for updates</span>
            <small>Soft KVM v1.5b</small>
          </div>
        </div>
      ` : ""}
    </div>
  `;
}

function renderSoftKvmSurface(surface, state) {
  surface.innerHTML = createSoftKvmMarkup(state);
  surface.dataset.state = state;
}

const sceneStates = [
  {
    id: "wait",
    control: "home",
    wait: "wait-flow",
    titleKey: "scene.wait.title",
    bodyKey: "scene.wait.body"
  },
  {
    id: "code",
    control: "control-flow",
    wait: "wait",
    titleKey: "scene.code.title",
    bodyKey: "scene.code.body"
  },
  {
    id: "connect",
    control: "connected",
    wait: "wait",
    titleKey: "scene.connect.title",
    bodyKey: "scene.connect.body"
  },
  {
    id: "remote",
    control: "connected",
    wait: "wait",
    titleKey: "scene.remote.title",
    bodyKey: "scene.remote.body"
  }
];
let currentSceneIndex = 0;
let sceneTimerId = null;

function renderHeroScene(index) {
  const scene = sceneStates[index];
  const dictionary = translations[currentLanguage] || translations.en;

  kvmScene.dataset.stage = scene.id;
  renderSoftKvmSurface(controlSurface, scene.control);
  renderSoftKvmSurface(waitSurface, scene.wait);
  sceneButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(Number(button.dataset.sceneIndex) === index));
  });
  inputTarget.textContent = dictionary[scene.id === "remote" ? "scene.remoteInput" : "scene.localInput"];
  kvmScene.setAttribute("aria-label", `${dictionary[scene.titleKey]}. ${dictionary[scene.bodyKey]}`);
}

function updateTourCopy() {
  const dictionary = translations[currentLanguage] || translations.en;
  const content = shotContent[currentShot];

  tourTitle.textContent = dictionary[content.titleKey];
  tourBody.textContent = dictionary[content.bodyKey];
  tourSurface.setAttribute("aria-label", content.label[currentLanguage] || content.label.en);
}

function setLanguage(language) {
  const dictionary = translations[language] || translations.en;
  currentLanguage = language;

  document.documentElement.lang = language;
  translatableElements.forEach((element) => {
    if (element.matches("[data-doc-panel]") && currentDocumentKey) {
      return;
    }

    const value = dictionary[element.dataset.i18n];
    if (value) {
      element.textContent = value;
    }
  });
  translatableAriaElements.forEach((element) => {
    const value = dictionary[element.dataset.i18nAriaLabel];
    if (value) {
      element.setAttribute("aria-label", value);
    }
  });

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === language));
  });

  document.title = language === "ko"
    ? "Soft KVM - 키보드와 마우스 하나로 Windows PC 두 대 제어"
    : "Soft KVM - Control two Windows PCs with one keyboard and mouse";
  description.content = language === "ko"
    ? "같은 로컬 네트워크의 Windows PC 두 대를 키보드와 마우스 하나로 제어하세요. 계정, 클라우드, 중계 서버가 필요하지 않습니다."
    : "Control two Windows PCs on the same local network with one keyboard and mouse. No account, cloud, or relay server required.";

  renderHeroScene(currentSceneIndex);
  updateTourCopy();
  if (currentDocumentKey) {
    const activeButton = document.querySelector(`[data-doc-trigger="${currentDocumentKey}"]`);
    documentPanelTitle.textContent = dictionary[activeButton.dataset.docTitleKey];
  }
  localStorage.setItem("softkvm-language", language);
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

hashCopyButton.addEventListener("click", async () => {
  const label = hashCopyButton.querySelector("[data-copy-label]");
  const dictionary = translations[currentLanguage] || translations.en;

  try {
    await copyText(hashCopyButton.dataset.copyHash);
    label.textContent = dictionary["download.copiedHash"];
    window.setTimeout(() => {
      label.textContent = (translations[currentLanguage] || translations.en)["download.copyHash"];
    }, 1600);
  }
  catch {
    label.textContent = dictionary["download.copyHash"];
  }
});

sharePageButtons.forEach((sharePageButton) => {
  sharePageButton.addEventListener("click", async () => {
    const label = sharePageButton.querySelector("[data-share-label]");
    const defaultLabelKey = label.dataset.i18n;
    const dictionary = translations[currentLanguage] || translations.en;
    const shareData = {
      title: document.title,
      text: dictionary["hero.lead"],
      url: window.location.href.split("#")[0]
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await copyText(shareData.url);
      label.textContent = dictionary["hero.linkCopied"];
      window.setTimeout(() => {
        const currentDictionary = translations[currentLanguage] || translations.en;
        label.textContent = currentDictionary[defaultLabelKey];
      }, 1600);
    }
    catch {
      label.textContent = dictionary[defaultLabelKey];
    }
  });
});

function closeLicenseDocument() {
  currentDocumentKey = "";
  documentPanelWrap.hidden = true;
  documentButtons.forEach((button) => {
    button.setAttribute("aria-expanded", "false");
    button.lastElementChild.textContent = "+";
  });
}

async function openLicenseDocument(button) {
  const dictionary = translations[currentLanguage] || translations.en;
  const documentKey = button.dataset.docTrigger;

  if (currentDocumentKey === documentKey && !documentPanelWrap.hidden) {
    closeLicenseDocument();
    return;
  }

  currentDocumentKey = documentKey;
  documentPanelWrap.hidden = false;
  documentPanelTitle.textContent = dictionary[button.dataset.docTitleKey];
  documentPanel.textContent = dictionary["license.loading"];
  documentButtons.forEach((item) => {
    const isActive = item === button;
    item.setAttribute("aria-expanded", String(isActive));
    item.lastElementChild.textContent = isActive ? "-" : "+";
  });

  try {
    if (!documentCache.has(documentKey)) {
      const response = await fetch(button.dataset.docSource);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      documentCache.set(documentKey, await response.text());
    }
    documentPanel.textContent = documentCache.get(documentKey);
  }
  catch {
    documentPanel.textContent = dictionary["license.loadError"];
  }
}

documentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openLicenseDocument(button);
  });
});

documentPanelClose.addEventListener("click", closeLicenseDocument);

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

function closeMobileMenu() {
  mobileMenu.hidden = true;
  mobileMenuToggle.setAttribute("aria-expanded", "false");
}

mobileMenuToggle.addEventListener("click", () => {
  const willOpen = mobileMenu.hidden;
  mobileMenu.hidden = !willOpen;
  mobileMenuToggle.setAttribute("aria-expanded", String(willOpen));
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !mobileMenu.hidden) {
    closeMobileMenu();
    mobileMenuToggle.focus();
  }
});

document.addEventListener("pointerdown", (event) => {
  if (!mobileMenu.hidden && !mobileMenu.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
    closeMobileMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1120) {
    closeMobileMenu();
  }
});

shotButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const nextShot = button.dataset.shot;
    if (!shotContent[nextShot] || nextShot === currentShot) {
      return;
    }

    currentShot = nextShot;
    shotButtons.forEach((item) => {
      item.setAttribute("aria-pressed", String(item.dataset.shot === currentShot));
    });

    tourSurface.classList.add("is-changing");
    window.setTimeout(() => {
      renderSoftKvmSurface(tourSurface, currentShot);
      updateTourCopy();
      tourSurface.classList.remove("is-changing");
    }, 180);
  });
});

sceneButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (sceneTimerId !== null) {
      window.clearInterval(sceneTimerId);
      sceneTimerId = null;
    }

    currentSceneIndex = Number(button.dataset.sceneIndex);
    renderHeroScene(currentSceneIndex);
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

renderSoftKvmSurface(tourSurface, "home");
renderHeroScene(currentSceneIndex);

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  sceneTimerId = window.setInterval(() => {
    currentSceneIndex = (currentSceneIndex + 1) % sceneStates.length;
    renderHeroScene(currentSceneIndex);
  }, 3200);
}

setLanguage(localStorage.getItem("softkvm-language") || "en");
