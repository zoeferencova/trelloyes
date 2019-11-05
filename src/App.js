import React from 'react';
import './App.css';
import List from './List.js';


class App extends React.Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {this.props.store.lists.map(list => (
            <List 
              key={list.id} 
              header={list.header} 
              cards={list.cardIds.map(id => this.props.store.allCards[id])} 
            />
          ))}
        </div>
      </main>
    );
  }

  
}

export default App;
