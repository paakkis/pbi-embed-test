import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config Azure AD app setting to be passed to Msal on creation

const TenantId = ""; 
const ClientId = ""

export const msalConfig: Configuration = {
    auth: {
        clientId: ClientId,
        authority: "https://login.microsoftonline.com/" + TenantId,
        redirectUri: "/",
        postLogoutRedirectUri: "/"        
    }
};

export const PowerBiPermissionScopes: string[] = [
    "https://analysis.windows.net/powerbi/api/Dashboard.Read.All",
    "https://analysis.windows.net/powerbi/api/Dataset.Read.All",
    "https://analysis.windows.net/powerbi/api/Report.ReadWrite.All",
    "https://analysis.windows.net/powerbi/api/Group.Read.All",
    "https://analysis.windows.net/powerbi/api/Workspace.ReadWrite.All",
    "https://analysis.windows.net/powerbi/api/Content.Create"
  ]

export const PowerBiLoginRequest: PopupRequest = {
    scopes: PowerBiPermissionScopes
};