# Manual Installation

- 프로젝트 폴더 생성 후 열기
- `npm init -y` 실행 > package.json 파일 생성
- package.json > "license":"MIT" 로 수정
- `npm i react@latest next@latest react-dom@latest`
- package.json > "scripts":{"dev":"next dev"} 로 수정 ("dev"라고 지정한 명령어로 "next dev"를 부르겠다)
- `npm run dev` 실행하여 확인
- Error: > Couldn't find any `pages` or `app` directory. Please create one under the project root
- app 폴더 생성 후 임의의 page.jsx 파일 생성
- 다시 `npm run dev` 실행하여 확인
- 임의로 layout.js 생성되며 정상적으로 렌더링
