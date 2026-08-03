# Soft KVM

[English](README.md) | **한국어** | [日本語](README.ja.md)

Soft KVM은 같은 신뢰할 수 있는 로컬 네트워크의 Windows PC 두 대를 키보드와 마우스 하나로 제어하는 Windows 소프트웨어 KVM입니다. 계정, 클라우드 서비스, 중계 서버, 하드웨어 KVM 스위치가 필요하지 않습니다. 프로그램 UI는 영어로 고정되어 있으며, 아래 설명은 실제 영어 버튼 이름을 그대로 사용합니다.

공식 다운로드 페이지: https://teamoasis7.github.io/SoftKVM-Releases/

최신 공개 릴리즈: https://github.com/TeamOasis7/SoftKVM-Releases/releases/latest

이 README는 Soft KVM 최신 버전을 기준으로 설명합니다. 양쪽 PC에서 최신 공식 릴리즈를 사용하십시오.

웹사이트 소스는 [website/index.html](website/index.html)에 있습니다.

## 빠른 시작

1. 제어받을 PC에서 **Wait**를 누르고 2자리 코드를 확인합니다.
2. 제어할 PC에서 **Control**을 누르고 해당 코드를 입력합니다.
3. **Start**를 눌러 연결합니다.
4. 최초 연결에서는 양쪽 PC에 표시된 6자리 페어링 코드가 완전히 같은지 확인한 뒤, 양쪽에서 **Yes**를 누릅니다.
5. 사용을 마치면 **Stop**을 누릅니다.

연결하지 않고 취소하려면 코드 입력칸 옆의 `×`를 누릅니다. 연결은 유지하면서 입력 전송만 잠시 멈추려면 **Pause**를 사용합니다.

## 명령 창

`K` 또는 `M`을 누른 뒤 250밀리초 안에 다른 키도 누릅니다. 명령 창이 열릴 때까지 두 키를 약 0.5초간 누르고 있다가 모두 놓은 뒤 명령 키를 누릅니다.

- `X`: 로컬 클릭 차단 켜기/끄기
- `K`: 로컬 키보드 차단 켜기/끄기
- `G`: Game precision mode 켜기/끄기
- `Z`: 원격 입력 일시 정지/재개
- `E`: 즉시 중단하고 입력 복구
- `Esc`: 명령 창 닫기

`X`와 `K`는 **Swap mode**를 끈 동시제어 상태에서만 사용할 수 있습니다. `K`는 **Keyboard control**, `G`는 **Mouse control**도 켜져 있어야 합니다.

명령 창이 닫혀 있을 때 `Esc`는 현재 입력 설정, Pause 상태와 Swap 제어 위치에 따라 일반 키로 처리됩니다. 명령 창의 **Auto close**를 켜면 선택한 시간이 지난 뒤 자동으로 닫힙니다.

## Settings

- **Start with Windows**: Windows 로그인 후 자동으로 시작하고 알림 영역에 숨습니다.
- **Minimize while waiting**: 연결된 뒤 대기 PC의 창을 숨깁니다.
- **Keyboard control**: 키보드 입력을 대기 PC로 보냅니다.
- **Mouse control**: 마우스 입력을 대기 PC로 보냅니다.
- **Block local key**: 키를 원격으로 보내면서 제어 PC의 로컬 입력을 막습니다.
- **Block local clicks**: 클릭을 원격으로 보내면서 제어 PC의 로컬 클릭을 막습니다.
- **Game precision mode**: 게임과 3D 프로그램용 상대 마우스 이동을 사용합니다.
- **Connection group**: 같은 그룹 이름을 사용하는 PC만 검색합니다.
- **Pairing**: 현재 그룹에 등록된 PC를 표시합니다. **Unpair**를 누르면 등록을 지우며 다음 연결에서 최초 페어링을 다시 진행합니다.
- **Monitor**: 입력과 Swap 경계의 기준으로 사용할 모니터를 선택합니다.
- **Control UAC screens**: 관리자 승인 후 UAC 화면과 관리자 권한 프로그램을 제어합니다.
- **Block macro / automated input**: 매크로나 자동화 도구가 만든 입력을 전송 대상에서 제외합니다. 신뢰할 수 있는 자동화 입력을 의도적으로 전송할 때만 끄십시오.

설정은 현재 Windows 사용자 계정에 저장되며 다른 PC로 자동 복사되지 않습니다.

## Simultaneous control(동시제어)

**Swap mode**가 꺼져 있으면 연결 중인 키보드와 마우스 입력이 **Keyboard control**과 **Mouse control** 설정에 따라 대기 PC로 전달됩니다. 필요할 때 로컬 입력 차단을 켜십시오.

## Swap mode

양쪽 PC에서 **Swap mode**를 켜고 같은 **Control direction**을 선택합니다.
**Swap time**은 0.5초, 1초(기본값), 1.5초, 2초 중에서 선택하며 제어 PC의 값이 진입과 복귀에 모두 적용됩니다.

방향은 항상 제어 PC 기준입니다. 예를 들어 `Left`는 제어 PC의 왼쪽 끝에서 포인터를 선택한 시간 동안 유지하면 대기 PC로 제어가 넘어간다는 뜻입니다. 복귀할 때는 복귀 경계에서 한 번 벗어난 뒤 다시 그 경계에서 선택한 시간 동안 유지합니다.

양쪽 방향이 다르거나 한쪽에서만 Swap mode를 켜면 Soft KVM이 설정 수정을 안내합니다.

## Game precision mode

게임에서 연속적인 카메라 이동이 필요할 때 **Game precision mode**를 사용합니다. 일반 데스크톱 조작이나 절대 포인터 위치가 필요한 게임 메뉴를 사용하기 전에는 끄십시오. Windows 합성 입력을 차단하는 안티치트 게임은 지원되지 않습니다.

## 연결과 보안

- 양쪽에서 같은 최신 Soft KVM EXE를 사용합니다.
- Windows Defender 방화벽이 물으면 Soft KVM 통신을 허용합니다. 프로그램이 만드는 규칙은 Windows가 LAN을 Private 또는 Public으로 분류하더라도 로컬 서브넷만 허용합니다.
- 업데이트는 SHA-256과 승인된 Soft KVM 게시자 서명을 모두 통과한 경우에만 설치됩니다.
- 현재 게시자를 확인할 수 없는 아주 오래된 빌드는 EXE를 한 번 수동 교체해야 합니다. 최신 공식 릴리즈에서 최신 EXE, `SoftKVM-Publisher.cer`, `Install-SoftKVM-Certificate.cmd`를 같은 폴더에 받으십시오. Soft KVM 최초 실행 시 신뢰 설정 안내가 뜨면 CMD 실행을 승인하면 됩니다. 안내가 뜨지 않거나 CMD 파일이 없으면 CMD 파일을 직접 한 번 실행하십시오.
- 페어링 창이 뜨면 양쪽 화면의 6자리 전체가 같은지 확인합니다. 예상하지 않은 연결이거나 코드가 다르면 거부합니다.
- 각 PC는 저장된 RSA 장치 신원으로 일회성 P-256 ECDH 공개키, 역할, 프로토콜 버전, nonce와 장치 인증서가 포함된 핸드셰이크에 서명합니다. 양쪽은 인증된 ECDH 공유 비밀에서 방향별 AES-256-GCM 키를 생성합니다. 최초 페어링에서 승인한 PC 인증서로 이후 연결을 확인합니다.
- 2자리 코드와 **Connection group**은 PC 검색용이며 비밀번호가 아닙니다.
- 신뢰할 수 있는 로컬 네트워크에서 사용하고 Soft KVM 포트를 인터넷에 직접 노출하지 마십시오.

## 빌드

릴리즈 게시에는 .NET SDK `10.0.302`와 저장소의 릴리즈 생성 스크립트를 사용합니다.

```powershell
.\publish-release.ps1
```

게시된 Windows x64 EXE는 .NET 런타임을 포함하므로 별도 설치가 필요하지 않습니다.
검증 순서는 [CODING_GUARDRAILS.md](CODING_GUARDRAILS.md), 버전과 자산 규칙은
[VERSIONING.md](VERSIONING.md), 서명키 복구와 릴리즈 업로드 준비는
[SIGNING_KEY_RECOVERY.md](SIGNING_KEY_RECOVERY.md)를 확인하십시오.
