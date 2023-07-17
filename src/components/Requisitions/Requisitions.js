import React from "react";
import "./Requisitions.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/Context";
import { useParams } from "react-router-dom";

const Requisitions = () => {
  const [requisitions, setrequisitions] = useState([]);
  const [loaded, setloaded] = useState(false);
  const { login, setlogin } = useContext(UserContext);
  console.log(login);
  const myid=useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8083/products/requisitions/user/${myid.userid}`)
      .then((res) => {
        console.log(res);
        setrequisitions(res.data);
        setloaded(true);
      });
    console.log("hello");
    console.log(requisitions);
  }, []);

  console.log(requisitions);

  if (loaded) {
    if(requisitions.length===0)
    {
      return(
        <h1 style={{textAlign:"Center", color:"blue",margin:"5%",minHeight:"55vh"}}>No Requisition from this user is made</h1>
      )
    }
    return (
      <div style={{minHeight:"65vh", margin:"3% 10%"}}>
        <table class="table">
          <thead style={{fontSize:"20px",color:"red"}}>
            <tr>
              <th scope="col">Requisition Id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {requisitions.map((requisition) => {
              return (
                <tr style={{fontSize:"16px",color:"grey"}}>
                  <td scope="row">{requisition.requisitionId}</td>
                  <td>{requisition.product.productName}</td>
                  <td>{requisition.requisitionQuantity}</td>

                  <td>
                    {requisition.status === null ? (
                      <button className="btn btn-warning" disabled>
                        Pending
                      </button>
                    ) : (
                      <div>
                        {requisition.status === "APPROVED" ? (
                          <button className="btn btn-success" disabled>
                            APPROVED
                          </button>
                        ) : (
                          <button className="btn btn-danger" disabled>
                            DECLINED
                          </button>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
};

export default Requisitions;
