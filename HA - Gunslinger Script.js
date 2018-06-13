/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.
	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	Gunslinger (Hawthorne)
	Effect:		This script adds a class called Gunslinger from the Hawthorne Arcana.
				Note that you will need the syntax for adding a subclass as well if you want the class to have any choices for subclasses
	Sheet:		v13.00.00 (2018-??-??) [identical to v12.999 syntax, except v12.999 uses 'borrow' for the burrow speed]
*/

//var iFileName = "HawthorneGunslinger.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
//RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

//add the source
SourceList["HA:G"] = {
	name : "Hawthorn Arcana: Gunslinger",
	abbreviation : "HA:G",
	group : "Hawthorne Guild",
	url : "https://drive.google.com/open?id=185CeL6_6EwnDb0Ng20STlTUNslPrSpSx",
	date : "2018/01/06"
};

ClassList["gunslinger"] = { //Object name; Note the use of only lower case! Also note the absence of the word "var" and the use of brackets []

	regExpSearch : /gunslinger/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "my" and "class" in it, disregarding capitalization). If this looks to complicated, just write : /myclass/i
	
	name : "Gunslinger [Hawthorne]", //required; the name to use for the class
	
	source : ["HA:G", 1], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]
	
	primaryAbility : "\n \u2022 Gunslinger: Dexterity;", //required; the text to display when citing the primary ability of the class
	
	prereqs : "\n \u2022 Gunslinger: Dexterity 13;", //required; the text to display when citing the prerequisite for the class when multiclassing
	
	die : 8, //required; the type of hit die the class has (i.e. 10 means d10)
	
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5], //required; the amount of ability score improvements (or feats) at each level. Note that there are 20 entries, one for each level. This example uses the Fighter's progression
	
	saves : ["Dex", "Int"], //required; the two save proficiencies.
	
	skills : ["\n\n" + toUni("Gunslinger") + ": Choose two from Acrobatics, Animal Handling, History, Insight, Intimidation, Investigation, Perception, Persuasion, or Sleight of Hand"], //required; the text to display for skill proficiencies. Note the \n\n at the start, they are important! The first entry is for when the class is the primary class, the second entry is for when the class is taken later as part of a multiclass

/* SYNTAX CHANGE v12.998 >> old syntax for 'tools' and 'languages' are no longer supported!! */
	toolProfs : { // optional; this is an object with arrays with the tool proficiencies gained. Each entry in an array can be its own array of 2 entries. The first entry is the name of the tool and the second entry is either 1) a number if the tool is yet to be chosen, or 2) the 3-letter ability score abbreviation if the tool is to be listed in the skill section and have a bonus calculated
		primary : [["Tinker's Tools, Musical instrument -or- Vehicle", 1], ], // optional; the tool proficiencies gained if the class is the primary class (i.e. taken at 1st level)
		secondary : [["Tinker's Tools -or- Vehicle", 1], ] // optional; the tool proficiencies gained if the class is not the primary class (i.e. taken at a later level)
	},
	
	armor : [ //required; the 4 entries are for: ["light", "medium", "heavy", "shields"]
		[true, true, false, true], //required; the armor proficiencies if this is the first or only class
		[true, true, false, true] //required; the armor proficiencies if this class is multiclassed with (so not taken at level 1, but later)
	],
	
	weapons : [ //required; the 3 entries are for: ["simple", "martial", "other"]
		[true, false, ["firearm", "heavy crossbow", "hand crossbow", "shortsword", "scimitar", "whip"]], //required; the weapon proficiencies if this is the first or only class
		[false, false, ["firearm"]] //required; the weapon proficiencies if this class is multiclassed with (so not taken at level 1, but later)
	],
	
	equipment : "Gunslinger starting equipment:\n \u2022 scale mail -or- leather armor;\n \u2022 A rifle and 30 rounds, a scattergun and 30 rounds, two light pistols and 30 rounds -or- a pistol and 30 rounds.;\n \u2022 A shortsword, two simple weapons, -or- a shield;\n \u2022 A dungeoneer's pack -or- a scholar's pack.", //required; the text to display when citing the starting equipment
	
	subclasses : ["Slinger's Creed", ["gunslinger-vaquero", "gunslinger-explorer", "gunslinger-buccaneer", "gunslinger-minister"]], //required; the names of the subclasses. The first entry is the overall name that is given to the subclasses, the second entry is a list of the subclass, using the exact names of the entry of the subclasses in the ClassSubList. //Note that if one of the entries in the array of subclasses doesn't exist in the ClassSubList, the sheet will throw an error as soon as you make a character with levels in this class
	//IMPORTANT: for any subclass you add using the AddSubClass() function, don't list them here! The AddSubClass() function makes its own entry in this array! If you have entries here that don't exist (because you didn't add any ClassSubList entry, or added it using the AddSubClass() function, then the sheet will throw strange errors)!
	
	attacks : [1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2], //required; the amount of attacks at each level. Note that there are 20 entries, one for each level.
	
	abilitySave : 2, //optional, but required for a spellcaster; the ability score to use for the Ability Saving Throws. Remove this line if your class has no Ability that requires Saving Throws. (Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6)

	
	features : { //required;  the class features. Each works the same way, so only a couple of example are given. You can add as many as you want
	
		"slinger's reflexes" : { //note the use of lower case characters
			name : "Slinger's Reflexes", //required; the name of the class feature
			source : ["HA:G", 2], //required; the source of the class feature
			minlevel : 1, //required; the level at which the feature is gained
			description : desc(["When I take the attack action on my turn I can use a bonus action to move 10 feet in any direction.",
                    "When I make a melee weapon attack using a firearm, I can choose to use my strength or dex modifier. If this hits I can use my bonus action to not provoke opportunity attacks until the end of my turn."
            ]),
            action : ["bonus action", ""]
		},
		
		"lucky item" : {
			name : "Lucky Item",
			source : ["HA:G", 2],
			minlevel : 1,
			description : desc(["I have a personal effect that grants uncanny luck in certain situations. Choose an item using the \"Choose Feature\" button above"]),
			additional : ["1 item", "1 item", "1 item", "1 item", "1 item", "1 item", "1 item", "1 item", "1 item", "2 items", "2 items", "2 items", "2 items", "2 items", "2 items", "2 items", "2 items", "2 items", "2 items", "2 items"],
            extraname : "Lucky Item",
            extrachoices : ["Adept", "Deft (prereq: level 10 Explorer)", "Eloquence", "Erudite", "Seeker (prereq: level 10 Vaquero)", "Salty (prereq: level 10 Buccaneer)", "Devout (prereq: level 10 Minister)"],		
			"adept" : {
				name : "Adept",
				description : desc(["I gain proficiency in two weapons of my choosing."]),
            },
		
			"deft (prereq: level 10 explorer)" : {
				name : "Deft",
				description : desc(["I know the Identify and Locate Object spells, and can cast them as rituals."]),
                minlevel : 10,
				spellcastingBonus : {
					name : "Deft",
					spells : ["identify", "locate object"],
					selection : ["identify", "locate object"],
					firstCol : "(R)",
					times : 2
				},
				prereqeval : "classes.known['gunslinger'].level >= 10 && (/explorer/i).test(classes.known.gunslinger.subclass)"
            },
			
			"eloquence" : {
				name : "Eloquence",
				description : desc(["I learn two languages of my choosing."]),
				languageProfs : [2]
			},	
			
			"erudite" : {
				name : "Erudite",
				description : desc(["I gain proficiency in one skill or tool of my choice.",
                        "Or I can double my proficiency bonus of a skill or tool I already know."
                ]),
                skills : [[""], 1],
				skillstxt : "\n\n" + toUni("Erudite") + ": Choose one skill or tool of your choice"
			},	
			
			"seeker (prereq: level 10 vaquero)" : {
				name : "Seeker",
				description : desc(["I know the Hunter's Mark spell and can cast it at 1st level once per long rest without expending a spell slot."]),
                minlevel : 10,
				spellcastingBonus : {
					name : "Seeker",
					spells : ["hunter's mark"],
					selection : ["hunter's mark"],
					times : 1
				},
                usages : 1,
                recovery : "long rest",
                prereqeval : "classes.known['gunslinger'].level >= 10 && (/vaquero/i).test(classes.known.gunslinger.subclass)"
			},	
			
			"salty (prereq: level 10 buccaneer)" : {
				name : "Salty",
				description : desc(["My weapon attacks do not get disadvantage from being used underwater."]),
                minlevel : 10,
                prereqeval : "classes.known['gunslinger'].level >= 10 && (/buccaneer/i).test(classes.known.gunslinger.subclass)"
			},	
			
			"devout (prereq: level 10 minister)" : {
				name : "Devout",
				description : desc(["I know the Protection from Evil and Good spell and can cast it once per long rest without expending a spell slot."]),
                minlevel : 10,
				spellcastingBonus : {
					name : "Devout",
					spells : ["protection from evil and good"],
					selection : ["protection from evil and good"],
					firstCol : "(R)",
					times : 1
				},
                prereqeval : "classes.known['gunslinger'].level >= 10 && (/minister/i).test(classes.known.gunslinger.subclass)"
			}
		},			
			
		"fighting style (gunslinger)" : { //note the use of lower case characters
			name : "Fighting Style (Gunslinger)", //required; the name of the class feature
			source : ["HA:G", 2], //required; the source of the class feature
			minlevel : 2, //required; the level at which the feature is gained
			description : desc(["Choose a Fighting Style using the \"Choose Feature\" button above"]),
			extraname : "Fighting Style (Gunslinger)",
			extrachoices : ["Archery", "Breacher", "Deadeye", "Mariner", "Phalanx", "Sniper", "Trigger finger"], //optional; choices the feature offers, if any.
			"archery" : { //required if "choices" is defined; has to be exactly the same as how it is written in the "choices" entry. Note the use of lower case!
				name : "Archery", //required;
				description : desc(["+2 weapon to attack rolls with ranged weapons."]), //requi0red;
				calcChanges : { //optional; adds stuff to the calculation of attacks and/or HP
					
					atkCalc : ["if (isRangedWeapon) {output.extraHit += 2; }; ", "When wielding a ranged weapon I gain +2 to attack rolls."],
					atkAdd : ["if (isRangedWeapon) {fields.Description += ', +2 Attack (Archery)';};", "When wielding a ranged weapon I gain +2 to attack rolls."]
				}
			},
			
			"breacher" : {
				name : "Breacher", //required;
				description : desc(["If using a ranged weapon with the scatter property and rolling a 1 or 2 on the damage die, I can reroll the damage die and must take the new roll."]), //required;
                calcChanges : {
                    atkAdd : ["if ((/scatter/i).test(fields.Description)) {fields.Description += ', Reroll 1s or 2s (Breacher)';};"]
                }
			},

			"deadeye" : {
				name : "Deadeye",
				description : desc(["When wielding a one handed ranged weapon and no other weapons, I get a +2 to my damage roll."]),
				calcChanges : {
                    atkCalc : ["if (isRangedWeapon && !((/Two-Handed/i).test(fields.Description))) {output.bDmg += 2; }; ", "When wielding only a one-handed ranged weapon, I get +2 to damage."],
                    atkAdd : ["if (isRangedWeapon && !((/Two-Handed/i).test(fields.Description))) {fields.Description += ', +2 Damage (Deadeye)';};", "When wielding only a one-handed ranged weapon, I get +2 to damage."]
				}
			},
			
			"mariner" : {
				name : "Mariner",
				description : desc(["As long as I am not wearing heavy armor or using a shield, I have a swim and climb speed equal to my normal speed, and gain +1 bonus to AC."]),
				speed : {
					climb : { spd : "walk", enc : "walk"},
					swim : { spd : "walk", enc : "walk"}
				},
				eval : "AddACMisc(1, 'Mariner Fighting Style', 'When not wearing heavy armor or using a shield, the class feature Mariner Fighting Style gives a +1 bonus to AC', \"ACshield || tDoc.getField('Heavy Armor').isBoxChecked(0)\")",
				removeeval : "AddACMisc(0, 'Mariner Fighting Style', 'When not wearing heavy armor or using a shield, the class feature Mariner Fighting Style gives a +1 bonus to AC')"
            },
				
			"phalanx" : {
				name : "Phalanx",
				description : desc(["I can use your action to assume a stance that lets me wield a two-handed firearm or crossbow and a shield, so long as I do not move more than 10 feet during your turn. Cannot be used while mounted."]),
				action : ["action", ""]
            },
			
			"sniper" : {
				name : "Sniper",
				description : desc(["I gain a +2 bonus to damage if my target is more than 30 feet from me and my weapon does not have the scatter property."]),
				calcChanges : {
				    atkCalc : ["if (isRangedWeapon && !((/scatter/i).test(fields.Description))) {output.bDmg += 2; }; ", "When wielding a ranged weapon without the scatter property, I get +2 to damage against enemies atleast 30ft from me"],
				    atkAdd : ["if (isRangedWeapon && !((/scatter/i).test(fields.Description))) {fields.Description += ', +2 Damage (>= 30ft) (Sniper)';};", "When wielding a ranged weapon without the scatter property, I get +2 to damage against enemies atleast 30ft from me"]
				}
			},
				
			"trigger finger" : {
				name : "Trigger Finger",
				description : desc(["When I attack with a one-handed weapon, I can take a bonus action to also attack with a light, one-handed ranged weapon I am holding. I do not add my ability score to this attack unless it is negative."]),
				action : ["bonus action", ""]
            }
        },
		
		"inventive brain" : {
			name : "Inventive Brain",
			source : ["HA:G", 3],
			minlevel : 2,
			description : desc(["I have advantage on ability checks to recall information about repairing firearms and advanced technology.",
                        "I add half my proficiency bonus to any Dexterity, Intelligence, or Charisma check that doesn't already use my proficiency bonus."
            ])
		},

        "upgrade" : {
			name : "Upgrade",
			source : ["HA:G", 3],
			minlevel : 3,
			description : desc(["I have crafted a second upgrade for my firearm, selected from \"Choose Feature\" . This upgrade only applies benefits when attached to a firearm.",
                        "I can transfer this upgrade to another firearm by spending 8 hours working on it and paying 1/10th the firearms cost in gp."
            ]),
            additional : ["", "", "1 upgrade", "1 upgrade", "1 upgrade", "1 upgrade", "1 upgrade", "1 upgrade", "1 upgrade", "2 upgrades", "2 upgrades", "2 upgrades", "2 upgrades", "2 upgrades", "2 upgrades", "2 upgrades", "2 upgrades", "2 upgrades", "2 upgrades", "2 upgrades"],
            extraname : "Upgrade",
			extrachoices : ["Magnified Sight", "Close Quarters Sight", "Foregrip", "Bipod", "Reinforced Stock", "Suppressor", "Expanded Chamber", "Light Frame", "Wide Choke", "Heavy Frame", "Pistol Grip", "Heavy Barrel"],
			"magnified sight" : {
			    name : "Magnified Sight",
			    minlevel : 3,
			    description : desc(["My firearm's normal range is increased by 10ft, and it's long range is increased by 40ft"])
			},
			"close quarters sight" : {
			    name : "Close Quarters Sight",
			    minlevel : 3,
			    description : desc(["+1 to damage rolls against creatures within 30 feet."])
			},
			"foregrip" : {
			    name : "Foregrip",
			    minlevel : 3,
			    description : desc(["Cannot be disarmed so long as I have a free hand. Can only be applied to one handed firearms."])
			},
			"bipod" : {
			    name : "Bipod",
			    minlevel : 3,
			    description : desc(["I do not have disadvantage on attack rolls when prone"])
			},
			"reinforced stock" : {
			    name : "Reinforced Stock",
			    minlevel : 3,
			    description : desc(["I am proficient with improved attacks made with this firearm."])
			},
			"suppressor" : {
			    name : "Suppressor",
			    minlevel : 3,
			    description : desc(["This firearms attacks are only audible out to 30 feet."])
			},
			"pistol grip" : {
			    name : "Pistol Grip",
			    minlevel : 10,
			    description : desc(["+1 to attack rolls against creatures within 30ft. Can only be applied to pistols."]),
			    prereqeval : "classes.known['gunslinger'].level >= 10"
			},
			"heavy barrel" : {
			    name : "Heavy Barrel",
			    minlevel : 10,
			    description : desc(["Increases the range of the gun by 20ft, and the maximum range by 50 feet."]),
			    prereqeval : "classes.known['gunslinger'].level >= 10"
			},
			"wide choke" : {
			    name : "Wide Choke",
			    minlevel : 10,
			    description : desc(["The range of your firearm's scatter damage roll is now 10 feet around the original target. Can only be applied to shotguns."]),
			    prereqeval : "classes.known['gunslinger'].level >= 10"
			},
			"expanded chamber" : {
			    name : "Expanded Chamber",
			    minlevel : 10,
			    description : desc(["The firearms reload score doubles. Cannot be applied to Heavy Rifles."]),
			    prereqeval : "classes.known['gunslinger'].level >= 10"
			},
			"light frame" : {
			    name : "Light Frame",
			    minlevel : 10,
			    description : desc(["The heavy property is removed, the weight is reduced by 2lbs."]),
			    prereqeval : "classes.known['gunslinger'].level >= 10"
			},
			"heavy frame" : {
			    name : "Heavy Frame",
			    minlevel : 10,
			    description : desc(["The weight of the firearm is increased by 5lbs. The firearm now deals 1d6 damage when used as an improved weapon."]),
			    prereqeval : "classes.known['gunslinger'].level >= 10"
			}
		},

        "subclassfeature3" : {
            name : "Slinger's Creed",
            description : desc(["Choose a Creed to Follow"]),
            minlevel : 3
        },

	    "moment of focus" : {
	        name : "Moment of Focus",
	        source : ["HA:G", 3],
	        minlevel : 6,
	        description : desc(["I can use the dodge action as a bonus action a number of times equal to my dexterity modifier.",
                        "I regain the uses of this when I complete a short or long rest."
            ]),
            usages : "Dexterity mod per ",
            usagescalc : "event.value = What('Dex Mod');",
	       recovery : "short rest",
	       action : ["bonus action", ""]
	    },
	    
	    "evasion" : {
	        name : "Evasion",
	        source : ["HA:G", 3],
	        minlevel : 7,
	        description : desc(["When I make a Dexterity saving throw to take half damage, I take no damage on a successful save and only half damage on a failed save."])
	    },

	    "shootout sense" : {
	        name : "Shootout Sense",
	        source : ["HA:G", 3],
	        minlevel : 11,
	        description : desc(["I gain advantage on initiative rolls and cannot be surprised while concious."])
		},
	    

	    "overwatch" : {
	        name : "Overwatch",
	        source : ["HA:G", 3],
	        minlevel : 14,
	        description : desc(["If a creature within my firearms range moves, makes a weapon attack, casts a spell, or uses an ability that has a harmful area of effect, I can use my reaction to make an attack against them.",
                        "If triggered by movement, the creature must make a Dexterity saving throw. If it fails its speed is reduced by half until the end of my next turn. If it succeeds it is reduced by 10.",
                        "If triggered by an attack, the creature must make a Constituion saving throw. If it fails it has disadvantage on all attack rolls until the start of my next turn. If it succeeds it only has disadvantage on the triggering attack.",
                        "If triggered by using a spell or ability, the creature must make a Constitution saving throw. If it fails the target(s) have advantage on the saving throw to resist its effects and gain resistance to its damage. If the spell requires and attack roll, they get disadvantage."
            ]),
	       action : ["action", ""]
	    },
	    
	    "final stand" : {
	        name : "Final Stand",
	        source : ["HA:G", 3],
	        minlevel : 15,
	        description : desc(["If I am dropped to 0hp but not killed outright, I can make an attack against that enemy. This attack is made with disadvantage. If the attack hits I gain hp equal to 1d8 + gunslinger level."]),
	        usages : 1,
	        recovery : "short rest",
	        action : ["reaction", ""]
	   },

        "superhuman reflexes" : {
	       name : "Superhuman Reflexes",
	       source : ["HA:G", 4],
	       minlevel : 18,
	       description : desc(["When hit my a ranged attack, I can use my reaction to halve the damage from that attack.",
	                  "I can use a bonus action to clear the chamber of a firearm that misfired."
            ]),
            action : ["reaction", ""]
	   },
	   
	   "gunslinging supreme" : {
	       name : "Gunslinging Supreme",
	       source : ["HA:G", 4],
	       minlevel : 20,
	       description : desc(["I add my proficiency bonus to damage rolls with firearms, except when dealing damage that does not normally apply your ability score modifier to its damage."]),
	       calcChanges : {
               atkCalc : ["if ((/Misfire/i).test(fields.Description)) {output.bDmg += 6; };", ""],
               atkAdd : ["if ((/Misfire/i).test(fields.Description)) {fields.Description += ', Proficiency to damage'; };", ""]
           }
	   }
	}
};

//Vaquero Creed
ClassSubList["gunslinger-vaquero"] = {
    regExpSearch : /^(?=.*vaquero)/i,
    subname : "Vaquero",
    source : ["HA:G", 4],
    features : {
        "subclassfeature3" : {
            name : "Back in the Saddle",
            source : ["HA:G", 4],
            minlevel : 3,
            description : desc(["I had advantage on saving throws made to avoid falling off my mount.",
                                    "If I do fall and descend no more than 10ft, I land on my feet and am not incapacitated.",
                                    "Additionally, mounting and dismountaing only costs 5ft of movement."
            ])
        },
        "subclassfeature3.1" : {
            name : "Tricks",
            source : ["HA:G", 4],
            minlevel : 3,
            description : desc(["I know a number of tricks I can use in combat. I gain trick points equal to 1 + my Wisdom modifier to be used for these special shots.",
                                    "These tricks can be found on the \"Notes\" page."
            ]),
            usages : "Wis mod + 1 per ",
            usagescalc : "event.value = Math.max(1, tDoc.getField('Wis Mod').value);",
            recovery : "short rest",
            eval : "AddString(\"Extra.Notes\", \"Tricks:\\n\\u25C6 Disarming shot: When I hit with a ranged weapon attack, I can expend a Trick Point to deal additional damage equal to my Dexterity modifier and force the target to make a Strength saving throw. On a failed save, they're forced to drop one held item of my choosing, which lands at its feet.\\n\\u25C6 Dodge Roll: When a creature I can see damages me with an attack, I can expend a Trick Point to use my reaction to roll away and lessen its impact. I reduce the damage by 2 + my gunslinger level, and can move up to 10 feet in any direction without provoking opportunity attacks.\\n\\u25C6 Flushing Shot: When I hit a creature with a ranged weapon attack with a firearm, I can expend a Trick Point to attempt to force the target to move and expose itself. It must succeed a Wisdom saving throw or be forced to move up to half its speed in a direction of my choosing. The target cannot be moved somewhere directly harmful to it. If the target cannot move or has nowhere to move, they automatically succeed the saving throw.\\n\\u26C6 Intercept: When an enemy I can see makes a ranged weapon attack within my weapon's range, I can expend a Trick Point to use my reaction to attempt to shoot it out of the air. Make a ranged weapon attack roll contested by the missile's AC, which is equal to the attack roll made by the creature. On a hit, the attack automatically misses as my bullet strikes it and knocks it off course. I can use this Trick before or after the attack roll is made, but before it is determined to be a hit or a miss.\\n\\u26C6 Piercing Shot: When I hit a creature with a ranged weapon attack, I can expend a Trick Point to have the shot continue on through the target after hitting it in order to attempt to damage an additional creature. If the creature within range of my weapon and in the same line as my attack would have been hit by my attack roll, they take damage equal to my Dexterity modifier. This damage is the same type as the type dealt by the original attack. This Trick cannot be used with a firearm that has the scatter property.\\n\\u25C6 Trip Shot: When I a hit a creature with a ranged weapon attack, I can expend a Trick Point to deal additional damage equal to my Dexterity modifier. The creature must then succeed a Strength saving throw or be knocked prone.\\n\\u25C6 Slinger's Luck: Once per turn, if my firearm would misfire, I can expend a Trick Point to have the firearm not misfire instead.\\n\\u25C6 Suppressive Fire: I can expend a Trick Point as an action to force any creatures of my choosing within 10 feet of a point within my weapon's range to make a Dexterity saving throw. On a failed save, they take my weapon's damage + my Dexterity modifier, and half as much damage on a success. I must have at least 4 pieces of ammunition to perform this action, which are expended when it is taken.\\n\\u25C6 Synchronized Shot: The crack of my gunshot sets up a simultaneous attack for my allies. When I hit a creature with a firearm attack, I can expend a Trick Point to make the next weapon attack made against that creature deal extra damage equal to d8 + my Dexterity modifier. I can only use this Trick on one creature per turn.\\n\\u25C6 Warning Shot: When I miss a creature with a ranged weapon attack, I can expend a Trick Point to attempt to frighten the target as the shot whizzes past them. The target must succeed a Wisdom saving throw or be frightened of me until the end of my next turn.\", true);",
            removeeval : "RemoveString(\"Extra.Notes\", \"Tricks:\\n\\u25C6 Disarming shot: When I hit with a ranged weapon attack, I can expend a Trick Point to deal additional damage equal to my Dexterity modifier and force the target to make a Strength saving throw. On a failed save, they're forced to drop one held item of my choosing, which lands at its feet.\\n\\u25C6 Dodge Roll: When a creature I can see damages me with an attack, I can expend a Trick Point to use my reaction to roll away and lessen its impact. I reduce the damage by 2 + my gunslinger level, and can move up to 10 feet in any direction without provoking opportunity attacks.\\n\\u25C6 Flushing Shot: When I hit a creature with a ranged weapon attack with a firearm, I can expend a Trick Point to attempt to force the target to move and expose itself. It must succeed a Wisdom saving throw or be forced to move up to half its speed in a direction of my choosing. The target cannot be moved somewhere directly harmful to it. If the target cannot move or has nowhere to move, they automatically succeed the saving throw.\\n\\u26C6 Intercept: When an enemy I can see makes a ranged weapon attack within my weapon's range, I can expend a Trick Point to use my reaction to attempt to shoot it out of the air. Make a ranged weapon attack roll contested by the missile's AC, which is equal to the attack roll made by the creature. On a hit, the attack automatically misses as my bullet strikes it and knocks it off course. I can use this Trick before or after the attack roll is made, but before it is determined to be a hit or a miss.\\n\\u26C6 Piercing Shot: When I hit a creature with a ranged weapon attack, I can expend a Trick Point to have the shot continue on through the target after hitting it in order to attempt to damage an additional creature. If the creature within range of my weapon and in the same line as my attack would have been hit by my attack roll, they take damage equal to my Dexterity modifier. This damage is the same type as the type dealt by the original attack. This Trick cannot be used with a firearm that has the scatter property.\\n\\u25C6 Trip Shot: When I a hit a creature with a ranged weapon attack, I can expend a Trick Point to deal additional damage equal to my Dexterity modifier. The creature must then succeed a Strength saving throw or be knocked prone.\\n\\u25C6 Slinger's Luck: Once per turn, if my firearm would misfire, I can expend a Trick Point to have the firearm not misfire instead.\\n\\u25C6 Suppressive Fire: I can expend a Trick Point as an action to force any creatures of my choosing within 10 feet of a point within my weapon's range to make a Dexterity saving throw. On a failed save, they take my weapon's damage + my Dexterity modifier, and half as much damage on a success. I must have at least 4 pieces of ammunition to perform this action, which are expended when it is taken.\\n\\u25C6 Synchronized Shot: The crack of my gunshot sets up a simultaneous attack for my allies. When I hit a creature with a firearm attack, I can expend a Trick Point to make the next weapon attack made against that creature deal extra damage equal to d8 + my Dexterity modifier. I can only use this Trick on one creature per turn.\\n\\u25C6 Warning Shot: When I miss a creature with a ranged weapon attack, I can expend a Trick Point to attempt to frighten the target as the shot whizzes past them. The target must succeed a Wisdom saving throw or be frightened of me until the end of my next turn.\", true);"
        },
        "subclassfeature9" : {
            name : "Swift Rider",
            source : ["HA:G", 5],
            minlevel : 9,
            description : desc(["When I use Slinger's Reflexes move as a bonus action, I can move up to 15 feet in any direction.",
                                    "If I move more than 20ft in a straight line on my turn, I get advantage on my next attack, as well as advantage on Dexterity saving throws, until the start of my next turn."
            ])
        },
        "subclassfeature13" : {
            name : "Palaver",
            source : ["HA:G", 5],
            minlevel : 13,
            description : desc(["I gain advantage on Insight, Intimidation, and Persuasion checks to defuse a fight.",
                                    "I gain proficiency in Wisdom saving throws"
            ]),
            saves : ["Wis"]
        },
        "subclassfeature17" : {
            name : "Legendary Overwatch",
            source : ["HA:G", 5],
            minlevel : 17,
            description : desc(["When I succeed in an Overwatch attack I also apply one of the following effects;",
                                    "If the creature is moving, I reduce it's movement speed to 0 until the end of my next turn.",
                                    "If the creature is attacking, it automatically misses that attack and cannot make any more until the end of my next turn",
                                    "If the creature is casting a spell or otherwise forcing a saving throw, the ability automatically fails, dealing no damage, and the spell slot is wasted."
            ])
        }
    }
};

//Explorer Creed
ClassSubList["gunslinger-explorer"] = {
    regExpSearch : /^(?=.*explorer)/i,
    subname : "Explorer",
    source : ["HA:G", 5],
    features : {
        "subclassfeature3" : {
            name : "Catacomb Crawler",
            source : ["HA:G", 5],
            minlevel : 3,
            description : desc(["I gain darkvision out to 60ft. If I already have darkvision, the range is increased by 30ft.",
                                    "I don't take any penalties from squeezing into a space smaller than me.",
                                    "I can end my turn squeezed into a space with a creature at least one size larger than me.",
                                    "I gain proficiency in Thieves Tools"
            ]),
            vision : [["Darkvision", 60]],
            toolProfs : [["Thieves' tools", "Dex"]]
        },
        "subclassfeature3.1" : {
            name : "Ploys",
            source : ["HA:G", 6],
            minlevel : 3,
            description : desc(["I gain a number of Ploy Points I can spend on various Ploys.",
                                    "These ploys can be found on the \"Notes\" page."
            ]),
            usages : "Int mod + 1 per ",
            usagescalc : "event.value = Math.max(1, tDoc.getField('Int Mod').value);",
            recovery : "short rest",
            eval : "AddString(\"Extra.Notes\", \"Ploys:\\n\\u25C6 Agile Handler: When I attempt to climb, grapple or shove a creature, I can expend a ploy point to use a Dexterity (Acrobatics) check, instead of a Strength (Athletics) check.\\n\\u25C6 Cave Runner: I can expend a Ploy Point to take the Dash or Disengage action as a bonus action.\\n\\u25C6 Clever Push/Pull: As an action, I can expend a ploy point to either grab a tiny object with a whip and pull it 10 feet towards me, or use a ranged weapon to shoot at a tiny object and knock it 10 feet away from me, provided I have the ammunition to do so.\\n\\u25C6 Deft Loader: I can expend a ploy point to reload a firearm I am holding as a bonus action.\\n\\u25C6 Gut Instinct: I can expend a ploy point as an action to focus my instincts and get a read into the possible results of a specific course of action that I plan to take in the next 30 minutes, as per the augury spell.\\n\\u25C6 Leap of Faith: When I make a long jump or a high jump, I can expend a ploy point to add a number of feet to the jump distance equal to my Dexterity score.\\n\\u25C6 Seen That Before: I can expend a ploy point as a bonus action to make a Wisdom (Perception), Intelligence (Arcana), Intelligence (History), Intelligence (Investigation), or Intelligence (Nature) check.\\n\\u25C6 Slapdash: When I use a skill, make a saving throw, or make an attack roll with a weapon I am not proficient with, I can expend a ploy point to to add my proficiency bonus to the roll. I can do this before or after the roll is made, but before it is determined to be a success or failure.\", true);",
            removeeval : "RemoveString(\"Extra.Notes\", \"Ploys:\\n\\u25C6 Agile Handler: When I attempt to climb, grapple or shove a creature, I can expend a ploy point to use a Dexterity (Acrobatics) check, instead of a Strength (Athletics) check.\\n\\u25C6 Cave Runner: I can expend a Ploy Point to take the Dash or Disengage action as a bonus action.\\n\\u25C6 Clever Push/Pull: As an action, I can expend a ploy point to either grab a tiny object with a whip and pull it 10 feet towards me, or use a ranged weapon to shoot at a tiny object and knock it 10 feet away from me, provided I have the ammunition to do so.\\n\\u25C6 Deft Loader: I can expend a ploy point to reload a firearm I am holding as a bonus action.\\n\\u25C6 Gut Instinct: I can expend a ploy point as an action to focus my instincts and get a read into the possible results of a specific course of action that I plan to take in the next 30 minutes, as per the augury spell.\\n\\u25C6 Leap of Faith: When I make a long jump or a high jump, I can expend a ploy point to add a number of feet to the jump distance equal to my Dexterity score.\\n\\u25C6 Seen That Before: I can expend a ploy point as a bonus action to make a Wisdom (Perception), Intelligence (Arcana), Intelligence (History), Intelligence (Investigation), or Intelligence (Nature) check.\\n\\u25C6 Slapdash: When I use a skill, make a saving throw, or make an attack roll with a weapon I am not proficient with, I can expend a ploy point to to add my proficiency bonus to the roll. I can do this before or after the roll is made, but before it is determined to be a success or failure.\", true);"
        },
        "subclassfeature9" : {
            name : "Improvised Magic Expert",
            source : ["HA:G", 6],
            minlevel : 9,
            description : desc(["I can expend a ploy point to use any spell scroll, regardless of restrictions, by making an Arcana check.",
                                    "The DC is equal to 10 + the spell's level. If failed, the scroll is still consumed.",
                                    "I can spend 1 ploy point to attune to any magic item for 1 hour."
            ]),
        },
        "subclassfeature13" : {
            name : "Dungeon Dasher",
            source : ["HA:G", 6],
            minlevel : 13,
            description : desc(["I am resistant to damage dealt by traps and have advantage on checks to disarm them.",
                                    "I can expend a ploy point as a reaction to reroll a saving throw I make, or an attack roll made against me."
            ]),
            action : ["reaction", " (Ploy point)"]
        },
        "subclassfeature17" : {
            name : "Master of Ploys",
            source : ["HA:G", 6],
            minlevel : 17,
            description : desc(["When I roll initative and have no ploy points remaining, I regain 1 ploy point."])
        }
    }
};

//Buccaneer Creed
ClassSubList["gunslinger-buccaneer"] = {
    regExpSearch : /^(?=.*buccaneer)/i,
    subname : "Buccaneer",
    source : ["HA:G", 6],
    features : {
        "subclassfeature3" : {
            name : "Sea Salt",
            source : ["HA:G", 6],
            minlevel : 3,
            description : desc(["I gain proficiency in Vehicles (Water), Navigator's Tools, and either Deception or Performance checks."]),
            toolProfs : [["Vehicles (Water)", "Dex"], ["Navigator's Tools", "Dex"]],
            skills : [["Deception -or- Performance"], 1],
            skillstxt : "\n\n" + toUni("Buccaneer") + ": Choose either Deception or Performance."
        },
        "subclassfeature3.1" : {
            name : "Corsair's Flourish",
            source : ["HA:G", 6],
            minlevel : 3,
            description : desc(["Being within 5 feet of a hostile creature does not impose disadvantage on ranged attack rolls.",
                                    "When I make a ranged attack roll with a firearm, I may use my bonus action to make a melee weapon attack with a one handed weapon. If this hits the target has disadvantage against me until my next turn."
            ]),
            action : ["Bonus Action", ""]
        },
        "subclassfeature9" : {
            name : "Bravado",
            source : ["HA:G", 6],
            minlevel : 9,
            description : desc(["I can add half my Charisma modifier to any attack roll or saving throw I make, before the results are revealed.",
                    "I can do this a number of times equal to my Charisma modifier, and regain uses after a long rest."
            ]),
            usages : "Charisma mod per ",
            usagescalc : "event.value = Math.max(1, tDoc.getField('Cha Mod').value);",
            recovery : "long rest"
        },
        "subclassfeature13" : {
            name : "Tame The Seas",
            source : ["HA:G", 6],
            minlevel : 13,
            description : desc(["I gain proficiency in Strength saving throws, and have advantage on ability checks and saving throws to resist being knocked prone or forced to move.",
                    "Climbing no longer costs me extra movement."
            ]),
            saves : ["Str"]
        },
        "subclassfeature17" : {
            name : "Never Tell Me The Odds",
            source : ["HA:G", 6],
            minlevel : 17,
            description : desc(["At any time during another creatures turn, I can use my reaction to immediately take an extra turn, interrupting the current turn.",
                    "I can do this once per long rest."
            ]),
            action : ["reaction", ""],
            usages : 1,
            recovery : "long rest"
        }
    }
};

//Minister Creed
ClassSubList["gunslinger-minister"] = {
    regExpSearch : /^(?=.*minister)/i,
    subname : "Minister",
    source : ["HA:G", 6],
    features : {
        "subclassfeature3" : {
            name : "Hunter of Darkness",
            source : ["HA:G", 6],
            minlevel : 3,
            description : desc(["I am proficient in Religion skills checks.",
                                    "I learn Abyssal, Celestial, and Infernal.",
                                    "I have advantage on saving throws to resist being charmed."
            ]),
            skills : "Religion",
            skillstxt : "\n\n" + toUni("Minister") + ": Religion",
            language : [3, "Abyssal, Celestial, Infernal"]
        },
        "subclassfeature3.1" : {
            name : "Blessed Litany",
            source : ["HA:G", 6],
            minlevel : 3,
            description : desc(["You begin to follow a path of holy zeal that suffuses you with divine power. Choose from one of the three Litany options"]),
            choices : ["Litany of Resolve", "Litany of Fervor", "Litany of Refuge"],
            "litany of resolve" : {
            name : "Litany of Resolve",
            description : desc(["You deign to stand stalwart in the face of impossible odds. When a creature you can see attacks you or a creature friendly to you before the end of your next turn,",
                    "you become empowered by righteous vengeance. When you next hit that creature with a weapon attack, it deals an extra 1d8 radiant damage.",
                    "You can only apply this extra damage once per turn."
            ])
            },
            "litany of fervor" : {
            name : "Litany of Fervor",
            description : desc(["The worst evil will fall to you, no matter the cost. When you hit a creature with a firearm attack, you mark it with a sign of your holy zeal for 1 minute.",
                    "The next time the creature makes an attack roll before this effect ends, it rolls a 1d4 and subtracts the number rolled from the result.",
                    "This amount increases to 1d6 at 9th level. You can only apply this effect once per round."
            ])
            },
            "litany of refuge" : {
            name : "Litany of Refuge",
            description : desc(["You swear to become a guardian for all those who fight beside you.",
                    "Once on your turn, when you hit a creature with a weapon attack, choose a creature within 60 feet of you that can see or hear you.",
                    "That creature gains 5 temporary hit points."
            ])
            }
        },
        "subclassfeature9" : {
            name : "Hymn of Empowerment",
            source : ["HA:G", 7],
            minlevel : 9,
            description : desc(["At 9th level, your devotion to your cause has given you increased fortitude against the evils that assault you. As an action, you can begin a hymn, which lasts for 1 minute.",
                    "You can dismiss the hymn at any time you choose (no action required), no action required. You can use this feature twice, regaining expended uses when you complete a short or long rest.",
                    "Choose one of the hymn effects."
            ]),
            choices : ["Hymn of Resolve", "Hymn of Fervor", "Hymn of Refuge"],
            "hymn of resolve" : {
            name : "Hymn of Resolve",
            description : desc(["While the hymn is active, select a damage type. You gain resistance to that damage type.",
                    "You can use your reaction when a creature friendly to you that you can see takes damage to give them resistance to that damage type until the beginning of your next turn.",
                    "You can use an action to change the damage type affected by this hymn."
            ])
            },
            "hymn of fervor" : {
            name : "Hymn of Fervor",
            description : desc(["While the hymn is active, you gain advantage on saving throws to resist either being blinded, charmed, frightened, paralyzed, poisoned, or being knocked prone.",
                    "You can use an action to change condition you have advantage on saving throws to resist."
            ])
            },
            "hymn of refuge" : {
            name : "Hymn of Refuge",
            description : desc(["Your presence shelters creatures under your protection. As an action you begin a hymn, concentrating on it as if it were a spell.",
                    "Select an ability score. All friendly creatures within 20 ft. of you have advantage on saving throws with the chosen ability score.",
                    "You can use an action to change the ability score affected by this hymn."
            ]),
            usages : 2,
            recovery : "short rest"
            }
        },
        "subclassfeature13" : {
            name : "Sense the True Nature",
            source : ["HA:G", 7],
            minlevel : 13,
            description : desc(["Starting at 13th level, you have honed your senses to detect the horrors that lie within the howling dark. You learn the detect evil and good spell, and can cast it at will without expending a spell slot."]),
            spellcastingBonus : {
					name : "Minister",
					spells : ["detect evil and good"],
					selection : ["detect evil and good"],
                    firstCol : "(R)",
					times : 1
				}
        },
        "subclassfeature17" : {
            name : "Ultimate Devotion",
            source : ["HA:G", 7],
            minlevel : 17,
            description : desc(["By the time you reach 17th level, you are so filled with divine power that you gain powers that make you nigh unstoppable in your fight against corruption and eternal darkness."]),
            choices : ["Devotion of Resolve", "Devotion of Fervor", "Devotion of Refuge"],
            "devotion of resolve" : {
            name : "Devotion of Resolve",
            description : desc(["When faced with impending doom at the gates of hell, not even death can stop you.",
                    "When you use Final Stand, you instead regain hit points equal to 10 + your gunslinger level before you make your attack.",
                    "This attack is not made with disadvantage, and deals additional radiant damage equal to your gunslinger level on a hit.",
                    "Once you use this feature, you cannot use it again until you complete a long rest.",
            ])
            },
            "devotion of fervor" : {
            name : "Devotion of Fervor",
            description : desc(["Evil must be stopped at all costs, and it will be you that will be first to act. When you roll initiative, you can immediately take a turn before combat begins.",
                    "During this turn, you can take Overwatch as a bonus action. Once you use this feature, you cannot use it again until you complete a long rest."
            ])
            },
            "devotion of refuge" : {
            name : "Devotion of Refuge",
            description : desc(["You made a promise to protect others, and you are ready to sacrifice it all to keep that promise.",
                    "When an a creature that is friendly to you is reduced to 0 hit points, you can use your reaction to take the damage that reduced them to 0 hit points.",
                    "This damage cannot be reduced or avoided in any way, and any additional effects of the damage transfer over to you, such as being knocked prone or poisoned.",
                    "Once you use this feature, you cannot use it again until you complete a long rest."
            ])
            },
            usages : 1,
            recovery : "long rest"
        }
    }
};

//Firearms
WeaponsList["light pistol"] = {
    regExpSearch : /^light(?=.*pistol).*$/i,
    name : "Light Pistol",
    source : ["HA:G", 9],
    list : "firearm",
    ability : 2,
    type : "Firearm",
    damage : [1,6,"Piercing"],
    range : "30/120",
    description : "Ammunition, Reload 8, Light, Misfire",
    abilitytodamage : true,
    weight : 2,
    monkweapon : false,
    ammo : "bullet",
    dc : false
};
WeaponsList["pistol"] = {
    regExpSearch : /^pistol/i,
    name : "Pistol",
    source : ["HA:G", 9],
    list : "firearm",
    ability : 2,
    type : "Firearm",
    damage : [1,8,"Piercing"],
    range : "40/160",
    description : "Ammunition, Reload 8, Misfire",
    abilitytodamage : true,
    weight : 3,
    monkweapon : false,
    ammo : "bullet",
    dc : false
};
WeaponsList["scattergun"] = {
    regExpSearch : /^(?=.*scattergun)/i,
    name : "Scattergun",
    source : ["HA:G", 9],
    list : "firearm",
    ability : 2,
    type : "Firearm",
    damage : [2,4,"Bludgeoning"],
    range : "20/40",
    description : "Ammunition, Reload 4, Scatter (1d4), Misfire",
    abilitytodamage : true,
    weight : 4,
    monkweapon : false,
    ammo : "bullet",
    dc : false
};
WeaponsList["shotgun"] = {
    regExpSearch : /^shotgun/i,
    name : "Shotgun",
    source : ["HA:G", 9],
    list : "firearm",
    ability : 2,
    type : "Firearm",
    damage : [1,12,"Bludgeoning"],
    range : "30/60",
    description : "Ammunition, Two-Handed, Scatter (1d6), Reload 6, Misfire",
    abilitytodamage : true,
    weight : 7,
    monkweapon : false,
    ammo : "bullet",
    dc : false
};
WeaponsList["light rifle"] = {
    regExpSearch : /^light(?=.*rifle).*$/i,
    name : "Light Rifle",
    source : ["HA:G", 9],
    list : "firearm",
    ability : 2,
    type : "Firearm",
    damage : [1,10,"Piercing"],
    range : "60/200",
    description : "Ammunition, Two-Handed, Reload 6, Misfire",
    abilitytodamage : true,
    weight : 6,
    monkweapon : false,
    ammo : "bullet",
    dc : false
};
WeaponsList["rifle"] = {
    regExpSearch : /^rifle/i,
    name : "Rifle",
    source : ["HA:G", 9],
    list : "firearm",
    ability : 2,
    type : "Firearm",
    damage : [1,12,"Piercing"],
    range : "90/300",
    description : "Ammunition, Heavy, Two-Handed, Reload 4, Misfire",
    abilitytodamage : true,
    weight : 2,
    monkweapon : false,
    ammo : "bullet",
    dc : false
};
