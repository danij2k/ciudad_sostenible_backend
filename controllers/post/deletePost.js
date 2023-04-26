const selectPostByIdQuery = require("../../db/querys/post/selectPostByIdQuery");
const deletePostQuery = require("../../db/querys/post/deletePostQuery");

const { generateError, deleteImg } = require("../../helpers");

const deleteTweet = async (req, res, next) => {
  try {
    const { idPost } = req.params;

    // Comprobamos si somos los dueños del tweet.
    const post = await selectPostByIdQuery(idPost);

    // También podríamos poner: !tweet.owner
    if (post.idUser !== req.user.id) {
      generateError("No tienes suficientes permisos", 401);
    }

    // Si el tweet tiene imagen la eliminamos de la carpeta de "uploads".
    if (post.image) {
      await deleteImg(post.image);
    }

    // Eliminamos el tweet.
    await deleteTweetQuery(idPost);

    res.send({
      status: "ok",
      message: "Post eliminado",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = deletePost;
