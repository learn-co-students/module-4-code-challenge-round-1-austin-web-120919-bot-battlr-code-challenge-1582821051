import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";
import YourBotArmy from "./containers/YourBotArmy";


const BASE_URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots';
class App extends Component {

  constructor(){
    super()
    this.state = {
      bots: [],
      botArmy: []
    }
  }


  componentDidMount(){
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(data => {
      this.setState({bots: data});
    })
  }

  render() {
    return (
      <div className="App">
        <YourBotArmy botArmy={this.state.botArmy} handleClick={this.handleClick}/>
        <BotsPage bots={this.state.bots} botArmy={this.state.botArmy} handleClick={this.handleClick}/>
        
      </div>
    );
  }

  handleClick = (e) => {
    
    const clickedBot = this.state.bots.find(bot => (bot.id == e.target.parentNode.id));
    
    if (!this.state.botArmy.includes(clickedBot)) {
      this.setState({
        botArmy: [...this.state.botArmy,clickedBot]
      });
      this.setState({bots: this.state.bots.splice(this.state.bots.indexOf(clickedBot,1))})
    } else {
       this.setState({bots: [...this.state.bots,clickedBot]});
       this.setState({botArmy: this.state.botArmy.splice(this.state.botArmy.indexOf(clickedBot),1)})
    }
  }
}

export default App;
