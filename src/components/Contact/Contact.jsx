import React from "react";
import styles from './Contact.module.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

function Contact() {
    return (
        <div id="contact" className={styles.main_div}>
            <h2>Get <span>In Touch</span></h2>
            <div className={styles.sub_div}>
                <div className={styles.content_div}>
                    <h2>Get In Touch</h2>
                    <Box component="form" >
                        <TextField style={{width:'100%', margin:'5px'}} id="outlined-basic" label="Full name" variant="outlined" />
                        <TextField style={{width:'100%', margin:'5px'}} id="outlined-basic" label="Email" variant="outlined" />
                        <TextField style={{width:'100%', margin:'5px'}} id="outlined-basic" label="Mobile no" variant="outlined" />
                        <TextField style={{width:'100%', margin:'5px'}} id="filled-multiline-static" label="Address" multiline rows={4} variant="outlined" />
                        <Button style={{justifyContent:'start', alignItems:'start', display:'flex', margin:'5px'}} variant="outlined">SEND MESSAGE</Button>
                    </Box>
                </div>
                <div className={styles.content_div}>
                    <h2>My Contact Details</h2>
                    <div>
                        <p>Email</p>
                        <p>tapanghataliya22@gmail.com</p>
                    </div>
                    <div>
                        <p>Phone no</p>
                        <p>+91 90992-21192</p>
                    </div>
                    <div>
                        <p>Address</p>
                        <p>Sanjivani Society ,<br /> Thangadh, Gujarat - 363530</p>
                    </div>
                </div>
            </div>
        </div>
        // <div className={styles.main_div}>
        //     <h2>Get <span>In Touch</span></h2>
        //     <div className={styles.sub_div}>
        //         <div className={styles.content_div}>
        //             <h2>Get In Touch</h2>

        //             <Box component="form">
        //                 <TextField className={styles.textfield} id="outlined-basic" label="Full name" variant="outlined" style={{ width: '100%', margin: '5px' }} />

        //                 <TextField id="outlined-basic" label="Email" variant="outlined" style={{ width: '100%', margin: '5px' }} />

        //                 <TextField id="outlined-basic" label="Mobile no" variant="outlined" style={{ width: '100%', margin: '5px' }} />

        //                 <TextField
        //                     id="filled-multiline-static"
        //                     label="Address"
        //                     multiline
        //                     rows={4}
        //                     variant="outlined"
        //                     style={{ width: '100%', margin: '5px' }}
        //                 />


        //                 <button variant="outlined" className={styles.btn}>
        //                     SEND MESSAGE
        //                 </button>
        //             </Box>
        //         </div>
        //         <div className={styles.content_div}>
        //             <h2>My Contact Details</h2>

        //             <div>
        //                 <p>Email</p>
        //                 <p>tapanghataliya22@gmail.com</p>
        //             </div>

        //             <div>
        //                 <p>Phone no</p>
        //                 <p>+91 90992-21192</p>
        //             </div>

        //             <div>
        //                 <p>Address</p>
        //                 <p>Sanjivani Society ,<br /> Thangadh, Gujarat - 363530</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Contact;