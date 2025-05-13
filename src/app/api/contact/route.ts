import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
const rateLimitWindowMS = 15 * 60 * 1000; // 15 minutes
const maxRequestsPerWindow = 2;
const ipRequestCounts: { [key: string]: { count: number; timestamp: number } } = {};

async function handler(req: NextRequest) {
        const ip = req.headers.get('x-forwarded-for') || req.ip || 'unknown';
        console.log(ip)
        const currentTime = Date.now();
    
        if (!ipRequestCounts[ip]) {
            ipRequestCounts[ip] = { count: 1, timestamp: currentTime };
        } else {
            const timeSinceFirstRequest = currentTime - ipRequestCounts[ip].timestamp;
            if (timeSinceFirstRequest < rateLimitWindowMS) {
                ipRequestCounts[ip].count += 1;
                if (ipRequestCounts[ip].count > maxRequestsPerWindow) {
                    return NextResponse.json({ status: 429, body: "Too many requests. Please try again later." });
                }
            } else {
                ipRequestCounts[ip] = { count: 1, timestamp: currentTime };
            }
        }
    
    
    const formData = await req.formData();
    const name = formData.get('name');
    const email = formData.get('email')?.toString();
    const phone = formData.get('phone')?.toString();
    const subject = formData.get('subject')
    const message = formData.get('message');

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' });
        }

        try {
            // Create a transporter object using the default SMTP transport
            const transporter = nodemailer.createTransport({
                    service: "Gmail",
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true,
                    auth: {
                      user: process.env.WEBSITE_MAIL || "",
                      pass: process.env.WEBSITE_PASS || "",
                    },
                  });
            

            // Send mail with defined transport object
            const info = await transporter.sendMail({
                from: email, // sender address
                to: 'info@hextasphere.com', // list of receivers
                subject: `New inquiry from ${name} - ${subject}`, // Subject line
                text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`, // plain text body
            });

            console.log('Message sent: %s', info.messageId);

            return NextResponse.json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            return NextResponse.json({ error: 'Error sending email' });
        }
}

export {handler as POST}