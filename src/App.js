import { useRef, useState } from 'react';

function App() {
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

    return (
        <div className="App">
            <input id="input" ref={inputValue} />
            <button onClick={onAddList}>입력</button>

            {arr.current.map((el) => (
                <div>{el}</div>
            ))}
        </div>
    );
}

export default App;
