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

    let fullUrl = window.location.href

    const Push = () => {
        var value = document.getElementById("shorturl").value;
        var dict = {}
        let snap;
        get(child(dbRef, `urlapp`)).then((snapshot) => {
            if (snapshot.exists()) {
                
                snapshot.forEach((child) => {
                    dict[child.key] = child.val();               
                }); 
 
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        }).then(() => {

            if (value==="") {
                setShort(generatedKey)
                if ([generatedKey] in dict){ 
                    document.getElementById("error").style.display= '';}  
                else{
                    if (long.substring(0,4) ==='http'){
                        console.log('contains http to start')
                        dict[generatedKey] = long;
                    }else if (long.substring(0,3) ==='www'){
                        console.log('contains www to start')
                        dict[generatedKey] = 'https://' + long;
                    }else{
                        console.log('nothing')
                        console.log(long.substring(0,3))
                        dict[generatedKey] = 'https://www.' + long;
                    }
                    console.log('got to the writing part')
                    console.log(dict[generatedKey])
                    set(ref(db,'urlapp'),dict).catch(alert);
                    document.getElementById("error").style.display= 'none';
                    var copyText = generatedKey;
                    navigator.clipboard.writeText(fullUrl + "/" + copyText);
                                
                }

            }else{
                if ([short] in dict){           
                    document.getElementById("error").style.display= '';}             
                else{
                    if (long.substring(0,4) ==='http'){
                        console.log('contains http to start')
                        dict[short] = long;
                    }else if (long.substring(0,3) ==='www'){
                        console.log('contains www to start')
                        dict[short] = 'https://' + long;
                    }else{
                        console.log('nothing')
                        console.log(long.substring(0,3))
                        dict[short] = 'https://www.' + long;
                    } 
                    set(ref(db,'urlapp'),dict).catch(alert);
                    document.getElementById("error").style.display= 'none';
                    var copyText = document.getElementById("shorturl");
                    copyText.select();
                    copyText.setSelectionRange(0, 99999);
                    navigator.clipboard.writeText(fullUrl + "/" + copyText.value);        
                }
                    
            }
            
            
        }
        );
        
        
        
    }

    return (
        
        <div className='w-full h-screen bg-[#0a192f] text-black'>
            <div className='flex flex-col justify-center items-center w-full h-full'>

            <div className='text-gray-400 w-full sm:w-[500px] rounded-2xl border-[#5cf300] border-3 font-bold py-3 px-2 my-2'>This application uses bootstrap, 
            react, and firebase. It takes a long clumsy url and shortens it to a sub url of this page. Value are saved and read from a firebase realtime database. To use it, enter a url you want to shorten
            and the value you want as the last digits. Select Copy URL and your new link will redirect to you the long url.</div>
                
                <div  className= 'rounded-2xl shadow-md shadow-[#040c16] bg-teal-200 w-full sm:w-[500px] h-[500px] flex flex-col justify-center items-center'>
                
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
                </Form>

                <Button className="mb-5 bg-blue-600" variant="primary" type="button" onClick={Push}>
                        Copy URL
                    </Button>

                <Button className="mb-5 bg-gray-600" variant="primary" type="button" href="https://github.com/mbunalski/portfolio/blob/main/portfolio/src/components/ShortUrl.jsx">
                    Code
                </Button>
                
                </div>
            </div>
        </div>
        
    );
}

export default ShortUrl
