import React, { Component } from 'react';

export default class extends Component {
  constructor() {
    super();
    this.state = { show: false }
  }
  toggleShow() {
    this.setState({ show: !this.state.show})
  }
  render() {
    return(
      <div id="lockovitch">
        <p onClick={ () => this.toggleShow() }>
          Erin Lockovitch.
        </p>
        { this.state.show?
          (
            <div>
              <p>
                <a href="https://vimeo.com/193212724">
                  A documentary about one man's journey to being stuck inside his inlaws' bathroom<br/>
                  for an hour, and his discovery that the real bathroom is inside each of our hearts.
                </a>
              </p>
              <iframe
                src="https://player.vimeo.com/video/193212724"
                width="320"
                height="180"
                frameBorder="0"
                webkitAllowFullScreen
                mozAllowFullScreen
                allowFullScreen
              />
            </div>
          )
          :
          ''
        }
      </div>
    )
  }
}
