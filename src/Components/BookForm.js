import React from "react";
import './BookForm.css'


export default class BookForm extends React.Component {
    constructor(props) {
        super()

        this.state = {
            title: '',
            author: '',
            year: '',
            addBook: false,
            booksList: []
        }
        // Binding the method to the current instance of the class
        // This ensures that `this` inside method refers to the component instance
        this.titleHandle = this.titleHandle.bind(this)
        this.authorHandle = this.authorHandle.bind(this)
        this.yearHandle = this.yearHandle.bind(this)
        this.addBookHandle = this.addBookHandle.bind(this)
    }

    // Method to handle changes to the title input
    titleHandle(event) {
        this.setState({
            title: event.target.value
        })
    }

    // Method to handle changes to the author input
    authorHandle(event) {
        this.setState(
            {
                author: event.target.value
            }
        )
    }

    // Method to handle changes to the year input
    yearHandle(event) {
        this.setState({
            year: event.target.value
        })

    }
    //This component allows users to input book details (title, author, and year), and upon form submission,
    // it validates the input and updates the state to include the new book in the 

    addBookHandle(event) {
        event.preventDefault()

        let { title, author, year } = this.state //destructuring for read data store the current input values.
        this.setState({
            addBook: true //Updates the state with the values from the button fields
        })
        if (title && author && year) {

            let currentList = [{ id: this.state.booksList.length + 1, title, author, year }]
            this.setState((prevState) => {
                return {
                    booksList: [...prevState.booksList, ...currentList]


                } //The list of books is displayed dynamically as new books are added

            })

        }
        this.setState({
            title: '',
            author: '',
            year: ''

        })
    }

    render() {
        return (
            <div className="Book">
                <form className="BookForm">
                    <label className='BookForm__lbl'>Tile</label>
                    <input type="text" className='BookForm__in' value={this.state.title} onChange={(event) => { this.titleHandle(event) }}></input>
                    {/*it validates the input and updates the state to include the new book in the*/}
                    {this.state.addBook && this.state.title.length === 0 && (<span className="spanValid">Please Enter Title</span>)}

                    <label className='BookForm__lbl'>Author</label>
                    <input type="text" className='BookForm__in' value={this.state.author} onChange={(event) => { this.authorHandle(event) }}></input>
                    {this.state.addBook && this.state.author.length === 0 && (
                        <span className="spanValid">Please Enter Author</span>
                    )}

                    <label className='BookForm__lbl'>Year</label>
                    <input type="text" className='BookForm__in' value={this.state.year} onChange={(event) => { this.yearHandle(event) }}></input>
                    {this.state.addBook && this.state.year.length === 0 && (
                        <span className="spanValid">Please Enter Year</span>
                    )}
                    <button className='BookForm__Add' value={this.state.addBook} onClick={(event) => this.addBookHandle(event)}>Add Book</button>
                    {console.log(this.state.booksList)}
                </form>
                <div className="BookAdded">
                    <table className="BookAdded__Tbl">
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                        </tr>

                        {this.state.booksList.map((book) => (
                            <tr>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.year}</td>
                            </tr>
                        ))}


                    </table>
                </div>
            </div>
        )

    }
}