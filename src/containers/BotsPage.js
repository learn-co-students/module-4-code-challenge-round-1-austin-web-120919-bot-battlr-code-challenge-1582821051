import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor() {
    super();
    this.state = {
      bots: [],
      yourBots: [],
      showDetail: false,
      currentBot: {}
    };
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(resp => resp.json())
      .then(json =>
        this.setState({
          bots: json
        })
      );
  }

  // handleClick = e => {
  //   const botId = e.target.parentNode.parentNode.parentNode.id;
  //   const foundBot = this.state.bots.find(bot => bot.id == botId)
  //   //console.log(e.target.parentNode.parentNode.parentNode.id)
  //   if(this.state.yourBots.includes(foundBot)){
  //     const botIndex = this.state.yourBots.findIndex(bot => bot.id == foundBot.id)
  //     this.setState({
  //       yourBots: ([...this.state.yourBots.slice(0, botIndex), ...this.state.yourBots.slice(botIndex + 1, this.state.yourBots.length)])
  //     })
  //   }
  //   else{
  //     //console.log(this.state.bots[botId])
  //     this.setState({
  //       yourBots: [...this.state.yourBots, foundBot]
  //     })
  //   }

  // }

  handleEnlist = e => {
    const botId = e.target.id;
    const foundBot = this.state.bots.find(bot => bot.id == botId);
    console.log(foundBot)
    if (this.state.yourBots.includes(foundBot)) {
      const botIndex = this.state.yourBots.findIndex(
        bot => bot.id == foundBot.id
      );
      this.setState({
        yourBots: [
          ...this.state.yourBots.slice(0, botIndex),
          ...this.state.yourBots.slice(botIndex + 1, this.state.yourBots.length)
        ]
      });
    } else {
      this.setState({
        yourBots: [...this.state.yourBots, foundBot]
      });
    }
  };

  handleClick = e => {
    const botId = e.target.parentNode.parentNode.parentNode.id;
    const foundBot = this.state.bots.find(bot => bot.id == botId);
    this.setState({
      showDetail: !this.state.showDetail,
      currentBot: foundBot
    });
  };

  render() {
    return (
      <div>
        <YourBotArmy
          handleClick={this.handleClick}
          yourBots={this.state.yourBots}
        />
        {this.state.showDetail ? (
          <BotSpecs
            bot={this.state.currentBot}
            handleEnlist={this.handleEnlist}
            handleClick={this.handleClick}
          />
        ) : (
          <BotCollection
            handleClick={this.handleClick}
            bots={this.state.bots}
          />
        )}
      </div>
    );
  }
}

export default BotsPage;
