import { Card } from "../lib/element/card";
import { VCard } from "../lib/element/vcard";
import { Nature } from "./nature";

/**
 * 卡牌以及卡牌的衍生物
 */
export type CardLike<
	CardName extends string = string,
	CardSuit extends string = string,
	CardNumber extends number = number,
	CardNatures extends Nature[] = Nature[],
> =
	| MayCard<CardName, CardSuit, CardNumber, CardNatures>
	| CardStruct<CardName, CardSuit, CardNumber, CardNatures>;

/**
 * 卡牌或者一堆卡牌
 */
export type CardOrCards<
	CardName extends string = string,
	CardSuit extends string = string,
	CardNumber extends number = number,
	CardNatures extends Nature[] = Nature[],
> =
	| Card<CardName, CardSuit, CardNumber, CardNatures>
	| Card<CardName, CardSuit, CardNumber, CardNatures>[];

/**
 * 可构成卡牌的元组/对象结构
 */
export type CardStruct<
	CardName extends string = string,
	CardSuit extends string = string,
	CardNumber extends number = number,
	CardNatures extends Nature[] = Nature[],
> =
	| [suit: CardSuit, number: CardNumber, name: CardName, nature?: CardNatures]
	| {
			suit: CardSuit;
			number: CardNumber;
			name: CardName;
			nature?: CardNatures;
	  };

/**
 * 卡牌的标签
 *
 * 仅作为指示类型
 */
export type CardTag = string;

/**
 * 可能是卡牌的东西，包含卡牌的虚拟卡牌
 */
export type MayCard<
	CardName extends string = string,
	CardSuit extends string = string,
	CardNumber extends number = number,
	CardNatures extends Nature[] = Nature[],
> =
	| Card<CardName, CardSuit, CardNumber, CardNatures>
	| VCard<CardName, CardSuit, CardNumber, CardNatures>;
