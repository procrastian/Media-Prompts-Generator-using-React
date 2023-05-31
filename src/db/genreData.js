const genres = [
    {
      "num": "1",
      "genre": "Action comedy"
    },
    {
      "num": "2",
      "genre": "Action film"
    },
    {
      "num": "3",
      "genre": "Actuality film"
    },
    {
      "num": "4",
      "genre": "Adventure film"
    },
    {
      "num": "5",
      "genre": "Amateur film"
    },
    {
      "num": "6",
      "genre": "American Eccentric Cinema"
    },
    {
      "num": "7",
      "genre": "Animated documentary"
    },
    {
      "num": "8",
      "genre": "Anthology film"
    },
    {
      "num": "9",
      "genre": "Apocalyptic and post-apocalyptic fiction"
    },
    {
      "num": "10",
      "genre": "Art film"
    },
    {
      "num": "11",
      "genre": "Art horror"
    },
    {
      "num": "12",
      "genre": "Arthouse action film"
    },
    {
      "num": "13",
      "genre": "Arthouse "
    },
    {
      "num": "14",
      "genre": "Arthouse science fiction film"
    },
    {
      "num": "15",
      "genre": "Australian Western"
    },
    {
      "num": "16",
      "genre": "B movie"
    },
    {
      "num": "17",
      "genre": "Backstage musical"
    },
    {
      "num": "18",
      "genre": "Badaga cinema"
    },
    {
      "num": "19",
      "genre": "Beach party film"
    },
    {
      "num": "20",
      "genre": "Behind-the-scenes"
    },
    {
      "num": "21",
      "genre": "Biographical film"
    },
    {
      "num": "22",
      "genre": "Black comedy"
    },
    {
      "num": "23",
      "genre": "Body horror"
    },
    {
      "num": "24",
      "genre": "Bromantic comedy"
    },
    {
      "num": "25",
      "genre": "Buddy cop"
    },
    {
      "num": "26",
      "genre": "Buddy film"
    },
    {
      "num": "27",
      "genre": "Camcorder film"
    },
    {
      "num": "28",
      "genre": "Cannibal film"
    },
    {
      "num": "29",
      "genre": "Cartoon-like"
    },
    {
      "num": "30",
      "genre": "Children's film"
    },
    {
      "num": "31",
      "genre": "Cinéma vérité"
    },
    {
      "num": "32",
      "genre": "Cinepoetry"
    },
    {
      "num": "33",
      "genre": "Comedy drama"
    },
    {
      "num": "34",
      "genre": "Comedy film"
    },
    {
      "num": "35",
      "genre": "Comedy horror"
    },
    {
      "num": "36",
      "genre": "Comedy thriller"
    },
    {
      "num": "37",
      "genre": "Science fiction comedy"
    },
    {
      "num": "38",
      "genre": "Coming-of-age story"
    },
    {
      "num": "39",
      "genre": "Composite film"
    },
    {
      "num": "40",
      "genre": "Conspiracy fiction"
    },
    {
      "num": "41",
      "genre": "Crime film"
    },
    {
      "num": "42",
      "genre": "Cult film"
    },
    {
      "num": "43",
      "genre": "Dance film"
    },
    {
      "num": "44",
      "genre": "Detective fiction"
    },
    {
      "num": "45",
      "genre": "Direct cinema"
    },
    {
      "num": "46",
      "genre": "Disaster film"
    },
    {
      "num": "47",
      "genre": "Docudrama"
    },
    {
      "num": "48",
      "genre": "Docufiction"
    },
    {
      "num": "49",
      "genre": "Documentary film"
    },
    {
      "num": "50",
      "genre": "Economics film"
    },
    {
      "num": "51",
      "genre": "Educational film"
    },
    {
      "num": "52",
      "genre": "Epic film"
    },
    {
      "num": "53",
      "genre": "European art cinema"
    },
    {
      "num": "54",
      "genre": "Eurospy film"
    },
    {
      "num": "55",
      "genre": "Experimental film"
    },
    {
      "num": "56",
      "genre": "Fantasy comedy"
    },
    {
      "num": "57",
      "genre": "Fantasy film"
    },
    {
      "num": "58",
      "genre": "Female buddy film"
    },
    {
      "num": "59",
      "genre": "Film gris"
    },
    {
      "num": "60",
      "genre": "Film noir"
    },
    {
      "num": "61",
      "genre": "Folk horror"
    },
    {
      "num": "62",
      "genre": "Gangster film"
    },
    {
      "num": "63",
      "genre": "German underground horror"
    },
    {
      "num": "64",
      "genre": "Gothic film"
    },
    {
      "num": "65",
      "genre": "Gothic romance film"
    },
    {
      "num": "66",
      "genre": "Grindhouse"
    },
    {
      "num": "67",
      "genre": "Heist film"
    },
    {
      "num": "68",
      "genre": "Heritage film"
    },
    {
      "num": "69",
      "genre": "Historical drama"
    },
    {
      "num": "70",
      "genre": "Historical fiction"
    },
    {
      "num": "71",
      "genre": "Hood film"
    },
    {
      "num": "72",
      "genre": "Horror film"
    },
    {
      "num": "73",
      "genre": "Jukebox musical"
    },
    {
      "num": "74",
      "genre": "Kaiju"
    },
    {
      "num": "75",
      "genre": "Korean melodrama"
    },
    {
      "num": "76",
      "genre": "Kung fu film"
    },
    {
      "num": "77",
      "genre": "Legal drama"
    },
    {
      "num": "78",
      "genre": "Legal thriller"
    },
    {
      "num": "79",
      "genre": "Luchador films"
    },
    {
      "num": "80",
      "genre": "Mafia comedy film"
    },
    {
      "num": "81",
      "genre": "Mafia film"
    },
    {
      "num": "82",
      "genre": "Magic realism"
    },
    {
      "num": "83",
      "genre": "Martial arts film"
    },
    {
      "num": "84",
      "genre": "Maximalist film"
    },
    {
      "num": "85",
      "genre": "Medical drama"
    },
    {
      "num": "86",
      "genre": "Melodrama"
    },
    {
      "num": "87",
      "genre": "Metacinema"
    },
    {
      "num": "88",
      "genre": "Midnight movie"
    },
    {
      "num": "89",
      "genre": "Minimalist film"
    },
    {
      "num": "90",
      "genre": "Mockbuster"
    },
    {
      "num": "91",
      "genre": "Mockumentary"
    },
    {
      "num": "92",
      "genre": "Modernist film"
    },
    {
      "num": "93",
      "genre": "Monster movie"
    },
    {
      "num": "94",
      "genre": "Music video"
    },
    {
      "num": "95",
      "genre": "Musical film"
    },
    {
      "num": "96",
      "genre": "Mystery film"
    },
    {
      "num": "97",
      "genre": "Mythopoeia"
    },
    {
      "num": "98",
      "genre": "Narco pelicula"
    },
    {
      "num": "99",
      "genre": "Narrative film"
    },
    {
      "num": "100",
      "genre": "Neo-noir"
    },
    {
      "num": "101",
      "genre": "Non-narrative film"
    },
    {
      "num": "102",
      "genre": "Parody film"
    },
    {
      "num": "103",
      "genre": "Poetry film"
    },
    {
      "num": "104",
      "genre": "Political thriller"
    },
    {
      "num": "105",
      "genre": "Poliziotteschi"
    },
    {
      "num": "106",
      "genre": "Postmodern horror"
    },
    {
      "num": "107",
      "genre": "Postmodernist film"
    },
    {
      "num": "108",
      "genre": "Prison film"
    },
    {
      "num": "109",
      "genre": "Pseudo-documentary"
    },
    {
      "num": "110",
      "genre": "Psychedelic film"
    },
    {
      "num": "111",
      "genre": "Psychological drama"
    },
    {
      "num": "112",
      "genre": "Psychological horror"
    },
    {
      "num": "113",
      "genre": "Psychological thriller"
    },
    {
      "num": "114",
      "genre": "Pulp noir"
    },
    {
      "num": "115",
      "genre": "Reality film"
    },
    {
      "num": "116",
      "genre": "Retrospective"
    },
    {
      "num": "117",
      "genre": "Road movie"
    },
    {
      "num": "118",
      "genre": "Romance film"
    },
    {
      "num": "119",
      "genre": "Romantic comedy"
    },
    {
      "num": "120",
      "genre": "Romantic fantasy"
    },
    {
      "num": "121",
      "genre": "Romantic thriller"
    },
    {
      "num": "122",
      "genre": "Samurai cinema"
    },
    {
      "num": "123",
      "genre": "Satanic film"
    },
    {
      "num": "124",
      "genre": "Satire"
    },
    {
      "num": "125",
      "genre": "Science fiction film"
    },
    {
      "num": "126",
      "genre": "Screwball comedy"
    },
    {
      "num": "127",
      "genre": "Semidocumentary"
    },
    {
      "num": "128",
      "genre": "Sharksploitation"
    },
    {
      "num": "129",
      "genre": "Silent film"
    },
    {
      "num": "130",
      "genre": "Skate video"
    },
    {
      "num": "131",
      "genre": "Slapstick"
    },
    {
      "num": "132",
      "genre": "Slasher film"
    },
    {
      "num": "133",
      "genre": "Slow cinema"
    },
    {
      "num": "134",
      "genre": "Social film"
    },
    {
      "num": "135",
      "genre": "Social problem film"
    },
    {
      "num": "136",
      "genre": "Social thriller"
    },
    {
      "num": "137",
      "genre": "Space Western"
    },
    {
      "num": "138",
      "genre": "Spaghetti Western"
    },
    {
      "num": "139",
      "genre": "Splatter film"
    },
    {
      "num": "140",
      "genre": "Sports film"
    },
    {
      "num": "141",
      "genre": "Spy film"
    },
    {
      "num": "142",
      "genre": "Stoner film"
    },
    {
      "num": "143",
      "genre": "Superhero film"
    },
    {
      "num": "144",
      "genre": "Surf film"
    },
    {
      "num": "145",
      "genre": "Survival film"
    },
    {
      "num": "146",
      "genre": "Swashbuckler"
    },
    {
      "num": "147",
      "genre": "Sword-and-sandal"
    },
    {
      "num": "148",
      "genre": "Teen film"
    },
    {
      "num": "149",
      "genre": "Thriller film"
    },
    {
      "num": "150",
      "genre": "Training film"
    },
    {
      "num": "151",
      "genre": "Travel documentary"
    },
    {
      "num": "152",
      "genre": "Vampire film"
    },
    {
      "num": "153",
      "genre": "Vigilante film"
    },
    {
      "num": "154",
      "genre": "War film"
    },
    {
      "num": "155",
      "genre": "Werewolf fiction"
    },
    {
      "num": "156",
      "genre": "Western "
    },
    {
      "num": "157",
      "genre": "Wuxia"
    },
    {
      "num": "158",
      "genre": "Yakuza film"
    },
    {
      "num": "159",
      "genre": "Zombie comedy"
    },
    {
      "num": "160",
      "genre": "Zombie film"
    }
  ]

export default genres