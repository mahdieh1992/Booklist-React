import React from "react";
import './Header.css'



export default class Header extends React.Component {
    constructor(props){
        super()
      

    }

    render() {
        return (
            <div className="Header">

                <img src="./images/book.png" className="Header-content__logo" alt="BookLogo"></img>
                <h1 className="Header-content__title">Book<span className="Header-content__title--span">List</span></h1>


            </div>
        )
    }

}