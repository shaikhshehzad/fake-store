import React , { useEffect  }  from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'
import { selectUser , removeSelectedUser } from '../redux/actions/productsActions';
import { useDispatch, useSelector } from "react-redux";

export default function UserDetails() {
  const { params } = useParams();
  const queryParams = new URLSearchParams(params);
  const paramsObj = {};
  const dispatch = useDispatch();
  let user = useSelector((state)=> state.user)

  const { username } = user ;
    
  for (let param of queryParams.entries()) {
    const [key, value] = param;
    paramsObj[key] = value;
  }
  const getDetails = async () =>{
    console.log("get details ",paramsObj.id !=='' )
    if(paramsObj.id !=='' ){
      const response = await axios
      .get(`https://jsonplaceholder.typicode.com/users/${paramsObj.id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    console.log(response)
    dispatch(selectUser(response.data));
    }else{
      console.log("id dosen't exist")
    }
  }
  useEffect(()=>{
    console.log("use effect")
    dispatch(removeSelectedUser());
    getDetails()
  },[paramsObj.id])

  return (
    <div className="ui grid container" >
      
      
    
      <h1>{username}</h1>
      
      
      </div>
  )
}
