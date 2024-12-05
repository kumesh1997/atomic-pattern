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
    console.log(filters)
    const url = `${globalAppConfig.baseApiUrl}/projects/paginated?page=1&limit=10&projectName=${projectName}&status=${status}&createdBy=${createdBy}`;
    try {
      const response = await axios.get(url,{
        headers: {
          Authorization: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzMzMzg1NTA3LCJleHAiOjE3MzMzODkxMDd9.0GAKYxjMEjRYiHU2dhLopu2QWPKBVruw63Cn4DJtTY4`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch projects');
    }
  }
}

export default ProjectService;