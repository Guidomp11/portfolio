module.exports = {
    register: async (req, res) => {
        try {
            console.log(req.body);
        }catch(error) {
            console.log(error);
        }
    },
    login: async (req, res) => {
        try {
            console.log(req.body);
        }catch(error) {
            console.log(error);
        }
    },
    authenticate: async (req, res) => {
        try {
            console.log(req.body);
        }catch(error) {
            console.log(error);
        }
    }
};