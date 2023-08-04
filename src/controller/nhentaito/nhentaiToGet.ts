import { scrapeContent } from "../../scraper/nhentaito/nhentaiToGetController";
import { logger } from "../../utils/logger";
import { isNumeric, maybeError } from "../../utils/modifier";
import c from "../../utils/options";
import { Request, Response } from "express";

export async function getNhentaiTo(req: Request, res: Response) {
  try {
    const book = req.query.book as string;
    if (!book) throw Error("Parameter book is required");
    if (!isNumeric(book)) throw Error("Parameter book must be number");

    /**
     * @api {get} /nhentaito/get?book=:book Get nhentai.to
     * @apiName Get nhentai.to
     * @apiGroup nhentai.to
     * @apiDescription Get a doujinshi on nhentai.to based on id
     * 
     * @apiParam {Number} book Book ID
     * 
     * @apiSuccessExample {json} Success-Response:
     *   HTTP/1.1 200 OK
     *   HTTP/1.1 400 Bad Request
     * 
     * @apiExample {curl} curl
     * curl -i https://janda.sinkaroid.org/nhentaito/get?book=272
     * 
     * @apiExample {js} JS/TS
     * import axios from "axios"
     * 
     * axios.get("https://janda.sinkaroid.org/nhentaito/get?book=272")
     * .then(res => console.log(res.data))
     * .catch(err => console.error(err))
     * 
     * @apiExample {python} Python
     * import aiohttp
     * async with aiohttp.ClientSession() as session:
     *  async with session.get("https://janda.sinkaroid.org/nhentaito/get?book=272") as resp:
     *    print(await resp.json())
     */
    
    const url = `${c.NHENTAI_TO}/g/${book}`;
    const data = await scrapeContent(url);
    logger.info({
      path: req.path,
      query: req.query,
      method: req.method,
      ip: req.ip,
      useragent: req.get("User-Agent")
    });
    return res.json(data);
  } catch (err) {
    const e = err as Error;
    res.status(400).json(maybeError(false, e.message));
  }
}
