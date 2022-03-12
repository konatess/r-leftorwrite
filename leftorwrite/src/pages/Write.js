import { useState } from 'react';
import icons from '../constants/icons';
import strings from '../constants/strings';
import TabBar from '../components/TabBar';

export default function Read (props) {
    const [tabs, setTabs] = useState([]);
    return <div>
        <TabBar tabs={tabs} />
        <button className='innerpage'>
            <p>Writing page</p>
        </button>
    </div>
}