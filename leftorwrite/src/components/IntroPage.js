import React from 'react';
import icons from '../constants/icons';
import strings from '../constants/strings';

export default function IntroPage (props) {
    return <div id='intropage'>
        <div className='introbtn' 
            onClick={() => { return props.click(strings.container.r) } }
        >
            {icons.curvedarrow({className: "introicon", id: "introarrow"})}
        </div>
        <div className='introbtn' 
        onClick={() => { return props.click(strings.container.a) } }
        >
            {icons.feather({className: "introicon", id: "introfeather"})}
        </div>
    </div>
}