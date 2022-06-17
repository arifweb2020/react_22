import React from 'react';
import { useSelector } from 'react-redux';
import SkeletonLoader from '../../comonents/skeleton/SkeletonLoader';

function About(props) {
    const counter = useSelector((state) => state.counter.value)


    return (
        <div style={{maxWidth:"80%",margin:"0 auto"}}>
            <h1>{counter}</h1>
            <SkeletonLoader width="90px" height="100px"/>
        </div>
    );
}

export default About;