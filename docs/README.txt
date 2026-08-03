SOFT KVM INSTALLATION GUIDE

Soft KVM controls another Windows PC on the same trusted local network with one
keyboard and mouse.

LICENSE

- Personal and non-commercial use is free.
- Business, organizational, and work-related use requires a paid license.
- Business license contact: teamoasis78@gmail.com
- See LICENSE.txt for the complete terms and PRIVACY.txt for data handling.

INSTALLATION

1. For a public signed release, put these files in the same folder:
   - SoftKVM_<version>.exe
   - SoftKVM-Publisher.cer
   - Install-SoftKVM-Certificate.cmd
   - LICENSE.txt
   - PRIVACY.txt
   - README.txt
2. Run the Soft KVM EXE.
3. If Windows SmartScreen appears, confirm that the file came from the official
   Soft KVM release before choosing to run it.
4. When Soft KVM shows the one-time publisher trust setup prompt, approve it to
   install SoftKVM-Publisher.cer for the current Windows user. If only the CMD
   helper is available, Soft KVM can run Install-SoftKVM-Certificate.cmd instead.
5. If the prompt does not appear, run Install-SoftKVM-Certificate.cmd manually.
6. Use the same Soft KVM version on both PCs and allow the Windows Defender
   Firewall prompt for trusted local network communication.

Unsigned local test builds may omit the publisher CER and installation CMD.
Those test builds are for pre-release verification and do not change the
publisher trust installed by a public signed release.

QUICK START

1. On the PC to be controlled, select Wait and note the 2-digit code.
2. On the controlling PC, select Control and enter that code.
3. Select Start.
4. On first pairing, verify that both PCs show the same 6-digit code before
   approving the connection.

한국어 설치 안내

- 개인 및 비상업적 사용은 무료입니다.
- 기업·기관 및 업무 목적 사용에는 유료 라이선스가 필요합니다.
- 기업 라이선스 문의: teamoasis78@gmail.com

1. 공개 서명 릴리즈에서는 EXE, CER, 인증서 설치 CMD와 이 문서들을 같은
   폴더에 둡니다.
2. Soft KVM EXE를 실행합니다.
3. SmartScreen이 나타나면 공식 배포 파일인지 확인한 뒤 실행합니다.
4. 최초 게시자 신뢰 설정 안내가 나타나면 승인하여 현재 Windows 사용자에
   SoftKVM-Publisher.cer를 설치합니다. CER 직접 설치가 불가능한 경우에는
   인증서 설치 CMD를 실행할 수 있습니다. 안내가 나타나지 않으면 CMD를
   직접 한 번 실행합니다.
5. 두 PC에서 같은 버전을 사용하고 Windows 방화벽의 로컬 네트워크 통신을
   허용합니다.
6. 제어받을 PC에서 Wait, 제어할 PC에서 Control을 선택하고 코드를 입력합니다.
7. 최초 연결에서는 양쪽에 표시된 6자리 페어링 코드가 같은지 확인합니다.

서명되지 않은 로컬 테스트 빌드에는 게시자 CER과 설치 CMD가 없을 수 있습니다.
이 테스트 빌드는 릴리즈 전 검증용이며 기존 공개 릴리즈의 게시자 신뢰 설정을
변경하지 않습니다.
