import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateStudent } from "../../features/CrudSlice";
import "../Create/Create.scss"
function Update() {
    const id = useParams();
    const { initialStudent } = useSelector((state) => state.stuDetails);

    const selectedStudent = initialStudent.find((stu) => stu.id === id.id);

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        rollNum: '',
        email: '',
        phoneNumber: ''
    });

    useEffect(() => {
        if (selectedStudent) {
            setFormData({
                id: selectedStudent.id || '',
                name: selectedStudent.name || '',
                rollNum: selectedStudent.rollNum || '',
                email: selectedStudent.email || '',
                phoneNumber: selectedStudent.phoneNumber || ''
            });
        }
    }, [selectedStudent]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const Dispatch = useDispatch();
    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform any necessary actions with the form data
        Dispatch(updateStudent({ id: selectedStudent.id, ...formData }));
        // console.log(formData);
        Navigate('/');
    };


    const gotoViewpage = () => {
        Navigate("/")
    }
    return (
        <div className="stuDetails">

            <h1>
                Update Page
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

                    <button type="submit" className='SubmitBtn'>Save</button>
                    <button onClick={gotoViewpage}>Back</button>
                </div>
            </form>
        </div>
    );
}

export default Update;
