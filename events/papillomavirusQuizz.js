const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const memberData = require('../models/member.model')

module.exports = {
    name : 'interactionCreate',
    async execute(interaction) {
        if (interaction.isSelectMenu()) {
            if(interaction.customId === 'select') {
                const selected = interaction.values[0];

                const memberModel = await memberData.findOne({ memberId: interaction.user.id });

                if (!memberModel) {
                    const newData = new memberData({ memberId: interaction.user.id });
                    newData.save();
                } else {
                    memberModel.hepatiteGoodAnswers = 0;
                    memberModel.save();
                }

                if (selected === 'fourth_option') {
                    const embed1 = new EmbedBuilder()
                        .setTitle('Question numéro 1️⃣')
                        .setDescription(`
                            Le préservatif est-il efficace contre le papillomavirus ? \n
                            Réponse 🟢 : Oui
                            Réponse 🟡 : Non
                            Réponse 🔴 : Peut-être
                            Réponse 🟣 : Je ne sais pas
                        `)
                        .setColor("DarkGold")
                    
                    const row1 = new ActionRowBuilder()
                        .addComponents(
                            new ButtonBuilder()
                                .setCustomId('papillomavirus_one_first_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🟢'),
                            new ButtonBuilder()
                                .setCustomId('papillomavirus_one_second_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🟡'),
                            new ButtonBuilder()
                                .setCustomId('papillomavirus_one_third_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🔴'),
                            new ButtonBuilder()
                                .setCustomId('papillomavirus_one_fourth_option')
                                .setStyle(ButtonStyle.Primary)
                                .setEmoji('🟣'),
                        )

                    await interaction.reply({ embeds: [embed1], components: [row1] });
                }
            }
        } else if (interaction.isButton()) {
            const memberModel = await memberData.findOne({ memberId: interaction.user.id });

            const embed2 = new EmbedBuilder()
                .setTitle('Question numéro 2️⃣')
                .setDescription(`
                    Donc quel est le meilleur moyen de ne pas avoir le papillomavirus ? \n
                    Réponse 🟢 : La pillule
                    Réponse 🟡 : Ne parler avec personne
                    Réponse 🔴 : Tuer tous les papillons de la planète
                    Réponse 🟣 : La vaccination
                `)
                .setColor("DarkGold")
            
            const row2 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('papillomavirus_two_first_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟢'),
                    new ButtonBuilder()
                        .setCustomId('papillomavirus_two_second_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟡'),
                    new ButtonBuilder()
                        .setCustomId('papillomavirus_two_third_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🔴'),
                    new ButtonBuilder()
                        .setCustomId('papillomavirus_two_fourth_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟣'),
                )

            const embed3 = new EmbedBuilder()
                .setTitle('Question numéro 3️⃣')
                .setDescription(`
                    Qu'engendre le papillomavirus ? \n
                    Réponse 🟢 : Des cancers
                    Réponse 🟡 : Des papillons dans le ventre
                    Réponse 🔴 : Un changement de sexe
                    Réponse 🟣 : Accélère les battements du coeur 
                `)
                .setColor("DarkGold")
            
            const row3 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('papillomavirus_three_first_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟢'),
                    new ButtonBuilder()
                        .setCustomId('papillomavirus_three_second_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟡'),
                    new ButtonBuilder()
                        .setCustomId('papillomavirus_three_third_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🔴'),
                    new ButtonBuilder()
                        .setCustomId('papillomavirus_three_fourth_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟣'),
                )

            const embed4 = new EmbedBuilder()
                .setTitle('Question numéro 4️⃣')
                .setDescription(`
                    Le papillomavirus a-t-il un impact sur la grossesse? ? \n
                    Réponse 🟢 : Oui
                    Réponse 🟡 : Non
                    Réponse 🔴 : Peut-être
                    Réponse 🟣 : Je ne sais pas
                `)
                .setColor("DarkGold")
            
            const row4 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('papillomavirus_four_first_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟢'),
                    new ButtonBuilder()
                        .setCustomId('papillomavirus_four_second_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟡'),
                    new ButtonBuilder()
                        .setCustomId('papillomavirus_four_third_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🔴'),
                    new ButtonBuilder()
                        .setCustomId('papillomavirus_four_fourth_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟣'),
                )
            const embed5 = new EmbedBuilder()
                .setTitle('Question numéro 5️⃣')
                .setDescription(`
                    Peut-on traiter l'infection au papillomavirus ? \n
                    Réponse 🟢 : Oui si l'infection date de moins de 6 mois
                    Réponse 🟡 : Oui si l'infection date de moins d'une semaine
                    Réponse 🔴 : Il est impossible de la traiter mais s'éliminine toute seule !
                    Réponse 🟣 : Il est impossible de la traiter et ne s'éliminine pas
                `)
                .setColor("DarkGold")
            
            const row5 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('papillomavirus_five_first_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟢'),
                    new ButtonBuilder()
                        .setCustomId('papillomavirus_five_second_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟡'),
                    new ButtonBuilder()
                        .setCustomId('papillomavirus_five_third_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🔴'),
                    new ButtonBuilder()
                        .setCustomId('papillomavirus_five_fourth_option')
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
            if(interaction.customId === 'papillomavirus_one_first_option') {
                await interaction.reply({ embeds: [embed2], components: [row2] });
            } else if(interaction.customId === 'papillomavirus_one_second_option') {
                memberModel.papillomavirusGoodAnswers++;
                await memberModel.save();
                await interaction.reply({ embeds: [embed2], components: [row2] });
            } else if(interaction.customId === 'papillomavirus_one_third_option') {
                await interaction.reply({ embeds: [embed2], components: [row2] });
            } else if(interaction.customId === 'papillomavirus_one_fourth_option') {
                await interaction.reply({ embeds: [embed2], components: [row2] });
            } else if(interaction.customId === 'papillomavirus_two_first_option') {
                await interaction.reply({ embeds: [embed3], components: [row3] });
            } else if(interaction.customId === 'papillomavirus_two_second_option') {
                await interaction.reply({ embeds: [embed3], components: [row3] });
            } else if(interaction.customId === 'papillomavirus_two_third_option') {
                await interaction.reply({ embeds: [embed3], components: [row3] });
            } else if(interaction.customId === 'papillomavirus_two_fourth_option') {
                memberModel.papillomavirusGoodAnswers++;
                await memberModel.save();
                await interaction.reply({ embeds: [embed3], components: [row3] });
            } else if(interaction.customId === 'papillomavirus_three_first_option') {
                memberModel.papillomavirusGoodAnswers++;
                await memberModel.save();
                await interaction.reply({ embeds: [embed4], components: [row4] });
            } else if(interaction.customId === 'papillomavirus_three_second_option') {
                await interaction.reply({ embeds: [embed4], components: [row4] });
            } else if(interaction.customId === 'papillomavirus_three_third_option') {
                await interaction.reply({ embeds: [embed4], components: [row4] });
            } else if(interaction.customId === 'papillomavirus_three_fourth_option') {
                await interaction.reply({ embeds: [embed4], components: [row4] });
            } else if(interaction.customId === 'papillomavirus_four_first_option') {
                memberModel.papillomavirusGoodAnswers++;
                await memberModel.save();
                await interaction.reply({ embeds: [embed5], components: [row5] });
            } else if(interaction.customId === 'papillomavirus_four_second_option') {
                await interaction.reply({ embeds: [embed5], components: [row5] });
            } else if(interaction.customId === 'papillomavirus_four_third_option') {
                await interaction.reply({ embeds: [embed5], components: [row5] });
            } else if(interaction.customId === 'papillomavirus_four_fourth_option') {
                await interaction.reply({ embeds: [embed5], components: [row5] });
            } else if(interaction.customId === 'papillomavirus_five_first_option') {
                await interaction.reply({ embeds: [finalEmbedFail] });
            } else if(interaction.customId === 'papillomavirus_five_second_option') {
                await interaction.reply({ embeds: [finalEmbedFail] });
            } else if(interaction.customId === 'papillomavirus_five_third_option') {
                if (memberModel.papillomavirusGoodAnswers === 4) {
                    if(memberModel.papillomavirusBadge === false) {
                        memberModel.papillomavirusBadge = true;
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
            } else if(interaction.customId === 'papillomavirus_five_fourth_option') {
                await interaction.reply({ embeds: [finalEmbedFail] });
            }
        }
    }
}