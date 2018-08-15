import React, { Component } from 'react';
import Back from './Back';
import Portrait from './Portrait';
import ImageLoader from 'react-imageloader';
import '../stylesheets/Code.css';
import * as projects from './projects/code/Projects';
import * as styles from './Background';

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
    return projects.projects.map( (project, i) => {
      return <Project data={project} key={ i } />
    })
  }
  componentWillMount() {
    var colorSchemes = styles.colorSchemes;
    var path = this.props.location.pathname
    document.body.style.background = colorSchemes[ path ].background;
    document.body.style.color = colorSchemes[ path ].color;
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
