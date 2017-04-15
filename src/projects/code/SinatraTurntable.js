import React, { Component } from 'react'; 

export default class SinatraTT extends component {
  constructor() {
    super(); 
    this.state = { show: false }
  }
  toggleShow() {
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    return(
      <div className="project">
        <p onClick={ () => this.toggleShow() }>
          Sinatra Turntable
        </p>
        { this.state.show? 
            (
              <div>
                <p>
                  Bash script that bootstraps a Sinatra app with an ActiveRecord database
                </p>
                <a href="https://github.com/schmartmann/sinatra_turntable"
                  <img
                    src="https://camo.githubusercontent.com/e3874a36a46fb5cefeb9fee7c12739ef98ce74e3/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f687278586e7a566f4c7237346b2f67697068792e676966"/>
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
