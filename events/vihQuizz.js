const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

module.exports = {
    name : 'interactionCreate',
    async execute(interaction) {
        if (interaction.isSelectMenu()) {
            if(interaction.customId === 'select') {
                const selected = interaction.values[0];

                if (selected === 'first_option') {
                    const embed = new EmbedBuilder()
                        .setTitle('Question numéro 1️⃣')
                        .setDescription(`
                            Une question ? \n
                            Réponse 🟢 : NT
                            Réponse 🟡 : NT
                            Réponse 🔴 : NT
                            Réponse 🟣 : NT
                        `)
                        .setColor("DarkGold")
                    
                    const row = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('vih_one_first_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🟢'),
                            new ButtonBuilder()
                                .setCustomId('vih_one_second_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🟡'),
                            new ButtonBuilder()
                                .setCustomId('vih_one_third_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🔴'),
                            new ButtonBuilder()
                                .setCustomId('vih_one_fourth_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🟣'),
                        )

                    await interaction.reply({ embeds: [embed], components: [row] });
                }
            }
        } else (interaction.isButton()) {
        }
    }
}