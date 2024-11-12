// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
    firebaseConfig : {
      apiKey: "AIzaSyBoyu_uChqIbo5xYqKufYyuLfZAsi-5xHs",
      authDomain: "login-8addc.firebaseapp.com",
      projectId: "login-8addc",
      storageBucket: "login-8addc.appspot.com",
      messagingSenderId: "7076727020",
      appId: "1:7076727020:web:593b7cb236d4032146fdc9",
      measurementId: "G-133L0NFKQ0"
  },
  baseUrl: 'https://one-piece-episodes.p.rapidapi.com/one_piece/',
  seasons: 'seasons/',
  episodes_by_season: 'episodes_by_season/',
  episode : 'episode/'
};


// Initialize Firebase

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
