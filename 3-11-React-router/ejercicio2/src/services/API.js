const ENDPOINT = "https://randomuser.me/api/?results=50";

const getUsers = () => fetch(ENDPOINT).then(users => users.json());


export { getUsers };