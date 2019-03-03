var response = {
    fail: (res, why) => {
        var reply = {
            status: false,
            message: why,
            // payload: data
        };
        res.json(reply);
    },
    pass: (res, data) => {
        var reply = {
            status: true,
            message: 'success',
            payload: data
        };
        res.json(reply);
    }
}

module.exports = response;