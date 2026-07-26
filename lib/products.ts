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
    variants: [
      {
        id: "tigers-eye",
        name: "Tiger's Eye",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233430_43c6a8d2-6d05-4934-802c-9abfffa6d352.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_234305_4d0872c8-268f-470a-9604-22a20b7aa97f.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102831_c92f9e38-8c66-47d9-9e26-ca7e2021001b.png",
      },
      {
        id: "lava-stone",
        name: "Lava Stone",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112325_42fea8b1-f1b9-4faf-969a-575094c5e32b.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112333_4d0ca334-b43a-40fe-aef3-abaab496f66a.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112339_ef35d61c-144f-4ecb-970c-9cf117858dc8.png",
      },
      {
        id: "hematite",
        name: "Hematite",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112328_078e7cc5-1d67-4f10-9b93-e1af0c6c8198.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112335_a2fd96bd-20d4-4581-8076-2c3d55fd065b.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112340_18820538-71c6-4d3f-8505-53db0da82f6d.png",
      },
      {
        id: "white-agate",
        name: "White Agate",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112518_4cebd021-002e-4de9-839b-1f5304720a6e.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112337_f8816a2f-b18e-4bf2-a502-ab1f70303878.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112342_ee389fe5-9a09-4cd2-80b2-5887acda8209.png",
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
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112620_1a9aef88-095d-4672-88e7-31812239ab71.png",
      },
      {
        id: "hematite",
        name: "Hematite",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112609_b7be124e-e6aa-4fcf-a9af-faadfc651f6d.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112616_13268a23-81a2-4277-b0dd-e610e11a5171.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112622_b1616583-ed86-4a2e-b36c-ddc80643e092.png",
      },
      {
        id: "white-agate",
        name: "White Agate",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112611_215db32e-f170-40c9-9af7-9d31e62fbac6.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112618_9db97557-4d83-4202-a6fa-e8aca2b32513.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112624_2190cd90-daf7-4e04-8d7f-c21c4fc1110f.png",
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
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102834_4714d313-f745-461e-bd00-a0eab0e4a3a4.png",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230737_6a17d03b-a560-4daa-af16-468d427a8b5d.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233440_5b28f560-3d58-4053-b816-60cee1421d36.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233442_c10b20a2-a029-46d6-834a-c9b9427c9155.png",
    variants: [
      {
        id: "tigers-eye",
        name: "Tiger's Eye",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233440_5b28f560-3d58-4053-b816-60cee1421d36.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233442_c10b20a2-a029-46d6-834a-c9b9427c9155.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102834_4714d313-f745-461e-bd00-a0eab0e4a3a4.png",
      },
      {
        id: "lava-stone",
        name: "Lava Stone",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112751_5718c905-6ede-41b4-a28e-50139f3fcb8b.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112759_5e78d565-09e5-4d36-ab52-4b9132d30623.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112805_426c563d-3289-4eb8-ab10-637d140ed454.png",
      },
      {
        id: "hematite",
        name: "Hematite",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112754_5b9266ce-44a5-407f-beed-8e3abe12f51d.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112801_9fd003db-fcb6-431e-a855-be9b97c41bd3.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112807_909ac9e0-16bf-41d4-b2c6-ca04063f0cdb.png",
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
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102835_3aee44f6-62ef-4918-b4dd-97f070440cb0.png",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230738_7a588193-e49f-4741-a734-3dc3077469e9.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233444_5baecf5f-a8fb-4121-997a-0cbe1e01965d.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233446_a777dbb8-f516-4697-ac6f-b54830f2bc88.png",
    variants: [
      {
        id: "tigers-eye",
        name: "Tiger's Eye",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233444_5baecf5f-a8fb-4121-997a-0cbe1e01965d.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233446_a777dbb8-f516-4697-ac6f-b54830f2bc88.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102835_3aee44f6-62ef-4918-b4dd-97f070440cb0.png",
      },
      {
        id: "lava-stone",
        name: "Lava Stone",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112821_d6a1aea2-05da-48e8-a272-29ac0ca592ad.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112828_41587ffa-ba9d-4d66-96a9-694a6fe94840.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112836_b4e69cf3-1ac9-4415-94ad-c2f47292d3c9.png",
      },
      {
        id: "hematite",
        name: "Hematite",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112823_c376f02e-1e1d-4402-bfbb-e13ce41c25f8.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112830_feb82114-15ff-47f1-9a2e-1312b93af9b2.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112837_0aa07b4b-a0d4-4438-8b05-6bf3852346ce.png",
      },
      {
        id: "white-agate",
        name: "White Agate",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112825_62915850-66d2-4a62-acf8-fa275373ede2.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112833_79617f37-7083-4737-87f4-196c89ef4d1d.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_112839_2c2dfdef-5155-4499-b791-77ab0cbc97c7.png",
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
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102837_8e3cd80a-40df-425b-a709-328bed00754e.png",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230740_9b243608-71f2-4c5d-8ad4-ce76c3139265.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233449_606d9ad0-304a-4969-ae99-3c399e055b31.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233451_a5daa9fb-8911-4d14-be3f-fbb3378bfb30.png",
    variants: [
      {
        id: "tigers-eye",
        name: "Tiger's Eye",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233449_606d9ad0-304a-4969-ae99-3c399e055b31.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233451_a5daa9fb-8911-4d14-be3f-fbb3378bfb30.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102837_8e3cd80a-40df-425b-a709-328bed00754e.png",
      },
      {
        id: "lava-stone",
        name: "Lava Stone",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113312_a4022f6a-2978-41f9-8a65-bd6b7df9ea32.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113315_56271b5f-bd4b-4bbc-b888-6bdd906bc5a7.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113319_ee4a9307-7aba-48a4-bc6d-7acd80e2775c.png",
      },
      {
        id: "hematite",
        name: "Hematite",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113313_ceaf0baf-436c-4b14-80d4-9a8c620b3cd2.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113316_63c5f643-8105-459c-b5c8-ecea6bf94b05.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113320_d35c4862-a35e-4ed4-872f-0bbedbf2b50b.png",
      },
      {
        id: "white-agate",
        name: "White Agate",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113314_0ae67561-fef9-4657-96dc-34350c8e7ef3.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113317_c44cffa5-6812-47c4-8076-93b8f16f4bf2.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113321_ac04ee19-82e4-4c2c-a7f2-9b8cc07e925e.png",
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
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102840_4247059d-7e28-4dd1-a886-555c48c9b25c.png",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230743_a2f17a74-0395-4d22-93e4-1cc07e20a017.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233424_002b0938-87cb-4549-b8d2-973e94e904aa.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_232623_b44227b2-af2c-4b32-a1db-356870a0e075.png",
    variants: [
      {
        id: "tigers-eye",
        name: "Tiger's Eye",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233424_002b0938-87cb-4549-b8d2-973e94e904aa.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_232623_b44227b2-af2c-4b32-a1db-356870a0e075.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_102840_4247059d-7e28-4dd1-a886-555c48c9b25c.png",
      },
      {
        id: "lava-stone",
        name: "Lava Stone",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113400_33ac37d7-ea05-46d8-b293-446ff2b0e350.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113407_7011e217-8533-41fd-ac4f-c61961775080.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113414_5fe26604-39de-4477-bfa4-b4e66095c014.png",
      },
      {
        id: "hematite",
        name: "Hematite",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113402_aaa43772-e7c7-4ab4-87cd-8f622b89c88a.png",
        wristPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113410_f2d3d4ad-4c82-4ad2-8a9f-b37f6a4205ee.png",
        heroPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113416_d6d0418f-7c57-47b9-8688-1962cc2724ef.png",
      },
      {
        id: "white-agate",
        name: "White Agate",
        studioPhoto:
          "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260726_113405_20570ed9-f1c0-4f74-857f-0b7f3afc78fe.png",
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
