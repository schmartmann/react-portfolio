import React, { Component } from 'react';
import Back from './Back';
import Lockovitch from './projects/writing/Lockovitch';
import Outreach from './projects/writing/Outreach';
import NickDigital from './projects/writing/NickDigital';

export default class Writing extends Component {
  render(){
    const iframeSize = {height: '100%', width: '100%'}
    return(
      <div>
        <div>
          <Back/>
          <div className="writing">
            <p>Recent work:</p>
            <p><Lockovitch iframeSize={ iframeSize } /></p>
            <p><Outreach iframeSize={ iframeSize } /></p>
            <p><NickDigital iframeSize={ iframeSize } /></p>
          </div>
        </div>
      </div>
    )
  }
}
