Next.js, Typescript 연습

이번 프로젝트를 통해 다양한 기술들을 익힌는것이 목표다.

코어: Next.js, TypeScript  
상태 관리: Recoil  
스타일링: emotion, scss  
HTTP 비동기 통신: axios

## 블로그 정리

1. [Next.js 특징](https://talkwithcode.tistory.com/94)
2. [Next.js 시작하기 (typescript)](https://talkwithcode.tistory.com/95)
3. [Next.js \_app과 \_document에 대하여](https://talkwithcode.tistory.com/96)
4. [Next.js Dynamic Routes를 알아보자](https://talkwithcode.tistory.com/97)
5. [Next.js 페이지 이동 Link, Router](https://talkwithcode.tistory.com/98)
6. [Next.js getServerSideProps, getStaticProps, getStaticPaths](https://talkwithcode.tistory.com/99)

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

### Pre-rendering

Next.js는모든 페이지를 사전 렌더링한다.  
이는 더 좋은 퍼포먼스와 SEO에 좋다.

1. 정적 생성
2. Server Side Rendering (SSR, Dynamic Rendering)
   두 가지 종류의 프리 렌더링이 존재한하며 언제 html을 생성하느냐의 차이점이 있다.

#### 정적 생성

- 프로젝트가 빌드 되는 시점에서 html파일을 생성한다.
- 모든 요청에 재사용된다.
- 퍼포먼스 이유로, Next.js에서는 정적 생성을 권고한다.
- 정적 생성된 페이지들을 CDN에 캐싱된다.
- 유저가 요청을 하기 전에 미리 페이지를 만들어두어도 상관없다면 사용한다. (블로그 게시물, 상품 리스트, 도움말)
- getStaticProps / getStaticPaths

#### Server Side Rendering

- 매 요청마다 html 파일을 생성한다. (조금 느릴 수 있다.)
- 항상 최신 상태를 유지한다.
- getServerSideProps

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
├── about.tsx   -> localhost:3000/about
├── detail
│   └─ [id].tsx   -> localhost:3000/detail/1
├── _app.tsx    -> localhost:3000
├── index.tsx   -> localhost:3000
├── _error.tsx    -> 에러시 나오는 페이지
└── 404.tsx   -> 404 에러시 나오는 페이지
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

1. Link

`<Link>` 태그를 사용하여 페이지 이동을 한다.

- 외부 페이지의 링크는 a태그로 넣는다.
- className과 같은 속성을 추가할 때는 a태그에 추가한다.
- 페이지 새로고침 없이 로드된다.

```tsx
import Link from "next/link";
...
<Link href={`/detail/${item.id}`}>
  <a>item</a>
</Link>
```

2. router

`Router` 를 사용하여 페이지 이동을 한다.

- `window.location`과 유사하게 동작하며 태그를 생성하지 않습니다.
- 크롤러가 링크를 감지하지 못하여 SEO가 취약하다.
- `<Link>`는 바로 페이지 이동을 하지만 라우터는 로직을 처리 후 원하는 시점에서 이동이 가능하다.

```tsx
import Router from 'next/router';
...
<button onClick={() => Router.push('/')}>Home</button>
```

</details>

## getServerSideProps

<details>
<summary>서버사이트 렌더링</summary>

구 버전에서는 data fetching을 getInitialProps로 진행하였지만,  
9.3부터는 getStaticProps, getStaticPaths, getServerSideProps로 나뉜다.

빌드와 상관없이 매 요청마다 서버에서 데이터를 가져온다.

### 사용법

```javascript
export async function getServerSideProps(context) {
  return {
    props: {}, // 페이지 컴포넌트에 props로 넘길 것
  };
}
```

### return

3가지의 선택적 리턴 값을 가진다.

1. props : 해당 컴포넌트로 리턴할 값
2. redirect : 페이지 접속 시 지정한 경로로 페이지를 리디렉션 시키기 위해 사용되는 값
   - { destination: string, permanent: boolean } 형태를 가진다.
   - status 코드가 필요하거나 변경해야 할 때는 permanent 대신 statusCode를 사용한다.
3. notFound : Boolean 값, true일 경우 404 status와 에러 페이지를 보여준다.
   - 데이터 통신에 실패하였을 때 사용한다.

### context

getServerSideProps는 context 파라미터를 받는다.

1. params: 다이나믹 라우트 페이지면 해당 데이터를 가져온다.
2. req: Request 정보
3. res: Response 정보
4. query: 쿼리 스트링
5. preview: Preview 모드 사용 유무
6. previewData: Preview 모드 사용 시 전달된 데이터
7. resolvedUrl: 짧은 URL
   - ex) http://localhost:3000/detail/100 -> /detail/740
8. locale: 현재 locale 정보
9. locales: 지원되는 모든 locale 정보
10. defaultLocale: 기본 locale 정보

preview mode에 대해서는 공부가 필요하다.

</details>
