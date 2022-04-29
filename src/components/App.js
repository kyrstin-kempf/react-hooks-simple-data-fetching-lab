import React, { useState, useEffect } from 'react';

function App() {
    const [dogImages, setDogImages] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((image) => {
            setDogImages(image.message);
            setIsLoaded(true);
        });
    }, []);

    if(!isLoaded) return <p>Loading...</p>;

    return <img src={dogImages} alt='A Random Dog'/>
}

export default App;