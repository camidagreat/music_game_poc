import React from 'react';

import './Game.scss'
import * as SetOne from '../../Assets/audio/Beatrix1';
import * as SetTwo from '../../Assets/audio/Beatrix2';
import * as SetThree from '../../Assets/audio/Beatrix3';

export default class Game extends React.Component {

  constructor(props) {
    super(props);

    this.state = { plays: 30,
                   };
  }

  render() {
    return (
      <div className="beatrix">

      </div>
    );
  }
}
