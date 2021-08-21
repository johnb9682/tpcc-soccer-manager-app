import yelp from '../../../services/yelp';

export const updateProfile = async (email, id, userName ,password) => {
    try {
        const response = await yelp.put('/updateUser', {
            email,
            id,
            password,
            userName,
        });
        return response;
    }
    catch (err) {
        console.log(err);
        return { status: 500 };
    }
};

export const getUserInfo = async (id) => {
    try {
        const response = await yelp.get('/getUser', {
            id,
        });
        return response;
    }
    catch (err) {
        console.log(err);
        return { status: 500 };
    }
}
  