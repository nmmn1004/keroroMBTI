# 케로로 성격 유형 검사
## 제작 기간: 11시간 3분
## 접속 링크: https://nmmn1004.github.io/keroroMBTI/

<img width="587" alt="image" src="https://user-images.githubusercontent.com/51752838/208297290-dfd5811f-ac5f-4cd7-8681-5cca383eec18.png">

개발 계획

<img width="579" alt="image" src="https://user-images.githubusercontent.com/51752838/208318263-d9acf4eb-fc26-458c-8da9-a537087d5c23.png">

참고한 케로로 성격 유형

<img width="1265" alt="image" src="https://user-images.githubusercontent.com/51752838/208318309-a1cedc34-c04b-448f-afe6-4264b0cfcdd0.png">
PC 화면

<img width="368" alt="image" src="https://user-images.githubusercontent.com/51752838/208318325-8f9fde09-2a18-4c5c-8022-77afc1b37d1d.png">
모바일 화면

@media 활용으로 body 태그의 font-size를 변경하여 반응형 웹으로 만듦, 배경 이미지도 해상도에 따라 다른 이미지로 변경

<img width="431" alt="image" src="https://user-images.githubusercontent.com/51752838/208318366-bddfdccc-0a86-4b16-9ca7-1895a318b49a.png">

시작하기를 누르면 선택 페이지로 이동

<img width="237" alt="image" src="https://user-images.githubusercontent.com/51752838/208318436-f1668e06-4962-46d2-95d8-c886dfc9c53a.png">

성격 유형을 판별할 전역변수 e, n, f, p 선언, 12번의 질문 사항을 기록할 변수 i 선언

<img width="298" alt="image" src="https://user-images.githubusercontent.com/51752838/208318450-5b6a0f8a-e8b0-4a92-8f25-1c51b15660d8.png">

선택지의 버튼을 누르면 select 함수에 1번 선택지는 1, 2번 선택지는 -1의 매개변수를 전달해 그 단계에 맞는 성격 점수를 부여한 뒤 i를 증가시킴

<img width="735" alt="image" src="https://user-images.githubusercontent.com/51752838/208318480-95d8baa8-23f6-4360-9aa8-4e5343e6e651.png">

next 함수로 다음 선택 상황을 출력해주는 기능 구현

<img width="308" alt="image" src="https://user-images.githubusercontent.com/51752838/208318502-286e289b-8a6a-4237-98a0-5ddfce70a721.png">

종합 점수로 mbti 판별 이후 로컬스토리지에 저장

<img width="640" alt="image" src="https://user-images.githubusercontent.com/51752838/208318528-aae74704-c32d-4d90-935d-93414b038f7f.png">

결과 화면에서 getItem으로 로컬 스토리지 변수를 받아옴

<img width="412" alt="image" src="https://user-images.githubusercontent.com/51752838/208318554-a841999c-0dee-4edb-811a-1a248f286b26.png">

window.onload로 웹이 실행될 때 해당 mbti에 맞는 사진으로 대체하여 img태그 
