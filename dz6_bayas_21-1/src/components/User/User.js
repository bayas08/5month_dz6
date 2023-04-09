import React, {useState} from 'react'
import {createUser} from '../../redux/action'
import {useDispatch, useSelector} from "react-redux";
import {Button, TextField} from "@mui/material";

const User = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');

    const {message} = useSelector(state => state.userReducer)


    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { name, username, email, website };
        dispatch(createUser(user))
        setName('')
        setUsername('')
        setEmail('')
        setWebsite('')
    };

    return <>
        <form onSubmit={handleSubmit}>
            <div className='pole'>
                <label>Name:</label>
                <TextField variant="outlined" required type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='pole'>
                <label>Username:</label>
                <TextField variant="outlined" required type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className='pole'>
                <label>Email:</label>
                <TextField variant="outlined" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='pole'>
                <label>Website:</label>
                <TextField variant="outlined" required type="text" value={website} onChange={(e) => setWebsite(e.target.value)} />
            </div >
            <div className='pole'>
            <Button
                type="submit"
                variant='contained'>Create User</Button>
            </div>
        </form>
        <div>
            {
                message === 'successfully!'
                &&
                <h2 style={{color: 'green'}}>User created</h2>
            }
        </div>
    </>
};

export default User;