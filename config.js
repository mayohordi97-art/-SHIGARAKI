const fs = require('fs')
const chalk = require('chalk')

//auto functioner
global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoRecord = true //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['242061032249']
global.ownername = "Shigaraki"
global.ytname = "YT: Shigaraki"
global.socialm = "GitHub: Shigaraki"
global.location = "Congo Brazzaville"
global.ownernumber = ['242061032249']
global.ownernomer = "242061032249"
global.ownerTag = 'Shigaraki 👑'
global.premium = ['242061032249']
global.botname = 'SHIGARAKI'
global.linkz = "https://whatsapp.com/channel/0029VbE42My0G0XbTkAIS91e"
global.websitex = "https://whatsapp.com/channel/0029VbE42My0G0XbTkAIS91e"
global.botscript = "https://whatsapp.com/channel/0029VbE42My0G0XbTkAIS91e"
global.packname = "SHIGARAKI"
global.author = "Shigaraki"
global.wm = "SHIGARAKI MD 👑"
global.themeemoji = "👑"

// Other
global.sessionName = 'session'
global.prefa = ['','.','!','#','&']
global.sp = ''
global.mess = {
    success: 'Done✓',
    admin: 'This feature could be used by admin only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want To Use This Feature!',
    owner: 'This feature could be used by owner only!',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only!',
    wait: 'In process...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the owner to activate it'
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg")
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg")
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg")
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg")
global.flaming = 'https://www6.flamingtext.com/net-fu/image64.php?script=flaming-logo&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/image64.php?script=flaming-logo&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/image64.php?script=flaming-logo&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/image64.php?script=flaming-logo&fontsize=100&text='

//module api
module.exports = {
api:{
    removebg: ['zNKnayDFH1nugtA81fkPMzXn','5Cyy'],
    unscreen: ['N6J4Bjyh2V4eqhAPTWYtFER','fcKJ'],
    upscaling: '1255173112',
    imgsuper: ['198f69d4b2msh0021bb0690669a6p1f'],
    speechtotext: ['897beebb3ac74ceeaa6f8d0903b']
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
