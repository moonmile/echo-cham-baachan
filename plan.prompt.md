## Plan: エコーチェンばぁちゃん アプリ実装

README.mdに基づき、小中学生向けのエコーチェンバー現象疑似体験ツールを実装する計画です。Create React Appの初期状態から、LINEライクなチャットUIと5人のばぁちゃんAIを構築します。

### Steps

1. **依存関係のインストール** - `axios`を追加し、`package.json`を更新
2. **環境変数の設定** - `.env`ファイルを作成し、`REACT_APP_OPENAI_API_KEY`を定義
3. **UIコンポーネントの作成** - `src/components/`配下に`ChatContainer`、`MessageBubble`、`GrandmaAvatar`、`InputArea`を実装
4. **ばぁちゃんの設定ファイル作成** - `src/data/grandmas.js`に5人のばぁちゃん情報（名前、アイコン、システムプロンプト）を定義
5. **OpenAI APIサービスの実装** - `src/services/openai.js`でAPIリクエスト処理を作成
6. **メインApp.jsの実装** - `src/App.js`でチャット状態管理とコンポーネント統合
7. **LINEライクなスタイリング** - `src/App.css`で吹き出し・チャットUIのCSSを実装

### Further Considerations

1. **APIキーのセキュリティ** - フロントエンドから直接APIを呼ぶとキーが露出します。Vercel Serverless Functions (`/api/chat.js`) でラップする方式に変更しますか？

Vercel Serverless Functions を使う方式で。

2. **ばぁちゃんアイコン** - 5人分のアイコン画像はどこから用意しますか？（絵文字/生成AI/フリー素材）

ひとまず、絵文字で。

3. **性格の切り替え機能** - READMEに「システムプロンプトを用意して切り替えられる」とありますが、UIでの切り替え方法は？（ドロップダウン/タブ/設定画面）

設定が画面を作って。



