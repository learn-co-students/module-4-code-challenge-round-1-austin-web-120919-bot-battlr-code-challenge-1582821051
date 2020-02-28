import React from "react";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      currentBot: undefined
    };
  }

  render() {
    return (
      <div>
        {this.state.currentBot ? (
          <BotSpecs
            bot={this.state.currentBot}
            handleEnlist={() => {
              this.props.handleEnlist(this.state.currentBot);
              this.setState({ currentBot: undefined });
            }}
            handleBack={this.clearDetail}
          />
        ) : (
          <BotCollection
            bots={this.props.bots}
            handleClick={(bot) => this.setState({currentBot: bot })}
            key={Math.random()}
            botArmy={this.props.botArmy}
          />
        )}
      </div>
    );
  }

  clearDetail = () =>
    this.setState({
      currentBot: undefined
    });
}

export default BotsPage;
