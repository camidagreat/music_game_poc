import React from 'react';

import logo from './SonicallyLogo.png'

export default class Header extends React.Component {

  tutorial() {
    this.props.tutorial('start', 0)
  }

  render() {

    return (
      <div id='header' ref='header' className='header '>
        <div className='row'>
          <div className='col-2'>
            <img className='logo' src={logo} />
          </div>
          <div className='col-8 text-center'>
            <h5 className='title'>BEATRIX</h5>
            PLAYS <br/>
            {this.props.plays}
          </div>
          <div className='col-2'>
            <button className='btn btn-outline-dark m-1 ml-md-5' onClick={() => this.tutorial()}><i className="fas fa-info"></i></button>
          </div>
        </div>
      </div>
    );
  }
}
