import fs from 'fs'
let timeout = 20000
let poin = 100

let handler = async (m, { conn, usedPrefix }) => {
conn.tekateki = conn.tekateki ? conn.tekateki : {}
let id = m.chat
if (id in conn.tekateki) {
conn.reply(m.chat, '〄│ لم يتم الاجابة علي السؤال بعد│❌ ❯', conn.tekateki[id][0])
throw false
}

  let tekateki = await (await fetch('https://raw.githubusercontent.com/Afghhjjkoo/GURU-BOT/main/src/Kt.json')).json()
  let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = `ⷮ ${json.question}
❐↞┇الـوقـت⏳ ${(timeout / 1000).toFixed(2)} ثــانــيــه
❐↞┇الـجـائـزة💰↞ ${poin} نقاط┇
> الــمــطـور:𝜜𝑴𝑹𝑶 𝑲𝑯𝜜𝑳𝑰𝑫🇾🇪🫀🇵🇸
『𝑮𝑶𝑲𝑼 𝑩𝑶𝑻』
`.trim()
conn.tekateki[id] = [
await conn.reply(m.chat, caption, m), json, 
poin,
setTimeout(async () => {
if (conn.tekateki[id]) await conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n ❐↞┇الاجـابـة✅↞ ${json.response}┇`, conn.tekateki[id][0])
delete conn.tekateki[id]
}, timeout)]}
handler.help = ['Goku Bot']
handler.tags = ['Goku Bot']
handler.command = /^(كت)$/i
export default handler
