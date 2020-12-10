import React, {useState}  from 'react';
import axios from 'axios'

const Contact = () => {
    const [input, setInput]= useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleOnChange = event => {
        event.persist();
        setInput(prev => ({
          ...prev,
          [event.target.id]: event.target.value
        }));
    }

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
      });
      const handleServerResponse = (ok, msg) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          setInput({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
          });
        }
      };
      const handleOnSubmit = event => {
        event.preventDefault();
        setServerState({ submitting: true });
        axios({
          method: "POST",
          url: "https://formspree.io/f/mgepnvjb",
          data: input
        })
          .then(r => {
            handleServerResponse(true, "Thanks!");
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error);
          });
      };    

    return (
    <div className="container">
        <div className="row my-5">
            <div className="col-md-12 px-4">
                <h2>HOW CAN WE PRAY FOR YOU?</h2>
                <hr />
            </div>
        </div>
        <div className="row my-5">
            <div className="col-md-12 px-4">
                <form onSubmit={handleOnSubmit}> 
                    <div className="form-group">
                        <label htmlFor="firstName">First Name <span className="text-danger">*</span></label><br />
                        <input id="firstName" type="firstName" name="firstName" onChange={handleOnChange} value={input.firstName} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name <span className="text-danger">*</span></label><br />
                        <input id="lastName" type="lastName" name="lastName" onChange={handleOnChange} value={input.lastName} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email <span className="text-danger">*</span></label><br />
                        <input  id="email" type="email" name="email" onChange={handleOnChange} value={input.email} required />
                    </div>
                    <div className="form-group">
                        <label>Would you like someone to contact you about your prayer request? <span className="text-danger">*</span></label>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                            <label className="custom-control-label" for="customRadio1">Yes</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                            <label className="custom-control-label" for="customRadio2">No</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Please share your prayer request. <span className="text-danger">*</span></label><br />
                        <textarea id="message" type="message" name="message" onChange={handleOnChange} value={input.message} required></textarea>
                    </div>
                    <div className="text-right">
                        <button type="submit" className="btn btn-warning" disabled={serverState.submitting}>Submit</button>
                        {serverState.status && (
                        <p className={!serverState.status.ok ? "errorMsg" : ""}>
                            {serverState.status.msg}
                        </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default Contact