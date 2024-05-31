import React from "react";
import './Main.css'
import BookForm from "./BookForm";


export default class Main extends React.Component {
    constructor(props) {
        super()


    }

    render() {
        return (
            <div className="main">
                <BookForm />
            </div>

        )

    }



}
