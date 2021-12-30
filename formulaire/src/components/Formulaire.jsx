import React, { useState } from "react";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";

function Formulaire() {
  const [name, setName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isEmpty(name) ||
      isEmpty(lastname) ||
      isEmpty(email) ||
      !isEmail(email) ||
      isEmpty(password)
    ) {
      window.alert("erreur");
    } else {
      setName("");
      setlastName("");
      setemail("");
      setpassword("");
      window.alert("success");
    }
  };
  return (
    <div className="container d-flex justify-content-center">
      <form className="col-8">
        <div className="form-group">
          <label for="name">name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label for="lastname">lastname</label>
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Enter lastname"
            value={lastname}
            onChange={(e) => setlastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">*Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            required
          />
        </div>
        <div className="col d-flex justify-content-center">
          <button
            type="submit"
            class="btn btn-primary mr-3"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button class="btn btn-danger">cancel</button>
        </div>
      </form>
    </div>
  );
}

export default Formulaire;
