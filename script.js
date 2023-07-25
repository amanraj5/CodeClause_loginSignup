// Function to open Google login popup
function loginWithGoogle() {
    // Replace YOUR_GOOGLE_CLIENT_ID with your actual Google Client ID
    const googleClientId = '691411303149-315fcshv2n7cteau3q48euuvp9t4v923.apps.googleusercontent.com';
    const redirectUri = 'https://loginSignup.com'; // Must be registered in Google Developer Console
  
    const url = `https://accounts.google.com/o/oauth2/v2/auth?` +
      `client_id=${googleClientId}&redirect_uri=${redirectUri}` +
      `&scope=profile email&response_type=token`;
  
    window.open(url, 'Login with Google', 'width=600, height=600');
  }
  
  // Function to open Facebook login popup
  function loginWithFacebook() {
    // Replace YOUR_FACEBOOK_CLIENT_ID with your actual Facebook App ID
    const facebookAppId = '235817646083351';
    const redirectUri = 'https://loginSignup.com/'; // Must be registered in Facebook Developer Console
  
    const url = `https://www.facebook.com/v11.0/dialog/oauth?` +
      `client_id=${facebookAppId}&redirect_uri=${redirectUri}` +
      `&scope=public_profile,email&response_type=token`;
  
    window.open(url, 'Login with Facebook', 'width=600, height=600');
  }
  
  // Handle the callback from the login popup (for Google)
  function handleLoginCallback(hash) {
    // Parse the access token from the URL hash
    const params = new URLSearchParams(hash.slice(1));
    const accessToken = params.get('access_token');
  
    // Here, you can make a request to your server with the access token
    // for further authentication and user profile retrieval.
    console.log('Access Token:', accessToken);
  }
  
  // Listen for message events from the login popup (for Google)
  window.addEventListener('message', function (event) {
    if (event.origin === window.location.origin) {
      // Call the function to handle the login callback with the access token
      handleLoginCallback(event.data);
    }
  });
  