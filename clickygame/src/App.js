import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

const friendsArray = friends[i];

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
      friends: this.shuffleCard(),
      selected: [],
      correct: []
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  shuffleCard = arr => {
    for (let i = arr.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j] = arr[j], arr[i]];
    }
    return arr;
  }

  clickCard = id => {
    const {selected, card, correct } = this.state;

    if (selected.length === 0) {
      this.setState({selected: [id]})
    } else if (sidelected[0] === 1) {
      if (cards[selected[0]] === cards[id]) {
        this.setState({
          correct: correct.concat([selected[0], id]),
          selected: []
        });
      } else {
        this.setState({selected: [selected[0], id] });
        setTimeout(() => {
          this.setState({ selected: [] })
        }, 1500)
      }
    }

  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    const { correct, selected, friends } = this.state;
    return (
      <Wrapper>
        <Title>Can you Remember?</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
