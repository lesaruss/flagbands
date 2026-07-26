// "Country Stories" content: one profile per flag, built for two audiences
// at once - a customer reading on the /account page, and a stranger who
// landed here from a social post and has never heard of Flag Bands. Every
// entry should hold up as a standalone shareable piece, not just a product
// footnote. Add new countries by adding a new entry to COUNTRY_STORIES below
// and setting comingSoon: false once the research + copy is done.
//
// Rule going forward: if we add a new section/field to one country's story,
// add it to every country's story, not just the one that prompted it.
//
// Sourced from: Jamaica Information Service, Office of the PM (Jamaica),
// Britannica, Wikipedia, Smithsonian Magazine, CNN, Al Jazeera, Atlantic
// Council, AS/COA, Haitian Times, MLB.com, World's 50 Best, UNESCO, and
// national government sources per country. Leadership facts current as of
// July 2026; several (Haiti, Venezuela, Peru) reflect fast-moving political
// transitions and are noted as such.

export interface LeadershipRole {
  role: string;
  name: string;
  note?: string;
}

export interface CountryStory {
  slug: string; // matches PRODUCTS[].slug in lib/products.ts
  name: string;
  accentColor: string; // matches PRODUCTS[].accentColor for visual consistency
  comingSoon?: boolean;
  tagline: string;
  flagStory: {
    heading: string;
    paragraphs: string[];
  };
  knownFor: string[];
  popCulture: {
    heading: string;
    paragraphs: string[];
  };
  nationalDish: {
    name: string;
    description: string;
  };
  leadershipToday: LeadershipRole[];
  tidbits: string[];
}

export const COUNTRY_STORIES: CountryStory[] = [
  {
    slug: "jamaica",
    name: "Jamaica",
    accentColor: "#009B3A",
    tagline: "An island the size of Connecticut that reshaped world music, world sport, and pop culture from a standing start.",
    flagStory: {
      heading: "How the flag came to be",
      paragraphs: [
        "Jamaica's flag was raised for the first time on August 6, 1962, the day the country became the first English-speaking nation in the Caribbean to gain independence from Britain. It almost looked completely different: a public design competition in 1961 failed to produce a winner, so with independence day approaching, a bipartisan committee of Jamaica's own Parliament sat down and designed the flag itself.",
        "The result is a gold diagonal cross, a saltire, splitting the flag into four triangles: black at the hoist and fly (the left and right sides), green at the top and bottom.",
        "Every color was chosen to mean something specific: black for the strength and creativity of the people, gold for the natural wealth of the land and the strength of sunlight, and green for hope and the island's agricultural richness. Generations of Jamaican schoolchildren learn the meaning as one line: \"The sun shineth, the land is green, and the people are strong and creative.\"",
        "One more thing that makes it stand out on a map of the world's flags: Jamaica's is one of only two national flags with zero red, white, or blue in it anywhere. The only other one belongs to Mauritania.",
      ],
    },
    knownFor: [
      "Reggae music and Bob Marley",
      "The fastest sprinters on Earth (Usain Bolt, Shelly-Ann Fraser-Pryce)",
      "Blue Mountain Coffee",
      "The Rastafari movement",
      "Jerk seasoning and jerk cooking",
      "A 1988 bobsled team from a country with no snow",
    ],
    popCulture: {
      heading: "What Jamaica gave the world",
      paragraphs: [
        "Reggae was born in Kingston in the 1960s, and Bob Marley carried it further and faster around the planet than almost any music movement before it. \"One Love\" was later named the BBC's Song of the Millennium.",
        "Hip-hop's roots trace back here too: DJ Kool Herc, born in Kingston, brought Jamaican sound-system culture to the Bronx in the 1970s and is widely credited as one of the founding fathers of hip-hop as we know it.",
        "James Bond has a Jamaican address. Ian Fleming wrote most of the 007 novels at GoldenEye, his estate on Jamaica's north coast, and even took the character's name from the author of a bird-watching guide sitting on his shelf there.",
        "And then there's the bobsled team. Jamaica's 1988 Winter Olympic bobsled squad, a tropical island qualifying for a snow sport with essentially no snow, stunned the world, inspired the film Cool Runnings, and the program still competes today.",
        "Pound for pound, no country on Earth has produced more elite sprinters. Usain Bolt's 100m and 200m world records still stand, set by an athlete from an island of under three million people.",
      ],
    },
    nationalDish: {
      name: "Ackee and Saltfish",
      description:
        "Sautéed ackee (Jamaica's national fruit) with salted codfish, onions, peppers, and tomato. Ackee is toxic if picked before it ripens and splits open naturally on its own, which is exactly why it can only be legally exported to the U.S. canned, never fresh.",
    },
    leadershipToday: [
      { role: "Prime Minister", name: "Andrew Holness", note: "Jamaica Labour Party, sworn in September 2025" },
      { role: "Governor-General", name: "Sir Patrick Allen", note: "in office since 2009" },
      { role: "Head of State", name: "King Charles III", note: "Jamaica is a Commonwealth realm; the monarch is represented locally by the Governor-General" },
    ],
    tidbits: [
      "Jamaica was one of the very first countries anywhere to take a stand against apartheid: in 1959, three years before its own independence, it banned imports from South Africa in protest, years ahead of the sanctions movement that eventually followed worldwide.",
      "The Jamaican giant swallowtail, found only in Jamaica's Blue and John Crow Mountains, is the largest butterfly in the Western Hemisphere, with a wingspan up to 6 inches.",
      "Jamaica is about the same size as Connecticut, yet it has produced more sub-10-second 100m sprinters than any other nation on Earth.",
      "The flag's three colors spell out the whole national motto once you know the code: strength, sunlight and wealth, and hope.",
    ],
  },
  {
    slug: "usa",
    name: "United States",
    accentColor: "#002868",
    tagline: "The country that turned jazz, rock, hip-hop, and the moon landing into the same national story.",
    flagStory: {
      heading: "How the flag came to be",
      paragraphs: [
        "The current 50-star flag became official at one minute past midnight on July 4, 1960, first raised that morning over Fort McHenry in Baltimore. Its arrangement was locked in by an executive order President Eisenhower signed on August 21, 1959, the same day Hawaii became the 50th state.",
        "The design itself started as a high school class project. In 1958, 17-year-old Robert G. Heft spent more than 12 hours at his grandparents' kitchen table hand-cutting 100 stars and stitching them onto blue fabric, betting that Alaska and Hawaii would both eventually join the union. His teacher gave the project a B-minus, with a promise to reconsider if Congress ever actually adopted it. After Hawaii's admission, more than 1,500 competing flag designs were submitted to the government. Eisenhower chose Heft's, and the grade became an A.",
        "It's the 27th official version of the flag since the first 13-star design was approved by Congress in 1777. The rule that's held ever since: 13 stripes forever, for the original colonies, and one new star for every state that joins. Red stands for hardiness and valor, white for purity, blue for vigilance, perseverance, and justice.",
      ],
    },
    knownFor: [
      "Hollywood and the global film industry",
      "Jazz, rock 'n' roll, and hip-hop",
      "The Moon landing and space exploration",
      "The world's first national park system",
      "Silicon Valley and modern tech",
      "Fast food and car culture",
    ],
    popCulture: {
      heading: "What the USA gave the world",
      paragraphs: [
        "Jazz took shape in New Orleans in the 1890s, with cornetist Buddy Bolden widely credited as its first architect, a tradition Louis Armstrong, who first picked up a cornet at a New Orleans reform home in 1913, carried around the planet.",
        "Rock and roll has an exact birthday: July 5, 1954, when a 19-year-old Elvis Presley recorded \"That's All Right\" at Sun Studio in Memphis, a cover of a 1946 blues song that Sun Records released two weeks later and never looked back.",
        "Hip-hop's birthday is just as specific: August 11, 1973, the night Clive \"DJ Kool Herc\" Campbell isolated and looped the instrumental break of records at a back-to-school party in the Bronx, a night Congress later formally recognized.",
        "Even the Hollywood sign started as an accident of advertising: erected in 1923 to read \"HOLLYWOODLAND\" and lit with roughly 4,000 bulbs to sell a housing development, meant to stand for 18 months. It stood 26 years before the last four letters came down and a global industry adopted it as its own.",
        "Basketball was invented on December 21, 1891, by a Massachusetts gym teacher named James Naismith, using two peach baskets to keep his students active through a cold New England winter.",
      ],
    },
    nationalDish: {
      name: "The Hamburger (unofficial)",
      description:
        "The U.S. has no federally designated national dish, but the hamburger comes closest to a national consensus, narrowly edging out apple pie as the everyday answer. Its exact birthplace is still disputed among several American towns, which is very on brand.",
    },
    leadershipToday: [
      { role: "President", name: "Donald J. Trump", note: "47th president, sworn in January 20, 2025" },
    ],
    tidbits: [
      "The 50-star flag design was a high schooler's class project, graded a B-minus until Congress adopted it and his teacher upgraded it to an A.",
      "Hip-hop's birthdate is pinned to one specific night, August 11, 1973, at a Bronx apartment party, later honored by Congress as a national celebration day.",
      "The Hollywood sign was never supposed to be permanent. It was a temporary real estate ad for a housing development called Hollywoodland and outlived its planned 18-month lifespan by 25 years.",
      "Blue jeans exist because of a single 1873 patent for metal rivets, filed jointly by a dry-goods merchant and a tailor who couldn't afford the paperwork alone.",
    ],
  },
  {
    slug: "haiti",
    name: "Haiti",
    accentColor: "#00209F",
    tagline: "The only nation on Earth born from a successful slave revolt, and the first Black-led republic in world history.",
    flagStory: {
      heading: "How the flag came to be",
      paragraphs: [
        "On May 18, 1803, at the Congress of Arcahaie, revolutionary leader Jean-Jacques Dessalines had the white stripe torn out of the French tricolor, a deliberate, physical break from French rule. His goddaughter, Catherine Flon, then sewed the remaining blue and red bands together to create Haiti's first flag. May 18 is still celebrated every year as Haitian Flag Day, and Arcahaie is honored as the flag's birthplace.",
        "Blue represents Haiti's Black population, red the mixed-race population, together standing for the alliance that won the country's independence. The coat of arms at the center, added in 1807 and settled into its current form in 1986, shows a palm tree wearing a Liberty Cap on a green hill, flanked by cannons, flags, and a drum, above a ribbon reading \"L'Union Fait La Force,\" Unity Makes Strength, with a broken chain marking the end of slavery.",
      ],
    },
    knownFor: [
      "First Black-led republic in world history",
      "Vodou as a living, respected spiritual tradition",
      "Citadelle Laferrière, the largest fortress in the Americas",
      "Konpa music",
      "Haitian Creole and French bilingual culture",
      "A powerful global diaspora",
    ],
    popCulture: {
      heading: "What Haiti gave the world",
      paragraphs: [
        "Haiti became the world's first Black-led republic, and the only nation ever born of a successful slave revolt, declaring independence on January 1, 1804, after thirteen years of revolution led by Toussaint Louverture, Jean-Jacques Dessalines, and Henry Christophe.",
        "Haiti's naive, Vodou-influenced painting movement gained real international standing through the Centre d'Art, founded in Port-au-Prince in 1944. Painter and Vodou priest Hector Hyppolite became internationally recognized after French surrealist André Breton championed his work in 1948.",
        "Konpa, Haiti's signature music genre, has an exact birthday: July 26, 1955, the night saxophonist Nemours Jean-Baptiste debuted it with his band in Port-au-Prince, a date still celebrated as konpa's anniversary.",
        "Haiti's diaspora carries an outsized cultural footprint, from musician Wyclef Jean to celebrated authors like Edwidge Danticat and Dany Laferrière, part of an internationally awarded literary tradition.",
      ],
    },
    nationalDish: {
      name: "Soup Joumou",
      description:
        "A squash-based soup, eaten every January 1st to mark Independence Day. Under French colonial rule, enslaved Haitians were forbidden from eating it, it was reserved for plantation owners. After 1804, freed Haitians began cooking and sharing it as a symbolic reclaiming of what had been denied them. UNESCO added it to its Intangible Cultural Heritage list in 2021.",
    },
    leadershipToday: [
      {
        role: "Prime Minister (acting head of state)",
        name: "Alix Didier Fils-Aimé",
        note: "Haiti currently has no elected president; a Transitional Presidential Council governed from 2024 until its mandate ended in February 2026",
      },
    ],
    tidbits: [
      "Haiti's flag wasn't designed on paper, it was created by literally tearing the white stripe out of the French tricolor at a revolutionary congress in 1803.",
      "Enslaved Haitians were legally barred from eating the pumpkin soup their own labor produced. Today it's eaten nationwide every January 1st to mark freedom.",
      "Konpa music has an exact birthdate, July 26, 1955, the night one band first played it in Port-au-Prince.",
      "As of 2026, Haiti has no single elected head of state; governing authority currently rests with the Prime Minister after the country's transitional council reached the end of its mandate.",
    ],
  },
  {
    slug: "venezuela",
    name: "Venezuela",
    accentColor: "#FFCC00",
    tagline: "Home to the world's tallest waterfall, the largest oil reserves on Earth, and more beauty-pageant crowns than almost any nation alive.",
    flagStory: {
      heading: "How the flag came to be",
      paragraphs: [
        "Venezuela's flag was designed by revolutionary Francisco de Miranda and first flown on March 12, 1806, aboard his ship during a failed independence expedition, then raised on Venezuelan soil that August at La Vela de Coro. Congress formally adopted it in 1811.",
        "Yellow stands for the wealth of the land, blue for the sea separating Venezuela from Spain, red for the blood shed in the war for independence. The arc of stars in the center originally held seven, one for each province that signed the 1811 declaration of independence. An eighth star was added in 2006, fulfilling a request Simón Bolívar had made back in 1817 to honor the historical province of Guayana, a change that stirred real political debate at the time.",
      ],
    },
    knownFor: [
      "Angel Falls, the world's tallest waterfall",
      "The world's largest proven oil reserves",
      "More Miss Universe and Miss World titles than almost any country",
      "El Sistema, the youth orchestra program that built Gustavo Dudamel",
      "A deep MLB baseball pipeline",
      "Joropo music and a golden age of telenovelas",
    ],
    popCulture: {
      heading: "What Venezuela gave the world",
      paragraphs: [
        "Venezuela has won 7 Miss Universe titles and 6 Miss World crowns, tied for the most of any nation on Earth, a run built on genuinely serious national pageant infrastructure.",
        "Baseball is close to a national religion: Venezuela has sent more than 400 players to Major League Baseball since 1939, including Hall of Famer Miguel Cabrera and two-time World Series champion José Altuve, alongside stars like Ronald Acuña Jr. and Luis Aparicio.",
        "El Sistema, the country's national youth orchestra network, started in 1975 with José Antonio Abreu teaching nine musicians in a garage. It grew into more than 300 locations and produced conductor Gustavo Dudamel, now music director of the Los Angeles Philharmonic.",
        "In the 1980s and 90s, Venezuela was a genuine telenovela superpower. Hits like Cristal and Kassandra were dubbed into more than 40 languages and exported to over 40 countries before the industry contracted in the 2000s.",
      ],
    },
    nationalDish: {
      name: "Pabellón Criollo",
      description:
        "Shredded beef, black beans, white rice, and fried sweet plantains, plated in stripes that echo the flag itself, pabellón literally means banner. Venezuela's government declared it part of the country's intangible cultural heritage in 2019.",
    },
    leadershipToday: [
      {
        role: "Acting President",
        name: "Delcy Rodríguez",
        note: "In office since January 2026, following the U.S. capture of Nicolás Maduro on narco-trafficking charges; the first woman to hold Venezuela's presidency",
      },
    ],
    tidbits: [
      "Angel Falls' main uninterrupted drop is roughly 2,648 feet, taller than the Empire State Building stacked more than twice over.",
      "Venezuela's proven oil reserves, over 300 billion barrels, are the largest of any country on Earth, ahead of Saudi Arabia.",
      "Venezuela's six Miss World titles are tied for the most of any nation ever, on top of seven Miss Universe crowns.",
      "El Sistema's most famous graduate started as a child violinist in the program before becoming music director of the Los Angeles Philharmonic.",
    ],
  },
  {
    slug: "puerto-rico",
    name: "Puerto Rico",
    accentColor: "#ED1C24",
    tagline: "The birthplace that turned reggaeton into a global sound, from an island that once spent nearly a decade banned from flying its own flag.",
    flagStory: {
      heading: "How the flag came to be",
      paragraphs: [
        "Puerto Rico's flag was designed on December 22, 1895, by Puerto Rican exiles meeting in New York City as part of the Cuban Revolutionary Party, deliberately modeled on Cuba's flag with the colors reversed, a shared symbol of the two islands' independence movements.",
        "For nine years, flying it was actually a crime. Puerto Rico's 1948 Gag Law made displaying the flag, singing patriotic songs, or advocating independence punishable by up to 10 years in prison, with warrantless searches allowed to seize flags from homes. The law was repealed in 1957.",
        "The flag became official when Puerto Rico became a self-governing commonwealth on July 25, 1952, with its blue shade darkened slightly to align more closely with the U.S. flag's blue. The five stripes and single star trace back to earlier Caribbean revolutionary symbolism: red for liberty, white for individual rights, blue for the sky and coastal waters, and the star for the island itself.",
      ],
    },
    knownFor: [
      "Reggaeton's launchpad to the world",
      "Global music stars: Bad Bunny, Daddy Yankee, Ricky Martin, Luis Fonsi",
      "El Yunque, the only tropical rainforest in the U.S. National Forest System",
      "Bioluminescent bays among the brightest on Earth",
      "A major Caribbean cruise and tourism hub",
      "A deep baseball tradition, from Roberto Clemente onward",
    ],
    popCulture: {
      heading: "What Puerto Rico gave the world",
      paragraphs: [
        "Reggaeton's rhythm actually traces back through Panama and Jamaican dancehall, but Puerto Rico is where it broke worldwide. Daddy Yankee's 2004 \"Gasolina\" turned it into a global phenomenon, and his 2017 collaboration with Luis Fonsi, \"Despacito,\" became one of the most-streamed songs in history.",
        "Bad Bunny, born Benito Martínez Ocasio in Vega Baja, became the world's most-streamed artist in the early 2020s and headlined a record-setting 2022 world tour blending reggaeton with Latin trap.",
        "Ricky Martin's \"Livin' la Vida Loca\" helped ignite the late-1990s Latin pop crossover into English-language radio.",
        "Beyond music, EGOT winner Rita Moreno and Pittsburgh Pirates Hall of Famer and humanitarian Roberto Clemente remain two of the island's most iconic exports.",
      ],
    },
    nationalDish: {
      name: "Mofongo",
      description:
        "Green plantains fried, then mashed with garlic and pork rinds, often stuffed with meat or seafood. Its roots trace to fufu, a West African dish brought to the island by enslaved Africans and reshaped with local plantains and Spanish ingredients. The first documented recipe appears in an 1859 Puerto Rican cookbook.",
    },
    leadershipToday: [
      {
        role: "Governor of Puerto Rico",
        name: "Jenniffer González-Colón",
        note: "Took office January 2025. Puerto Rico is a U.S. territory, not an independent country",
      },
      {
        role: "Federal Head of State",
        name: "President of the United States",
        note: "Puerto Ricans are U.S. citizens but cannot vote for President and have no voting member of Congress",
      },
    ],
    tidbits: [
      "Puerto Rico's own flag was illegal to display on the island from 1948 to 1957, police could enter homes without a warrant to seize it.",
      "The flag wasn't designed on the island at all, it was created by exiled Puerto Rican revolutionaries in New York City in 1895, mirroring Cuba's flag on purpose.",
      "Reggaeton's core rhythm passed through Panama and Jamaica before Puerto Rican artists took it worldwide.",
      "Mofongo's ancestor is fufu, a West African dish carried across the Atlantic and reinvented with Puerto Rican plantains.",
    ],
  },
  {
    slug: "cuba",
    name: "Cuba",
    accentColor: "#002A8F",
    tagline: "The island that kept 1950s American cars running on its roads while building one of the world's four great ballet traditions.",
    flagStory: {
      heading: "How the flag came to be",
      paragraphs: [
        "Cuba's flag was designed in 1849 in New York City by exiled general Narciso López and poet Miguel Teurbe Tolón, loosely modeled on the U.S. flag. López flew it in battle at Cárdenas in 1850, decades before Cuba actually won its independence. It wasn't officially adopted as the national flag until May 20, 1902, the day Cuba became a republic.",
        "The three blue stripes represent Cuba's three former military districts under Spanish rule. The two white stripes stand for the purity of the independence cause. The red triangle, a Masonic symbol of liberty, equality, and fraternity, represents the blood of those who fought for it. The white star inside it was originally meant to represent a new star on the U.S. flag if Cuba were annexed as a state, but it came to mean something different: Cuban independence itself. Cuba's design later inspired Puerto Rico's flag, with the colors reversed.",
      ],
    },
    knownFor: [
      "Hand-rolled Habanos cigars",
      "Classic 1950s American cars still running",
      "Son and salsa music roots",
      "A deep MLB talent pipeline",
      "Ballet Nacional de Cuba",
      "Buena Vista Social Club-era music",
    ],
    popCulture: {
      heading: "What Cuba gave the world",
      paragraphs: [
        "Son cubano was born in eastern Cuba's Sierra Maestra region in the late 1800s, blending Spanish guitar with African rhythm and call-and-response vocals. It spread to Havana and became the direct root of salsa, later shaped into its modern form by Cuban-influenced bandleaders in 1940s New York.",
        "The 1997 album Buena Vista Social Club, recorded at Havana's EGREM studios and produced by Ry Cooder with bandleader Juan de Marcos González, reunited veteran musicians like Ibrahim Ferrer and Compay Segundo. It sold roughly 8 million copies and was added to the U.S. National Recording Registry in 2022.",
        "Cuba has sent a steady stream of stars to Major League Baseball, including Yasiel Puig, José Abreu, Yoenis Céspedes, and Aroldis Chapman.",
        "Ballet Nacional de Cuba, founded by dancer Alicia Alonso in 1948, is internationally ranked among the world's four great national ballet traditions, alongside Russia, France, and Denmark.",
      ],
    },
    nationalDish: {
      name: "Ropa Vieja",
      description:
        "Shredded, slow-cooked beef in a tomato-based sauce, usually served with white rice, black beans, and fried plantains. Its roots trace back to Sephardic Spain before being reshaped into Cuba's signature dish.",
    },
    leadershipToday: [
      {
        role: "President",
        name: "Miguel Díaz-Canel",
        note: "In office since 2018, re-elected by the National Assembly in 2023; also First Secretary of Cuba's Communist Party, the country's sole legal governing party",
      },
    ],
    tidbits: [
      "Roughly 60,000 pre-1960 American cars are still in daily use in Cuba, kept running with improvised and even Soviet-era parts after the U.S. trade embargo cut off new imports in 1962.",
      "A single premium Habano cigar can involve more than 500 hand-rolling steps from seed to finished box.",
      "Buena Vista Social Club takes its name from a real Havana social club that had been shut down by the government in the 1960s.",
      "Cuban ballet is formally ranked among only four great national ballet schools in the world, a legacy built by one dancer, Alicia Alonso, who founded the company in 1948.",
    ],
  },
  {
    slug: "peru",
    name: "Peru",
    accentColor: "#D91023",
    tagline: "Home to Machu Picchu, the potato's birthplace, and a food scene now ranked among the best on the planet.",
    flagStory: {
      heading: "How the flag came to be",
      paragraphs: [
        "Peru's flag was created by General José de San Martín and decreed on October 21, 1820, after his Liberating Expedition landed on the Peruvian coast. Popular legend says San Martín based the red and white on a flock of red-and-white flamingos he spotted flying over the coastline, a good story, though historians note there's no primary source confirming it actually happened that way.",
        "Red stands for the blood shed for independence, white for peace. The current design, a vertical red-white-red band with the coat of arms centered on the state flag, was finalized in 1825. That coat of arms carries its own small trivia: a vicuña for the animal kingdom, a cinchona tree (the source of quinine) for the plant kingdom, and a cornucopia spilling gold coins for mineral wealth.",
      ],
    },
    knownFor: [
      "Machu Picchu",
      "The Nazca Lines",
      "A world-class ceviche and fine-dining scene",
      "The Andes and the Amazon",
      "The ancient Inca Empire",
      "Alpaca and vicuña wool",
    ],
    popCulture: {
      heading: "What Peru gave the world",
      paragraphs: [
        "Peru is the birthplace of the potato, domesticated roughly 8,000 years ago near Lake Titicaca. The Andes still hold more than 4,000 native potato varieties, and Lima is home to the International Potato Center, which maintains the world's largest potato gene bank.",
        "Chef Gastón Acurio helped build modern Peru's global culinary reputation from the ground up, and the movement he started now regularly tops the world stage: Lima's Central and Maido have each been ranked the world's number one restaurant in recent years by the World's 50 Best Restaurants list.",
        "Machu Picchu was brought to international attention on July 24, 1911, when American historian Hiram Bingham was guided to the site, a \"rediscovery\" for the outside world, though local Indigenous families had preserved knowledge of it for generations.",
        "\"El Cóndor Pasa,\" composed in 1913 by Daniel Alomía Robles, became globally famous after Simon & Garfunkel recorded a cover in 1970. Peru declared it part of the nation's cultural heritage in 2004.",
      ],
    },
    nationalDish: {
      name: "Ceviche",
      description:
        "Raw fish cured in citrus, widely celebrated as Peru's signature dish. Peru marks National Ceviche Day every June 28th, and in 2023 UNESCO added ceviche to its list of Intangible Cultural Heritage of Humanity.",
    },
    leadershipToday: [
      {
        role: "Interim President",
        name: "José María Balcázar",
        note: "Serving out the transitional term ahead of the handover to Peru's newly elected president",
      },
      {
        role: "President-Elect",
        name: "Keiko Fujimori",
        note: "Won a razor-thin June 2026 runoff; set to be inaugurated July 28, 2026 as Peru's first woman president",
      },
    ],
    tidbits: [
      "Peru is home to more than 4,000 native potato varieties, more than anywhere else on Earth.",
      "Machu Picchu was rediscovered for the outside world on July 24, 1911, though local families already knew exactly where it was.",
      "A 1913 Peruvian melody, \"El Cóndor Pasa,\" became one of the most recognized tunes in the English-speaking world after Simon & Garfunkel covered it in 1970.",
      "UNESCO named ceviche part of humanity's Intangible Cultural Heritage in 2023.",
    ],
  },
];

export function getCountryStory(slug: string): CountryStory | undefined {
  return COUNTRY_STORIES.find((c) => c.slug === slug);
}
