const { EmbedBuilder, ActionRowBuilder, SlashCommandBuilder, Events, SelectMenuBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('quizz')
        .setDescription('A quizz about the sexually transmitted diseases'),
    async execute(interaction) {
        const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions(
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
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