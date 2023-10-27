// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// This File is From Ansory Solution
// Licensed under GNU GENERAL PUBLIC LICENSE Version 3
// File: event.d.ts (ansory-solution/projects/noname-framework/typehint/src/lib/element/event.d.ts)
// Content: Noname Event info.
// Copyright (c) 2023 ansolve All rights reserved
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

export class GameEvent<Name extends string = "emptyEvent"> {
	name: Name;
}
