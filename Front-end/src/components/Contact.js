import React from 'react'
//import './Contact.css';
const Contact = () => {
    return (
        <>
            <div className="main">
                <div className='contact'>
                <h1 className="py-4 text-center">Contact</h1>
                </div><br></br><br></br><br></br>
                <div className="card-a">
                    <div className="card-a-1">
                        <div className='card-heading'>
                            <h2 className='py-4 text-center'>Doctor Help Corner</h2>
                        </div>
                        <div className='card-content'>

                        <h3>
                            Start working with us today. To get added as a doctor please email your details to any of the given admin below :
                        </h3>
                        <ul style={{color : "blue"}}>
                            <li>
                                <h4>vani@gmail.com</h4>
                            </li>
                            <li>
                                <h4>jimmy@gmail.com</h4>
                            </li>
                    
                        </ul>
                           
                        </div>
                    </div>
                </div>
                <div className="card-b">
                    <div className="card-b-1">
                        <div className='card-heading'>
                            <h2 className='py-4 text-center'>Patient Help Corner</h2>
                        </div>
                        <div className='card-content'>

                        <h3>
                        If you have faced any problem please write us to the given email id :
                        </h3>
                        <ul style={{color : "blue"}}>
                            <li>
                                <h4>romit@gmail.com</h4>
                            </li>
                            <li>
                                <h4>shashikat@gmail.com</h4>
                            </li>
                    
                        </ul>
                           
                        </div>
    
                    </div> 
                </div>
                <div className="card-c">
                    <div className="card-c-1">
                        <div className='card-heading'>
                            <h2 className='py-4 text-center'>Blood Donor Help Corner</h2>
                        </div>
                        <div className='card-content'>

                        <h3>
                        If want to donate your blood please contact us on given emails :
                        </h3>
                        <ul style={{color : "blue"}}>
                            <li>
                                <h4>tulika335@gmail.com</h4>
                            </li>
                            <li>
                                <h4>amruta32@gmail.com</h4>
                            </li>
                    
                        </ul>
                           
                        </div>
    
                    </div> 
                </div>
                
            
                
            </div>
        </>
    )
}

export default Contact