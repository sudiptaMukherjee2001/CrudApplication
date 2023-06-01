import React, { useState } from 'react'
import "../Create/Create.scss"
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createStudent } from "../../features/CrudSlice"
function Create() {
    const [formData, setFormData] = useState({
        name: '',
        rollNum: '',
        email: '',
        phoneNumber: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const Dispatch = useDispatch();
    const Navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        // Perform any necessary actions with the form data
        console.log(formData);

        Dispatch(createStudent(formData))
        Navigate("/")
    };
    // console.log(formData)
    const gotoViewpage = () => {
        Navigate("/")
    }

    return (
        <>
            <div className="stuDetails">

                <h1>
                    Student Details
                </h1>

                <form onSubmit={handleSubmit}>
                    <label className='name'>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            // minLength={12}

                            required
                        />
                    </label>

                    <label className='email'>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <label className='rno'>
                        Roll Number:
                        <input
                            type="text"
                            name="rollNum"
                            value={formData.rollNum}
                            onChange={handleChange}
                            maxlength="2"
                            required
                        />
                    </label>



                    <label className='pno'>
                        Phone Number:
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <div className="btn">

                        <button type="submit">Submit</button>
                        <button onClick={gotoViewpage}>Back</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Create