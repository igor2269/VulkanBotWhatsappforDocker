const adult = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 0.0.5
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Show Bot Details
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Show Blocked User
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Show All Chat User
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Show Connection Bot Speed
┠──────────────╼
╿
┷┯ *〈 18+ 〉*
   ╽
   ┠≽ *${prefix}hentai*
   ┃ *Desc* : Sending Random Hentai Image
   ┠──────────────╼
   ┠≽ *${prefix}nsfwtrap*
   ┃ *Desc* : Sending Random NSFW Trap Image (nsfw needed)
   ┠──────────────╼
   ┠≽ *${prefix}nsfwneko*
   ┃ *Desc* : Sending Random NSFW Neko Image (nsfw needed)
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.adult = adult
