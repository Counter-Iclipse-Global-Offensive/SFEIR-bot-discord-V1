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
							description: 'Le VIH est le virus qui entraine le sida.',
							value: 'first_option',
						},
						{
							label: `L'hépatite B`,
							description: 'NT',
							value: 'second_option',
						},
                        {
                            label: `L'herpès`,
                            description: 'NT',
                            value: 'third_option',
                        },
                        {
                            label: `Le papillomavirus`,
                            description: 'NT',
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
            .setDescription(`
                Vous retrouverez dans ce quizz, des questions sur les maladies sexuellement transmissibles tels que
				  🥵Le VIH 
				  🤣L'hépatite B
				  🥸Le papillomavirus
				  💀L'herpès
				  🙊Syphilis
            `)

		await interaction.reply({ embeds: [embed], components: [row] });
    }
}