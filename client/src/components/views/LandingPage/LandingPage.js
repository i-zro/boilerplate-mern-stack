// import { response } from 'express';
import React, { useEffect } from 'react'
import { FaCode } from "react-icons/fa";
import {API_KEY, API_URL} from "../../Config"; //import 해 옴

function LandingPage() {
    // 새로 들어간 코드
    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetch(endpoint)
        .then(response => response.json())
        .then(response => console.log(response))
    }, [])
    
    return (
        <div>
            <div>
                <h2>Movies by latest</h2>
            </div>
        
            <div>
                <button>Load More</button>
            </div>

        </div>
    )
}

export default LandingPage
