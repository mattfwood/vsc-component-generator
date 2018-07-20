import * as vscode from 'vscode';

export async function getComponentName(): Promise<String> {
  const input = await vscode.window.showInputBox();
  if (input !== '') {
    return input;
  }

  // repeat until a valid input is given
  getComponentName();
}
