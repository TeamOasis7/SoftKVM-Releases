# Soft KVM website

This folder is a static download page for Soft KVM.

English is the default language. The EN / 한국어 switch stores the visitor's
choice in local browser storage. Add future languages to `app.js`.

The product demo is rendered as HTML/CSS from the v1.4b desktop app layout and
color values. It includes the compact bar, Control entry, and Settings without
upscaling low-resolution screenshots. Keep public demos free of connection-group
and paired-device identifiers.

The hero animation uses two monitor scenes to show Wait, code entry, pairing,
and remote input transfer in order.

The license, privacy, and installation links use the copies in `website/docs/`.
Those files must remain byte-for-byte identical to the canonical files in the
repository root. The release publishing script rejects a package if they differ.

## Local preview

Open `website/index.html` directly in a browser.

## GitHub Pages

Use `website/` as the Pages source folder, or copy its contents to a `gh-pages` branch.

## Release updates

When publishing a new public release:

1. Update every `v1.4b` and `SoftKVM_1.4b.exe` reference in `index.html`.
2. Update the SHA-256 value.
3. Check the four release links:
   - EXE
   - SHA-256
   - `SoftKVM-Publisher.cer`
   - `Install-SoftKVM-Certificate.cmd`
