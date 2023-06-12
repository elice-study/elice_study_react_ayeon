import { useState } from 'react';
import './App.css';

function App() {
    const [state, setState] = useState(true);

    const onClickBtn = (e) => {};

    return (
        <div className="App">
            <input id="input" />
            <button onClick={onClickBtn}>입력</button>
            <div></div>
        </div>
    );
}

export default App;
