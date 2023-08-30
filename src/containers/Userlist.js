import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsersList } from "../redux/actions/productsActions";
import axios from "axios";
import UsersCard from './UsersCard'
export default function Userlist() {
  const users = useSelector((state) => state.allUsers.users);
  const dispatch = useDispatch();
  const fetchUsers = async () => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .catch((err) => {
        console.log("Err: ", err);
      });
    console.log("Following is response ===>", response);
    dispatch(setUsersList(response.data));
  };

  useEffect(() => {
    console.log("hello");
    fetchUsers();
  }, []);
console.log( "Users => " ,  users)
  return (
    <div className="ui grid container">
      <h1 className="heading-custom" >List of Users</h1>
      <UsersCard/>
    </div>
  );
}
