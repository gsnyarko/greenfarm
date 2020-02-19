import React, {Component} from 'react';
import './Header.css';
import farmPic from './Images/farmlogo.jpg';
// this is just a test... 
class Header extends Component {
    render() {
        return (<>
            <div class="topnav">
                <a class="active" href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#products">Products</a>
                <a href="#contact">Contact</a>
                <input type="text" placeholder="Search.."></input>
                </div>
                <div id='pic'>
                   <img src={farmPic} alt='background'></img>
                </div>
                </>);
            }
        }
        
        export default Header;
        
        
        
        
        
        
        
        
        
