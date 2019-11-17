import React from 'react';
import {Switch, Link,Route} from 'react-router-dom'
import Products from './Components/Products'
import CreateProduct from './Components/CreateProduct'

const Router = () => {
    return (

   <> 
    <Switch>
        <Route exact path="/" component={null} />
        <Route exact path="/products" component={Products} />
        <Route path="/create" component={CreateProduct} />
    </Switch>

       
    </>
    
    )

}

export default Router