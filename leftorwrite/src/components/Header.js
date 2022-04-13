import './Header.css'
import React from 'react';
import icons from '../constants/icons';

export default function Header (props) {
    return <header>
        <div className='headercol'>
            <a className='headerbtn' id='homebtn' href={props.homeuri}>
                {icons.feather({className: '', id: 'headerfeather'})}
            </a>
        </div>
        <div>
            <h1>{props.pagename}</h1>
        </div>
        <div className='headercol'>
            <span id="loginmsg">{props.message}</span>
            <a className='headerbtn' id="loginbtn" href={props.uri + props.path}>{props.btn}</a>
        </div>
    </header>
}