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

## メモ
- ローマ字転写をつける: 自動変換を書く
- 簡単な統計データ: 履修の記憶
- 繰り返したい単語の記憶・解除・オールクリア
- 情報を訂正しやすくする: おかしい情報の報告, 報告の読み込み
    - これはFirebaseに貯めるか?
- 自サイトへの誘導・自サイトへの単語リンクつき
    - 自サイトも使いやすく書き換えよう
    - iframe 呼び出し
    - 呼び出しはボタンにして余計な読み込み発生させない
- 活用する単語は活用載せる
    - 自サイト単語編とうまく統合
    - 活用も別に切り分けよう
- モード
    - 繰り返したい単語(上で保存したもの)だけ繰り返せるモード
    - 続きから始めるモード
