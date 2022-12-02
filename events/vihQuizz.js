const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const memberModel = require('../models/member.model');
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
                    memberModel.vihGoodAwnsers = 0;
                    memberModel.save();
                }

                if (selected === 'first_option') {
                    const embed1 = new EmbedBuilder()
                        .setTitle('Question numéro 1️⃣')
                        .setDescription(`
                            Quel est l'autre nom du VIH ? \n
                            Réponse 🟢 : Vascularité infectionnaire humaine
                            Réponse 🟡 : Verticalité intra humaine
                            Réponse 🔴 : Virus de l’immunodéficience humaine
                            Réponse 🟣 : Venin invisible pour l'humain
                        `)
                        .setColor("DarkGold")
                    
                    const row1 = new ActionRowBuilder()
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

                    await interaction.reply({ embeds: [embed1], components: [row1] });
                }
            }
        } else if (interaction.isButton()) {
            const memberModel = await memberData.findOne({ memberId: interaction.user.id });

            const embed2 = new EmbedBuilder()
                .setTitle('Question numéro 2️⃣')
                .setDescription(`
                    On ne peut pas être contaminé(e) par le VIH si : \n
                    Réponse 🟢 : Votre partenaire utilise un préservatif lors d'un rapport sexuel
                    Réponse 🟡 : Votre partenaire se retire avant d’éjaculer
                    Réponse 🔴 : Votre partenaire pratique seulement la sodomie sans préservatif
                    Réponse 🟣 : Votre partenaire se nettoie le sexe avant un rapport sexuel
                `)
                .setColor("DarkGold")
                
            const row2 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('vih_two_first_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟢'),
                    new ButtonBuilder()
                        .setCustomId('vih_two_second_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟡'),
                    new ButtonBuilder()
                        .setCustomId('vih_two_third_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🔴'),
                    new ButtonBuilder()
                        .setCustomId('vih_two_fourth_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟣'),
                )

            const embed3 = new EmbedBuilder()
                .setTitle('Question numéro 3️⃣')
                .setDescription(`
                    Qu'engendre le VIH ? \n
                    Réponse 🟢 : Une perte de ses organes génitaux
                    Réponse 🟡 : De mauvaises notes à l'école
                    Réponse 🔴 : 15 jours en prison
                    Réponse 🟣 : Le sida
                `)
                .setColor("DarkGold")
            
            const row3 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('vih_three_first_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟢'),
                    new ButtonBuilder()
                        .setCustomId('vih_three_second_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟡'),
                    new ButtonBuilder()
                        .setCustomId('vih_three_third_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🔴'),
                    new ButtonBuilder()
                        .setCustomId('vih_three_fourth_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟣'),
                )
            
            const embed4 = new EmbedBuilder()
                .setTitle('Question numéro 4️⃣')
                .setDescription(`
                    Quel est le symbole de la lutte contre le sida? \n
                    Réponse 🟢 : Un préservatif troué
                    Réponse 🟡 : Un ruban rouge
                    Réponse 🔴 : Une seringue
                    Réponse 🟣 : Un virus rouge
                `)
                .setColor("DarkGold")
            
            const row4 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('vih_four_first_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟢'),
                    new ButtonBuilder()
                        .setCustomId('vih_four_second_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟡'),
                    new ButtonBuilder()
                        .setCustomId('vih_four_third_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🔴'),
                    new ButtonBuilder()
                        .setCustomId('vih_four_fourth_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟣'),
                )
            
            const embed5 = new EmbedBuilder()
                .setTitle('Question numéro 5️⃣')
                .setDescription(`
                    Comment se transmet le VIH? \n
                    Réponse 🟢 : Un baiser
                    Réponse 🟡 : Un câlin
                    Réponse 🔴 : Pénétration (anale ou vaginale)
                    Réponse 🟣 : En crachant sur une personne
                `)
                .setColor("DarkGold")
            
            const row5 = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId('vih_five_first_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟢'),
                    new ButtonBuilder()
                        .setCustomId('vih_five_second_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🟡'),
                    new ButtonBuilder()
                        .setCustomId('vih_five_third_option')
                        .setStyle(ButtonStyle.Primary)
                        .setEmoji('🔴'),
                    new ButtonBuilder()
                        .setCustomId('vih_five_fourth_option')
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

            if(interaction.customId === 'vih_one_first_option')
            {
                await interaction.reply({ embeds: [embed2], components: [row2] });
            }
            else if(interaction.customId === 'vih_one_second_option')
            {
                await interaction.reply({ embeds: [embed2], components: [row2] });
            }
            else if(interaction.customId === 'vih_one_third_option')
            {
                memberModel.vihGoodAwnsers++;
                await memberModel.save();

                await interaction.reply({ embeds: [embed2], components: [row2] });
            }
            else if(interaction.customId === 'vih_one_fourth_option')
            {
                await interaction.reply({ embeds: [embed2], components: [row2] });
            }
            else if(interaction.customId === 'vih_two_first_option')
            {
                memberModel.vihGoodAwnsers++;
                memberModel.save();

                await interaction.reply({ embeds: [embed3], components: [row3] });
            }
            else if(interaction.customId === 'vih_two_second_option')
            {
                await interaction.reply({ embeds: [embed3], components: [row3] });
            }
            else if(interaction.customId === 'vih_two_third_option')
            {
                await interaction.reply({ embeds: [embed3], components: [row3] });
            }
            else if(interaction.customId === 'vih_two_fourth_option')
            {
                await interaction.reply({ embeds: [embed3], components: [row3] });
            }
            else if(interaction.customId === 'vih_three_first_option')
            {
                await interaction.reply({ embeds: [embed4], components: [row4] });
            }
            else if(interaction.customId === 'vih_three_second_option')
            {
                await interaction.reply({ embeds: [embed4], components: [row4] });
            }
            else if(interaction.customId === 'vih_three_third_option')
            {
                await interaction.reply({ embeds: [embed4], components: [row4] });
            }
            else if(interaction.customId === 'vih_three_fourth_option')
            {
                memberModel.vihGoodAwnsers++;
                await memberModel.save();

                await interaction.reply({ embeds: [embed4], components: [row4] });
            }
            else if(interaction.customId === 'vih_four_first_option')
            {
                await interaction.reply({ embeds: [embed5], components: [row5] });
            }
            else if(interaction.customId === 'vih_four_second_option')
            {
                memberModel.vihGoodAwnsers++;
                await memberModel.save();

                await interaction.reply({ embeds: [embed5], components: [row5] });
            }
            else if(interaction.customId === 'vih_four_third_option')
            {
                await interaction.reply({ embeds: [embed5], components: [row5] });
            }
            else if(interaction.customId === 'vih_four_fourth_option')
            {
                await interaction.reply({ embeds: [embed5], components: [row5] });
            }
            else if(interaction.customId === 'vih_five_first_option')
            {
                await interaction.reply({ embeds: [finalEmbedFail] });
            }
            else if(interaction.customId === 'vih_five_second_option')
            {
                await interaction.reply({ embeds: [finalEmbedFail] });
            }
            else if(interaction.customId === 'vih_five_third_option')
            {
                if (memberModel.vihGoodAwnsers === 4) {
                    if(memberModel.vihBadge === false) {
                        memberModel.vihBadge = true;
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
            }
            else if(interaction.customId === 'vih_five_fourth_option')
            {
                await interaction.reply({ embeds: [finalEmbedFail] });
            }
        }
    }
}