import React from 'react';

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      checked: false,
      text: [],
      editMode: false,
      inputText: ''
    };
  }

  formSubmit = event => {
    event.preventDefault();
    if (this.state.inputText.length < 1) {
      return window.alert('Insert value')
    } else {
      const newItem = this.state.text.slice();
      newItem.push(this.state.inputText);
      this.setState({
        text: newItem,
        count: this.state.text.length,
        inputText: ''
      });
    };
  };

  inputChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };

    listEdit = index => {
      console.log(index);
      this.setState({
        checked: !this.state.checked,
        editMode: !this.state.editMode,
      });
    };

    listDel = index => {
      const copy = this.state.text.slice();
      copy.splice(index, 1);
      this.setState({
        text: copy,
        count: this.state.text.length,
      });
    };

    render() {
      const list = this.state.text.map((el, i) => {
        return <li key={el + i} className='newLi'>
          <span contentEditable={this.state.editMode}>
            {el}
          </span>
          <div>
            <button onClick= {e => this.listEdit(i)}>{this.state.checked ? 'Save' : 'Edit'}</button>
            <button onClick={e => this.listDel(i)}>
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
      });
      return <div className='containerInput'>
        <h2>
          To do list: {this.state.text.length}
        </h2>
        <div>
          <form onSubmit={this.formSubmit}>
            <input className='inputStyle'
              value={this.state.inputText}
              type="text"
              onChange={this.inputChange}
              placeholder="Write task..."/>
          </form>
        </div>
        <ul className='ulStyle'>
          {list}
        </ul>
      </div>
    }
  }

  export default ToDoList;
