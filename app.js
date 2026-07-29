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
    "hero.releaseFacts": "Windows 10/11 x64 쨌 Single EXE 쨌 Private publisher signature",
    "hero.trustNote": "Windows SmartScreen may appear on first download. Verify the official GitHub release and SHA-256 before running.",
    "hero.trustHelp": "Trust setup files:",
    "hero.signatureVerified": "Private publisher signature verified",
    "hero.hashAvailable": "SHA-256 available",
    "hero.zipDownload": "Download complete ZIP 쨌 44 MB",
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
    "scene.localInput": "LOCAL INPUT ??CONTROL PC",
    "scene.remoteInput": "REMOTE INPUT ??WAIT PC",
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
    "download.facts": "v1.6b 쨌 Windows 10/11 x64 쨌 111 MB 쨌 Single EXE 쨌 Private publisher signature",
    "download.exeAction": "Download EXE 쨌 111 MB",
    "download.trustFiles": "One-time trust setup files",
    "download.trustHelp": "Keep both files in the same folder as the EXE for first launch.",
    "download.bundleAction": "Download complete ZIP 쨌 44 MB",
    "download.bundleContents": "EXE, checksum, trust setup, and documents",
    "download.hashFile": "Checksum file",
    "download.copyHash": "Copy",
    "download.copiedHash": "Copied",
    "download.released": "Released",
    "download.releaseNotes": "Release notes",
    "download.allFiles": "View all release files",
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
    "faq.game.a": "Game input mode supports many games and 3D apps. Games that block Windows synthetic input through anti-cheat are not supported.",
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
    "footer.release": "Release v1.6b"
  },
  ja: {
    "aria.home": "Soft KVM ?쎼꺖??,
    "aria.mainNavigation": "?▲궎?녈깏?볝궟?쇈궥?㎯꺍",
    "aria.mobileNavigation": "?㏂깘?ㅳ꺂?듽깛?꿔꺖?룔깾??,
    "aria.language": "鼇沃?,
    "aria.screen": "Soft KVM ??뵽??,
    "aria.licenseDocuments": "?⒲궎?삠꺍?방뻼??,
    "aria.currentRelease": "?얍쑉??Soft KVM ?ゃ꺁?쇈궧",
    "aria.sceneStages": "?η텥?밤깇?쇈궦",
    "aria.secureChannel": "2?겹겗PC?볝겗沃띹㉫歷덀겳?쀥뤇?뽧긽?ｃ깓??,
    "aria.sharePage": "?볝겗?싥꺖?멥굮?길쐣",
    "nav.features": "艅잒꺗",
    "nav.setup": "?삠긿?덀궋?껁깤",
    "nav.security": "?삠궘?γ꺁?녴궍",
    "nav.compare": "驪붻펱",
    "nav.compatibility": "雅믤룢??,
    "nav.faq": "FAQ",
    "nav.menu": "?▲깑?γ꺖",
    "nav.download": "??╉꺍??꺖??,
    "hero.eyebrow": "?꿔겏?ㅳ겗?뉎궧????겹겗 WINDOWS PC??,
    "hero.title": "??꺖?쒌꺖?됥겏?욁궑??永꾠겎???겹겗Windows PC?믤뱧鵝쒌?,
    "hero.lead": "Soft KVM??곩릪?섅꺆?쇈궖?ャ깓?껁깉??꺖??툓???겹겗Windows PC?볝겎??꺖?쒌꺖?됥겏?욁궑?밧뀯?쎼굮?뉎굤?욍걟?뗣궫?뺛깉?╉궒?줜VM?㎯걲?귙궋?ャ궑?녈깉?곥궚?⒲궑?됥궢?쇈깛?밤곮옙?졼겗?뤵꺖?됥궑?㎯궋??툖誤곥겎?쇻?,
    "hero.releaseLabel": "?얍쑉??꺁?ゃ꺖??,
    "hero.releaseFacts": "Windows 10/11 x64 쨌 ?섆?EXE 쨌 ?쀣꺀?ㅳ깧?쇈깉?븃죱?낁㉫?롦쎑?㎫쉿??,
    "hero.trustNote": "?앭썮??╉꺍??꺖?됪셽?첳indows SmartScreen?뚩〃鹽뷩걬?뚣굥?닷릦?뚣걗?듽겲?쇻귛츪烏뚦뎺?ュ뀶凉뢋itHub?ゃ꺁?쇈궧?쮁HA-256?믥▶沃띲걮?╉걦?졼걬?꾠?,
    "hero.trustHelp": "岳↓졏鼇?츣?뺛궊?ㅳ꺂:",
    "hero.signatureVerified": "?쀣꺀?ㅳ깧?쇈깉?븃죱?낁㉫?롦쎑??쉿?띲굮閻븃첀歷덀겳",
    "hero.hashAvailable": "SHA-256?믤룓堊?,
    "hero.zipDownload": "訝凉뢟IP?믡??╉꺍??꺖??쨌 44 MB",
    "hero.zipHelp": "EXE?ⓧ에?쇠Þ若싥깢?▲궎?ャ굮?뚣걯?뺛궔?ャ??쇈겓?뚧∮",
    "hero.recommended": "?ⓨⅷ",
    "hero.guide": "?삠긿?덀궋?껁깤?믦쫳??,
    "hero.share": "?길쐣",
    "hero.linkCopied": "?ゃ꺍??굮?녈깞?쇈걮?얇걮??,
    "scene.controlPc": "CONTROL PC",
    "scene.waitPc": "WAIT PC",
    "scene.mainPc": "?▲궎?쿛C",
    "scene.remotePc": "?ゃ깴?쇈깉PC",
    "scene.controlMode": "CONTROL MODE",
    "scene.waitMode": "WAIT MODE",
    "scene.oneInput": "??꺖?쒌꺖??+ ?욁궑??1永?,
    "scene.localInput": "??꺖?ャ꺂?ε뒟 ??CONTROL PC",
    "scene.remoteInput": "?ゃ깴?쇈깉?ε뒟 ??WAIT PC",
    "scene.wait.title": "Wait PC ?뚦푷艅잆걮?얇걲",
    "scene.wait.body": "?띴퐳野얕괌?췗C?ユ렏泳싥궠?쇈깋42?뚩〃鹽뷩걬?뚣겲?쇻?,
    "scene.code.title": "Control PC ?ュ릪?섅궠?쇈깋?믣뀯??,
    "scene.code.body": "Soft KVM???겹겗PC??렏泳싥궛?ャ꺖?쀣겏?녈꺖?됥굮閻븃첀?쀣겲?쇻?,
    "scene.connect.title": "?η텥若뚥틙?괪wap mode?뚣궕?뺛겗?닷릦??릪?귛댍孃▲걣冶뗣겲?듽겲?쇻?,
    "scene.connect.body": "Swap mode?뚣궕?녈겗?닷릦?곮Þ若싥걮?잏뵽?®ク?뚥퐳?뺛걲?뗣겲?㎩뀯?쎼겘Control PC?담겓餘뗣굤?얇걲??,
    "scene.remote.title": "Swap mode?㎪뱧鵝쒌걣Wait PC?며㎉?듽겲??,
    "scene.remote.body": "鼇?츣?쀣걼?삯씊塋?겎?멩뒢?귡뼋岳앮똻?쇻굥?ⓦ곥궘?쇈깭?쇈깋?ⓦ깯?╉궧??뱧鵝쒌걣燁삠굤?얇걲??,
    "tour.eyebrow": "若잓슋??궋?쀣꺁",
    "tour.title": "??꺀?╉깋?㏂궖?╉꺍?덀겒?쀣겎??꺖?쒌꺖?됥겏?욁궑?밤굮?길쐣??,
    "tour.body": "弱뤵걬?ゃ깘?쇈걢??Wait ??Control ?믡걲?먬겦?밤겲?쇻귙깪?㏂꺁?녈궛?곩뀯?쎼갨wap mode?곮돈?뺛궕?쀣궥?㎯꺍?뚦퓚誤곥겒?귙걽??Settings ?믧뼀?띲겲?쇻?,
    "tour.quick": "??궎?껁궚?먦꺖",
    "tour.control": "Control",
    "tour.settings": "?②Þ若?,
    "tour.captured": "?얍쑉??뼀?븀뎵UI?쀣꺃?볝깷??,
    "tour.quickTitle": "?삯씊?믣뜝?됥걮?ゃ걚繹뽩굺?뜻뀑",
    "tour.quickBody": "Settings ?믧뼀?뤵걢?η텥?믧뼀冶뗣걲?뗣겲?㎯곥깳?ㅳ꺍?╉궍?녈깋?╉겘弱뤵걬?뤶퓷?잆굦?얇걲??,
    "tour.controlTitle": "?ゃ깴?쇈깉PC??궠?쇈깋?믣뀯?쎼걮??뼀冶?,
    "tour.controlBody": "Control mode?㎯겘?곩컦?뺛겒?먦꺖??릎鸚?걣?녈꺖?됧뀯?쎿쵂?ャ겒?듽갨tart?믤듉?쀣겍?η텥?㎯걤?얇걲??,
    "tour.settingsTitle": "?η텥?ゃ깤?룔깾?녈굮1?뗦??ラ썓榮?,
    "tour.settingsBody": "?싥궋?ゃ꺍?겹곥깴?뗣궭?쇤겦?욁곩뀯?쎾댍孃▲갨wap mode?곮눎?뺠돈?뺛곥깯?뗣깷?㏂꺂?곥궋?껁깤?뉎꺖?덀굮?얇겏?곥겍嶸←릤?㎯걤?얇걲??,
    "setup.eyebrow": "??궎?껁궚?삠긿?덀궋?껁깤",
    "setup.title": "?겼늽?㎯곥꺆?쇈궖?ャ겗Windows PC??뱧鵝쒌굮冶뗣굙?됥굦?얇걲??,
    "setup.lead": "2?겹겗PC?㎩릪?섅꺁?ゃ꺖?밤깢?▲궎?ャ굮鵝욍걚?얇걲?귚??밤굮孃끾찣?담곥굚?녵??밤굮?띴퐳?담겓?쀣겲?쇻?,
    "setup.step1.title": "?ゃ꺁?쇈궧?믡??╉꺍??꺖??,
    "setup.step1.body": "訝凉뢟IP?믡??╉꺍??꺖?됥걲?뗣걢?갋XE?곮㉫?롦쎑?곥궩?껁깉?㏂긿?뾅MD?믣릪?섅깢?⒲꺂??쇈겓營?걤?얇걲??,
    "setup.step2.title": "岳↓졏鼇?츣?믢?佯╉걽?묈츑雅?,
    "setup.step2.body": "?앭썮壅룟땿孃뚣갨oft KVM??에?쇠Þ若싥깤??꺍?쀣깉?믤돽沃띲걮?얇걲??,
    "setup.step3.title": "?껺C??슝?꿔굮?멩뒢",
    "setup.step3.body": "?ゃ깴?쇈깉PC?㎯겘 Wait?곥깳?ㅳ꺍PC?㎯겘 Control ?믧겦?욁걮?얇걲??,
    "setup.step4.title": "閻븃첀?쀣겍?η텥",
    "setup.step4.body": "訝→뼶?췗C?ヨ〃鹽뷩걬?뚣굥?싥궋?ゃ꺍?겹궠?쇈깋?믥▶沃띲걮?╉곫렏泳싥굮?욤첀?쀣겲?쇻?,
    "download.label": "?얍쑉??꺁?ゃ꺖??,
    "download.facts": "v1.6b 쨌 Windows 10/11 x64 쨌 111 MB 쨌 ?섆?EXE 쨌 ?쀣꺀?ㅳ깧?쇈깉?븃죱?낁㉫?롦쎑?㎫쉿??,
    "download.exeAction": "EXE?믡??╉꺍??꺖??쨌 111 MB",
    "download.trustFiles": "?앭썮??겳恙낁쫨?や에?쇠Þ若싥깢?▲궎??,
    "download.trustHelp": "?앭썮壅룟땿??걼?곥곥걪?뚣굢??깢?▲궎?ャ굮EXE?ⓨ릪?섅깢?⒲꺂??쇈겓營?걚?╉걦?졼걬?꾠?,
    "download.bundleAction": "訝凉뢟IP?믡??╉꺍??꺖??쨌 44 MB",
    "download.bundleContents": "EXE?곥긽?㎯긿??궢?졼곦에?쇠Þ若싥곫뻼?멥굮?뚧∮",
    "download.hashFile": "?곥궒?껁궚?듐깲?뺛궊?ㅳ꺂",
    "download.copyHash": "?녈깞??,
    "download.copiedHash": "?녈깞?쇈걮?얇걮??,
    "download.released": "?ゃ꺁?쇈궧",
    "download.releaseNotes": "?ゃ꺁?쇈궧?롢꺖??,
    "download.allFiles": "?쇻겧?╉겗?ゃ꺁?쇈궧?뺛궊?ㅳ꺂?믦쫳??,
    "security.eyebrow": "?삠궘?γ꺁?녴궍",
    "security.title": "?멧틨閻븃첀?㏛퓷鈺룔걬?뚣걼?곫슅?룟뙑?뺛굦?잆궘?쇈깭?쇈깋?ⓦ깯?╉궧?ε뒟??,
    "security.lead": "?싦에?믣룚孃쀣걬?뚣겍?귛뀯?쎾냵若밤굮沃?겳?뽧굤?ャ걦?뤵걮?곫뵻?뽧굯?얇걼??냽?곥걬?뚣걼?▲긿?삠꺖?멥겘?믣맔?뺛굦?뗣굠?녻Þ鼇덀걮?╉걚?얇걲??,
    "security.channel.pair": "PAIR",
    "security.channel.ecdh": "ECDH",
    "security.channel.verify": "VERIFY",
    "security.pair.title": "閻븃첀餓섅걤?싥궋?ゃ꺍??,
    "security.pair.body": "?앭썮?띴퐳??뎺?ャ곦륫?밤겗PC?㎩릪?섅깪?㏂꺁?녈궛?녈꺖?됥굮閻븃첀?쀣겍?욤첀?쀣겲?쇻?,
    "security.encrypt.title": "?ε뒟?믤슅?룟뙑",
    "security.encrypt.body": "??꺖?쒌꺖?됥겏?욁궑?밤겗?ε뒟??곭쎑雅믦첀鼇쇈걬?뚣걼P-256 ECDH/AES-256-GCM?곥깵?띲꺂?㏝곦에?뺛굦?얇걲??,
    "security.update.title": "濾쒑㉫歷덀겳?㏂긿?쀣깈?쇈깉",
    "security.update.body": "?㏂긿?쀣깈?쇈깉?칂HA-256?ⓨ쎓若싥걬?뚣걼?븃죱?끿쉿?띲겗濾쒑㉫?믧싮걥?쀣걼?닷릦??겳?ㅳ꺍?밤깉?쇈꺂?뺛굦?얇걲??,
    "security.subnet.title": "??꺖?ャ꺂?듐깣?띲긿?덂쥊??,
    "security.subnet.body": "?잍닇?뺛굦?뗣깢?▲궎?㏂궑?⒲꺖?ヨ쫸?뉎겘?갮indows LocalSubnet影꾢쎊?뗣굢??렏泳싥걽?묆굮鼇긷룾?쀣겲?쇻?,
    "security.note.title": "岳↓졏?㎯걤?뗣꺆?쇈궖?ャ깓?껁깉??꺖??릲??,
    "security.note.body": "Soft KVM??쩂?뷩깮?쇈깉?꾢푷?▼룛?묆깮?쇈깉?믡궎?녈궭?쇈깓?껁깉?ョ쎍?ε뀶?뗣걮?ゃ걚?㎯걦?졼걬?꾠?,
    "security.note.link": "?삠궘?γ꺁?녴궍?㏂깈?ャ굮誤뗣굥",
    "compare.eyebrow": "驪붻펱",
    "compare.title": "??꺖?ャ꺂?췞indows?겼쥊?묆걨?썬깢?덀궑?㎯궋KVM??,
    "compare.lead": "Soft KVM??곥깗?쇈깋?╉궒?㏂궧?ㅳ긿?곥곥꺁?㏂꺖?덀깈?밤궚?덀긿?쀣궩?껁궥?㎯꺍?곥궚?⒲궑?됦릎泳쇻곥궋?ャ궑?녈깉?ゃ걮?㎯곮퓩?뤵겓?귙굥2?겹겗Windows PC?믡궘?쇈깭?쇈깋?ⓦ깯?╉궧1永꾠겎鵝욍걚?잆걚雅뷩겗?잆굙??깂?쇈꺂?㎯걲??,
    "compare.hardware.title": "?뤵꺖?됥궑?㎯궋KVM?ⓦ겗驪붻펱",
    "compare.hardware.body": "USB?껰DMI??늾?욕솳??툖誤곥겎?쇻??겹겗PC??깓?껁깉??꺖??툓?ユ츐?쀣걼?얇겲?갨oft KVM??궘?쇈깭?쇈깋?ⓦ깯?╉궧?ε뒟?졼걨?믥㎉?뺛걮?얇걲??,
    "compare.remote.title": "?ゃ깴?쇈깉?뉎궧??깉?껁깤?ⓦ겗驪붻펱",
    "compare.remote.body": "Soft KVM??뵽?㏂굮?밤깉?ゃ꺖?잆꺍?겹걮?잆굤?곥꺁?㏂꺖?덀궩?껁궥?㎯꺍?ャ꺆?겹궎?녈걮?잆굤?쀣겲?쎼굯?귙걹?뚣걻?뚣겗PC??츪?쎼겗?㏂깑?욍꺖?믢슴?꾤텥?묆겲?쇻?,
    "compare.synergy.title": "Synergy / Barrier?ⓦ겗驪붻펱",
    "compare.synergy.body": "Soft KVM????겹겗Windows PC?곥꺆?쇈궖?ャ궢?뽧깓?껁깉濾쒎눣?곭▶沃띴퍡?띲깪?㏂꺁?녈궛?곫슅?룟뙑?ε뒟?곩컦?뺛겒WinForms UI?ラ뇥?밤굮營?걚?╉걚?얇걲??,
    "compare.mouse.title": "Mouse Without Borders?ⓦ겗驪붻펱",
    "compare.mouse.body": "Soft KVM??곫삇閻뷩겒壤밧돯?멩뒢?곫삇鹽븀쉪?ゃ깪?㏂꺁?녈궛閻븃첀?곥궋?ャ궑?녈깉?꾠궚?⒲궑?됥궢?쇈깛?밤굮恙낁쫨?ⓦ걮?ゃ걚?⑴뵪?믣뎺?먦겓鼇?쮫?쀣겍?꾠겲?쇻?,
    "license.eyebrow": "?⒲궎?삠꺍??,
    "license.title": "?뗤볶?⑴뵪??꽒?쇻귝??쇿닶?ⓦ겓??꺀?ㅳ궩?녈궧?뚦퓚誤곥겎?쇻?,
    "license.lead": "Soft KVM??뗤볶?듽굠?녜씆?녺뵪?⑴뵪?㎯겘?→뼑?㎯걲?귚펯璵?곭탡濚붵곫??숂쎅?꾠겎??닶?ⓦ겓??쐣?쇻꺀?ㅳ궩?녈궧?뚦퓚誤곥겎?쇻?,
    "license.contactLabel": "璵?떃?⑴뵪?⒲궎?삠꺍?밤겗?듿븦?꾢릦?뤵걵",
    "license.terms": "?⒲궎?삠꺍?방씉餓?,
    "license.privacy": "?쀣꺀?ㅳ깘?룔꺖?싩윥",
    "license.install": "?ㅳ꺍?밤깉?쇈꺂旅덂냵",
    "license.loading": "?뉑쎑?믦き?욤씔?볝겎?꾠겲??..",
    "license.loadError": "?볝겗?뉑쎑?믦き?욤씔?곥겲?쎼굯?㎯걮?잆귚?凉뢟IP?얇걼??꺁?ゃ꺖?밤깢?▲궎?ャ겎閻븃첀?쀣겍?뤵걽?뺛걚??,
    "compat.eyebrow": "雅믤룢??,
    "compat.title": "岳↓졏?㎯걤?뗣꺆?쇈궖?ャ깓?껁깉??꺖??툓?췞indows 10/11 x64?㎩땿鵝쒌걮?얇걲??,
    "compat.lead": "Soft KVM??곦에?쇈겎?띲굥??꺖?ャ꺂?띲긿?덀꺈?쇈궚訝듽겎2?겹겗Windows PC?믥쎍?ζ뱧鵝쒌걲?뗧뵪?붵겓?덀굩?쎼겍?꾠겲?쇻?,
    "compat.network.title": "?뚣걯??꺖?ャ꺂?띲긿?덀꺈?쇈궚",
    "compat.network.body": "2?겹겗PC??릪?섆에?쇈겎?띲굥LAN?ユ렏泳싥걬?뚣겍?꾠굥恙낁쫨?뚣걗?듽겲?쇻귙궎?녈궭?쇈깓?껁깉訝?텤?꾠깮?쇈깉?뺛궔??꺖?뉎궍?녈궛??툖誤곥겎?쇻?,
    "compat.windows.title": "Windows 10/11 x64",
    "compat.windows.body": "訝→뼶?췗C?쬦indows 10?얇걼??1 x64?ⓨ릪?쁓oft KVM?먦꺖?멥깾?녈굮鵝욜뵪?쀣겍?뤵걽?뺛걚??,
    "compat.games.title": "?㏂꺍?곥긽?쇈깉??댍??,
    "compat.games.body": "Windows??릦?먨뀯?쎼굮?뽧꺆?껁궚?쇻굥?㏂꺍?곥긽?쇈깉?←뵪?꿔꺖?졼겘?듐깮?쇈깉?쀣겍?꾠겲?쎼굯??,
    "compat.uac.title": "UAC?ャ겘?뉑졏?뚦퓚誤?,
    "compat.uac.body": "Wait PC?쬤AC?삯씊??뱧鵝쒌굮?됧듅?ャ걮?갮indows??삀?쇈깤??꺍?쀣깉?믤돽沃띲걮?╉걦?졼걬?꾠?,
    "compat.recovery.title": "?뺛궊?ㅳ궋?╉궔?쇈꺂?ⓨ냽?η텥",
    "compat.recovery.body": "Windows Defender?뺛궊?ㅳ궋?╉궔?쇈꺂?㎯꺆?쇈궖?ャ깓?껁깉??꺖??궋??궩?밤굮鼇긷룾?쀣겍?뤵걽?뺛걚?귛늾??풄?갮ait PC??뼭?쀣걚?녈꺖?됥겎孃끾찣?믥텥?묆겲?쇻괖ontrol PC?쬍ontrol?믧겦?녈곥걹??궠?쇈깋?믢슴?ｃ겍?띷렏泳싥걮?얇걲??,
    "faq.eyebrow": "?덀걦?귙굥蘊ゅ븦",
    "faq.title": "??╉꺍??꺖?됧뎺?ョ▶沃띲걮?╉걦?졼걬?꾠?,
    "faq.internet.q": "?ㅳ꺍?욍꺖?띲긿?덅텏?쀣겓PC?믤뱧鵝쒌겎?띲겲?쇻걢竊?,
    "faq.internet.a": "Soft KVM??에?쇈겎?띲굥??꺖?ャ꺂?띲긿?덀꺈?쇈궚?묆걨?㎯걲?귙꺂?쇈궭?쇠텏?쀣겓?앫꺖?덀굮鸚뽭깿?ч뼀?쀣겒?꾠겎?뤵걽?뺛걚??,
    "faq.dotnet.q": ".NET?믣닪?붵궎?녈궧?덀꺖?ャ걲?뗥퓚誤곥걣?귙굤?얇걲?뗰폕",
    "faq.dotnet.a": "?꾠걚?덀귛뀶?딾indows x64?볝꺂?됥겓??퓚誤곥겒?⒲꺍?욍궎?졼걣?ャ겲?뚣겍?꾠겲?쇻?,
    "faq.game.q": "?꿔꺖?졼겎?귚슴?덀겲?쇻걢竊?,
    "faq.game.a": "Game input mode?㎩쩀?뤵겗?꿔꺖?졼굜3D?㏂깤?ゃ겓野얍퓶?쀣겲?쇻괰indows??릦?먨뀯?쎼굮?뽧꺆?껁궚?쇻굥?㏂꺍?곥긽?쇈깉?←뵪?꿔꺖?졼겘?듐깮?쇈깉?쀣겍?꾠겲?쎼굯??,
    "faq.smartscreen.q": "Windows SmartScreen?뚩〃鹽뷩걬?뚣굥??겘?ゃ걶?㎯걲?뗰폕",
    "faq.smartscreen.a": "?얍쑉?췚oft KVM??곫쐣?쇻겗?х쉪?녈꺖?됬쉿?띹㉫?롦쎑?㎯겘?ゃ걦?쀣꺀?ㅳ깧?쇈깉?븃죱?낁㉫?롦쎑?믢슴?ⓦ걮?╉걚?얇걲?귛츪烏뚦뎺?ュ뀶凉뤵꺁?ゃ꺖?밧뀇?믥▶沃띲걮?╉걦?졼걬?꾠?,
    "faq.share.q": "2?겹겗Windows PC?㎯깯?╉궧?ⓦ궘?쇈깭?쇈깋?믣뀻?됥겎?띲겲?쇻걢竊?,
    "faq.share.a": "??걚?괪oft KVM??곩릪?섆에?쇈겎?띲굥??꺖?ャ꺂?띲긿?덀꺈?쇈궚訝듽겗2?겹겗Windows 10/11 x64 PC?볝겎??꺖?쒌꺖?됥겏?욁궑?밤굮?길쐣?쇻굥?잆굙?ヤ퐳?됥굦?╉걚?얇걲??,
    "faq.alternative.q": "Soft KVM?칆indows?묆걨Synergy?껧arrier??빰?욍겓?ゃ굤?얇걲?뗰폕",
    "faq.alternative.a": "??꺖?ャ꺂?띲긿?덀꺈?쇈궚訝듽겎2?겹겗Windows PC?믤뱧鵝쒌걮?곭▶沃띷툑?욍겗?싥궋?ゃ꺍?겹겏??꺀?╉깋?㏂궖?╉꺍?덀겒?쀣겗?η텥?뚦퓚誤곥겒?닷릦?ャ곩츪?①쉪?や빰?욍겓?ゃ굤?얇걲??,
    "faq.cloud.q": "Soft KVM?ャ궎?녈궭?쇈깓?껁깉?꾠궚?⒲궑?됦릎泳쇻겘恙낁쫨?㎯걲?뗰폕",
    "faq.cloud.a": "?꾠걚?덀귝쩂?뷩겏?ε뒟邕?곥겘??꺖?ャ꺂?띲긿?덀꺈?쇈궚?묆걨?ヨÞ鼇덀걬?뚣겍?꾠겲?쇻귙궎?녈궭?쇈깓?껁깉訝?텤?곥궋?ャ궑?녈깉??궛?ㅳ꺍?곥깮?쇈깉?뺛궔??꺖?뉎궍?녈궛??툖誤곥겎?쇻?,
    "final.title": "??꺖?쒌꺖?됥겏?욁궑??永꾠겎???겹겗PC?믤뱧鵝쒌겎?띲겲?쇻?,
    "final.download": "Windows?덀굮??╉꺍??꺖??,
    "footer.tagline": "Windows?묆걨??꺖?ャ꺂??꺖?쒌꺖?됥꺕?욁궑?밧뀻?됥깂?쇈꺂??,
    "footer.contact": "?듿븦?꾢릦?뤵걵",
    "footer.license": "?⒲궎?삠꺍??,
    "footer.privacy": "?쀣꺀?ㅳ깘?룔꺖",
    "footer.release": "?ゃ꺁?쇈궧 v1.6b"
  },
  ko: {
    "aria.home": "Soft KVM ??,
    "aria.mainNavigation": "二쇱슂 硫붾돱",
    "aria.mobileNavigation": "紐⑤컮??硫붾돱",
    "aria.language": "?몄뼱",
    "aria.screen": "Soft KVM ?붾㈃",
    "aria.licenseDocuments": "?쇱씠?좎뒪 臾몄꽌",
    "aria.currentRelease": "?꾩옱 Soft KVM 由대━利?,
    "aria.sceneStages": "?곌껐 ?④퀎",
    "aria.secureChannel": "??PC ?ъ씠???몄쬆???뷀샇??梨꾨꼸",
    "aria.sharePage": "???섏씠吏 怨듭쑀",
    "nav.features": "湲곕뒫",
    "nav.setup": "?ㅼ튂",
    "nav.security": "蹂댁븞",
    "nav.compare": "鍮꾧탳",
    "nav.compatibility": "?명솚??,
    "nav.faq": "FAQ",
    "nav.menu": "硫붾돱",
    "nav.download": "?ㅼ슫濡쒕뱶",
    "hero.eyebrow": "梨낆긽 ?섎굹, WINDOWS PC ???",
    "hero.title": "?ㅻ낫?쒖? 留덉슦???섎굹濡?Windows PC ???瑜??쒖뼱?섏꽭??",
    "hero.lead": "Soft KVM? 媛숈? 濡쒖뺄 ?ㅽ듃?뚰겕?먯꽌 Windows PC ??? ?ъ씠???ㅻ낫?쒖? 留덉슦???낅젰???꾪솚?섎뒗 ?뚰봽?몄썾??KVM?낅땲?? 怨꾩젙, ?대씪?곕뱶 ?쒕퉬?? 異붽? ?λ퉬媛 ?꾩슂?섏? ?딆뒿?덈떎.",
    "hero.releaseLabel": "?꾩옱 由대━利?,
    "hero.releaseFacts": "Windows 10/11 x64 쨌 ?⑥씪 EXE 쨌 媛쒖씤 寃뚯떆???쒕챸",
    "hero.trustNote": "泥??ㅼ슫濡쒕뱶?먯꽌??Windows SmartScreen???쒖떆?????덉뒿?덈떎. ?ㅽ뻾 ??怨듭떇 GitHub 由대━利덉? SHA-256???뺤씤?섏꽭??",
    "hero.trustHelp": "?좊ː ?ㅼ젙 ?뚯씪:",
    "hero.signatureVerified": "媛쒖씤 寃뚯떆???쒕챸 ?뺤씤",
    "hero.hashAvailable": "SHA-256 ?쒓났",
    "hero.zipDownload": "?꾩껜 ZIP ?ㅼ슫濡쒕뱶 쨌 44 MB",
    "hero.zipHelp": "EXE? ?좊ː ?ㅼ젙 ?뚯씪?????대뜑???ы븿",
    "hero.recommended": "沅뚯옣",
    "hero.guide": "?ㅼ튂 諛⑸쾿 蹂닿린",
    "hero.share": "怨듭쑀",
    "hero.linkCopied": "留곹겕 蹂듭궗??,
    "scene.controlPc": "CONTROL PC",
    "scene.waitPc": "WAIT PC",
    "scene.mainPc": "二??묒뾽 PC",
    "scene.remotePc": "?먭꺽 PC",
    "scene.controlMode": "CONTROL MODE",
    "scene.waitMode": "WAIT MODE",
    "scene.oneInput": "?ㅻ낫?쑣룸쭏?곗뒪 ?섎굹",
    "scene.localInput": "濡쒖뺄 ?낅젰 ??CONTROL PC",
    "scene.remoteInput": "?먭꺽 ?낅젰 ??WAIT PC",
    "scene.wait.title": "Wait PC媛 ?湲고빀?덈떎",
    "scene.wait.body": "?쒖뼱諛쏆쓣 PC???곌껐 肄붾뱶 42媛 ?쒖떆?⑸땲??",
    "scene.code.title": "Control PC??媛숈? 肄붾뱶瑜??낅젰?⑸땲??,
    "scene.code.body": "Soft KVM????PC???곌껐 洹몃９怨?肄붾뱶瑜??뺤씤?⑸땲??",
    "scene.connect.title": "?곌껐?먯뒿?덈떎. Swap mode媛 爰쇱졇 ?덉쑝硫??숈떆?쒖뼱媛 ?쒖옉?⑸땲??,
    "scene.connect.body": "Swap mode媛 耳쒖졇 ?덉쑝硫??ㅼ젙???붾㈃ 寃쎄퀎媛 ?묐룞???뚭퉴吏 ?낅젰? Control PC???⑥뒿?덈떎.",
    "scene.remote.title": "Swap mode濡??쒖뼱媛 Wait PC濡??대룞?⑸땲??,
    "scene.remote.body": "?ㅼ젙???붾㈃ 寃쎄퀎?먯꽌 ?좏깮???쒓컙 ?숈븞 ?좎??섎㈃ ?ㅻ낫?쒖? 留덉슦???쒖뼱媛 ?대룞?⑸땲??",
    "tour.eyebrow": "?ㅼ젣 ???붾㈃",
    "tour.title": "?대씪?곕뱶 怨꾩젙 ?놁씠 ?ㅻ낫?쒖? 留덉슦?ㅻ? 怨듭쑀?⑸땲??",
    "tour.body": "?묒? 諛붿뿉??Wait? Control??諛붾줈 ?좏깮?⑸땲?? ?섏뼱留? ?낅젰, Swap mode, ?쒖옉 ?듭뀡???꾩슂???뚮쭔 Settings瑜??쎈땲??",
    "tour.quick": "鍮좊Ⅸ ?ㅽ뻾 諛?,
    "tour.control": "Control",
    "tour.settings": "?꾩껜 ?ㅼ젙",
    "tour.captured": "?꾩옱 媛쒕컻 踰꾩쟾 UI 誘몃━蹂닿린",
    "tour.quickTitle": "?붾㈃??李⑥??섏? ?딅뒗 以鍮??곹깭",
    "tour.quickBody": "Settings瑜??닿굅???곌껐???쒖옉?섍린 ?꾧퉴吏 硫붿씤 李쎌? ?묎쾶 ?좎??⑸땲??",
    "tour.controlTitle": "?곷? PC 肄붾뱶瑜??낅젰?섍퀬 ?쒖옉",
    "tour.controlBody": "Control mode?먯꽌???묒? 諛?以묒븰??肄붾뱶 ?낅젰??쇰줈 諛붾뚭퀬 ?ㅻⅨ履쎌뿉??諛붾줈 Start瑜??꾨? ???덉뒿?덈떎.",
    "tour.settingsTitle": "?곌껐 ?듭뀡?????붾㈃??,
    "tour.settingsBody": "?섏뼱留? 紐⑤땲?? ?낅젰 ?쒖뼱, Swap mode, ?먮룞 ?쒖옉, ?ㅻ챸?쒖? ?낅뜲?댄듃瑜??④퍡 愿由ы빀?덈떎.",
    "setup.eyebrow": "鍮좊Ⅸ ?ㅼ튂",
    "setup.title": "紐?遺꾩씠硫?濡쒖뺄 Windows PC ?쒖뼱瑜??쒖옉?????덉뒿?덈떎.",
    "setup.lead": "??而댄벂?곗뿉??媛숈? 由대━利??뚯씪???ъ슜?⑸땲?? ?쒖そ? ?湲고븯怨? ?ㅻⅨ 履쎌뿉???쒖뼱?⑸땲??",
    "setup.step1.title": "由대━利??뚯씪 ?ㅼ슫濡쒕뱶",
    "setup.step1.body": "?꾩껜 ZIP??諛쏄굅??EXE, ?몄쬆?? ?ㅼ튂 CMD瑜?媛숈? ?대뜑???〓땲??",
    "setup.step2.title": "?좊ː ?ㅼ젙 1???꾨즺",
    "setup.step2.body": "理쒖큹 ?ㅽ뻾 ??Soft KVM ?좊ː ?ㅼ젙 ?덈궡瑜??뱀씤?⑸땲??",
    "setup.step3.title": "媛?PC ??븷 ?좏깮",
    "setup.step3.body": "?쒖뼱諛쏆쓣 PC??Wait, 二?PC??Control???좏깮?⑸땲??",
    "setup.step4.title": "?뺤씤 ???곌껐",
    "setup.step4.body": "?묒そ PC???섏뼱留?肄붾뱶瑜??뺤씤?섍퀬 ?곌껐???뱀씤?⑸땲??",
    "download.label": "?꾩옱 由대━利?,
    "download.facts": "v1.6b 쨌 Windows 10/11 x64 쨌 111 MB 쨌 ?⑥씪 EXE 쨌 媛쒖씤 寃뚯떆???쒕챸",
    "download.exeAction": "EXE ?ㅼ슫濡쒕뱶 쨌 111 MB",
    "download.trustFiles": "理쒖큹 1???좊ː ?ㅼ젙 ?뚯씪",
    "download.trustHelp": "理쒖큹 ?ㅽ뻾???꾪빐 ???뚯씪??EXE? 媛숈? ?대뜑???먯꽭??",
    "download.bundleAction": "?꾩껜 ZIP ?ㅼ슫濡쒕뱶 쨌 44 MB",
    "download.bundleContents": "EXE, 泥댄겕?? ?좊ː ?ㅼ젙, 臾몄꽌 ?ы븿",
    "download.hashFile": "泥댄겕???뚯씪",
    "download.copyHash": "蹂듭궗",
    "download.copiedHash": "蹂듭궗??,
    "download.released": "由대━利?,
    "download.releaseNotes": "蹂寃??댁뿭",
    "download.allFiles": "?꾩껜 由대━利??뚯씪 蹂닿린",
    "security.eyebrow": "蹂댁븞",
    "security.title": "?곹샇 ?몄쬆?쇰줈 蹂댄샇?섎뒗 ?뷀샇???ㅻ낫?쑣룸쭏?곗뒪 ?낅젰.",
    "security.lead": "?⑦궥??媛濡쒖콈?붾씪???낅젰 ?댁슜???쎄린 ?대졄怨? 蹂議곕릺嫄곕굹 ?ъ쟾?〓맂 硫붿떆吏??嫄곕??섎룄濡??ㅺ퀎?덉뒿?덈떎.",
    "security.channel.pair": "?섏뼱留?,
    "security.channel.ecdh": "??援먰솚",
    "security.channel.verify": "寃利?,
    "security.pair.title": "寃利앸맂 ?섏뼱留?,
    "security.pair.body": "理쒖큹 ?쒖뼱 ???묒そ PC??媛숈? ?섏뼱留?肄붾뱶媛 ?쒖떆?섎뒗吏 ?뺤씤?섍퀬 ?뱀씤?⑸땲??",
    "security.encrypt.title": "?낅젰 ?뷀샇??,
    "security.encrypt.body": "?ㅻ낫?쒖? 留덉슦???낅젰? ?곹샇 ?몄쬆??P-256 ECDH/AES-256-GCM 梨꾨꼸濡??꾩넚?⑸땲??",
    "security.update.title": "?낅뜲?댄듃 寃利?,
    "security.update.body": "?낅뜲?댄듃??SHA-256怨?怨좎젙??寃뚯떆???쒕챸 寃利앹쓣 ?듦낵?댁빞 ?ㅼ튂?⑸땲??",
    "security.subnet.title": "濡쒖뺄 ?쒕툕??諛⑺솕踰?寃쎄퀎",
    "security.subnet.body": "?앹꽦?섎뒗 諛⑺솕踰?洹쒖튃? Windows LocalSubnet 踰붿쐞???곌껐留??덉슜?⑸땲??",
    "security.note.title": "?좊ː?????덈뒗 濡쒖뺄 ?ㅽ듃?뚰겕??,
    "security.note.body": "Soft KVM 寃??諛??섏떊 ?ы듃瑜??명꽣?룹뿉 吏곸젒 ?몄텧?섏? 留덉떗?쒖삤.",
    "security.note.link": "蹂댁븞 紐⑤뜽 蹂닿린",
    "compare.eyebrow": "鍮꾧탳",
    "compare.title": "濡쒖뺄 Windows 梨낆긽???꾪븳 ?뚰봽?몄썾??KVM.",
    "compare.lead": "Soft KVM? ?섎뱶?⑥뼱 ?ㅼ쐞移? ?먭꺽 ?곗뒪?ы넲 ?몄뀡, ?대씪?곕뱶 以묎퀎, 怨꾩젙 ?놁씠 媛源뚯슫 Windows PC ???瑜??ㅻ낫?쒖? 留덉슦???섎굹濡??곕젮???щ엺???꾪븳 ?꾧뎄?낅땲??",
    "compare.hardware.title": "?섎뱶?⑥뼱 KVM怨?鍮꾧탳",
    "compare.hardware.body": "USB??HDMI ?꾪솚 ?λ퉬媛 ?꾩슂?섏? ?딆뒿?덈떎. ??PC???ㅽ듃?뚰겕??洹몃?濡??덇퀬 Soft KVM? ?ㅻ낫?쒖? 留덉슦???낅젰留??대룞?⑸땲??",
    "compare.remote.title": "?먭꺽 ?곗뒪?ы넲怨?鍮꾧탳",
    "compare.remote.body": "Soft KVM? ?붾㈃???ㅽ듃由щ컢?섍굅???먭꺽 ?몄뀡??濡쒓렇?명븯吏 ?딆뒿?덈떎. 媛?PC???ㅼ젣 紐⑤땲?곕? 洹몃?濡??ъ슜?⑸땲??",
    "compare.synergy.title": "Synergy ?먮뒗 Barrier? 鍮꾧탳",
    "compare.synergy.body": "Soft KVM? Windows PC ???, 濡쒖뺄 ?쒕툕??寃?? 寃利앸맂 ?섏뼱留? ?뷀샇???낅젰, ?묒? WinForms ?명꽣?섏씠?ㅼ뿉 吏묒쨷?⑸땲??",
    "compare.mouse.title": "Mouse Without Borders? 鍮꾧탳",
    "compare.mouse.body": "Soft KVM? 吏곸젒?곸씤 ??븷 ?좏깮, 紐낆떆???섏뼱留??뺤씤, 怨꾩젙怨??대씪?곕뱶 ?쒕퉬?ㅺ? ?꾩슂 ?녿뒗 ?ъ슜 諛⑹떇??以묒떖?쇰줈 ?ㅺ퀎?덉뒿?덈떎.",
    "license.eyebrow": "?쇱씠?좎뒪",
    "license.title": "媛쒖씤 ?ъ슜? 臾대즺, 湲곗뾽쨌?낅Т???ъ슜? ?좊즺?낅땲??",
    "license.lead": "Soft KVM? 媛쒖씤 諛?鍮꾩긽?낆쟻 ?ъ슜??臾대즺?낅땲?? 湲곗뾽쨌湲곌? 諛??낅Т 紐⑹쟻 ?ъ슜?먮뒗 ?좊즺 ?쇱씠?좎뒪媛 ?꾩슂?⑸땲??",
    "license.contactLabel": "湲곗뾽 ?쇱씠?좎뒪 臾몄쓽",
    "license.terms": "?쇱씠?좎뒪 ?댁슜 議곌굔",
    "license.privacy": "媛쒖씤?뺣낫 ?덈궡",
    "license.install": "?ㅼ튂 ?덈궡",
    "license.loading": "臾몄꽌瑜?遺덈윭?ㅻ뒗 以?..",
    "license.loadError": "臾몄꽌瑜?遺덈윭?ㅼ? 紐삵뻽?듬땲?? ?꾩껜 ZIP ?먮뒗 由대━利??뚯씪?먯꽌 ?뺤씤?섏꽭??",
    "compat.eyebrow": "?명솚??諛??뚮젮吏??쒗븳",
    "compat.title": "?좊ː?????덈뒗 濡쒖뺄 ?ㅽ듃?뚰겕??Windows 10/11 x64?먯꽌 ?숈옉?⑸땲??",
    "compat.lead": "Soft KVM? ?좊ː?????덈뒗 濡쒖뺄 ?ㅽ듃?뚰겕?먯꽌 Windows PC ???瑜?吏곸젒 ?쒖뼱?섎뒗 ?⑸룄??留욎떠???덉뒿?덈떎.",
    "compat.network.title": "媛숈? 濡쒖뺄 ?ㅽ듃?뚰겕",
    "compat.network.body": "??PC媛 媛숈? ?좊ː?????덈뒗 LAN???곌껐?섏뼱 ?덉뼱???⑸땲?? ?명꽣??以묎퀎? ?ы듃 ?ъ썙?⑹? 吏?먰븯吏 ?딆뒿?덈떎.",
    "compat.windows.title": "Windows 10/11 x64",
    "compat.windows.body": "Windows 10 ?먮뒗 11 x64? ?숈씪??Soft KVM 踰꾩쟾????而댄벂?곗뿉???ъ슜?섏꽭??",
    "compat.games.title": "?덊떚移섑듃 ?쒗븳",
    "compat.games.body": "Windows ?⑹꽦 ?낅젰??李⑤떒?섎뒗 ?덊떚移섑듃 寃뚯엫? 吏?먰븯吏 ?딆뒿?덈떎.",
    "compat.uac.title": "UAC?먮뒗 沅뚰븳 ?곸듅 ?꾩슂",
    "compat.uac.body": "Wait PC?먯꽌 UAC ?붾㈃ ?쒖뼱瑜?耳쒓퀬 Windows 沅뚰븳 ?곸듅 ?붿껌???뱀씤?댁빞 ?⑸땲??",
    "compat.recovery.title": "諛⑺솕踰?諛??ъ뿰寃?,
    "compat.recovery.body": "Windows Defender 諛⑺솕踰쎌쓽 濡쒖뺄 ?ㅽ듃?뚰겕 ?묎렐???덉슜?섏꽭?? ?곌껐???딄린硫??湲?PC????肄붾뱶濡?Wait ?곹깭瑜??좎??⑸땲?? ?쒖뼱 PC?먯꽌 Control???좏깮?섍퀬 洹?肄붾뱶濡??ㅼ떆 ?곌껐?섏꽭??",
    "faq.eyebrow": "?먯＜ 臾삳뒗 吏덈Ц",
    "faq.title": "?ㅼ슫濡쒕뱶 ???뺤씤?섏꽭??",
    "faq.internet.q": "?명꽣?룹쓣 嫄곗퀜 ?쒖뼱?????덈굹??",
    "faq.internet.a": "Soft KVM? ?좊ː?????덈뒗 濡쒖뺄 ?ㅽ듃?뚰겕?⑹엯?덈떎. ?쇱슦?곕? ?듯빐 ?ы듃瑜??몃????몄텧?섏? 留덉떗?쒖삤.",
    "faq.dotnet.q": ".NET??蹂꾨룄濡??ㅼ튂?댁빞 ?섎굹??",
    "faq.dotnet.a": "?꾨땲?? 怨듦컻 Windows x64 鍮뚮뱶???꾩슂???고??꾩쓣 ?ы븿?⑸땲??",
    "faq.game.q": "寃뚯엫?먯꽌???ъ슜?????덈굹??",
    "faq.game.a": "Game input mode濡??щ윭 寃뚯엫怨?3D ?깆쓣 吏?먰빀?덈떎. Windows ?⑹꽦 ?낅젰??李⑤떒?섎뒗 ?덊떚移섑듃 寃뚯엫? 吏?먰븯吏 ?딆뒿?덈떎.",
    "faq.smartscreen.q": "Windows SmartScreen?????쒖떆?????덈굹??",
    "faq.smartscreen.a": "?꾩옱 Soft KVM? ?좊즺 怨듭씤 肄붾뱶?쒕챸 ?몄쬆?쒓? ?꾨땶 媛쒖씤 寃뚯떆???몄쬆?쒕? ?ъ슜?⑸땲?? ?ㅽ뻾 ??怨듭떇 由대━利?異쒖쿂瑜??뺤씤?섏떗?쒖삤.",
    "faq.share.q": "Windows PC ???瑜?留덉슦?ㅼ? ?ㅻ낫???섎굹濡??????덈굹??",
    "faq.share.a": "?? Soft KVM? 媛숈? ?좊ː?????덈뒗 濡쒖뺄 ?ㅽ듃?뚰겕??Windows 10/11 x64 PC ??? ?ъ씠?먯꽌 ?ㅻ낫?쒖? 留덉슦?ㅻ? 怨듭쑀?섎룄濡?留뚮뱾?덉뒿?덈떎.",
    "faq.alternative.q": "Soft KVM? Windows??Synergy ?먮뒗 Barrier ??덉씤媛??",
    "faq.alternative.a": "Windows PC ???瑜?濡쒖뺄 ?ㅽ듃?뚰겕?먯꽌 吏곸젒 ?쒖뼱?섍퀬, 寃利앸맂 ?섏뼱留곴낵 ?대씪?곕뱶 怨꾩젙 ?녿뒗 ?곌껐???꾩슂?섎떎硫?醫뗭? ??덉씠 ?????덉뒿?덈떎.",
    "faq.cloud.q": "Soft KVM???명꽣?룹씠???대씪?곕뱶 以묎퀎媛 ?꾩슂?쒓???",
    "faq.cloud.a": "?꾨땲?? 寃?됯낵 ?낅젰 ?꾩넚? 濡쒖뺄 ?ㅽ듃?뚰겕?⑹쑝濡??ㅺ퀎?덉뒿?덈떎. ?명꽣??以묎퀎, 怨꾩젙 濡쒓렇?? ?ы듃 ?ъ썙?⑹씠 ?꾩슂?섏? ?딆뒿?덈떎.",
    "final.title": "?ㅻ낫?쒖? 留덉슦???섎굹濡???PC瑜??쒖뼱?섏꽭??",
    "final.download": "Windows???ㅼ슫濡쒕뱶",
    "footer.tagline": "Windows??濡쒖뺄 ?ㅻ낫?쑣룸쭏?곗뒪 怨듭쑀 ?꾧뎄.",
    "footer.contact": "臾몄쓽",
    "footer.license": "?쇱씠?좎뒪",
    "footer.privacy": "媛쒖씤?뺣낫",
    "footer.release": "由대━利?v1.6b"
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
      ja: "Soft KVM ??궎?껁궚?먦꺖",
      ko: "Soft KVM 鍮좊Ⅸ ?ㅽ뻾 諛?
    }
  },
  control: {
    titleKey: "tour.controlTitle",
    bodyKey: "tour.controlBody",
    label: {
      en: "Soft KVM Control code entry",
      ja: "Soft KVM Control ?녈꺖?됧뀯?쏁뵽??,
      ko: "Soft KVM Control 肄붾뱶 ?낅젰 ?붾㈃"
    }
  },
  settings: {
    titleKey: "tour.settingsTitle",
    bodyKey: "tour.settingsBody",
    label: {
      en: "Soft KVM full settings panel",
      ja: "Soft KVM ?②Þ若싥깙?띲꺂",
      ko: "Soft KVM ?꾩껜 ?ㅼ젙 ?붾㈃"
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
    const settingsButton = `<span class="demo-settings-button" aria-label="Settings">??/span>`;
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
          : `<span class="demo-settings-button" aria-label="Settings">??/span>`}
        ${isConnected
          ? `<span class="demo-control-button">Stop</span><span class="demo-pause-button">Pause</span>`
          : `${isControl
            ? `<span class="demo-code-entry"><b>42</b><i>횞</i></span>`
            : `<span class="demo-wait-button">${isWaiting ? "Stop" : "Wait"}</span>`}
            <span class="demo-control-button ${isWaiting ? "is-disabled" : ""}">${isControl ? "Start" : "Control"}</span>`}
      </div>
      ${showSettings ? `
        <div class="demo-settings-body">
          <section class="demo-group demo-pair-group">
            <label>Connection group <span class="demo-input">SoftKVM</span></label>
            <label>Pairing <strong class="demo-warning">Not paired</strong></label>
            <label>Monitor: <span class="demo-select">Monitor 1&nbsp; 2560횞1440 <i>??/i></span><span class="demo-action">Refresh</span></label>
          </section>
          <section class="demo-group demo-simultaneous">
            <h4>Simultaneous control</h4>
            <div>${toggleMarkup("Keyboard control", false, true)}${toggleMarkup("Mouse control", false, true)}</div>
            <div>${toggleMarkup("Block local key", false)}${toggleMarkup("Block local clicks", false)}</div>
          </section>
          <div class="demo-inline-options">
            ${toggleMarkup("Game input mode", true, true)}
            <span class="demo-check"><i>??/i>Control UAC screens</span>
          </div>
          <section class="demo-group demo-swap">
            <h4><span class="demo-check"><i>??/i>Swap mode</span></h4>
            <label>Control direction: <span class="demo-select">Left <i>??/i></span></label>
            <label>Swap time: <span class="demo-select">1 s <i>??/i></span></label>
          </section>
          <div class="demo-security-option">
            <span class="demo-check"><i>??/i>Block macro / automated input</span>
          </div>
          <div class="demo-startup">
            <span class="demo-check"><i>??/i>Start with Windows</span>
            <span class="demo-check"><i>??/i>Minimize while waiting</span>
          </div>
          <p class="demo-command">Commands: K+M within 250 ms, hold 0.5 s&nbsp; / &nbsp;Emergency: K+M ??E</p>
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
    document.title = "Soft KVM - Windows PC ???瑜??꾪븳 ?뚰봽?몄썾??KVM";
    description.content = "Soft KVM? 媛숈? 濡쒖뺄 ?ㅽ듃?뚰겕?먯꽌 Windows PC ???瑜??ㅻ낫?쒖? 留덉슦???섎굹濡??쒖뼱?섎뒗 ?뚰봽?몄썾??KVM?낅땲?? 怨꾩젙, ?대씪?곕뱶, 以묎퀎 ?쒕쾭媛 ?꾩슂?섏? ?딆뒿?덈떎.";
  }
  else if (language === "ja") {
    document.title = "Soft KVM - 2?겹겗Windows PC?묆걨??궫?뺛깉?╉궒?줜VM";
    description.content = "Soft KVM??곩릪?섅꺆?쇈궖?ャ깓?껁깉??꺖??툓???겹겗Windows PC?믡궘?쇈깭?쇈깋?ⓦ깯?╉궧1永꾠겎?띴퐳?쇻굥?썬깢?덀궑?㎯궋KVM?㎯걲?귙궋?ャ궑?녈깉?곥궚?⒲궑?됥곦릎泳쇻궢?쇈깘?쇈겘訝띹쫨?㎯걲??;
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
