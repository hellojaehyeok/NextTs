Next.js, Typescript 연습

목표 : 프로젝트를 통해 다양한 기술들을 익힌다.  
익숙한 방법에서 벗어나 새로운 기술을 익히고싶다.

코어: Next.js, TypeScript  
상태 관리: Recoil  
스타일링: emotion, scss  
HTTP 비동기 통신: axios

- 이전에는 react.js, redux, styled-components, fetch로 진행했다.

next typescript 설치

```
npx create-next-app --typescript new-project
```

# Next.js

## 특징

<details>
<summary>특징</summary>

- Next는 React 기반의 프레임워크이다.
- 폴더 및 파일 기반으로 라우팅을 지원한다.
- 컴파일과 번들링이 자동으로 된다.
- SSR을 지원하여 SEO가 수월하다.
- 스태틱 파일을 지원한다.
- 개발 중 저장하면 자동으로 리렌더링이 일어난다.

개발 모드  
`npm run dev`

프러덕션 모드  
`npm run build && npm run start`

</details>
<br />

## pages

<details>
<summary>pages</summary>

pages 폴더안에 파일을 만들면 자동적으로 라우팅처리가 된다.

```
pages
├── about.tsx       -> localhost:3000/about
├── detail
│   └─ [id].tsx    -> localhost:3000/detail/1
├── _app.tsx        -> localhost:3000
├── index.tsx       -> localhost:3000
└── 404.tsx       -> 404 에러시 나오는 페이지
```

### \_app.tsx

모든 페이지는 `_app.tsx`를 통한다. 아래와 같은 특징이 있다.

1. 페이지 전환시 레이아웃과 상태 값을 유지할 수 있다.
2. 에러 헨들링이 가능하다.
3. 추가적인 데이터를 페이지로 주입시켜주는게 가능하다.
4. 글로벌 CSS는 이곳에 선언해야 한다. (다른 컴포넌트에서 정의하면 오류)
5. 내부의 컴포넌트는 `body`로 구성한다.
6. Component, pageProps를 props로 받는다.
   - Component는 요청한 페이지 (페이지 전환 시 변경)
   - pageProps는 getInitialProps로 받은 props
7. console.log는 client와 server 둘 다 콘솔에 찍힌다.

### \_document.tsx

`_app` 다음에 실행된다. 프로젝트의 html 문서를 커스텀한다.
모든 페이지에서 사용하는 `<head>`나 `<body>`안의 속성들을 조작해야 할 때 사용한다.

1. server에서만 렌더링 된다.
2. onClick 같은 이벤트나 CSS는 사용하지 않는다.
3. `<Html>`, `<Head>`, `<Main>`, `<NextScript>`는 반드시 포함되어야한다.

`<title>`과 같이 각 페이지 마다 달라질 수 있는 것은 해당 컴포넌트 안에 사용하는게 좋다.

### 404, \_error

404 에러가 나면 기본으로 404 UI를 제공해 주지만 커스텀을 하기 위해서는 `404.tsx`를 만든다.
404 페이지는 static으로 제공한다.

그 외 에러는 `_error.tsx`에서 처리한다.  
개발 모드에서는 에러 로그가 뜨고 프러덕션 모드에서 에러 페이지가 뜬다.

`_error` 페이지는 정적으로 제공하지 않는다.  
에러가 발생했을 때 서버 쪽으로 에러를 동반하는 경우가 많기 떄문이다.

</details>

<br />

## 페이지 이동

<details>
<summary>페이지 이동</summary>

`<Link>` 태그를 사용하여 페이지 이동을 한다.

```tsx
import Link from "next/link";
...
<Link href={`/detail/${item.id}`}>
  <a>item</a>
</Link>
```

</details>
