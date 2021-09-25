import yelp from '../../../services/yelp';
export const createEvent = async (eventRequest) => {
    eventDescription = eventRequest['eventDescription']
    eventEndTime = eventRequest['eventEndTime']
    eventLocation = eventRequest['eventLocation']
    eventName = eventRequest['eventName']
    eventStartTime = eventRequest['eventStartTime']
    hostId = eventRequest['hostId']
    try {
        const response = await yelp.post('/event', {
            eventDescription,
            eventEndTime,
            eventLocation,
            eventName,
            eventStartTime,
            hostId,
        });
        return response;
    }
    catch (err) {
        console.log(err);
        return { status: 500 };
    }
};