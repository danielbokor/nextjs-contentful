import "server-only";
import { HeroQuery, LogoWallCollectionQuery, NavigationQuery } from "../type";
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
