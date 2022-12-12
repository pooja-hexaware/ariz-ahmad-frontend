import React from 'react'
import { styled } from '@mui/system'
import { SimpleCard } from 'components'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { useNavigate } from 'react-router-dom'

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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))
const Home = () => {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/menuitems')
    }
    return (
        <>
            <Container>
                <SimpleCard>
                    <div>
                        <h1>Welcome to WiWi Stores</h1>
                    </div>
                </SimpleCard>

                <br></br>
                <Grid container spacing={2}>
                    <Grid xs={6}>
                        <Item>
                            <Card sx={{ maxWidth: 500 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://lh3.googleusercontent.com/6BT3gvPmwwG-rqoEOEINyqXW0OowdBX6YIrb-zBI4T1h71ndCeKenz45lUBalEPuu9VEPe7DQW5kkVsVE-axkqtUHgLEmv7-rfHBQUW6Wg"
                                    alt="starbucks coffee"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Starbucks
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        465
                                        <br></br>
                                        Marina Mall
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={handleClick}>
                                        Order Now
                                    </Button>
                                </CardActions>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid xs={6}>
                        <Item>
                            <Card sx={{ maxWidth: 500 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi4WSqWpZccMmKeaXmEOCQKueeIu0Yc0u9XjQkcux4DIiDvm0vlNVunjotpTs8ZdIWaV4&usqp=CAU"
                                    alt="KFC Store Logo"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        KFC
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        891
                                        <br></br>
                                        Siruseri, Chennai
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={handleClick}>
                                        Order Now
                                    </Button>
                                </CardActions>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid xs={6}>
                        <Item>
                            <Card sx={{ maxWidth: 500 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://play-lh.googleusercontent.com/_lq2HX0YJNDrr0EeUebLAB2JsGbRGyoFY-XOnuUFTPfeEqaHNIyMOGqLx-oq4mUWPpn0"
                                    alt="Dominos Pizza"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Dominos
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        902
                                        <br></br>
                                        Padur
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={handleClick}>
                                        Order Now
                                    </Button>
                                </CardActions>
                            </Card>
                        </Item>
                    </Grid>
                    <Grid xs={6}>
                        <Item>
                            <Card sx={{ maxWidth: 500 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://bakewithshivesh.com/wp-content/uploads/2022/04/186-1864246_pizza-hut-logo-2018-pizza-hut-hd-png.png"
                                    alt="Pizza Hut"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="div"
                                    >
                                        Pizza Hut
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        772
                                        <br></br>
                                        Vivira Mall
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={handleClick}>
                                        Order Now
                                    </Button>
                                </CardActions>
                            </Card>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Home
