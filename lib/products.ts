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
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_111202_b833d12d-f15e-4b8a-a1d6-a3f6f0c10ee1.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_135738_0f6da80a-ef6a-42bd-b760-9ca3abf4a414.png",
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
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_134526_0ed4bc7b-abca-44b2-b2d2-6069587d5604.png",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230734_8e22e53e-33b8-4c58-9113-98406189519a.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_133802_48217e50-9beb-4f7f-b137-cada6cfa0e66.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_133945_c5097d7c-4ed2-4772-8907-3d7bd38ba2de.png",
    variants: [
      {
        id: "tigers-eye",
        name: "Tiger's Eye",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_133802_48217e50-9beb-4f7f-b137-cada6cfa0e66.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_133945_c5097d7c-4ed2-4772-8907-3d7bd38ba2de.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_134526_0ed4bc7b-abca-44b2-b2d2-6069587d5604.png",
      },
      {
        id: "lava-stone",
        name: "Lava Stone",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132229_70319ab2-29be-4e76-9644-07ede44c7e51.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112333_4d0ca334-b43a-40fe-aef3-abaab496f66a.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132231_54abf038-ca6a-4c18-8e4d-1245b72dcad4.png",
      },
      {
        id: "hematite",
        name: "Hematite",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132327_0d77a407-2c98-46ed-87e2-a65bfcdb00bc.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112335_a2fd96bd-20d4-4581-8076-2c3d55fd065b.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132329_94e05050-e26f-4348-8c1a-95624a7975ea.png",
      },
      {
        id: "white-agate",
        name: "White Agate",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132331_7a09c143-e350-4a2f-9a62-02156132272e.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112337_f8816a2f-b18e-4bf2-a502-ab1f70303878.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132333_cff8c7f1-27db-49c1-9063-0c84292ac108.png",
      },
    ],
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
    variants: [
      {
        id: "tigers-eye",
        name: "Tiger's Eye",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_091857_783f3a72-240f-4b95-89e6-1c1793c53dff.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_234304_756c417e-918d-4fd6-bf97-d064cfdebf86.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102832_b6fde7c3-f1b8-432c-934f-92ed976141fb.png",
      },
      {
        id: "lava-stone",
        name: "Lava Stone",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112606_acb9e46e-8fdc-46ac-b846-a9845201728e.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112614_2712c445-a035-4301-9d35-580a9a5ebcac.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132541_6816435c-067a-4ae9-bac9-dd0ad5e7ed51.png",
      },
      {
        id: "hematite",
        name: "Hematite",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112609_b7be124e-e6aa-4fcf-a9af-faadfc651f6d.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112616_13268a23-81a2-4277-b0dd-e610e11a5171.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132543_5845fd1f-af25-46ac-be76-a4d1fbd81620.png",
      },
      {
        id: "white-agate",
        name: "White Agate",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112611_215db32e-f170-40c9-9af7-9d31e62fbac6.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112618_9db97557-4d83-4202-a6fa-e8aca2b32513.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132544_20377517-a919-4c2e-aed9-9d1ee5e8edcd.png",
      },
    ],
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
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_135026_4bb61224-bdc2-4e87-aec0-5fda2e85f9df.png",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230737_6a17d03b-a560-4daa-af16-468d427a8b5d.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_134016_9729c742-d309-4654-842f-998d32fcbf35.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_134301_b0e5e80a-63ab-4624-a288-2995c4a38942.png",
    variants: [
      {
        id: "tigers-eye",
        name: "Tiger's Eye",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_134016_9729c742-d309-4654-842f-998d32fcbf35.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_134301_b0e5e80a-63ab-4624-a288-2995c4a38942.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_135026_4bb61224-bdc2-4e87-aec0-5fda2e85f9df.png",
      },
      {
        id: "lava-stone",
        name: "Lava Stone",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132334_3d951bdb-d7fe-4325-9361-0a5313e25311.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112759_5e78d565-09e5-4d36-ab52-4b9132d30623.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132336_32f0d410-6e06-4f8a-bd75-b10cc0a3592a.png",
      },
      {
        id: "hematite",
        name: "Hematite",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_135622_d24cbc90-88e8-45f6-a6cc-350743f027fb.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112801_9fd003db-fcb6-431e-a855-be9b97c41bd3.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132339_ddb10bb1-1f78-4025-95b5-f3bd444b0810.png",
      },
      {
        id: "white-agate",
        name: "White Agate",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112757_18dddf3d-c25c-45f1-8afd-7a4f36b7f228.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112803_b889086d-a144-48e3-a791-9d29a66d18a8.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112809_cbebc4fe-90a7-4ae4-8c3a-8e8e57e7ede1.png",
      },
    ],
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
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_134306_eb77802c-c0d3-433c-920e-d07f4dee137c.png",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230738_7a588193-e49f-4741-a734-3dc3077469e9.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_134018_1bbb6d7e-d7e0-4d3f-a3a0-460097165abd.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_134304_da3de108-0523-4857-97cc-1788c81ec0dd.png",
    variants: [
      {
        id: "tigers-eye",
        name: "Tiger's Eye",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_134018_1bbb6d7e-d7e0-4d3f-a3a0-460097165abd.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_134304_da3de108-0523-4857-97cc-1788c81ec0dd.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_134306_eb77802c-c0d3-433c-920e-d07f4dee137c.png",
      },
      {
        id: "lava-stone",
        name: "Lava Stone",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132450_328dcc8f-8c14-4d74-829b-a8918dda33c1.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112828_41587ffa-ba9d-4d66-96a9-694a6fe94840.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132452_3694f7cc-2441-499c-afde-447545cb21f4.png",
      },
      {
        id: "hematite",
        name: "Hematite",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132454_16695fbc-84b0-4136-ae4f-8b75b957d985.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112830_feb82114-15ff-47f1-9a2e-1312b93af9b2.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132456_3046c430-1000-4d9d-b388-c008d27e43db.png",
      },
      {
        id: "white-agate",
        name: "White Agate",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132458_1bc7702d-6205-45e5-94cb-15e5ea44264b.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112833_79617f37-7083-4737-87f4-196c89ef4d1d.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132459_65cad1bb-ae7d-4756-a84e-479b71e59849.png",
      },
    ],
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
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_134310_1ad7bbaf-1d5c-402a-b860-96e8de202d0c.png",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230740_9b243608-71f2-4c5d-8ad4-ce76c3139265.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_134020_124c8d73-3f76-44bc-8fc0-bcad7f917025.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_134309_5cf71938-6a44-4cd4-b9b3-2a757b7a9aa8.png",
    variants: [
      {
        id: "tigers-eye",
        name: "Tiger's Eye",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_134020_124c8d73-3f76-44bc-8fc0-bcad7f917025.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_134309_5cf71938-6a44-4cd4-b9b3-2a757b7a9aa8.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_134310_1ad7bbaf-1d5c-402a-b860-96e8de202d0c.png",
      },
      {
        id: "lava-stone",
        name: "Lava Stone",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132532_edb423ea-3e66-4d7c-a59c-2fd6e0fd918a.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113315_56271b5f-bd4b-4bbc-b888-6bdd906bc5a7.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132533_79def50f-853e-448d-b76c-a6f4ecb790ad.png",
      },
      {
        id: "hematite",
        name: "Hematite",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132535_afdbee31-d022-47b9-ba1c-4d19661adf7d.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113316_63c5f643-8105-459c-b5c8-ecea6bf94b05.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132536_83da1230-ee2d-460e-88c3-6af68a053ce2.png",
      },
      {
        id: "white-agate",
        name: "White Agate",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132538_20dad0f7-64e6-4e6a-ac24-75c12ad3e460.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113317_c44cffa5-6812-47c4-8076-93b8f16f4bf2.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_132539_3ea9d0bb-5c40-438b-bb49-860238abc3fa.png",
      },
    ],
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
    variants: [
      {
        id: "tigers-eye",
        name: "Tiger's Eye",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233454_dbca46a0-7dc9-431c-987b-d741b77cdcb7.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233456_5caef510-2016-4187-8662-7ba472328aeb.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102839_5f5b8c1d-480d-41d2-9055-84217059767e.png",
      },
      {
        id: "lava-stone",
        name: "Lava Stone",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113331_52ada4d4-8e57-4ee1-8391-78f4c2e1676f.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113339_c03b0841-ff74-4aa1-b6de-c582c95b9c06.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113346_a20ce1b6-6682-41e9-8e48-3e8f33ae95eb.png",
      },
      {
        id: "hematite",
        name: "Hematite",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113334_657b576c-8719-4625-b7c9-15ab7bf1e4f4.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113341_8f7d783d-ae77-408c-af38-d079e0f519b4.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113347_4182b7bb-2a1a-47f8-ad18-a5c17b4f577d.png",
      },
      {
        id: "white-agate",
        name: "White Agate",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113337_715ce753-f760-493c-922e-374e2172b422.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113343_e2a0b11a-6847-47d7-9e08-19b6e15fa941.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113349_aca1cf76-920f-4f87-8382-6ca12d0c64bc.png",
      },
    ],
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
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_135423_9af39938-61d5-4953-bbd4-67bbc5e30ed5.png",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230743_a2f17a74-0395-4d22-93e4-1cc07e20a017.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_135158_a79f58d3-963a-4fe0-bb5f-c44b138b96b7.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_135456_e27c4013-2f45-458e-b51b-cfddbe66f582.png",
    variants: [
      {
        id: "tigers-eye",
        name: "Tiger's Eye",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_135158_a79f58d3-963a-4fe0-bb5f-c44b138b96b7.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_135456_e27c4013-2f45-458e-b51b-cfddbe66f582.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_135423_9af39938-61d5-4953-bbd4-67bbc5e30ed5.png",
      },
      {
        id: "lava-stone",
        name: "Lava Stone",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_135201_60c54efc-b77a-456c-9188-7f56b960ff2f.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113407_7011e217-8533-41fd-ac4f-c61961775080.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113414_5fe26604-39de-4477-bfa4-b4e66095c014.png",
      },
      {
        id: "hematite",
        name: "Hematite",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_135203_3a5d8457-0706-42cf-8420-0978bc33872c.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113410_f2d3d4ad-4c82-4ad2-8a9f-b37f6a4205ee.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113416_d6d0418f-7c57-47b9-8688-1962cc2724ef.png",
      },
      {
        id: "white-agate",
        name: "White Agate",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_135205_1cc97b36-1e28-4bef-8a10-2158e0daa8eb.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113411_8f68d334-7890-4502-bfb8-03806e23d12d.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113417_ba159564-2f49-4f56-b0e8-41c7208296a1.png",
      },
    ],
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
    variants: [
      {
        id: "tigers-eye",
        name: "Tiger's Eye",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233459_89fab153-6a94-418f-bc21-7053259e5774.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233501_c12fa456-df42-49f7-8bb7-3b8756b805d3.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102841_1591e3be-084c-4312-b349-f05c197df2cc.png",
      },
      {
        id: "lava-stone",
        name: "Lava Stone",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113428_07aec867-6b6c-4bb9-8b44-568fd9ed1f5e.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113435_d9dd72e5-2e21-47f9-8a4e-189bb11708f7.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113442_b6448e68-761c-4448-afa4-199ca9450607.png",
      },
      {
        id: "hematite",
        name: "Hematite",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113430_ae9d98f3-84d4-40b1-a047-7952e12e48eb.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113437_b74a9b88-cdc6-44b6-bff9-19b03210d1e7.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113444_3290592d-24ad-41a8-81d9-064aeef71957.png",
      },
      {
        id: "white-agate",
        name: "White Agate",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113433_fa677eb8-5cd2-4d9c-be1a-c295497593fd.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113440_8c05a442-0800-4a6e-80f3-610fb01cf881.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113446_fdd2b829-888b-44e3-80af-3b2e29bb5f29.png",
      },
    ],
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

