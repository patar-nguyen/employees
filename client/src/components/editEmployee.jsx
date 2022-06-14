import React, { Fragment, useState } from 'react';

const EditEmployee = ({ employee }) => {

  const [name, setName] = useState(employee.name);
  const [code, setCode] = useState(employee.code);
  const [profession, setProfession] = useState(employee.profession);
  const [color, setColor] = useState(employee.color);
  const [city, setCity] = useState(employee.city);
  const [branch, setBranch] = useState(employee.branch);
  const [assigned, setAssigned] = useState(employee.assigned);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { name, code, profession, color, city, branch, assigned }
      const response = await fetch(`http://localhost:3001/employee/${employee.employee_id}`, {
        method: "PUT",
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
    <button type="button" class="btn btn-warning" data-toggle="modal" data-target={`#id${employee.employee_id}`}>
      Edit
    </button>

    <div class="modal fade" id={`id${employee.employee_id}`} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Edit Note</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input type="text" className="form-control my-1" value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="text" className="form-control my-1" value={code} onChange={(e) => setCode(e.target.value)}/>
            <input type="text" className="form-control my-1" value={profession} onChange={(e) => setProfession(e.target.value)}/>
            <input type="text" className="form-control my-1" value={color} onChange={(e) => setColor(e.target.value)}/>
            <input type="text" className="form-control my-1" value={city} onChange={(e) => setCity(e.target.value)}/>
            <input type="text" className="form-control my-1" value={branch} onChange={(e) => setBranch(e.target.value)}/>
            <input type="text" className="form-control my-1" value={assigned} onChange={(e) => setAssigned(e.target.value)}/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" onClick={(e) => handleSubmit(e)}>Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </Fragment>
  );
}

export default EditEmployee;