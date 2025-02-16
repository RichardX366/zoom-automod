import { RequestHandler } from 'express';

export const sentMessage: RequestHandler = async (req, res) => {
  const { payload } = req.body;

  const message = payload?.object?.chat_message;

  if (!message) {
    return res.json({});
  }

  console.log(message.sender_name, message.message_content);

  res.json({});
};
