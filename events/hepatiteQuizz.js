const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

module.exports = {
    name : 'interactionCreate',
    async execute(interaction) {
        if (interaction.isSelectMenu()) {
            if(interaction.customId === 'select') {
                const selected = interaction.values[0];

                if (selected === 'second_option') {
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
                                .setCustomId('hepatite_one_first_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🟢'),
                            new ButtonBuilder()
                                .setCustomId('hepatite_one_second_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🟡'),
                            new ButtonBuilder()
                                .setCustomId('hepatite_one_third_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🔴'),
                            new ButtonBuilder()
                                .setCustomId('hepatite_one_fourth_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🟣'),
                        )

                    await interaction.reply({ embeds: [embed], components: [row] });
                }
            }
        } else if (interaction.isButton()) {
            if(interaction.customId === 'hepatite_one_first_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 2️⃣')
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
                            .setCustomId('hepatite_two_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_two_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_two_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_two_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'hepatite_one_second_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 2️⃣')
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
                            .setCustomId('hepatite_two_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_two_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_two_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_two_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'hepatite_one_third_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 2️⃣')
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
                            .setCustomId('hepatite_two_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_two_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_two_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_two_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'hepatite_one_fourth_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 2️⃣')
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
                            .setCustomId('hepatite_two_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_two_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_two_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_two_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'hepatite_two_first_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 3️⃣')
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
                            .setCustomId('hepatite_three_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_three_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_three_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_three_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'hepatite_two_second_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 3️⃣')
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
                            .setCustomId('hepatite_three_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_three_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_three_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_three_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'hepatite_two_third_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 3️⃣')
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
                            .setCustomId('hepatite_three_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_three_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_three_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_three_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'hepatite_two_fourth_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 3️⃣')
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
                            .setCustomId('hepatite_three_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_three_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_three_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_three_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'hepatite_three_first_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 4️⃣')
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
                            .setCustomId('hepatite_four_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_four_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_four_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_four_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'hepatite_three_second_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 4️⃣')
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
                            .setCustomId('hepatite_four_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_four_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_four_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_four_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'hepatite_three_third_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 4️⃣')
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
                            .setCustomId('hepatite_four_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_four_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_four_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_four_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'hepatite_three_fourth_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 4️⃣')
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
                            .setCustomId('hepatite_four_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_four_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_four_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_four_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'hepatite_four_first_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 5️⃣')
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
                            .setCustomId('hepatite_five_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_five_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_five_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_five_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'hepatite_four_second_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 5️⃣')
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
                            .setCustomId('hepatite_five_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_five_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_five_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_five_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'hepatite_four_third_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 5️⃣')
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
                            .setCustomId('hepatite_five_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_five_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_five_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_five_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'hepatite_four_fourth_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 5️⃣')
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
                            .setCustomId('hepatite_five_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_five_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_five_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('hepatite_five_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            }
        }
    }
}