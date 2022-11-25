//로그인, 회원가입 관련
//로그인, 회원가입 관련
import { Router, Response, Request, NextFunction } from "express";
import { userService } from "../services/userService";
import { loginRequired } from "../middlewares/authMiddleware";
const userRouter = Router();
//회원가입
userRouter.post(
  "/register",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const confirmpassword=req.body.confirmpassword;
      const name=req.body.name;

      if (!req.body.email ||!req.body.password ||!req.body.confirmpassword|| !req.body.name) {
        const message: string = "데이터가 없습니다.";
        throw new Error(message);
      }
      const registerUser = await userService.register(email, password,confirmpassword,name );
      res.status(201).send(registerUser);
    } catch (error) {
      next(error);
    }
  }
);

//로그인
userRouter.post(
  "/login",
  async (req:Request,res: Response, next: NextFunction)=>{
    try{
      const email = req.body.email;
      const password = req.body.password;
      const user = await userService.userLogin(email, password);
      res.status(200).send(user);
    }
    catch (error) {
      next(error);
    }
  }
);

userRouter.get(
  "/currentUser",
  loginRequired,
  async (req:Request,res: Response, next: NextFunction) => {
  try {
    const userId :any=req.headers["currentUserId"];
    console.log(userId);
    const currentUser = await userService.findCurrentUser(userId);

    res.status(200).json(currentUser);
  } catch (error) {
    next(error);
  }
});

//정보수정
userRouter.put(
  "/updateuser",
  loginRequired,
  async (req:Request,res: Response, next: NextFunction)=>{
    try {
      const userId :any=req.headers["currentUserId"];
      const name = req.body.name;
      const updateUser = await userService.updateUser(
        userId,
        name,
      );
      res.status(200).json(updateUser);

    }
    catch (error) {
      next(error);
    }
  }
);


//탈퇴
userRouter.put(
  "/withdrawal/:id",
  loginRequired,
  async (req:Request,res: Response, next: NextFunction)=>{
    try {
      const withdrawal = req.body.withdrawal ?? null;
      const userId :any=req.headers["currentUserId"];
      const id = req.params.id;
      console.log(id,"아이디다");
  
      const withdrawalStatus = await userService.userWithdrawal(
        userId,
        id,
        withdrawal,
      );
      res.status(200).json(withdrawalStatus);

    }
    catch (error) {
      next(error);
    }
  }
);


export { userRouter };
