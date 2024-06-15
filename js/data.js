// Products
  const products = [
    {
      id: 'Playstation 5',
      no: 1,
      title: 'RPGolf Legends',
      genre: 'Sports',
      price: 29.99,
      cover: 'pic01.jpg',
      description: 'Retro gaming graphics to transport you back to the 80s. Simple, intuitive controls enable you to battle, golf, and explore the world. Dungeons filled with treasure and danger! Deadly boss fights.'
    },
    {
      id: 'Nintendo Switch',
      no: 2,
      title: 'Rain Code',
      genre: 'Action & Advanture',
      price: 109.99,
      cover: 'pic02.jpg',
      description: 'A New Project from the Team of Danganronpa - Experience the latest lucid-noir adventure written by Kazutaka Kodaka! 3D Detective Adventure - Explore the neon-drenched city of rain and its stygian counterpart in a full 3D environment to the fantastic phantasmal music of Masafumi Takada.'
    },
    {
      id: 'Playstation 5',
      no: 3,
      title: 'Wo Long: Fallen Dynasty',
      genre: 'Action & Advanture',
      price: 59.99,
      cover: 'pic03.jpg',
      description: 'The Masocore Dream Team - A joint creation by Team NINJA producers Fumihiko Yasuda (Nioh) and Masaaki Yamagiwa (Bloodborne). Live by the Sword - Renowned for ruthless strikes that change the tide of battle in a flash, sword practitioners of the Chinese martial arts gracefully change pace as they shift between offensive and defensive maneuvers.'
    },
    {
      id: 'Playstation 4',
      no: 4,
      title: 'Yomawari: Lost in the Dark',
      genre: 'Action & Advanture',
      price: 49.99,
      cover: 'pic04.jpg',
      description: 'The Night Continues - Another chapter of the atmospheric horror series has emerged from the shadows - With a new story set in a frighteningly familiar world, new and returning fans alike can dive right in. Home Sweet Haunt - Eerie sound design and shadowy environments set the stage for gruesome and terrifying ghosts never seen before in the series.'
    },
    {
      id: 'Xbox Series X|S',
      no: 5,
      title: 'Hot Wheels Unleashed',
      genre: 'Racing & Flying',
      price: 59.99,
      cover: 'pic05.jpg',
      description: 'Collect the worlds raddest cars, build insane tracks and compete in the most exciting races!race side by side a friend in the 2-player local split-screen mode or face up to 12 players online.bend and stretch the iconic orange track piece to create your unique design and then add special boosters, loops, obstacles and exclusive interactive elements to build your own racing Paradise.'
    },
    {
      id: 'Nintendo Switch',
      no: 6,
      title: 'NieR: Automata The End of YoRHa',
      genre: 'Action & Advanture',
      price: 39.99,
      cover: 'pic06.jpg',
      description: 'Action Packed Battles Switch between melee and ranged attacks against enemies and bosses across a variety of open field maps; Tight controls and fluid combat are simple to learn while offering plenty of depth for experienced action gamers.'
    },
    {
      id: 'Xbox One',
      no: 7,
      title: 'WWE 2K22',
      genre: 'Sports',
      price: 29.99,
      cover: 'pic07.jpg',
      description: 'Get ripped out of the stands and hit with complete control of the WWE Universe. Hitting this hard has never been so easy.Everything from the controls to the graphics have been redesigned, and feels as real as being ringside at WrestleMania.'
    },
    {
      id: 'Playstation 5',
      no: 8,
      title: 'The Chant',
      genre: 'Action & Advanture',
      price: 39.99,
      cover: 'pic08.jpg',
      description: 'Interact with the other members of the retreat as they slowly become consumed by their own negative energy Survive against an array of prismatic creatures and cultists released from The Gloom as you piece together the weird history of the island. Inspired by the psychedelic horror of the 1970s, experience a landscape of colored lighting and an electronic rock soundtrack, composed by the award-winning Paul Ruskay.'
    },
    {
      id: 'Xbox Series X|S',
      no: 9,
      title: 'Grand Theft Auto: The Trilogy',
      genre: 'Roleplaying',
      price: 29.99,
      cover: 'pic09.jpg',
      description: 'Grand Theft Auto III: It all starts in Liberty City. With the revolutionary freedom to go anywhere and jack anyone, Grand Theft Auto III puts the center of the criminal underworld at your fingertips, if you have enough guts to take it.Grand Theft Auto: Vice City: Welcome to the 1980s. From the decade of big hair and pastel suits comes the story of one mans rise to the top of the criminal pile.'
    },
    {
      id: 'Playstation 4',
      no: 10,
      title: 'World of Outlaws Dirt Racing',
      genre: 'Racing & Flying',
      price: 49.99,
      cover: 'pic10.jpg',
      description: '6 different dirt series, including Sprint Cars, Late Models, and Street Stock cars, More than 40 total tracks. 13 licensed tracks, including Eldora, Volusia, Knoxville, and more. Career Mode, Championship Season, Quick Race, Split Screen and 25-Player Multiplayer. All new Custom Car Creator, allowing more versatility than ever before.'
    },
    {
      id: 'Playstation 5',
      no: 11,
      title: 'Tactics Ogre: Reborn',
      genre: 'Action & Advanture',
      price: 49.99,
      cover: 'pic11.jpg',
      description: 'Enjoy numerous playability improvements, such as a quicker pace of battle, auto save, and a complete overhaul to the controls and UI to make it easier to get into the game than ever. The unparalleled details of the characters and backgrounds from the original Tactics Ogre (1995) have been recreated in high definition, while the detailed pixel art that gives the game its unique feel has been preserved and enhanced.'
    },
    {
      id: 'Playstation 5',
      no: 12,
      title: 'Mount & Blade 2: Bannerlord',
      genre: 'Roleplaying',
      price: 49.99,
      cover: 'pic12.jpg',
      description: 'Explore, fight and conquer your way across the vast continent of Calradia, making friends and enemies along the way - Raise your own army and lead it into battle, commanding and fighting alongside your troops in the thick of the action. Play the game the way you want to play it - Plot your own path to power in a dynamic sandbox adventure where no two playthroughs are the same.'
    },
    {
      id: 'Playstation 5',
      no: 13,
      title: 'Gothic 1 Remake',
      genre: 'Action & Advanture',
      price: 59.99,
      cover: 'pic13.jpg',
      description: 'Return to The Colony, in a full blown remake of the popular and revolutionary game Gothic from 2001. Rediscover the world of the mining colony, its secrets and challenges. Play as the Nameless Hero Manage the fate of a lifetime convicted prisoner who must survive in a world of wild animals, creatures and convicts of dangerous reputation.'
    },
    {
      id: 'Playstation 4',
      no: 14,
      title: 'Crash 4: Its About Time',
      price: 37.99,
      genre: 'Kids & Family',
      cover: 'pic14.jpg',
      description: 'New abilities, More playable characters, Alternate Dimensions, Ridonkulous bosses and Same awesome sauce.'
    },
    {
      id: 'Xbox Series X|S',
      no: 15,
      title: 'No More Heroes 3',
      genre: 'Roleplaying',
      price: 59.99,
      cover: 'pic15.jpg',
      description: 'Grow Your Galactic Legend - In classic No More Heroes style, the Galactic Superhero Rankings are packed with outrageous boss battles, each oozing with personality; Soar through the ranks and prove youre the baddest in the universe. Old Dog, New Tricks - From beam katana boss to wrestling pro, Travis can do it all; Take violence to new extremes with the customizable Death Glove, and punish those deadly invaders with combat that suits your style.'
    },
    {
      id: 'Xbox Series X|S',
      no: 16,
      title: 'Teenage Mutant Ninja Turtles',
      genre: 'Action & Advanture',
      price: 39.99,
      cover: 'pic16.jpg',
      description: 'Thirteen classic Teenage Mutant Ninja Turtles games by KONAMI in one incredible package. Added Online Play for certain games and Local Couch Play. Save Anytime and Rewind as well as Button Mapping. Eleven Japanese Regional Versions.'
    },
    {
      id: 'Nintendo Switch',
      no: 17,
      title: 'Pj Masks: Heroes of The Night',
      genre: 'Kids & Family',
      price: 19.99,
      cover: 'pic17.jpg',
      description: 'Be the heroes - play as Cat boy, owlette, and gekko. Explore the world - visit 8 familiar pj masks locations. Play safely - Use controls Designed for little heroes. Stop the baddies - save the day from romeo, luna girl, night Ninja and more. Search for collectibles - find lots of cool hidden items.'
    },
    {
      id: 'Playstation 4',
      no: 18,
      title: 'Grand Theft Auto V',
      genre: 'Roleplaying',
      price: 19.99,
      cover: 'pic18.jpg',
      description: 'GRAND THEFT AUTO V: When a young street hustler, a retired bank robber and a terrifying psychopath land themselves in trouble, they must pull off a series of dangerous heists to survive in a city in which they can trust nobody, least of all each other.GRAND THEFT AUTO ONLINE: Discover an ever-evolving world of choices and ways to play as you climb the criminal ranks of Los Santos and Blaine County in the ultimate shared Online experience.'
    },
    {
      id: 'Nintendo Switch',
      no: 19,
      title: 'Paw Patrol On A Roll',
      genre: 'Kids & Family',
      price: 19.99,
      cover: 'pic19.jpg',
      description: 'Ryder and all eight Paw Patrol pups, including everest & tracker. 16 daring adventures set in 8 adventure Bay locations. Special pup abilities that need to be used for each rescue. Playing as two different pups per mission.'
    },
    {
      id: 'Xbox Series X|S',
      no: 20,
      title: 'Saints Row Day 1 Edition',
      genre: 'Shooters',
      price: 51.99,
      cover: 'pic20.jpg',
      description: 'Discover the Weird, Wild, West - Dive in to Santo Ileso, the biggest and best Saints Row playground ever, spread across nine unique districts surrounded by the vast, majestic beauty of the Southwest Desert. Build Your Criminal Empire - Take over the city block by block, wage war against enemy factions and tighten your grip on the streets with ingenious criminal ventures.'
    },
    {
      id: 'Playstation 4',
      no: 21,
      title: 'Elden Ring',
      genre: 'Roleplaying',
      price: 49.99,
      cover: 'pic21.jpg',
      description: 'ELDEN RING is a fantasy action-RPG adventure set within a world created by Hidetaka Miyazaki—creator of the influential DARK SOULS video game series; and George R.R. Martin—author of The New York Times best-selling fantasy series, A Song of Ice and Fire.'
    },
    {
      id: 'Playstation 4',
      no: 22,
      title: 'Hasbro Family Fun Pack',
      genre: 'Kids & Family',
      price: 29.99,
      cover: 'pic22.jpg',
      description: 'GREAT VALUE: Four classic titles in one bundle, providing hours of entertainment. MONOPOLY Plus: Play the Monopoly you know and love set in a beautiful 3D world: Watch the board come to life. RISK: Compete with players from around the world in this classic game of global domination.'
    },
    {
      id: 'Playstation 4',
      no: 23,
      title: 'Marvel Avengers',
      genre: 'Action & Advanture',
      price: 14.99,
      cover: 'pic23.jpg',
      description: 'Available on September 4th, 2020 for PlayStation 4, plus PlayStation 5 owners can upgrade to the PS5 version of the game at no additional cost; Players can also enjoy cross-gen play between PlayStation 4 and PlayStation 5.'
    },
    {
      id: 'Xbox One',
      no: 24,
      title: 'Grand Theft Auto V Premium Edition',
      genre: 'Roleplaying',
      price: 19.59,
      cover: 'pic24.jpg',
      description: 'GRAND THEFT AUTO V: When a young street hustler, a retired bank robber and a terrifying psychopath land themselves in trouble, they must pull off a series of dangerous heists to survive in a city in which they can trust nobody, least of all each other. GRAND THEFT AUTO ONLINE: Discover an ever-evolving world of choices and ways to play as you climb the criminal ranks of Los Santos and Blaine County in the ultimate shared Online experience.'
    },
    {
      id: 'Xbox Series X|S',
      no: 25,
      title: 'Outriders: Worldslayer',
      genre: 'Roleplaying',
      price: 31.49,
      cover: 'pic25.jpg',
      description: 'A Journey Of Death Humanitys hope for survival rests on your journey deep into the cradle of Enochs civilization. 4 Unique Classes Create and customize your own Outrider and choose from 4 unique powerful classes each with its own deadly array of brutal abilities with Skill Trees and Pax Trees to further define your personal playstyle.'
    },
    {
      id: 'Nintendo Switch',
      no: 26,
      title: 'Mario + Rabbids Kingdom Battle',
      genre: 'Kids & Family',
      price: 24.49,
      cover: 'pic26.jpg',
      description: 'Winner of over 50 E3 awards and nominations. Mario and Rabbids universes collide in this new adventure, exclusively on the Nintendo Switch system. Mario, Luigi, Princess Peach, and Yoshi join forces with four Rabbis heroes with their own unique personalities. Easy to play, difficult to master Solo and co-op turn based combat is a fresh game play experience.'
    },
    {
      id: 'Xbox Series X|S',
      no: 27,
      title: 'Dying Light 2 Stay Human',
      genre: 'Shooters',
      price: 29.99,
      cover: 'pic27.jpg',
      description: 'VAST OPEN WORLD - Participate in the life of a city engulfed in a new dark era. Discover different paths and hidden passages, as you explore its multiple levels and locations. CREATIVE & BRUTAL COMBAT - Take advantage of your parkour skills to tip the scales of even the most brutal encounter. Clever thinking, traps and creative weapons will be your best friends.'
    },
    {
      id: 'Xbox Series X|S',
      no: 28,
      title: 'Marvel Guardians of the Galaxy',
      genre: 'Action & Advanture',
      price: 19.99,
      cover: 'pic28.jpg',
      description: 'TAKE THE LEAD - Become Star-Lord and call the shots for the Guardians in and out of battle. ALL-NEW STORY - Face a cosmic threat you unleashed in this fresh take on Guardians of the Galaxy. BECOME FAMILY - Turn your band of outlaws into legendary heroes on a wild ride across space.'
    },
    {
      id: 'Playstation 4',
      no: 29,
      title: 'Nickelodeon Kart Racers',
      genre: 'Kids & Family',
      price: 19.49,
      cover: 'pic29.jpg',
      description: 'Choose from 12 of the most iconic Nickelodeon characters from SpongeBob, TMNT, Hey Arnold, Rugrats and more. Race on 24 different SLIMED themed tracks, including cup races. Customizable karts with multiple power-ups and special attacks. Co-op and local multi-player.'
    },
    {
      id: 'Playstation 4',
      no: 30,
      title: 'De Blob 2',
      genre: 'Kids & Family',
      price: 14.99,
      cover: 'pic30.jpg',
      description: 'Imagine: set Off on an action packed Color adventure with 12 new single player story levels where custom paints, patterns and music bring the world to life any way you want. Laugh: Only the colorful prankster Blob can foil Papa Blancs evil hypno plot to steal all the color from Prisma City.'
    },
    {
      id: 'Xbox One',
      no: 31,
      title: 'Sonic Forces',
      genre: 'Kids & Family',
      price: 19.99,
      cover: 'pic31.jpg',
      description: 'Three types of gameplay: Fast paced action as Modern Sonic, thrilling platforming as Classic Sonic, and utilize powerful gadgets as your own custom Hero Character. Fight against a brand new mysterious and powerful enemy, Infinite. Featuring an all-star cast of well-known Sonic franchise heroes and villains.'
    },
    {
      id: 'Xbox One',
      no: 32,
      title: 'PGA TOUR 2K21',
      genre: 'Sports',
      price: 12.39,
      cover: 'pic32.jpg',
      description: 'ALL-NEW PGA TOUR CAREER MODE Prove youve got what it takes to become FedExCup Champion. Take on PGA TOUR Pros during your very own career, earning rewards and gear along the way. PGA TOUR PROS AND NEW COURSES Play against Justin Thomas and 11 top pros on stunning, real-life courses including TPC Sawgrass, East Lake Golf Club, and more.'
    }
  ];
