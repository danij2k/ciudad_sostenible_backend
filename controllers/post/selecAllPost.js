const selecAllPostQuery = require("../../db/querys/post/selecAllPostQuery");

const listpost = async (req, res, next) => {
    try {
        // Importamos un query param que nos permite filtrar los tweets por palabra clave.
        const { keyword } = req.query;

        const post = await selecAllPostQuery(req.user?.id, keyword);

        res.send({
            status: "ok",
            data: {
                post,
            },
        });
    } catch (err) {
        next(err);
    }
};

module.exports = listpost;
