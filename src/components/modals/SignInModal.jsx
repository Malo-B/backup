import { useContext, useRef, useState } from "react";
import { UserContext } from "../../context/userContext";
import {useNavigate} from "react-router-dom"

function SignInModal() {
  
  const { modalState, toggleModals, signIn, toggleBar, barState, toggleUser} =useContext(UserContext); 
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

  try {

    const cred = await signIn(
      inputs.current[0].value,
      inputs.current[1].value,
    )
    formRef.current.reset(); 
    setValidation("");
    toggleModals("close")
    toggleUser("co")
    console.log(barState)
    navigate("/private/home") 

  } catch {
    setValidation("Email ou mot de passe incorrect")
  }
  }

  const closeModal = () => {
    setValidation("")
    toggleModals("close")
  }

  return (
    <>
      {modalState.SignInModal && (
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
                    <h5 className="modal-title">Se connecter</h5>
                    <button 
                    className="btn-close" onClick={closeModal}></button>
                  </div>

                  <div className="modal-body">
                    <form   
                    onSubmit={handleForm}
                    ref={formRef}
                    className="sign-in-form">
                      <div className="mb-3">
                        <label htmlFor="signInEmail" className="form-label">
                          Email adress
                        </label>
                        <input
                          name="email"
                          required
                          type="email"
                          className="form-control"
                          id="signInEmail"
                          ref={addInputs}
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="signInPwd" className="form-label">
                          Mot de passe
                        </label>
                        <input
                          name="pwd"
                          required
                          type="password"
                          className="form-control"
                          id="signInPwd"
                          ref={addInputs}
                        />
                      </div>
                        <p className="text-danger mt-1"> {validation}</p>
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

export default SignInModal;