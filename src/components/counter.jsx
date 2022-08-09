import React, { Component } from "react";

class  Counter extends Component {

  hendelDicrement = () => {
    if (this.state.count > 0){
        this.setState({
            count: this.state.count - 1
        });
    }
  }

  render() { 
    console.log('Counter - Rendered');
    
    return (
      <div>
          <h2>{ this.props.id }</h2>
          <span style={{fontSize:'21px', width:'75px'}} className={ this.getBadgeClasses() }>{this.formatCount()}</span>
          <button onClick={ () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn m-2">+</button>
          <button onClick={ () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn m-2">Delete</button>
          <button onClick={ () => this.props.onDicrement(this.props.counter) } className="btn btn-secondary btn m-2">-</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 text-bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
