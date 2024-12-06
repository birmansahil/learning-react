import React, { Fragment } from "react";

const ComponentQuiz = () => {
    return(
        <Fragment>
            <h2>Learning fragment</h2>
            <p>You do not have to write fragment keyword, instead you can just use empty tags and it will work the same.</p>
            <p>Question 01: What is a React Compoent?</p>
            <p>Answer: A function that returns React element(s).</p>
        </Fragment>
    );
}

export default ComponentQuiz;