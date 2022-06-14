import React, { Fragment, useState } from 'react';

const NewEmployee = () => {

  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [profession, setProfession] = useState("");
  const [color, setColor] = useState("");
  const [city, setCity] = useState("");
  const [branch, setBranch] = useState("");
  const [assigned, setAssigned] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = { name, code, profession, color, city, branch, assigned }
      const response = await fetch("http://localhost:3001/employee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log(response)
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
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