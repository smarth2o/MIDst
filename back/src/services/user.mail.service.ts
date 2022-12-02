const nodemailer = require("nodemailer");
import mailService from "./mail.service";
import  userService  from "../services/user.service";
class userMailService{
    async sendRandomNumber(email:string) {
        const randomNumber = Math.floor(Math.random() * 1000000);
        const text=`인증번호는 ${randomNumber}입니다.`;
        await mailService.sendMail(email,text);
        return randomNumber;
    }

    async sendresetPassword(email:string) {
        const randomPassword = Math.random().toString(36).slice(2);
        const updatePassword=await userService.updatePassword(email,randomPassword);
        const text=`임시 비밀번호는 ${randomPassword}입니다.`;
        await mailService.sendMail(email,text);
        return updatePassword;
    }
    

}
export default new userMailService();