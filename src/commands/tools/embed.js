const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription ('An embed'),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setTitle(`This is an EMBED!`)
            .setDescription ('This is a very cool description!')
            .setColor(0x18e1ee)
            .setImage(client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now())
            .setAuthor({
                url: `https://www.musicbuddy.space`,
                iconURL : interaction.user.displayAvatarURL(),
                name: interaction.user.tag
            })
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.tag
            })
            .setURL(`https://patreon.com/fusionterror`)
            .addFields([
                {
                    name: `field1`,
                    value: `field 1 value`,
                    inline: true
                },

                {
                    name: `field2`,
                    value: `field 2 value`,
                    inline: true
                }
            ]);
            await interaction.reply({
                embeds: [embed]
            })
    },
};