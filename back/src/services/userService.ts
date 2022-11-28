//userService
const { v1: uuidv4 } = require('uuid');
import bcrypt from "bcrypt";
import { userController } from "../controllers/userController";
import jwt from "jsonwebtoken";
import dotenv, { config } from "dotenv";
dotenv.config();

class userService {
  static async register(email: string, password: string, confirmpassword:string, name: string) {
    const user = await userController.findByEmail(email);

    if (user.length) {
      if (user) {
        if (user[0].withdrawal == 0) {
          const errorMessage:string="이미 사용중인 email입니다.";
          return errorMessage;
        }
      }
    }
    if (password !== confirmpassword) {
      const errorMessage: string="비밀번호가 일치하지 않습니다";
      return errorMessage;
    }

    const userId = uuidv4();
    const hashpassword = await bcrypt.hash(password, 10);
    const newUser = await userController.registerUser(
      userId,
      email,
      hashpassword,
      name
    );
    await userController.createToken(userId);
    return newUser;
  }

  //로그인
  static async userLogin( email:string, password:string ) {
    const data = await userController.findByEmail(email);
    const user = data[0];

    //탈퇴회원 확인
    if (data.length) {
      if (data) {
        if (user.withdrawal == 1) {
          const errorMessage: string="존재하지 않는 계정입니다.";
          return errorMessage;
        }
      }
      const userpassword = user.password;
      const isCorrect = await bcrypt.compare(password, userpassword);

      //비밀번호 일치 확인
      if(!isCorrect){
        const errorMessage:string="비밀번호가 일치하지 않습니다.";
        return errorMessage;
      }

      //토큰
      //1. Access Token(JWT)에 권한 인증을 위한 정보를 Payload에 넣음
      //2. 

      const secretKey = process.env.JWT_SECRET_KEY;
      const accessToken:string=jwt.sign({ userId: user.userId }, secretKey, {expiresIn: "3h",});
     //const refreshToken:string=jwt.sign({ userId: user.userId }, secretKey, {expiresIn: "14d",});
      const userId = user.userId;
      const name = user.name;
      //await userController.tokenUpdate(userId, refreshToken);

      const loginUser = {
        userId,
        email,
        name,
        accessToken,
        //refreshToken,
        errorMessage: null,
      };
      return loginUser;
  
    }

  }
  static async findCurrentUser(userId:string ) {
    const userData = await userController.findByUserId(userId);

    return userData;
  }

  static async updateUser(userId:string,name:string){
    const updateData=await userController.updateUser(userId,name);
    return updateData;
  }

  //회원탈퇴
  static async userWithdrawal(userId:string, id:string,withdrawal:number){
    if(userId!==id){
      const errorMessage:String="UserId가 틀립니다.";
      return errorMessage;
    }
    if(withdrawal==1){
      let userData=await userController.findByUserId(userId);
      let user=userData[0];
      console.log(user);
      const updatewithdrawal=withdrawal;
      user=await userController.updateWithdrawal(userId,updatewithdrawal);
    }
  }

}

export { userService };
