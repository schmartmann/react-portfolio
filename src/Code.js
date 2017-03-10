import React, { Component } from 'react';
import Back from './Back'; 
import Petinder from './projects/code/Petinder';
import UVote from './projects/code/UVote';
import NYK from './projects/code/NYK';

export default class Code extends Component {
  render(){
    return(
      <div>
        <div>
          <Back/>
          <div className="projects">
            <NYK/>
            <Petinder/>
            <UVote/>
          </div>
        </div>
      </div>
    )
  }
}
