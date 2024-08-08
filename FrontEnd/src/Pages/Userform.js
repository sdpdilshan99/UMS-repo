import { Grid, Typography, TextField, Button, Paper } from '@mui/material';

import { useEffect, useState } from "react";

const Userform = ( {addUser, updateUser, submitted, selectedUserData, isEdit} ) => {

    const [id, setId] = useState(0);
    const [name, setName] = useState("");

    useEffect( () => {
        if (!submitted) {
            setId(0);
            setName("");
        }
    }, [submitted]);

    useEffect( () => {
        if (selectedUserData?.id && selectedUserData.id !== 0) {
            setId(selectedUserData.id);
            setName(selectedUserData.name);
        }
    }, [selectedUserData]);

    return(
        <Paper
            sx={{
                padding: 3,
                marginBottom: 4,
                backgroundColor: '#ffffff',
                borderRadius: 3,
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                maxWidth: '600px',
                margin: 'auto',
            }}
        >
            <Typography variant="h5" component="h1" sx={{ color: '#333', marginBottom: 3 }}>
                User Form
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography
                        component="label"
                        htmlFor="id"
                        sx={{
                            display: 'block',
                            color: '#555',
                            marginBottom: 1,
                            fontSize: '14px',
                            fontWeight: 400,
                        }}
                    >
                        ID
                    </Typography>
                    <TextField
                        type="number"
                        id="id"
                        name="id"
                        variant="outlined"
                        fullWidth
                        value={id}
                        onChange={e => setId(e.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                            },
                            '& .MuiInputLabel-root': {
                                color: '#777',
                            },
                        }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography
                        component="label"
                        htmlFor="name"
                        sx={{
                            display: 'block',
                            color: '#555',
                            marginBottom: 1,
                            fontSize: '14px',
                            fontWeight: 400,
                        }}
                    >
                        Name
                    </Typography>
                    <TextField
                        type="text"
                        id="name"
                        name="name"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={e => setName(e.target.value)}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                            },
                            '& .MuiInputLabel-root': {
                                color: '#777',
                            },
                        }}
                    />
                </Grid>

                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => isEdit ? updateUser({ id, name }) : addUser({ id, name })}
                        sx={{
                            color: '#ffffff',
                            padding: '10px 20px',
                            textTransform: 'none',
                            fontSize: '16px',
                            borderRadius: 2,
                            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                            '&:hover': {
                                backgroundColor: '#1976d2',
                                boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)',
                            },
                        }}
                    >
                        {isEdit ? 'Update' : 'Add'}
                    </Button>
                </Grid>
            </Grid>
        </Paper>

    );
}

export default Userform;