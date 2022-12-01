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
                            description: `Le papillomavirus est en général asymptomatique. Dans certains cas, elle peut entrainer des lésions pouvant évoluer en cancer dont le plus fréquent est le cancer du col de l'utérus.`,
                            value: 'fourth_option',
                        },
                        {
                            label: `La syphillis`,
                            description: `La syphilis est une maladie strictement humaine provoquant des lésions cutanées et des muqueuses d'aspect variable. La période d'incubation est longue : 3 semaines en moyenne.`,
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