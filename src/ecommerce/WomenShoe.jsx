import React from "react";
import Grid from '@material-ui/core/Grid';
import Product from './products/product/Product';

const products= [
    {id:1, name: 'Brooks', description:'Running Shoes', price:'$140', image:"https://www.brooksrunning.com/dw/image/v2/BGPF_PRD/on/demandware.static/-/Sites-brooks-master-catalog/default/dw0b0b9e50/original/110366/110366-435-l-adrenaline-gts-22-mens-cushion-running-shoe.png?sw=1388&sh=868&sm=cut"},
    {id:2, name: 'Hoka', description:'Running Shoes', price:'$150', image:"https://cdn.runningshoesguru.com/wp-content/uploads/2021/05/Hoka-One-One-Clifton-8-Lateral-Side1.jpg"},
];
const WomenShoe = () => {
    
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
export default WomenShoe;
