const help = (pushname, prefix, botName, ownerName, reqXp, uangku) => {
   return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 USER INFO 〉*
╽
┠≽ *Name* : ${pushname}
┠≽ *XP* : ${reqXp}
┠≽ *Money* : ${uangku}
┠≽ *Registered : ✔️
╿
┯┷ *〈 BOT INFO 〉*
╽
┠≽ *Prefix* : 「  ${prefix}  」
┠≽ *Creator* : ${ownerName}
┠≽ *Version* : 0.0.1
╽
┠≽ *${prefix}info DESATIVADO*
┃ *Desc* : Show Bot Details
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Show Blocked User
┠──────────────╼
┠≽ *${prefix}chatlist DESATIVADO*
┃ *Desc* : Show All Chat User
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Show Connection Bot Speed
┠──────────────╼
╿
┷┯ *〈 MENU 〉*
┠≽ *${prefix}logomakermenu DESATIVADO*
┠≽ *${prefix}imagemakermenu DESATIVADO*
┠≽ *${prefix}stickermakermenu*
┠≽ *${prefix}searchmenu DESATIVADO*
┠≽ *${prefix}educationmenu DESATIVADO*
┠≽ *${prefix}kerangmenu DESATIVADO*
┠≽ *${prefix}downloadermenu DESATIVADO*
┠≽ *${prefix}mememenu DESATIVADO*
┠≽ *${prefix}groupmenu*
┠≽ *${prefix}soundmenu DESATIVADO*
┠≽ *${prefix}musicmenu*
┠≽ *${prefix}islammenu*
┠≽ *${prefix}stalkmenu DESATIVADO*
┠≽ *${prefix}wibumenu*
┠≽ *${prefix}18+menu DESATIVADO*
┠≽ *${prefix}funmenu DESATIVADO*
┠≽ *${prefix}todmenu DESATIVADO*
┠≽ *${prefix}informationmenu DESATIVADO*
┠≽ *${prefix}stayonscreenmenu DESATIVADO*
┠≽ *${prefix}xpmenu*
┠≽ *${prefix}limitmenu*
┠≽ *${prefix}ownermenu SOMENTE COM PERMISSAO PREVIA*
┠≽ *${prefix}othermenu DESATIVADO*
┠≽ *${prefix}desenvolvedor em caso de duvidas ou problemas!*
╿ *${ownerName}*,
╰╼≽ *Developer © ${botName}`
}
exports.help = help
