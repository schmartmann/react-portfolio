import React, { Component } from 'react';
import Back from '../Back';
import Portrait from '../Portrait';
import Lockovitch from '../projects/writing/Lockovitch';
import Outreach from '../projects/writing/Outreach';
import NickDigital from '../projects/writing/NickDigital';
import '../../stylesheets/Writing.css';
import setColorScheme from '../colorScheme';

export default class Writing extends Component {
  componentWillMount() {
    var path = this.props.location.pathname
    setColorScheme( path );
  }
  render() {
    const iframeSize = {
      height: '100%',
      width: '100%'
    };
    return(
      <div>
        <div>
          <Back/>
          <div className="writing">
            <p>Recent work:</p>
            <Lockovitch iframeSize={ iframeSize } />
            <Outreach iframeSize={ iframeSize } />
            <NickDigital iframeSize={ iframeSize } />
            <Portrait/>
          </div>
        </div>
      </div>
    )
  }

}
