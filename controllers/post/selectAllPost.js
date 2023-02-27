const selectAllPostQuery = require("../../db/querys/post/selectAllPostQuery");

const selectAllPost = async (req, res, next) => {
    try {
        // Importamos un query param que nos permite filtrar los tweets por palabra clave.
        const { keyword } = req.query;

        const post = await selectAllPostQuery(keyword);

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

module.exports = selectAllPost;
