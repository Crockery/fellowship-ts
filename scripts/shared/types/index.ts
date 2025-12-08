export interface FSTranslateable {
  Namespace: string;
  Key: string;
  SourceString: string;
}

interface FsNotTranslateable {
  CultureInvariantString: null;
}

export type FSTransObj = FSTranslateable | FsNotTranslateable;

export interface FSBlueprint extends Record<string, unknown> {
  Type: string;
  Name: string;
  Class: string;
  Template?: FSObjectDesc;
}

export interface FSTagNameObj {
  TagName: string;
}

export interface FSObjectDesc {
  ObjectName: string;
  ObjectPath: string;
}

export interface FSAssetDesc {
  AssetPathName: string;
}

export enum FileType {
  FILE = "FILE",
  FOLDER = "FOLDER",
}

export interface AbilityRaw {
  Name: FSTransObj;
  DynamicDescription: {
    Text: FSTransObj;
  };
  DetailedDescription: FSTransObj;
  EnabledInGame: boolean;
  UIIconTexture: {
    ResourceObject?: FSObjectDesc;
  };
  GameplayAbilityAsset: FSAssetDesc;
}

export interface AbilityBlueprint extends FSBlueprint {
  Rows: Record<string, AbilityRaw>;
}
