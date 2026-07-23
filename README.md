# Soft KVM

**English** | [한국어](README.ko.md)

Soft KVM lets one Windows PC control another Windows PC on the same local network with one mouse and keyboard.

## Quick start

1. On the PC you want to control, select **Wait** and note the 2-digit code.
2. On the controlling PC, select **Control** and enter that code.
3. Select **Start** to connect.
4. Select **Stop** when you want to disconnect.

Select `×` beside the code field to cancel without connecting. Use **Pause** when you want to keep the connection but temporarily stop sending input.

## Command window

Hold `K` and `M` together for one second, then release both keys. Press:

- `X` to turn local click blocking on or off
- `K` to turn local keyboard blocking on or off
- `G` to turn game input mode on or off
- `Z` to pause or resume remote input
- `E` to stop immediately and recover input
- `Esc` to close the command window

Normal `Alt` shortcuts and `Esc` are sent to the remote PC when the command window is closed.

## Settings

- **Start with Windows**: starts Soft KVM automatically after Windows sign-in. It stays hidden in the notification area; double-click the tray icon to open it.
- **Minimize while waiting**: hides the waiting window after a connection is made.
- **Keyboard control**: sends keyboard input to the waiting PC.
- **Mouse control**: sends mouse input to the waiting PC.
- **Block local keyboard**: keeps sending keys remotely while preventing local typing.
- **Block local clicks**: keeps sending clicks remotely while preventing clicks outside Soft KVM on the controlling PC.
- **Game input mode**: uses relative mouse movement for games and 3D applications.
- **Connection group**: limits discovery to PCs using the same group name.
- **Control UAC screens**: allows input on UAC prompts and elevated applications after administrator approval.

Settings are saved for the current Windows user and are not copied to the other PC.

## Swap mode

Turn on **Swap mode** on both PCs and select the same **Control swap direction**.

The direction is always based on the controlling PC. For example, `Left` means that holding the pointer at the left edge of the controlling PC for one second transfers control to the waiting PC. Move away from the return edge and hold there again for one second to return.

If the two PCs use different directions or only one PC has Swap mode enabled, Soft KVM asks you to correct the settings.

## Game input mode

Use **Game input mode** when a game needs continuous camera movement. Turn it off before using normal desktop controls or game menus that require absolute pointer positions.

Use the same latest Soft KVM EXE on both PCs. Games that reject Windows synthetic input through anti-cheat protection are not supported.

## Updates and connection tips

- Select **Check for updates** in Settings to download and install the latest public release.
- Allow Soft KVM on private networks when Windows Defender Firewall asks.
- Both PCs must be on the same trusted local network.
- If a connection fails, confirm that both PCs use the same version, connection group, and Swap mode settings.
- Stopping, pausing, disconnecting, or using emergency recovery releases forwarded keys and mouse buttons.

> Use Soft KVM only on a trusted local network. Input traffic is not encrypted. Do not expose it directly to public Wi-Fi or the internet.

