import { RequestHandler } from 'express';
import hmacSHA512 from 'crypto-js/hmac-sha512';

export const sentMessage: RequestHandler = async (req, res) => {
  const { payload, event } = req.body;

  if (event === 'endpoint.url_validation') {
    const { plainToken } = payload;
    const encryptedToken = hmacSHA512(
      plainToken,
      process.env.ZOOM_SECRET || '',
    ).toString();

    return res.json({ plainToken, encryptedToken });
  }

  const message = payload.object.chat_message;

  console.log(message.sender_name, message.message_content);

  res.json({});
};
