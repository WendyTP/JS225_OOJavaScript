let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',

  listGames() {
    console.log(this)
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);
    });
  }
};

TESgames.listGames();
/*
acutal output:
undefined Arena
undefined Daggerfall
undefined Morrowind
undefined Oblivion
undefined Skyrim

desired output:
The Elder Scrolls Arena
The Elder Scrolls Daggerfall
The Elder Scrolls Morrowind
The Elder Scrolls Oblivion
The Elder Scrolls Skyrim

This is because function as arguments lose their surrounding context.
Therefore, the 'this.seriesTitle' refers to seriesTitle at global context, which doesn't exist.
*/