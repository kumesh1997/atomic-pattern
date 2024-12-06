import axios from 'axios';
import globalAppConfig from '../../config/global-app-config';

interface fetchProjectsArgsTypes {
  projectName?: string | null;
  status?: string | null;
  createdBy?: string | null;
  fromDate?: string | null;
  toDate?: string | null;
  page?: number;
  limit?: number
}

class ProjectService {
  static async fetchProjects(filters: fetchProjectsArgsTypes) {
    const token = localStorage.getItem('secret');
    const { projectName, status, createdBy, fromDate, toDate, page = 1, limit = 10 } = filters;
    const url = `${globalAppConfig.baseApiUrl}/projects/paginated?page=${page}&limit=${limit}&projectName=${projectName}&status=${status}&createdBy=${createdBy}&dateFrom=${fromDate}`;
    try {
      const response = await axios.get(url,{
        headers: {
          Authorization: token,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch projects');
    }
  }
}

export default ProjectService;