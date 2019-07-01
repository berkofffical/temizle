const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Uyarı :warning:', '`temizle` adlı komutu özel mesajlarda kullanamazsın.')
  return message.author.sendEmbed(ozelmesajuyari); }
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
    const botunmesajyonet = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':x: Yetkin yetersiz.', 'Mesajları silebilmem için `Mesajları Yönet` yetkisine sahip olmalıyım.')
    return message.author.sendEmbed(botunmesajyonet);
  }
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
    const sohbetsilindi = new Discord.RichEmbed()
    .setColor(0x36393E)
  
    .setDescription('Mesajlar silindi!\n**Silinen mesaj sayısı:** 100\n**Mesaj kanalı:**' + ` ${message.channel}`)
    .setFooter(`Bu mesaj 10 saniye sonra silinecektir, dikkat et ölme.`, client.user.avatarURL)
    //return message.channel.sendEmbed(sohbetsilindi).then(m => m.delete(10000));
    
    message.channel.send(':white_check_mark: | **`100`** tane mesaj temizlendi.\n\n:white_small_square: | Kanal:' + ` **${message.channel}**` + '\n:white_small_square: | Bu mesaj **`10`** saniye sonra patlayacaktır, dikkat et ölme.').then(m => m.delete(10000));
 
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil', 'temizçek', 't', 'temizle', 'teBccemiz', 'clear', 'prune'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'sil <temizlenecek mesaj sayısı>'
};
