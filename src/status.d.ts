import { Card } from "./lib/element/card";

export interface Status {
	paused: boolean;
	paused2: boolean;
	paused3: boolean;
	over: boolean;
	clicked: boolean;
	auto: boolean;
	/**
	 * @todo
	 */
	event: unknown;
	/**
	 * @todo
	 */
	ai: {
		customAttitude: (() => number)[];
		[key: string]: unknown;
	};
	lastdragchange: unknown[];
	skillaudio: string[];
	/**
	 * @todo
	 */
	dieClose: unknown[];
	dragline: unknown[];
	/**
	 * @todo
	 */
	dying: unknown[];
	globalHistory: [
		{
			cardMove: [];
			custom: [];
			useCard: [];
			changeHp: [];
			everything: [];
		},
	];
	cardtag: {
		yingbian_zhuzhan: [];
		yingbian_kongchao: [];
		yingbian_fujia: [];
		yingbian_canqu: [];
		yingbian_force: [];
	};
	renku: Card[];
	prehidden_skills: string[];
	postReconnect: object;
}
