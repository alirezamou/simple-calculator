import React from 'react';
import './button.css';

export default function Button (props) {
  const { name, buttonType, onClick } = props;
    return (
        <div className={'component-button' + ' ' + 'component-button--' + buttonType}>
            <button onClick={() => onClick(name)}>
                {name}
            </button>
        </div>
    );
}
