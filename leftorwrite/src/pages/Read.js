import { useState } from 'react';
import strings from '../constants/strings';
import TabBar from '../components/TabBar';

export default function Read (props) {
    const [activeTab, setActiveTab] = useState(strings.tabs.read[0].id);

    return <div className='mainpage'>
        <TabBar tabs={strings.tabs.read} onChange={setActiveTab} />
        <div className='innerpage'>
            <p>{activeTab}</p>
        </div>
    </div>
}