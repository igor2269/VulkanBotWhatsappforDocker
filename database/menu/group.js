const group = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ╿
┯┷
┷┯ *〈 GROUP 〉*
   ╽
   ┠≽ *${prefix}opengc*
   ┃ *Desc* : abre o grupo para conversas
   ┠──────────────╼
   ┠≽ *${prefix}closegc*
   ┃ *Desc* : fecha o grupo para conversas
   ┠──────────────╼
   ┠≽ *${prefix}promover* <@tag>
   ┃ *Desc* : Promove a ADM
   ┠──────────────╼
   ┠≽ *${prefix}rebaixar* <@tag>
   ┃ *Desc* : Rebaixa ADM's
   ┠──────────────╼
   ┠≽ *${prefix}tagall*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}tagall2*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}tagall3*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}tagall4*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}tagall5*
   ┃ *Desc* : Mention All Members
   ┠──────────────╼
   ┠≽ *${prefix}add* <12542123926>
   ┃ *Desc* : Add Members
   ┠──────────────╼
   ┠≽ *${prefix}kick* <@tag>
   ┃ *Desc* : Kick Member Group
   ┠──────────────╼
   ┠≽ *${prefix}listadmins*
   ┃ *Desc* : Show List Group Admins
   ┠──────────────╼
   ┠≽ *${prefix}linkgroup*
   ┃ *Desc* : Show Group Link
   ┠──────────────╼
   ┠≽ *${prefix}leave*
   ┃ *Desc* : Tell the Bot to Leave the Group
   ┠──────────────╼
   ┠≽ *${prefix}welcome* <1/0>
   ┃ *Desc* : Activating / Deactivating the Welcome Feature
   ┠──────────────╼
   ┠≽ *${prefix}nsfw* <1/0>
   ┃ *Desc* : Activating / Deactivating the NSFW Feature
   ┠──────────────╼
   ┠≽ *${prefix}delete*
   ┃ *Desc* : Delete Bot Message
   ┠──────────────╼
   ┠≽ *${prefix}simih* <1/0>
   ┃ *Desc* : Activating / Deactivating the Simih Feature
   ┠──────────────╼
   ┠≽ *${prefix}tagme*
   ┃ *Desc* : Mention You
   ┠──────────────╼
   ┠≽ *${prefix}ownergroup*
   ┃ *Desc* : Shows who the Group Owner is
   ┠──────────────╼
   ┠≽ *${prefix}antilinkgroup* <1/0>
   ┃ *Desc* : Activating / Deactivating the Anti Link Feature
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.group = group
