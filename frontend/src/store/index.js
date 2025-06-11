import { atom, createStore } from "jotai";

// atom = state variable unique to jotai

export const isTextBoxVisibleAtom = atom(false);
export const textBoxContentAtom = atom("");
export const store = createStore();
