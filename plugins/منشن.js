let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}//غير ڤينوم و حط اسم بوتك
let pesan = args.join` `
let oi = `*┃𝑴𝑨𝑹𝑶-𝐵𝛩𝑇┃〄* ${pesan}`
let teks = `*✦┇تـفـاعـلـوا↞┇✦* \n\n ${oi}\n\n*❮⚡️┇الـجــروب┇⚡️❯*\n`
for (let mem of participants) {
teks += `*🍁┇* @${mem.id.split('@')[0]}\n`}
teks += `*𝑴𝑨𝑹𝑶- 𝑩𝑶𝑻┇✜*\n\n*https://whatsapp.com/channel/0029Vacc9DXEAKWIWX8nQu1T*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(منشن|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
