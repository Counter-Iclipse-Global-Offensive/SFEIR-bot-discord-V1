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
                    memberModel.herpesGoodAnswers = 0;
                    memberModel.save();
                }

                if (selected === 'third_option') {
                    const embed1 = new EmbedBuilder()
                        .setTitle('Question numéro 1️⃣')
                        .setDescription(`
                            Quels sont les symptômes de l'herpès ? \n
                            Réponse 🟢 : Lésions vésiculaires ou des plaies ouvertes à la bouche ou aux parties génitales
                            Réponse 🟡 : Toux
                            Réponse 🔴 : Perte de cheveux
                            Réponse 🟣 : Diabète
                        `)
                        .setColor("DarkGold")
                    
                    const row1 = new ActionRowBuilder()
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

                    await interaction.reply({ embeds: [embed1], components: [row1] });
                }
            }
        } else if (interaction.isButton()) {
            const memberModel = await memberData.findOne({ memberId: interaction.user.id });

            const embed2 = new EmbedBuilder()
                .setTitle('Question numéro 2️⃣')
                .setDescription(`
                    Quelles sont les 2 façons d'être infecté par l'herpès ? \n
                    Réponse 🟢 : Relation sexuelle et salive
                    Réponse 🟡 : Salive et sang
                    Réponse 🔴 : Les animaux et l'hygiène
                    Réponse 🟣 : Relation sexuelle et sang
                `)
                .setColor("DarkGold")
            
            const row2 = new ActionRowBuilder()
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
            
            const embed3 = new EmbedBuilder()
                .setTitle('Question numéro 3️⃣')
                .setDescription(`
                Est-ce que l'herpès est contagieux ? \n
                    Réponse 🟢 : Oui
                    Réponse 🟡 : Non
                    Réponse 🔴 : Peut-être
                    Réponse 🟣 : Je ne sais pas
                `)
                .setColor("DarkGold")
            
            const row3 = new ActionRowBuilder()
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

            const embed4 = new EmbedBuilder()
                .setTitle('Question numéro 4️⃣')
                .setDescription(`
                    L'herpès disparaît-il au bout d'un certains temps? \n
                    Réponse 🟢 : Oui
                    Réponse 🟡 : Non pas totalement
                    Réponse 🔴 : Non
                    Réponse 🟣 : Je sais pas
                `)
                .setColor("DarkGold")
            
            const row4 = new ActionRowBuilder()
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

            const embed5 = new EmbedBuilder()
                .setTitle('Question numéro 5️⃣')
                .setDescription(`
                    Qui sont les gens les plus touchés par l'herpès ? \n
                    Réponse 🟢 : Les moins de 10 ans
                    Réponse 🟡 : Les plus de 90 ans
                    Réponse 🔴 : Les moins de 50 ans
                    Réponse 🟣 : Les bébés
                `)
                .setColor("DarkGold")
            
            const row5 = new ActionRowBuilder()
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

            const finalEmbedFail = new EmbedBuilder()
                .setTitle('Vous avez échoué !')
                .setDescription(`
                    Vous n'avez pas eu 5 bonnes réponses, vous avez donc échoué !
                    Vous pouvez réassayer autant de fois que vous le souhaitez.
                `)
                .setColor("DarkRed")

            switch(interaction.customId) {
            	case 'herpes_one_first_option':
            	case 'herpes_one_third_option':
            	case 'herpes_one_fourth_option':
            		await interaction.reply({ embeds: [embed2], components: [row2] });
            		break;
            	case 'herpes_one_second_option':
            		memberModel.herpesGoodAnswers++;
                	await memberModel.save();
                	await interaction.reply({ embeds: [embed2], components: [row2] });
                	break;
                case 'herpes_two_first_option':
            	case 'herpes_two_third_option':
            	case 'herpes_two_second_option':
            		await interaction.reply({ embeds: [embed3], components: [row3] });
            		break;
            	case 'herpes_two_fourth_option':
            		memberModel.herpesGoodAnswers++;
                	await memberModel.save();
                	await interaction.reply({ embeds: [embed3], components: [row3] });
                	break;
                case 'herpes_three_fourth_option':
            	case 'herpes_three_third_option':
            	case 'herpes_three_second_option':
            		await interaction.reply({ embeds: [embed4], components: [row4] });
            		break;
            	case 'herpes_three_first_option':
            		memberModel.herpesGoodAnswers++;
                	await memberModel.save();
            		await interaction.reply({ embeds: [embed4], components: [row4] });
                	break;
                case 'herpes_four_fourth_option':
            	case 'herpes_four_third_option':
            	case 'herpes_four_second_option':
            		await interaction.reply({ embeds: [embed5], components: [row5] });
            		break;
            	case 'herpes_four_first_option':
            		memberModel.herpesGoodAnswers++;
                	await memberModel.save();
            		await interaction.reply({ embeds: [embed5], components: [row5] });
                	break;
                case 'herpes_five_fourth_option':
            	case 'herpes_five_first_option':
            	case 'herpes_five_second_option':
                	await interaction.reply({ embeds: [finalEmbedFail] });
            		break;
            	case 'herpes_five_third_option':
					if (memberModel.herpesGoodAnswers === 4) {
                	    if(memberModel.herpesBadge === false) {
                	        memberModel.herpesBadge = true;
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
                	break;
            }
        }
    }
}