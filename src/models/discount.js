
const getConnection = () => {

    return connection;
};

const getDiscounts = async () => {
    const connection = await getConnection();
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM discounts', (err, results) => {
            connection.release();
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};

const addDiscount = async (discount) => {
    const connection = await getConnection();
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO discounts SET ?', discount, (err, result) => {
            connection.release();
            if (err) {
                return reject(err);
            }
            resolve(result.insertId);
        });
    });
};

const updateDiscount = async (id, updatedDiscount) => {
    const connection = await getConnection();
    return new Promise((resolve, reject) => {
        connection.query('UPDATE discounts SET ? WHERE id = ?', [updatedDiscount, id], (err, result) => {
            connection.release();
            if (err) {
                return reject(err);
            }
            resolve(result.affectedRows);
        });
    });
};

const deleteDiscount = async (id) => {
    const connection = await getConnection();
    return new Promise((resolve, reject) => {
        connection.query('DELETE FROM discounts WHERE id = ?', id, (err, result) => {
            connection.release();
            if (err) {
                return reject(err);
            }
            resolve(result.affectedRows);
        });
    });
};

module.exports = {
    getDiscounts,
    addDiscount,
    updateDiscount,
    deleteDiscount
};
