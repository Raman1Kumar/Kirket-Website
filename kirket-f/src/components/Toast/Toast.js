import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

var message="hello";
function AutohideUpdate(props) {
    const [show, setShow] = useState(false);
    

  
  
  
  if(props.login==1 && show==false){

      message="UserName or Password is wrong"
    console.log("inside login")
      setShow(true);
      

  }
  else if(props.register==1 && show==false){
      message="Could Not Register Right Now Please try after some time"
    setShow(true)
  }
  else if(props.register==2 && show==false){
      message="Successfully Registered , Please Login "
    setShow(true);
  }


  const onCloseHandler=()=>{

    console.log("setting login v al")

    if(props.login==1){
        props.login_fun()

    }
     
    if(props.register==1 || props.register==2){
        console.log("regiter cloase")
        props.register_fun();
    }

    setShow(false)


  }


  return (
    <div>
    <Row>
      <Col xs={12}>
        <Toast onClose={onCloseHandler} show={show} delay={6000} autohide>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Kirket</strong>
            
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </Col>
      
    </Row>
    {/* <Row>
    <Col xs={6}>
        <Button onClick={() => setShow(true)}>Show Toast</Button>
      </Col>

    </Row> */}
    </div>
  );
}

export default AutohideUpdate;