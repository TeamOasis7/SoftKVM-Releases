# Soft KVM website

This folder is a static download page for Soft KVM, a Windows software KVM for
sharing one keyboard and mouse between two Windows PCs on the same trusted local
network.

Public URL: https://teamoasis7.github.io/SoftKVM-Releases/

Sitemap URL for Google Search Console and Bing Webmaster Tools:
https://teamoasis7.github.io/SoftKVM-Releases/sitemap.xml

English is the default language. The EN / 한국어 switch stores the visitor's
choice in local browser storage. Add future languages to `app.js`.

The product demo is rendered as HTML/CSS from the v1.5b desktop app layout and
color values. It includes the compact bar, Control entry, and Settings without
upscaling low-resolution screenshots. Keep public demos free of connection-group
and paired-device identifiers.

The hero animation uses two monitor scenes to show Wait, code entry, pairing,
and remote input transfer in order.

The license, privacy, and installation links use the copies in `website/docs/`.
Those files must remain byte-for-byte identical to the canonical files in the
repository root. The release publishing script rejects a package if they differ.

The ZIP links point to the complete public Windows x64 release package. Keep the
EXE and trust setup files available as individual release assets as well.

## Local preview

Open `website/index.html` directly in a browser.

## GitHub Pages

Use `website/` as the Pages source folder, or copy its contents to a `gh-pages` branch.

Keep `robots.txt`, `sitemap.xml`, canonical metadata, Open Graph/Twitter card
metadata, and the JSON-LD `SoftwareApplication` block aligned with the public
GitHub Pages URL after each public release.

## Release updates

When publishing a new public release:

1. Update every version and versioned asset reference in `index.html`.
2. Update the EXE size, SHA-256 value, release date, and release-notes link.
3. Update the direct `SoftKVM_<version>_Windows_x64.zip` download links.
4. Confirm that the release contains all eight assets:
   - EXE
   - SHA-256
   - complete Windows x64 ZIP package
   - `SoftKVM-Publisher.cer`
   - `Install-SoftKVM-Certificate.cmd`
   - `LICENSE.txt`
   - `PRIVACY.txt`
   - `README.txt`
5. Verify the website download, ZIP, publisher-trust, release, and local document
   links against those assets.
