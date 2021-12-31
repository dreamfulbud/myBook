const booklist = {
  year21: [
    '블럭식스', '뉴타입의 시대', '생각이 너무 많은 서른살에게', '슈퍼팬 - 비즈니스를 성장시키는 이 시대의 가장 큰손', '프리워커스', '일 잘하는 사람은 단순하게 말합니다', '분노수업',
    '트렌드 코리아 2021', 'UX / UI의 10가지 심리학 법칙', '달러구트 꿈 백화점.', '어웨이크',
    'EXIT', '서른다섯, 출근하기 싫어졌습니다.', '니클의 소년들', '나는 7년동안 세계 최고를 만났다', '일인칭 단수',
    '사용자를 유혹하는 UX의 기술', '일은 배신하지 않는다', '달까지 가자', '공공연한 고양이', '독서모임 꾸리는 법',
    '혼자 사는데 돈이라도 있어야지', '레버리지 양장본', '죽은 자의 집 청소'
  ],
  year20: [
    '피프티 피플', '규칙없음', '페인트', '기획자의 일', '보건교사 안은영', '실리콘밸리는 무엇을 기획하고 어떻게 개발하는가',
    'B2B 마케팅 이기는 전략', '방구석 미술관', '어른의 어휘력', '존리의 부자되기 습관', '시선으로부터',
    '하버드 상위 1퍼센트의 비밀', '도널드 노먼의 UX 디자인 특강', '아몬드', '더 해빙', '공간이 만든 공간', '판사유감', '파타고니아, 파도가 칠 때는 서핑을',
    '어디서 살 것인가', '오래가는 것들의 비밀', '당신이 옳다', '조이풀', '설민석의 삼국지.2', '설민석의 삼국지.1', '클루지',
    '민주주의는 회사 문 앞에서 멈춘다', '멋진 신세계', '우리가 빛의 속도로 갈수 없다면', '일의 기쁨과 슬픔 (장류진 소설집)', '사람은 무엇으로 사는가',
    '역사의 쓸모', '그래, 이맛에 사는거지', '낭만적 연애와 그 후의 일상', '21세기를 위한 21가지 제언.', '이렇게 맛있는 철학이라니',
    '왜 나는 이 사람을 따르는가', '보도 섀퍼의 돈'
  ],
  year19: [
    '혼자가 혼자에게. 이병률 산문집', '말그릇', '82년생 김지영', '예감은 틀리지 않는다', '도리언 그레이의 초상', '쓰기의 말들', '월급쟁이 재테크 상식 사전(개정판).',
    '인간 실격', '노인과 바다', '생각이 돈이 되는 순간', '90년생이 온다', '데미안', '해커스 펀드투자권유대행인 최종핵심정리문제집(2019)', '파우스트', '말센스',
    '개인주의자 선언', '한국인은 왜 이렇게 먹을까?', '여행의 이유. 김영하 산문', '초격차', '철학은 어떻게 삶의 무기가 되는가', '1984', '인어가 잠든 집',
    '떨림과 울림', 'The Goal(더 골)(전면개정판)', '부의 추월차선', '브랜드 디자인.', '디자인 불변의 법칙 125가지',
    '6개월에 천만 원 모으기', '하버드 행동력 수업', '서른살엔 미처 몰랐던 것들', '결혼은 모르겠고 돈은 모으고 싶어', '디자이너가 되는 방법', '저마다의 별을 찾아서',
    '회사 다니면서 글쓰기 잘 사용하는 법을 알려드립니다', '산타가 쉬는집'
  ]
}
let btns = document.querySelectorAll("#tab li button");
function handleBooklist(year) {
  setTimeout(function () {
    for (let i = 0; i < booklist[`${year}`].length; i++) {
      $.ajax({
        method: "GET", //전송방식
        url: "https://dapi.kakao.com/v3/search/book?target=title", //전송주소 : 데이터를 전달할 URL
        data: { query: booklist[`${year}`][i] }, //보낼 데이터
        headers: { Authorization: config.APP_KEY },
        async: false,
      })
        .done(function (msg) {

          $("#book").append(`
      <li>
        <article>
          <a class="thumb" href="${msg.documents[0].url}" target="_blank" title="새창">
            <img src="${msg.documents[0].thumbnail}" alt="" />
          </a>
          <h4 class="title">${msg.documents[0].title}</h4>
          <dl>
            <div>
              <dt>저자</dt>
              <dd class="authors">${msg.documents[0].authors}</dd>
            </div>
            <div>
              <dt>출판사</dt>
              <dd class="publisher">${msg.documents[0].publisher}</dd>
            </div>
            <div class="con">
              <dt class="a11y-hidden">소개</dt>
              <dd class="contents">${msg.documents[0].contents}</dd>
            </div>
          </dl>
          <a class="btn" href="${msg.documents[0].url}">도서 정보</a>
        </article>
      </li>        
      `);
        });
    } //for
    $('.loading').fadeOut(300);
  }, 100);
}

function handleTab() {
  $('.loading').fadeIn(100);
  if (this.classList.contains('on') === false) {
    let eleId = this.getAttribute('id');

    btns.forEach(ele => ele.classList.remove('on'));
    document.querySelector("#book").innerHTML = "";

    this.classList.add('on');
    handleBooklist(eleId);
  }
}

handleBooklist("year21");

btns.forEach((ele) => {
  let eleId = ele.getAttribute('id');
  ele.querySelector("span").innerHTML = booklist[`${eleId}`].length;
  ele.addEventListener("click", handleTab);

});

