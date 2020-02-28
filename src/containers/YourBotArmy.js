import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      botArmy: props.botArmy
    }
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.botArmy.map(bot => <BotCard bot={bot} key={bot.id} id={bot.id} handleClick ={this.props.handleClick} />)}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
