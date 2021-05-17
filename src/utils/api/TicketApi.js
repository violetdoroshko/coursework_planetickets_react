import { CART_URL, LOGIN_URL, REGISTER_URL, TICKETS_URL, USERS_URL } from '../consts';

export async function registerUser(newUser) {
  //todo add cart ID = user ID
  return await fetch(REGISTER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),
  });
}

export async function loginUser(user) {
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

export async function getTicket(ticketId) {
  return await fetch(TICKETS_URL + '/' + ticketId, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function editUser(updatedData, userId) {
  return await fetch(USERS_URL + '/' + userId, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  });
}

export async function addTicketToCart(ticket, cart) {
  return await fetch(CART_URL + '/' + cart.id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...cart, tickets: [ticket, ...cart.tickets] }),
  });
}

export async function getUser(accessToken, userId) {
  return await fetch(USERS_URL + '/' + userId, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export async function getCartData(cartId) {
  return await fetch(CART_URL + '/' + cartId, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
