# React-Router-ProgrammaticNavigationApp

`useNavigate`を使ったプログラムによるページ遷移を学習するReact Routerアプリです。

## Overview

ボタンをクリックしたときに`useNavigate`を使用して、HomeページからAboutページへプログラムで遷移します。

`Link`を使用せず、イベント処理からページ遷移を実行する方法を学習します。

## Learning Goals

* `useNavigate`の基本的な使い方
* プログラムによるページ遷移
* `navigate()`によるURL遷移
* `Route`によるページの定義
* `BrowserRouter` / `Routes` / `Route`の基本構成

## Page Structure

| Page  | URL      | Description         |
| ----- | -------- | ------------------- |
| Home  | `/`      | Aboutページへ移動するボタンを表示 |
| About | `/about` | Aboutページを表示         |

## Project Structure

```text
src/
├── pages/
│   ├── Home.tsx
│   └── About.tsx
├── App.tsx
└── main.tsx
```

### `pages/Home.tsx`

Homeページを表示します。

`useNavigate`を使用して、ボタンをクリックすると`/about`へ移動します。

```tsx
const navigate = useNavigate();

<button onClick={() => navigate("/about")}>
  Aboutへ移動
</button>
```

### `pages/About.tsx`

Aboutページを表示します。

### `App.tsx`

React Routerのルーティングを設定します。

```tsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>
```

## Navigation Flow

```text
Home (/)
   │
   │ Aboutへ移動
   ↓
About (/about)
```

## Key Concept

### `useNavigate`

`useNavigate`は、コンポーネント内のイベント処理などからプログラムによってページ遷移を行うためのHookです。

```tsx
const navigate = useNavigate();

navigate("/about");
```

`Link`とは異なり、ボタンクリック後の処理やフォーム送信後など、**処理の結果としてページ遷移させたい場合**に利用できます。

## Installation

```bash
npm install react-router
```

## Run

```bash
npm run dev
```

## Technologies

* React
* TypeScript
* React Router
* Vite
