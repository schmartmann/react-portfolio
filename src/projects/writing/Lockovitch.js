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
      <div className="work">
        <p onClick={ () => this.toggleShow() }>
          Erin Lockovitch.
        </p>
        { this.state.show?
          (
            <div>
              <p>
                <a href="https://vimeo.com/193212724">
                  One man's journey being stuck inside his inlaws' bathroom
                  for an hour,<br/> and his discovery that the real bathroom is inside each of our hearts.
                </a>
              </p>
              <iframe
                src="https://player.vimeo.com/video/193212724"
                width={ this.props.iframeSize.width }
                height={ this.props.iframeSize.height }
                frameBorder="0"
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
