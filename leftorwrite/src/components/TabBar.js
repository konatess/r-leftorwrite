export default function TabBar (props) {
    return <div className='tabbar'>
        {props.tabs.map( (tab) => {
            <button
                id={tab.id}
                className="tabbtn"
            >{tab.name}</button>
        })}
    </div>
}