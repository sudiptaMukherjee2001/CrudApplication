import React, { useEffect } from 'react';
import { showStudent } from "../../features/CrudSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../View/View.scss";
import { deleteStudent } from '../../features/CrudSlice';

function View() {
    const dispatch = useDispatch();
    const { initialStudent } = useSelector((state) => state.stuDetails);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(showStudent());
    }, [dispatch]);

    const sendId = (id) => {
        navigate(`/UpdateStudent/${id}`);
    };

    const deleteStu = (id) => {
        dispatch(deleteStudent(id));
    };

    const gotoCreatePage = () => {
        navigate("/createStudent")
    }

    return (
        <div className="chart">
            <div className="header">

                <h1>Student Details</h1>
                <button onClick={gotoCreatePage}>Go to CreatePage</button>
            </div>
            <table className="student-table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>RollNo</th>
                        <th>Phone</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {initialStudent.map((student, id) => (
                        <tr key={id}>
                            <td>{student?.id}</td>
                            <td>{student?.name}</td>
                            <td>{student?.rollNum}</td>
                            <td>{student?.phoneNumber}</td>
                            <td>
                                <button className='edit' onClick={() => sendId(student.id)}>Edit</button>
                            </td>
                            <td>
                                <button className='delete' onClick={() => deleteStu(student?.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default View;
