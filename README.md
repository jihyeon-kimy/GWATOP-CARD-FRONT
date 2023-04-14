# 포텐데이_과탑카드

> 포텐데이는 기획, 디자인, 개발 한 팀으로 10일동안 아이템 선정부터 프로토타입(MVP)까지 완성하는 온라인 해커톤 프로그램입니다.

<br />

[ 목차 ]

[1. 프로젝트 소개](#1.-프로젝트-소개) <br />
[2. 아키텍쳐](#2.-아키텍쳐) <br />
[3. 실행 방법](#3.-실행-방법) <br />
[4. 구현 기능](#4.-구현-기능) <br />
[5. 프로젝트/라우터 구조](#5.-프로젝트/라우터-구조) <br />
[6. 데모 영상](#6.-데모-영상) <br />

<br />

### 1. 프로젝트 소개
<p align="center">
<img src="https://user-images.githubusercontent.com/78922001/229360184-22ab6057-9837-4017-af09-867e2d0f8dac.png">
</p>

<br />

- 프로젝트 한 줄 요약 : 파일 업로드를 통해 기출/예제 문제를 자동 생성하고, 카드 형식으로 전달하여 학습 경험을 도와주는 웹 서비스
- 기획 의도 : 고등교육 이후 다양해지는 학습내용으로 인해, 기출문제 등의 학습에 도움이 되는 자료를 이전만큼 받아볼 수 없다는 문제를 해결하고자 했습니다. 과탑카드는 학생들이 온전히 ‘학습’에만 보다 많은 시간을 할애할 수 있도록, 개인 필기 및 학습자료 업로드를 통해 ‘학습가이드’, ‘자신만의 공부노트’를 대신 만들어주는 웹서비스 입니다.
- 프로젝트 기간 : 2023.03.24 - 04.02 (개발기간 : 4일)
- 팀원 : FE 1명, BE 1명, 디자인 1명, 기획 1명
- 배포 링크 : [🔗GWATOP CARD](https://jihyeon-kimy.github.io/GWATOP-CARD-FRONT/)
- 참고 자료 : [서비스 소개 / Product Spec](https://imaginary-barracuda-03e.notion.site/Product-Spec-08c8a88b800b4e3ca1f6455f822b2c9f) , [비사이드 프로젝트 게시 페이지](https://bside.best/projects/detail/P230323055714)

<br />

### 2. 아키텍쳐

- FE : React, Styled-components, react-router-dom, Redux
- BE : Django, Docker, Gunicorn, OpenAI, NCP

<img src="https://user-images.githubusercontent.com/78922001/232012033-4cd4642e-57a8-47dc-844c-3deaa4358072.png" width="700"/>


<br />

### 3. 실행 방법

```
# install
$ npm run install

# run
$ npm start
```

MVP 구현을 목표로 제작되어, 현재 하나의 계정으로 테스트 가능합니다 \*PC뷰만 지원

<br />

### 4. 구현 기능

- 로그인 및 회원가입
  - 로그인 여부에 따른 제한 접근 라우팅
- PDF 파일 업로드 및 기출 카드 생성
  - 드래그 앤 드롭 PDF 파일 업로드 (파일 형식이 다를 경우 reject)
  - 기출카드 생성 중 Loading 상태 표기 후, 카드덱 목록 페이지로 이동
- 기출 카드 조회
  - 기출 문제를 플래시 카드 형식으로 조회 
  - 문항에 따른 답안 확인
- 카드덱 목록 확인 및 삭제

<br />

### 5. 프로젝트/라우터 구조

<details>

<summary>프로젝트 구조</summary>

```
📦src
 ┣ 📂api
 ┃ ┗ 📜cardDeck.ts
 ┣ 📂components
 ┃ ┣ 📂CardDeckList
 ┃ ┃ ┣ 📜CardDeckEmpty.tsx
 ┃ ┃ ┣ 📜DeckList.tsx
 ┃ ┃ ┣ 📜DeleteModal.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜PageHeader.tsx
 ┃ ┣ 📂Common
 ┃ ┃ ┣ 📜Button.tsx
 ┃ ┃ ┣ 📜Card.tsx
 ┃ ┃ ┣ 📜CardDeck.tsx
 ┃ ┃ ┗ 📜Modal.tsx
 ┃ ┣ 📂CreateCard
 ┃ ┃ ┣ 📜FileDropZone.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┣ 📜Loading.tsx
 ┃ ┃ ┗ 📜PrecautionsModal.tsx
 ┃ ┣ 📂Home
 ┃ ┃ ┣ 📜CardDeckInfo.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜ServiceInfo.tsx
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📜Authorization.tsx
 ┃ ┃ ┣ 📜Header.tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜UserOverlayMenu.tsx
 ┃ ┣ 📂LogIn
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂SignUp
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂View
 ┃ ┃ ┣ 📜CardAnswer.tsx
 ┃ ┃ ┣ 📜CardDeckDesc.tsx
 ┃ ┃ ┣ 📜CardSlider.tsx
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useAuth.ts
 ┃ ┣ 📜useOverlay.ts
 ┃ ┣ 📜useRedux.ts
 ┃ ┗ 📜useRouter.ts
 ┣ 📂mock
 ┃ ┗ 📜cardDeckList.ts
 ┣ 📂pages
 ┃ ┣ 📜CardDeckListPage.tsx
 ┃ ┣ 📜CreateCardPage.tsx
 ┃ ┣ 📜HomePage.tsx
 ┃ ┣ 📜LogInPage.tsx
 ┃ ┣ 📜SignUpPage.tsx
 ┃ ┗ 📜ViewPage.tsx
 ┣ 📂store
 ┃ ┣ 📜authSlice.ts
 ┃ ┗ 📜index.ts
 ┣ 📂styles
 ┃ ┣ 📜color.ts
 ┃ ┣ 📜GlobalStyle.ts
 ┃ ┣ 📜postion.ts
 ┃ ┣ 📜text.ts
 ┃ ┗ 📜z-index.ts
 ┣ 📂types
 ┃ ┗ 📜card.ts
 ┣ 📜App.tsx
 ┣ 📜index.tsx
 ┗ 📜router.tsx
```

</details>

<details>
<summary>라우터 구조</summary>

- / : 메인화면
- /create : 카드 생성
- /cardDeckList : MY 카드덱(카드덱 리스트 조회 및 삭제)
- /view/:cardDeckId : 문제 카드 조회
- /login : 로그인
- /signUp : 회원가입

</details>

<br />


### 6. 데모 영상


https://user-images.githubusercontent.com/78922001/229360214-09ff49a5-b06c-4085-b842-2eb43f1a38cb.mp4

