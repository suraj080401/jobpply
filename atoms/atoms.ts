import { atom } from "recoil";

export const currNavTabAtom = atom<string>({
	key: "currNavTabState",
	default: "home",
});

export const globalRoleFilter = atom<string>({
	key: "globalRoleFilterState",
	default: "",
});

export const globalExperienceFilter = atom<string>({
	key: "globalExperienceFilterState",
	default: "",
});
