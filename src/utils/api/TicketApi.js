import { LOGIN_URL, REGISTER_URL, TICKETS_URL } from '../consts';

export async function registerUser(newUser) {
  console.log(newUser);
  console.log(JSON.stringify(newUser));
  return await fetch(REGISTER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
}

export async function loginUser(user) {
  console.log(user);
  console.log(JSON.stringify(user));
  return await fetch(LOGIN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
}

export async function getTickets() {
  return await fetch(TICKETS_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
