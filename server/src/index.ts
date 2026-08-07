import express from 'express';
import blogRouter from './routes/blog';
import summarizeRouter from './routes/summarize';
import translateRouter from './routes/translate';
import captionRouter from './routes/caption';
import agentRouter from './routes/agent';
import { requireApiKey } from './middleware/auth';
import { errorHandler } from './middleware/errorHandler';

const app = express();
app.use(express.json());
app.use(requireApiKey);

app.use('/api/blog', blogRouter);
app.use('/api/summarize', summarizeRouter);
app.use('/api/translate', translateRouter);
app.use('/api/caption', captionRouter);
app.use('/api/agent', agentRouter);

app.use(errorHandler);

const port = process.env.PORT ?? 4000;
app.listen(port, () => {
  console.log(`content-studio server listening on ${port}`);
});
