import { useState, useEffect } from 'react';
import icons from '../constants/icons';
import IntroPage from './IntroPage';
import ReaderStories from './ReaderStories';
import strings from '../constants/strings';

export default function Container (props) {
    const [dashboard, setDashboard] = useState("");

    useEffect( () => {
        if (!dashboard) {
            setDashboard(strings.container.i)
        }
    })
    
    return <div id='container' >
        {dashboard === strings.container.i && <IntroPage click={setDashboard}/>}
        {/* {dashboard === strings.container.r && <ReaderStories/>} */}
    </div>
}