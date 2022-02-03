import React, {Component} from 'react';
import '../views/styles/shoponline.css'
import hoka from '../imagez/hokawmnn.jpg';
import mizuno from '../imagez/mizunomen.jpg';

export default class ShopOnline extends Component {
  render() {
    const handleClick=()=> {
      window.location='/menshoes';
  }
  const handleClick1=()=> {
    window.location='/womenshoes';
}
    return (
      <div className="shophome">
        <h1 >Thank You for Shopping Online </h1> 
      <div className="card">
        <img src={mizuno} onClick={handleClick} className="menru" alt="Men's Running" />
        <img src={hoka} onClick={handleClick1} className="womenru" alt="Women's Shoes" />
      </div>
      </div>
    );
  }
}


