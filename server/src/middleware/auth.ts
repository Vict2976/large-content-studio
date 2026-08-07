import type { NextFunction, Request, Response } from 'express';

export function requireApiKey(req: Request, res: Response, next: NextFunction): void {
  const key = req.header('x-api-key');
  if (!key) {
    res.status(401).json({ error: 'Missing API key' });
    return;
  }
  next();
}
