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

export type CustomerPostQuery = {
  customerPostCollection: {
    items: {
      title: string;
      slug: string;
      customer: {
        name: string;
        logo: {
          title: string;
          url: string;
          width: number;
          height: number;
        };
        badge: {
          title: string;
          description: string;
          width: number;
          height: number;
          url: string;
        };
        location: string;
        industry: string;
        impact: string;
        product: string;
        website: string;
      };
      body: {
        json: any;
      };
      author: {
        name: string;
        role: string;
        profilePhoto: {
          url: string;
          title: string;
          height: number;
          width: number;
          description: string;
        };
      };
    }[];
  };
};

export type CustomerPostSlugsQuery = {
  customerPostCollection: {
    items: {
      slug: string;
    }[];
  };
};
