import { Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';




const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://morning-beach-86130.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])






    return (
        <Box sx={{ flexGrow: 1, mb: 5 }}>
            <Container>
                <Typography variant="h4" component="div" style={{ paddingTop: '60px', paddingBottom: '20px' }} sx={{ textAlign: 'center', fontWeight: '700', color: '#454545', m: 2 }}>
                    OUR PRODUCTS
                </Typography>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        products.slice(0, 6).map(product => <Product
                            key={product.name}
                            product={product}

                        ></Product>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;