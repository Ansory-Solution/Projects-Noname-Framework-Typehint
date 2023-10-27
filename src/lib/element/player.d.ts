// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
// This File is From Ansory Solution
// Licensed under GNU GENERAL PUBLIC LICENSE Version 3
// File: player.d.ts (ansory-solution/projects/noname-framework/typehint/src/lib/element/player.d.ts)
// Content: Noname Player info.
// Copyright (c) 2023 ansolve All rights reserved
// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

import { JudgeResult } from "../../result/judge";
import { CardOrCards, CardTag } from "../../type/card";
import { Card } from "./card";
import { GameEvent } from "./event";
import { PlayerWhen, PlayerWhenArgument } from "./player/when";

export class Player extends HTMLDivElement {
	constructor(position?: HTMLDivElement, noclick?: true);

	build(noclick?: true): void;

	buildNode(): void;

	buildExtra(): void;

	buildProperty(): void;

	buildEventListener(noclick?: true): void;

	// 新函数
	/**
	 * 链式创建一次性技能的api。
	 *
	 * 使用者只需要关注技能的效果，而不是技能的本身。
	 *
	 * @version 1.4
	 */
	when(
		first: PlayerWhenArgument | string[],
		...other: PlayerWhenArgument[]
	): PlayerWhen;

	/**
	 * 让一名角色明置一些手牌
	 */
	addShownCards(
		...args: (CardTag | Card | Card[])[]
	): GameEvent<"addShownCards">;

	hideShownCards(
		...args: (CardTag | Card | Card[])[]
	): GameEvent<"hideShownCards">;

	getShownCards(): Card[];

	/**
	 * Execute the delay card effect
	 * 执行延时锦囊牌效果
	 */
	executeDelayCardEffect(
		card: Card,
		target: Player,
		judge: (card: Card) => number,
		judge2: (result: JudgeResult) => boolean,
	): GameEvent;

	/**
	 * Check if the card does not count toward hand limit
	 * 检测此牌是否不计入手牌上限
	 */
	canIgnoreHandcard(card: Card): boolean;

	/**
	 * Gift
	 * 赠予
	 */
	gift(cards: CardOrCards, target: Player): GameEvent<"gift">;

	/**
	 * Check if the player can gift the card
	 * 检测角色是否能赠予此牌
	 *
	 * @param card 要判断的牌
	 * @param target 赠予的目标
	 * @param strict
	 */
	canGift(card: Card, target: Player, strict: boolean): boolean;

	/**
	 * Check if the player refuses gifts
	 * 检测角色是否拒绝赠予
	 *
	 * @param card 要判断的牌
	 * @param player 赠予的目标
	 */
	refuseGifts(card: Card, player: Player): boolean;
}
