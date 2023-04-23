import React from 'react'
import { NavLink } from 'react-router-dom'

export default  function Contactlist(props) {

    let data = JSON.parse(localStorage.getItem("users"))

    console.log(data);
    return (
        <>
            <h1>contactlist</h1>
            <div className="section-title">
                <h2>Contact</h2>
                <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                    blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
                    luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
            </div>
            <div className="row text-center">
                <div className="col-6">
                    <NavLink to={"/Contact"}>Contact</NavLink>
                </div>
                <div className="col-6">
                    <NavLink to={"/contactlist"}>Contactlist</NavLink>
                </div>
            </div>
            <div>
                {
                    data.map((d, i) => {

                        return (
                            <>
                                <div>
                                    <h6>name :- {d.name}</h6>
                                    <h6>email :- {d.email}</h6>
                                    <h6>subject :- {d.subject}</h6>
                                    <h6>message :- {d.message}</h6>
                                </div>
                            </>
                        )
                    })
                }
            </div>

        </>
    )
}



