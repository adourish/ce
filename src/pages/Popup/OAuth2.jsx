import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import OAuth2Login from 'react-simple-oauth2-login';
class OAuth2 extends React.Component {
    state = {
        name: 'dev',
    };
    onSuccess = (response) => {
        // Handle successful authentication here
        console.log('Authentication successful', response);
    }

    onFailure = (error) => {
        // Handle authentication failure here
        console.log('Authentication failed', error);
    }
    render() {
        return (
            <div>
                <p>OAuth2 inner component test, {this.state.name}!</p>
                <OAuth2Login
                    authorizationUrl="https://accounts.spotify.com/authorize"
                    responseType="token"
                    clientId="9822046hvr4lnhi7g07grihpefahy5jb"
                    redirectUri="http://localhost:3000/oauth-callback"
                    onSuccess={this.onSuccess}
                    onFailure={this.onFailure} />
            </div>
        );
    }



    /** 
    authenticate = async () => {
        try {
            var url = "https://login.amplenote.com/login?client_id=c9860d38b0df2b7c3aad2e3645eca41355e6ff31e147f90f889d7f8394b59418&nonce=94375f7338f3aa937a3c0bd4cc234dc89600ccc6b396980df4484b2847701fa6&redirect_uri=https%3A%2F%2Fwww.amplenote.com%2Flogin%2Fcallback&response_type=code&state=20239d639eb9e9f5d01adefe4b401137ae9e38b037d5e34ef1d7db73994cd372"
            console.log("OAuth2Authentication", url)
            // Step 1: Redirect the user to the OAuth2 provider login page
            const response = await fetch(url, {
                method: 'GET',
                // Include any necessary query parameters, scopes, etc.
            });
            const authorizationUrl = response.url;

            // Step 2: Redirect the user back to your application with the authorization code
            if (authorizationUrl) {
                window.location.href = authorizationUrl;
            }
        } catch (error) {
            console.error('OAuth2 authentication failed:', error);
            // Handle error cases
        }
    };
*/
}

export default OAuth2;

