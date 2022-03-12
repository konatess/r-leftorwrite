import React, { useState } from 'react';
import strings from "../constants/strings";

export default function NewUser(props) {
    const [name, setName] = useState("");
  
    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.changeUsername(props.uri, name, props.responseState, props.errorState)
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <p>{strings.createUser.message}</p>
            {props.error && <p>{props.error}</p>}
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