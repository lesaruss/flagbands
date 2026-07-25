// Shared product content for Flag Bands. Used by the homepage shop grid and
// the individual /products/[slug] pages. Photo URLs are Higgsfield-hosted
// (background-removed cutout + reference-based studio/wrist renders,
// generated from real product photography - not stock or fully synthetic
// images).

export interface ProductCause {
  org: string | null;
  body: string;
}

export interface ProductContent {
  slug: string;
  name: string;
  label: string;
  price: string;
  accentColor: string;
  flagDescription: string;
  cutoutPhoto: string;
  studioPhoto: string;
  wristPhoto: string;
  cause: ProductCause;
}

const MATERIALS_BODY =
  "Each Flag Bands wristband is handcrafted with genuine lava stone beads, small color-matched accent beads in the flag's own palette, a custom-printed wood flag plate, and copper hardware. Every band is strung and finished by hand, so slight natural variation between pieces is part of the product, not a flaw.";

export const PRODUCTS: ProductContent[] = [
  {
    slug: "usa",
    name: "United States",
    label: "USA",
    price: "$30",
    accentColor: "#002868",
    flagDescription: "the red, white, and blue stars and stripes of the American flag",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230733_d3c7c005-d716-450d-9f8d-e2aa87c76193.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233426_f9fbfbc7-af94-42b3-8181-6e5e0789c0ea.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233428_ecf3a2d2-d06b-4fc5-a183-84b6e4897d5e.png",
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
    price: "$30",
    accentColor: "#009B3A",
    flagDescription: "the black, gold, and green diagonal saltire of the Jamaican flag",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230734_8e22e53e-33b8-4c58-9113-98406189519a.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233430_43c6a8d2-6d05-4934-802c-9abfffa6d352.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233432_c1cfcfd7-081f-4669-b8dd-76ad031c5e00.png",
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
    price: "$30",
    accentColor: "#00209F",
    flagDescription: "the blue and red Haitian flag with its white coat of arms emblem",
    cutoutPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_230735_2663e86b-8a03-4ac7-a661-c0de6cc36859.png",
    studioPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233435_0a8b464e-60da-40ac-92c7-d4d849de8a7a.png",
    wristPhoto:
      "https://d8j0ntlcm91z4.cloudfront.net/user_3CDGnUNmLloVUBJsrfOxR8cZFdv/hf_20260725_233437_f5506a4d-a0c6-4307-883e-838b6f13da33.png",
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
    price: "$30",
    accentColor: "#00247D",
    flagDescription: "the yellow, blue, and red stripes and stars of the Venezuelan flag",
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
    price: "$30",
    accentColor: "#002868",
    flagDescription: "the red, white, and blue Puerto Rican flag with its star and triangle",
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
    price: "$30",
    accentColor: "#002A8F",
    flagDescription: "the blue and white stripes, red triangle, and white star of the Cuban flag",
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
    price: "$30",
    accentColor: "#750787",
    flagDescription: "the six-stripe rainbow Pride flag",
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
    price: "$30",
    accentColor: "#2E7D32",
    flagDescription: "the blue and green V of the official Vegan flag",
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
    price: "$30",
    accentColor: "#D91023",
    flagDescription: "the red, white, red vertical stripes of the Peruvian flag",
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
