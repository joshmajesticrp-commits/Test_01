const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'regeln',
    description: 'Zeigt die Serverregeln an',
  },
];

const rest = new REST({ version: '10' }).setToken('DEIN_BOT_TOKEN');

(async () => {
  try {
    console.log('Slash Commands werden registriert...');

    await rest.put(
      Routes.applicationGuildCommands('1512960643219849347', '1512178191413018824'),
      { body: commands }
    );

    console.log('Fertig!');
  } catch (error) {
    console.error(error);
  }
})();
