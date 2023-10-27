// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// This File is From Ansory Solution
// Licensed under GNU GENERAL PUBLIC LICENSE Version 3
// File: judge.d.ts (ansory-solution/projects/noname-framework/typehint/src/result/judge.d.ts)
// Content: Result info of event Judge.
// Copyright (c) 2023 ansolve All rights reserved
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

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
