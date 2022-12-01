const { EmbedBuilder, ActionRowBuilder, SlashCommandBuilder, SelectMenuBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quizz')
        .setDescription('A quizz about the sexually transmitted diseases'),
    async execute(interaction) {
        const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Faites votre choix')
					.addOptions(
						{
							label: 'Le VIH',
							description: `Le VIH est un virus qui affaiblit le système immunitaire, et en l'absence de traitement, est responsable du sida.`,
							value: 'first_option',
						},
						{
							label: `L'hépatite B`,
							description: `L'hépatite B est une infection hépatique potentiellement mortelle causée par le virus de l'hépatite B (VHB)`,
							value: 'second_option',
						},
                        {
                            label: `L'herpès`,
                            description: `L'herpès est une infection sexuellement transmissible causée par le virus herpes simplex (HSV).`,
                            value: 'third_option',
                        },
                        {
                            label: `Le papillomavirus`,
                            description: ``,
                            value: 'fourth_option',
                        },
                        {
                            label: `La syphillis`,
                            description: 'NT',
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