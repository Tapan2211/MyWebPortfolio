import React, { useState } from "react";
import styles from './Contact.module.css';
import { sendInformation } from "../../Api/api";
import { CircularProgress, Box, TextField, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import validator from 'validator';

function Contact() {

    const [information, setInformation] = useState({
        fullname: '',
        email: '',
        mobile: '',
        address: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const validation = (info) => {
        if (info.fullname === '') {
            toast.warn('Fullname is a required field');
            return false;
        } else if (info.email === '') {
            toast.warn('Email is a required field');
            return false;
        } else if (!validator.isEmail(info.email)) {
            toast.warn('Invalid email');
            return false;
        } else if (info.mobile === '') {
            toast.warn('Mobile no is a required field');
            return false;
        } else if (info.mobile.length < 10) {
            toast.warn('Invalid mobile no');
            return false;
        } else if (info.address === '') {
            toast.warn('Address is a required field');
            return false;
        } else {
            return true;
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validation(information)) {
            return false;
        }
        setIsLoading(true);

        const infoData = {
            fullname: information.fullname,
            email: information.email,
            mobile: information.mobile,
            address: information.address
        }

        try {
            const response = await sendInformation(infoData);
            if (response) {
                setIsLoading(false);
                setInformation({
                    fullname: '',
                    email: '',
                    mobile: '',
                    address: ''
                })
                toast.success(response.message);
            } else {
                setIsLoading(false);
                toast.error('Failed to send information');
            }
        } catch (error) {
            setIsLoading(false);
            toast.error("Error: " + error.message || "An error occurred");
        }
    }

    return (
        <div id="contact" className={styles.main_div}>
            <h2>Get <span>In Touch</span></h2>
            <div className={styles.sub_div}>
                <div className={styles.content_div}>
                    <h2>Get In Touch</h2>
                    <Box component="form" onSubmit={handleSubmit}>

                        <TextField
                            style={{ width: '100%', marginBottom: '5px' }}
                            id="Fullname"
                            label="Fullname"
                            variant="outlined"
                            value={information.fullname}
                            onChange={(e) => setInformation({ ...information, fullname: e.target.value })} />

                        <TextField
                            style={{ width: '100%', marginBottom: '5px' }}
                            id="Email"
                            label="Email"
                            variant="outlined"
                            value={information.email}
                            onChange={(e) => setInformation({ ...information, email: e.target.value })} />

                        <TextField
                            style={{ width: '100%', marginBottom: '5px' }}
                            id="Number"
                            label="Mobile no"
                            variant="outlined"
                            type="number"
                            value={information.mobile}
                            onChange={(e) => setInformation({ ...information, mobile: e.target.value })} />

                        <TextField
                            style={{ width: '100%', marginBottom: '5px' }}
                            id="Address"
                            label="Address"
                            multiline rows={4}
                            variant="outlined"
                            value={information.address}
                            onChange={(e) => setInformation({ ...information, address: e.target.value })} />

                        {
                            isLoading ? (
                                <Box display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    height="100%">
                                    <CircularProgress size={20} style={{ color: '#6feeb7', marginTop: '10px' }} />
                                </Box>
                            ) : (
                                <Button
                                    style={{ justifyContent: 'start', alignItems: 'start', display: 'flex', margin: '5px' }}
                                    variant="outlined"
                                    type="submit">
                                    SEND MESSAGE
                                </Button>
                            )
                        }

                    </Box>
                    <ToastContainer position='top-right'
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme='light' />
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
    )
}

export default Contact;
