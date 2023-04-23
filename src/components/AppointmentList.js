import React, { useState } from 'react';
import Data from "./Data.json"
import Table from './Table';



function AppointmentList(props) {

    const Columns = React.useMemo(
        () => [
            {
                Header: 'Doctor',
                columns: [
                    {
                        Header: 'Id',
                        accessor: 'first_name',
                    },
                    {
                        Header: 'Name',
                        accessor: 'last_name',
                    },
                ]
            }
        ],
        []
    )

    return (

        <div>
            <section id="doctors" className="doctors">
                <div className="container">
                    <div className="section-title">
                        <h2>Appointment List</h2>
                        <p>Duis sagittis rutrum neque, quis tincidunt arcu pretium ac. Suspendisse sem risus, molestie vitae arcu et,
                            tincidunt viverra erat. Quisque in lectus id nulla viverra sodales in a risus. Aliquam ut sem ex. Duis viverra
                            ipsum lacus, ut pharetra arcu sagittis nec. Phasellus a eleifend elit.</p>
                    </div>

                    <div>
                        <Table
                            data={Data}
                            columns={Columns}
                        />
                    </div>

                </div>
            </section>
        </div>
    );
}

export default AppointmentList;