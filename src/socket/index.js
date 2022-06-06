const { v4: uuidv4 } = require("uuid");
const chatModel = require("../models/chat.model");

module.exports = (io, socket) => {
  socket.on("join-room", (id) => {
    try {
      socket.join(id);
    } catch (error) {
      console.log(error);
    }
  });
  socket.on("send-message", async (data) => {
    try {
      await chatModel.store({
        id: uuidv4(),
        ...data,
        date: new Date(),
        chatType: "text",
      });
      const listChat = await chatModel.list(data.sender, data.receiver);
      io.to(data.receiver).emit("send-message-response", listChat.rows);
    } catch (error) {
      console.log(error);
    }
  });
  socket.on("chat-history", async (data) => {
    try {
      const listChat = await chatModel.list(data.sender, data.receiver);
      io.to(data.sender).emit("send-message-response", listChat.rows);
    } catch (error) {
      console.log(error);
    }
  });
};
