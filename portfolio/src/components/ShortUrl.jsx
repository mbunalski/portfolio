import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'


const ShortUrl = () => {
    return (
        
        <div className='w-full h-screen bg-[#0a192f] text-black'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className= ' bg bg-pink-200 w-[500px] h-[500px] flex flex-col justify-center items-center'>
                
                <Form>
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Label className= 'px-2'>Enter a Long URL</Form.Label>
                        <Form.Control type="email" placeholder="Enter URL"/>
                    </Form.Group>

                    <Button className="mb-5 bg-blue-600" variant="primary" type="submit">
                        Shorten
                    </Button>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className= 'px-2' >Your Short URL</Form.Label>
                        <Form.Control type="" placeholder="(eg. 3h6fsB)"/>
                    </Form.Group>

                    
                </Form>
                
                </div>
            </div>
        </div>
        
    );
}

export default ShortUrl
