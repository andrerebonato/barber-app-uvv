
const MS_FIXED_SERVERS = {
    fixedUrl: "",
    userProfile: {
      url: "http://192.168.2.45:3001/loga/v1",
    },
    contractAddress: {
      url: "http://192.168.2.45:3000/loga/v1",
    },
  };
  
  const configs = {
    msEndpoints: {
      userProfile: {
        eps: {
          getData: `${MS_FIXED_SERVERS.userProfile.url}/user/profile`
        },
      },
      contractAddress: {
        eps: {
          getAll: `${MS_FIXED_SERVERS.contractAddress.url}/address`
        },
      },
      auth: {
        eps: {
          submitLogin: "",
          resetPassword: ""
        }
      }
    },
    screens: {
      forgotPassword: {
        name: "ForgotPassword",
      },
      login: {
        name: "Login",
      },
      register: {
        name: "Register",
      },
      home: {
        name: "Home"
      },
      forgotPasswordOk: {
        name: "ForgotPasswordOk"
      },
      profile: {
        name: "Profile"
      },
      faturas: {
        name: "Faturas"
      }
    },
    images: {
      logo: require('../assets/logo/logo.png')
    }
};
  
export default configs;
  