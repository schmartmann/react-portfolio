import React, { Component } from 'react';

const episodesList = [
  {
    episode: 1,
    title: 'Ep.1: Rational Self Interest',
    directLink: 'https://vimeo.com/100330760',
    iframeLink: 'https://player.vimeo.com/video/100330760'
  },
  {
    episode: 2,
    title: 'Ep. 2: The Invisible Fist of the Free Market',
    directLink: 'https://vimeo.com/127560550',
    iframeLink: 'https://player.vimeo.com/video/127560550'
  },
  {
    episode: 3,
    title: 'Ep. 3: Snitches Get Riches',
    directLink: 'https://vimeo.com/128115773',
    iframeLink: 'https://player.vimeo.com/video/128115773'
  },
  {
    episode: 4,
    title: 'Ep. 4: Warriors of Change',
    directLink: 'https://vimeo.com/128847620',
    iframeLink: 'https://player.vimeo.com/video/128847620'
  },
  {
    episode: 5,
    title: 'Ep. 5: Smiles for Stephanie',
    directLink: 'https://vimeo.com/129744952',
    iframeLink: 'https://player.vimeo.com/video/129744952'
  },
  {
    episode: 6,
    title: 'Ep. 6: A Rocketship Ride to the Top',
    directLink: 'https://vimeo.com/130559203',
    iframeLink: 'https://player.vimeo.com/video/130559203'
  }
]

class Episode extends Component {
  constructor(){
    super();
    this.state = { show: false }
  }
  toggleShow() {
    this.setState({ show: !this.state.show })
  }
  render() {
    return (
      <div>
        <p className="title" 
          onClick={ () => this.toggleShow() }>
          { this.props.episode.title }
        </p>
          { this.state.show? (
            <a href={ this.props.episode.directLink }>
              <iframe src={ this.props.episode.iframeLink }
                width={ this.props.iframeSize.width }
                height={ this.props.iframeSize.height }
                frameBorder="0"
              />
            </a>
          ) : ''
          }
      </div>
    )
  }
}

export default class Outreach extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false
    }
  }
  toggleList() {
    this.setState({ show: !this.state.show})
  }
  episodeList(){
    return episodesList.map( episode => {
      return(
        <Episode episode={ episode } key={ episode.episode } iframeSize={ this.props.iframeSize }/>
      )
    })
  }
  render() {
    return(
      <div className="work">
        <p onClick={() => this.toggleList()}
          className={ this.state.show? 'active' : ''}>
          The Outreach.
        </p>
        { this.state.show? (
        <div>
          <p>
            A series about street fundraisers that picks up after you
            blow them off.
          </p>
        </div>
        ) :  ''}
        { this.state.show? this.episodeList() : '' }
      </div>
    )
  }
}
