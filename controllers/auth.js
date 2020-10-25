const res = require('express').response;
const { validateGGToken } = require('../helpers/google-verify')

const ggAuth = async ({ body, headers }, rs = res) => {
    const tk = headers.tk;
    if (!tk) return rs.json({ msg: 'No hay tk' })

    const ggUser = await validateGGToken(tk);

    if (!ggUser) return rs.status(400).json({ msg: 'Token inválido' })

    rs.json({ ggUser })
}

module.exports = { ggAuth }
