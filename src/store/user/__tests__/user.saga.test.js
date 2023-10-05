import { call } from 'typed-redux-saga/macro';
import { expectSaga, testSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';

import {
  userSagas,
  onSignOutStart,
  onSignUpStart,
  onSignUpSuccess,
  onEmailSignInStart,
  onCheckUserSession,
  onSignInStart,
  onGoogleSignInStart,
  onSignInSuccess,
  onSignInFailure,
  onSignOutFailure,
  onSignOutSuccess,
  onSignUpFailure,
  signOut,
  signUp,
  signIn,
  signInWithEmail,
  signInWithGoogle,
  isUserAuthenticated,
  signInAfterSignUp,
  getSnapshotFromUserAuth,
} from '../user.saga';

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutUser,
} from '../../../utils/firebase/firebase.utils';

import { USER_ACTION_TYPES } from '../user.types';
import {
  signOutFailed,
  signOutSuccess,
  signUpSuccess,
  signUpFailed,
  signInFailed,
  signInSuccess,
} from '../user.action';

describe('user sagas', ()=> {
    test('userSagas', ()=> {
        testSaga(userSagas)
        .next()
        .all([
            call(onCheckUserSession),
            call(onGoogleSignInStart),
            call(onEmailSignInStart),
            call(onSignUpStart),
            call(onSignUpSuccess),
            call(onSignOutStart),
        ])
        .next()
        .isDone();
    });

    test('onGoogleSignInStart saga should take latest GOOGLE_SIGN_IN_START and call signInWithGoogle', () => {
        testSaga(onGoogleSignInStart)
        .next()
        .takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
        .next()
        .isDone()
    });

    test('onCheckUserSession saga should take latest CHECK_USER_SESSION and call isUserAuthenticated', ()=> {
        testSaga(onCheckUserSession)
        .next()
        .takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
        .next()
        .isDone()
    });
})