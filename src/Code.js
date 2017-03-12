import React, { Component } from 'react';
import Back from './Back';
import ImageLoader from 'react-imageloader';

const projects = [
  {
    title: 'Now You Know PR',
    description: `React + Redux / Rails app. Search music publications and bloggers and organize them into campaigns for DIY music publicity.`,
    href: 'http://www.nowyouknowpr.com',
    src: 'img/nyk.png'
  },
  {
    title: 'peTinder',
    description: 'ReactJS + Redux & Rails app that geolocates users and finds adoptable pets via the Petfinder API.',
    href: 'http://petinder_react.pet-tinder.com/',
    src: 'img/petinder.png'
  },
  {
    title: 'U-Vote.org',
    description: 'Sinatra app that drives youth voter registration by gamifying voter registration among universities.',
    href: 'http://www.u-vote.org',
    src: 'img/uvote.png'
  }
]

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false }
  }
  toggleShow() {
    this.setState({ show: !this.state.show })
  }
  render(){
    const preloader = () => {
      (<div className="loader"></div>);
    }
    return(
      <div className="project">
        <p onClick={ () => this.toggleShow() }
          className={this.state.show? 'active' : ''}>
          { this.props.data.title }
        </p>
        {
          this.state.show?
          (
            <div>
              <p>
                { this.props.data.description }
              </p>
              <a href={ this.props.data.href }>
                <ImageLoader
                  src={ this.props.data.src }
                  wrapper={React.DOM.div}
                  preloader={preloader}>
                    Image failed to load.
                  </ImageLoader>
              </a>
            </div>
          )
          :
          ''
        }
      </div>
    )
  }
}
export default class Code extends Component {
  renderProjects() {
    return projects.map( project => {
      return <Project data={project}/>
    })
  }
  render(){
    return(
      <div>
        <div>
          <Back/>
          <div className="projects">
            { this.renderProjects() }
          </div>
        </div>
      </div>
    )
  }
}
