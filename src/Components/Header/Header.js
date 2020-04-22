import React from 'react';

import logo from '../../Assets/SonicallyLogo.png'

export default class Header extends React.Component {

  render() {

    return (
      <div id='header' ref='header' className='header '>
        <div className='row'>
          <div className='col-2'>
            <img className='logo' alt="Sonically Logo" src={logo} />
          </div>
          <div className='col-8 text-center'>
            <h5 className='title'>BEATRIX</h5>
            PLAYS <br/>
            {this.props.plays}
          </div>
          <div className='col-2'>
            <button className='btn btn-outline-dark m-1 ml-md-5' onClick={() => this.props.tutorial('start', 0)}><i className="fas fa-info"></i></button>
          </div>
        </div>
      </div>
    );
  }
}
