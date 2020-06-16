import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar';
//import AddTeacher from './components/AddTeacher';
//import AddTeacherFormik from './components/AddTeacherFormik';
//import Enrolement from './components/Enrolement';
//import EnrolementClassBased from './components/EnrolementClassBased';
import sample from './components/sample'
import EditTeacher from './components/EditTeacher';
import TeachersReport from './components/TeachersReport';
//import AddTeacherdup from './components/AddTeacherdup';


function App() {
  return (
    <Router>
      <div className="App">
        <AppNavbar />
        {/* <Route exact path='/addteacher' component={AddTeacherdup} /> */}
        {/* <Route exact path='/addteacher' component={AddTeacherFormik} /> */}
        <Route exact path='/addteacher' component={sample} />
        <Route exact path='/teacherslist' component={TeachersReport} />
        <Route exact path='/edit/:id' component={EditTeacher} />
        {/* <Route exact path='/addteacher' component={sampletwo} /> */}
      </div>
    </Router>  
  );
}

export default App;
