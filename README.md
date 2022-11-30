# About

This is a React Web Application fetching list of data implementing infinite scroll design with React Query and Intersection Observer API.

- [See Implementation Process](https://shanabunny.com/?p=594)

## Built with

- [TypeScript](https://www.typescriptlang.org/)
- [ReactJS](https://reactjs.org/)
- [React Query](https://react-query-v3.tanstack.com/)
- [Ant Design](https://ant.design/)

## Features

### 무한 스크롤

뷰가 스크롤 하단 도달시 다음 페이지 요청 및 출력

### 썸네일/타이틀

썸네일 사진과 함께 타이틀 출력.

### 작가명

role이 writer, painter, scripter 인 경우에만 출력.

### 랭킹

현재 랭킹과 이전 랭킹을 비교하여 상승, 하락, 변동없음 여부와 함께 랭킹 출력.

### 무료 회차

각 작품별 무료 회차 수 노출

### 완결/연재 여부

완결/연재 여부 출력. 연재중의 경우 연재 요일과 함께 출력.

### 필터링 기능

연재중, 완결, 무료회차 3개 이상 여부가 필터링 설정 가능. 각 필터는 중복 설정이 가능하나 모순되는 케이스 경우 반대 케이스의 옵션은 자동으로 선택 해제.

## How to Get Started

### Get Access to Mock API server

- [TestServer Github](https://github.com/soooooyoung/test-server.git)

This app uses mock API server. You need to add .env file (provided by me) to the root directory. The server was created for testing purpose and uses mock data. It is located on a private VM (Oracle cloud) and will be publically available only during the testing period.

.env 파일을 이메일로 전달 받으실 경우, 임의의 파일이름과 함께 첨부됩니다. 다운받으신 .env파일의 이름을 ".env" 로 수정 후 실행해주시길 바랍니다.

### Install Dependencies and Start

```
yarn install
```

Install dependencies using yarn or npm.

```
yarn start
```

Start up application on local server using yarn or npm.

