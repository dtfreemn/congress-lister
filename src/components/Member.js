import React from 'react';
import { Link } from 'react-router-dom'

class Member extends React.Component {
  
  state = {
    clicked: false
  }

  handleClick = (event) => {
    this.setState ({
      clicked: !this.state.clicked
    })
  }

  render() {
    let person
    if (this.props.memberInfo) {
      person = this.props.memberInfo.person
    } else {
      person = null
    }
    return (
    <div>
      {person ? `${person.firstname} ${person.lastname} - (${this.props.memberInfo.party[0]} - ${this.props.memberInfo.state})` : null}
      <Link to={'/members/' + (this.props.id + 1)}>{person.firstname}'s page</Link>
    </div>
    )
  }
}

export default Member;