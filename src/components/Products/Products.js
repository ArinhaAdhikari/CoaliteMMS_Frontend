import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../Context/Context';
import './Products.css'
import { Link } from 'react-router-dom';
const Products = () => {

  const [products, setproducts] = useState([]);
  const [loaded, setloaded] = useState(false);
  const [quant, setquant] = useState(0);
  const { login, setlogin } = useContext(UserContext);
  console.log(login);
  useEffect(() => {
    axios.get("http://localhost:8083/products/getproducts").then((res) => {
      console.log(res);
      setproducts(res.data);
      setloaded(true);
    })

  }, [])
  console.log(products);

  const changeHandler = (evt) => {
    setquant(evt.target.value);
  }

  if (loaded) {
    return (
      <div style={{ minHeight: "70vh", margin: "3% 10%" }}>{login.role === 1 ? <Link to="/addproduct" className="addproddiv"><div>Add New Product</div></Link> : <div></div>}
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
                  {/* <td>{product.productQuantity}</td> */}
                  <td><input type="number" placeholder="enter Quantity" name="quant" onChange={changeHandler} />
                    <button type="submit" className='btn btn-primary' onClick={() => {
                      const requestingdata = {
                        requisitionQuantity: quant
                      }
                      axios.post(`http://localhost:8083/products/requisitions/${product.productId}/user/${login.userId}`, requestingdata).then((res)=>{
                        alert("Requisition addded Succeessfully")
                      }).catch((errs)=>{
                        alert("Quantity not valid");
                      })
                    }}>Request</button></td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    )
  }
}

export default Products