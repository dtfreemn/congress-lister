import React from 'react';
import MemberList from './MemberList'
import Filter from './Filter'
import Search from './Search'
import { Route } from 'react-router-dom'

class CongressContainer extends React.Component {
  
  state = {
    members: [],
    filters: ['All', 'Democrat', 'Republican'],
    currentFilter: 'All',
    currentSearch: null
  }

  componentDidMount() {
    fetch('https://www.govtrack.us/api/v2/role?current=true')
      .then(resp => resp.json())
      .then(membersJSON => {
        this.setState({
          members: membersJSON.objects
        })
      })
  }

  filterInputChange = (event) => {
    const party = event.target.value
    this.setState({
      currentFilter: party
    })
  }

  searchInputChange = (event) => {
    const searchedThing = event.target.value 
    this.setState({
      currentSearch: searchedThing
    })
  }

  filterMembers = () => {
    let members = this.state.currentFilter === 'All' ? this.state.members : this.state.members.filter(member => member.party === this.state.currentFilter)
    if (this.state.currentSearch) {
      members = members.filter(member => {
        let fullName = member.person.firstname + ' ' + member.person.lastname
        return fullName.toLowerCase().startsWith(this.state.currentSearch.toLowerCase())
      })
    }
    return members
  }

  render() {
    return (  
        <div>
          <Route exact path='/members' render={(props) => {
            return (
              <div>
                <Search searchInputChange={this.searchInputChange}/>
                <Filter filters={this.state.filters} filterInputChange={this.filterInputChange}/>
                <MemberList members={this.filterMembers()}/>
              </div>
            )}}/>
          <Route path='/members/:id' render={(props) => {
            const id = parseInt(props.match.params.id)
            let member = [this.filterMembers()[id-1]]
            return <MemberList members={member} />
          }}/>
        </div>
    )
  }
}

export default CongressContainer;