import React from "react";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {

  render() {
    return (
      <div>
        <BotCollection bots ={this.props.bots} handleClick={this.props.handleClick} key={Math.random()} botArmy = {this.props.botArmy}  />
      </div>
    );
  }


}


export default BotsPage;
