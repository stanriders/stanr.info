import {Collapse} from 'react-collapse';
import React, {useState, useCallback} from 'react';

export default function Project(data) {
    const [state, callback] = useState(false);
        
    const onClick = useCallback(
        () => callback(!state),
        [state]
    );

    return (
      <>
        <div key={data.name}>
            <button
                className="projectHeader"
                onClick={onClick}
                aria-expanded={state}>{data.name}</button> 
            <Collapse isOpened={state}>
                <div className="projectTitle"><a href={data.link} className="projectLink">{data.link}</a><span className="projectStack">{data.stack}</span></div>
                <div className="projectDescription">{data.description}</div>
            </Collapse>
      </div>
      </>
    )
}