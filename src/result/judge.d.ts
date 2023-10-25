import { Card } from "../lib/element/card";
import { EmptyObject } from "../type/base";
import { Result } from "../result";

export type JudgeResult<CustomProperty extends object = EmptyObject> = Result<{
	bool: boolean;
	judge: number;
	card: Card;
	name: string;
	number: number;
	suit: string;
	color: string;
	node: HTMLDivElement;
}> &
	CustomProperty;
