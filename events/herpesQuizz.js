const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

module.exports = {
    name : 'interactionCreate',
    async execute(interaction) {
        if (interaction.isSelectMenu()) {
            if(interaction.customId === 'select') {
                const selected = interaction.values[0];

                if (selected === 'third_option') {
                    const embed = new EmbedBuilder()
                        .setTitle('Question numéro 1️⃣')
                        .setDescription(`
                            Quels sont les symptômes de l'herpès ? \n
                            Réponse 🟢 : Lésions vésiculaires ou des plaies ouvertes à la bouche ou aux paties génitales!!!!!
                            Réponse 🟡 : Toux
                            Réponse 🔴 : Perte de cheveux
                            Réponse 🟣 : Diabète
                        `)
                        .setColor("DarkGold")
                    
                    const row = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('herpes_one_first_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🟢'),
                            new ButtonBuilder()
                                .setCustomId('herpes_one_second_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🟡'),
                            new ButtonBuilder()
                                .setCustomId('herpes_one_third_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🔴'),
                            new ButtonBuilder()
                                .setCustomId('herpes_one_fourth_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🟣'),
                        )

                    await interaction.reply({ embeds: [embed], components: [row] });
                }
            }
        } else if (interaction.isButton()) {
            if(interaction.customId === 'herpes_one_first_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 2️⃣')
                    .setDescription(`
                        Quelles sont les 2 façons d'être infecté par l'herpès  ? \n
                        Réponse 🟢 : Relation sexuelle et salive!!!!!
                        Réponse 🟡 : Salive et sang
                        Réponse 🔴 : Les animaux et l'hygiène
                        Réponse 🟣 : Relation sexuelle et sang
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('herpes_two_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('herpes_two_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('herpes_two_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('herpes_two_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'herpes_one_second_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 2️⃣')
                    .setDescription(`
                        Quelles sont les 2 façons d'être infecté par l'herpès  ? \n
                        Réponse 🟢 : Relation sexuelle et salive!!!!!
                        Réponse 🟡 : Salive et sang
                        Réponse 🔴 : Les animaux et l'hygiène
                        Réponse 🟣 : Relation sexuelle et sang
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('herpes_two_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('herpes_two_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('herpes_two_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('herpes_two_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'herpes_one_third_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 2️⃣')
                    .setDescription(`
                        Quelles sont les 2 façons d'être infecté par l'herpès  ? \n
                        Réponse 🟢 : Relation sexuelle et salive!!!!!
                        Réponse 🟡 : Salive et sang
                        Réponse 🔴 : Les animaux et l'hygiène
                        Réponse 🟣 : Relation sexuelle et sang
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('herpes_two_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('herpes_two_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('herpes_two_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('herpes_two_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'herpes_one_fourth_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 2️⃣')
                    .setDescription(`
                        Quelles sont les 2 façons d'être infecté par l'herpès  ? \n
                        Réponse 🟢 : Relation sexuelle et salive!!!!!
                        Réponse 🟡 : Salive et sang
                        Réponse 🔴 : Les animaux et l'hygiène
                        Réponse 🟣 : Relation sexuelle et sang
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('herpes_two_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('herpes_two_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('herpes_two_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('herpes_two_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'herpes_two_first_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 3️⃣')
                    .setDescription(`
                    Est-ce que l'herpès est contagieuse ? \n
                        Réponse 🟢 : Oui!!!!!!
                        Réponse 🟡 : Non
                        Réponse 🔴 : Peut-être
                        Réponse 🟣 : Je ne sais pas
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('herpes_three_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('herpes_three_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('herpes_three_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('herpes_three_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'herpes_two_second_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 3️⃣')
                    .setDescription(`
                        Est-ce que l'herpès est contagieuse ? \n
                        Réponse 🟢 : Oui!!!!!!
                        Réponse 🟡 : Non
                        Réponse 🔴 : Peut-être
                        Réponse 🟣 : Je ne sais pas
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('herpes_three_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('herpes_three_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('herpes_three_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('herpes_three_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'herpes_two_third_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 3️⃣')
                    .setDescription(`
                        Est-ce que l'herpès est contagieuse ? \n
                        Réponse 🟢 : Oui!!!!!!
                        Réponse 🟡 : Non
                        Réponse 🔴 : Peut-être
                        Réponse 🟣 : Je ne sais pas
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('herpes_three_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('herpes_three_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('herpes_three_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('herpes_three_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'herpes_two_fourth_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 3️⃣')
                    .setDescription(`
                        Est-ce que l'herpès est contagieuse ? \n
                        Réponse 🟢 : Oui!!!!!!
                        Réponse 🟡 : Non
                        Réponse 🔴 : Peut-être
                        Réponse 🟣 : Je ne sais pas
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('herpes_three_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('herpes_three_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('herpes_three_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('herpes_three_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'herpes_three_first_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 4️⃣')
                    .setDescription(`
                        L'herpès disparaît-il au bout d'un certain temps? \n
                        Réponse 🟢 : Oui
                        Réponse 🟡 : Non pas totalement!!!!!
                        Réponse 🔴 : Non
                        Réponse 🟣 : Je sais pas
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('herpes_four_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('herpes_four_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('herpes_four_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('herpes_four_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'herpes_three_second_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 4️⃣')
                    .setDescription(`
                        L'herpès disparaît-il au bout d'un certain temps? \n
                        Réponse 🟢 : Oui
                        Réponse 🟡 : Non pas totalement!!!!!
                        Réponse 🔴 : Non
                        Réponse 🟣 : Je sais pas
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('herpes_four_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('herpes_four_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('herpes_four_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('herpes_four_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'herpes_three_third_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 4️⃣')
                    .setDescription(`
                        L'herpès disparaît-il au bout d'un certain temps? \n
                        Réponse 🟢 : Oui
                        Réponse 🟡 : Non pas totalement!!!!!
                        Réponse 🔴 : Non
                        Réponse 🟣 : Je sais pas
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('herpes_four_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('herpes_four_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('herpes_four_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('herpes_four_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'herpes_three_fourth_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 4️⃣')
                    .setDescription(`
                        L'herpès disparaît-il au bout d'un certain temps? \n
                        Réponse 🟢 : Oui
                        Réponse 🟡 : Non pas totalement!!!!!
                        Réponse 🔴 : Non
                        Réponse 🟣 : Je sais pas
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('herpes_four_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('herpes_four_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('herpes_four_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('herpes_four_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'herpes_four_first_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 5️⃣')
                    .setDescription(`
                        Qui sont les gens le plus touché par l'herpès ? \n
                        Réponse 🟢 : Les moins de 10ans 
                        Réponse 🟡 : Les plus de 90ans
                        Réponse 🔴 : Les moins de 50ans!!!!!!
                        Réponse 🟣 : Les bébés
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('herpes_five_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('herpes_five_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('herpes_five_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('herpes_five_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'herpes_four_second_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 5️⃣')
                    .setDescription(`
                        Qui sont les gens le plus touché par l'herpès ? \n
                        Réponse 🟢 : Les moins de 10ans 
                        Réponse 🟡 : Les plus de 90ans
                        Réponse 🔴 : Les moins de 50ans!!!!!!
                        Réponse 🟣 : Les bébés
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('herpes_five_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('herpes_five_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('herpes_five_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('herpes_five_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'herpes_four_third_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 5️⃣')
                    .setDescription(`
                        Qui sont les gens le plus touché par l'herpès ? \n
                        Réponse 🟢 : Les moins de 10ans 
                        Réponse 🟡 : Les plus de 90ans
                        Réponse 🔴 : Les moins de 50ans!!!!!!
                        Réponse 🟣 : Les bébés
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('herpes_five_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('herpes_five_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('herpes_five_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('herpes_five_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'herpes_four_fourth_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 5️⃣')
                    .setDescription(`
                        Qui sont les gens le plus touché par l'herpès ? \n
                        Réponse 🟢 : Les moins de 10ans 
                        Réponse 🟡 : Les plus de 90ans
                        Réponse 🔴 : Les moins de 50ans!!!!!!
                        Réponse 🟣 : Les bébés
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setCustomId('herpes_five_first_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟢'),
                        new ButtonBuilder()
                            .setCustomId('herpes_five_second_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟡'),
                        new ButtonBuilder()
                            .setCustomId('herpes_five_third_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🔴'),
                        new ButtonBuilder()
                            .setCustomId('herpes_five_fourth_option')
                            .setStyle(ButtonStyle.Primary)
                            .setEmoji('🟣'),
                    )

                await interaction.reply({ embeds: [embed], components: [row] });
            }
        }
    }
}