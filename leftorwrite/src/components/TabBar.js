import './TabBar.css';

export default function TabBar (props) {
    return <div className='tabbar'>
        {props.tabs.map( (tab, index) => {
            return <div className="tabbtn" >
                <input type="radio" id={tab.id} name='tabs' defaultChecked={index === 0} onChange={() => {return props.onChange(tab.id)}}/>
                <label for={tab.id}>{tab.name}</label>
            </div>
        })}
    </div>
}