import { Button, Grid, Input, Typography } from "@mui/material";
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
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom: '30px',
                display: 'block',
            }}
        >
            <Grid item xs={12}>
                <Typography component={'h1'} sx={{ color: '#000000' }}>User Form</Typography>
            </Grid>
            
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography 
                    component={'label'} 
                    htmlFor="id"
                    sx={{
                        color: 'black',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >ID</Typography>
                <Input
                    type="number"
                    id="id"
                    name="id"
                    sx={{ width: '400px' }}
                    value={id}
                    onChange={e => setId(e.target.value)}

                />
            </Grid>

            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography 
                    component={'label'} 
                    htmlFor="id"
                    sx={{
                        color: 'black',
                        marginRight: '20px',
                        fontSize: '16px',
                        width: '100px',
                        display: 'block',
                    }}
                >Name</Typography>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    sx={{ width: '400px' }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </Grid>
            
            <Button
                sx={{
                    color: 'white',
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: 'blue',
                    marginLeft: '15px',
                    marginTop: '20px',
                    ':hover':  {
                        backgroundColor: '#0000ff80',
                        color: 'black',
                         
                    }
                }}
                onClick={ () => isEdit ? updateUser( {id, name} ) : addUser( {id, name} ) }
            >
                {
                    isEdit ? 'Update' : 'Add'
                }
            </Button>
            
        </Grid>

    );
}

export default Userform;