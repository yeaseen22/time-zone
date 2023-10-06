/**
 * 1. For Local Clock Title won't be changed
 * 2. To Create A New Clock We Have To Manage [title, timezone, offset]
 * 3. To Edit We Will Have To Create [title, timezone, offset]
 */

import React, { useState } from "react";

const ClockForm = ({ values, handleClock, title = true, edit = false }) => {
    const [formValues, setFormValues] = useState({ ...values });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
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
                <input
                    type="text"
                    id="timezone"
                    name="timezone"
                    value={formValues.timezone}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="offset">Enter Offset</label>
                <input
                    type="number"
                    id="offset"
                    name="offset"
                    value={formValues.offset}
                    onChange={handleChange}
                />
            </div>
            <button>{edit ? "Update" : "Create"}</button>
        </form>
    );
};
export default ClockForm