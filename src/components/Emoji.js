import React from 'react';
import Node_emoji from 'node-emoji';

class Emoji extends React.Component {  
      
  constructor(props){  
      super();      // need super() to use _THIS_
      this.icon = Node_emoji.get(props.iconName);
      // first... INITIALIZE STATE
      this.state = { count: 0 };  
      // then... BIND _THIS_ to updateMessage() so they can use _THIS_ (ugh... seriously...?)
      this.increaseCount = this.increaseCount.bind(this);
  }  
  
  increaseCount() {  
    console.log("casting vote for", this.icon);

    // Getting warning about mutating state directly, not cov'd in lecture yet
    this.state.count ++;
    this.setState({ count: this.state.count }); 
  }

  render() {  
  return (  
    <section className="emoji_with_counter"> 
      <section className = "emoji" onClick={this.increaseCount}>{this.icon}</section>
      <section className = "counter">{this.state.count}</section>
    </section>  
    )  
  }
}

export default Emoji;