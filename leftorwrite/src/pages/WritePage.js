import strings from "../constants/strings"
import WritePBtns from "../components/WritePBtns"

export default function WritePage (props) {
    return <div className="mainpage">
        <div className="innerpage">
            <span>WritePage</span>
            <form id="pagedata">
                <label>
                    {strings.formlabels.page.title}
                    <input type={'text'} name='pagetitle' />
                </label>
                <label>
                    {strings.formlabels.page.content}
                    <textarea type={'text'} name='pagecontent' />
                </label>
                <label>
                    <input type={'checkbox'} name='pagefinished' />
                    {strings.formlabels.page.finished}
                </label>
            </form>
            <WritePBtns />
        </div>
    </div>
}