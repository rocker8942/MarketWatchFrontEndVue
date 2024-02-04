import url from './url'
const AppConsts= {
    userManagement:{
        defaultAdminUserName: 'admin'
    },
    localization:{
        defaultLocalizationSourceName: 'MoneystockWeb'
    },
    authorization:{
        encrptedAuthTokenName: 'enc_auth_token'
    },
    appBaseUrl: "https://localhost:8080",
    remoteServiceBaseUrl: url.endsWith('/') ? url.slice(0, -1) : url
}
export default AppConsts