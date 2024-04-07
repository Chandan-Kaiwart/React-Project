import React,{useState} from "react";
function Users()
{
  const [users, setUsers] = useState([
    {name:'JOHN',age:23},
    {name:'DON',age:23},
  ])
  return(
  <div>
    <h2>Users</h2>
    <ul>
      {
        users.map((user,index) => {
          return <li>{user.name},{user.age}</li>
        })
      }
    </ul>
  </div>
)
}
export default Users;