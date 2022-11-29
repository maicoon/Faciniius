// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import { getProdutcBr } from "../../../lib/produtosBr";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const products = getProdutcBr()

  return res.status(200).json({
    data: products
  })
}
