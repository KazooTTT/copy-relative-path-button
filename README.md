# Copy Relative Path Button

A simple VS Code extension that adds a button to the editor title bar for copying the relative path of the active file to the clipboard.

## Features

- **One-click path copying**: Click the copy button in the editor title bar to instantly copy the relative path of the currently opened file.
- **Visual feedback**: After successful copying, the button icon changes to a checkmark for 3 seconds to confirm the action.
- **Workspace awareness**: Automatically detects if you're in a workspace and copies relative or absolute paths accordingly.
- **No configuration needed**: Works out of the box with no additional settings required.

## How to Use

1. Open any file in VS Code
2. Look for the copy icon in the right corner of the editor title bar
3. Click the button to copy the relative path
4. The path is now in your clipboard, ready to paste

## Screenshots

![Copy button visible in editor](docs/assets/image_1763130667424_0.png)

After clicking, the icon changes to a checkmark to confirm copying:

![After clicking, icon changes to checkmark](docs/assets/image_1763130707128_0.png)

## Requirements

- VS Code version 1.106.0 or higher

## Installation

### From VSIX File

1. Download the `.vsix` file
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

---

**Enjoy copying relative paths effortlessly!**
