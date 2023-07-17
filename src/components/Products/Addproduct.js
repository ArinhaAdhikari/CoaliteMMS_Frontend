import { useState } from 'react';
import './Addproduct.css';
import { useContext } from 'react';
import { UserContext } from '../Context/Context';
import axios from 'axios';
const Addproduct = () => {

    const [product, setproduct] = useState({});
    const {login,setlogin}=useContext(UserContext);
  
    const handleChange=(evt)=>{
      const value=evt.target.value;
      setproduct({
        ...product,
        [evt.target.name]:value,
      })
    }

    const formHandler=(e)=>{
        e.preventDefault();
        console.log("hello");
        axios.post("http://localhost:8083/products/postproducts",product).then((res)=>{
          alert("item successfully added")
        }).catch(errors=>{
          console.log(errors);
        })
      }

if(login.role===1){
  return (
    <div className="addproductform" style={{minHeight:"55vh"}}>
      <form onSubmit={formHandler}>
       
        <div class="form-group mb-3">
          <input style={{height:"40px" , fontSize:"14px"}}
            type="text"
            class="form-control"
            name="productName"
            placeholder="Product Name"
            onChange={handleChange}
          />
        </div>

        <div  class="form-group mb-3 ">
          <input style={{height:"40px" , fontSize:"14px"}}
            type="text"
            name="productDept"
            class="form-control"
            placeholder="Product Department"
            onChange={handleChange}
          />
        </div>
        <div class="form-group mb-3">
          <input style={{height:"40px" , fontSize:"14px"}}
            type="number"
            name="productQuantity"
            class="form-control"
            placeholder="Enter Quantity"
            onChange={handleChange}
          />
        </div>
        <button type="submit" style={{height:"40px" , fontSize:"14px"}} class="btn btn-success">
          Add Product
        </button>
      </form>
    </div>
  );
};
}
export default Addproduct;