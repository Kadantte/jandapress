import express from "express";
import { searchHentaifox } from "../controller/hentaifox/hentaifoxSearch";
import { getHentaifox } from "../controller/hentaifox/hentaifoxGet";
import { getPururin } from "../controller/pururin/pururinGet";
import { searchPururin } from "../controller/pururin/pururinSearch";
import { searchHentai2read } from "../controller/hentai2read/hentai2readSearch";
import { getHentai2read } from "../controller/hentai2read/hentai2readGet";
import { getSimplyhentai } from "../controller/simply-hentai/simply-hentaiGet";
import { getNhentai } from "../controller/nhentai/nhentaiGet";
import { searchNhentai } from "../controller/nhentai/nhentaiSearch";
import { slow, limiter } from "../utils/limit-options";

function scrapeRoutes() {
  const router = express.Router();
  router.get("/hentaifox/search", slow, limiter, searchHentaifox);
  router.get("/hentaifox/get", slow, limiter, getHentaifox);
  router.get("/pururin/get", slow, limiter, getPururin);
  router.get("/pururin/search", slow, limiter, searchPururin);
  router.get("/hentai2read/search", slow, limiter, searchHentai2read);
  router.get("/hentai2read/get", slow, limiter, getHentai2read);
  router.get("/simply-hentai/get", slow, limiter, getSimplyhentai);
  router.get("/nhentai/get", slow, limiter, getNhentai);
  router.get("/nhentai/search", slow, limiter, searchNhentai);

  return router;
}

export default scrapeRoutes;