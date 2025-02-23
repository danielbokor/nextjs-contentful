import "server-only";
import {
  CustomerPostQuery,
  CustomerPostSlugsQuery,
  HeroQuery,
  LogoWallCollectionQuery,
  NavigationQuery,
} from "../type";
import { contentGqlFetcher } from "./fetch";

export const getContentForNavigation = async (name: string) => {
  const query = `#graphql
    query NavigationCollection($where: NavigationFilter) {
      navigationCollection(where: $where) {
        items {
          name
          linksCollection {
            items {
              label
              link
            }
          }
        }
      }
    }
  `;

  const data = await contentGqlFetcher<NavigationQuery>({
    query,
    variables: {
      where: {
        name,
      },
    },
  });

  if (!data) {
    throw new Error("Failed to fetch navigation");
  }

  return data?.navigationCollection.items;
};

export const getContentForLogoWall = async () => {
  const query = `#graphql
    query logoWallCollectionCollection($limit: Int) {
      logoWallCollectionCollection {
        items {
          title,
          itemsCollection(limit: $limit) {
            items {
              title
              description
              logo {
                url,
                title,
                width,
                height
              }
            }
          }
        }
      }
    }

  `;

  const data = await contentGqlFetcher<LogoWallCollectionQuery>({
    query,
    variables: {
      limit: 10,
    },
  });

  if (!data) {
    throw new Error("Failed to fetch logo wall");
  }

  return data?.logoWallCollectionCollection.items;
};

export const getContentForHeroes = async () => {
  const query = `#graphql
   query ExampleQuery {
      heroCollection {
        items {
          title
          subtitle
          preTitle
          buttonsCollection {
            items {
              link
              label
            }
          }
        }
      }
    }
  `;

  const data = await contentGqlFetcher<HeroQuery>({ query });

  if (!data) {
    throw new Error("Failed to fetch heroes");
  }

  return data?.heroCollection.items;
};

export const getContentForCustomerPost = async (slug: string) => {
  const query = `#graphql
  query CustomerPostCollection($where: CustomerPostFilter) {
    customerPostCollection(where: $where) {
      items {
        title
        slug
        customer {
          name
          logo {
            title
            url
            width
            height
          }
          badge {
            title
            description
            width
            height
            url
          }
          location
          industry
          impact
          product
          website
        }
        body {
          json
        }
        author {
          name
          role
          profilePhoto {
            url
            title
            height
            width
            description
          }
        }
      }
    }
  }
  `;

  const data = await contentGqlFetcher<CustomerPostQuery>({
    query,
    variables: {
      where: {
        slug,
      },
    },
  });

  if (!data) {
    throw new Error("Failed to fetch customer post");
  }

  return data?.customerPostCollection.items;
};

export const getCustomerPostSlugs = async () => {
  const query = `#graphql
  query CustomerPostCollection {
    customerPostCollection {
      items {
        slug
      }
    }
  }
  `;

  const data = await contentGqlFetcher<CustomerPostSlugsQuery>({ query });

  if (!data) {
    throw new Error("Failed to fetch customer post slugs");
  }

  return data?.customerPostCollection.items.map((item) => item.slug);
};
