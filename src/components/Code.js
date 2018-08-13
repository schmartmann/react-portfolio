import React, { Component } from 'react';
import Back from './Back';
import Portrait from './Portrait';
import ImageLoader from 'react-imageloader';
import '../stylesheets/Code.css';


const projects = [
  {
    title: "Markup Masker",
    description: "Ruby Gem that takes in a string polluted with HTML or JavaScript, and uses regexs to break separate out unwanted markup.",
    href: "https://github.com/schmartmann/markup_mask",
    src: "https://media.giphy.com/media/8UdbDVaUtYNhK/giphy.gif"
  },
  {
    title: 'Sinatra Turntable',
    description: 'Bash script that bootstraps a Sinatra app with an ActiveRecord database.',
    href: 'https://github.com/schmartmann/sinatra_turntable',
    src: "https://camo.githubusercontent.com/e3874a36a46fb5cefeb9fee7c12739ef98ce74e3/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f687278586e7a566f4c7237346b2f67697068792e676966"
  },
  {
    title: 'Now You Know PR',
    description: `React + Redux / Rails app. Search music publications and bloggers and organize them into campaigns for DIY music publicity.`,
    href: 'http://www.nowyouknowpr.com',
    src: 'img/nyk.png'
  },
  {
    title: 'peTinder',
    description: 'ReactJS + Redux & Rails app that geolocates users and finds adoptable pets via the Petfinder API.',
    href: 'http://www.pet-tinder.com/',
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
              <p className="title">
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
    return projects.map( (project, i) => {
      return <Project data={project} key={ i } />
    })
  }
  componentDidMount() {
    var body = document.querySelector('body');
    body.className = 'codeRoute'
  }
  render(){
    return(
      <div>
        <div>
          <Back/>
          <div className="projects">
            <p>Recent Projects: </p>
            { this.renderProjects() }
            <Portrait/>
          </div>
        </div>
      </div>
    )
  }
}
