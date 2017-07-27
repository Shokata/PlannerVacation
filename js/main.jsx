import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList.jsx';
import Calendar from './Calendar.jsx';

document.addEventListener('DOMContentLoaded', function() {

  class App extends React.Component {
    render() {
      return <div>
        <Calendar/>
        <ToDoList/>
        <p className='footer'>
          Copyright &copy; Patryk Borkowski 2017
        </p>
      </div>
    }
  }

  ReactDOM.render(
    <App/>, document.getElementById('app'));
});
