/**
 * Spin Loader
 * Author: Arif
 */
import React from 'react';
import './style.scss'

function SpinLoader(props) {
    return (
        <div className='spinLoader'>
            <div className='spinner-border circle' role='status'>
                <span className='sr-only' >Loading...</span>
            </div>
        </div>
    );
}

export default SpinLoader;