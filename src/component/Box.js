import React from 'react';


function Box(props) {
    const clickMe = () => {
        alert('리액트 1강의를 마무리 하였습니다!!!');
    }
    return (
        <>
            <div className="box">
                {props.num}
                <h3>Box</h3>
                {props.name}
                <br></br>
                <button onClick={clickMe}>클릭하기!</button>
            </div>
        </>
    )
}

export default Box;