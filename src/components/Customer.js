import React, { useState } from 'react';
import DataTable from 'react-data-table-component';


const Customer = () => {
    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable:true
        },
        {
            name: "Enroll",
            selector: row => row.enroll,
            sortable:true
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable:true
        },
        {
            name: "Course",
            selector: row => row.course,
            sortable:true
        }
    ];
    const data = [
        {
            id: 1,
            name: "Deep",
            enroll: '0132CS10',
            email: 'deep@gmail.com',
            course: 'B.tech'
        },
        {
            id: 2,
            name: "Aditi",
            enroll: '0132CS02',
            email: 'deep@gmail.com',
            course: 'B.tech'
        },
        {
            id: 3,
            name: "Rich",
            enroll: '0132CS16',
            email: 'deep@gmail.com',
            course: 'B.tech'
        },
        {
            id: 4,
            name: "shub",
            enroll: '0132CS43',
            email: 'deep@gmail.com',
            course: 'B.tech'
        },
        {
            id: 5,
            name: "Gabbar",
            enroll: '0132CS31',
            email: 'deep@gmail.com',
            course: 'B.tech'
        },
        {
            id: 6,
            name: "TheBoys",
            enroll: '0132CS14',
            email: 'deep@gmail.com',
            course: 'B.tech'
        },
        {
            id: 7,
            name: "Rogit",
            enroll: '0132CS42',
            email: 'deep@gmail.com',
            course: 'B.tech'
        },
        {
            id: 8,
            name: "WebD",
            enroll: '0132CS47',
            email: 'deep@gmail.com',
            course: 'B.tech'
        },
        {
            id: 9,
            name: "TheBoys",
            enroll: '0132CS10',
            email: 'deep@gmail.com',
            course: 'B.tech'
        },
        {
            id: 10,
            name: "Thedeep",
            enroll: '0132CS1',
            email: 'deep@gmail.com',
            course: 'B.tech'
        },
        {
            id: 11,
            name: "TheCloud",
            enroll: '0132CS12',
            email: 'deep@gmail.com',
            course: 'B.tech'
        },
        {
            id: 12,
            name: "TheBoys",
            enroll: '0132CS14',
            email: 'deep@gmail.com',
            course: 'B.tech'
        },

    ]
    const [records,setRecords] = useState(data);
    function handleFilter(event){
        const newData = data.filter(row =>{
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }
    return (
        <div className="col-md-9 col-lg-9 px-md-4 py-4" style={{marginLeft:"20%",backgroundColor:"white",marginTop:"20px"}}>
            <p style={{color:'#0ea6ec',fontSize:"20px",fontWeight:"400"}}>Customers</p>
            <div className='text-end mt-2'>
                <input type="text" onChange={handleFilter}/>
            </div>
            <DataTable columns={columns}
            data={records} selectableRows
            fixedHeader
            pagination>
            </DataTable>

        </div>
    );
};

export default Customer