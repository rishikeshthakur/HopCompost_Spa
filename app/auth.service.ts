// import { Injectable } from '@angular/core';
// import { tokenNotExpired } from 'angular2-jwt';
// import { Router } from '@angular/router';

// import { AppSettings } from './app.settings';

// // Avoid name not found warnings
// declare var Auth0Lock: any;

// @Injectable()
// export class Auth {
//   userProfile: any;

//   options: any = {
//     theme: {
//       logo: 'app/images/logo.png'
//     },
//     languageDictionary: {
//       emailInputPlaceholder: AppSettings.AUTH0_EMAIL,
//       title: AppSettings.AUTH0_TITLE
//     },
//   };

//   // Configure Auth0
//   lock = new Auth0Lock(AppSettings.AUTH0_CLIENT_ID, AppSettings.AUTH0_DOMAIN, this.options);

//   constructor(private _router: Router) {
//     // Set userProfile attribute of already saved profile
//     this.userProfile = JSON.parse(localStorage.getItem('profile'));

//     // Add callback for lock `authenticated` event
//     this.lock.on('authenticated', (authResult: any) => {
//       localStorage.setItem('id_token', authResult.idToken);

//       this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
//         if (error) {
//           console.log(error);
//           return;
//         }

//         profile.user_metadata = profile.user_metadata || {};
//         localStorage.setItem('profile', JSON.stringify(profile));

//         this.userProfile = profile;
//       });
//     });
//   }

//   public login() {
//     // Call the show method to display the widget.
//     this.lock.show({
//       authParams: {
//         state: `${AppSettings.A2_ENDPOINT}/welcome`
//       }
//     });
//   };

//   public authenticated() {
//     // Check if there's an unexpired JWT
//     // It searches for an item in localStorage with key == 'id_token'
//     return tokenNotExpired();
//   };

//   public logout() {
//     // Remove token from localStorage
//     localStorage.removeItem('id_token');
//     localStorage.removeItem('profile');
//     this.userProfile = undefined;

//     this._router.navigate(['/logout']);
//   };
// }
