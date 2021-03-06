import { $TSObject } from 'amplify-cli-core';

export type ProjectDetails = {
  authResourceName?: string;
  parameters?: {
    authSelections?: string;
    resourceName?: string;
    serviceType?: string;
  };
  meta?: {
    UserPoolId?: string;
    UserPoolName?: string;
    AppClientID?: string;
    AppClientSecret?: string;
    AppClientIDWeb?: string;
    HostedUIDomain?: string;
    OAuthMetadata?: $TSObject;
    IdentityPoolId?: string;
    IdentityPoolName?: string;
    AmazonWebClient?: string;
    FacebookWebClient?: string;
    GoogleWebClient?: string;
  };
  team?: {
    userPoolId?: string;
    userPoolName?: string;
    webClientId?: string;
    nativeClientId?: string;
    hostedUIProviderCreds?: $TSObject;
    identityPoolId?: string;
    identityPoolName?: string;
    allowUnauthenticatedIdentities?: string;
    authRoleArn?: string;
    authRoleName?: string;
    unauthRoleArn?: string;
    unauthRoleName?: string;
    amazonAppId?: string;
    facebookAppId?: string;
    googleClientId?: string;
  };
};
