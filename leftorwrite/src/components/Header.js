import './Header.css'
import React from 'react';
import icons from '../constants/icons';

export default function Header (props) {
    return <header>
        <div className='headerbtn'>
            <button>
                {icons.feather({className: '', id: 'headerfeather'})}
            </button>
        </div>
        <div>
            <h1>{props.pagename}</h1>
        </div>
        <div className='headerbtn'>
            <span id="loginmsg">{props.message}</span>
            <a id="loginbtn" href={props.uri + props.path}>{props.btn}</a>
        </div>
    </header>
}