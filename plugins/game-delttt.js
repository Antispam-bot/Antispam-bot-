let handler = async(m, { conn, text }) => {
let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return conn.reply(m.chat,`https://github.com/Khalid-official  *[❗𝐈𝐍𝐅𝐎❗] You are not in a TicTacToe game 🎮* `, m)
delete conn.game[room.id]
await conn.reply(m.chat, `https://github.com/Khalid-official ✅ *[❗𝐈𝐍𝐅𝐎❗] tictactoe session restarted 🎮*`, m)
}
handler.help = ['delttt']
handler.tags = ['game']
handler.command = ['delttc', 'delttt', 'delxo']

export default handler