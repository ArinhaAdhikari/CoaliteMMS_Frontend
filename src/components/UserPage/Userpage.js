import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/Context';
import { Link } from 'react-router-dom';
const Userpage = () => {

  const [userdata, setuserdata] = useState([]);
  const [loaded, setloaded] = useState(false);
  const {login,setlogin}=useContext(UserContext);
  const [update,setupdate]=useState(false);
  console.log(login);
  useEffect(() => {
    axios.get("http://localhost:8083/user/user").then((res) => {
      console.log(res);
      setuserdata(res.data);
      setloaded(true);
    })

  }, [update])

  if (loaded) {
    return (
      <div style={{minHeight:"65vh"}}><h2 style={{textAlign:"center",margin:"3% 0%"}}>User Details</h2>
        <table class="table">
          <thead style={{fontSize:"20px",color:"green"}}>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">email</th>
              <th scope="col">Name</th>
              <th scope="col">Requisitions</th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((user) => {
              return (
                <tr style={{fontSize:"16px",color:"grey"}}>
                  <td scope="row">{user.userId}</td>
                  <td>{user.email}</td>
                  <td>{user.name}</td>
                  {/* <td>{product.productQuantity}</td> */}
                  <td><Link to={`/requisitions/${user.userId}`} className='btn btn-primary' >See Requisitions</Link></td>

                  <td><button className='btn btn-danger' onClick={()=>{
                    axios.delete(`http://localhost:8083/user/user/${user.userId}`).then((res)=>{
                        setupdate(!update);
                        alert("User deleted ")
                    })
                  }} >Delete User</button></td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    )
  }
}

export default Userpage;