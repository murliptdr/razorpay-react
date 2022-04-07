import React, { useEffect } from 'react'
import useRazorpay from 'react-razorpay';

export default function Razorpaybutton() {
        const options = {
            key: 'rzp_live_N7qljfRGy0BZzU',
            amount: 2 * 100, //  = INR 1
            name: 'murli patidar',
            description: '',
            image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
            handler: function(response) {
                alert(response.razorpay_payment_id);
            },
            prefill: {
                name: 'murli',
                contact: '9179413579',
                email: 'murli@belgiumwebnet.com'
            },
            notes: {
                address: 'maheshwar'
            },
            theme: {
                color: 'blue',
                hide_topbar: false
            }
        };
    
        const openPayModal = () => {
            var rzp1 = new window.Razorpay(options);
            rzp1.open();
        };
        useEffect(() => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.async = true;
            document.body.appendChild(script);
        }, []);
    
        return (
            <>
                <button onClick={openPayModal}>Pay with Razorpay</button>
            </>
        );
    };
