let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let videoUrl = 'https://telegra.ph/file/349224fb248966019f7e6.mp4'
  let { name } = global.db.data.users[who]
  m.react('⚙️')
let str = `                  *⎔⋅• ┏╼╃✦⊰⟦﷽⟧⊱✦╄╾┓ •⋅⎔*
*🐉✬⃝╿↵ مرحــبـا ⌊${name}⌉*
── • ◈ • ──
*🐉✬⃝╿حط قبل كل امر : ⌊ . ⌉*
*🐉✬⃝╿مـطـوري : +967774318278*
*🐉✬⃝╿الرابط:https://tiny.one/2e77c2bp*
*🐉✬⃝╿الـبــوت لـجــروبـات بـس*
*· • • ━ ╃✦⊰ ⌝🔰⌞ ⊱✦╄ ━ • • ·*
*⌝ ╎قــســم الادوات╎⌞*
*━─╾╃⊱✦⊰⚙️⊱✦⊰╄╼─━*❐╎®️❯ .لرابط⌉
❐╎©️❯ .باركود⌉
❐╎🗨❯ .ترجمه⌉
❐╎💭❯ .فضح⌉
❐╎📭❯ .تفريغ⌉
❐╎📇❯ .فحص⌉
❐╎🔂❯ .تكرار⌉
❐╎📬❯ .بريد⌉
❐╎✂️❯ .قص⌉
❐╎📟❯ .احسب⌉
❐╎📷❯ .جوده⌉
❐╎📩❯ .واتس⌉
❐╎🪧❯ .مطلوب⌉
❐╎📌❯ .انسخ⌉
❐╎⚙️❯ .بينغ⌉
❐╎🔢❯ .رقم⌉
*✦═════ •『🔰』 ═════✦*
> و بكذا تخلص قائمة الادوات استمتع بالبوت. 
> ما تنساش تصلي على النبي ﷺ. 
> قـنـات الـبـوت:https://whatsapp.com/channel/0029Vai5lsFCRs1tg6jJ152f
*⎔⋅• ┗╼╃✦⊰⟦𝑮𝒐𝒌𝒖_𝒃𝒐𝒕⟧⊱✦╄╾┛ •⋅⎔*
`
  conn.sendMessage(m.chat, {
           video: { url: videoUrl }, caption: str,
     mentions: [m.sender,global.conn.user.jid],
     gifPlayback: true,gifAttribution: 0
       }, { quoted: m });
   };

handler.help = ['main']
handler.tags = ['group']
handler.command = ['الادوات']

export default handler
