const { ContextMenuCommandBuilder, ApplicationCommandType, EmbedBuilder} = require("discord.js");
module.exports = {
    data: new ContextMenuCommandBuilder ()
        .setName("Get User Avatar")
        .setType(ApplicationCommandType.User),

    async execute(interaction, client) {
        const useravatar = interaction.targetUser.avatarURL()
        const cfresult = new EmbedBuilder()
        .setAuthor({
            iconURL:interaction.targetUser.displayAvatarURL(),
            name: interaction.targetUser.tag
        })
        .setImage (interaction.targetUser.displayAvatarURL({size: 2048}))
        .setDescription(`**User's Avatar Link**\n${useravatar}`)
        .setColor(0x18e1ee)
        .setTimestamp(Date.now())
        
         await interaction.reply({ embeds: [cfresult], fetchReply: true, ephemeral: true })
    },
};