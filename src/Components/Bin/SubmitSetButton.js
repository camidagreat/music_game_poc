import React from 'react';
import Logo from '../../Assets/SonicallyLogo.png'

export default function SubmitSetButton(props) {

  return (
    <div className='submit-set-button ml-4'>
      <img src={Logo} alt="submit track group" onClick={() => props.handleSubmitSet()}/>
    </div>
  )
  
}
