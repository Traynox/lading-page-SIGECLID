import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useSelector } from 'react-redux'

export default function Review() {
    const { producto } = useSelector((state) => state.cesta);
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Pedido
            </Typography>
            <List disablePadding>
                {producto.map((product) => (
                    <ListItem key={product.nombre} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={product.nombre} />
                        <Typography variant="body2">₡ {product.precio}</Typography>
                    </ListItem>
                ))}
                {producto.map((product) => (
                    <ListItem key={product.nombre} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary="Total" />
                        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        ₡ {product.precio}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </React.Fragment>
    );
}