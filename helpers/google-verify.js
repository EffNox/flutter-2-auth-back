const { OAuth2Client } = require('google-auth-library');

const CLIENT_ID = '336279698109-mq43ct96j81r5soefagred3044rdu563.apps.googleusercontent.com';
const CLIENT_ANDROID = '336279698109-veo2qmnfujl3udf8s8ppqhed3cc9m2se.apps.googleusercontent.com';

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
