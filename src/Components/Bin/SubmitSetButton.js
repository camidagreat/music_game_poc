import React from 'react';
import Logo from '../../Assets/SonicallyLogo.png'

class SubmitSetButton extends React.Component {

  handleSubmitSet() {
    this.props.handleSubmitSet();
  }

  render() {
    return (
      <div className='submit-set-button'>
        <img src={Logo} onClick={() => this.handleSubmitSet()}/>
      </div>
    )
  }
}

export default SubmitSetButton;
