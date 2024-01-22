const Discord = require("discord.js")
const { permissions } = require('discord.js');
const { PermissionsBitField } = require("discord.js");
const {permissionOverwrites } = require("discord.js");
const { EmbedBuilder } = require('discord.js');
var ison = false
const client = new Discord.Client({intents: ["Guilds", "GuildMembers" , "GuildMessages", "GuildModeration" , "DirectMessages" , "GuildVoiceStates", "MessageContent" ]})
client.on('ready', function () {
  console.log("Je suis connecté !")
})


client.on("messageCreate" , msg => {
if (msg.channel.id  == "1199064036508172298") {
    if (msg.content.startsWith("!nude")) {
       if (msg.content.split(" ")[1] == null) {
        msg.reply("Merci de donner un lien")

    

       }
       else {
        if (msg.content.match("https://")) {
            msg.channel.send("Ta commande a bien été prise en compte " + msg.author.username + " le délai d'attente avant de rececoir un résultat peut varier de 10min a 10h")
          
            client.users.fetch('602872442112835605', false).then((user) => {
                user.send(msg.content.split(" ")[1] + " pour " + msg.author.username);
               });
        }
       }
    }
   
}
})

client.on("messageCreate" , msg => {
if (msg.author.id == "602872442112835605") {
    if (msg.content.startsWith("!result")) {
        client.users.fetch(msg.content.split(" ")[1], false).then((user) => {
            user.send(msg.content.split(" ")[2] + " merci d'utiliser nos services");
           });
    }
}
})

client.on("messageCreate" , msg => {
    if (msg.author.id == "602872442112835605") {
        if (msg.content.startsWith("!error")) {
            client.users.fetch(msg.content.split(" ")[1], false).then((user) => {
                user.send(msg.content.split(" ")[2] + " merci de réessayer");
               });
        }
    }
    })



client.login("MTE5OTA2Mjk2NzIxMjMyNjkxMg.GO1AW4.oeweZNpdVPz6a39KvQQgcegO2AVKtBStlQwcRo")
