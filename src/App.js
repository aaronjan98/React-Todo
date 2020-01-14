import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoDataList: []
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

  clearCompleted = () => {
    this.setState({
      todoDataList: this.state.todoDataList.filter(item => 
        item.completed === false
      )
    });
  };
  
  render() {
    return (
      <div className='App' >
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm  addItem={this.addItem} />
        </div>

        <TodoList todoData={this.state.todoDataList} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
