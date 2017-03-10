import React, { Component } from 'react';
import ImageLoader from 'react-imageloader';


export default class NYK extends Component {
  constructor(){
    super();
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
        <p onClick={ () => this.toggleShow() }>
          Now You Know PR
        </p>
        { this.state.show?
          (
            <div>
              <p>
                React + Redux / Rails app. Search music publications and bloggers <br/>
                and organize them into campaigns for DIY music publicity.
              </p>
              <a href="http://www.nowyouknowpr.com">
                <ImageLoader
                  src="img/nyk.png"
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
