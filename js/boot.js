var bootState = {
    ///遊戲的物力系統、或是有關整體遊戲的設定。
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.state.start('load');
    }
}