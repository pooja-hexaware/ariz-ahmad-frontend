import React, { useState } from 'react'
import { styled } from '@mui/system'
import { AddToCartButton, SimpleCard } from 'components'
import Toppingcard from './Toppings'
import {Avatar} from '@mui/material'
import {List} from '@mui/material'
import {FormControl} from '@mui/material'
import {Select} from '@mui/material'
import {InputLabel} from '@mui/material'
import {ListItemAvatar} from '@mui/material'
import {OutlinedInput} from '@mui/material'
import {Tab} from '@mui/material'
import {
    Box,
    Grid,
    Stack,
    Chip,
    Divider,
    Modal,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    FormGroup,
    FormControlLabel,
    Checkbox,
} from '@mui/material'
import { useEffect } from 'react'
import axios from 'axios'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import {
    Paper,
    MenuList,
    MenuItem,
    ListItemText,
    Icon,
    CardContent,
    Typography,
    Card,
} from '@mui/material'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
}

const Menuitems = () => {
    const [menuitems, setMenuitems] = useState([])
    const [topping, setToppings] = useState([])
    const [selectedToppings, setSelectedToppings] = useState([])
    const [quantity, setQuantity] = useState('');
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const QuantityHandler=(event)=>{
        setQuantity(event.target.value);
    }
    useEffect(() => {
        axios.get('http://localhost:4000/storemenu').then((response) => {
            setMenuitems(response.data)
        }, [])
    })

    const handleToppings = () => {
        axios.get('http://localhost:4000/topping/').then((response) => {
            setToppings(response.data)
        }, [])
        handleOpen()
    }
    const handleChange = (event) => {
        //event.preventDefault();
        const {
          target: { value },
        } = event;
        console.log(value);
        setSelectedToppings(
          typeof value === 'string' ? value.split(',') : value,
        );
      };

    const addToCart = (name,price,quantity) => {
        console.log(name+""+price+""+quantity);
    }

    return (
        <>
            <Container>
                <SimpleCard>
                    <div>
                        <object align="right">
                            <AddToCartButton {...{ amount: 0 }} />
                        </object>
                        <h1>WiWi Food Stores</h1>
                    </div>
                </SimpleCard>
                <br></br>

                <Card
                    style={{
                        width: 650,
                        height: 120,
                        backgroundColor: '#7e00ff',
                        margin: '30px 310px 20px 20px',
                        marginLeft: '200px',
                        padding: '10px 20px 10px 10px',
                        textAlign: 'center',
                    }}
                    textA
                >
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ color: 'white' }}
                    >
                        Good Food, Great Time
                    </Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ color: 'white' }}
                    >
                        Our chefs at WiWi make delicious food selections every
                        week - you pick, we cook and deliver.
                    </Typography>
                </Card>

                {menuitems.map((i) => {
                    // {console.log("test",menuitems)}
                    return (
                        <Box
                            sx={{
                                width: '100%',
                                maxWidth: 1000,
                                bgcolor: 'background.paper',
                                padding: '10px 20px 10px 10px',
                                marginLeft: '20px',
                            }}
                        >
                            <Grid container alignItems="center">
                                <Grid item xs>
                                    <Typography variant="h5">
                                        {i.itemname}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h6">
                                        Amount {'  '}
                                        <TextField
                                            variant="outlined"
                                            size="small"
                                            sx={{ width: '100px' }}
                                            type={'number'}
                                            onChange={QuantityHandler}
                                        />
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs>
                                <Typography
                                    color="text.secondary"
                                    variant="body2"
                                >
                                    <i>{i.desc}</i>
                                </Typography>
                                <section
                                    style={{
                                        display: 'flex',
                                        width: '100%',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Typography variant="h6">
                                        ${i.price} {'  '}
                                        <Button
                                            variant="contained"
                                            onClick={handleToppings}
                                            size="small"
                                        >
                                            <Icon>add</Icon>toppings
                                        </Button>
                                        <Dialog
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                        >
                                            <DialogTitle id="alert-dialog-title">
                                                {'Add Toppings'}
                                            </DialogTitle>
                                            <DialogContent>
                                                <List sx={{ pt: 0 }}>
                                                    <FormControl
                                                        variant="standard"
                                                        sx={{
                                                            m: 1,
                                                            minWidth: 120,
                                                        }}
                                                    >
                                                        <InputLabel>
                                                            Select the Toppings
                                                        </InputLabel>
                                                        <Select
                                                            multiple
                                                            value={
                                                                selectedToppings
                                                            }
                                                            onChange={
                                                                handleChange
                                                            }
                                                            input={
                                                                <OutlinedInput label="Tag" />
                                                            }
                                                        >
                                                            {topping.map(
                                                                (m, i) => (
                                                                    <MenuItem
                                                                        key={i}
                                                                        value={{
                                                                            name: m.tname,
                                                                            price: parseFloat(
                                                                                m.tprice
                                                                            ),
                                                                        }}
                                                                    >
                                                                        <Checkbox />
                                                                        <ListItemAvatar>
                                                                            <Avatar
                                                                                src={
                                                                                    m.toppingimage
                                                                                }
                                                                            ></Avatar>
                                                                        </ListItemAvatar>
                                                                        <ListItemText
                                                                            primary={
                                                                                m.tname
                                                                            }
                                                                        />
                                                                        <ListItemText
                                                                            primary={
                                                                                m.tprice
                                                                            }
                                                                        />
                                                                    </MenuItem>
                                                                )
                                                            )}
                                                        </Select>
                                                    </FormControl>
                                                    <Tab />
                                                    <Button
                                                        variant="contained"
                                                        color="success"
                                                        onClick={handleClose}
                                                    >
                                                        Done
                                                    </Button>
                                                </List>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClose}>
                                                    Close
                                                </Button>
                                                <Button
                                                    onClick={handleClose}
                                                    autoFocus
                                                >
                                                    Add
                                                </Button>
                                            </DialogActions>
                                        </Dialog>
                                        {/* <Modal
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>
                                                <Typography
                                                    id="modal-modal-title"
                                                    variant="h6"
                                                    component="h2"
                                                >
                                                    {i.topping}
                                                </Typography>
                                                <Divider variant="middle" />
                                            </Box>
                                        </Modal> */}
                                    </Typography>
                                    <Button variant="contained" size="small" onClick={()=>{addToCart(i.itemname,i.price,quantity)}}>
                                        <Icon>add</Icon>Add
                                    </Button>
                                </section>
                            </Grid>

                            <br />
                            <Divider variant="middle" />
                        </Box>
                    )
                })}
            </Container>
        </>
    )
}

export default Menuitems
