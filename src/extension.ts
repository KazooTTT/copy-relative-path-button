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

  const copyDisposable = vscode.commands.registerCommand(
    "copy-relative-path-button.copyRelativePath",
    async () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage("No active editor");
        return;
      }

      const uri = editor.document.uri;
      const path = vscode.workspace.asRelativePath(uri);
      await vscode.env.clipboard.writeText(path);
      vscode.window.showInformationMessage(`Path copied: ${path}`);
      await vscode.commands.executeCommand(
        "setContext",
        "copyPathSuccess",
        true
      );
      setTimeout(async () => {
        await vscode.commands.executeCommand(
          "setContext",
          "copyPathSuccess",
          false
        );
      }, 3000);
    }
  );

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

  context.subscriptions.push(copyDisposable, successDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
