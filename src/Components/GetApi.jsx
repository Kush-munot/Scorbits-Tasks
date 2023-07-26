import { Box } from '@mui/material';
import axios from 'axios';
import React, { useState, useEffect } from 'react'

const GetApi = () => {
    const [data, setData] = useState([]);

    const getData = async () => {
        try {
            const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
            setData(res.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <Box sx={{textAlign:'left', paddingLeft:20}}>
            <h1>Todos Data</h1>
            {data.length > 0 ? (
                data.map((todo) => (
                    <div>                        
                        <h4>{todo.title}</h4>
                    </div>
                ))
            ) : (
                <h3 colSpan={7}>No Todos</h3>
            )}
        </Box>
    )
}

export default GetApi;