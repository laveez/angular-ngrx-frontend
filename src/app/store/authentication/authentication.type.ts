import { LayoutType } from 'src/app/store';

// Authentication store action type definitions.
export enum AuthenticationType {
  LOGIN = '[Authentication] Login',
  LOGIN_SUCCESS = '[Authentication] Login success',
  LOGIN_FAILURE = '[Authentication] Login failure',
  PROFILE = '[Authentication] Profile',
  PROFILE_SUCCESS = '[Authentication] Profile success',
  PROFILE_FAILURE = '[Authentication] Profile failure',
  LOGOUT = '[Authentication] Logout',
}

// Authentication login types
export type AuthenticationLoginTypes =
  AuthenticationType.LOGIN_SUCCESS
  | AuthenticationType.LOGIN_FAILURE
  | LayoutType.UPDATE_LOCALIZATION;

// Authentication profile types
export type AuthenticationProfileTypes =
  AuthenticationType.PROFILE_SUCCESS
  | AuthenticationType.PROFILE_FAILURE;
