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
