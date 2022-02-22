import React from 'react';
import './button.css';

export default function Button (props) {
    return (
        <div className='component-button component-button--primary'>
            <button>
                {props.name}
            </button>
        </div>
    );
}