import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function UsersCard() {
  const users = useSelector((state) => state.allUsers);
  const usersArray = Object.values(users) ;
  console.log(users)
  console.log(usersArray)


  return <>

<ul>
      {usersArray.map(user => (
     
     user.name &&  
      <li key={user.name}>{user.name}
       <Link to={`/userdetails/id=${user.id}`} >
      <p  className='padding-left' >see details</p>
      </Link>
        </li>
      ))}
    </ul>
  
  
  </>;
};
