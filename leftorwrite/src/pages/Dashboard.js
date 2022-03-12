import { useState } from 'react';
import icons from '../constants/icons';
import strings from '../constants/strings';
import TabBar from '../components/TabBar';

export default function Dashboard (props) {
    const [activeTab, setActiveTab] = useState(strings.tabs.writeAll[0].id);

    return <div className='mainpage'>
        <TabBar tabs={strings.tabs.writeAll} onChange={setActiveTab} />
        <div className='innerpage'>
            <p>{activeTab}</p>
        </div>
    </div>
}