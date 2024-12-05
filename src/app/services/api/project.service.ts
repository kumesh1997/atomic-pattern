import axios from 'axios';
import globalAppConfig from '../../config/global-app-config';

class ProjectService {
  static async fetchProjects() {
    try {
      const response = await axios.get(`${globalAppConfig.baseApiUrl}/projects/paginated`,{
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzMzMzYyMjkzLCJleHAiOjE3MzMzNjU4OTN9.g6T9vnhbc2FslNqT5r45RHh6_ntdViduk-VOecaAlpY`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch projects');
    }
  }
}

export default ProjectService;