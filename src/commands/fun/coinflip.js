const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('coinflip')
        .setDescription ('Flip a coin'),
       
    async execute(interaction, client) {
        let cf = ["HEADS","TAILS"]
        let result  = cf[Math.floor(Math.random() * cf.length)];

        const cfresult = new EmbedBuilder()
            .setTitle(`Coin Flip`)
            .setDescription (`**Coin flipped, the winner is : ${result} <a:coinflip:1001764012217868288>\n\nCoin flipped by ${interaction.user}**`)
            .setColor(0x18e1ee)
            .setThumbnail(interaction.user.displayAvatarURL())
            .setTimestamp(Date.now())
             await interaction.reply({ embeds: [cfresult], fetchReply: true })
    },
    
};