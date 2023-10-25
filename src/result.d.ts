import { EmptyObject } from "./type/base";

export type Result<CustomProperty extends object = EmptyObject> =
	CustomProperty;
