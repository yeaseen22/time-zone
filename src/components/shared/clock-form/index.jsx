/**
 * 1. For Local Clock Title won't be changed
 * 2. To Create A New Clock We Have To Manage [title, timezone, offset]
 * 3. To Edit We Will Have To Create [title, timezone, offset]
 */

import React, { useState } from "react";
import {getOffset} from '../../../utils/timezone'

const ClockForm = ({ values, handleClock, title = true, edit = false }) => {
    const [formValues, setFormValues] = useState({ ...values });

    const handleChange = (e) => {
		let { name, value } = e.target;

		if (name === 'offset') {
			value = Number(value) * 60;
		}
		

        setFormValues(prev => ({
            ...prev,
            [name]: value,
            
        }))
	};

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClock(formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Enter Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formValues.title}
                    onChange={handleChange}
                    disabled={!title}
                />
            </div>
            <div>
                <label htmlFor="timezone">Enter TimeZone</label>
                <select
                    name="timezone"
                    id="timezone"
                    value={formValues.timezone}
                    onChange={handleChange}
                >
                    <option value="GMT">GMT</option>
                    <option value="UTC">UTC</option>
                    <option value="PST">PST</option>
                    <option value="EST">EST</option>
                    <option value="EDT">EDT</option>
                    <option value="BST">BST</option>
                    <option value="MST">MST</option>
                </select>
            </div>
            {(formValues.timezone === "GMT" || formValues.timezone === "UTC") && (
                <div>
                    <label htmlFor="offset">Enter Offset</label>
                    <select
                        name="offset"
                        id="offset"
                        value={formValues.offset / 60}
                        onChange={handleChange}
                    >
                        {getOffset().map((offset) => (
                            <option value={offset} key={offset}>
                                {offset}
                            </option>
                        ))}
                    </select>
                </div>
            )}
            <button>{edit ? "Update" : "Create"}</button>
        </form>
    );
};
export default ClockForm;
