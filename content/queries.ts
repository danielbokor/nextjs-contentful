import { HeroQuery, LogoWallCollectionQuery } from "../type";
import { contentGqlFetcher } from "./fetch";

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

  console.log({ data });

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
