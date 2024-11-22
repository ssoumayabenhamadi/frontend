import axios from 'axios';

const base_url = "http://localhost:8080/api/"

export const login = async (username, password) => {
  try {
    const response = await axios.post(base_url+'auth/signin', {
      username,
      password,
    });

    localStorage.setItem('accessToken', response.data.accessToken);

    return {
      success: true,
      message: 'Connexion réussie',
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || 'Une erreur est survenue',
    };
  }
};

export const signup = async (data) => {
  try {
    const response = await axios.post(base_url + 'auth/signup', data);

    return {
      success: true,
      message: 'Inscription réussie',
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      message: error.response?.data?.message || 'Une erreur est survenue',
    };
  }
};


