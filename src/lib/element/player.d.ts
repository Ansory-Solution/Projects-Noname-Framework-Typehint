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
}
