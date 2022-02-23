import {React} from 'react';

import Button from './button';
import './buttonpanel.css';

export default function ButtonPanel () {

    return (
        <div className='component-button-panel'>
            <>
                <Button name="AC" buttonType="primary" />
                <Button name="+/-" buttonType="primary" />
                <Button name="%" buttonType="primary" />
                <Button name="÷" buttonType="secondary" />
            </>
            <>
                <Button name="7" buttonType="primary"/>
                <Button name="8" buttonType="primary"/>
                <Button name="9" buttonType="primary"/>
                <Button name="x" buttonType="secondary"/>
            </>
            <>
                <Button name="4" buttonType="primary"/>
                <Button name="5" buttonType="primary"/>
                <Button name="6" buttonType="primary"/>
                <Button name="-" buttonType="secondary"/>
            </>
            <>
                <Button name="1" buttonType="primary" />
                <Button name="2" buttonType="primary" />
                <Button name="3" buttonType="primary" />
                <Button name="+" buttonType="secondary" />
            </>
            <>
                <Button name="0" buttonType="primary" />
                <Button name="." buttonType="primary" />
                <Button name="=" buttonType="secondary" />
            </>
        </div>
    );
}