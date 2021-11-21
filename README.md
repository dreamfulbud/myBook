# myBook

- https://dreamfulbud.github.io/myBook/

<img src="./img/main.png" alt="myBook 메인" />

- 내가 읽은 도서 목록
- 개인프로젝트
- HTML/CSS/SASS/jQuery/카카오 도서 API 사용
- 위니브에서 제공한 실습 과제와 유튜브 조코딩 API 영상을 응용하여 작업하였습니다.

## 개발하면서 어려웠던 점

1. 도서 소개 내용의 여러줄 말줄임을 적용하게 위해 넣은 코드 중. 해당 코드가 scss 파일 컴파일 시 지워진다.(무슨 이유인지는 모르겠다.)

   ```css
   .contents {
   	-webkit-box-orient: vertical;
   }
   ```

   - 문제 해결) 컴파일된 파일과 scss 파일을 비교하고 지워진 코드만 별도 index파일에 style로 넣어주었다.

2. flex

   - 도서 목록(main ul li)을 flex / justify-content:space-between; 속성을 이용해 짜려고 했으나,
     마지막 행이 도서 개수에 따라 의도한 형태로 정렬이 되지 않았다.
   - 반응형등을 고려하면 Grid를 이용하는것이 더 좋을 것 같아 grid로 변경!

3. Grid

   - li의 컨텐츠때문인지 `grid-template-columns: repeat(4, 1fr);` css를 적용하니 contain 영역을 벗어나고 레이아웃 깨짐 현상이 발생했다.
   - 문제해결) 요소의 너비를 계산해서 넣어주었다.

     ```scss
     main {
     	ul {
     		// grid-template-columns: repeat(4, 1fr);
     		grid-template-columns: repeat(4, calc((100% - 2rem * 3) / 4));
     	}
     }
     ```

## 수정이 필요한 부분

1. 코드 재사용

   - 처음 페이지에 로딩과, 클릭 이벤트로 인해 같은 코드인데도 2번 작성해서 코드가 길다.

2. 랜덤 출력 현상
   - 버튼 클릭, 새로고침 때마다 도서 목록이 의도치 않게 랜덤으로 뿌려진다.
