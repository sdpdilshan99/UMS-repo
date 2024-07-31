import { useEffect, useState } from "react";
import Userform from "./Pages/Userform";
import Userstable from "./Pages/Userstable";
import Axios from "axios";
import { Box } from "@mui/material";


const Users = () => {

    const [users, setUsers] = useState([]);
    const [submitted, setSubmitted] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedUser, setSelectedUser] = useState({})

    useEffect( () => {
        getUsers();
    }, []);

    const getUsers = () => {
        Axios.get('http://127.0.0.1:3001/api/users')
            .then(response => {
                console.log(response.data.response);
                setUsers(response.data.response || []);
            })
            .catch(error => {
                console.error("Axios Error: ",error);
            })
    }

    const addUser = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
        }

        Axios.post('http://127.0.0.1:3001/api/createuser', payload)
            .then( () => {
                getUsers();
                setSubmitted(false);
                setIsEdit(false);
            })
            .catch(error => {
                console.error("Axios Error: ",error);
            })
    }

    const updateUser = (data) => {
        setSubmitted(true);

        const payload = {
            id: data.id,
            name: data.name,
        }

        Axios.post('http://127.0.0.1:3001/api/updateuser', payload)
            .then( () => {
                getUsers();
                setSubmitted(false);
                setIsEdit(false);
            })
            .catch(error => {
                console.error("Axios Error: ",error);
            })
    }

    const deleteUser = (data) => {
        
    Axios.post('http://127.0.0.1:3001/api/deleteUser', data)
            .then( () => {
                getUsers();
            })
            .catch(error => {
                console.error("Axios Error: ",error);
            })
    }

    return(
        <Box>
            <Userform
                addUser = {addUser}
                updateUser = {updateUser}
                submitted = {submitted}
                selectedUserData = {selectedUser}
                isEdit = {isEdit}
            />
            <Userstable
                rows={users} 
                selectedUser = {data => {
                    setSelectedUser(data);
                    setIsEdit(true);
                }}
                deleteUser = {data => window.confirm('Are you sure?') && deleteUser(data)}
            />
        </Box>
        
    );
}

export default Users;