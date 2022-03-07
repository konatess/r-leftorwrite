import React, { useState } from 'react';
import strings from "../constants/strings";

export default function NewUser(props) {
    const [name, setName] = useState("");
  
    const handleSubmit = (evt) => {
        evt.preventDefault();
        // alert(`Submitting Name ${name}`)
        props.changeUsername()
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <label>
                {strings.createUser.label}
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
}