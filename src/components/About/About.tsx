import React, {useEffect} from "react";
import {useParams} from 'react-router-dom';

const About: React.FunctionComponent = () => {
    const { name } = useParams<{name: string}>();

    return (
        <div>
            <h1>test</h1>
            <h1>{`This is the parameter in the URL: ${name ? name : ""}`} </h1>
        </div>
    )
}

export default About;