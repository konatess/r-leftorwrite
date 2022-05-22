import './StoryBtns.css'
import { useState } from 'react';
import strings from '../constants/strings'

export default function StoryBtns (props) {
    const [warns, setWarns] = useState(props.warns)
    return <div className='warn-list col'>
        <span className='list-heading'>{strings.warnTitle}</span>
        {strings.warnings.map( (warn, index) => {
            return <div className='warn-btn row' >
                <label for={warn.id} className='btn' > 
                    <input type="checkbox" id={warn.id} name='warnings' className='btn' onChange={() => {return props.onChange(warn.id)}}/>
                    <span className='checkcircle' />
                    {warn.name}
                </label>
            </div>
        })}
    </div>
}