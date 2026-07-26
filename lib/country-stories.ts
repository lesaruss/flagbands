// "Country Stories" content: one profile per flag, built for two audiences
// at once - a customer reading on the /account page, and a stranger who
// landed here from a social post and has never heard of Flag Bands. Every
// entry should hold up as a standalone shareable piece, not just a product
// footnote. Add new countries by adding a new entry to COUNTRY_STORIES below
// and setting comingSoon: false once the research + copy is done.
//
// Sourced from: Jamaica Information Service (jis.gov.jm), Office of the PM
// (opm.gov.jm), Britannica, Wikipedia (Flag of Jamaica, Prime Minister of
// Jamaica, Governor-General of Jamaica), and the Jamaica Memory Bank /
// African Institute of Jamaica on the 1959 South Africa boycott. Leadership
// facts current as of July 2026 (Holness sworn in 16 Sept 2025; Allen
// Governor-General since 2009).

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
    comingSoon: true,
    tagline: "",
    flagStory: { heading: "", paragraphs: [] },
    knownFor: [],
    popCulture: { heading: "", paragraphs: [] },
    nationalDish: { name: "", description: "" },
    leadershipToday: [],
    tidbits: [],
  },
  {
    slug: "haiti",
    name: "Haiti",
    accentColor: "#00209F",
    comingSoon: true,
    tagline: "",
    flagStory: { heading: "", paragraphs: [] },
    knownFor: [],
    popCulture: { heading: "", paragraphs: [] },
    nationalDish: { name: "", description: "" },
    leadershipToday: [],
    tidbits: [],
  },
  {
    slug: "venezuela",
    name: "Venezuela",
    accentColor: "#FFCC00",
    comingSoon: true,
    tagline: "",
    flagStory: { heading: "", paragraphs: [] },
    knownFor: [],
    popCulture: { heading: "", paragraphs: [] },
    nationalDish: { name: "", description: "" },
    leadershipToday: [],
    tidbits: [],
  },
  {
    slug: "puerto-rico",
    name: "Puerto Rico",
    accentColor: "#ED1C24",
    comingSoon: true,
    tagline: "",
    flagStory: { heading: "", paragraphs: [] },
    knownFor: [],
    popCulture: { heading: "", paragraphs: [] },
    nationalDish: { name: "", description: "" },
    leadershipToday: [],
    tidbits: [],
  },
  {
    slug: "cuba",
    name: "Cuba",
    accentColor: "#002A8F",
    comingSoon: true,
    tagline: "",
    flagStory: { heading: "", paragraphs: [] },
    knownFor: [],
    popCulture: { heading: "", paragraphs: [] },
    nationalDish: { name: "", description: "" },
    leadershipToday: [],
    tidbits: [],
  },
  {
    slug: "peru",
    name: "Peru",
    accentColor: "#D91023",
    comingSoon: true,
    tagline: "",
    flagStory: { heading: "", paragraphs: [] },
    knownFor: [],
    popCulture: { heading: "", paragraphs: [] },
    nationalDish: { name: "", description: "" },
    leadershipToday: [],
    tidbits: [],
  },
];

export function getCountryStory(slug: string): CountryStory | undefined {
  return COUNTRY_STORIES.find((c) => c.slug === slug);
}
