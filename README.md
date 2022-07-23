# vocmem: vocabulary memorization

## init

```shell
yarn create nx-workspace
yarn add @mui/material @emotion/react @emotion/styled @mui/styled-engine-sc styled-components
```

## `Vercel`の設定

- `Settings`タブを開く
- `Build & Development Settings`を開く
- `BUILD COMMAND`: `yarn build --prod`
- `OUTPUT DIRECTORY`: `dist/apps/vocmem/.next`

## PWA

- [ファビコン生成](https://ao-system.net/favicongenerator/)

## メモ

- LINEミニアプリ（単純なLIFF？）で画像投稿＋OCRでタイ語やアラビア語・デーヴァナーガリーを転写できるようにする、翻訳もつけよう
- 2000で一つ戻るやるとバグる
- フラ語やイタ語もアクサンをつけられる入力を取ろう
- ベーシックイングリッシュの多言語、各翻訳語にはiframe開くリンク作ろう
- （キリル文字の）ローマ字転写をつける: 自動変換を書く
  - 検索画面ではツールチップで変換一覧を出す
- スマホ利用前提でしか作っていないのでレスポンシブにする
- 簡単な統計データ: 履修の記憶
- 活用する単語は活用載せる
  - 自サイト単語編とうまく統合
  - 活用も別に切り分けよう
- 単語暗記でランダム化
- キリル文字のローマ字転写再調整：日本語キーボードで簡単に入力できるような変換, あとテスト
- 他の言語追加
- phasetr.com/archiveの情報: 特にリンクについて一括検索に反映

## ロシア語

- [キリル文字からローマ字](https://stabucky.com/wp/archives/6132)
- [ローマ字からキリル文字](https://rosianotomo.com/romcyr/romcyr.htm)
