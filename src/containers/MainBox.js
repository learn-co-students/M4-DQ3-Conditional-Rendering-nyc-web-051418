import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(props) {
    super(props)
    this.state={
      menuChoice: "Profile",
    }
  }

  getMenuChoice = (event) => {
    this.setState({
      menuChoice: event.target.id
    })
  }

  detailsToDisplay = () => {

    if(this.state.menuChoice === "profile") {
      return <Profile />
    }
    else if(this.state.menuChoice === "photo") {
      return <Photos />
    }
    else if(this.state.menuChoice === "cocktail") {
      return <Cocktails />
    }
    else if(this.state.menuChoice === "pokemon") {
      return <Pokemon />
    }
  }

  render() {

    return (
      <div>
        <MenuBar getMenuChoice={this.getMenuChoice} />
        {this.detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
