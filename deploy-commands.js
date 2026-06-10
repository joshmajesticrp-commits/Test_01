require('dotenv').config();

const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'regeln',
    description: 'Zeigt die Serverregeln an',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Slash Commands werden registriert...');

    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: commands }
    );

    console.log('✔ Slash Commands erfolgreich registriert!');
  } catch (error) {
    console.error('❌ Fehler beim Registrieren:', error);
  }
})();
