export interface FSTransObj {
  Namespace: string;
  Key: string;
  SourceString: string;
}

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
