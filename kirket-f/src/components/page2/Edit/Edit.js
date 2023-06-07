import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

function Edit(props) {
  const [show, setShow] = useState(false);

  const [f_name,setf_name]=useState("");
  const [f_phone,setf_phone]=useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit=()=>{
    setShow(false)

    const username=localStorage.getItem("kirket.username");
    
    if(props.ty=="p"){
        
        // props.alert(f_phone)
        props.phonechange(f_phone);
        localStorage.setItem("kirket.phone",f_phone);


        axios.post("http://localhost:4000/update_phone",{username:username,phone:f_phone}).then(user=>{
           console.log(user);
        }).catch(err=>{
          console.log(err)
        })

    }

    else{

        // console.log("herre");
        props.namechange(f_name);
        localStorage.setItem("kirket.name",f_name);


        axios.post("http://localhost:4000/update_name",{username:username,name:f_name}).then(user=>{
            console.log(user);
         }).catch(err=>{
           console.log(err)
         })

    }
  }

  const phone=localStorage.getItem("kirket.phone");
  const name=localStorage.getItem("kirket.name");


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{(props.ty=="p")?"Change Phone Number ":"Change Name"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
            <label>{(props.ty=="p")?"Current Phone Number ":"Current Name"}
                <input
                type="text" 
                value={(props.ty=="p")?phone:name}
                disabled
                />
            </label>

            <label>{(props.ty=="p")?"New Phone Number ":"New Name"}
                <input
                type="text" onChange={(e)=>{
                     props.ty=="p"?setf_phone(e.target.value):(setf_name(e.target.value))
                }}
                />
            </label>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;