## 프로젝트 데모

하단의 링크를 누르면 채팅 서비스와 개발에 사용된 디자인 시스템 데모 페이지를 확인하실 수 있습니다. :)

- **[🚀 채팅 서비스 데모](https://frontend-kavoom2-for-deploy.vercel.app/)** 바로가기
- **[📚 디자인 시스템](https://frontend-kavoom2-for-deploy-design-system.vercel.app/)** 바로가기

## 🏁 실행 방법

### 개발 환경 설정하기

이 프로젝트는 요구사항에 맞추어 `Node.js "^14"`를 기준으로 개발하였습니다. 이를 `package.json`의 `engines` 필드에 명시하여 반드시 해당 버전에서만 개발 및 배포가 가능하도록 했습니다.

```json
{
  "engines": {
    "node": "^14"
  }
}
```

다음 명령어를 입력하여 해당하는 버전을 설치 및 사용해 주세요.

```
nvm install v14
nvm use v14
```

### 설치 및 메인 서비스 실행하기

이제 패키지의 의존성을 설치하여 개발 환경을 실행할 수 있습니다.

```
yarn install
yarn start
```

### 디자인 시스템 실행하기

위의 단계를 먼저 진행하여 모든 의존성을 설치했다면, 다음 명령어를 입력하여 `Storybook` 기반 디자인 시스템 개발 서버를 실행할 수 있습니다.

```
yarn storybook
```

## 🔧 주요 기술 스택

서비스 및 개발환경 설정에서 중요하다고 생각하는 스택만 나열하였습니다.

#### Cores

- Create React App: `react-scripts@4.0.3`
  - `react@17.0.2`
  - `react-dom@17.0.2`
- `react-router-dom`
- `zustand`
- `@tanstack/react-query`
- `sass`

#### Components

- `react-textarea-autosize`
- `react-dropzone`
- `framer-motion`

#### Utilities

- `classnames`
- `date-fns`

## 📁 프로젝트 디렉토리 구조

```bash
📦 @frontend_kavoom2
├─ public/
├─ src/
│  ├─ index.ts
│  ├─ assets/ ## 아이콘, 이미지 등을 관리합니다.
│  ├─ components/ ## 공통 컴포넌트를 관리합니다.
│  ├─ layouts/ ## 레이아웃 요소를 관리합니다.
│  ├─ hooks/ ## 공통 훅을 관리합니다.
│  ├─ pages/ ## 페이지를 렌더링하는 컴포넌트를 관리합니다.
│  ├─ routes/ ## react-router-dom의 라우팅 요소를 관리합니다.
│  ├─ styles/ ## SASS 전역 스타일 및 공통 변수와 유틸 함수 등을 관리합니다.
│  ├─ utils/ ## 공통 유틸 함수를 관리합니다.
│  ├─ features ## 기능 단위로 모듈을 분리하여 하위 디렉토리로 관리합니다.
│  │  └─ {featureModuleName}
│  │     ├─ index.ts
│  │     ├─ components/
│  │     ├─ hooks/
│  │     ├─ stores/
│  │     └─ queries/
│  └─ mockers/ ## 채팅 API Mocker
├─ .storybook ## 디자인 시스템 Storybook의 설정 구성
├─ style-dictionary
├─ package.json
└─ yarn.lock
```

## 💬 주요 기능

#### 채팅 목록

- 사용자의 채팅 목록을 조회합니다.
- 특정 채팅방을 클릭하면 해당하는 채팅 방으로 이동합니다.
- 해당 채팅방에서 마지막으로 보낸 메시지를 미리보기로 표시합니다.
- 해당 채팅방에서 마지막으로 메시지를 보낸 시간을 표시합니다.
  - 일주일 전까지 상대적인 포맷으로 표시합니다. (ex. 2일 전)
  - 그 이전에 해당하는 경우 yyyy년 M월 d일의 포맷으로 표시합니다. (ex. 2000년 1월 11일)

#### 채팅방

- 해당 채팅방의 채팅 목록을 조회합니다.
- 상단 바를 통해 사진 메시지만 볼 수 있는 갤러리 기능을 제공합니다.
- 메시지를 전송했을 때 사용자가 전송 여부를 확인할 수 있도록 스크롤을 최하단으로 이동합니다.
- 메시지 전송 시 전송 상태를 확인할 수 있도록 로딩 상태를 표시합니다.
- 전송 중인 메시지를 해당 채팅방을 나갔다가 다시 들어와도 확인할 수 있습니다.

## ℹ️ 고려 사항

#### 1. Node 버전 제약에 따른 초기 개발 환경 구성

초기 개발 환경 설정에서 `react-scripts@5`과 `react/react-dom@18`으로 구성하여 진행하고자 하였습니다. 다른 개발 관련 도구와 통합하는 과정에서 `react-scripts`에서 사용하는 `Webpack 5`의 일부 기능들이 `Node 14`에서는 지원하지 않는 이슈가 있었습니다.

해당 기능에 대한 Polyfill 적용을 고려해보았으나, 정해진 기한 내에 개발해야 하는 요구사항과 더불어 추후에 발생할 수 있는 이슈를 최소화하고자 `react-scripts`와 `react/react-dom`을 각각 `4.0.3`과 `17.0.2`으로 다운그레이드 하였습니다.

#### 2. 서비스의 확장성을 고려한 디렉토리 구조 설정

현업에서는 Component, Hooks 등의 모듈을 `페이지(pages)` 단위로 나누어 관리하였습니다. 이는 모듈이 페이지에 의존적이도록 만듭니다. 프로젝트 규모가 커지면서 다른 페이지에서도 사용되는 빈도가 많이졌고 이는 개발자로 하여금 혼동을 줄 수 있습니다.

따라서 이번 과제에서는 `페이지(pages)`가 아닌 `기능(features)` 단위로 모듈을 분리하고자 하였습니다. 프로젝트 규모가 커져감에 따라, 별도의 모듈로 분리해야 하는 상황에 유연하게 대응할 수 있도록 하였습니다. `@/features`의 하위 디렉토리 단위로 분리하는 것으로 가정하고 진행하였습니다.

예를 들면, 채팅 기능을 관리하는 `@/features/userChat`의 구조는 다음과 같습니다.

```bash
@/features/
└── userChat/
    ├── index.ts
    ├── components/
    ├── hooks/
    ├── queries/
    └── stores/
```

기능 단위의 폴더에서 해당 기능과 관련이 있는 컴포넌트, 쿼리 훅, 전역 상태 훅 등을 관리하게 됩니다.
그리고 `index.ts`에서 실제 사용하는 모듈만 `Named Export`하여 사용자는 다음과 같이 사용하게 됩니다.

```ts
// @feature/userChat/index.ts
// 외부에서 사용할 모듈만 export합니다.

// Components
export { default as ChatImageMessageBox } from "./components/ChatImageMessageBox";
export { default as ChatTextMessageBox } from "./components/ChatTextMessageBox";

// Hooks
export { default as useClientSideChat } from "./hooks/useClientSideChat";
export { default as useGetChatRoomInfo } from "./hooks/useGetChatRoomInfo";

// Queries
export { default as getChatRoomInfoQuery } from "./queries/getChatRoomInfo";
```

```ts
// @pages/UserChatList.tsx
// 채팅 모듈을 다음과 같이 불러와 사용하게 됩니다.

import {
  ChatImageMessageBox,
  ChatTextMessageBox,
  useClientSideChat,
  useGetChatRoomInfo,
} from "@/features/userChat";

const MyPage = () => {
  // ...
};
```

그리고 `페이지(pages)`는 실질적으로 기능 단위의 모듈을 조립하여 해당 페이지 화면과 비즈니스 로직만을 구성하도록 구성하였습니다.

#### 3. 전송 중인 메시지의 상태 관리

일반적으로 로그인 화면의 폼과 같이 페이지 단위에서 단발적으로 사용하는 상태는 페이지 컴포넌트에서 관리하게 됩니다. 이 경우, 페이지를 벗어난 이후 폼의 초기화 등 복잡한 시나리오에 대한 별도의 처리 없이 폼의 상태 관리가 훨씬 간단해집니다.

채팅방에서 사용자가 보낸 전송 대기중인 상태의 메시지들도 비슷해 보이지만 큰 차이가 있습니다. 사용자는 여러 채팅방을 자유롭게 드나들 수 있고, 다시 들어온 이후에도 이전에 보낸 메시지의 전송 상태를 확인할 수 있어야 합니다.

따라서 사용자가 전송중인 메시지를 화면에 표시할 수 있도록 `zustand` 기반 전역 상태로 관리하면서, 서버와의 요청/응답을 처리하는 `react-query`로 구현한 커스텀 훅과 통합하여 UI가 자연스럽게 전환될 수 있도록 하였습니다.

```ts
// @features/userChat/stores/useClientsideChatStore.ts
// 클라이언트 단의 전송 중인 사진을 관리하는 전역 상태 훅입니다.
export type ClientSideChatRoom = {
  lastMessageRequsetedAt: number | null;
  messages: (PendingTextMessage | PendingImageMessage)[];
};

export interface ClientsideChatStore {
  roomMap: {
    [roomId: string]: ClientSideChatRoom;
  };
  initClientChatRoom: (roomId: string) => void;
  addPendingTextMessage: (roomId: string, message: PendingTextMessage) => void;
  addPendingImageMessage: (
    roomId: string,
    message: PendingImageMessage,
  ) => void;
  removePendingTextMessage: (roomId: string, callId: string) => void;
  removePendingImageMessage: (roomId: string, callId: string) => void;
  destroyClientChatRoom: (roomId: string) => void;
}
```

```ts
// @features/userChat/hooks/useSendChatTextMessage.ts
// 클라이언트 단의 전송 중인 사진을 관리하는 전역 상태 훅입니다.
const mutation = useMutation(
  sendChatTextMessageQuery.queryKey(),
  sendChatTextMessageQuery.queryFn(roomId, sender),
  {
    onMutate: (variables) => {
      //...

      // 메시지를 전송할 때 클라이언트단 상태를 업데이트합니다.
      addPendingTextMessage(roomId, {
        type: "text",
        text: variables.text,
        callId: variables.callId,
      });
    },

    onSettled: (_data, _error, variables) => {
      // onError, onSuccess 이후 해당 메시지를 제거합니다. (재전송 기능은 고려하지 않았습니다.)
      removePendingTextMessage(roomId, variables.callId);
    },
  },
);
```

#### 4. 채팅방에서 사진 전송 중 [Cumulative Layout Shift](https://web.dev/optimize-cls/) 이슈 대응

사용자가 텍스트 또는 사진을 전송하면 해당 채팅방의 최하단으로 스크롤이 이동하도록 구현하였습니다.

이 때, 사진을 전송하면 최하단에서 약간 위로 이동하는 이슈가 발생했습니다.

이는 현재 반응형 레이아웃을 제공해야 하는 어플리케이션에서 발생할 수 있는 문제입니다. width와 height 속성을 반응형을 고려하여 다음과 같이 적용을 하곤 합니다.

```css
img {
  width: 100%;
  height: auto;
}
```

하지만, 이러한 방식은 이미지 다운로드가 완료되고 브라우저가 크기를 결정할 수 있을 때에만 해당 요소에 대한 공간을 할당할 수 있게 됩니다. 그 이전까지는 사실상 빈 공간으로 배치됩니다.

다시 돌아와서 사진을 전송하고 스크롤을 화면 하단으로 이동하려고 했을 때, 스크롤 요소의 `scrollHeight`에는 전송한 사진 메시지의 높이가 포함되어 있지 않습니다. 따라서 최하단에서 약간 위로 이동하는 듯한 현상이 발생한 것이었습니다.

따라서 클라이언트 단에서는 전송 중인 사진은 사전에 `width`, `height`값을 불러와서 전역 상태에 함께 저장하고, 응답을 받은 이후에는 응답에 포함된 `width`, `height` 값을 사용하도록 하였습니다.

```ts
// @features/userChat/hooks/useSendChatImageMessage.ts
const mutation = useMutation(
  sendChatImageMessageQuery.queryKey(),
  sendChatImageMessageQuery.queryFn(roomId, sender),
  {
    onMutate: async (variables) => {
      queryClient.cancelQueries(getChatRoomMessagesQuery.queryKey(roomId));

      // 사진 파일의 ObjectURL을 생성하여 width, height 값을 가져옵니다.
      const filePath = URL.createObjectURL(variables.file);
      const sizes = await getImageOriginalSize(filePath);

      // 이를 클라이언트의 채팅 관련 전역 상태에 함께 저장합니다.
      addPendingImageMessage(roomId, {
        type: "image",
        callId: variables.callId,
        filePath,
        width: sizes?.width || 0,
        height: sizes?.height || 0,
      });
    },
  },
);
```

## 개선해야할 점
