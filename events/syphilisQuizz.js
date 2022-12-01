const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

module.exports = {
    name : 'interactionCreate',
    async execute(interaction) {
        if (interaction.isSelectMenu()) {
            if(interaction.customId === 'select') {
                const selected = interaction.values[0];

                if (selected === 'fifth_option') {
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
                                .setCustomId('syphilis_one_first_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🟢'),
                            new ButtonBuilder()
                                .setCustomId('syphilis_one_second_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🟡'),
                            new ButtonBuilder()
                                .setCustomId('syphilis_one_third_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🔴'),
                            new ButtonBuilder()
                                .setCustomId('syphilis_one_fourth_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🟣'),
                        )

                    await interaction.reply({ embeds: [embed], components: [row] });
                }
            }
        } else if (interaction.isButton()) {
            if(interaction.customId === 'syphilis_one_first_option') {
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
                            .setCustomId('syphilis_two_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_two_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_two_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_two_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'syphilis_one_second_option') {
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
                            .setCustomId('syphilis_two_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_two_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_two_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_two_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'syphilis_one_third_option') {
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
                            .setCustomId('syphilis_two_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_two_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_two_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_two_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'syphilis_one_fourth_option') {
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
                            .setCustomId('syphilis_two_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_two_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_two_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_two_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'syphilis_two_first_option') {
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
                            .setCustomId('syphilis_three_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_three_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_three_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_three_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'syphilis_two_second_option') {
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
                            .setCustomId('syphilis_three_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_three_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_three_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_three_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'syphilis_two_third_option') {
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
                            .setCustomId('syphilis_three_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_three_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_three_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_three_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'syphilis_two_fourth_option') {
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
                            .setCustomId('syphilis_three_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_three_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_three_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_three_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'syphilis_three_first_option') {
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
                            .setCustomId('syphilis_four_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_four_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_four_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_four_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'syphilis_three_second_option') {
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
                            .setCustomId('syphilis_four_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_four_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_four_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_four_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'syphilis_three_third_option') {
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
                            .setCustomId('syphilis_four_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_four_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_four_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_four_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'syphilis_three_fourth_option') {
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
                            .setCustomId('syphilis_four_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_four_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_four_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_four_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'syphilis_four_first_option') {
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
                            .setCustomId('syphilis_five_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_five_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_five_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_five_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'syphilis_four_second_option') {
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
                            .setCustomId('syphilis_five_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_five_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_five_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_five_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'syphilis_four_third_option') {
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
                            .setCustomId('syphilis_five_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_five_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_five_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_five_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'syphilis_four_fourth_option') {
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
                            .setCustomId('syphilis_five_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_five_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_five_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('syphilis_five_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            }
        }
    }
}