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
                <div className="BookAdded">
                    <table className="BookAdded__Tbl">
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                        </tr>
                        <tr>
                            <td>Peter</td>
                            <td>Griffin</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td>Lois</td>
                            <td>Griffin</td>
                            <td>$150</td>
                        </tr>
                    </table>
                    </div>
            </div>

        )

    }



}
