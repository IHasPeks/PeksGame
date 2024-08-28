/*:
 * @author Casper Gaming
 * @url https://www.caspergaming.com/plugins/cgmz/extrastats/
 * @target MZ
 * @base CGMZ_Core
 * @orderAfter CGMZ_Core
 * @plugindesc Tracks additional game data not otherwise easily available
 * @help
 * ============================================================================
 * For terms and conditions using this plugin in your game please visit:
 * https://www.caspergaming.com/terms-of-use/
 * ============================================================================
 * Become a Patron to get access to beta/alpha plugins plus other goodies!
 * https://www.patreon.com/CasperGamingRPGM
 * ============================================================================
 * Version: 1.1.0
 * ----------------------------------------------------------------------------
 * Compatibility: Only tested with my CGMZ plugins.
 * Made for RPG Maker MZ 1.5.0
 * ----------------------------------------------------------------------------
 * Description: Tracks additional game data such as gold spent at shops,
 * damage taken, items used, and many more. This data is stored in variables
 * so it is easy to access in events. Turn tracking on/off any time.
 * ----------------------------------------------------------------------------
 * Documentation:
 * --------------------------Stats Tracked-------------------------------------
 * The following stats are tracked for the entire party:
 * • Gold spent at shops
 * • Gold earned at shops
 * • Items bought from shops
 * • Items sold to shops
 * • Damage taken
 * • Damage dealt
 * • Items used
 * • Gold looted from battle
 *
 * The following stats are tracked per actor:
 * • Times attacked
 * • Times attacked with
 * • Times used skills
 * --------------------------Script Calls--------------------------------------
 * These stats are also always stored in CGMZ data separate from the in-game
 * variables. To access these values, use the following javascript in any
 * "script" command (script, command variables->script, etc):
 *
 * $cgmz.getExtraStats("itemsBought")
 * $cgmz.getExtraStats("itemsSold")
 * $cgmz.getExtraStats("itemsUsed")
 * $cgmz.getExtraStats("goldSpent")
 * $cgmz.getExtraStats("goldProfit")
 * $cgmz.getExtraStats("goldLooted")
 * $cgmz.getExtraStats("damageDealt")
 * $cgmz.getExtraStats("damageTaken")
 *
 * This can help track these stats without needing to dedicate in-game
 * variables to them as you can always look them up on the fly.
 * ----------------------------Plugin Commands---------------------------------
 * • Initialize
 * This command will re-initialize all CGMZ Extra Stats data. Does not affect
 * in-game variables, only internal CGMZ data.
 *
 * • Tracking
 * This command will turn all tracking ON or OFF. Tracking is ON by default.
 * When tracking is OFF, both in-game variables and internal CGMZ extra stat
 * data is not tracked.
 *
 * • Get Party Stat
 * Sets a game variable to the selected party stat.
 *
 * • Get Actor Stat
 * Sets a game variable to the selected actor-specific stat.
 * ------------------------------Saved Games-----------------------------------
 * This plugin is fully compatible with saved games. This means you can:
 * 
 * ✓ Add plugin to a saved game and stats will start being tracked
 * ✓ Modify parameters and updates will be reflected in saved games
 * ✓ Remove the plugin with no issues to save data
 * ------------------------Legacy Stat Info------------------------------------
 * Legacy stats are the first 8 stats tracked via this plugin.
 *
 * These stats were automatically tracked by variables set up in parameters.
 * New stats do not have the ability to be tracked automatically by variable,
 * as this approach has several issues for per-actor stats. Instead, it is
 * recommended to use the plugin command to get these stats into variables.
 * -----------------------------Filename---------------------------------------
 * The filename for this plugin MUST remain CGMZ_ExtraStats.js
 * This is what it comes as when downloaded. The filename is used to load
 * parameters and execute plugin commands. If you change it, things will begin
 * behaving incorrectly and your game will probably crash. Please do not
 * rename the js file.
 * -------------------------Version History------------------------------------
 * Version 1.0 - Initial release
 *
 * Version 1.1.0
 * - Added tracking for actor-specific stats (times attacked, times attacked
 *   with, times used skills).
 * - Added plugin command to get party stats
 * - Added plugin command to get actor stats
 * - This plugin now works in saved games from before this plugin was added
 * - Documentation update
 *
 * @command Initialize
 * @desc Re-initializes CGMZ extra stat data. Only call this if you know what you are doing.
 * Will reset all CGMZ extra stat data as if you started a new game.
 *
 * @command Tracking
 * @desc Turns tracking of extra stats on/off
 *
 * @arg track
 * @type boolean
 * @desc Turns tracking for all extra stats on/off.
 * @default true
 *
 * @command Get Party Stat
 * @desc Get a party-wide stat into a variable
 *
 * @arg stat
 * @type select
 * @option Items Bought
 * @value itemsBought
 * @option Items Sold
 * @value itemsSold
 * @option Gold Profit
 * @value goldProfit
 * @option Gold Spent
 * @value goldSpent
 * @option Items Used
 * @value itemsUsed
 * @option Gold Looted
 * @value goldLooted
 * @option Damage Taken
 * @value damageTaken
 * @option Damage Dealt
 * @value damageDealt
 * @desc The stat to get
 *
 * @arg variable
 * @type variable
 * @desc Variable to store the stat in
 * @default 0
 *
 * @command Get Actor Stat
 * @desc Get an actor-specific stat into a variable
 *
 * @arg stat
 * @type select
 * @option Times Attacked
 * @value PAtimesAttacked
 * @option Times Attacked With
 * @value PAtimesAttackedWith
 * @option Times Used Skills
 * @value PAtimesUsedSkills
 * @desc The stat to get
 *
 * @arg variable
 * @type variable
 * @desc Variable to store the stat in
 * @default 0
 *
 * @arg actor
 * @type actor
 * @desc Actor to get the tracked stat from
 * @default 0
 *
 * @param Variable Options
 *
 * @param Items Bought
 * @parent Variable Options
 * @type variable
 * @desc Variable to store items bought from shop count
 * @default 0
 *
 * @param Items Sold
 * @parent Variable Options
 * @type variable
 * @desc Variable to store items sold from shop count
 * @default 0
 *
 * @param Gold Profit
 * @parent Variable Options
 * @type variable
 * @desc Variable to store gold gained from shop sales
 * @default 0
 *
 * @param Gold Spent
 * @parent Variable Options
 * @type variable
 * @desc Variable to store gold lost from shop buy
 * @default 0
 *
 * @param Items Used
 * @parent Variable Options
 * @type variable
 * @desc Variable to store items used from menu or from battle
 * @default 0
 *
 * @param Gold Looted
 * @parent Variable Options
 * @type variable
 * @desc Variable to store gold looted from battle
 * @default 0
 *
 * @param Damage Taken
 * @parent Variable Options
 * @type variable
 * @desc Variable to store damage taken
 * @default 0
 *
 * @param Damage Dealt
 * @parent Variable Options
 * @type variable
 * @desc Variable to store damage dealt
 * @default 0
 *
 * @param Ignored Skills
 * @type skill[]
 * @desc Skills that, when used, do not add to actor's Times Used Skills
 * @default []
*/
var Imported = Imported || {};
Imported.CGMZ_ExtraStats = true;
var CGMZ = CGMZ || {};
CGMZ.Versions = CGMZ.Versions || {};
CGMZ.Versions["Extra Stats"] = "1.1.0";
CGMZ.ExtraStats = CGMZ.ExtraStats || {};
CGMZ.ExtraStats.parameters = PluginManager.parameters('CGMZ_ExtraStats');
CGMZ.ExtraStats.ItemsBought = Number(CGMZ.ExtraStats.parameters["Items Bought"]);
CGMZ.ExtraStats.ItemsSold = Number(CGMZ.ExtraStats.parameters["Items Sold"]);
CGMZ.ExtraStats.GoldProfit = Number(CGMZ.ExtraStats.parameters["Gold Profit"]);
CGMZ.ExtraStats.GoldSpent = Number(CGMZ.ExtraStats.parameters["Gold Spent"]);
CGMZ.ExtraStats.ItemsUsed = Number(CGMZ.ExtraStats.parameters["Items Used"]);
CGMZ.ExtraStats.GoldLooted = Number(CGMZ.ExtraStats.parameters["Gold Looted"]);
CGMZ.ExtraStats.DamageTaken = Number(CGMZ.ExtraStats.parameters["Damage Taken"]);
CGMZ.ExtraStats.DamageDealt = Number(CGMZ.ExtraStats.parameters["Damage Dealt"]);
CGMZ.ExtraStats.IgnoredSkills = JSON.parse(CGMZ.ExtraStats.parameters["Ignored Skills"]).map(x => Number(x));
//=============================================================================
// CGMZ_Temp
//-----------------------------------------------------------------------------
// Add plugin commands for CGMZ Extra Stats
//=============================================================================
//-----------------------------------------------------------------------------
// Register Plugin Commands
//-----------------------------------------------------------------------------
const alias_CGMZ_ExtraStats_registerPluginCommands = CGMZ_Temp.prototype.registerPluginCommands;
CGMZ_Temp.prototype.registerPluginCommands = function() {
	alias_CGMZ_ExtraStats_registerPluginCommands.call(this);
	PluginManager.registerCommand("CGMZ_ExtraStats", "Initialize", this.pluginCommandExtraStatsReinitialize);
	PluginManager.registerCommand("CGMZ_ExtraStats", "Tracking", this.pluginCommandExtraStatsTracking);
	PluginManager.registerCommand("CGMZ_ExtraStats", "Get Party Stat", this.pluginCommandExtraStatsGetPartyStat);
	PluginManager.registerCommand("CGMZ_ExtraStats", "Get Actor Stat", this.pluginCommandExtraStatsGetActorStat);
};
//-----------------------------------------------------------------------------
// Reinitializes the extra stats plugin data
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandExtraStatsReinitialize = function(args) {
	$cgmz.initExtraStatsVars(true);
};
//-----------------------------------------------------------------------------
// Turn tracking ON/OFF
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandExtraStatsTracking = function(args) {
	$cgmz.setExtraStatsTracking(args.track === "true");
};
//-----------------------------------------------------------------------------
// Get a Party Stat into a game variable
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandExtraStatsGetPartyStat = function(args) {
	const variable = Number(args.variable);
	const value = $cgmz.getExtraStats(args.stat);
	$gameVariables.setValue(variable, value);
};
//-----------------------------------------------------------------------------
// Get an Actor Stat into a game variable
//-----------------------------------------------------------------------------
CGMZ_Temp.prototype.pluginCommandExtraStatsGetActorStat = function(args) {
	const variable = Number(args.variable);
	const actorId = Number(args.actor);
	const value = $cgmz.getExtraStatsActor(args.stat, actorId);
	$gameVariables.setValue(variable, value);
};
//=============================================================================
// CGMZ
//-----------------------------------------------------------------------------
// Add new tracked stats to the save data
// Modifies: createPluginData
//=============================================================================
//-----------------------------------------------------------------------------
// Method used by CGMZ for creating plugin data
//-----------------------------------------------------------------------------
const alias_CGMZ_ExtraStats_createPluginData = CGMZ_Core.prototype.createPluginData;
CGMZ_Core.prototype.createPluginData = function() {
	alias_CGMZ_ExtraStats_createPluginData.call(this);
	this.initExtraStatsVars();
};
//-----------------------------------------------------------------------------
// Check for new data after game load
//-----------------------------------------------------------------------------
const alias_CGMZ_ExtraStats_CGMZ_Core_onAfterLoad = CGMZ_Core.prototype.onAfterLoad;
CGMZ_Core.prototype.onAfterLoad = function() {
	alias_CGMZ_ExtraStats_CGMZ_Core_onAfterLoad.call(this);
	if(!this._extraStats) this.initExtraStatsVars();
};
//-----------------------------------------------------------------------------
// Initialize Extra Stats variables
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.initExtraStatsVars = function(reinitialize = false) {
	if(!this._extraStats || reinitialize) {
		this._extraStatsVersion = '1.1.0';
		this._extraStatsTracking = true;
		this._extraStats = {
			'itemsBought': 0,
			'itemsSold': 0,
			'goldProfit': 0,
			'goldSpent': 0,
			'itemsUsed': 0,
			'goldLooted': 0,
			'damageTaken': 0,
			'damageDealt': 0,
			'PAtimesAttacked': {},
			'PAtimesAttackedWith': {},
			'PAtimesUsedSkills': {}
		};
	}
	if(!this._extraStatsVersion) { // Patch version 1.0 to 1.1.0
		this._extraStatsVersion = '1.1.0';
		this._extraStats.PAtimesAttacked = {};
		this._extraStats.PAtimesAttackedWith = {};
		this._extraStats.PAtimesUsedSkills = {};
	} // End patch version 1.0 to 1.1.0
};
//-----------------------------------------------------------------------------
// Getter for whether to track stats or not
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.isTrackingExtraStats = function() {
	return this._extraStatsTracking;
};
//-----------------------------------------------------------------------------
// Setter for whether to track stats or not
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.setExtraStatsTracking = function(tracking) {
	this._extraStatsTracking = tracking;
};
//-----------------------------------------------------------------------------
// Getter for party extra stats
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getExtraStats = function(key) {
	return this._extraStats[key];
};
//-----------------------------------------------------------------------------
// Setter for party extra stats.
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.setExtraStats = function(key, num) {
	this._extraStats[key] = num;
};
//-----------------------------------------------------------------------------
// Add method for party extra stats
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.addExtraStats = function(key, num) {
	const value = this.getExtraStats(key);
	this.setExtraStats(key, num + value);
};
//-----------------------------------------------------------------------------
// Getter for actor extra stats
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.getExtraStatsActor = function(key, actorId) {
	return this.getExtraStats(key)[actorId];
};
//-----------------------------------------------------------------------------
// Setter for actor extra stats
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.setExtraStatsActor = function(key, actorId, num) {
	this._extraStats[key][actorId] = num;
};
//-----------------------------------------------------------------------------
// Add method for actor extra stats
//-----------------------------------------------------------------------------
CGMZ_Core.prototype.addExtraStatsActor = function(key, actorId, num) {
	const value = this.getExtraStatsActor(key, actorId) || 0;
	this.setExtraStatsActor(key, actorId, num + value);
};
//=============================================================================
// Scene_Shop
//-----------------------------------------------------------------------------
// Automatic tracking for items bought, sold, and gold gained from sell, lost from buy
// modified functions: doBuy, doSell
//=============================================================================
//-----------------------------------------------------------------------------
// Alias: Track items bought, gold spent on items.
//-----------------------------------------------------------------------------
const alias_CGMZ_ExtraStats_SceneShop_doBuy = Scene_Shop.prototype.doBuy;
Scene_Shop.prototype.doBuy = function(number) {
	alias_CGMZ_ExtraStats_SceneShop_doBuy.call(this, number);
	if($cgmz.isTrackingExtraStats()) {
		const oldItemBuyCount = $gameVariables.value(CGMZ.ExtraStats.ItemsBought);
		$gameVariables.setValue(CGMZ.ExtraStats.ItemsBought, oldItemBuyCount + number);
		$cgmz.addExtraStats('itemsBought', number);
		const oldSpentCount = $gameVariables.value(CGMZ.ExtraStats.GoldSpent);
		const amount = number * this.buyingPrice();
		$gameVariables.setValue(CGMZ.ExtraStats.GoldSpent, oldSpentCount + amount);
		$cgmz.addExtraStats("goldSpent", amount);
	}
};
//-----------------------------------------------------------------------------
// Alias: Track items sold, gold gained from sale
//-----------------------------------------------------------------------------
const alias_CGMZ_ExtraStats_SceneShop_doSell = Scene_Shop.prototype.doSell;
Scene_Shop.prototype.doSell = function(number) {
	alias_CGMZ_ExtraStats_SceneShop_doSell.call(this, number);
	if($cgmz.isTrackingExtraStats()) {
		const oldItemSellCount = $gameVariables.value(CGMZ.ExtraStats.ItemsSold);
		$gameVariables.setValue(CGMZ.ExtraStats.ItemsSold, oldItemSellCount + number);
		$cgmz.addExtraStats("itemsSold", number);
		const oldProfitCount = $gameVariables.value(CGMZ.ExtraStats.GoldProfit);
		const amount = number * this.sellingPrice();
		$gameVariables.setValue(CGMZ.ExtraStats.GoldProfit, oldProfitCount + amount);
		$cgmz.addExtraStats("goldProfit", amount);
	}
};
//=============================================================================
// Game_Party
//-----------------------------------------------------------------------------
// Automatic tracking for items used
//=============================================================================
//-----------------------------------------------------------------------------
// Alias: Track items used
//-----------------------------------------------------------------------------
const alias_CGMZ_ExtraStats_GameParty_consumeItem = Game_Party.prototype.consumeItem;
Game_Party.prototype.consumeItem = function(item) {
	alias_CGMZ_ExtraStats_GameParty_consumeItem.call(this, item);
	if(DataManager.isItem(item) && $cgmz.isTrackingExtraStats()) {
		const oldItemsUsed = $gameVariables.value(CGMZ.ExtraStats.ItemsUsed);
		$gameVariables.setValue(CGMZ.ExtraStats.ItemsUsed, oldItemsUsed + 1);
		$cgmz.addExtraStats("itemsUsed", 1);
	}
};
//=============================================================================
// BattleManager
//-----------------------------------------------------------------------------
// Automatic tracking for gold looted from battle
// modified functions: gainGold
//=============================================================================
//-----------------------------------------------------------------------------
// Alias: Track gold looted
//-----------------------------------------------------------------------------
const alias_CGMZ_ExtraStats_BattleManager_gainGold = BattleManager.gainGold;
BattleManager.gainGold = function() {
    alias_CGMZ_ExtraStats_BattleManager_gainGold.call(this);
	if($cgmz.isTrackingExtraStats()) {
		const oldGoldLooted = $gameVariables.value(CGMZ.ExtraStats.GoldLooted);
		$gameVariables.setValue(CGMZ.ExtraStats.GoldLooted, oldGoldLooted + this._rewards.gold);
		$cgmz.addExtraStats("goldLooted", this._rewards.gold);
	}
};
//=============================================================================
// Game_Action
//-----------------------------------------------------------------------------
// Automatic tracking for damage taken/dealt
//=============================================================================
//-----------------------------------------------------------------------------
// Alias - Track damage taken/dealt
//-----------------------------------------------------------------------------
const alias_CGMZ_ExtraStats_GameAction_executeHpDamage = Game_Action.prototype.executeHpDamage;
Game_Action.prototype.executeHpDamage = function(target, value) {
	alias_CGMZ_ExtraStats_GameAction_executeHpDamage.call(this, target, value);
    if(target.isActor() && value > 0 && $cgmz.isTrackingExtraStats()) {
		const oldDamageTaken = $gameVariables.value(CGMZ.ExtraStats.DamageTaken);
		$gameVariables.setValue(CGMZ.ExtraStats.DamageTaken, oldDamageTaken + value);
		$cgmz.addExtraStats("damageTaken", value);
	}
	else if(target.isEnemy() && value > 0 && $cgmz.isTrackingExtraStats()) {
		const oldDamageDealt = $gameVariables.value(CGMZ.ExtraStats.DamageDealt);
		$gameVariables.setValue(CGMZ.ExtraStats.DamageDealt, oldDamageDealt + value);
		$cgmz.addExtraStats("damageDealt", value);
	}
};
//-----------------------------------------------------------------------------
// Alias - Track damage taken/dealt
//-----------------------------------------------------------------------------
const alias_CGMZ_ExtraStats_GameAction_apply = Game_Action.prototype.apply;
Game_Action.prototype.apply = function(target) {
    alias_CGMZ_ExtraStats_GameAction_apply.call(this, target);
	if($cgmz.isTrackingExtraStats()) {
		if(target.isActor() && this.subject().isEnemy()) {
			$cgmz.addExtraStatsActor('PAtimesAttacked', target.actorId(), 1);
		} else if(target.isEnemy() && this.subject().isActor()) {
			$cgmz.addExtraStatsActor('PAtimesAttackedWith', this.subject().actorId(), 1);
			if(this.isSkill() && !CGMZ.ExtraStats.IgnoredSkills.includes(this.item().id)) {
				$cgmz.addExtraStatsActor('PAtimesUsedSkills', this.subject().actorId(), 1);
			}
		} else if(this.subject().isActor() && this.isSkill() && !CGMZ.ExtraStats.IgnoredSkills.includes(this.item().id)) {
			$cgmz.addExtraStatsActor('PAtimesUsedSkills', this.subject().actorId(), 1);
		}
	}
};