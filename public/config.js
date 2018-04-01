/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

var config = {
  apiKey: "AIzaSyBHf0zE0S3Bf5-0VkLwgM0NfgL-giOS8qw",
  authDomain: "ezsplit-199720.firebaseapp.com",
  databaseURL: "https://ezsplit-199720.firebaseio.com",
  projectId: "ezsplit-199720",
  storageBucket: "",
  messagingSenderId: "1043345497797"
};
firebase.initializeApp(config);

// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
// var CLIENT_ID = '1043345497797-s5cuj2io2lquipeoiqbslk9prv1ktd81.apps.googleusercontent.com';
var CLIENT_ID = null;
