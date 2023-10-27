// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// This File is From Ansory Solution
// Licensed under GNU GENERAL PUBLIC LICENSE Version 3
// File: when.d.ts (ansory-solution/projects/noname-framework/typehint/src/lib/element/player/when.d.ts)
// Content: `Player#when` info.
// Copyright (c) 2023 ansolve All rights reserved
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

import { OccasionGiven } from "../../../type/skill";

export type PlayerWhenArgument =
	| string
	| {
			player?: OccasionGiven;
			global?: OccasionGiven;
			target?: OccasionGiven;
			source?: OccasionGiven;
	  };

export class PlayerWhen {
	filter(fun: () => boolean): ThisType<PlayerWhen>;

	removeFilter(fun: () => boolean): ThisType<PlayerWhen>;

	filter2(fun: () => boolean): ThisType<PlayerWhen>;

	removeFilter2(fun: () => boolean): ThisType<PlayerWhen>;

	then(fun: () => void): ThisType<PlayerWhen>;

	popup(str: string): ThisType<PlayerWhen>;

	translation(translation: string): ThisType<PlayerWhen>;

	assign(obj: Record<string, unknown>): ThisType<PlayerWhen>;
}
