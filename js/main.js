var game = new Phaser.Game(1250, 600, Phaser.AUTO, document.getElementById('gameDiv'));

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('lobby', lobbyState);
game.state.add('player', playerState);
game.state.add('room', roomState);
game.state.add('game',gameState);
game.state.add('end', endState);
game.state.add('set', setState);

game.state.start('boot');