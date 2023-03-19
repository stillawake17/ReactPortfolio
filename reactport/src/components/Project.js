import React from "react";
import projects from '../projectData.json';

export function Project(projects) {
        return (
          <>
          <h2>project</h2>      
              <div className="card">
            <div className="img-container">
              <img alt={projects.title} src={projects.imgUrl} />
            </div>
            <div className="content">
              <ul>
                <li>
                  <strong>Project Title:</strong> {projects.title}
                </li>
                <li>
                  <strong>Git Repo:</strong> {projects.gitRepo}
                </li>
                <li>
                  <strong>ID:</strong> {projects.id}
                </li>
              </ul>
            </div>
          </div>
          </>

        );
      };
  


export default Project;