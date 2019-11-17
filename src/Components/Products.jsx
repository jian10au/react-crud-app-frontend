import React from 'react';
import {Link} from 'react-router-dom'
class Products extends React.Component {

    constructor(){
        super();
    }

    render() {
        return(
            <>
            <h1>This is Products</h1>
            <Link to="/">Home</Link>
        </>
        )
    }

}



export default Products