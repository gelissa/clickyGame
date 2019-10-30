import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

// const friendsArray = friends[i];

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
      friends,
      selected: [],
      correct: [],
      score: 0,
      topScore: 0
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // shuffleCard = arr => {
  //   for (let i = arr.length - 1; i > 0; i--) {
  //     let j = Math.floor(Math.random() * (i + 1));
  //     // [arr[i], arr[j] = arr[j], arr[i]];
  //     const temp = arr[i];
  //     arr[i] = arr[j];
  //     arr[j] = temp;
  //   }
  //   return arr;
  // }

  shuffleCard = friends => {
    // this.setState({ friends: arr })
    for (let i = this.state.friends.length - 1; i > 0; i--){
        // eslint-disable-next-line
       {let j = Math.floor(Math.random() * (i + 1))}
      // const temp = this.state.friends[i]
      // this.state.friends[i] = this.state.friends[j]
      // arr[j] = temp
      // eslint-disable-next-line
      [(this.state.friends[i], this.state.friends[j])] == [this.state.friends[j], this.state.friends[i]];
    }
    return this.state.friends;
  }

  clickCard = id => {
    const shuffledArray = this.shuffleCard(friends);
    this.setState({cards: shuffledArray});
    if (this.state.selected.includes(id)) {
      this.setState({ score: 0, selected: []})
    } else {
        this.setState({
          selected: this.state.selected.concat([id]),
          score: this.state.score + 1
        });
    }
    
    if (this.state.score > this.state.topScore) {
      this.setState({topScore: this.state.score });
    }
    // const {selected, friends, correct } = this.state;

    // if (selected.length === 0) {
    //   this.setState({selected: [id]})
    // } else if (selected[0] === 1) {
    //   if (friends[selected[0]] === friends[id]) {
    //     this.setState({
    //       correct: correct.concat([selected[0], id]),
    //       selected: []
    //     });
    //   } else {
    //     this.setState({selected: [selected[0], id] });
    //     setTimeout(() => {
    //       this.setState({ selected: [] })
    //     }, 1500)
    //   }
    // }
    // this.shuffleCard();

    // this.setState({ score: this.state.score + 1 });
    // this.shuffleCard();

  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    // const { correct, selected, friends } = this.state;
    return (
      <Wrapper>
        <Title>Can you Remember? score: {this.state.score} </Title>
        {this.state.friends.map(friend => (
          <FriendCard
            // removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            score={this.state.score}
            // occupation={friend.occupation}
            // location={friend.location}
            // isCorrect={correct.includes(i)}
            // isSelected={selected.includes(i)}
            // onSelect={() => this.clickCard(i)}
            clickCard={this.clickCard}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
