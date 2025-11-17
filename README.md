# Copy Relative Path Button

[![VS Marketplace](https://img.shields.io/visual-studio-marketplace/v/kazoottt.copy-relative-path-button?label=VS%20Marketplace)](https://marketplace.visualstudio.com/items?itemName=kazoottt.copy-relative-path-button)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/kazoottt.copy-relative-path-button)](https://marketplace.visualstudio.com/items?itemName=kazoottt.copy-relative-path-button)
[![Rating](https://img.shields.io/visual-studio-marketplace/r/kazoottt.copy-relative-path-button)](https://marketplace.visualstudio.com/items?itemName=kazoottt.copy-relative-path-button)
[![Latest VSIX](https://img.shields.io/github/v/release/KazooTTT/copy-relative-path-button?label=GitHub%20Release)](https://github.com/KazooTTT/copy-relative-path-button/releases/latest)

A simple VS Code extension that adds a button to the editor title bar for copying the relative path of the active file to the clipboard.

## Usage

![Copy relative path demo](docs/assets/demo.gif)

## Features

- **One-click path copying**: Click the copy button in the editor title bar to instantly copy the relative path of the currently opened file.
- **Visual feedback**: After successful copying, the button icon changes to a checkmark for 3 seconds to confirm the action.
- **Active tab aware**: The editor title button shows based on the active tab, not only when the text area has focus.
- **Status bar button**: A status bar button is always available so you can copy even when focus is on the sidebar (e.g., Chat view).
- **Workspace awareness**: Automatically detects if you're in a workspace and copies relative or absolute paths accordingly.
- **No configuration needed**: Works out of the box with no additional settings required.
- **Choose your mode quickly**: Use Alt/Option-click on the editor title button, a status bar QuickPick, or keybindings to copy either plain path or path with line:column on demand.

## How to Use

1. Open any file in VS Code
2. Use one of the options below:
   - Editor title button: click to copy the path; Alt/Option-click to copy `path:line:column`.
   - Status bar: click `$(copy) Path` to open a QuickPick and choose between plain path or `path:line:column`.
   - Commands/Keybindings: `Copy Relative Path` (`Cmd+Alt+C` on macOS / `Ctrl+Alt+C` on Windows/Linux) or `Copy Relative Path (with Line:Column)` (`Cmd+Alt+Shift+C` / `Ctrl+Alt+Shift+C`).
3. The path is now in your clipboard, ready to paste

## Installation

- From Marketplace: [kazoottt.copy-relative-path-button](https://marketplace.visualstudio.com/items?itemName=kazoottt.copy-relative-path-button)
- From GitHub Releases (VSIX): [Latest release](https://github.com/KazooTTT/copy-relative-path-button/releases/latest)

### From VSIX File

1. Download the `.vsix` file from the [latest release](https://github.com/KazooTTT/copy-relative-path-button/releases/latest)
2. Open VS Code
3. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on Mac)
4. Type "Extensions: Install from VSIX"
5. Select the downloaded `.vsix` file

### From Source

1. Clone this repository
2. Run `npm install` or `pnpm install`
3. Run `npm run compile` or `pnpm run compile`
4. Press `F5` to open the extension in development mode

## Development

To contribute or modify the extension:

```bash
git clone <repository-url>
cd copy-relative-path-button
pnpm install
pnpm run compile
# Then press F5 in VS Code to test
```

## Release Notes

### 0.0.1

- Initial release with copy relative path functionality and visual feedback system

### 0.0.4

- Add second command to copy with `line:column`
- Editor title button supports Alt/Option-click to copy with position
- Status bar button shows QuickPick to choose mode

---

**Enjoy copying relative paths effortlessly!**
