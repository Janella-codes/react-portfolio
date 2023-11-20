'use server';

import { Resend } from 'resend';
import { getErrorMessage, validateString } from "@/lib/utils";
import  ContactFormEmail from "@/email/contact-form-email";
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get('senderEmail');
   const message = formData.get('message');
    
    // simple server-side validation
    if (!validateString(senderEmail, 500)) {
        return {
            error: 'Invalid sender email',
        };
    };

    if (!validateString(message, 5000)) {
        return {
            error: 'Invalid message',
        };
}
let data;
try {
    data = await resend.emails.send({
        from: 'Contact React portfolio<onboarding@resend.dev>',
        to: 'janellavos486@gmail.com',
        subject: 'New Message from a job recruiter',
        reply_to: senderEmail as string,
        //text: message as string,
        react: React.createElement(ContactFormEmail, { 
            senderEmail: senderEmail as string, 
            message: message as string 
        })
        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }

    return {
        data,
    };  
};