import React from "react";
import Header from "./Header";
import Main from "./Main";
import './App.css';



export default class App extends React.Component {

    constructor(props) {
        super()


    }
    render() {
        return (
            <div className="container">
                <Header />
                <Main />

            </div>
        )
    }

}