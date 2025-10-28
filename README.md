# Backend Developer Portfolio

7개월차 Spring Boot 백엔드 개발자 포트폴리오 웹사이트

## 🎨 디자인 특징

- **애플 스타일**: 타이포그래피 중심의 미니멀한 디자인
- **플랫 디자인**: 그라데이션 없는 깔끔한 스타일
- **넓은 여백**: 여유로운 레이아웃과 가독성
- **반응형**: 모바일, 태블릿, 데스크톱 최적화

## 🛠️ 기술 스택

- **CSS Framework**: Bulma CSS
- **JavaScript**: Vanilla JS (프레임워크 없음)
- **Font**: Inter (Google Fonts), Apple System Fonts
- **Animations**: CSS Animations + Intersection Observer

## 📁 프로젝트 구조

```
backend_portfolio/
├── index.html          # 메인 페이지
├── css/
│   └── custom.css     # 애플 스타일 커스텀 CSS
├── js/
│   └── main.js        # 인터랙션 JavaScript
└── README.md          # 프로젝트 설명
```

## 🚀 로컬 실행 방법

### 방법 1: 브라우저에서 바로 열기
1. `index.html` 파일을 더블클릭하거나 브라우저로 드래그

### 방법 2: VS Code Live Server 사용
1. VS Code에서 프로젝트 폴더 열기
2. `index.html` 파일 우클릭
3. "Open with Live Server" 선택
4. `http://localhost:5500`에서 확인

### 방법 3: Python 간단 서버
```bash
# Python 3
python -m http.server 8000

# 브라우저에서 http://localhost:8000 접속
```

## ✏️ 커스터마이징 가이드

### 개인 정보 수정
**index.html** 파일에서 다음 내용을 수정하세요:
- `Your Name` → 본인 이름
- `your.email@example.com` → 본인 이메일
- `https://github.com/yourusername` → GitHub 프로필 URL
- `https://linkedin.com/in/yourusername` → LinkedIn 프로필 URL

### 프로젝트 내용 수정
`index.html`의 Projects Section에서:
- 프로젝트 제목, 설명, 기술 스택, GitHub 링크 수정
- 프로젝트 추가/삭제 가능

### 색상 변경
**css/custom.css** 파일의 `:root` 섹션에서 색상 변수 수정:
```css
:root {
  --apple-black: #1d1d1f;     /* 메인 텍스트 색상 */
  --apple-gray: #6e6e73;      /* 서브 텍스트 색상 */
  --apple-blue: #0071e3;      /* 링크 색상 */
  --apple-border: #d2d2d7;    /* 테두리 색상 */
}
```

### 폰트 변경
**index.html**의 `<head>` 섹션에서 Google Fonts 링크 수정

## 📱 반응형 브레이크포인트

- **Desktop**: 1024px 이상
- **Tablet**: 768px ~ 1023px
- **Mobile**: 767px 이하

## 🎯 주요 기능

### 1. 스무스 스크롤
네비게이션 링크 클릭 시 부드러운 스크롤 이동

### 2. Navbar 블러 효과
스크롤 시 네비게이션 바 배경 변화 (투명 → 반투명)

### 3. Fade-in 애니메이션
스크롤 시 섹션이 부드럽게 나타남 (Intersection Observer)

### 4. 모바일 메뉴
햄버거 메뉴 토글 (Bulma 기본 기능)

### 5. 호버 효과
프로젝트 카드, 버튼에 부드러운 호버 애니메이션

## 🌐 배포 (선택사항)

### GitHub Pages
1. GitHub 저장소 생성
2. 파일 업로드
3. Settings → Pages → Branch (main) 선택
4. `https://yourusername.github.io/backend_portfolio` 접속

### Netlify
1. Netlify에 로그인
2. "New site from Git" 또는 드래그 앤 드롭
3. 자동 배포 및 URL 제공

### Vercel
1. Vercel에 로그인
2. 프로젝트 import
3. 자동 배포 및 커스텀 도메인 설정 가능

## 📝 TODO (개선 아이디어)

- [ ] 다크 모드 토글 추가
- [ ] 프로젝트 이미지/스크린샷 추가
- [ ] 블로그 섹션 추가
- [ ] Contact Form 구현
- [ ] SEO 메타 태그 추가
- [ ] 애니메이션 최적화

## 📄 라이선스

개인 포트폴리오 용도로 자유롭게 사용 가능합니다.

## 📬 문의

프로젝트 관련 문의나 제안은 이슈 등록 또는 이메일로 연락 주세요.

---

**Made with ❤️ by [Your Name]**