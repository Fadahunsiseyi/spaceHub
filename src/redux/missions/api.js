const url = 'https://api.spacexdata.com/v3/missions';

export const getMissions = async () => {
  try {
    const result = await fetch(url);
    const data = await result.json();
    if (result.status === 200) {
      return data;
    }
  } catch (error) {
    return error;
  }
  return false;
};

export default getMissions;
