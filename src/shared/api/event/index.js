import yelp from '../../../services/yelp';

// {
//     "eventDescription": "string",
//     "eventEndTime": 0,
//     "eventLocation": "string",
//     "eventName": "string",
//     "eventStartTime": 0,
//     "hostId": 0
// }
export const createEvent = async (eventInfoObj) => {
    try {
        const response = await yelp.post('/event', {
        "eventDescription": eventInfoObj["eventDescription"],
        "eventEndTime": eventInfoObj["eventEndTime"],
        "eventLocation": eventInfoObj["eventLocation"],
        "eventName": eventInfoObj["eventName"],
        "eventStartTime": eventInfoObj["eventStartTime"],
        "hostId": eventInfoObj["hostId"],
        });
        return response;
    } catch (err) {
        console.log(err);
        return { status: 500 };
    }
};

export const getUserEvent = async (userId) => {
    try {
        const response = await yelp.get('/getUserEvent', {
            headers: { userId }
        }
        );
        return response;
    } catch (err) {
        console.log(err);
        return { status: 500 };
    }
};