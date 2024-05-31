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

        this.titleHandle = this.titleHandle.bind(this)
        this.authorHandle = this.authorHandle.bind(this)
        this.yearHandle = this.yearHandle.bind(this)
        this.addBookHandle = this.addBookHandle.bind(this)
    }

    titleHandle(event) {
        this.setState({
            title: event.target.value
        })
    }

    authorHandle(event) {
        this.setState(
            {
                author: event.target.value
            }
        )
    }

    yearHandle(event) {
        this.setState({
            year: event.target.value
        })

    }

    addBookHandle(event) {
        event.preventDefault()
        this.setState({
            addBook: true
        })
        if (this.state.title.length !== 0 && this.state.author.length !== 0 && this.state.year.length !== 0) {
            let title = this.state.title
            let author = this.state.author
            let year = this.state.year
            let currentList=[{id:this.state.booksList.length+1, title: title, author: author, year: year}]
            this.setState((prevState)=>{
                return {booksList:[...prevState.booksList,...currentList]}
            })

        }
    }

    render() {
        return (
            <div className="Book">
                <form className="BookForm">
                    <label className='BookForm__lbl'>Tile</label>
                    <input type="text" className='BookForm__in' value={this.state.title} onChange={(event) => { this.titleHandle(event) }}></input>
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
                       
                            {this.state.booksList.map((book)=>(
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