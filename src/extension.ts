// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "copy-relative-path-button" is now active!'
  );

  // Create a status bar item that is always visible (even when focus is in sidebar/chat)
  // Clicking it opens a QuickPick to choose between path-only or path:line:column
  const statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100 // Priority: higher numbers appear more to the left
  );
  statusBarItem.command = "copy-relative-path-button.copyRelativePathQuickPick";
  statusBarItem.text = "$(copy) Path";
  statusBarItem.tooltip =
    "Copy relative path (click to choose with or without line:column)";
  // Always show so it's available even when focus is in the sidebar
  statusBarItem.show();

  // Command: Copy relative path only (no line/column)
  // Triggered by: editor title button click, Cmd+Alt+C (macOS) / Ctrl+Alt+C (Win/Linux)
  const copyDisposable = vscode.commands.registerCommand(
    "copy-relative-path-button.copyRelativePath",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage("No active editor");
        return;
      }

      // Get the file path relative to the workspace root
      const uri = editor.document.uri;
      const path = vscode.workspace.asRelativePath(uri);

      // Copy to clipboard and show feedback
      await vscode.env.clipboard.writeText(path);
      vscode.window.showInformationMessage(`Path copied: ${path}`);

      // Update status bar and editor title button to show checkmark for 3 seconds
      statusBarItem.text = "$(check) Copied";
      await vscode.commands.executeCommand(
        "setContext",
        "copyPathSuccess",
        true
      );
      // Restore icon sooner (previously 3000ms -> now 1000ms for snappier UX)
      setTimeout(async () => {
        statusBarItem.text = "$(copy) Path";
        await vscode.commands.executeCommand(
          "setContext",
          "copyPathSuccess",
          false
        );
      }, 1000);
    }
  );

  // Command: Copy relative path WITH line:column position
  // Triggered by: Alt/Option-click on editor title button, Cmd+Alt+Shift+C (macOS) / Ctrl+Alt+Shift+C (Win/Linux)
  const copyWithPosDisposable = vscode.commands.registerCommand(
    "copy-relative-path-button.copyRelativePathWithPosition",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage("No active editor");
        return;
      }

      // Get the file path and append cursor position (1-indexed for user readability)
      const uri = editor.document.uri;
      let path = vscode.workspace.asRelativePath(uri);
      const position = editor.selection.active;
      path = `${path}:${position.line + 1}:${position.character + 1}`;

      // Copy to clipboard and show feedback
      await vscode.env.clipboard.writeText(path);
      vscode.window.showInformationMessage(`Path copied: ${path}`);

      // Update status bar and editor title button to show checkmark for 3 seconds
      statusBarItem.text = "$(check) Copied";
      await vscode.commands.executeCommand(
        "setContext",
        "copyPathSuccess",
        true
      );
      // Restore icon sooner (previously 3000ms -> now 1000ms for snappier UX)
      setTimeout(async () => {
        statusBarItem.text = "$(copy) Path";
        await vscode.commands.executeCommand(
          "setContext",
          "copyPathSuccess",
          false
        );
      }, 1000);
    }
  );

  // Command: Show QuickPick to choose between path-only or path:line:column
  // Triggered by: clicking the status bar item
  const quickPickDisposable = vscode.commands.registerCommand(
    "copy-relative-path-button.copyRelativePathQuickPick",
    async () => {
      // Display a menu with two options
      const selection = await vscode.window.showQuickPick(
        [
          { label: "$(copy) Copy relative path", value: "path" },
          { label: "$(list-selection) Copy path:line:column", value: "pos" },
        ],
        { placeHolder: "Choose what to copy" }
      );
      // If user cancels (ESC), do nothing
      if (!selection) {
        return;
      }

      // Dispatch to the appropriate command based on user choice
      if (selection.value === "pos") {
        await vscode.commands.executeCommand(
          "copy-relative-path-button.copyRelativePathWithPosition"
        );
      } else {
        await vscode.commands.executeCommand(
          "copy-relative-path-button.copyRelativePath"
        );
      }
    }
  );

  // Command: Reset success state (used by the checkmark button in editor title)
  // When the checkmark button is clicked, immediately reset to the copy icon
  const successDisposable = vscode.commands.registerCommand(
    "copy-relative-path-button.copyRelativePathSuccess",
    async () => {
      // Reset the icon immediately if clicked
      await vscode.commands.executeCommand(
        "setContext",
        "copyPathSuccess",
        false
      );
    }
  );

  // Register all disposables so they are properly cleaned up when the extension deactivates
  context.subscriptions.push(
    statusBarItem,
    copyDisposable,
    copyWithPosDisposable,
    quickPickDisposable,
    successDisposable
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
