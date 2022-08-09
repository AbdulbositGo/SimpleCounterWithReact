import React from 'react';
import Counters from "./components/counters";
import Navbar from "./components/navbar";


class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
      { id: 5, value: 5 },
    ],
  };


  constructor() {
    super();
    console.log('App - Constructor');
    // this.state = this.   
  }


  componentDidMount(){
    console.log('App - Mounted');
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value ++;
    this.setState({counters})
  }

  handleDicrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    if (counters[index].value > 0){
      counters[index].value --;
    }
    this.setState({counters})
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c
    })
    this.setState({counters})
  }


  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({
      counters,
    });
  };

  render(){
    console.log('App - Rendered');
    return (
      <>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDicrement={this.handleDicrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

 
export default App;
