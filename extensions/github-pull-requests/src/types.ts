export type PullRequests = {
  pullRequests: PullRequest[];
};

export type PullRequest = {
  number: number;
  title: string;
  url: string;
  author: { login: string };
  repository: {
    name: string;
    nameWithOwner: string;
  };
  assignees:
    | {
        nodes: { login: string }[];
      }
    | undefined;
  reviewRequests:
    | {
        nodes: {
          requestedReviewer: { login: string };
        }[];
      }
    | undefined;
};

export type Repo = {
  nodes: {
    pullRequests: {
      nodes: PullRequest[];
    };
  }[];
};

export type Data = {
  viewer: {
    repositories: Repo;
    pullRequests: {
      nodes: PullRequest[];
    };
    organizations: {
      nodes: {
        repositories: Repo;
      }[];
    };
  };
};

export type DataJson =
  | {
      data: Data;
    }
  | {
      message: string | undefined;
    }
  | {
      errors: { message: string }[];
    };