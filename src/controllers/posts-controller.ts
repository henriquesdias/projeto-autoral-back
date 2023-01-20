import { Request, Response } from "express";

import { STATUS_CODE } from "../helpers/status-code.js";
import { postsService } from "../services/posts-services.js";

export async function getPosts(req: Request, res: Response) {
  try {
    const posts = await postsService.getPosts();
    res.status(STATUS_CODE.OK).send(posts);
  } catch (error) {
    res.sendStatus(STATUS_CODE.BAD_REQUEST);
  }
}