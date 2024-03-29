import React from "react";
import Grid from '@material-ui/core/Grid';
import Product from './products/product/Product';
import useStyles from './shoestyles'



const MenShoe = ({ products, onAddToCart }) => {
    const classes=useStyles();
    return (
        
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <h1>Shop Online!</h1>

            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
export default MenShoe;

