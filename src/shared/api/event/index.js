import yelp from '../../../services/yelp';

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
        return null;
    } catch (err) {
        return err.message;
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

export const getEventUserInfo = async (eventId) => {
    try {
        const response = await yelp.get('/eventParticipant', {
            headers: { eventId }
        }
        );
        return response;
    } catch (err) {
        console.log(err);
        return { status: 500 };
    }
}

export const cancelEvent = async (eventId) => {
    try {
        const response = await yelp.delete('/event', {
            headers: { eventId }
        });
        return null;
    } catch (err) {
        return err.message;
    }
}

export const deleteEventParticipants = async (userId, eventId) => {

}

export const updateEventInfo = async (eventInfoObj) => {
    try {
        const response = await yelp.put('/event', {
            "eventDescription": eventInfoObj["eventDescription"],
            "eventEndTime": eventInfoObj["eventEndTime"],
            "eventLocation": eventInfoObj["eventLocation"],
            "eventName": eventInfoObj["eventName"],
            "eventStartTime": eventInfoObj["eventStartTime"],
            "hostId": eventInfoObj["hostId"],
            "id": eventInfoObj["id"],
        });
        return response;
    } catch (err) {
        console.log(err);
        return { status: 500 };
    }
}