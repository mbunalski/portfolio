import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css'
import { db } from "../utils/firebase";
import { getDatabase, ref, set, child, get  } from "firebase/database";
import $ from 'jquery'
import { nanoid } from 'nanoid'



const ShortUrl = () => {

    var generatedKey = nanoid(5);
    const [long, setLong] = useState();
    const [short, setShort] = useState();
 


    const dbRef = ref(getDatabase());
    // const Pull = () => {
    
    // get(child(dbRef, `urlapp`)).then((snapshot) => {
    //     if (snapshot.exists()) {
    //     console.log(snapshot.val());
    //     } else {
    //     console.log("No data available");
    //     }
    // }).catch((error) => {
    //     console.error(error);
    // });
    // }   

    // Push Function


    let fullUrl = window.location.href


    const Push = () => {
        var value = document.getElementById("shorturl").value;
        if (isNaN(value)) {
            console.log('wammy')
        }
        console.log(value)
        var dict = {}
        let snap;
        get(child(dbRef, `urlapp`)).then((snapshot) => {
            if (snapshot.exists()) {
                
                snapshot.forEach((child) => {
                    dict[child.key] = child.val();
                    
                }); 
                // console.log('l1')
                // console.log(dict)
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        }).then(() => {

            if ([short] in dict){ 
                
                // console.log('present')
                document.getElementById("error").style.display= '';}
                
            else{
                
                dict[[short]] = long;
                // console.log('unique')
                set(ref(db,'urlapp'),dict).catch(alert);
                document.getElementById("error").style.display= 'none';

                var copyText = document.getElementById("shorturl");

                // Select the text field
                copyText.select();
                copyText.setSelectionRange(0, 99999); // For mobile devices

                // Copy the text inside the text field
                navigator.clipboard.writeText(fullUrl + "/" + copyText.value);

            }
            
            
        }
        );
        
        
        
    }

    return (
        
        <div className='w-full h-screen bg-[#0a192f] text-black'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div  className= 'rounded shadow-md shadow-[#040c16] bg-teal-200 w-[500px] h-[500px] flex flex-col justify-center items-center'>
                
                <Form className='font-bold'>
                    <Form.Group className="mb-5" controlId="formBasicEmail">
                        <Form.Label className= 'px-2 '>Enter a Long URL</Form.Label>
                        <Form.Control type="email" placeholder="Enter URL" value={long}
                    onChange={(e) => setLong(e.target.value)}/>
                    </Form.Group>

                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <div><Form.Label className= 'px-2' >Your Short URL</Form.Label><span id='error' style={{display:"none"}} className='display-hidden bg-gray-500 px-10 mx-5 border-2'>Try another value</span></div>
                        
                        <div className='flex '><span  className="input-group-text bg-gray-500">{fullUrl}</span>
                        
                        <Form.Control id="shorturl" type="" placeholder="eg. 3h6fsB (Optional)" value={short}
                    onChange={(e) => setShort(e.target.value)}/></div>
                    </Form.Group>

                    <Button className="mb-5 bg-blue-600" variant="primary" type="button" onClick={Push}>
                        Copy URL
                    </Button>

                    
                </Form>
                
                </div>
            </div>
        </div>
        
    );
}

export default ShortUrl
