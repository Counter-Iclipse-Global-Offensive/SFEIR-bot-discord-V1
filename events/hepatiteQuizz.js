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

                if (selected === 'second_option') {
                    const embed1 = new EmbedBuilder()
                        .setTitle('Question numéro 1️⃣')
                        .setDescription(`
                        L'hépatite B touche quel organe ? \n
                            Réponse 🟢 : Du pancréas
                            Réponse 🟡 : Du rein
                            Réponse 🔴 : Du foie
                            Réponse 🟣 : De la vésicule biliaire
                        `)
                        .setColor("DarkGold")
                    
                    const row1 = new ActionRowBuilder()
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

                    await interaction.reply({ embeds: [embed1], components: [row1] });
                }
            }
        } else if (interaction.isButton()) {
            const memberModel = await memberData.findOne({ memberId: interaction.user.id });

            const embed2 = new EmbedBuilder()
                .setTitle('Question numéro 2️⃣')
                .setDescription(`
                Quelles sont les 2 façons d'être infecté par l'hépatite B ? \n
                    Réponse 🟢 : Relation sexuelle et salive
                    Réponse 🟡 : Salive et sang
                    Réponse 🔴 : Les animaux et l'hygiène
                    Réponse 🟣 : Relation sexuelle et sang
                `)
                .setColor("DarkGold")
            
            const row2 = new ActionRowBuilder()
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
            
            const embed3 = new EmbedBuilder()
                .setTitle('Question numéro 3️⃣')
                .setDescription(`
                Combien de personnes meurent de l'hépatite B en France par an ? \n
                    Réponse 🟢 : 500 personnes
                    Réponse 🟡 : 10000 personnes
                    Réponse 🔴 : 1500 personnes
                    Réponse 🟣 : 25 personnes
                `)
                .setColor("DarkGold")
            
            const row3 = new ActionRowBuilder()
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

            const embed4 = new EmbedBuilder()
                .setTitle('Question numéro 4️⃣')
                .setDescription(`
                Dans quelle partie du monde l'hépatite B est le plus répandu ? \n
                    Réponse 🟢 : Dans les pays développés
                    Réponse 🟡 : Dans les pays peu développés
                    Réponse 🔴 : Dans les pays en cours de développement
                    Réponse 🟣 : Je ne sais pas
                `)
                .setColor("DarkGold")
            
            const row4 = new ActionRowBuilder()
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

            const embed5 = new EmbedBuilder()
                .setTitle('Question numéro 5️⃣')
                .setDescription(`
                En quelle année a été découvert l'hépatite B ? \n
                    Réponse 🟢 : 1885
                    Réponse 🟡 : 2021
                    Réponse 🔴 : 1111
                    Réponse 🟣 : -34
                `)
                .setColor("DarkGold")
            
            const row5 = new ActionRowBuilder()
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

                const finalEmbedFail = new EmbedBuilder()
                    .setTitle('Vous avez échoué !')
                    .setDescription(`
                        Vous n'avez pas eu 5 bonnes réponses, vous avez donc échoué !
                        Vous pouvez réassayer autant de fois que vous le souhaitez.
                    `)
                    .setColor("DarkRed")

            if(interaction.customId === 'hepatite_one_first_option' || interaction.customId === 'hepatite_one_second_option' || interaction.customId === 'hepatite_one_fourth_option') {
                await interaction.reply({ embeds: [embed2], components: [row2] });
            }
            else if(interaction.customId === 'hepatite_one_third_option')
            {
                memberModel.vihGoodAnswers++;
                await memberModel.save();

                await interaction.reply({ embeds: [embed2], components: [row2] });
            }
            else if(interaction.customId === 'hepatite_two_first_option' || interaction.customId === 'hepatite_two_second_option' || interaction.customId === 'hepatite_two_third_option')
            {
                await interaction.reply({ embeds: [embed3], components: [row] });
            }
            else if(interaction.customId === 'hepatite_two_second_option')
            {
                await interaction.reply({ embeds: [embed3], components: [row3] });
            }
            else if(interaction.customId === 'hepatite_two_third_option')
            {
                await interaction.reply({ embeds: [embed3], components: [row3] });
            }
            else if(interaction.customId === 'hepatite_two_fourth_option')
            {
                memberModel.hepatiteGoodAnswers++;
                await memberModel.save();

                await interaction.reply({ embeds: [embed3], components: [row3] });
            }
            else if(interaction.customId === 'hepatite_three_first_option')
            {
                await interaction.reply({ embeds: [embed4], components: [row4] });
            }
            else if(interaction.customId === 'hepatite_three_second_option')
            {
                await interaction.reply({ embeds: [embed4], components: [row4] });
            }
            else if(interaction.customId === 'hepatite_three_third_option')
            {
                memberModel.hepatiteGoodAnswers++;
                await memberModel.save();

                await interaction.reply({ embeds: [embed4], components: [row4] });
            }
            else if(interaction.customId === 'hepatite_three_fourth_option')
            {
                await interaction.reply({ embeds: [embed4], components: [row4] });
            }
            else if(interaction.customId === 'hepatite_four_first_option')
            {
                await interaction.reply({ embeds: [embed5], components: [row5] });
            }
            else if(interaction.customId === 'hepatite_four_second_option')
            {
                memberModel.hepatiteGoodAnswers++;
                await memberModel.save();

                await interaction.reply({ embeds: [embed5], components: [row5] });
            }
            else if(interaction.customId === 'hepatite_four_third_option')
            {
                await interaction.reply({ embeds: [embed5], components: [row5] });
            }
            else if(interaction.customId === 'hepatite_four_fourth_option')
            {
                await interaction.reply({ embeds: [embed5], components: [row5] });
            }
            else if(interaction.customId === 'hepatite_five_first_option')
            {
                if (memberModel.hepatiteGoodAnswers === 4) {
                    if(memberModel.hepatiteBadge === false) {
                        memberModel.hepatiteBadge = true;
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
            else if(interaction.customId === 'hepatite_five_second_option')
            {
                await interaction.reply({ embeds: [finalEmbedFail] });
            }
            else if(interaction.customId === 'hepatite_five_third_option')
            {
                await interaction.reply({ embeds: [finalEmbedFail] });
            }
            else if(interaction.customId === 'hepatite_five_fourth_option')
            {
                await interaction.reply({ embeds: [finalEmbedSuccess] });
            }
        }
    }
}