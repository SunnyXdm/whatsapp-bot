// const qrcode = require("qrcode-terminal");
import qrcode from "qrcode-terminal";
import wawebjs from "whatsapp-web.js";
import { getStream, isValidUrl } from "./utils.mjs";
const { Client, LocalAuth, MessageMedia } = wawebjs;
const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox"],
    executablePath: "/usr/bin/google-chrome",
  },
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", async (message) => {
  if (message.body === "!ping") {
    return client.sendMessage(message.from, "pong");
  }
  if (isValidUrl(message.body) && message.body.includes("instagram")) {
    try {
      const {
        data: { url },
      } = await getStream(message.body);
      const media = await MessageMedia.fromUrl(url);
      message.reply(media);
    } catch (err) {
      console.log("error on message", message.body);
    }
  }
});

client.initialize();
