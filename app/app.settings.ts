export class AppSettings {
    private static get ORIGIN(): string { return 'http://localhost/HopCompost_Api'; } 

    public static get API_ENDPOINT(): string { return `${this.ORIGIN}/api`; }
    public static get WEB_FILESTORE(): string { return `${this.ORIGIN}/FileStore`; }
    public static get A2_ENDPOINT(): string { return 'http://localhost:3000'; }
    public static get NOTIFICATION_THEME(): string { return 'bootstrap'; } // Options include: 'default'; 'material' and 'bootstrap' 
    public static get NOTIFICATION_SHOWCLOSE(): boolean { return true; }
    public static get NOTIFICATION_TIMEOUT(): number { return 5000; }

    public static get PAGE_SIZE(): number { return 15; }

    public static get AUTH0_CLIENT_ID(): string { return 'HKNqiE4Vo6JEA4yn4ikY1HoFdzRXTZFx'; }
    public static get AUTH0_DOMAIN(): string { return 'trainingschool.auth0.com'; }
    public static get AUTH0_EMAIL(): string { return 'something@youremail.com'; }
    public static get AUTH0_TITLE(): string { return 'IHES Auth'; }

    public static get LOCALSTORAGE_LISTFILTER(): string { return 'listFilter'; }
    public static get LOCALSTORAGE_PAGEINDEX(): string { return 'pageIndex'; }
}
