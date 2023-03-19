import React from 'react';
import Project from './Project';
import ProjectGallery from './ProjectGallery';


function Main(props) {
   
    return ( 
<>        <main>
            <h1 className="main-header">{props.title}</h1>
            <p>Joanna Booth. Web Developer.</p>
            <p><strong>GitHub User Name: </strong>
            <a href="https://github.com/stillawake17" >stillawake17</a></p>
            <p><strong>LinkedIn: </strong><a href="https://www.linkedin.com/in/joanna-booth-8587492/">Profile</a></p>
            <p><strong>Email: </strong><a href="jboothform@gmail.com"></a></p>
                    </main>
        <ProjectGallery />
        <Project />
        </>

    )
}

export default Main;