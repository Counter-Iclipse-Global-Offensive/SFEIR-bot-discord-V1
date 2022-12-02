const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')

module.exports = {
    name : 'interactionCreate',
    async execute(interaction) {
        if (interaction.isSelectMenu()) {
            if(interaction.customId === 'select') {
                const selected = interaction.values[0];

                if (selected === 'fifth_option') {
                    const embed1 = new EmbedBuilder()
                        .setTitle('Question numéro 1️⃣')
                        .setDescription(`
                        Quand a été découverte la syphilis ? \n
                            Réponse 🟢 : 2019
                            Réponse 🟡 : 1905
                            Réponse 🔴 : 1087
                            Réponse 🟣 : -327
                        `)
                        .setColor("DarkGold")
                    
                    const row1 = new ActionRowBuilder()
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

                    await interaction.reply({ embeds: [embed1], components: [row1] });
                }
            }
        } else if (interaction.isButton()) {
            const embed2 = new EmbedBuilder()
                .setTitle('Question numéro 2️⃣')
                .setDescription(`
                La syphilis peut-elle être transmise de la mère à l'enfant pendant la grossesse ? \n
                    Réponse 🟢 : Oui
                    Réponse 🟡 : Peut-être
                    Réponse 🔴 : Non
                    Réponse 🟣 : Je ne sais pas
                `)
                .setColor("DarkGold")
            
            const row2 = new ActionRowBuilder()
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

            const embed3 = new EmbedBuilder()
                .setTitle('Question numéro 3️⃣')
                .setDescription(`
                La syphilis a-t-elle des conséquences sur la grossesse ? \n
                    Réponse 🟢 : Oui
                    Réponse 🟡 : Peut-être
                    Réponse 🔴 : Non
                    Réponse 🟣 : Je ne sais pas
                `)
                .setColor("DarkGold")
            
            const row3 = new ActionRowBuilder()
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

            const embed4 = new EmbedBuilder()
                .setTitle('Question numéro 4️⃣')
                .setDescription(`
                    Une question ? \n
                    Réponse 🟢 : Malformation
                    Réponse 🟡 : Mort
                    Réponse 🔴 : Perte de la vue
                    Réponse 🟣 : Un double appareil génital
                `)
                .setColor("DarkGold")
            
            const row4 = new ActionRowBuilder()
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
            
            const embed5 = new EmbedBuilder()
                .setTitle('Question numéro 5️⃣')
                .setDescription(`
                Où la syphilis est elle la plus présente ? \n
                    Réponse 🟢 : En Océanie
                    Réponse 🟡 : En Asie
                    Réponse 🔴 : En Amérique du sud
                    Réponse 🟣 : En Afrique
                `)
                .setColor("DarkGold")
            
            const row5 = new ActionRowBuilder()
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
        
            const finalEmbedFail = new EmbedBuilder()
                .setTitle('Vous avez échoué !')
                .setDescription(`
                    Vous n'avez pas eu 5 bonnes réponses, vous avez donc échoué !
                    Vous pouvez réassayer autant de fois que vous le souhaitez.
                `)
                .setColor("DarkRed")
            if(interaction.customId === 'syphilis_one_first_option') {
                await interaction.reply({ embeds: [embed2], components: [row2] });
            } else if(interaction.customId === 'syphilis_one_second_option') {
                await interaction.reply({ embeds: [embed2], components: [row2] });
            } else if(interaction.customId === 'syphilis_one_third_option') {
                memberModel.syphilisGoodAnswers++;
                await memberModel.save();
                await interaction.reply({ embeds: [embed2], components: [row2] });
            } else if(interaction.customId === 'syphilis_one_fourth_option') {
                await interaction.reply({ embeds: [embed2], components: [row2] });
            } else if(interaction.customId === 'syphilis_two_first_option') {
                await interaction.reply({ embeds: [embed3], components: [row3] });
            } else if(interaction.customId === 'syphilis_two_second_option') {
                await interaction.reply({ embeds: [embed3], components: [row3] });
            } else if(interaction.customId === 'syphilis_two_third_option') {
                await interaction.reply({ embeds: [embed3], components: [row3] });
            } else if(interaction.customId === 'syphilis_two_fourth_option') {
                memberModel.syphilisGoodAnswers++;
                await memberModel.save();
                await interaction.reply({ embeds: [embed3], components: [row3] });
            } else if(interaction.customId === 'syphilis_three_first_option') {
                await interaction.reply({ embeds: [embed4], components: [row4] });
            } else if(interaction.customId === 'syphilis_three_second_option') {
                await interaction.reply({ embeds: [embed4], components: [row4] });
            } else if(interaction.customId === 'syphilis_three_third_option') {
                memberModel.syphilisGoodAnswers++;
                await memberModel.save();
                await interaction.reply({ embeds: [embed4], components: [row4] });
            } else if(interaction.customId === 'syphilis_three_fourth_option') {
                await interaction.reply({ embeds: [embed4], components: [row4] });
            } else if(interaction.customId === 'syphilis_four_first_option') {
                await interaction.reply({ embeds: [embed5], components: [row5] });
            } else if(interaction.customId === 'syphilis_four_second_option') {
                memberModel.syphilisGoodAnswers++;
                await memberModel.save();
                await interaction.reply({ embeds: [embed5], components: [row5] });
            } else if(interaction.customId === 'syphilis_four_third_option') {
                await interaction.reply({ embeds: [embed5], components: [row5] });
            } else if(interaction.customId === 'syphilis_four_fourth_option') {
                await interaction.reply({ embeds: [embed5], components: [row5] });
            } else if(interaction.customId === 'syphilis_five_first_option') {
                if (memberModel.syphilisGoodAnswers === 4) {
                    if(memberModel.syphilisBadge === false) {
                        memberModel.syphilisBadge = true;
                        await memberModel.save();

                        const finalEmbedSuccess = new EmbedBuilder()
                            .setTitle('Vous avez réussi !')
                            .setDescription(`
                                Vous avez eu 5 bonnes réponses, vous avez donc réussi !
                                Vous êtes récompensés d'un badge, votre collection est visionnable sur le site.
                            `)
                            .setColor("DarkGreen")

                        await interaction.reply({ embeds: [finalEmbedSuccess] });
                    } else {
                        const finalEmbedSuccess = new EmbedBuilder()
                            .setTitle('Vous avez réussi !')
                            .setDescription(`
                                Vous avez eu 5 bonnes réponses, vous avez donc réussi !
                                Vous avez déjà reçu le badge correspondant, votre collection est visionnable sur le site.
                            `)
                            .setColor("DarkGreen")

                        await interaction.reply({ embeds: [finalEmbedSuccess] });
                    }
                } else {
                    await interaction.reply({ embeds: [finalEmbedFail] });
                }
            } else if(interaction.customId === 'syphilis_five_second_option') {
                await interaction.reply({ embeds: [finalEmbedFail] });
            } else if(interaction.customId === 'syphilis_five_third_option') {
                await interaction.reply({ embeds: [finalEmbedFail] });
            } else if(interaction.customId === 'syphilis_five_fourth_option') {
                await interaction.reply({ embeds: [finalEmbedFail] });
            }
        }
    }
}