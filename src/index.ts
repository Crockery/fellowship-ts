import ABILITY_DATA, { type Ability } from "./data/abilities";
import LOCALES from "./data/localization/locales";

import DE_LOC from "./data/localization/de";
import EN_LOC from "./data/localization/en";
import ES_LOC from "./data/localization/es";
import FR_LOC from "./data/localization/fr";
import IT_LOC from "./data/localization/it";
import JA_LOC from "./data/localization/ja";
import KO_LOC from "./data/localization/ko";
import PT_LOC from "./data/localization/pt-BR";
import RU_LOC from "./data/localization/ru";
import ZH_CN_LOC from "./data/localization/zh-CN";
import ZH_HANT_LOC from "./data/localization/zh-Hant";

type LocaleKey = (typeof LOCALES)["keys"][number];

interface Args {
  locale?: LocaleKey;
}

export class FellowshipTs {
  // Ability to ability id map.
  private ability_map: Map<string, Ability>;

  locale: LocaleKey;

  constructor({ locale }: Args) {
    this.locale = locale ?? "en";

    this.ability_map = new Map();

    ABILITY_DATA.forEach((ability) => {
      this.ability_map.set(ability.id, ability);
    });
  }

  // ABILITIES
  getAbility(id: string) {
    return this.ability_map.get(id);
  }
  getAbilities(filter: (ability: Ability) => boolean) {
    return ABILITY_DATA.filter(filter);
  }

  // LOCALES
  translate(key: string) {
    let translation = key;
    switch (this.locale) {
      case "de": {
        translation = DE_LOC[key];
        break;
      }
      case "en": {
        translation = EN_LOC[key];
        break;
      }
      case "es": {
        translation = ES_LOC[key];
        break;
      }
      case "fr": {
        translation = FR_LOC[key];
        break;
      }
      case "it": {
        translation = IT_LOC[key];
        break;
      }
      case "ja": {
        translation = JA_LOC[key];
        break;
      }
      case "ko": {
        translation = KO_LOC[key];
        break;
      }
      case "pt-BR": {
        translation = PT_LOC[key];
        break;
      }
      case "ru": {
        translation = RU_LOC[key];
        break;
      }
      case "zh-CN": {
        translation = ZH_CN_LOC[key];
        break;
      }
      case "zh-Hant": {
        translation = ZH_HANT_LOC[key];
        break;
      }
      default: {
        break;
      }
    }

    return translation;
  }

  changeLocale(new_locale: LocaleKey) {
    this.locale = new_locale;
  }
}
