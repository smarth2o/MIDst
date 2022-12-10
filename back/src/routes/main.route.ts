//검색 관련
import { Router, Response, Request, NextFunction } from "express";
import mainService from "../services/main.service";
import { loginRequired } from "../middlewares/authMiddleware";

const mainRouter = Router();

mainRouter.get(
  "/showSearch",
  //loginRequired,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const searchword = req.body.searchword;
      const title = req.body.title || null;
      const name = req.body.name || null;
      console.log(searchword);
      const searchSentence = await mainService.showSearch(
        searchword,
        title,
        name
      );
      const result = [searchword, searchSentence];
      res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
);

mainRouter.post(
  "/saveSearch",
  loginRequired,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: any = req.headers["currentUserId"];
      const searchword = req.body.searchword;
      const searchSentence = req.body.searchSentence;

      const saveSearch = await mainService.saveSearch(
        userId,
        searchword,
        searchSentence
      );
      res.status(200).json(saveSearch);
    } catch (error) {
      next(error);
    }
  }
);
//번역
mainRouter.post(
  "/translate",
  async (req: Request, res: Response, next: NextFunction) => {
    var api_url = "https://openapi.naver.com/v1/papago/n2mt";
    var clientId = process.env.CLIENTID;
    var clientSecret = process.env.CLIENTSECRET;
    var translation = req.body.searchSentence;
    var request = require("request");
    var options = {
      url: api_url,
      form: { source: "en", target: "ko", text: translation },
      headers: {
        "X-Naver-Client-Id": clientId,
        "X-Naver-Client-Secret": clientSecret,
      },
    };
    request.post(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.end(JSON.parse(body)["message"]["result"]["translatedText"]);
        console.log(
          typeof JSON.parse(body)["message"]["result"]["translatedText"]
        );
        return JSON.parse(body)["message"]["result"]["translatedText"];
      } else {
        res.status(response.statusCode).end();
        console.log("error = " + response.statusCode);
      }
    });
  }
);

mainRouter.get(
  "/getSearch",
  loginRequired,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: any = req.headers["currentUserId"];
      const findSearch = await mainService.findSearch(userId);
      res.status(200).json(findSearch);
    } catch (error) {
      next(error);
    }
  }
);
mainRouter.get(
  "/getCountSearch",
  loginRequired,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: any = req.headers["currentUserId"];
      const countSearch = await mainService.countSearch(userId);
      res.status(200).json(countSearch);
    } catch (error) {
      next(error);
    }
  }
);

mainRouter.put(
  "/deleteSearch",
  loginRequired,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      //const userId :any=req.headers["currentUserId"];
      const searchId = req.body.searchId;
      const deleteSearch = await mainService.deleteSearch(searchId);
      res.status(200).json(deleteSearch);
    } catch (error) {
      next(error);
    }
  }
);

export default mainRouter;
