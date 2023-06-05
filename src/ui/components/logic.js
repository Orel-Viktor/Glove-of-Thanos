let heroes = [
   'deba',
   'petcuk',
   'ghoul',
   'stas',
   'yegorka',
   'ilyha',
   'kulya',
   'solodov',
   'olegka',
   'artem',
   'orel',
   'jeka',
   'goft',
   'gunt',
   'dimon',
   'denny',
   'natasha',
   'igorek',
   'kolyan',
];
function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}
const killHeroes = () => {
   let luckyHeroes = [];
   let condition = Math.floor(heroes.length / 2);
   do {
      let random = getRandomInt(heroes.length);
      let luckyHero = heroes[random];
      luckyHeroes.includes(luckyHero) ? null : luckyHeroes.push(luckyHero);
   } while (luckyHeroes.length < condition);
   heroes = luckyHeroes;
   console.log(heroes);
};
killHeroes();
killHeroes();
killHeroes();
killHeroes();
