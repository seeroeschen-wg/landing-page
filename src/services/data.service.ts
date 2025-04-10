import type { SongData } from "@/config/karaoke.interface";
import type { LandingPageData } from "@/config/landing.interface";
import karaokeList from "@/data/karaoke-list.json";
import landingData from "@/data/landing.json";

export const getLandingData = async (): Promise<LandingPageData> => {
	const data: LandingPageData = landingData;
	return data;
};

export const getKaraokeList = async (): Promise<Array<SongData>> => {
	const data: Array<SongData> = karaokeList;
	return data;
};
