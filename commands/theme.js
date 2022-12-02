const { ActionRowBuilder, SlashCommandBuilder } = require('discord.js')
const memberData = require('../models/member.model')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('theme')
        .setDescription('Change le theme du site web')
        .addStringOption(option => option.setName('color').setDescription('La couleure du theme').setRequired(true).addChoices(
			{ name: 'Blanc', value: 'Blanc' },
			{ name: 'Noir', value: 'Noir' })),
    async execute(interaction) {

        const memberModel = await memberData.findOne({ memberId: interaction.user.id });
        var theme = interaction.options.getString("color");

        if (!memberModel) {
            const newData = new memberData({ memberId: interaction.user.id });
            newData.save();
        }

        if (theme == "Blanc") {
            memberData.theme = Boolean.TRUE;
            memberModel.save();
        }
        else {
            memberData.theme = Boolean.FALSE;
            memberModel.save();
        }

		await interaction.reply(`Theme changé en ${theme}`);
    }
}