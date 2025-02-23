export type HeroQuery = {
  heroCollection: {
    items: {
      title: string;
      subtitle: string;
      preTitle: string;
      buttonsCollection: {
        items: {
          link: string;
          label: string;
        }[];
      };
    }[];
  };
};

export type LogoWallCollectionQuery = {
  logoWallCollectionCollection: {
    items: {
      title: string;
      itemsCollection: {
        items: LogoWallItem[];
      };
    }[];
  };
};

export type LogoWallItem = {
  title: string;
  description: string;
  logo: {
    url: string;
    title: string;
    width: number;
    height: number;
  };
};

export type NavigationQuery = {
  navigationCollection: {
    items: {
      title: string;
      linksCollection: {
        items: {
          link: string;
          label: string;
        }[];
      };
    }[];
  };
};
