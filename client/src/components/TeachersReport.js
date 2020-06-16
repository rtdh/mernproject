import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css'

export default class TeachersReport extends Component {
    constructor(props){
        super(props)
        this.state = {
            teachers : [], isRecordDeleted: false
        }
        this.getTeachers = this.getTeachers.bind(this)
    }

    componentDidMount(){

        this.getTeachers()
        
    }

    getTeachers = ()=>{
        axios.get('http://localhost:5000/teacherslist')
        .then(res=>{
            console.log(res.data)
            this.setState({teachers: res.data})
        })
        .catch(err=>console.log(err))
    }

    onDeleteRecord = (id)=>{
        alert('attempting to delete record')
        axios.delete(`http://localhost:5000/deleteteacher/${id}` )
            .then(res=>{
                if(res){
                    console.log('record deleted...')
                    this.getTeachers()
                    //this.props.history.push('/teacherslist')
                }
            })
            .catch(err=>console.log('deletion failed...'))
    }

    render() {
        const { teachers } = this.state
        return (
            <div className="container-fluid" style={{padding: '3% 5%'}}>
                <table id="teacherslist" className="table table-bordered table-striped table-hover" >
                    <thead><tr>
                        <th>Mandal</th><th>School</th><th>Name</th><th>Designation</th><th>Gender</th><th colSpan="2">Options</th></tr>
                    </thead>
                    <tbody>
                        {teachers.map(teacher=>(
                            <tr key={teacher.mandal}>
                            <td>{teacher.mandal}</td><td>{teacher.school}</td><td>{teacher.name}</td><td>{teacher.designation}</td><td>{teacher.gender}</td>
                            <td><Link to={'/edit/'+teacher._id}><span className="btn btn-success btn-sm">Edit</span></Link></td>
                            <td>
                                <button type="submit" className="btn btn-danger btn-sm"
                                onClick={(e)=>this.onDeleteRecord(teacher._id)}
                                >
                                Delete</button>
                                

                            </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
