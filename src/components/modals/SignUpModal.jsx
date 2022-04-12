import { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/userContext";
import {useNavigate} from "react-router-dom"

function SignUpModal() {
  
  const { modalState, toggleModals, signUp,toggleUser } =useContext(UserContext); 
  const inputs = useRef([]);

  const navigate = useNavigate();

  const [validation, setValidation] = useState("");

  const addInputs = el => {
    if(el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
  }

  const formRef= useRef();

  const handleForm = async (e) => {
    e.preventDefault()

    if((inputs.current[1].value.length || inputs.current[2].value.length) < 6){
      setValidation("6 charcters min")
      return;
    }
    else if (inputs.current[1].value !== inputs.current[2].value){
      setValidation("Password do not match")
    }

  try {

    const cred = await signUp(
      inputs.current[0].value,
      inputs.current[1].value,
    )
    formRef.current.reset(); 
    setValidation("");
    toggleModals("close")
    navigate("/private/home") 
    toggleUser("co")

  } catch (err){
    if(err.code === "auth/invalid-email") {
      setValidation("Email format invalid")
    }
    if(err.code === "auth/email-already-in-use") {
      setValidation("Email already used")
    }
  }
  }

  const closeModal = () => {
    setValidation("")
    toggleModals("close")
  }

  return (
    <>
      {modalState.SignUpModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
          onClick={closeModal}
          className="w-300 h-100 bg-dark bg-opacity-75">
          </div>
            <div
              className="position-absolute top-50 start-50 translate-middle"
              style={{ minWidth: "400px" }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">S'inscrire</h5>
                    <button 
                    className="btn-close" onClick={closeModal}></button>
                  </div>

                  <div className="modal-body">
                    <form   
                    onSubmit={handleForm}
                    ref={formRef}
                    className="sign-up-form">
                      <div className="mb-3">
                        <label htmlFor="signUpEmail" className="form-label">
                          Email 
                        </label>
                        <input
                          name="email"
                          required
                          type="email"
                          className="form-control"
                          id="signUpEmail"
                          ref={addInputs}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="signUpPwd" className="form-label">
                          Mot de passe
                        </label>
                        <input
                          name="pwd"
                          required
                          type="password"
                          className="form-control"
                          id="signUpPwd"
                          ref={addInputs}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="repeatPwd" className="form-label">
                          Retaper le mot de passe
                        </label>
                        <input
                          name="pwd"
                          required
                          type="password"
                          className="form-control"
                          id="repeatPwd"
                          ref={addInputs}
                        />
                        <p className="text-danger mt-1"> {validation}</p>
                      </div>

                      <button className="btn btn-primary">Entrer</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

        </div>
        )}
      
    </>
  );
}

export default SignUpModal;