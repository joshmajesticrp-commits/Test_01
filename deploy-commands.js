const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'regeln',
    description: 'Zeigt die Serverregeln an',
  },
];

const rest = new REST({ version: '10' }).setToken('MTUxMjk2MDY0MzIxOTg0OTM0Nw.G_m3Bn.i2Sne-3cT0l_US3P2_mvgkU9h-ODQfVSquLAFE');

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
