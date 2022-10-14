import React, {useState, useRef} from 'react';
import {Button, Card, Form, Col, Row} from 'react-bootstrap';
import './Form.css'
import axios from 'axios';
import { saveAs } from 'file-saver'

export default function Forms() {

  const [file, setFile] = useState();
  const [img, setimg] = useState();
  const [value, setvalue] = useState();
  const [send, setsend] = useState(false);
  const [result, setresult] = useState();
  const [message, setmessage] = useState(false);

  const inputRef = useRef(null);

  const sendData = () =>{
    setmessage(true)
    const headers ={
      'accept' : 'application/json'
    }
    const fd = new FormData()
    fd.append('image', img)
        console.log(img)

    axios.post("http://127.0.0.1:8000/api/ImageView/", fd, {headers:headers})
    .then(res => {
      console.log(res.data);
      setsend(true)
      getImageResult(res.data.id)
      })
      .catch(err => console.log(err))

  }

  const getImageResult = (id) =>{

    axios.get(`http://127.0.0.1:8000/api/ImageView/${id}/`)
    .then(res => {
        setmessage(false)
        setresult(res.data)
        console.log(result.Grayimage)
  })
  .catch(err => console.log(err))
}

const SaveImage = () =>{
  saveAs(result.Grayimage, 'image.png') // Put your image url here.
}

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
    //setimg(URL.createObjectURL(e.target.files[0]));
    setimg(e.target.files[0])
  }

  const Refresh = () =>{
    setresult('')
    inputRef.current.value = "";
    setimg('');
    setFile('')   
  }

  return (
    <>
    <Card className="text-center card">
    <Card.Header className="header">Image to GrayScale</Card.Header>
    <Card.Body>
      <Card.Title className="title">Upload Image</Card.Title>
      <img src={img} alt="" className='imagepreview' /> 
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Control className="formcontrol" type="file" size="lg" ref={inputRef} onChange={(e)=>handleChange(e)}/>
      </Form.Group>
    </Card.Body>
    <Card.Footer>
    <Button className="mx-5 button" size="lg" variant="primary" onClick={sendData} disabled={!img}>Convert Image</Button>
    <Button className='mx-5 button' size="lg" variant="dark" onClick={SaveImage} disabled={!result}> Save Image</Button>
    <Button className='mx-5 button' size="lg" variant="dark" onClick={Refresh} disabled={!img}> Refresh</Button>
    </Card.Footer>
  </Card>
  <div>
  <Row className='mb-7 mt-5 text-center' >
          <h1 style={{marginLeft:90}}>Gray Scale OutPut</h1>
                    <Col>
                    {file && <div><h5 className='mt-3'>Input Image</h5><img src={file} alt="" className='imagepreview' /> </div>}
                    </Col>
                    <Col>
                    {result && <div><h5 className='mt-3'>Gray Scale Image</h5>  <img src={result.Grayimage} alt="" className='imagepreview' /></div>}
                    </Col>
                </Row> 
  </div>
  </>
  )
} 
