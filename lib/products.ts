// Shared product content for Flag Bands. Used by the homepage shop grid and
// the individual /products/[slug] pages. Photo URLs are Higgsfield-hosted
// (background-removed cutout + reference-based hero/studio/wrist renders,
// generated from real product photography - not stock or fully synthetic
// images).

export interface ProductCause {
  org: string | null;
  body: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  studioPhoto: string;
  wristPhoto: string;
  heroPhoto: string;
}

export interface ProductContent {
  slug: string;
  name: string;
  label: string;
  price: string;
  accentColor: string;
  flagDescription: string;
  heroPhoto: string;
  cutoutPhoto: string;
  studioPhoto: string;
  wristPhoto: string;
  cause: ProductCause;
  // Bead-material options. When present (2+ entries), the product page shows
  // a stone selector above "What It's Made Of" and swaps the gallery photos.
  // variants[0] is the default shown on load; top-level studioPhoto/wristPhoto
  // above should match variants[0] for flags that have variants defined.
  variants?: ProductVariant[];
}

const MATERIALS_BODY =
  "Each Flag Bands wristband is handcrafted with genuine lava stone beads, small color-matched accent beads in the flag's own palette, a custom-printed wood flag plate, and copper hardware. Every band is strung and finished by hand, so slight natural variation between pieces is part of the product, not a flaw.";

export const PRODUCTS: ProductContent[] = [
  {
    slug: "usa",
    name: "United States",
    label: "USA",
    price: "$35",
    accentColor: "#002868",
    flagDescription: "the red, white, and blue stars and stripes of the American flag",
    heroPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102826_60facf1c-9ad4-4159-932b-f5ed6ef473fa.png",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230733_d3c7c005-d716-450d-9f8d-e2aa87c76193.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233426_f9fbfbc7-af94-42b3-8181-6e5e0789c0ea.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233428_ecf3a2d2-d06b-4fc5-a183-84b6e4897d5e.png",
    variants: [
      {
        id: "tigers-eye",
        name: "Tiger's Eye",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233426_f9fbfbc7-af94-42b3-8181-6e5e0789c0ea.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233428_ecf3a2d2-d06b-4fc5-a183-84b6e4897d5e.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102843_991081e2-d451-4569-8ccd-9332b809b9f3.png",
      },
      {
        id: "lava-stone",
        name: "Lava Stone",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_100448_7312dfdb-b2b0-494f-bcb6-df7026328790.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_100451_23b22016-c721-4d2a-a5c3-abf46d53b390.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102826_60facf1c-9ad4-4159-932b-f5ed6ef473fa.png",
      },
      {
        id: "hematite",
        name: "Hematite",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_100453_090a046d-565e-4b04-b31b-a6a537a6b0e4.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_100455_be930b67-93aa-4609-84fc-e95a60b90b38.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102844_0579f868-b006-4225-b161-bc9290f7e2bc.png",
      },
      {
        id: "white-agate",
        name: "White Agate",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_100459_2dcbfc55-3041-4569-acb9-0da924b3b772.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_100500_10e574e9-4796-4cb7-81ec-385fa996d1c3.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102846_6cc8ed2b-b1f3-4312-ad6d-51d3c70f2bdc.png",
      },
    ],
    cause: {
      org: null,
      body:
        "$5 from every USA band goes toward a community cause connected to this flag. We're finalizing the partner organization - check back soon for the details.",
    },
  },
  {
    slug: "jamaica",
    name: "Jamaica",
    label: "JAM",
    price: "$35",
    accentColor: "#009B3A",
    flagDescription: "the black, gold, and green diagonal saltire of the Jamaican flag",
    heroPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102831_c92f9e38-8c66-47d9-9e26-ca7e2021001b.png",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230734_8e22e53e-33b8-4c58-9113-98406189519a.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233430_43c6a8d2-6d05-4934-802c-9abfffa6d352.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_234305_4d0872c8-268f-470a-9604-22a20b7aa97f.png",
    cause: {
      org: null,
      body:
        "$5 from every Jamaica band goes toward a community cause connected to this flag. We're finalizing the partner organization - check back soon for the details.",
    },
  },
  {
    slug: "haiti",
    name: "Haiti",
    label: "HTI",
    price: "$35",
    accentColor: "#00209F",
    flagDescription: "the blue and red Haitian flag with its white coat of arms emblem",
    heroPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102832_b6fde7c3-f1b8-432c-934f-92ed976141fb.png",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230735_2663e86b-8a03-4ac7-a661-c0de6cc36859.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_091857_783f3a72-240f-4b95-89e6-1c1793c53dff.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_234304_756c417e-918d-4fd6-bf97-d064cfdebf86.png",
    cause: {
      org: null,
      body:
        "$5 from every Haiti band goes toward a community cause connected to this flag. We're finalizing the partner organization - check back soon for the details.",
    },
  },
  {
    slug: "venezuela",
    name: "Venezuela",
    label: "VEN",
    price: "$35",
    accentColor: "#00247D",
    flagDescription: "the yellow, blue, and red stripes and stars of the Venezuelan flag",
    heroPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102834_4714d313-f745-461e-bd00-a0eab0e4a3a4.png",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230737_6a17d03b-a560-4daa-af16-468d427a8b5d.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233440_5b28f560-3d58-4053-b816-60cee1421d36.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233442_c10b20a2-a029-46d6-834a-c9b9427c9155.png",
    cause: {
      org: null,
      body:
        "$5 from every Venezuela band goes toward a community cause connected to this flag. We're finalizing the partner organization - check back soon for the details.",
    },
  },
  {
    slug: "puerto-rico",
    name: "Puerto Rico",
    label: "PRI",
    price: "$35",
    accentColor: "#002868",
    flagDescription: "the red, white, and blue Puerto Rican flag with its star and triangle",
    heroPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102835_3aee44f6-62ef-4918-b4dd-97f070440cb0.png",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230738_7a588193-e49f-4741-a734-3dc3077469e9.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233444_5baecf5f-a8fb-4121-997a-0cbe1e01965d.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233446_a777dbb8-f516-4697-ac6f-b54830f2bc88.png",
    cause: {
      org: null,
      body:
        "$5 from every Puerto Rico band goes toward a community cause connected to this flag. We're finalizing the partner organization - check back soon for the details.",
    },
  },
  {
    slug: "cuba",
    name: "Cuba",
    label: "CUB",
    price: "$35",
    accentColor: "#002A8F",
    flagDescription: "the blue and white stripes, red triangle, and white star of the Cuban flag",
    heroPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102837_8e3cd80a-40df-425b-a709-328bed00754e.png",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230740_9b243608-71f2-4c5d-8ad4-ce76c3139265.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233449_606d9ad0-304a-4969-ae99-3c399e055b31.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233451_a5daa9fb-8911-4d14-be3f-fbb3378bfb30.png",
    cause: {
      org: null,
      body:
        "$5 from every Cuba band goes toward a community cause connected to this flag. We're finalizing the partner organization - check back soon for the details.",
    },
  },
  {
    slug: "lgbtq",
    name: "Pride",
    label: "PRIDE",
    price: "$35",
    accentColor: "#750787",
    flagDescription: "the six-stripe rainbow Pride flag",
    heroPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102839_5f5b8c1d-480d-41d2-9055-84217059767e.png",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230741_5cff3d46-70e3-4bed-b957-a01bcab86687.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233454_dbca46a0-7dc9-431c-987b-d741b77cdcb7.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233456_5caef510-2016-4187-8662-7ba472328aeb.png",
    cause: {
      org: null,
      body:
        "$5 from every Pride band goes toward a community cause connected to this flag. We're finalizing the partner organization - check back soon for the details.",
    },
  },
  {
    slug: "vegan",
    name: "Vegan",
    label: "VGN",
    price: "$35",
    accentColor: "#2E7D32",
    flagDescription: "the blue and green V of the official Vegan flag",
    heroPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102840_4247059d-7e28-4dd1-a886-555c48c9b25c.png",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230743_a2f17a74-0395-4d22-93e4-1cc07e20a017.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233424_002b0938-87cb-4549-b8d2-973e94e904aa.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_232623_b44227b2-af2c-4b32-a1db-356870a0e075.png",
    cause: {
      org: "Vegans Explore",
      body:
        "$5 from every Vegan band goes directly to Vegans Explore, a nonprofit dedicated to growing and connecting the vegan community. Wearing this band supports their work directly.",
    },
  },
  {
    slug: "peru",
    name: "Peru",
    label: "PER",
    price: "$35",
    accentColor: "#D91023",
    flagDescription: "the red, white, red vertical stripes of the Peruvian flag",
    heroPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102841_1591e3be-084c-4312-b349-f05c197df2cc.png",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230744_5ebe802c-dae7-456f-ba3d-8b21047875f9.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233459_89fab153-6a94-418f-bc21-7053259e5774.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233501_c12fa456-df42-49f7-8bb7-3b8756b805d3.png",
    cause: {
      org: null,
      body:
        "$5 from every Peru band goes toward a community cause connected to this flag. We're finalizing the partner organization - check back soon for the details.",
    },
  },
];

export const MATERIALS_DESCRIPTION = MATERIALS_BODY;

export function getProduct(slug: string): ProductContent | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
