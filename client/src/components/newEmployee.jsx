import React, { Fragment, useState } from 'react';
//useState hook to allow having state variables
const NewEmployee = () => {
  //setting state to store user information
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [profession, setProfession] = useState("");
  const [color, setColor] = useState("");
  const [city, setCity] = useState("");
  const [branch, setBranch] = useState("");
  const [assigned, setAssigned] = useState(true);

  const handleSubmit = async (e) => {
    //prevent page from refreshing
    e.preventDefault();

    try {
      const body = { name, code, profession, color, city, branch, assigned }
      const res = await fetch("http://localhost:3001/employee", {
        method: "POST", //http method
        headers: { "Content-Type": "application/json" }, //content header to specify json data being returned
        //converts the employee info which is in an object into json string because when sending data to a web server the data has to be a string
        body: JSON.stringify(body) 
      });
      window.location = "/"; //return to home page
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    //fragment allows for the use of multiple elements
    <Fragment>
      <div class="text-center">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Add Employee
        </button>
      </div>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New Employee</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form id="form1" onSubmit={handleSubmit}>
                <input type = "text" placeholder="Full Name" className="form-control my-1" onChange={e => {setName(e.target.value)}} required/>
                <input type = "text" placeholder="Code" className="form-control my-1" onChange={e => {setCode(e.target.value)}} required/>
                <input type = "text" placeholder="Profession" className="form-control my-1" onChange={e => {setProfession(e.target.value)}} required/>
                <input type = "text" placeholder="Color" className="form-control my-1" onChange={e => {setColor(e.target.value)}} required/>
                <input type = "text" placeholder="City" className="form-control my-1" onChange={e => {setCity(e.target.value)}} required/>
                <input type = "text" placeholder="Branch" className="form-control my-1" onChange={e => {setBranch(e.target.value)}} required/>
                <input type = "text" placeholder="Assigned" className="form-control my-1" onChange={e => {setAssigned(e.target.value)}} required/>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" form="form1" class="btn btn-primary">Add</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default NewEmployee;