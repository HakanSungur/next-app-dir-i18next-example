import axios from "axios";

export default class NotificationService {

    getLast5NotificationByUserId(userId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/notifications/getLast5NotificationByUserId?userId=${userId}`
    );
  }

  setNotificationIsReadToTrue(notificationId) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/notifications/setNotificationIsReadToTrue?notificationId=${notificationId}`
    );
  }

  getOfferFeaturesByIds(offerFeatureIds) {
    return axios.get(
      `https://holidayoffer-production.up.railway.app/api/offerFeatures/getOfferFeaturesByIds?offerFeatureIds=${offerFeatureIds}`
    );
  }
}