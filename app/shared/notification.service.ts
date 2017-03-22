// import { Injectable } from '@angular/core';

// import { ToastyService, ToastOptions } from 'ng2-toasty';

// import { AppSettings } from '../app.settings';

// @Injectable()
// export class NotificationService {

//     constructor(private _toastyService: ToastyService) {
//     }

//     private getOptions(title: string, message: string): ToastOptions{
//         let toastOptions: ToastOptions = {
//             title: title,
//             msg: message,
//             showClose: AppSettings.NOTIFICATION_SHOWCLOSE,
//             timeout: AppSettings.NOTIFICATION_TIMEOUT,
//             theme: AppSettings.NOTIFICATION_THEME
//         };

//         return toastOptions;
//     }

//     info(message: string): void{
//         this._toastyService.info(this.getOptions('Info', message));
//     }

//     success(message: string): void{
//         this._toastyService.success(this.getOptions('Success', message));
//     }

//     error(message: string): void{
//         this._toastyService.error(this.getOptions('Error', message));
//     }

//     warning(message: string): void{
//         this._toastyService.warning(this.getOptions('Warning', message));
//     }
// }