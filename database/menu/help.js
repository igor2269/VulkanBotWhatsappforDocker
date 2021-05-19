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
┠≽ *${prefix}groupmenu*
┠≽ *${prefix}xpmenu*
┠≽ *${prefix}limitmenu*
┠≽ *${prefix}ownermenu *
┠≽ *${prefix}othermenu *
╿ *${ownerName}*,
╰╼≽ *Developer © ${botName}`;
};
exports.help = help;
