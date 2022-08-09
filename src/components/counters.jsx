import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {
    
    console.log('Counters - Rendered');

    const {onReset, onDelete, onIncrement, onDicrement, counters} = this.props

    return (
      <div className="container">
        <button
          onClick={onReset}
          className="btn btn-success btn mt-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDicrement={onDicrement}
            value={counter.value}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
