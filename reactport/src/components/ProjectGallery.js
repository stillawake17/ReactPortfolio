import React from 'react'
// import projectData from '../projectData.json'
// import project from './Project.js'

export function ProjectGallery(props)  {



        return (
                <>
                <h2>project gallery</h2>
        <div className="project">{props.children}</div>;
        </>
        )
}

//     const projectList = projectData.map(Project => <Project {...project} key={project.id} />)
//     return (
//         <ul>
//             <li className='proj-container' data-test='proj-gallery'>
//             {projectList}</li>
//         </ul>
//     );
// };

export default ProjectGallery;

