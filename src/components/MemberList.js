import React from 'react';
import Member from './Member'

const MemberList = (props) => {
    let newMembers
    if (props.members.length > 0) {
      newMembers = props.members.map((member, index) => { return <Member key={index} id={index} memberInfo={member} />})
    } else {
      newMembers = null
    }
  return (
    <div>
      {newMembers}
    </div>
  )
}

export default MemberList;