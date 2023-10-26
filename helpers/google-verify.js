const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = 'X';
const CLIENT_ANDROID = 'X';

const client = new OAuth2Client(CLIENT_ID);
const validateGGToken = async (token) => {
    try {
        const ticket = await client.verifyIdToken({ idToken: token, audience: [CLIENT_ID, CLIENT_ANDROID] });
        const { email, name, given_name, family_name, locale, picture } = ticket.getPayload();
        return { email, name, given_name, family_name, locale, picture, id: ticket.getUserId() };
    } catch (er) {
        return null;
    }
}

module.exports = { validateGGToken }
