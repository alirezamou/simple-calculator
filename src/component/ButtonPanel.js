import React from 'react';
import Button from './button';
import './buttonpanel.css';

export default function ButtonPanel (props) {

  const { onClick } = props;

    return (
        <div className='component-button-panel'>
            <React.Fragment>
                <Button onClick={onClick} name="AC" buttonType="primary" />
                <Button onClick={onClick} name="+/-" buttonType="primary" />
                <Button onClick={onClick} name="%" buttonType="primary" />
                <Button onClick={onClick} name="÷" buttonType="secondary" />
            </React.Fragment>
            <React.Fragment>
                <Button onClick={onClick} name="7" buttonType="primary"/>
                <Button onClick={onClick} name="8" buttonType="primary"/>
                <Button onClick={onClick} name="9" buttonType="primary"/>
                <Button onClick={onClick} name="x" buttonType="secondary"/>
            </React.Fragment>
            <React.Fragment>
                <Button onClick={onClick} name="4" buttonType="primary"/>
                <Button onClick={onClick} name="5" buttonType="primary"/>
                <Button onClick={onClick} name="6" buttonType="primary"/>
                <Button onClick={onClick} name="-" buttonType="secondary"/>
            </React.Fragment>
            <React.Fragment>
                <Button onClick={onClick} name="1" buttonType="primary" />
                <Button onClick={onClick} name="2" buttonType="primary" />
                <Button onClick={onClick} name="3" buttonType="primary" />
                <Button onClick={onClick} name="+" buttonType="secondary" />
            </React.Fragment>
            <React.Fragment>
                <Button onClick={onClick} name="0" buttonType="primary" />
                <Button onClick={onClick} name="." buttonType="primary" />
                <Button onClick={onClick} name="=" buttonType="secondary" />
            </React.Fragment>
        </div>
    );
}
