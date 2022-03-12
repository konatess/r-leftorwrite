import React from 'react';
import icons from '../constants/icons';
import strings from '../constants/strings';

export default function Intro (props) {
    return <div className='mainpage'>
        <span id='introblurb'>{strings.introPage.blurb}</span>
        <div className='innerpage'>
            <a className='introbtn' href={strings.fRoutes.read} >
                {icons.curvedarrow({className: "introicon", id: "introarrow"})}
            </a>
            <span id='introchoose'>{strings.introPage.choose}</span>
            <a className='introbtn' href={strings.fRoutes.dashboard} >
                {icons.feather({className: "introicon", id: "introfeather"})}
            </a>
        </div>
    </div>
}