import React, { useState } from "react";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";

function Formulaire() {
  const [name, setName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [SujetduMessage, setSujetduMessage] = useState("");
  const [Number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isEmpty(name) ||
      isEmpty(lastname) ||
      isEmpty(email) ||
      !isEmail(email) ||
      isEmpty(password) ||
      isEmpty(SujetduMessage) ||
      isEmpty(Number)
    ) {
      window.alert("Veuillez saisir des données valides!");
    } else {
      setName("");
      setlastName("");
      setemail("");
      setpassword("");
      setSujetduMessage("");
      setNumber("");

      window.alert("Votre formulaire à été envoyée avec succès!");
    }
  };
  return (
    <div className="container d-flex justify-content-center mt-3 mb-3">
      <div className="row w-100">
        <form className="col-sm-8">
          <div className="form-group">
            <h1>Informations générales</h1>
          </div>
          <div className="form-group">
            <label for="name">
              Nom <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Entrer votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label for="lastname">
              Prénom <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Entrer votre prénom"
              value={lastname}
              onChange={(e) => setlastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">
              Adresse Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Entrer votre email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
            <small id="emailHelp" class="form-text text-muted">
              Veuillez entrer une adresse e-mail valide
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputnumber">
              Numéro de telephone <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputnumber"
              placeholder="Entrer votre numéro de telephone"
              value={Number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <small id="numéroHelp" class="form-text text-muted">
              Veuillez entrer votre numéro de téléphone au format xx-xxx-xxx
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">
              Mot de passe <span className="text-danger">*</span>
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Entrer votre mot de passe"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label for="SujetduMessage">
              Sujet du Message <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="SujetduMessage"
              placeholder=" Veuillez saisir votre sujet"
              value={SujetduMessage}
              onChange={(e) => setSujetduMessage(e.target.value)}
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
            <button class="btn btn-danger">Cancel</button>
          </div>
        </form>

        <div className="col d-flex justify-content-center align-items-center mt-5">
          <img
            className="img-fluid"
            alt="Logo"
            width={150}
            src="https://scontent.ftun15-1.fna.fbcdn.net/v/t39.30808-6/241891363_127266579641740_3693658393023531866_n.png?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=dR-J_Fx761gAX_xE2yb&tn=IWfcpfyqEIiXM2Fn&_nc_ht=scontent.ftun15-1.fna&oh=00_AT-QrCFhIfllptLz0ZRfqZ_pAOHgBebFMRpnTRisONkJCA&oe=61D36CD4"
          />
        </div>
      </div>
    </div>
  );
}

export default Formulaire;
