/**
 * Created by Chris D on 17/12/2016.
 */

import React, { Component } from 'react';
import Rndwin from 'react-rnd';

const style = {
  textAlign: 'center',
  padding: '40px',
  border: 'solid 3px rgba(256,256,256,0.75)',
  borderRadius: '10px',
  background: 'rgba(256,256,256,0.5)',
  color: '#000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { zIndex: 99 };
    setTimeout(() => this.setState({ zIndex: 1000 }), 5000);
  }
  render() {
    return (
      <Rndwin
        ref={(c) => { this.rnd = c; }}
        initial={{
          x: (window.innerWidth / 2) - 200,
          y: (window.innerHeight / 2) - 80,
          width: 400,
          height: 200
        }}
        style={style}
        minWidth={300}
        minHeight={160}
        maxWidth={1000}
        maxHeight={500}
        bounds={'parent'}
        zIndex={this.state.zIndex}
      >
        <span className="box">
          Window #1
        </span>
      </Rndwin>
    );
  }
}
