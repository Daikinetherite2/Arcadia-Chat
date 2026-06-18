chats/{chatId}
  members: [uid1, uid2]
  lastMessage

export function getChatId(a, b) {
  return [a, b].sort().join("_");
}
