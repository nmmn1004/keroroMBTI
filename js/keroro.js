let i = 0;
let e = 0, n = 0, f = 0, p = 0;

function select(m) {
  if (i == 0 || i == 4 || i == 8) {
    e += m;
    ++i;
    next(i);
  }
  else if (i == 1 || i == 5 || i == 9) {
    n += m;
    ++i;
    next(i);
  }
  else if (i == 2 || i == 6 || i == 10) {
    f += m;
    ++i;
    next(i);
  }
  else if (i == 11) {
    result();
    location.href = './result.html';
  }
  else {
    p += m;
    ++i;
    next(i);
  }
}

function next(n) {
  let q = document.getElementById('question');
  let img = document.getElementById('sitImg');
  let a1 = document.getElementById('a1');
  let a2 = document.getElementById('a2');
  document.getElementById('step').innerHTML = i + 1 + '/12';

  switch (n) {
    case 1:
      q.innerHTML = '오늘도 얹혀사느라 힘들었다<br>설거지를 하며 나는...';
      img.src = './src/img/select/step2.png';
      a1.innerHTML = '퍼렁별 침략은 언제나 제 손에! <br>침략 후엔 먹고 싶은 것도 먹고...';
      a2.innerHTML = '이거이거.. 퍼렁별 침략은 언제쯤에나...';
      break;
    case 2:
      q.innerHTML = '드디어 나의 부하 타마마 이등병이<br>한 건 해냈다! 나는...';
      img.src = './src/img/select/step3.png';
      a1.innerHTML = '역시 우리 이쁜 타마마야~ 정말 잘했어';
      a2.innerHTML = '쿠루루, 1단계 성공이다. 다음 단계로';
      break;
    case 3:
      q.innerHTML = '오늘도 역시나 설거지를 하던 중<br>드디어 집이 비었다!!<br>아직 할일이 산더미지만...';
      img.src = './src/img/select/step4.png';
      a1.innerHTML = '알게 뭐람~ 건담 조립이나 해야지 케로';
      a2.innerHTML = '그래도 할 건 해둬야지....';
      break;
    case 4:
      q.innerHTML = '나의 침략 작전 노래로 침략!<br>전세계로 송출되는 나의 모습을 보고...';
      img.src = './src/img/select/step5.png';
      a1.innerHTML = '캬~ 역시 나의 노래 좋구만<br>유명해질 일만 남았네';
      a2.innerHTML = '노래는 좋지만 좀 부끄럽구만..';
      break;
    case 5:
      q.innerHTML = '건프라 완성!<br>건담의 총을 보고 나는...';
      img.src = './src/img/select/step6.png';
      a1.innerHTML = '이 총만 있다면 퍼렁별 침략은 거뜬!<br>역시 건담이야~';
      a2.innerHTML = '아무리 멋있어도 20만원씩이나...';
      break;
    case 6:
      q.innerHTML = '도로로가 준비한 새로운 대원복!<br>하지만 영 별로다...<br>도로로에게 나는...';
      img.src = './src/img/select/step7.png';
      a1.innerHTML = '멋있어!! 중후한 멋이 있구만!!!';
      a2.innerHTML = '아무래도 이건 아닌 것 같아..<br>다른 거 볼까?';
      break;
    case 7:
      q.innerHTML = '쿠루루의 침략 발명품이<br>예상보다 늦는다고 한다<br>연락을 받은 뒤 나는...';
      img.src = './src/img/select/step8.png';
      a1.innerHTML = '괜찮아~ 다른 거 하고 있으면 되지~~';
      a2.innerHTML = '(이거 늦어지면 계획이 어긋나는데...)';
      break;
    case 8:
      q.innerHTML = '오랜만에 모인 소대원들!<br>다들 자기 애기들로 바쁜 와중에...';
      img.src = './src/img/select/step9.png';
      a1.innerHTML = '(오늘도 활기차네)얘들아~얘들아~';
      a2.innerHTML = '(아 기빨린다... 언제 얘기 끝나니..)';
      break;
    case 9:
      q.innerHTML = '쿠루루가 준비한 새로운 슈트!<br>특별한 기능은 없지만...';
      img.src = './src/img/select/step10.png';
      a1.innerHTML = '이정도면 날 수 있을 것 같은데?';
      a2.innerHTML = '망토가 멋있긴 하구만';
      break;
    case 10:
      q.innerHTML = '열심히 일하는 도중<br>모아가 주먹밥을 건넨다<br>먹고 난 뒤에 난...';
      img.src = './src/img/select/step11.png';
      a1.innerHTML = '모아야 고마워, 만들 때 힘들진 않았고?';
      a2.innerHTML = '맛있다! 덕분에 더 힘낼 수 있겠어!';
      break;
    case 11:
      q.innerHTML = '우주 도령께서 당장<br>이집트에 가고 싶다고 한다!<br>나는...';
      img.src = './src/img/select/step12.png';
      a1.innerHTML = '지금 당장 운송기 준비하도록<br>하겠습니다!';
      a2.innerHTML = '우선 이집트는 모래먼지가 많으니<br>마스크랑...';
      break;
  } 
}

function result() {
  let mbti = "i";
  if(e > 0) mbti = "e";
  if(n > 0) {
    mbti += 'n';
  }
  else {
    mbti += 's';
  }
  if(f > 0) {
    mbti += 'f';
  }
  else {
    mbti += 't';
  }
  if(p > 0) {
    mbti += 'p';
  }
  else {
    mbti += 'j';
  }
  localStorage.setItem('result', mbti);
}