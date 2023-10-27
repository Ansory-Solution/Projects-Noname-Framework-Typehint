// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// This File is From Ansory Solution
// Licensed under GNU GENERAL PUBLIC LICENSE Version 3
// File: nature.d.ts (ansory-solution/projects/noname-framework/typehint/type/nature.d.ts)
// Content: noname nature type.
// Copyright (c) 2023 ansolve All rights reserved
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

import { CardLike } from "./card";

/**
 * 可以当成元素给予目前元素相关的值
 *
 * > 暂时没发现不能给牌的函数，当然可能是我忽略了
 */
export type NatureGiven = string | string[] | CardLike;

/**
 * 单一属性的名称
 */
export type Nature = string;

/**
 * 最后通过整合表现出来的属性值
 */
export type NatureBundle = string;
