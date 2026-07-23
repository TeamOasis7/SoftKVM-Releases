# Soft KVM

**English** | [한국어](README.ko.md)

Soft KVM is a lightweight WinForms app that forwards mouse and keyboard input between Windows PCs on the same local network.

## Usage

1. On the PC to be controlled, select **Wait** and note the 2-digit code.
2. On the controlling PC, select **Control** and enter the code shown on the waiting PC.
3. Select **Start**. Soft KVM discovers and connects to the other PC on the local network.
4. Select **Stop** to disconnect and return to the initial screen. For emergency recovery, hold `K` and `M` together for one second on the controlling PC, then press `E`.

Select `×` beside the code field to cancel control setup without connecting.

Mouse coordinates are scaled proportionally between the monitors selected on each PC. Select **Pause**, or open the `K+M` command window and press `Z`, to stop input forwarding without disconnecting. After connection, both app windows move to the top-right corner of their selected monitors.

Open Settings with the gear button to configure:

- Start with Windows
- Minimize while waiting
- Block local clicks (`X` in the `K+M` command window)
- Block the local keyboard (`K` in the `K+M` command window)
- Keyboard control
- Mouse control
- Game input mode (`G` in the `K+M` command window)
- Connection group
- Swap mode and swap edge (`Left`, `Right`, or `Top`)

Settings are stored for the current Windows user. **Keyboard control** enables or disables remote keyboard forwarding. **Block local keyboard** continues sending keys to the waiting PC while suppressing them on the controlling PC. **Block local clicks** continues forwarding clicks while suppressing local clicks outside the Soft KVM window.

Hold `K` and `M` together for one second to open the local command window. After releasing both keys, press `X`, `K`, `G`, `Z`, or `E` to run a command, or press `Esc` to close the window. Normal `Alt` combinations and `Esc` are otherwise forwarded to the remote PC.

**Game input mode** uses keyboard scan codes and relative mouse movement. It continuously returns the controlling PC cursor to the center of the selected monitor, allowing camera movement beyond the screen edge. Disable it with `G` in the `K+M` command window before using normal desktop or game-menu clicks. Games that block Windows synthetic input through anti-cheat systems are not supported.

The game-input protocol is not compatible with older builds. Always use the same latest EXE on both PCs. Soft KVM does not take focus away from the game window on the waiting PC. High-rate relative mouse events are accumulated and rate-limited to avoid overloading the connection.

**Swap mode** must be enabled with the same edge on both PCs. A mismatch causes the protocol v9 handshake to reject the connection and reopen Settings. For example, selecting `Left` transfers control when the pointer remains at the left edge of the controlling PC for one second. To return, move away from and then remain at the corresponding edge of the waiting PC for one second.

The active edge is marked by a 3-pixel DPI-independent indicator. A colored glow follows the virtual remote cursor. Swap entry and return use acknowledgements, retransmission, and PING/PONG connection monitoring. If communication fails, Soft KVM prioritizes restoring local input on the controlling PC.

Settings are not shared over the network. **Minimize while waiting** applies only to the waiting role, while keyboard, mouse, and local-blocking settings apply only to the controlling role. When the waiting app is minimized after connection, a translucent status indicator appears in the top-right corner. Click it to release input, disconnect, stop helper processes, and exit Soft KVM. Stopping, pausing, or disconnecting releases all forwarded keys and mouse buttons.

Select **Check for updates** to query the latest public [SoftKVM-Releases](https://github.com/TeamOasis7/SoftKVM-Releases) release. Soft KVM downloads the EXE and SHA-256 file, verifies integrity, releases active input, replaces the executable, and restarts. Do not rename or move the executable while an update is in progress.

The published Windows x64 EXE is self-contained and does not require a separate .NET installation.

Allow Soft KVM on private networks when Windows Defender Firewall prompts. Discovery uses UDP port `45820`; active control uses a dynamically selected TCP port on the waiting PC.

Relative movement in swap and game modes is scaled using the selected monitor dimensions on both PCs. Use the same connection-group name on both PCs; only its hash is sent during discovery. Both PCs must use the same protocol v9 build. Repeated swaps use a new input generation, and the return edge is tracked with Soft KVM's internal virtual cursor rather than a Windows cursor that a game may hide or lock.

When **Control UAC screens** is enabled, starting Wait requests administrator approval once. A temporary SYSTEM bridge follows the secure desktop so UAC dialogs and elevated apps can receive input. The temporary service is deleted immediately after launching the SYSTEM wait process, and the helper process exits when waiting stops or Soft KVM closes.

> Use Soft KVM only on a trusted local network. Input traffic is not encrypted. Do not expose it directly to public Wi-Fi or the internet.
