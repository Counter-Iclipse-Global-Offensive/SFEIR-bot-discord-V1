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
                        Quand a été découvert la syphilis ? \n
                            Réponse 🟢 : 2019
                            Réponse 🟡 : 1905!!!!!!
                            Réponse 🔴 : 1087
                            Réponse 🟣 : -327
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
                    La syphilis peut elle être transmis de la mère à l'enfant pendant la grossesse ? \n
                        Réponse 🟢 : Oui!!!
                        Réponse 🟡 : Peut-être
                        Réponse 🔴 : Non
                        Réponse 🟣 : Je ne sais pas
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
                    La syphilis peut elle être transmis de la mère à l'enfant pendant la grossesse ? \n
                        Réponse 🟢 : Oui!!!
                        Réponse 🟡 : Peut-être
                        Réponse 🔴 : Non
                        Réponse 🟣 : Je ne sais pas
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
                    La syphilis peut elle être transmis de la mère à l'enfant pendant la grossesse ? \n
                        Réponse 🟢 : Oui!!!
                        Réponse 🟡 : Peut-être
                        Réponse 🔴 : Non
                        Réponse 🟣 : Je ne sais pas
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
                    La syphilis peut elle être transmis de la mère à l'enfant pendant la grossesse ? \n
                        Réponse 🟢 : Oui!!!
                        Réponse 🟡 : Peut-être
                        Réponse 🔴 : Non
                        Réponse 🟣 : Je ne sais pas
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
                    La syphilis a-t-elle des conséquences sur la grossesse ? \n
                        Réponse 🟢 : Oui!!!!!
                        Réponse 🟡 : Peut-être
                        Réponse 🔴 : Non
                        Réponse 🟣 : Je ne sais pas
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
                    La syphilis a-t-elle des conséquences sur la grossesse ? \n
                        Réponse 🟢 : Oui!!!!!
                        Réponse 🟡 : Peut-être
                        Réponse 🔴 : Non
                        Réponse 🟣 : Je ne sais pas
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
                    La syphilis a-t-elle des conséquences sur la grossesse ? \n
                        Réponse 🟢 : Oui!!!!!
                        Réponse 🟡 : Peut-être
                        Réponse 🔴 : Non
                        Réponse 🟣 : Je ne sais pas
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
                    La syphilis a-t-elle des conséquences sur la grossesse ? \n
                        Réponse 🟢 : Oui!!!!!
                        Réponse 🟡 : Peut-être
                        Réponse 🔴 : Non
                        Réponse 🟣 : Je ne sais pas
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
                        Réponse 🟢 : Malformation
                        Réponse 🟡 : Mort!!!!!
                        Réponse 🔴 : Perte de la vue
                        Réponse 🟣 : Un double appareil génital
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
                    Quelle est la conséquence la plus dramatique sur le bébé ? \n
                        Réponse 🟢 : Malformation
                        Réponse 🟡 : Mort!!!!!
                        Réponse 🔴 : Perte de la vue
                        Réponse 🟣 : Un double appareil génital
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
                    Quelle est la conséquence la plus dramatique sur le bébé ? \n
                        Réponse 🟢 : Malformation
                        Réponse 🟡 : Mort!!!!!
                        Réponse 🔴 : Perte de la vue
                        Réponse 🟣 : Un double appareil génital
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
                    Quelle est la conséquence la plus dramatique sur le bébé ? \n
                        Réponse 🟢 : Malformation
                        Réponse 🟡 : Mort!!!!!
                        Réponse 🔴 : Perte de la vue
                        Réponse 🟣 : Un double appareil génital
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
                    Où la syphilis est elle le plus présent ? \n
                        Réponse 🟢 : En Océanie
                        Réponse 🟡 : En Asie
                        Réponse 🔴 : En Amérique du sud
                        Réponse 🟣 : En Afrique!!!!
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
                    Où la syphilis est elle le plus présent ? \n
                        Réponse 🟢 : En Océanie
                        Réponse 🟡 : En Asie
                        Réponse 🔴 : En Amérique du sud
                        Réponse 🟣 : En Afrique!!!!
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
                    Où la syphilis est elle le plus présent ? \n
                        Réponse 🟢 : En Océanie
                        Réponse 🟡 : En Asie
                        Réponse 🔴 : En Amérique du sud
                        Réponse 🟣 : En Afrique!!!!
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
                    Où la syphilis est elle le plus présent ? \n
                        Réponse 🟢 : En Océanie
                        Réponse 🟡 : En Asie
                        Réponse 🔴 : En Amérique du sud
                        Réponse 🟣 : En Afrique!!!!
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