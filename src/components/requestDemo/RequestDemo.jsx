import './request.css'
export default function RequestDemo() {
  return (
    
    <div className="containe main-container d-flex justify-content-center align-items-center flex-column ">

      <div className='cont3 p-3'>
      <h2 className='text-primary my-3'>Request a free demo</h2>
     <div className="d-flex justify-content-center align-items-center flex-column">
     <form >
        <div className="Names d-flex">
          <div className="mb-3 mx-0 w-50">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="First Name"
            />
          </div>
          <div className="mb-3 w-50">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control mx-2"
              id="exampleFormControlInput1"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="asad@gmail.com"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Phone number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="xxx xxx xxxx"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Company
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Company"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Role
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Role"
          />
        </div>
        <button type="button" className="btn btn-primary w-100">Submit</button>
      </form>
     </div>
      </div>
    </div>
  );
}
