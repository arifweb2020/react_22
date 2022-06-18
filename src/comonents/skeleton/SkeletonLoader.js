import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonLoader({ width, height, count, circle }) {
    return (
        <SkeletonTheme highlightColor="#e8ffd1">
            {
                circle ? <Skeleton style={{ width: width, height: height, }} count={count} circle />
                    : <Skeleton style={{ width: width, height: height, }} count={count} />
            }

        </SkeletonTheme>
    );
}

export default SkeletonLoader;