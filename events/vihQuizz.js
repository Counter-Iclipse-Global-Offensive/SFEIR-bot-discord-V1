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
                                .setCustomId('first_option')
                                .setLabel('Réponse 🟢')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji(':green_circle:'),
                            new ButtonBuilder()
                                .setCustomId('second_option')
                                .setLabel('Réponse 🟡')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji(':yellow_circle:'),
                            new ButtonBuilder()
                                .setCustomId('third_option')
                                .setLabel('Réponse 🔴')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji(':red_circle:'),
                            new ButtonBuilder()
                                .setCustomId('fourth_option')
                                .setLabel('Réponse 🟣')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji(':purple_circle:'),
                        )

                    await interaction.update({ embeds: [embed], components: [row] });

                }
            }
        }
    }
}