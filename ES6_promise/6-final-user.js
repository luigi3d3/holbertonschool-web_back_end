import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const data = values;
      for (const settle of data) {
        if (settle.reason) {
          settle.value = settle.reason.toString();
          delete settle.reason;
        }
      }
      return data;
    });
}
