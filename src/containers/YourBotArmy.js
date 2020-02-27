import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.yourBots.map(yourBot => <BotCard handleClick={this.props.handleClick} key={yourBot.id} bot={yourBot} />)}
            {/* Your Bot Army */}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
