import React from 'react'

const SideBar = ({ users }) => (
  <aside id='sidebar'>
    <ul>
       {users.map(user => (
         <li key={user.id}> {user.username}</li>
       ))}
    </ul>
  </aside>
)

export default SideBar