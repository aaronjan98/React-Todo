import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoDataList: todoData
    };
  }

  toggleItem = id => {
    const newTodoDataList = this.state.todoDataList.map(item => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item;
      }
    });
    this.setState({
      todoDataList: newTodoDataList
    });
  };

  addItem = itemTask => {
    const newItem = {
      task: itemTask,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoDataList: [...this.state.todoDataList, newItem]
    });
  };
  
  render() {
    return (
      <div className='App' >
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm  addItem={this.addItem} />
        </div>

        <TodoList todoData={this.state.todoDataList} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default App;
