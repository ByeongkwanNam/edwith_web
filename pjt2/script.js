const TODO = 'todo';
const DOING = 'doing';
const DONE = 'done'

const todo = document.querySelector(`#${TODO}`);   // TO DO 목록
const doing = document.querySelector(`#${DOING}`); // DOING 목록
const done = document.querySelector(`#${DONE}`);   // DONE 목록

const url = 'localhost:8080/todo';

const nextList = {
    TODO: doing,
    DOING: done,
    DONE: null
};

const button = document.querySelector('#action'); // 다 됐을 때 옆으로 가는 버튼

const ajax = (id, method) => {
    let oReq = new XMLHttpRequest();
    // 이벤트 리스너를 넣을 필요가 있을까?
    oReq.open(method, url);
    oReq.send();
}

const move = (now, target) => {
    /**
     * 1. 다음 목록에 추가
     * 2. 현재 목록에서 제거
     * 3. ajax로 DB 관리
     */
    
     const next = nextList.now.className;

     if (next !== null) {
        next.appendChild(target);
     }
     now.removeChild(target);
     ajax(target.id, 'PUT');
}



button.addEventListener('click', () => {
    const li = button.parentElement;
    if (li == null || li ==  undefined) return;
    const ul = li.parentElement;
    if (ul == null || ul == undefined) return;

    move(ul, li);
});