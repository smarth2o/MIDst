const nodemailer = require("nodemailer");
 
class userMailService{
    async sendMail(email:string, text:string) {
        const User = process.env.MAIL_EMAIL || null;
        const Pass = process.env.MAIL_PASSWORD || null;
    
        const transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: User,
            pass: Pass,
        },
        });

        const message = {
        from: User,
        to: email,
        subject: "MiDst",
        text: text,
        };
        
        transport.sendMail(message, (err, info) => {
        if (err) {
            console.error("error", err);
            return;
        }
        
        console.log("ok", info);
        });
    }

}
export default new userMailService();