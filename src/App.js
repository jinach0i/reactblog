import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function App() {
  return (
    <div className="App">
      자 코딩을 시작해 볼까

      {/* 글 발행 기능: 1)영구 저장은 server가 있어야 가능. 지금은 js로 해보자. */}
        {/* 2)줄거리:input 입력값을 저장 state로 담음->변수에 담은 내용을 어딘가에 추가 */}

      <div className='publish'>
        <input />
        <button>발행</button>
      </div>
    </div>
  );
}

export default App;
