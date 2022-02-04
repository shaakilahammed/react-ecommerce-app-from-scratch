import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWVkNDNlNWE3N2EzNTI5ZTg0ODk2YyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mzk3ODkwOCwiZXhwIjoxNjQzOTgyNTA4fQ.HebOv0QkIhyAc9G-FmBoXLXRVQlFQ0McjdVOz6sUDgo';

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
