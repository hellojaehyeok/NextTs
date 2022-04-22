Next.js, Typescript 연습

# Next.js

- Next는 React 기반의 프레임워크이다.
- 폴더 및 파일 기반으로 라우팅을 지원한다.
- 컴파일과 번들링이 자동으로 된다.
- SSR을 지원하여 SEO가 수월하다.
- 스태틱 파일을 지원한다.
- 개발 중 저장하면 자동으로 리렌더링이 일어난다.

## pages

pages 폴더안에 파일을 만들면 자동적으로 라우팅처리가 된다.

```
pages
├── about.tsx       -> localhost:3000/about
├── detail
│   └─ [id].tsx    -> localhost:3000/detail/1
├── _app.tsx        -> localhost:3000
└── index.tsx       -> localhost:3000
```

### \_app.tsx

모든 페이지는 `_app.tsx`를 통한다. 아래와 같은 특징이 있다.

1. 페이지 전환시 레이아웃과 상태값을 유지할 수 있다.
2. 에러 헨들링이 가능ㄹ하다.
3. 추가적인 데이터를 페이지로 주입시켜주는게 가능하다.
4. 글로벌 CSS는 이곳에 선언해야한다. (다른 컴포넌트에서 정의하면 오류)
5. 내부의 컴포넌트는 `body`로 구성한다.
6. Component, pageProps를 props로 받는다.
   - Component는 요청한 페이지 (페이지 전환시 변경)
   - pageProps는 getInitialProps로 받은 props
7. console.log는 client와 server 둘다 콘솔에 찍힌다.

### \_document.tsx
