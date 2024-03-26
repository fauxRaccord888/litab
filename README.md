# 1. 프로젝트 소개
![<img src="/static/feature.gif" width="250"/>](/static/feature.gif)
- **방향과 크기가 있는** 작품들의 목록을 만들고 공유하는 **SNS 서비스**

# 2. 주요 기술 스택 및 의존성
- 프론트엔드 프레임워크 - react 
- 지역 상태 관리 - redux
- 데이터 및 상태 관리 - apollo client
- 데이터베이스, Graphql Endpoint - supabase
- 스토리지 - supabase storage client
- 인증 - supabase auth(GoTrue Client)
- 라우팅 - tanstack router
- 국제화 - react-i18next
- graphql endpoint는 supabase에서 자체적으로 제공됨
- 백엔드 관리를 위한 별도의 코드(orm 등)는 없음
    - supabase 대시보드에서 테이블 직접 구성
    - 필요한 경우, sql 명령 직접 실행