# アプリケーションについて

<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/xyzsince2014/tokyomap-web">
<img alt="GitHub tag (latest by date)" src="https://img.shields.io/github/v/tag/xyzsince2014/tokyomap-web">

## 概要
<p>
React&nbsp;+&nbsp;Redux, Node.js, 及びAWSの勉強として作成したアプリケーション.<br>
送信者の位置情報を基にテキストメッセージ + アイコンをマップ上に表示する.
</p>
<p><strong>デモは<a href="https://imgur.com/gallery/3tVWKBd">こちら</a></strong></p>

<br>

## URL
https://www.tokyomap.live

<br>

## 機能一覧
### 1. ソケット通信を使用してマップ上にテキストメッセージ + アイコンを表示
<p>
`socket.io`でメッセージを受信してアイコンと合わせてマップ上に表示する. <br>
表示位置は送信者のブラウザから取得する.
</p>

<br>

### 2. 投稿から時間経過に応じてアイコンのスタイルを動的に変化
<p>
<img src="https://user-images.githubusercontent.com/30502252/109419718-31e4a480-7a12-11eb-94b9-3c828b8b7247.gif" height="280px" width="25%">
&nbsp;&nbsp;<img src="https://user-images.githubusercontent.com/30502252/109419721-3741ef00-7a12-11eb-8692-e37ff476952b.gif" height="280px" width="25%">
</p>
<p>メッセージ投稿から5分後, 10分後でアイコンのスタイルが変化.</p>
<p>
<img src="https://user-images.githubusercontent.com/30502252/109424148-cd334500-7a25-11eb-9813-5016183e6ee3.png" height="280px" width="25%">&nbsp;&nbsp;<img src="https://user-images.githubusercontent.com/30502252/109424145-cad0eb00-7a25-11eb-87fb-99831550a460.png" height="280px" width="25%">
&nbsp;&nbsp;</p>
<p>10分後~90分後にかけて徐々にFadeOutする.</p>

<br>

### 3. 認証機能
<p>メッセージアイコン(画面右上)押下でSNS認証用モーダル表示する.</p>

<br>

### 4. メッセージ投稿
<p>認証後、メッセージアイコン(画面右上)押下でメッセージ投稿用モーダルを表示.<br>
`Post`ボタン押下すると, `socket.io`を使用してメッセージを投稿できる.
</p>
<p><img src="https://user-images.githubusercontent.com/30502252/109419723-390bb280-7a12-11eb-940d-eb166491a817.gif" height="280px" width="25%"></p>
<p>SNSのアバターが設定されている場合は、アイコンではなくアバターがマップ上に表示される.</p>

<br>

### 6. ログアウト機能
<p>認証後、画面左上にログアウトボタンを表示される.</p>

<br>

## システム構成
<img src="https://user-images.githubusercontent.com/30502252/109414006-e3c0a880-79f3-11eb-8278-2a1b68b28f3a.png" width="75%"><br>
- DNSはRoute53 + ACM.
- DBはRDS(MariaDB), session管理はRedis(ElasticCashe for Redis)
- EKSのPodでWebサーバ(Nginx)を動かし、フロントエンドリソース(React&nbsp;+&nbsp;Redux)を配信する. <br>パス`/api`, `/socket.io`へのリクエストはAPサーバ(Node.js)へルーティングし、SNS認証やソケット通信を処理する.
- CICDはECRとArgoCDを使用. <br>
Webサーバリソース(Nginx, React.js)用レポジトリ(tokyomap-web)と, <br>
APサーバリソース用レポジトリ(tokyomap-app)のmasterブランチからビルドし, ECRに`push`する.<br>
その後、インフラ用レポジトリ(tokyomap-infra)でマニフェストを更新するとArgoCDがPodを更新する.

## バージョン
- react 16.13.1
- redux 4.0.5
- redux-saga 1.1.3
- typescript 3.8.3
- socket.io-client 2.3.0
- eslint 6.8.0
- webpack 4.42.1

<br>

## 開発環境
```bash
yarn install
yarn build:dev # 開発用ビルド
docker-compose up -d # docker container 起動
```
<p>ローカルに&nbsp;`git clone`&nbsp;後, 上記のコマンドを叩き https://localhost で開発環境にアクセス.</p>