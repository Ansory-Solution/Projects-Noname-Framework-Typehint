import { CardStruct, CardTag } from "../../type/card";
import { Nature, NatureBundle, NatureGiven } from "../../type/nature";
import { Player } from "./player";

/**
 * 卡牌
 */
export class Card<
	CardName extends string = string,
	CardSuit extends string = string,
	CardNumber extends number = number,
	CardNatures extends Nature[] = Nature[],
> extends HTMLDivElement {
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

	natures?: CardNatures;

	storage: Record<string, unknown>;
	vanishtag: CardTag[];
	gaintag: CardTag[];
	_uncheck: unknown[];

	/**
	 * 创建卡牌div用的函数
	 *
	 * @param position 此牌的初始位置
	 * @param info 此牌是否能被点击
	 * @param noclick 此牌是否会展开信息
	 */
	constructor(position?: HTMLDivElement, info?: "noclick", noclick?: true);

	/**
	 * 构建卡牌元素的过程
	 *
	 * @param info 此牌是否能被点击
	 * @param noclick 此牌是否会展开信息
	 */
	build(info?: "noclick", noclick?: true): void;

	/**
	 * 为卡牌添加关于点击的监听
	 *
	 * @param info 此牌是否能被点击
	 */
	buildEventListener(info?: "noclick"): void;

	/**
	 * 构造卡牌的属性
	 */
	buildProperty(): void;

	buildNode(): void;

	buildIntro(noclick?: true): void;

	hasNature(nature: NatureGiven, player: Player): boolean;

	/**
	 * > 只针对【杀】起效果
	 */
	addNature(nature: NatureGiven): NatureBundle;

	removeNature(nature: NatureGiven): NatureBundle;

	addGaintag(gaintag: string | string[]): void;

	removeGaintag(tag: string | true): void;

	hasGaintag(tag: string): boolean;

	init(card: CardStruct): ThisType<Card>;

	updateTransform(bool?: boolean, delay?: number): void;

	aiexclude(): void;

	getSource(name: string): boolean;

	moveDelete(player: Player): void;

	moveTo(player: Player): ThisType<Card>;

	copy(): Card;

	uncheck(skill: string): void;

	recheck(skill: string): void;

	discard(bool?: boolean): void;

	hasTag(tag: string): boolean;

	hasPosition(): boolean;

	isInPile(): boolean;
}
