import React from "react";
import './BookForm.css'


export default class BookForm extends React.Component {
    constructor(props) {
        super()


    }

    render() {
        return (
            <div className="Book">
                <form className="BookForm">
                    <label className='BookForm__lbl'>Tile</label>
                    <input type="text" className='BookForm__in' ></input>

                    <label className='BookForm__lbl'>Author</label>
                    <input type="text" className='BookForm__in'></input>

                    <label className='BookForm__lbl'>Year</label>
                    <input type="text" className='BookForm__in' ></input>

                    <button className='BookForm__Add'>Add Book</button>

                </form>
            </div>
        )

    }
}