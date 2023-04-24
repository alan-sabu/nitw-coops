import logo from './logo.svg';
import './App.css';
import {NavBar, CheckoutForms, AddToCartCollection, ProductCardCollection} from "./ui-components";
import {withAuthenticator} from "@aws-amplify/ui-react";
import {DataStore} from "@aws-amplify/datastore";
import {useState} from "react";
import {CartModel,ProductModel} from "./models";

function App(user) {

  const [qty, setQty] = useState("");
  const saveProduct = async () => {
    try{
        await DataStore.save(
          new CartModel({
            product_name: ProductModel?.name,
            product_price: ProductModel?.price,
            product_qty: parseInt(qty),
            product_subtotal: ProductModel?.price*setQty,
            email: user?.attributes?.email,  
          })
        );
    }
    catch (err) {
      console.log(err);
    }
  }
  const addProductOverrides = {
    "TextField": {
      onChange: (event) => {
        setQty(event.target.value);
      }
    },
    "Button":{
      onClick: saveProduct
    }
  }
  
   return (
    <div className="App">
      <NavBar width='100%' />
      <header className="App-header">
       <ProductCardCollection overrides={addProductOverrides} />
       <text>
        {'\n\n\n'}
         Add to Cart
         {'\n'}
       </text>
       <AddToCartCollection />
       <text>
        {'\n\n\n'}
         Check Out Form
         {'\n'}
       </text>
       <CheckoutForms/>
       <text>
        {'\n\n\n\n\n'}
        _
       </text>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
