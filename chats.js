chats/{chatId}/messages/{msgId}
  text
  senderId
  createdAt

export function getChatId(a, b) {
  return [a, b].sort().join("_");
}
