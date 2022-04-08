import Head from 'next/head'
import BackButton from '../components/backButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import consts from '../const';
import React, {useState, useCallback} from 'react';
import Project from '../components/project';

export default function Projects() {
    var layout = [];

    consts.map((type) => {
        layout.push(<div className="projectType" key={type.type}>{type.type}</div>)

        type.projects.map((data) => {
            layout.push(<Project {...data} key={data.name}/>)
        });
    });
    
    return (
      <>
        <Head>
          <title>StanR - Projects</title>
        </Head>
        <BackButton />
        <div className="page projects">
            <div className="center"><a href="https://github.com/stanriders" alt="GitHub page" className="githubLink"><FontAwesomeIcon icon={faGithub}  className="githubLink"/></a></div>
            <h2 className="center">Projects</h2>
            {layout}
        </div>
      </>
    );
}