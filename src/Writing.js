import React, { Component } from 'react';
import Back from './Back';
import Lockovitch from './projects/writing/Lockovitch';
import Outreach from './projects/writing/Outreach';
import NickDigital from './projects/writing/NickDigital';

export default class Writing extends Component {
  render(){
    return(
      <div>
        <div>
          <Back/>
          <div className="writing">
            <p>Recent work:</p>
            <p><Lockovitch/></p>
            <p><Outreach/></p>
            <p><NickDigital/></p>
          </div>
        </div>
      </div>
    )
  }
}
