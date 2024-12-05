import axios from 'axios';
import globalAppConfig from '../../config/global-app-config';

interface fetchProjectsArgsTypes {
  projectName?: string | null;
  status?: string | null;
  createdBy?: string | null;
  fromDate?: string | null;
  toDate?: string | null;
}

class ProjectService {
  static async fetchProjects(filters: fetchProjectsArgsTypes) {
    const { projectName, status, createdBy, fromDate, toDate } = filters;
    const url = `${globalAppConfig.baseApiUrl}/projects/paginated?page=1&limit=10&projectName=${projectName}&status=${status}`;
    try {
      const response = await axios.get(url,{
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzMzMzgxMjYwLCJleHAiOjE3MzMzODQ4NjB9.ihs50SFhNtijDS6sj44mtREmrHhFHYzd4sW8x5ubSnU`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch projects');
    }
  }
}

export default ProjectService;