import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import './contact.css';

function Contact() {
    const onChange = () => { };
  
    const redirectToEmail = () => {
        window.location.href = "mailto:boats@gmail.com?subject=Your%20Subject&body=Your%20body%20text";
    };
    
    const redirectToDialPad = () => {
        window.location.href = "tel:+1234567890"; 
    };

    return (
        <div id='container' className='w-full'>
            <div id="contact-main">
                <h1 id='mainhead' className='text-center text-6xl wow animate__animated animate__zoomIn animate__delay-800'  style={{visibility: "visible"}}>Make a</h1>
                <h1 id='secondhead' className='text-center text-5xl tracking-widest text-white wow animate__animated animate__zoomIn animate__delay-900'>CONTACT</h1>
            </div>
            <div id='formmain' className='flex justify-center p-4'>
                <div id='subform' className='w-11/12  pt-3' style={{backgroundColor:'rgba(0,0,0,0.4)'}}>
                    <div id="content" style={{ opacity: 1 ,marginBottom:'-1%'}}>
                        <h1 id='messagehead' className='text-white text-lg md:text-lg lg:text-xl tracking-widest pl-8'>SEND US MESSAGE</h1>
                        <div className='flex flex-col md:flex-row lg:flex-row text-white m-8'>
                            <div className='w-full md:w-9/12 lg:w-9/12 flex-col'>
                                <div className='flex flex-col md:flex-row lg:flex-row text-white'>
                                    <div className='w-full md:w-1/2 lg:w-1/2'>
                                        <input type="text" placeholder='Your Name' className="p-3 w-11/12 mb-8 text-white  rounded-none h-auto bg-transparent" required style={{border:'1px solid #5e5e5c'}} />
                                        <input type="text" placeholder='Your Email' className="p-3 w-11/12 mb-8 text-white border border-solid  rounded-none h-auto bg-transparent" required style={{border:'1px solid #5e5e5c'}}  />
                                        <input type="text" placeholder='Your Phone Number' className="p-3 w-11/12 mb-8 text-white border border-solid border-opacity-30 rounded-none h-auto bg-transparent" required style={{border:'1px solid #5e5e5c'}} />
                                    </div>
                                    <div className='w-full md:w-1/2 lg:w-1/2'>
                                        <textarea placeholder='Your Message' rows="7" className="p-5 w-11/12 mb-8 text-white border border-solid border-opacity-30 rounded-none h-auto bg-transparent" style={{border:'1px solid #5e5e5c'}}></textarea>
                                    </div>
                                </div>
                                <div>
                                    <ReCAPTCHA
                                        sitekey="6Ldn0IIpAAAAAGg7y9wDVGFdXaBNAK8NyYuyA2Pl"
                                        onChange={onChange}
                                        style={{ opacity: '1' }}
                                    />
                                </div>
                                <div className='flex justify-center md:justify-start lg:justify-start'>
                                    <button id='sendbtn' className="border border-2 border-neutral-500 text-white text-md mt-8 p-1 transition duration-300 ease-in-out hover:bg-orange-500 hover:border-orange-500 tracking-widest" style={{ marginBottom: '5%'}}>Submit Message</button>
                                </div>
                            </div>
                            <div className='w-full md:w-3/12 lg:w-3/12'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125922.77155669403!2d76.25970248363721!3d9.501196371668874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0884f1aa296b61%3A0xb84764552c41f85a!2sAlappuzha%2C%20Kerala!5e0!3m2!1sen!2sin!4v1709117177470!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{ width: "100%", height: "450px", border: "0" }}></iframe>
                            </div>
                        </div>
                        <hr style={{border:'1px solid #5e5e5c'}}/>
                        <div className='flex justify-center text-white'>
                            <div id="icons" className='flex w-1/12 justify-around items-center mb-4 mt-2'>
                                <div id="email" className="bg-transparent hover:bg-orange-500 transition duration-300 " style={{borderRadius:'60%'}}>
                                    <button onClick={redirectToEmail}><i className="fa-solid fa-envelope text-2xl m-2" style={{color:'#b1b5b2'}}></i></button>
                                </div>
                                <div id="email" className="bg-transparent hover:bg-orange-500 transition duration-300" style={{borderRadius:'60%'}}>
                                    <button onClick={redirectToDialPad}><i className="fa-solid fa-phone text-2xl m-2" style={{color:'#b1b5b2'}}></i></button>
                                </div>
                                <div id="email" className="bg-transparent hover:bg-orange-500 transition duration-300" style={{borderRadius:'60%'}}>
                                    <button onClick={redirectToDialPad}><i className="fa-solid fa-message text-2xl m-2 " style={{color:'#b1b5b2'}}></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
