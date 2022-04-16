import './WritePBtns.css'
import icons from '../constants/icons'

export default function WritePBtns (props) {
    return <div id='writebtnsrow'>
        {icons.continue({className: "writepbtn", id: "continuebtn"})} 
        {icons.choice({className: "writepbtn", id: "choicebtn"})}
        {icons.tbc({className: "writepbtn", id: "tbcbtn"})}
        {icons.end({className: "writepbtn", id: "endingbtn"})}

    </div>
}