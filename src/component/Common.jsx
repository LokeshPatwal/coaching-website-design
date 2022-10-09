import React from 'react'
import { Link } from 'react-router-dom'

const Common = (props) => {
    return (
        <>
            <>
                <section id="header" className="d-flex align-items-center">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row">
                                    <div className="col-md-6 d-flex justify-content-center flex-column">
                                        <h1>{props.name} <strong className="brand-name"> Success Classes</strong></h1>
                                        <h2 className="my-3">We are the team of experienced tutors</h2>
                                        <div className="mt-3">
                                            <Link to={props.visit} className="btn btn-success">{props.btname}</Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <img src={props.imgsrc} className="homeimg" alt="home img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        </>
    )
}

export default Common