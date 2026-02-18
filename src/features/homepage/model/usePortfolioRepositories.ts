import { useEffect, useState } from "react";

import { loadPortfolioRepositories } from "../../../shared/api/github";
import { RepositoryGroup } from "../../../shared/types/github";
import { groupByProjectTopics } from "../lib/groupRepositories";

type State = {
  loading: boolean;
  error: boolean;
  groups: RepositoryGroup[];
};

const initialState: State = {
  loading: true,
  error: false,
  groups: [],
};

export function usePortfolioRepositories(): State {
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    let active = true;

    loadPortfolioRepositories()
      .then((repositories) => {
        if (!active) {
          return;
        }

        setState({
          loading: false,
          error: false,
          groups: groupByProjectTopics(repositories),
        });
      })
      .catch(() => {
        if (!active) {
          return;
        }

        setState({
          loading: false,
          error: true,
          groups: [],
        });
      });

    return () => {
      active = false;
    };
  }, []);

  return state;
}
