import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, DeleteMedicine, EditMedicine, increment } from '../actions/medicines.action';
import Model from './Model';
import { IconButton } from '@mui/material';
import ModelEdit from './ModelEdit';
import { Formik } from 'formik';
import { Form,useFormik } from 'formik';
import * as yup from 'yup';
import { AiTwotoneDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md"



function Medicine() {
  

    const [show, setShow] = useState(false)
    const [eshow, setEshow] = useState(false)
    const [Edata, setEdata] = useState({})

  const data = useSelector((state) => state.updateMedicines)  
  const addData = useSelector((state) => state.addMedicine.data)

  const dispatch = useDispatch();

  const incrementData = () => {
    dispatch(increment())
  } 

  const decrementData = () => {
    dispatch(decrement())
  }

  const medicineModel = () => {
    setShow(true);
  }

  const handleDelete = (id) => {
    if(window.confirm("Are you sure to delete this data?")){
      dispatch(DeleteMedicine(id))
    }
  }

  const handleEdit = (data) => {
    setEshow(true);
    setEdata(data)
  }

  const handleSignup = (values) => {
       
    let data = JSON.parse(localStorage.getItem("users"))

    if (data === null) {
        localStorage.setItem("users", JSON.stringify([values]))
    } else {
        data.push(values)
        localStorage.setItem("users", JSON.stringify(data))
    }
    // history.push("/Contactlist")
}


  let schema = yup.object().shape({
    name: yup.string().required('please enter name'),
    email: yup.string().required('please enter email').email('enter valid email'),
    subject: yup.string().required('please enter subject'),
    message:yup.string().required('please enter message')
  });

  const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        subject: '',
        message: ''
    },
    validationSchema:schema,
    onSubmit: values => {
        handleSignup(values)
      },
    });

  return (

    <div>

      <Model show={show} setShow={setShow} />
      <ModelEdit show={eshow} setShow={setEshow} data={Edata} />
      
      <br/>

      <Button variant="success" onClick={medicineModel}>
        Add Medicine
      </Button>

      <br/><br/>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            addData.map((i) => {
              return (
                <tr key={i.id}>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.quantity}</td>
                  <td>{i.price}</td>
                  <td>
                    <IconButton aria-label="delete" color="error" onClick={()=>handleDelete(i.id)}> <AiTwotoneDelete /></IconButton>
                    <IconButton aria-label="edit" color="success" onClick={()=>handleEdit(i)}> <MdModeEdit /></IconButton></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>

 
      <Button variant="primary" onClick={incrementData}>+</Button>
     <span className='p-2'> {data} </span>
       <Button variant="primary" onClick={decrementData}>-</Button>


    </div >
    
  );
}

export default Medicine;