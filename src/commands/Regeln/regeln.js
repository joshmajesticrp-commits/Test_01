const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('regeln')
        .setDescription('Zeigt die Serverregeln an'),

    async execute(interaction) {

        const embed = new EmbedBuilder()
            .setColor('#8A2BE2')
            .setTitle('📜 Gambo-Hub Regeln')
            .setDescription('Bitte halte dich an diese Regeln.')
            .addFields(
                {
                    name: '1️⃣ Respekt',
                    value: 'Behandle alle Mitglieder respektvoll.'
                },
                {
                    name: '2️⃣ Kein Spam',
                    value: 'Spam und Massen-Pings sind verboten.'
                },
                {
                    name: '3️⃣ Keine Werbung',
                    value: 'Werbung nur mit Genehmigung des Teams.'
                },
                {
                    name: '4️⃣ Angemessene Inhalte',
                    value: 'Keine beleidigenden oder NSFW-Inhalte.'
                },
                {
                    name: '5️⃣ Team-Anweisungen',
                    value: 'Anweisungen des Teams sind zu befolgen.'
                }
            )
            .setFooter({
                text: 'Gambo-Hub'
            })
            .setTimestamp();

        await interaction.reply({
            embeds: [embed]
        });
    }
};
