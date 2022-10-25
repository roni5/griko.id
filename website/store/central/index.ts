import create from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export interface CentralStore {
  cmdQuery: string;
  isCmdOpen: boolean;
}

export const useCentralStore = create(
  subscribeWithSelector<CentralStore>((_set, _get) => ({
    cmdQuery: "",
    isCmdOpen: false,
  })),
);

export const setCmdQuery = (cmdQuery: CentralStore["cmdQuery"]) => {
  useCentralStore.setState({ cmdQuery });
};
export const openCmd = () => {
  useCentralStore.setState({ isCmdOpen: true });
};
export const closeCmd = () => {
  useCentralStore.setState({ isCmdOpen: false });
};
export const toggleCmd = () => {
  useCentralStore.setState((prev) => ({ isCmdOpen: !prev.isCmdOpen }));
};
