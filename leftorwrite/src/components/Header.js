import './Header.css'
import React from 'react';
import { FaFeatherAlt } from "react-icons/fa";

export default function Header (props) {
    return <header>
        <div className='btndiv'>
            <button>
                <FaFeatherAlt className='feather'/>
            </button>
        </div>
        <div>
            <h1>{props.pagename}</h1>
        </div>
        <div className='btndiv'>
            <p>'You are not logged in.'</p>
            <a href={props.uri + props.path}>{props.message}</a>
        </div>
    </header>
}