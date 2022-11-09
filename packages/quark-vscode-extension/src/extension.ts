import * as vscode from "vscode";
import { kebabCase, bigCamelize } from "./utils";
import { componentMap } from "./componentMap";
import { ComponentDesc } from "./componentDesc";

const DOC = "";

const LINK_REG = /(?<=<quark-)([\w-]+)/g;
const BIG_LINK_REG = /(?<=<Quark-)([\w-])+/g;
const files = ["vue", "typescript", "javascript", "react"];

const provideHover = (
  document: vscode.TextDocument,
  position: vscode.Position,
  token: vscode.CancellationToken
) => {
  const line = document.lineAt(position);
  const componentLink = line.text.match(LINK_REG) ?? [];
  const componentBigLink = line.text.match(BIG_LINK_REG) ?? [];
  const components = [
    ...new Set([...componentLink, ...componentBigLink.map(kebabCase)]),
  ];

  if (components.length) {
    const text = components
      .filter((item: string) => componentMap[item])
      .map((item: string) => {
        const { site } = componentMap[item];

        return new vscode.MarkdownString(
          `[QuarkUI -> $(references) 请查看 ${bigCamelize(
            item
          )} 组件官方文档](${DOC}${site})\n`,
          true
        );
      });

    return new vscode.Hover(text);
  }
};

const provideCompletionItems = () => {
  const completionItems: vscode.CompletionItem[] = [];
  Object.keys(componentMap).forEach((key: string) => {
    completionItems.push(
      new vscode.CompletionItem(
        `quark-${key}`,
        vscode.CompletionItemKind.Field
      ),
      new vscode.CompletionItem(
        bigCamelize(`quark-${key}`),
        vscode.CompletionItemKind.Field
      )
    );
  });
  return completionItems;
};

const resolveCompletionItem = (item: vscode.CompletionItem) => {
  const name = kebabCase(<string>item.label).slice(6);
  const descriptor: ComponentDesc = componentMap[name];
  const propsText = descriptor.props ? descriptor.props : "";
  const tagSuffix = `</${item.label}>`;

  item.insertText = `<${item.label} ${propsText}>${tagSuffix}`;

  item.command = {
    title: "quarkui-move-cursor",
    command: "quarkui-move-cursor",
    arguments: [-tagSuffix.length - 2],
  };
  return item;
};

const moveCursor = (characterDelta: number) => {
  const active = vscode.window.activeTextEditor!.selection.active!;
  const position = active.translate({ characterDelta });
  vscode.window.activeTextEditor!.selection = new vscode.Selection(
    position,
    position
  );
};

export function activate(context: vscode.ExtensionContext) {
  // 注册 quarkui-move-cursor 命令
  vscode.commands.registerCommand("quarkui-move-cursor", moveCursor);

  // 给插件订阅命令
  context.subscriptions.push(
    // 悬停提示
    vscode.languages.registerHoverProvider(files, {
      provideHover,
    }),
    // 自动补全
    vscode.languages.registerCompletionItemProvider(files, {
      provideCompletionItems,
      resolveCompletionItem,
    })
  );
}

// 插件释放的时候触发
export function deactivate() {}
