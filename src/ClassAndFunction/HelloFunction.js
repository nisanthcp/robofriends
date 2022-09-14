// import React from "react";

const HelloFunction = ({greetings,myTest}) => {


    return (
        <div className="f1 tc">
            <h1> Hello World</h1>

            <p> {greetings}</p>
            <hr></hr>
            <p>{myTest} </p>
        </div>
    )


}



export default HelloFunction;