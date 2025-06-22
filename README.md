# CamMute

Windows에서 웹캠과 마이크를 끌 수 있는 간단한 보안 유틸리티입니다. GUI를 이용하면 버튼 클릭만으로 장치를 제어할 수 있습니다.

## 사용법

1. Node.js가 설치되어 있어야 합니다.
2. 의존성 설치 후 다음과 같이 실행합니다.
   ```bash
   npm install
   node index.js disable  # 모든 웹캠과 마이크 비활성화
   node index.js enable   # 모든 웹캠과 마이크 활성화
   npm start              # GUI 실행
   ```

## 빌드

```
npm run build
```

위 명령이 성공하면 "Build successful" 메시지가 출력됩니다.
