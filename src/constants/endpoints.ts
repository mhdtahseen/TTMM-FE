// API base URI imported from environment variable
const API_URI = import.meta.env.VITE_API_URI;

//AUTH
const AUTH = `${API_URI}/auth`;
const AUTH_LOGIN = `${AUTH}/login`;
const AUTH_SIGNUP = `${AUTH}/signup`;

export { API_URI, AUTH, AUTH_LOGIN, AUTH_SIGNUP };
