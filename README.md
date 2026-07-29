# Soft KVM website

This folder is a static download page for Soft KVM, a Windows software KVM for
sharing one keyboard and mouse between two Windows PCs on the same trusted local
network.

Public URL: https://teamoasis7.github.io/SoftKVM-Releases/

Korean URL: https://teamoasis7.github.io/SoftKVM-Releases/ko/

Japanese URL: https://teamoasis7.github.io/SoftKVM-Releases/ja/

Sitemap URL for Google Search Console and Bing Webmaster Tools:
https://teamoasis7.github.io/SoftKVM-Releases/sitemap.xml

English is the default language at `/`. Korean has a static `/ko/` page and
Japanese has a static `/ja/` page for language-specific SEO. The language switch
navigates between those URLs. Add future languages to `app.js` and create
matching static language pages.

The product demo is rendered as HTML/CSS from the current development desktop app layout and
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

The signed release workflow renders this folder with the new package metadata
and publishes the result to the release repository's `gh-pages` branch.

Keep `robots.txt`, `sitemap.xml`, canonical metadata, Open Graph/Twitter card
metadata, and the JSON-LD `SoftwareApplication` block aligned with the public
GitHub Pages URL after each public release.

## Release updates

When publishing a new public release:

1. Run `publish-release.ps1 -UploadGitHubRelease` only after the selected public
   version and numeric assembly versions are committed.
2. The workflow calculates and renders the version, asset names and URLs, EXE
   and ZIP sizes, SHA-256, release date, and translated version strings from the
   completed signed package.
3. The workflow validates strict UTF-8, required HTML structure, and the
   rendered `app.js` syntax with Node.js before it can push.
4. The workflow synchronizes the English, Korean, and Japanese root README files
   to the release repository and pushes this rendered folder to `gh-pages`.
5. Confirm that the release contains all eight assets:
   - EXE
   - SHA-256
   - complete Windows x64 ZIP package
   - `SoftKVM-Publisher.cer`
   - `Install-SoftKVM-Certificate.cmd`
   - `LICENSE.txt`
   - `PRIVACY.txt`
   - `README.txt`
6. Verify the public README language links and the website download, ZIP,
   publisher-trust, release, and local document links against those assets.

If only the public-content step needs recovery, rerun
`sync-public-release-content.ps1` with the existing version and signed release
directory. Do not recreate or replace the GitHub release.

Use `-ValidateOnly` first to run the same render and validation steps without
committing or pushing either public repository branch.
