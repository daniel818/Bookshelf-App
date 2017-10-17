/**
 * Created by Daniel on 12/09/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

 class BookDetail extends Component {
    render() {

        if(!this.props.book){
            return <div>Select a book to get started</div>
        }

        return (
            <div>
                <h3>Detail for: </h3>
                <div>{this.props.book.title}</div>
                <div>pages :{this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state){
    //whatever will returned will show up as props
    //inside of BookList
    return{
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);