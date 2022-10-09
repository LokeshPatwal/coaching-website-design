import React, { useState } from 'react'

const ContactUs = () => {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    mobile: "",
    msg: "",
  })
  const inputEvent = (event) => {
    const name = event.target.name;
    const newvalue = event.target.value;

    setInput((prevvalue) => {
      if (name === "fname") {
        return {
          fullName: newvalue,
          email: prevvalue.email,
          mobile: prevvalue.mobile,
          msg: prevvalue.msg,
        }
      } else if (name === "email") {
        return {
          fullName: prevvalue.fullName,
          email: newvalue,
          mobile: prevvalue.mobile,
          msg: prevvalue.msg,
        }
      } else if (name === "mobile") {
        return {
          fullName: prevvalue.fullName,
          email: prevvalue.email,
          mobile: newvalue,
          msg: prevvalue.msg,
        }
      } else if (name === "msg") {
        return {
          fullName: prevvalue.fullName,
          email: prevvalue.email,
          mobile: prevvalue.mobile,
          msg: newvalue,
        }
      }
    })
  }
  const formSubmit = (event) => {
    event.preventDefault();
    alert(`${input.fullName} / ${input.email} / ${input.mobile} / ${input.msg}`)
  }
  return (
    <>
      <div className="my-4">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className=" col-6 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your full name"
                  name="fname" value={input.fullName} onChange={inputEvent} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter your email"
                  name="email" value={input.email} onChange={inputEvent} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Mobile number"
                  name="mobile" value={input.mobile} onChange={inputEvent} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                  name="msg" value={input.msg} onChange={inputEvent}></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs