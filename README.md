## CD Pipeline

### 랜딩 페이지

![infra-Frontend_landing_cd drawio](https://user-images.githubusercontent.com/96629089/174980627-8fe187cb-3ba7-4bda-92b1-c6d3595a8a2b.png)

- Parameter Store 를 활용하여 S3 Bucket 이름을 받아 해당 Bucket 으로 배포


### 리엑트 앱

![infra-Frontend_react_cd drawio](https://user-images.githubusercontent.com/96629089/174980702-ccba9a38-5fcd-4a49-9598-86811176a31a.png)

- Parameter Store 에서 미리 저장되어 있는 API 서버의 URL 을 받아 리엑트 앱 빌드시 API 서버 URL 이 포함되어 빌드 됨
