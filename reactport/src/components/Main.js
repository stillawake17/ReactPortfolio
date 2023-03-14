import React from 'react';

function Main(props) {
   
    return ( 

        <main>
            <h1 className="main-header">{props.title}</h1>
            <p>Lorem Ipsum lots of text right around here. And then add some more lorem Ipsum</p>
        </main>

    )
}

export default Main;