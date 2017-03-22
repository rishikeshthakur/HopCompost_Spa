export class AssetSettings {
   public static get FAIL_TOGETASSETS(): string { return 'Internal server error. Unable to get Assets!'; }
   public static get FAIL_TOGETASSET(): string { return 'Internal server error. Unable to get Asset!'; }
   public static get FAIL_TOSAVEASSET(): string { return 'Internal server error. Unable to save Asset!'; }

   public static get FAIL_TOGETASSETTYPES(): string { return 'Internal server error. Unable to get AssetTypes!'; }
   public static get FAIL_TOGETASSETTYPE(): string { return 'Internal server error. Unable to get Asset Type!'; }
   public static get FAIL_TOSAVEASSETTYPE(): string { return 'Internal server error. Unable to save Asset Type!'; }

   public static get SUCCESS_SAVEASSET(): string { return 'Successfully saved Asset.'; }
   public static get SUCCESS_SAVEASSETTYPE(): string { return 'Successfully saved Asset Type.'; }
}
