import React, { useState } from 'react';
import './element.css'
import { Box } from '@mui/material';

const Demo = () => {
    //To use map we will need an array of objects hence creating the same in the state
    const [tiles, setTiles] = useState([
        { id: 1, size: 'large', color: 'black' },
        { id: 2, size: 'small', color: 'white' },
        { id: 3, size: 'small', color: 'black' },
        { id: 4, size: 'small', color: 'white' },
        { id: 5, size: 'small', color: 'black' },
        { id: 6, size: 'small', color: 'white' },
        { id: 7, size: 'small', color: 'black' },
        { id: 8, size: 'small', color: 'white' },
    ]);

    const handleTileClick = (id) => {
        setTiles((prevTiles) => {
            const updatedTiles = prevTiles.map((tile) => {      //Using map method to update the set of clicked tiles
                if (tile.id === id) {
                    return { ...tile, size: 'large' };          //If the id matches, we create a new tile object using the spread operator ({ ...tile }) and set its size property to 'large'.
                } else {
                    return { ...tile, size: 'small' };          //If the id does not matches, we create a new tile object using the spread operator ({ ...tile }) and set its size property to 'small'.
                }
            });

            return updatedTiles;        //returning updated tiles and updated the state variable
        });
    };

    return (
        <Box sx={{ backgroundColor: "yellow", height: '82vh' }}>
            <Box sx={{ paddingTop: '60vh' }}>
                {tiles.map((tile) => (
                    <Box
                        key={tile.id}
                        onClick={() => handleTileClick(tile.id)}    //Passing the tile id to increase its size
                        className={`tile ${tile.size}`}
                        style={{ backgroundColor: tile.color }}
                    >

                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default Demo;
