import React, { useEffect, useState } from 'react';

function fetchObject() {
    
    let [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch('https://dry-fortress-59430.herokuapp.com/utilityData')
            .then(response => response.join())
            .then(characters => {
                console.log('The object is ', )
            })
    }, [])
}