import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";
import YourBotArmy from "./containers/YourBotArmy";

const BASE_URL = "https://bot-battler-api.herokuapp.com/api/v1/bots";
class App extends Component {
  constructor() {
    super();
    this.state = {
      bots: [],
      botArmy: []
    };
  }

  componentDidMount() {
    fetch(BASE_URL)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ bots: data });
      });
  }

  render() {
    return (
      <div className="App">
        <YourBotArmy
          botArmy={this.state.botArmy}
          handleClick={this.handleDelist}
        />
        <BotsPage
          bots={this.state.bots}
          botArmy={this.state.botArmy}
          handleEnlist={this.handleEnlist}
        />
      </div>
    );
  }

  handleEnlist = bot => {
    if (!this.state.botArmy.includes(bot)) {
      this.setState({
        botArmy: [...this.state.botArmy, bot]
      });
    }
  };

  handleDelist = bot => {
    if (this.state.botArmy.includes(bot)) {
      this.setState({
        botArmy: this.state.botArmy.filter(armyBot => armyBot.id !== bot.id)
      });
    }
  };

  // handleClick = (e) => {
  //   let clickedBot;
  //   if(this.state.bots.find(bot => (bot.id == e.target.id))){
  //       clickedBot = this.state.bots.find(bot => (bot.id == e.target.id));
  //   } else {
  //       clickedBot = this.state.botArmy.find(bot => (bot.id == e.target.id));
  //   }

  //   if (!this.state.botArmy.includes(clickedBot)) {
  //     this.setState({
  //       botArmy: [...this.state.botArmy,clickedBot]
  //     });
  //     this.setState({
  //       bots: this.state.bots.filter(bot => bot !== clickedBot)
  //     })
  //   }

  //   if(this.state.botArmy.includes(clickedBot)){

  //     this.setState({
  //       botArmy: this.state.botArmy.filter(bot => bot !== clickedBot)
  //     });

  //     this.setState({
  //       bots: [...this.state.bots,clickedBot]
  //     });

  //   }

  // }
}

export default App;
