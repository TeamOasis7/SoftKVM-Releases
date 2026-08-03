document.documentElement.classList.add("js");
const configuredPageLanguage = document.documentElement.dataset.pageLang || "";
const softKvmIconPath = document.documentElement.dataset.iconPath || "assets/softkvm-icon.ico";

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
    "nav.compare": "Compare",
    "nav.compatibility": "Compatibility",
    "nav.faq": "FAQ",
    "nav.menu": "Menu",
    "nav.download": "Download",
    "hero.eyebrow": "ONE DESK. TWO WINDOWS PCS.",
    "hero.title": "Control two Windows PCs with one keyboard and mouse.",
    "hero.lead": "Soft KVM is a Windows software KVM that moves keyboard and mouse input between two PCs over your local network. No account, cloud service, or extra hardware.",
    "hero.releaseLabel": "CURRENT RELEASE",
    "hero.releaseFacts": "Windows 10/11 x64 · Single EXE · Private publisher signature",
    "hero.trustNote": "Windows SmartScreen may appear on first download. Verify the official GitHub release and SHA-256 before running.",
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
    "scene.connect.title": "Connected. Simultaneous control starts when Swap mode is off.",
    "scene.connect.body": "With Swap mode on, input remains on the Control PC until the configured edge is activated.",
    "scene.remote.title": "Swap mode moves control to the Wait PC",
    "scene.remote.body": "Holding the configured edge for the selected time transfers keyboard and mouse control.",
    "tour.eyebrow": "ACTUAL APP",
    "tour.title": "Keyboard and mouse sharing without cloud accounts.",
    "tour.body": "The compact bar keeps Wait and Control one click away. Open Settings only when you need pairing, input, Swap mode, or startup options.",
    "tour.quick": "Quick bar",
    "tour.control": "Control",
    "tour.settings": "Full settings",
    "tour.captured": "CURRENT DEVELOPMENT UI PREVIEW",
    "tour.quickTitle": "Ready without taking over your screen",
    "tour.quickBody": "The main window stays compact until you open Settings or start a connection.",
    "tour.controlTitle": "Enter the remote PC's code and start",
    "tour.controlBody": "Control mode replaces the center of the compact bar with a code field and a clear Start action.",
    "tour.settingsTitle": "Every connection option in one place",
    "tour.settingsBody": "Pairing, monitor choice, input controls, Swap mode, startup, manual, and updates stay together.",
    "setup.eyebrow": "QUICK SETUP",
    "setup.title": "Set up local Windows PC control in a few minutes.",
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
    "download.facts": "v1.7b · Windows 10/11 x64 · 111 MB · Single EXE · Private publisher signature",
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
    "aria.securityGates": "Three security gates before input control",
    "aria.gatesChannel": "Local authenticated encryption",
    "gates.eyebrow": "THREE CHECKS. ONE SECURE CONNECTION.",
    "gates.title": "Three Security Gates.",
    "gates.lead": "Three checks before input control. No cloud relay. Only approved PCs continue to a local, authenticated encrypted channel.",
    "gates.group.technical": "Connection group",
    "gates.group.title": "Discover only the intended group",
    "gates.group.body": "Soft KVM searches only for PCs using the same connection group on the local network.",
    "gates.code.technical": "Rotating code",
    "gates.code.title": "Verify every connection",
    "gates.code.body": "The two-digit code shown on the Wait PC must match before the connection can continue.",
    "gates.pair.technical": "Verified pairing",
    "gates.pair.title": "Both PCs approve",
    "gates.pair.body": "On first connection, confirm the same six-digit code and approve the pairing on both PCs.",
    "gates.channel.zeroCloud": "ZERO CLOUD RELAY",
    "gates.channel.handshake": "Signed P-256 ECDH handshake",
    "gates.channel.encryption": "AES-256-GCM encrypted input",
    "gates.channel.summary": "Three checks before control. One authenticated, encrypted channel after.",
    "security.eyebrow": "SECURITY",
    "security.title": "Encrypted keyboard and mouse input with mutual verification.",
    "security.lead": "Captured traffic is designed to remain unreadable, while tampered or replayed messages are rejected.",
    "security.channel.pair": "PAIR",
    "security.channel.ecdh": "ECDH",
    "security.channel.verify": "VERIFY",
    "security.pair.title": "Verified pairing",
    "security.pair.body": "Both PCs must show and approve the same pairing code before first control.",
    "security.encrypt.title": "Encrypted input",
    "security.encrypt.body": "Keyboard and mouse traffic travels through a mutually authenticated P-256 ECDH/AES-256-GCM channel.",
    "security.update.title": "Verified updates",
    "security.update.body": "Updates must pass SHA-256 and pinned publisher signature checks before installation.",
    "security.subnet.title": "Local-subnet firewall boundary",
    "security.subnet.body": "Generated firewall rules accept connections only from the Windows LocalSubnet scope.",
    "security.note.title": "Built for trusted local networks",
    "security.note.body": "Do not expose Soft KVM discovery or listening ports directly to the internet.",
    "security.note.link": "Read the security model",
    "compare.eyebrow": "COMPARE",
    "compare.title": "A software KVM for local Windows desks.",
    "compare.lead": "Soft KVM is built for people who want one keyboard and mouse across two nearby Windows PCs without a hardware switch, remote desktop session, cloud relay, or account.",
    "compare.hardware.title": "Compared with a hardware KVM",
    "compare.hardware.body": "No USB or HDMI switching box is required. Both PCs stay on the network and Soft KVM moves only keyboard and mouse input.",
    "compare.remote.title": "Compared with Remote Desktop",
    "compare.remote.body": "Soft KVM does not stream the screen or log in to a remote session. You keep using each PC's own monitor.",
    "compare.synergy.title": "Compared with Synergy or Barrier",
    "compare.synergy.body": "Soft KVM focuses on two Windows PCs, local-subnet discovery, verified pairing, encrypted input, and a compact WinForms interface.",
    "compare.mouse.title": "Compared with Mouse Without Borders",
    "compare.mouse.body": "Soft KVM is designed around direct role selection, explicit pairing confirmation, and no account or cloud service requirement.",
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
    "compat.title": "Works on Windows 10/11 x64 over a trusted local network.",
    "compat.lead": "Soft KVM is focused on direct control between two Windows PCs on a trusted local network.",
    "compat.network.title": "Same local network",
    "compat.network.body": "Both PCs must be connected to the same trusted LAN. Internet relay and port forwarding are not supported.",
    "compat.windows.title": "Windows 10/11 x64",
    "compat.windows.body": "Use Windows 10 or 11 x64 and the same Soft KVM version on both computers.",
    "compat.games.title": "Anti-cheat restrictions",
    "compat.games.body": "Games that block synthetic Windows input through anti-cheat are not supported.",
    "compat.uac.title": "UAC requires elevation",
    "compat.uac.body": "Enable Control UAC screens on the Wait PC and approve the Windows elevation prompt.",
    "compat.recovery.title": "Firewall and reconnection",
    "compat.recovery.body": "Allow Windows Defender Firewall access for the local network. After a disconnect, the waiting PC stays in Wait with a new code. Return the controlling PC to Control and reconnect with that code.",
    "faq.eyebrow": "FAQ",
    "faq.title": "Before you download.",
    "faq.internet.q": "Can I control a PC over the internet?",
    "faq.internet.a": "Soft KVM is designed for trusted local networks. Do not expose its ports through your router.",
    "faq.dotnet.q": "Do I need to install .NET?",
    "faq.dotnet.a": "No. The public Windows x64 build is self-contained.",
    "faq.game.q": "Does it work with games?",
    "faq.game.a": "Game precision mode supports many games and 3D apps. Games that block Windows synthetic input through anti-cheat are not supported.",
    "faq.smartscreen.q": "Why can Windows SmartScreen appear?",
    "faq.smartscreen.a": "Soft KVM currently uses a private publisher certificate, not a paid public code-signing certificate. Check the official release source before running it.",
    "faq.share.q": "Can I share one mouse and keyboard between two Windows PCs?",
    "faq.share.a": "Yes. Soft KVM is built for keyboard and mouse sharing between two Windows 10/11 x64 PCs on the same trusted local network.",
    "faq.alternative.q": "Is Soft KVM a Synergy or Barrier alternative for Windows?",
    "faq.alternative.a": "It is a practical alternative for controlling two Windows PCs over a local network with verified pairing and no cloud account.",
    "faq.cloud.q": "Does Soft KVM need the internet or a cloud relay?",
    "faq.cloud.a": "No. Discovery and input transfer are designed for the local network. Internet relay, account sign-in, and port forwarding are not required.",
    "final.title": "Control two Windows PCs with one keyboard and mouse.",
    "final.download": "Download for Windows",
    "footer.tagline": "Local keyboard and mouse sharing for Windows.",
    "footer.contact": "Contact",
    "footer.license": "License",
    "footer.privacy": "Privacy",
    "footer.release": "Release v1.7b"
  },
  ja: {
    "aria.home": "Soft KVM ホーム",
    "aria.mainNavigation": "メインナビゲーション",
    "aria.mobileNavigation": "モバイルナビゲーション",
    "aria.language": "言語",
    "aria.screen": "Soft KVM の画面",
    "aria.licenseDocuments": "ライセンス文書",
    "aria.currentRelease": "現在の Soft KVM リリース",
    "aria.sceneStages": "接続ステージ",
    "aria.secureChannel": "2台のPC間の認証済み暗号化チャネル",
    "aria.sharePage": "このページを共有",
    "nav.features": "機能",
    "nav.setup": "セットアップ",
    "nav.security": "セキュリティ",
    "nav.compare": "比較",
    "nav.compatibility": "互換性",
    "nav.faq": "FAQ",
    "nav.menu": "メニュー",
    "nav.download": "ダウンロード",
    "hero.eyebrow": "ひとつのデスク。2台の WINDOWS PC。",
    "hero.title": "キーボードとマウス1組で、2台のWindows PCを操作。",
    "hero.lead": "Soft KVMは、同じローカルネットワーク上の2台のWindows PC間でキーボードとマウス入力を切り替えるソフトウェアKVMです。アカウント、クラウドサービス、追加のハードウェアは不要です。",
    "hero.releaseLabel": "現在のリリース",
    "hero.releaseFacts": "Windows 10/11 x64 · 単一EXE · プライベート発行者証明書で署名",
    "hero.trustNote": "初回ダウンロード時にWindows SmartScreenが表示される場合があります。実行前に公式GitHubリリースとSHA-256を確認してください。",
    "hero.trustHelp": "信頼設定ファイル:",
    "hero.signatureVerified": "プライベート発行者証明書の署名を確認済み",
    "hero.hashAvailable": "SHA-256を提供",
    "hero.zipDownload": "一式ZIPをダウンロード · 44 MB",
    "hero.zipHelp": "EXEと信頼設定ファイルを同じフォルダーに同梱",
    "hero.recommended": "推奨",
    "hero.guide": "セットアップを見る",
    "hero.share": "共有",
    "hero.linkCopied": "リンクをコピーしました",
    "scene.controlPc": "CONTROL PC",
    "scene.waitPc": "WAIT PC",
    "scene.mainPc": "メインPC",
    "scene.remotePc": "リモートPC",
    "scene.controlMode": "CONTROL MODE",
    "scene.waitMode": "WAIT MODE",
    "scene.oneInput": "キーボード + マウス 1組",
    "scene.localInput": "ローカル入力 → CONTROL PC",
    "scene.remoteInput": "リモート入力 → WAIT PC",
    "scene.wait.title": "Wait PC が待機します",
    "scene.wait.body": "操作対象のPCに接続コード42が表示されます。",
    "scene.code.title": "Control PC に同じコードを入力",
    "scene.code.body": "Soft KVMが2台のPCの接続グループとコードを確認します。",
    "scene.connect.title": "接続完了。Swap modeがオフの場合は同時制御が始まります。",
    "scene.connect.body": "Swap modeがオンの場合、設定した画面端が作動するまで入力はControl PC側に残ります。",
    "scene.remote.title": "Swap modeで操作がWait PCへ移ります",
    "scene.remote.body": "設定した画面端で選択時間保持すると、キーボードとマウスの操作が移ります。",
    "tour.eyebrow": "実際のアプリ",
    "tour.title": "クラウドアカウントなしでキーボードとマウスを共有。",
    "tour.body": "小さなバーから Wait と Control をすぐ選べます。ペアリング、入力、Swap mode、起動オプションが必要な時だけ Settings を開きます。",
    "tour.quick": "クイックバー",
    "tour.control": "Control",
    "tour.settings": "全設定",
    "tour.captured": "現在の開発版UIプレビュー",
    "tour.quickTitle": "画面を占有しない準備状態",
    "tour.quickBody": "Settings を開くか接続を開始するまで、メインウィンドウは小さく保たれます。",
    "tour.controlTitle": "リモートPCのコードを入力して開始",
    "tour.controlBody": "Control modeでは、小さなバーの中央がコード入力欄になり、Startを押して接続できます。",
    "tour.settingsTitle": "接続オプションを1か所に集約",
    "tour.settingsBody": "ペアリング、モニター選択、入力制御、Swap mode、自動起動、マニュアル、アップデートをまとめて管理できます。",
    "setup.eyebrow": "クイックセットアップ",
    "setup.title": "数分で、ローカルのWindows PCの操作を始められます。",
    "setup.lead": "2台のPCで同じリリースファイルを使います。一方を待機側、もう一方を操作側にします。",
    "setup.step1.title": "リリースをダウンロード",
    "setup.step1.body": "一式ZIPをダウンロードするか、EXE、証明書、セットアップCMDを同じフォルダーに置きます。",
    "setup.step2.title": "信頼設定を一度だけ完了",
    "setup.step2.body": "初回起動後、Soft KVMの信頼設定プロンプトを承認します。",
    "setup.step3.title": "各PCの役割を選択",
    "setup.step3.body": "リモートPCでは Wait、メインPCでは Control を選択します。",
    "setup.step4.title": "確認して接続",
    "setup.step4.body": "両方のPCに表示されるペアリングコードを確認して、接続を承認します。",
    "download.label": "現在のリリース",
    "download.facts": "v1.7b · Windows 10/11 x64 · 111 MB · 単一EXE · プライベート発行者証明書で署名",
    "download.exeAction": "EXEをダウンロード · 111 MB",
    "download.trustFiles": "初回のみ必要な信頼設定ファイル",
    "download.trustHelp": "初回起動のため、これらのファイルをEXEと同じフォルダーに置いてください。",
    "download.bundleAction": "一式ZIPをダウンロード · 44 MB",
    "download.bundleContents": "EXE、チェックサム、信頼設定、文書を同梱",
    "download.hashFile": "チェックサムファイル",
    "download.copyHash": "コピー",
    "download.copiedHash": "コピーしました",
    "download.released": "リリース",
    "download.releaseNotes": "リリースノート",
    "download.allFiles": "すべてのリリースファイルを見る",
    "aria.securityGates": "入力制御前の3つのセキュリティゲート",
    "aria.gatesChannel": "ローカル相互認証暗号化",
    "gates.eyebrow": "3つの確認。1つの安全な接続。",
    "gates.title": "3つのセキュリティゲート。",
    "gates.lead": "入力制御を始める前に3段階で確認します。クラウドリレーを使わず、承認されたPCだけをローカルの相互認証済み暗号化チャネルで接続します。",
    "gates.group.technical": "接続グループ",
    "gates.group.title": "同じグループだけを検出",
    "gates.group.body": "ローカルネットワーク上で、同じ接続グループを使用するPCだけを検出します。",
    "gates.code.technical": "接続コード",
    "gates.code.title": "接続ごとにコードを確認",
    "gates.code.body": "Wait PCに表示される2桁の接続コードが一致した場合のみ次へ進みます。",
    "gates.pair.technical": "検証済みペアリング",
    "gates.pair.title": "両方のPCで承認",
    "gates.pair.body": "初回接続時に同じ6桁のコードを確認し、両方のPCでペアリングを承認します。",
    "gates.channel.zeroCloud": "クラウドリレーなし",
    "gates.channel.handshake": "署名付きP-256 ECDHハンドシェイク",
    "gates.channel.encryption": "AES-256-GCM入力暗号化",
    "gates.channel.summary": "制御前に3段階で確認。その後は1つの相互認証済み暗号化チャネルで接続します。",
    "security.eyebrow": "セキュリティ",
    "security.title": "相互確認で保護された、暗号化されたキーボードとマウス入力。",
    "security.lead": "通信を取得されても入力内容を読み取りにくくし、改ざんまたは再送されたメッセージは拒否されるよう設計しています。",
    "security.channel.pair": "PAIR",
    "security.channel.ecdh": "ECDH",
    "security.channel.verify": "VERIFY",
    "security.pair.title": "確認付きペアリング",
    "security.pair.body": "初回操作の前に、両方のPCで同じペアリングコードを確認して承認します。",
    "security.encrypt.title": "入力を暗号化",
    "security.encrypt.body": "キーボードとマウスの入力は、相互認証されたP-256 ECDH/AES-256-GCMチャネルで送信されます。",
    "security.update.title": "検証済みアップデート",
    "security.update.body": "アップデートはSHA-256と固定された発行者署名の検証を通過した場合のみインストールされます。",
    "security.subnet.title": "ローカルサブネット境界",
    "security.subnet.body": "生成されるファイアウォール規則は、Windows LocalSubnet範囲からの接続だけを許可します。",
    "security.note.title": "信頼できるローカルネットワーク向け",
    "security.note.body": "Soft KVMの検出ポートや待ち受けポートをインターネットに直接公開しないでください。",
    "security.note.link": "セキュリティモデルを見る",
    "compare.eyebrow": "比較",
    "compare.title": "ローカルのWindows環境向けソフトウェアKVM。",
    "compare.lead": "Soft KVMは、ハードウェアスイッチ、リモートデスクトップセッション、クラウド中継、アカウントなしで、近くにある2台のWindows PCをキーボードとマウス1組で使いたい人のためのツールです。",
    "compare.hardware.title": "ハードウェアKVMとの比較",
    "compare.hardware.body": "USBやHDMIの切替器は不要です。2台のPCはネットワーク上に残したまま、Soft KVMはキーボードとマウス入力だけを移動します。",
    "compare.remote.title": "リモートデスクトップとの比較",
    "compare.remote.body": "Soft KVMは画面をストリーミングしたり、リモートセッションにログインしたりしません。それぞれのPCの実際のモニターを使い続けます。",
    "compare.synergy.title": "Synergy / Barrierとの比較",
    "compare.synergy.body": "Soft KVMは、2台のWindows PC、ローカルサブネット検出、確認付きペアリング、暗号化入力、小さなWinForms UIに重点を置いています。",
    "compare.mouse.title": "Mouse Without Bordersとの比較",
    "compare.mouse.body": "Soft KVMは、明確な役割選択、明示的なペアリング確認、アカウントやクラウドサービスを必要としない利用を前提に設計しています。",
    "license.eyebrow": "ライセンス",
    "license.title": "個人利用は無料。業務利用にはライセンスが必要です。",
    "license.lead": "Soft KVMは個人および非商用利用では無料です。企業、組織、業務目的での利用には有料ライセンスが必要です。",
    "license.contactLabel": "業務利用ライセンスのお問い合わせ",
    "license.terms": "ライセンス条件",
    "license.privacy": "プライバシー通知",
    "license.install": "インストール案内",
    "license.loading": "文書を読み込んでいます...",
    "license.loadError": "この文書を読み込めませんでした。一式ZIPまたはリリースファイルで確認してください。",
    "compat.eyebrow": "互換性",
    "compat.title": "信頼できるローカルネットワーク上のWindows 10/11 x64で動作します。",
    "compat.lead": "Soft KVMは、信頼できるローカルネットワーク上で2台のWindows PCを直接操作する用途に合わせています。",
    "compat.network.title": "同じローカルネットワーク",
    "compat.network.body": "2台のPCは同じ信頼できるLANに接続されている必要があります。インターネット中継やポートフォワーディングは不要です。",
    "compat.windows.title": "Windows 10/11 x64",
    "compat.windows.body": "両方のPCでWindows 10または11 x64と同じSoft KVMバージョンを使用してください。",
    "compat.games.title": "アンチチートの制限",
    "compat.games.body": "Windowsの合成入力をブロックするアンチチート採用ゲームはサポートしていません。",
    "compat.uac.title": "UACには昇格が必要",
    "compat.uac.body": "Wait PCでUAC画面の操作を有効にし、Windowsの昇格プロンプトを承認してください。",
    "compat.recovery.title": "ファイアウォールと再接続",
    "compat.recovery.body": "Windows Defenderファイアウォールでローカルネットワークアクセスを許可してください。切断後、Wait PCは新しいコードで待機を続けます。Control PCでControlを選び、そのコードを使って再接続します。",
    "faq.eyebrow": "よくある質問",
    "faq.title": "ダウンロード前に確認してください。",
    "faq.internet.q": "インターネット越しにPCを操作できますか？",
    "faq.internet.a": "Soft KVMは信頼できるローカルネットワーク向けです。ルーター越しにポートを外部公開しないでください。",
    "faq.dotnet.q": ".NETを別途インストールする必要がありますか？",
    "faq.dotnet.a": "いいえ。公開Windows x64ビルドには必要なランタイムが含まれています。",
    "faq.game.q": "ゲームでも使えますか？",
    "faq.game.a": "Game precision modeで多くのゲームや3Dアプリに対応します。Windowsの合成入力をブロックするアンチチート採用ゲームはサポートしていません。",
    "faq.smartscreen.q": "Windows SmartScreenが表示されるのはなぜですか？",
    "faq.smartscreen.a": "現在のSoft KVMは、有料の公的コード署名証明書ではなくプライベート発行者証明書を使用しています。実行前に公式リリース元を確認してください。",
    "faq.share.q": "2台のWindows PCでマウスとキーボードを共有できますか？",
    "faq.share.a": "はい。Soft KVMは、同じ信頼できるローカルネットワーク上の2台のWindows 10/11 x64 PC間でキーボードとマウスを共有するために作られています。",
    "faq.alternative.q": "Soft KVMはWindows向けSynergyやBarrierの代替になりますか？",
    "faq.alternative.a": "ローカルネットワーク上で2台のWindows PCを操作し、確認済みのペアリングとクラウドアカウントなしの接続が必要な場合に、実用的な代替になります。",
    "faq.cloud.q": "Soft KVMにインターネットやクラウド中継は必要ですか？",
    "faq.cloud.a": "いいえ。検出と入力転送はローカルネットワーク向けに設計されています。インターネット中継、アカウントログイン、ポートフォワーディングは不要です。",
    "final.title": "キーボードとマウス1組で、2台のPCを操作できます。",
    "final.download": "Windows版をダウンロード",
    "footer.tagline": "Windows向けローカルキーボード・マウス共有ツール。",
    "footer.contact": "お問い合わせ",
    "footer.license": "ライセンス",
    "footer.privacy": "プライバシー",
    "footer.release": "リリース v1.7b"
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
    "nav.compare": "비교",
    "nav.compatibility": "호환성",
    "nav.faq": "FAQ",
    "nav.menu": "메뉴",
    "nav.download": "다운로드",
    "hero.eyebrow": "책상 하나, WINDOWS PC 두 대",
    "hero.title": "키보드와 마우스 하나로 Windows PC 두 대를 제어하세요.",
    "hero.lead": "Soft KVM은 같은 로컬 네트워크에서 Windows PC 두 대 사이의 키보드와 마우스 입력을 전환하는 소프트웨어 KVM입니다. 계정, 클라우드 서비스, 추가 장비가 필요하지 않습니다.",
    "hero.releaseLabel": "현재 릴리즈",
    "hero.releaseFacts": "Windows 10/11 x64 · 단일 EXE · 개인 게시자 서명",
    "hero.trustNote": "첫 다운로드에서는 Windows SmartScreen이 표시될 수 있습니다. 실행 전 공식 GitHub 릴리즈와 SHA-256을 확인하세요.",
    "hero.trustHelp": "신뢰 설정 파일:",
    "hero.signatureVerified": "개인 게시자 서명 확인",
    "hero.hashAvailable": "SHA-256 제공",
    "hero.zipDownload": "전체 ZIP 다운로드 · 44 MB",
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
    "scene.connect.title": "연결됐습니다. Swap mode가 꺼져 있으면 동시제어가 시작됩니다",
    "scene.connect.body": "Swap mode가 켜져 있으면 설정한 화면 경계가 작동할 때까지 입력은 Control PC에 남습니다.",
    "scene.remote.title": "Swap mode로 제어가 Wait PC로 이동합니다",
    "scene.remote.body": "설정한 화면 경계에서 선택한 시간 동안 유지하면 키보드와 마우스 제어가 이동합니다.",
    "tour.eyebrow": "실제 앱 화면",
    "tour.title": "클라우드 계정 없이 키보드와 마우스를 공유합니다.",
    "tour.body": "작은 바에서 Wait와 Control을 바로 선택합니다. 페어링, 입력, Swap mode, 시작 옵션이 필요할 때만 Settings를 엽니다.",
    "tour.quick": "빠른 실행 바",
    "tour.control": "Control",
    "tour.settings": "전체 설정",
    "tour.captured": "현재 개발 버전 UI 미리보기",
    "tour.quickTitle": "화면을 차지하지 않는 준비 상태",
    "tour.quickBody": "Settings를 열거나 연결을 시작하기 전까지 메인 창은 작게 유지됩니다.",
    "tour.controlTitle": "상대 PC 코드를 입력하고 시작",
    "tour.controlBody": "Control mode에서는 작은 바 중앙이 코드 입력란으로 바뀌고 오른쪽에서 바로 Start를 누를 수 있습니다.",
    "tour.settingsTitle": "연결 옵션을 한 화면에",
    "tour.settingsBody": "페어링, 모니터, 입력 제어, Swap mode, 자동 시작, 설명서와 업데이트를 함께 관리합니다.",
    "setup.eyebrow": "빠른 설치",
    "setup.title": "몇 분이면 로컬 Windows PC 제어를 시작할 수 있습니다.",
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
    "download.facts": "v1.7b · Windows 10/11 x64 · 111 MB · 단일 EXE · 개인 게시자 서명",
    "download.exeAction": "EXE 다운로드 · 111 MB",
    "download.trustFiles": "최초 1회 신뢰 설정 파일",
    "download.trustHelp": "최초 실행을 위해 두 파일을 EXE와 같은 폴더에 두세요.",
    "download.bundleAction": "전체 ZIP 다운로드 · 44 MB",
    "download.bundleContents": "EXE, 체크섬, 신뢰 설정, 문서 포함",
    "download.hashFile": "체크섬 파일",
    "download.copyHash": "복사",
    "download.copiedHash": "복사됨",
    "download.released": "릴리즈",
    "download.releaseNotes": "변경 내역",
    "download.allFiles": "전체 릴리즈 파일 보기",
    "aria.securityGates": "입력 제어 전 세 가지 보안 관문",
    "aria.gatesChannel": "로컬 상호 인증 암호화",
    "gates.eyebrow": "세 번의 확인. 하나의 안전한 연결.",
    "gates.title": "세 단계 보안 관문.",
    "gates.lead": "입력 제어를 시작하기 전에 세 번 확인합니다. 클라우드 릴레이 없이, 승인된 PC만 로컬의 상호 인증 암호화 채널로 연결됩니다.",
    "gates.group.technical": "연결 그룹",
    "gates.group.title": "같은 그룹만 검색",
    "gates.group.body": "로컬 네트워크에서 같은 연결 그룹을 사용하는 PC만 탐색합니다.",
    "gates.code.technical": "연결 코드",
    "gates.code.title": "매 연결마다 코드 확인",
    "gates.code.body": "Wait PC의 2자리 연결 코드가 일치해야 다음 단계로 진행합니다.",
    "gates.pair.technical": "검증된 페어링",
    "gates.pair.title": "양쪽 PC가 직접 승인",
    "gates.pair.body": "최초 연결 시 동일한 6자리 코드를 확인하고 양쪽 PC에서 페어링을 승인합니다.",
    "gates.channel.zeroCloud": "클라우드 릴레이 없음",
    "gates.channel.handshake": "서명된 P-256 ECDH 핸드셰이크",
    "gates.channel.encryption": "AES-256-GCM 입력 암호화",
    "gates.channel.summary": "제어 전 세 번 확인하고, 이후 하나의 상호 인증 암호화 채널로 연결합니다.",
    "security.eyebrow": "보안",
    "security.title": "상호 인증으로 보호되는 암호화 키보드·마우스 입력.",
    "security.lead": "패킷을 가로채더라도 입력 내용을 읽기 어렵고, 변조되거나 재전송된 메시지는 거부되도록 설계했습니다.",
    "security.channel.pair": "페어링",
    "security.channel.ecdh": "키 교환",
    "security.channel.verify": "검증",
    "security.pair.title": "검증된 페어링",
    "security.pair.body": "최초 제어 전 양쪽 PC에 같은 페어링 코드가 표시되는지 확인하고 승인합니다.",
    "security.encrypt.title": "입력 암호화",
    "security.encrypt.body": "키보드와 마우스 입력은 상호 인증된 P-256 ECDH/AES-256-GCM 채널로 전송됩니다.",
    "security.update.title": "업데이트 검증",
    "security.update.body": "업데이트는 SHA-256과 고정된 게시자 서명 검증을 통과해야 설치됩니다.",
    "security.subnet.title": "로컬 서브넷 방화벽 경계",
    "security.subnet.body": "생성되는 방화벽 규칙은 Windows LocalSubnet 범위의 연결만 허용합니다.",
    "security.note.title": "신뢰할 수 있는 로컬 네트워크용",
    "security.note.body": "Soft KVM 검색 및 수신 포트를 인터넷에 직접 노출하지 마십시오.",
    "security.note.link": "보안 모델 보기",
    "compare.eyebrow": "비교",
    "compare.title": "로컬 Windows 책상을 위한 소프트웨어 KVM.",
    "compare.lead": "Soft KVM은 하드웨어 스위치, 원격 데스크톱 세션, 클라우드 중계, 계정 없이 가까운 Windows PC 두 대를 키보드와 마우스 하나로 쓰려는 사람을 위한 도구입니다.",
    "compare.hardware.title": "하드웨어 KVM과 비교",
    "compare.hardware.body": "USB나 HDMI 전환 장비가 필요하지 않습니다. 두 PC는 네트워크에 그대로 있고 Soft KVM은 키보드와 마우스 입력만 이동합니다.",
    "compare.remote.title": "원격 데스크톱과 비교",
    "compare.remote.body": "Soft KVM은 화면을 스트리밍하거나 원격 세션에 로그인하지 않습니다. 각 PC의 실제 모니터를 그대로 사용합니다.",
    "compare.synergy.title": "Synergy 또는 Barrier와 비교",
    "compare.synergy.body": "Soft KVM은 Windows PC 두 대, 로컬 서브넷 검색, 검증된 페어링, 암호화 입력, 작은 WinForms 인터페이스에 집중합니다.",
    "compare.mouse.title": "Mouse Without Borders와 비교",
    "compare.mouse.body": "Soft KVM은 직접적인 역할 선택, 명시적 페어링 확인, 계정과 클라우드 서비스가 필요 없는 사용 방식을 중심으로 설계했습니다.",
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
    "compat.title": "신뢰할 수 있는 로컬 네트워크의 Windows 10/11 x64에서 동작합니다.",
    "compat.lead": "Soft KVM은 신뢰할 수 있는 로컬 네트워크에서 Windows PC 두 대를 직접 제어하는 용도에 맞춰져 있습니다.",
    "compat.network.title": "같은 로컬 네트워크",
    "compat.network.body": "두 PC가 같은 신뢰할 수 있는 LAN에 연결되어 있어야 합니다. 인터넷 중계와 포트 포워딩은 지원하지 않습니다.",
    "compat.windows.title": "Windows 10/11 x64",
    "compat.windows.body": "Windows 10 또는 11 x64와 동일한 Soft KVM 버전을 두 컴퓨터에서 사용하세요.",
    "compat.games.title": "안티치트 제한",
    "compat.games.body": "Windows 합성 입력을 차단하는 안티치트 게임은 지원하지 않습니다.",
    "compat.uac.title": "UAC에는 권한 상승 필요",
    "compat.uac.body": "Wait PC에서 UAC 화면 제어를 켜고 Windows 권한 상승 요청을 승인해야 합니다.",
    "compat.recovery.title": "방화벽 및 재연결",
    "compat.recovery.body": "Windows Defender 방화벽의 로컬 네트워크 접근을 허용하세요. 연결이 끊기면 대기 PC는 새 코드로 Wait 상태를 유지합니다. 제어 PC에서 Control을 선택하고 그 코드로 다시 연결하세요.",
    "faq.eyebrow": "자주 묻는 질문",
    "faq.title": "다운로드 전 확인하세요.",
    "faq.internet.q": "인터넷을 거쳐 제어할 수 있나요?",
    "faq.internet.a": "Soft KVM은 신뢰할 수 있는 로컬 네트워크용입니다. 라우터를 통해 포트를 외부에 노출하지 마십시오.",
    "faq.dotnet.q": ".NET을 별도로 설치해야 하나요?",
    "faq.dotnet.a": "아니요. 공개 Windows x64 빌드는 필요한 런타임을 포함합니다.",
    "faq.game.q": "게임에서도 사용할 수 있나요?",
    "faq.game.a": "Game precision mode로 여러 게임과 3D 앱을 지원합니다. Windows 합성 입력을 차단하는 안티치트 게임은 지원하지 않습니다.",
    "faq.smartscreen.q": "Windows SmartScreen이 왜 표시될 수 있나요?",
    "faq.smartscreen.a": "현재 Soft KVM은 유료 공인 코드서명 인증서가 아닌 개인 게시자 인증서를 사용합니다. 실행 전 공식 릴리즈 출처를 확인하십시오.",
    "faq.share.q": "Windows PC 두 대를 마우스와 키보드 하나로 쓸 수 있나요?",
    "faq.share.a": "예. Soft KVM은 같은 신뢰할 수 있는 로컬 네트워크의 Windows 10/11 x64 PC 두 대 사이에서 키보드와 마우스를 공유하도록 만들었습니다.",
    "faq.alternative.q": "Soft KVM은 Windows용 Synergy 또는 Barrier 대안인가요?",
    "faq.alternative.a": "Windows PC 두 대를 로컬 네트워크에서 직접 제어하고, 검증된 페어링과 클라우드 계정 없는 연결이 필요하다면 좋은 대안이 될 수 있습니다.",
    "faq.cloud.q": "Soft KVM에 인터넷이나 클라우드 중계가 필요한가요?",
    "faq.cloud.a": "아니요. 검색과 입력 전송은 로컬 네트워크용으로 설계했습니다. 인터넷 중계, 계정 로그인, 포트 포워딩이 필요하지 않습니다.",
    "final.title": "키보드와 마우스 하나로 두 PC를 제어하세요.",
    "final.download": "Windows용 다운로드",
    "footer.tagline": "Windows용 로컬 키보드·마우스 공유 도구.",
    "footer.contact": "문의",
    "footer.license": "라이선스",
    "footer.privacy": "개인정보",
    "footer.release": "릴리즈 v1.7b"
  }
};

const languageButtons = document.querySelectorAll("[data-lang]");
const languageToggle = document.querySelector(".language-toggle");
const languageMenu = document.querySelector(".language-menu");
const languageCurrent = document.querySelector("[data-lang-current]");
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
      ja: "Soft KVM クイックバー",
      ko: "Soft KVM 빠른 실행 바"
    }
  },
  control: {
    titleKey: "tour.controlTitle",
    bodyKey: "tour.controlBody",
    label: {
      en: "Soft KVM Control code entry",
      ja: "Soft KVM Control コード入力画面",
      ko: "Soft KVM Control 코드 입력 화면"
    }
  },
  settings: {
    titleKey: "tour.settingsTitle",
    bodyKey: "tour.settingsBody",
    label: {
      en: "Soft KVM full settings panel",
      ja: "Soft KVM 全設定パネル",
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
          <span class="demo-app-title"><img src="${softKvmIconPath}" alt="">Soft KVM</span>
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
        <span class="demo-app-title"><img src="${softKvmIconPath}" alt="">Soft KVM</span>
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
            ${toggleMarkup("Game precision mode", true, true)}
            <span class="demo-check"><i>✓</i>Control UAC screens</span>
          </div>
          <section class="demo-group demo-swap">
            <h4><span class="demo-check"><i>✓</i>Swap mode</span></h4>
            <label>Control direction: <span class="demo-select">Left <i>▾</i></span></label>
            <label>Swap time: <span class="demo-select">1 s <i>▾</i></span></label>
          </section>
          <div class="demo-security-option">
            <span class="demo-check"><i>✓</i>Block macro / automated input</span>
          </div>
          <div class="demo-startup">
            <span class="demo-check"><i>✓</i>Start with Windows</span>
            <span class="demo-check"><i>✓</i>Minimize while waiting</span>
          </div>
          <p class="demo-command">Commands: K+M within 250 ms, hold 0.5 s&nbsp; / &nbsp;Emergency: K+M → E</p>
          <div class="demo-footer">
            <span>Manual</span>
            <span class="demo-action">Check for updates</span>
            <small>Development UI preview</small>
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
    const isCurrent = button.dataset.lang === language;
    button.setAttribute("aria-checked", String(isCurrent));
    button.setAttribute("aria-pressed", String(isCurrent));
  });

  if (languageCurrent) {
    languageCurrent.textContent = language.toUpperCase();
  }

  if (language === "ko") {
    document.title = "Soft KVM - Windows PC 두 대를 위한 소프트웨어 KVM";
    description.content = "Soft KVM은 같은 로컬 네트워크에서 Windows PC 두 대를 키보드와 마우스 하나로 제어하는 소프트웨어 KVM입니다. 계정, 클라우드, 중계 서버가 필요하지 않습니다.";
  }
  else if (language === "ja") {
    document.title = "Soft KVM - 2台のWindows PC向けのソフトウェアKVM";
    description.content = "Soft KVMは、同じローカルネットワーク上の2台のWindows PCをキーボードとマウス1組で操作するソフトウェアKVMです。アカウント、クラウド、中継サーバーは不要です。";
  }
  else {
    document.title = "Soft KVM - Windows software KVM for one keyboard and mouse";
    description.content = "Soft KVM is a Windows software KVM for sharing one keyboard and mouse between two PCs on the same local network. No account, cloud, or relay server required.";
  }

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

function closeLanguageMenu() {
  if (!languageMenu || !languageToggle) {
    return;
  }

  languageMenu.hidden = true;
  languageToggle.setAttribute("aria-expanded", "false");
}

languageToggle?.addEventListener("click", () => {
  const willOpen = languageMenu.hidden;
  languageMenu.hidden = !willOpen;
  languageToggle.setAttribute("aria-expanded", String(willOpen));

  if (willOpen) {
    closeMobileMenu();
  }
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.langUrl) {
      window.location.href = button.dataset.langUrl;
      return;
    }

    setLanguage(button.dataset.lang);
    closeLanguageMenu();
  });
});

function closeMobileMenu() {
  mobileMenu.hidden = true;
  mobileMenuToggle.setAttribute("aria-expanded", "false");
}

mobileMenuToggle.addEventListener("click", () => {
  const willOpen = mobileMenu.hidden;
  mobileMenu.hidden = !willOpen;
  mobileMenuToggle.setAttribute("aria-expanded", String(willOpen));

  if (willOpen) {
    closeLanguageMenu();
  }
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  if (languageMenu && !languageMenu.hidden) {
    closeLanguageMenu();
    languageToggle.focus();
    return;
  }

  if (!mobileMenu.hidden) {
    closeMobileMenu();
    mobileMenuToggle.focus();
  }
});

document.addEventListener("pointerdown", (event) => {
  if (
    languageMenu &&
    !languageMenu.hidden &&
    !languageMenu.contains(event.target) &&
    !languageToggle.contains(event.target)
  ) {
    closeLanguageMenu();
  }

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

setLanguage(configuredPageLanguage || localStorage.getItem("softkvm-language") || "en");
