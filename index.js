const express = require('express')
const app = express();
const port = 3000
const Discord = require('discord.js');
const config = require('./config.json')
const client = new Discord.Client();
app.get('/', (req, res) => res.send('lol'))

app.listen(port, () =>
  console.log(`봇 로그인 성공!`)
);
const { MessageButton, MessageActionRow } = require('discord-buttons');
require('discord-buttons')(client);

let sug = ['1088411211244253234','',''];

let link = "";

client.on("message", (message) => {
  if (message.content !== `${config.command}`) return;
  //message.content.delete()
  const embed = new Discord.MessageEmbed()
    .setTitle("인증")
    .setDescription("인증을 하시려면 밑에 버튼을 눌러주세요!")
    .setColor('#2f3136')
    .setFooter('개발자 : RCat')

  let verify = new MessageButton()
    .setURL("https://restorecord.com/verify/RCAT")
    .setLabel("버튼")
    .setStyle("LINK")
    .setEmoji("✅")
  message.channel.send({
    button: verify,
    embed: embed
  });
  message.delete()
})

client.on("ready", () => {
  client.user.setActivity("인증 관리자 | 인증")
})



client.login(process.env.TOKEN)
