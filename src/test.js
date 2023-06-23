import { useRef, useState } from 'react';

function Test() {
    // 배열 생성
    const arr = useRef([]);
    const [state, setState] = useState(false);

    // 인풋 값 가져오기
    const inputValue = useRef();

    // 추가 버튼을 누르면 강제 렌더링 되어 배열에 추가
    const onAddList = (e) => {
        setState((prev) => !prev);
        arr.current.push(inputValue.current.value);
    };

    const [loading, setLoading] = useState(true);

    const data = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos').then((res) => res.json());
        console.log(res);

        const titleNimg = res.map((el) => {
            return { title: el.title, url: el.url };
        });
        console.log(titleNimg);
    };

    return (
        <div className="App">
            <input id="input" ref={inputValue} />
            <button onClick={onAddList}>입력</button>

            {arr.current.map((el) => (
                <div>{el}</div>
            ))}

            <div>test2</div>
            {loading ? <div>로딩 중입니다 . . .</div> : <div>img, title</div>}
        </div>
    );
}

export default Test;

// 문제 1 : 반복처리 + 분기 처리
// input, button, div를 만든다.
// button 클릭 시 input에 값이 있을경우 div에 추가한다.
// div 출력된 값은 리스트 형태로 만든다.

// 문제 2 : 통신
// div를 만들어 놓고 안에 로딩중입니다. 작성
// https://jsonplaceholder.typicode.com/albums/1/photos 경로에 data를 요청
// 데이터를 받아왔다면 로딩중입니다. 대신 리스트 출력
// 이미지와 제목 출력
