import React, { Component } from 'react';


const sketches = [
  {
    title: "Jellyfishin' Impossible",
    href: 'http://www.nick.com/videos/clip/digital-short-spongebob-squarepants-viral-jellyfishin-impossible.html',
    src: `img/jellyfish1.png`,
    type: "html"
  },
  {
    title: "Jellyfishin' Impossible 2: Electric Jellyfish",
    href: 'http://www.nick.com/videos/clip/digital-short-spongebob-squarepants-parody-jellyfishin-impossible-2.html',
    src: `img/jellyfish2.png`,
    type: 'html',
  },
  {
    title: "Legend of Korra: Naga Attack Ad",
    href: 'https://vimeo.com/77100876',
    src: 'https://player.vimeo.com/video/77100876',
    type: 'vimeo'
  },
  {
    title: 'Legend of Korra: Pabu Attack Ad',
    href: 'https://vimeo.com/77100877',
    src: 'https://player.vimeo.com/video/77100877',
    type: 'vimeo'
  }
]

export default class NickDigital extends Component {
  constructor() {
    super();
    this.state = { show: false }
  }
  toggleShow() {
    this.setState({ show: !this.state.show})
  }
  renderSketches() {
    return sketches.map( (sketch, index) => {
      return(
        <div key={ sketch.index }>
          <p>
            { sketch.title }
            <a href={ sketch.href }>
              {sketch.type === 'vimeo'? (
                <iframe
                  src={ sketch.src }
                  width={ this.props.iframeSize.width }
                  height={ this.props.iframeSize.height}
                  frameBorder="0"
                  webkitAllowFullScreen
                  mozAllowFullScreen
                  allowFullScreen
                />
              ) :
              (
                <img src={sketch.src} width="40%" height="40%"/>
              )
              }
            </a>
          </p>
        </div>
      )
    })
  }
  render() {
    return(
      <div className="work">
        <p onClick={ () => this.toggleShow() }
          className={ this.state.show? 'active' : ''}>
          Nick.com Sketches.
        </p>
        { this.state.show? this.renderSketches() : '' }
      </div>
    )
  }
}
