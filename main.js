let divs = document.querySelectorAll("div");

divs.forEach((el, index) => {
  el.addEventListener("click", (i) => {
    console.log(i.currentTarget.className);
  })
})

// currentTarget은 내가 이벤트 리스너를 붙여준 대상을 지칭.
// three를 클릭하면 three의 부모들인 two와 one이 모두 호출되고 있다 

/*
왜 three div하나만 선택 하였는데 3가지 모두 클릭 이벤트, 발생 하게 될까?

브라우저는 특정 화면 요소에서 이벤트가 발생 하 였을때 그 이벤트를 최상위에 있는 화면 요소까지 이벤트를 전파 시킨다 
따라서 three요소를 틀릭하면 상위에 있는 one까지 거슬러 올라가 이벤트를 전파 하는데 이런 이벤트 전파 방식을 이벤트 버블링이라고 한다 

이벤트 캡쳐는 버블링의 반대 방향으로 진행되는 전파 방식 

우리는 이두가지를 합쳐서 이벤트 위임 현상 이라고 함
*/

let itemList = document.querySelector(".itemList");
itemList.addEventListener("click", () => {
  alert("clicked");
});

//-------------------------------------------------------
let itemLists = document.querySelectorAll(".itemList li");

itemLists.forEach((el, index) => {
  el.addEventListener("click", () => {
    alert("clicked");
  })
})