const prompts = [
    {
      "num": "1",
      "prompt": "Someone watching a news report about a local serial killer hears a floorboard creak."
    },
    {
      "num": "2",
      "prompt": "A brother and sister survive after the apocalypse."
    },
    {
      "num": "3",
      "prompt": "Someone reading a scary book hears a knock at the door."
    },
    {
      "num": "4",
      "prompt": "An recovering alcoholic struggles finding alternatives to the pub"
    },
    {
      "num": "5",
      "prompt": "Students in school dealing with surviving homework a la Alcoholics Anonymous"
    },
    {
      "num": "6",
      "prompt": "Zombie attack!"
    },
    {
      "num": "7",
      "prompt": "Teenagers surviving the school politics of lunchtime."
    },
    {
      "num": "8",
      "prompt": "An addicted gambler sits at a table."
    },
    {
      "num": "9",
      "prompt": "A day in the life of the first astronaut on Mars."
    },
    {
      "num": "10",
      "prompt": "The last day in the life of the last colony on Mars."
    },
    {
      "num": "11",
      "prompt": "A Man and a woman keep seeing each other during a night out with their respective friends."
    },
    {
      "num": "12",
      "prompt": "The experience of a character invited to a graduation party of someone they don't know."
    },
    {
      "num": "13",
      "prompt": "The first human clone awakens."
    },
    {
      "num": "14",
      "prompt": "The lifespan of a dog."
    },
    {
      "num": "15",
      "prompt": "The lifespan of a cat."
    },
    {
      "num": "16",
      "prompt": "Dracula is in his coffin not being able to sleep and having to kill time until dusk."
    },
    {
      "num": "17",
      "prompt": "A child's walk to school in a dangerous urban neighbourhood."
    },
    {
      "num": "18",
      "prompt": "A character wakes up with a gun in their hand and blood all over them."
    },
    {
      "num": "19",
      "prompt": "A day in the life of an astronaut living on the moon."
    },
    {
      "num": "20",
      "prompt": "The first day of school for a new student as they struggle to make a friend."
    },
    {
      "num": "21",
      "prompt": "The imaginary battle of a Dungeons and Dragons campaign."
    },
    {
      "num": "22",
      "prompt": "The life of a delivery pizza as it hits the streets and journies to it's destiny"
    },
    {
      "num": "23",
      "prompt": "The story of a pilot that sees a UFO in the skies."
    },
    {
      "num": "24",
      "prompt": "A robot comes to life in an inventor's shop."
    },
    {
      "num": "25",
      "prompt": "A person struggles to survive after being thrown from their car in an accident."
    },
    {
      "num": "26",
      "prompt": "A remake of the original silent film The Great Train Robbery."
    },
    {
      "num": "27",
      "prompt": "A day in the life of a puppy."
    },
    {
      "num": "28",
      "prompt": "A soldier trying to flee a warzone"
    },
    {
      "num": "29",
      "prompt": "A woman in a house is attacked by aliens."
    },
    {
      "num": "30",
      "prompt": "A person is granted the wish to fly."
    },
    {
      "num": "31",
      "prompt": "A person is granted the wish to be invisible."
    },
    {
      "num": "32",
      "prompt": "A person makes a wish to be young again."
    },
    {
      "num": "33",
      "prompt": "A man on his deathbed is taken on a road trip."
    },
    {
      "num": "34",
      "prompt": "A woman spends a night with her newborn child, only to have to give it to adoptive parents."
    },
    {
      "num": "35",
      "prompt": "A day in the life of a professional thief."
    },
    {
      "num": "36",
      "prompt": "A day in the life of a homicide detective."
    },
    {
      "num": "37",
      "prompt": "A evening in the life of a teacher."
    },
    {
      "num": "38",
      "prompt": "The new kid in the neighborhood struggles to make friends."
    },
    {
      "num": "39",
      "prompt": "Someone's life is suddenly narrated"
    },
    {
      "num": "40",
      "prompt": "A rock climber's solo ascent."
    },
    {
      "num": "41",
      "prompt": "The day in the life of a professional gamer."
    },
    {
      "num": "42",
      "prompt": "The world shown through the eyes of a drone."
    },
    {
      "num": "43",
      "prompt": "A late-night call at a suicide prevention center."
    },
    {
      "num": "44",
      "prompt": "The duel of two rich nobles"
    },
    {
      "num": "45",
      "prompt": "The duel of two warriors"
    },
    {
      "num": "46",
      "prompt": "A day in the life of a maid that works for a rich family."
    },
    {
      "num": "47",
      "prompt": "A mother working three jobs in a single day and then coming home to kiss their child goodnight."
    },
    {
      "num": "48",
      "prompt": "A day in the life of a driver."
    },
    {
      "num": "49",
      "prompt": "An astronaut lands on a desert planet."
    },
    {
      "num": "50",
      "prompt": "A day in the life of an angel on Earth."
    },
    {
      "num": "51",
      "prompt": "Saint by day, stripper by night."
    },
    {
      "num": "52",
      "prompt": "A vampire decides to commit suicide by sunlight after one last night on the town."
    },
    {
      "num": "53",
      "prompt": "The Adventures of a hallucinating drug addict."
    },
    {
      "num": "54",
      "prompt": "It's revealed that a sad person has been preparing for a loved one's funeral."
    },
    {
      "num": "55",
      "prompt": "It's revealed that a child's friend is actually imaginary."
    },
    {
      "num": "56",
      "prompt": "A babysitter must save a child when mosters roam the neighborhood."
    },
    {
      "num": "57",
      "prompt": "Boaters are lost at sea after riptides pull them out."
    },
    {
      "num": "58",
      "prompt": "A park ranger discovers a dead body."
    },
    {
      "num": "59",
      "prompt": "A travel agent struggles to hold onto a job that has no deeper meaning."
    },
    {
      "num": "60",
      "prompt": "A man tries to become a superhero."
    },
    {
      "num": "61",
      "prompt": "A house that is haunted."
    },
    {
      "num": "62",
      "prompt": "An astronaut returns home but no one remembers who he is."
    },
    {
      "num": "63",
      "prompt": "A day in the life of the last person on Earth."
    },
    {
      "num": "64",
      "prompt": "A couple go to a formal dance, only to discover it's a rave"
    },
    {
      "num": "65",
      "prompt": "A day in the life of the last dog on Earth."
    },
    {
      "num": "66",
      "prompt": "When the WiFi goes down, kids discover how to keep themselves entertained."
    },
    {
      "num": "67",
      "prompt": "Four kindergarten teachers and their hilarious lives after the bell rings."
    },
    {
      "num": "68",
      "prompt": "An assassin sent back in time struggles with killing Baby Hitler."
    },
    {
      "num": "69",
      "prompt": "An Uber ride gone wrong."
    },
    {
      "num": "70",
      "prompt": "An Uber driver picks up a Lyft driver's fare by accident."
    },
    {
      "num": "71",
      "prompt": "The Angel of Death, in human form, visits its victims."
    },
    {
      "num": "72",
      "prompt": "Two people are stuck in an elevator together."
    },
    {
      "num": "73",
      "prompt": "The adventures of a superhero with useless powers"
    },
    {
      "num": "74",
      "prompt": "An actor goes through a day of auditions and life in the UK"
    },
    {
      "num": "75",
      "prompt": "A character finds a magical item in an antique store."
    },
    {
      "num": "76",
      "prompt": "A man contemplates suicide and finds an unexpected reason to live."
    },
    {
      "num": "77",
      "prompt": "A day in the life of a fighter pilot told within the cockpit."
    },
    {
      "num": "78",
      "prompt": "A man and woman fall in love over the course of thirty years of chance encounters."
    },
    {
      "num": "79",
      "prompt": "A man wins the lottery and does 'good' deeds with the money until it's all gone."
    },
    {
      "num": "80",
      "prompt": "A serial killer stalking a victim."
    },
    {
      "num": "81",
      "prompt": "A human clone escapes a research facility to find their double."
    },
    {
      "num": "82",
      "prompt": "A person discovers their doppelganger."
    },
    {
      "num": "83",
      "prompt": "Scientist meets creationist on a blind date at the restaurant at the edge of the universe"
    },
    {
      "num": "84",
      "prompt": "A child discovers their doppelganger."
    },
    {
      "num": "85",
      "prompt": "A carjacker accidentally steals a car full of even worse behaved children."
    },
    {
      "num": "86",
      "prompt": "A man returns to his hometown only to discover that no one remembers him."
    },
    {
      "num": "87",
      "prompt": "Someone wakes up with the ability to hear everyone's thoughts."
    },
    {
      "num": "88",
      "prompt": "A woman wakes up to discover that everyone else on Earth has vanished."
    },
    {
      "num": "89",
      "prompt": "A young Sherlock Holmes in middle school solves a mystery."
    },
    {
      "num": "90",
      "prompt": "A child wanders off on their big wheel only to be found later that night by a truck driver."
    }
  ]

  export default prompts