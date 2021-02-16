const stickermaker = (prefix, botName, ownerName) => {
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
┷┯ *〈 STICKER MAKER 〉*
   ╽
   ┠≽ *${prefix}sticker*
   ┃ *Desc* : Fazer sticker de uma imagem
   ┠──────────────╼
   ┠≽ *${prefix}stickergif*
   ┃ *Desc* : Fazer sticker de um video
   ┠──────────────╼
   ┠≽ *${prefix}ttp DESATIVADO*
   ┃ *Desc* : transformar um texto em sticker, atualmente desativado
   ╿ *${ownerName}*,
   ╰╼≽ *Developer © ${botName}`
}
exports.stickermaker = stickermaker
