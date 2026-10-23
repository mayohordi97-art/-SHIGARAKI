const fs = require('fs')
const chalk = require('chalk')

//auto functioner
global.autoTyping = true
global.autoRecord = true

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owner v card
global.owner = ['242061032249']
global.ownername = '† SHIGARAKI †'
global.ytname = 'YT: † SHIGARAKI †'
global.socialm = 'GitHub: † SHIGARAKI †'
global.location = 'Congo Brazzaville'
global.ownernumber = ['242061032249']
global.ownernomer = '242061032249'
global.ownerTag = '† SHIGARAKI †'
global.premium = ['242061032249']

global.botname = 'XSHIKA MD'
global.linkz = 'https://whatsapp.com/channel/0029VbE42My0GXbTkAIS9Ie'
global.websitex = 'https://whatsapp.com/channel/0029VbE42My0GXbTkAIS9Ie'
global.botscript = 'https://whatsapp.com/channel/0029VbE42My0GXbTkAIS9Ie'
global.packname = 'XSHIKA'
global.author = '† SHIGARAKI †'
global.wm = 'XSHIKA MD 👑'
global.themeemoji = '⚔️'
global.language = 'fr'

// Other
global.sessionName = 'session'
global.prefa = ['','.',',','!','#','&']
global.sp = ''

global.mess = {
    success: '✅ Fait avec succès - XSHIKA',
    admin: '⛔ Cette commande est réservée aux admins !',
    botAdmin: '⛔ Je dois être admin pour faire ça !',
    premime: '⛔ Fonction premium, contacte † SHIGARAKI † !',
    owner: '⛔ Réservé à mon créateur † SHIGARAKI † !',
    group: '⛔ Cette commande marche que dans les groupes !',
    private: '⛔ Cette commande marche qu’en privé !',
    bot: '⛔ Réservé au bot !',
    wait: '⏳ Patiente... XSHIKA travaille...',
    linkm: 'Où est le lien ?',
    endLimit: 'Ta limite journalière est finie, elle se réinitialise toutes les 12h',
    nsfw: 'NSFW désactivé, contacte le proprio'
}

global.limitawal = {
    premium: "Infinity",
    free: 25
}

// FIX pour Render - évite le crash si image existe pas
try {
    global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg")
} catch { global.thum = fs.readFileSync("./XeonMedia/cheems.jpg") || Buffer.alloc(0) }
try {
    global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg")
} catch { global.log0 = global.thum }
try {
    global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg")
} catch { global.err4r = global.thum }
try {
    global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg")
} catch { global.thumb = global.thum }

global.flaming = 'https://www6.flamingtext.com/net-fu/image64.php?script=flaming-logo&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/image64.php?script=flaming-logo&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/image64.php?script=flaming-logo&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/image64.php?script=flaming-logo&fontsize=100&text='

//module api
module.exports = {
api:{
    removebg: ['zNKnayDFH1nugtA81fkPMzXn','5Cyy'],
    unscreen: ['N6J4Bjyh2V4eqhAPTWYTtFER','fcKJ'],
    upscaling: '1255173112',
    imgsuper: ['198f69d4b2msh0021bb0690669a6p1f'],
    speechtotext: ['897beebb3ac74ceeaa6f8d0903b']
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update '${__filename}'`))
    delete require.cache[file]
    require(file)
})