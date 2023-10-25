import { CardLike, MayCard } from "../../type/card";
import { Nature, NatureBundle, NatureGiven } from "../../type/nature";
import { Card } from "./card";
import { Player } from "./player";

/**
 * 虚拟牌，指非dom的表示卡牌信息的对象，和视为牌不是一个概念
 */
export class VCard<
	CardName extends string = string,
	CardSuit extends string = string,
	CardNumber extends number = number,
	CardNatures extends Nature[] = Nature[],
> {
	/**
	 * 卡牌的id
	 */
	name: CardName;

	/**
	 * 卡牌的花色
	 */
	suit: CardSuit;

	/**
	 * 卡牌的点数
	 */
	number: CardNumber;

	/**
	 * 卡牌的属性
	 */
	nature?: NatureBundle;

	/**
	 * 卡牌的所有属性
	 */
	natures?: CardNatures;

	constructor(
		suitOrCard?:
			| string
			| CardLike<CardName, CardSuit, CardNumber, CardNatures>,
		numberOrCards?: number | Card[],
		name?: CardName,
		nature?: NatureBundle,
	);

	/**
	 * 判断此牌与给定的牌是否存在一样的花色
	 *
	 * @param card 与其判断的卡牌
	 */
	sameSuitAs(card: MayCard): boolean;

	/**
	 * 判断此牌与给定的牌是否存在不一样的花色
	 *
	 * @param card 与其判断的卡牌
	 */
	differentSuitFrom(card: MayCard): boolean;

	/**
	 * 判断此牌与给定的牌是否存在一样的点数
	 *
	 * @param card 与其判断的卡牌
	 */
	sameNumberAs(card: MayCard): boolean;

	/**
	 * 判断此牌与给定的牌是否存在不一样的点数
	 *
	 * @param card 与其判断的卡牌
	 */
	differentNumberFrom(card: MayCard): boolean;

	/**
	 * 判断此牌与给定的牌是否存在一样的名称
	 *
	 * @param card 与其判断的卡牌
	 */
	sameNameAs(card: MayCard): boolean;

	/**
	 * 判断此牌与给定的牌是否存在不一样的名称
	 *
	 * @param card 与其判断的卡牌
	 */
	differentNameFrom(card: MayCard): boolean;

	/**
	 * 判断卡牌是否有给定的属性
	 *
	 * @param nature 可以表示属性或一堆属性的元素
	 * @param player 若存在值，则表示该牌在某一武将手上时的情况
	 */
	hasNature(nature: NatureGiven, player?: Player): boolean;
}
