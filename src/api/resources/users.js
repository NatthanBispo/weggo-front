import ApiService from '../api.service';

const UsersResource = {
  index: (params) => ApiService.query('users', params),
  register: (params) => ApiService.post('users', params),
  update: (params) => ApiService.put(`users/${params.id}`, params),
  deactivate: (params) => ApiService.put(`users/${params.id}/deactivate`, params),
};

export default UsersResource;
