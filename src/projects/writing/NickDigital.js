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

class Sketch extends Component {
  render() {
    return (
      <div>
        <p>
          <a href={ this.props.sketch.href }>
            { this.props.sketch.title }
          </a>
        </p>
        {this.props.sketch.type !== "vimeo" ?
        (
          <img src={ this.props.sketch.src } height="30%" width="30%"/>
        )
        :
        (
          <iframe src={ this.props.sketch.src } height="30%" width="30%"/>
        )
      }
      </div>
    )
  }
}

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
        <Sketch sketch={ sketch } key={ index }/>
      )
    })
  }
  render() {
    return(
      <div id="nick">
        <p onClick={ () => this.toggleShow() }>
          Nick.com Sketches.
        </p>
        { this.state.show? this.renderSketches() : '' }
      </div>
    )
  }
}
