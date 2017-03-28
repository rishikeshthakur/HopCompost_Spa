export class AppSettings {
    // private static get ORIGIN(): string { return 'http://localhost/HopCompost_Api'; } 
    //private static get ORIGIN(): string { return 'http://localhost:34940'; } 
    private static get ORIGIN(): string { return 'http://hopcompostapi-slot.azurewebsites.net'; } 

    public static get API_ENDPOINT(): string { return `${this.ORIGIN}/api`; }
    public static get WEB_FILESTORE(): string { return `${this.ORIGIN}/FileStore`; }
    //public static get A2_ENDPOINT(): string { return 'http://localhost:3000'; }
    public static get NOTIFICATION_THEME(): string { return 'bootstrap'; } // Options include: 'default'; 'material' and 'bootstrap' 
    public static get NOTIFICATION_SHOWCLOSE(): boolean { return true; }
    public static get NOTIFICATION_TIMEOUT(): number { return 5000; }

    public static get PAGE_SIZE(): number { return 15; }

    public static get LOCALSTORAGE_LISTFILTER(): string { return 'listFilter'; }
    public static get LOCALSTORAGE_PAGEINDEX(): string { return 'pageIndex'; }
}
