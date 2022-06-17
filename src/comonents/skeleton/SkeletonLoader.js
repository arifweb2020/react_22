import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonLoader({ width, height }) {
    return (
        <SkeletonTheme highlightColor="#e8ffd1">
            <Skeleton style={{ width: width, height: height }} />
        </SkeletonTheme>
    );
}

export default SkeletonLoader;