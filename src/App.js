import './App.css';
import React, { Component } from 'react';
import ListItems from './ListItems';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: '',
      },
    };
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpdate=this.setUpdate.bind(this)
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if (newItem.text !== '') {
      const newItems = [...this.state.items, newItem];

      this.setState({
        items: newItems,
        currentItem: {
          text: '',
          key: '',
        },
      });
    }
  }

setUpdate(text,key){
  const items=this.state.items;
  items.map(item=>{
    if(item.key===key){
      item.text=text
    }
  })
  this.setState({
    items:items
  })
}

  deleteItem(key) {
    const filterItems = this.state.items.filter((item) => item.key !== key);
    this.setState({
      items: filterItems,
    });
  }
  render() {
    return (
      <>
        <div className='heading'>
          <h1>React To-Do App</h1>
          <h4>Enter your Tasks</h4>
        </div>
        <header>
          <form className='to-do-form' onSubmit={this.addItem}>
            <input
              type='text'
              placeholder='Enter Task'
              value={this.state.currentItem.string}
              onChange={this.handleInput}
            />
            <button type='submit'>Add</button>
          </form>

          <ListItems
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
          ></ListItems>
        </header>
      </>
    );
  }
}

export default App;
