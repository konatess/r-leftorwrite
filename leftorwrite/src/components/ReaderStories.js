import { useState } from 'react';
import icons from '../constants/icons';
import strings from '../constants/strings';
import TabBar from './TabBar';

export default function ReaderStories (props) {
    const [tabs, setTabs] = useState([]);
    return <div>
        <TabBar tabs={tabs} />
    </div>
}