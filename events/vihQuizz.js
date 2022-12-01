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
                        Quel est l'autre nom du VIH ? \n
                            Réponse 🟢 : Vascularité infectionnaire humaine
                            Réponse 🟡 : Verticalité intra humaine
                            Réponse 🔴 : Virus de l’Immunodéficience Humaine !!!!!
                            Réponse 🟣 : Venin invisible pour l'hummain
                        `)
                        .setColor("DarkGold")
                    
                    const row = new ActionRowBuilder()
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

                    await interaction.reply({ embeds: [embed], components: [row] });
                }
            }
        } else if (interaction.isButton()) {
            if(interaction.customId === 'vih_one_first_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 2️⃣')
                    .setDescription(`
                    On ne peut pas être contaminé(e) par le VIH si : \n
                        Réponse 🟢 : Votre partenaire utilise un préservatif lors d'un rapport sexuel!!!!!!
                        Réponse 🟡 : Votre partenaire se retire avant d’éjaculer
                        Réponse 🔴 : Votre partenaire pratique seulement la sodomie sans préservatif
                        Réponse 🟣 : Votre partenaire se nettoie le sexe avant un rapport sexuel
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
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

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'vih_one_second_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 2️⃣')
                    .setDescription(`
                        On ne peut pas être contaminé(e) par le VIH si : \n
                        Réponse 🟢 : Votre partenaire utilise un préservatif lors d'un rapport sexuel!!!!!!
                        Réponse 🟡 : Votre partenaire se retire avant d’éjaculer
                        Réponse 🔴 : Votre partenaire pratique seulement la sodomie sans préservatif
                        Réponse 🟣 : Votre partenaire se nettoie le sexe avant un rapport sexuel
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
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

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'vih_one_third_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 2️⃣')
                    .setDescription(`
                        On ne peut pas être contaminé(e) par le VIH si : \n
                        Réponse 🟢 : Votre partenaire utilise un préservatif lors d'un rapport sexuel!!!!!!
                        Réponse 🟡 : Votre partenaire se retire avant d’éjaculer
                        Réponse 🔴 : Votre partenaire pratique seulement la sodomie sans préservatif
                        Réponse 🟣 : Votre partenaire se nettoie le sexe avant un rapport sexuel
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
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

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'vih_one_fourth_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 2️⃣')
                    .setDescription(`
                        On ne peut pas être contaminé(e) par le VIH si : \n
                        Réponse 🟢 : Votre partenaire utilise un préservatif lors d'un rapport sexuel!!!!!!
                        Réponse 🟡 : Votre partenaire se retire avant d’éjaculer
                        Réponse 🔴 : Votre partenaire pratique seulement la sodomie sans préservatif
                        Réponse 🟣 : Votre partenaire se nettoie le sexe avant un rapport sexuel
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
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

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'vih_two_first_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 3️⃣')
                    .setDescription(`
                        Qu'engendre le VIH ? \n
                        Réponse 🟢 : Une perte de ses organes génitaux
                        Réponse 🟡 : De mauvaise note a l'école
                        Réponse 🔴 : 15 jours en prison
                        Réponse 🟣 : Le sida!
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
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

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'vih_two_second_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 3️⃣')
                    .setDescription(`
                        Qu'engendre le VIH ? \n
                        Réponse 🟢 : Une perte de ses organes génitaux
                        Réponse 🟡 : De mauvaise note a l'école
                        Réponse 🔴 : 15 jours en prison
                        Réponse 🟣 : Le sida!
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
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

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'vih_two_third_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 3️⃣')
                    .setDescription(`
                        Qu'engendre le VIH ? \n
                        Réponse 🟢 : Une perte de ses organes génitaux
                        Réponse 🟡 : De mauvaise note a l'école
                        Réponse 🔴 : 15 jours en prison
                        Réponse 🟣 : Le sida!
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
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

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'vih_two_fourth_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 3️⃣')
                    .setDescription(`
                        Qu'engendre le VIH ? \n
                        Réponse 🟢 : Une perte de ses organes génitaux
                        Réponse 🟡 : De mauvaise note a l'école
                        Réponse 🔴 : 15 jours en prison
                        Réponse 🟣 : Le sida!
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
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

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'vih_three_first_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 4️⃣')
                    .setDescription(`
                        Quel est le symbole de la lutte contre le sida? \n
                        Réponse 🟢 : Un préservatif troué
                        Réponse 🟡 : Un ruban rouge!
                        Réponse 🔴 : Une seringue
                        Réponse 🟣 : Un virus rouge
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
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

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'vih_three_second_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 4️⃣')
                    .setDescription(`
                        Quel est le symbole de la lutte contre le sida? \n
                        Réponse 🟢 : Un préservatif troué
                        Réponse 🟡 : Un ruban rouge!
                        Réponse 🔴 : Une seringue
                        Réponse 🟣 : Un virus rouge
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
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

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'vih_three_third_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 4️⃣')
                    .setDescription(`
                        Quel est le symbole de la lutte contre le sida? \n
                        Réponse 🟢 : Un préservatif troué
                        Réponse 🟡 : Un ruban rouge!
                        Réponse 🔴 : Une seringue
                        Réponse 🟣 : Un virus rouge
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
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

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'vih_three_fourth_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 4️⃣')
                    .setDescription(`
                        Quel est le symbole de la lutte contre le sida? \n
                        Réponse 🟢 : Un préservatif troué
                        Réponse 🟡 : Un ruban rouge!
                        Réponse 🔴 : Une seringue
                        Réponse 🟣 : Un virus rouge
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
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

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'vih_four_first_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 5️⃣')
                    .setDescription(`
                        Comment se transmet le VIH? \n
                        Réponse 🟢 : Un baiser
                        Réponse 🟡 : Un câlin
                        Réponse 🔴 : Pénétration (anale ou vaginale)!!!!!!!!
                        Réponse 🟣 : En crachant sur une personne
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
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

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'vih_four_second_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 5️⃣')
                    .setDescription(`
                        Comment se transmet le VIH? \n
                        Réponse 🟢 : Un baiser
                        Réponse 🟡 : Un câlin
                        Réponse 🔴 : Pénétration (anale ou vaginale)!!!!!!!!
                        Réponse 🟣 : En crachant sur une personne
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
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

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'vih_four_third_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 5️⃣')
                    .setDescription(`
                        Comment se transmet le VIH? \n
                        Réponse 🟢 : Un baiser
                        Réponse 🟡 : Un câlin
                        Réponse 🔴 : Pénétration (anale ou vaginale)!!!!!!!!
                        Réponse 🟣 : En crachant sur une personne
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
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

                await interaction.reply({ embeds: [embed], components: [row] });
            } else if(interaction.customId === 'vih_four_fourth_option') {
                const embed = new EmbedBuilder()
                    .setTitle('Question numéro 5️⃣')
                    .setDescription(`
                        Comment se transmet le VIH? \n
                        Réponse 🟢 : Un baiser
                        Réponse 🟡 : Un câlin
                        Réponse 🔴 : Pénétration (anale ou vaginale)!!!!!!!!
                        Réponse 🟣 : En crachant sur une personne
                    `)
                    .setColor("DarkGold")
                
                const row = new ActionRowBuilder()
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

                await interaction.reply({ embeds: [embed], components: [row] });
            }
        }
    }
}