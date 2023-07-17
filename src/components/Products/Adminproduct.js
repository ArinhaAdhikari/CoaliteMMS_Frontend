import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/Context";
import "./Products.css";
import { Link } from "react-router-dom";
const Adminproduct = () => {
  const [products, setproducts] = useState([]);
  const [loaded, setloaded] = useState(false);
  const [quant, setquant] = useState(0);
  const { login, setlogin } = useContext(UserContext);
  const [update, setupdate] = useState(false);
  const [placeholder,setplaceholder]=useState("Enter Quantity")
  console.log(login);
  useEffect(() => {
    axios.get("http://localhost:8083/products/getproducts").then((res) => {
      console.log(res);
      setproducts(res.data);
      setloaded(true);
    });
  }, [update]);
  console.log(products);

  const changeHandler = (evt) => {
    setquant(evt.target.value);
  };

  if (loaded) {
    return (
      <div style={{ minHeight: "70vh", margin: "2% 10%" }}>
        {" "}
        <Link to="/addproduct" className="addproddiv">
          <div style={{marginBottom:"2%"}}>Add New Product</div>
        </Link>
        <table class="table">
          <thead style={{ fontSize: "20px", color: "green" }}>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Department</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr style={{ fontSize: "16px", color: "grey" }}>
                  <td scope="row">{product.productId}</td>
                  <td>{product.productDept}</td>
                  <td>{product.productName}</td>
                  <td>{product.productQuantity}</td>
                  {/* <td>{product.productQuantity}</td> */}
                  <td>
                    <input
                      type="number"
                      placeholder={placeholder}
                      name="quant"
                      onChange={changeHandler}
                    />
                    <button
                      type="submit"
                      className="btn btn-outline-primary btn-lg"
                      style={{marginLeft:"1%"}}
                      onClick={() => {
                        const updatedata = {
                          productName: product.productName,
                          productDept: product.productDept,
                          productQuantity: quant,
                        };
                        axios
                          .put(
                            `http://localhost:8083/products/products/${product.productId}`,
                            updatedata
                          )
                          .then((res) => {
                            setupdate(!update);
                            setquant(0);
                            setplaceholder(placeholder);
                          }).catch((errs)=>{
                            alert("Enter valid Quantity");
                            setplaceholder(placeholder);
                            setquant(0);
                          });
                      }}
                    >
                     Update Quantity
                    </button>
                  </td>

                  <td>
                    <button
                      className="btn btn-outline-danger btn-lg"
                      onClick={() => {
                        axios
                          .delete(
                            `http://localhost:8083/products/products/${product.productId}`
                          )
                          .then((res) => {
                            alert("Item deleted Successfully");
                            setupdate(!update);
                          });
                      }}
                    >
                      Delete
                    </button>
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

export default Adminproduct;
