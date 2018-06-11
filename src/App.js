import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    getInitialState() {

    return {checked: false}

}

    edit() {

       alert("Редактировать элемент?");

    }

    delete() {



        alert("Удалить элемент?")
    }

    checkbox() {

        var message;

        if (this.state.checked) {

            message = 'its ok';
            console.log(message);

        } else {


            message = 'its not ok';
            console.log(message);


        }




    }


    render() {
    return (


        <div className="box">

            <div className="text"> {this.props.children}</div>
            <button onClick={this.edit} className="btn-light"> Редактировать </button>
            <button onClick={this.delete} className="btn-red"> Удалить </button>



        </div>



    );
  }
}


export default App;
