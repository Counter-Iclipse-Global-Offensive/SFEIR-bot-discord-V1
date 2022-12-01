const { EmbedBuilder, ActionRowBuilder, SlashCommandBuilder, StringSelectMenuBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quizz')
        .setDescription('A quizz about the sexually transmitted diseases'),
    async execute(interaction) {
        const row = new ActionRowBuilder()
			.addComponents(
				new StringSelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Faites votre choix')
					.addOptions(
						{
							label: 'Le VIH',
							description: `est un virus qui en l'absence de traitement, est responsable du sida.`,
							value: 'first_option',
						},
						{
							label: `L'hépatite B`,
							description: `est une infection potentiellement mortelle causée par le virus de l'hépatite B (VHB).`,
							value: 'second_option',
						},
                        {
                            label: `L'herpès`,
                            description: `est une infection sexuellement transmissible causée par le virus herpes simplex (HSV).`,
                            value: 'third_option',
                        },
                        {
                            label: `Le papillomavirus`,
                            description: `est en général asymptomatique. Dans le pire des cas elle peut provoquer un cancer.`,
                            value: 'fourth_option',
                        },
                        {
                            label: `La syphillis`,
                            description: `est une maladie provoquant des lésions cutanées et des muqueuses d'aspect variable.`,
                            value: 'fifth_option',
                        },
					),
			);

        const embed = new EmbedBuilder()
            .setTitle('Quizz')
            .setColor('0xDC143C')
            .setThumbnail('https://e7.pngegg.com/pngimages/253/469/png-clipart-public-flag-red-ribbon-hiv-prevention-red-preventing-hiv.png')
            .setDescription(`
                Vous retrouverez dans ce quizz, des questions sur les maladies sexuellement suivantes :
				  🎗️Le VIH 
				  🫀L'hépatite B
				  🧑🏻‍🤝‍🧑🏻Le papillomavirus
				  👄L'herpès
				  🦠Syphilis
            `)
            

		await interaction.reply({ embeds: [embed], components: [row] });
    }
}