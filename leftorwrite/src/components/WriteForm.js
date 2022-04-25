import "./WriteForm.css"
import strings from "../constants/strings"
import dataLimits from "../constants/dataLimits"

export default function WriteForm (props) {
    return <form id="pagedata">
                <label for={'title'} className="text">{props.story ? strings.formlabels.story.title : strings.formlabels.page.title}</label>
                <input type={'text'} name='title' className="wide-input" maxLength={dataLimits.pageTitle.max}/>
                <label for={'content'} className="text">{props.story ? strings.formlabels.story.desc : strings.formlabels.page.content}</label>
                <textarea type={'text'} name='content' className="content wide-input" maxLength={dataLimits.pageContent.max}/>
                
                {!props.story && <label className="checkbox">
                    <input type={'checkbox'} name='pagefinished' className="checkbox" />
                    {strings.formlabels.page.finished}
                </label>}
            </form>
}