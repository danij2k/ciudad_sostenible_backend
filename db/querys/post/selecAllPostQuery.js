const getDB = require('../../getDB');

const selecAllPostQuery = async (idUser, keyword = '') => {
    let connection;

    try {
        connection = await getDB();

        const [post] = await connection.query(
            `
                SELECT 
                title, text, barrio, photo
                FROM posts P
                WHERE P.text LIKE ?
                
                
            `,
            [`%${keyword}%`, ]
        );

        return post;
    } finally {
        if (connection) connection.release();
    }
};

module.exports = selecAllPostQuery;