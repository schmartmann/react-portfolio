import React, { Component } from 'react';
import ImageLoader from 'react-imageloader';


export default class Uvote extends Component {
  constructor() {
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
          U-Vote.org
        </p>
        {
          this.state.show?
          (
            <div>
              <p>
                Sinatra app that drives youth voter registration by gamifying<br/>
                voter registration among universities.
              </p>
              <a href="http://www.u-vote.org">
                <ImageLoader
                  src="img/uvote.png"
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
