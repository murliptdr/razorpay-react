import React, { useEffect } from 'react'
import useRazorpay from 'react-razorpay';
import { useParams } from 'react-router-dom';

export default function Razorpaybutton() {
    const {pay_amount} = useParams();
        const options = {
            key: '',
            amount: pay_amount * 100, //  = INR 1
            name: 'raj malya',
            description: '',
            image: 'https://cdn.razorpay.com/logos/7K3b6d18wHwKzL_medium.png',
            handler: function(response) {
                alert(response.razorpay_payment_id);
            },
            prefill: {
                name: 'raj',
                contact: '9867897869',
                email: 'raj@gmail.com'
            },
            notes: {
                address: 'jaipur'
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
        useEffect(async() => {
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
