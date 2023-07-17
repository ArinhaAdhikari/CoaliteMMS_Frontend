import React from "react";
import "./Requisitions.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/Context";
import { Link } from "react-router-dom";

const ReviewRequisitions = () => {
  const [requisitions, setrequisitions] = useState([]);
  const [loaded, setloaded] = useState(false);
  const [change, setchange] = useState(false);
  const { login, setlogin } = useContext(UserContext);
  console.log(login);

  useEffect(() => {
    axios.get("http://localhost:8083/products/requisitions").then((res) => {
      console.log(res);
      setrequisitions(res.data);
      setloaded(true);
    });
  }, [change]);

  let btnclass = "";

  console.log(requisitions);

  if (loaded === true) {
    return (
      <div style={{minHeight:"65vh", margin:"5% 10%"}}>
        <table class="table">
          <thead style={{fontSize:"20px",color:"green"}}>
            <tr>
              <th scope="col">Requisition Id</th>
              <th scope="col">Requested By</th>
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {requisitions.map((requisition) => {
              {
                requisition.status === null
                  ? (btnclass = "btn btn-warning")
                  : requisition.status === "APPROVED"
                  ? (btnclass = "btn btn-success")
                  : (btnclass = "btn btn-danger");
              }
              console.log(requisition.user.name);
              return (
                <tr  style={{fontSize:"16px",color:"grey"}}>
                  <td scope="row">{requisition.requisitionId}</td>
                  <td>{requisition.user.name}</td>
                  <td>{requisition.product.productName}</td>
                  <td>{requisition.requisitionQuantity}</td>
                  <td>
                    {requisition.status === null ? (
                      <button className={btnclass} disabled>
                        Pending
                      </button>
                    ) : (
                      <button className={btnclass} disabled>
                        {requisition.status}
                      </button>
                    )}
                  </td>

                  <td>
                    {requisition.status === null ? (
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          axios
                            .get(
                              `http://localhost:8083/products/admin/requisitions/approve/${requisition.requisitionId}`
                            )
                            .then((res) => {
                              console.log(res);
                              setchange(!change);
                            })
                            .catch((res) => {
                              alert("double check the quantity please.");
                            });
                        }}
                      >
                        Approve
                      </button>
                    ) : (
                      <div></div>
                    )}
                  </td>
                  <td>
                    {requisition.status === null ? (
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          axios
                            .get(
                              `http://localhost:8083/products/admin/requisitions/decline/${requisition.requisitionId}`
                            )
                            .then((res) => {
                              console.log(res);
                              setchange(!change);
                            });
                        }}
                      >
                        Decline
                      </button>
                    ) : (
                      <div></div>
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

export default ReviewRequisitions;
