## 클라이언트에서의 encryption은 부적절하지만 사용
- 간단한 회원 가입 및 로그인 구현이 목적이며, `백엔드 환경`까지 구축하는 것은 목표를 초과하는 내용
- 위와 같은 상황에서 `db 엔드포인트`에 직접 `POST` 요청을 보내면, `db`는 `암호`를 `평문`으로 저장하게 됨
- 이를 피하고자 `클라이언트`에서 `argon2id`를 사용하여 암호화 후 `네트워크 요청`을 보냄
- 기본적으로 `encryption`은 `서버`에서 이루어져야 하며, 이와 같은 방식은 일반적으로 절대 권할 수 없는 방식임
- 비밀번호를 꼭 저장해야 한다면, `Next.js`와 같은 프레임워크를 찾기를 권함

## 클라이언트에서의 supabase client를 사용한 네트워크 요청
- 해당 프로젝트는 `회원 가입` 등의 네트워크 요청에 `anon key`를 사용함
- 이 경우, `db`에서 요청에 대한 권한을 적절하게 설정하지 않는다면, 전체 사용자 테이블을 조회할 수 있음
- 이외에도 여러 보안 취약점이 발생할 수 있으므로, 상용 프로젝트에서는 `클라이언트`에서 직접 네트워크 요청을 보내지 않길 바람