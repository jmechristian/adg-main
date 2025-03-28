import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import awsconfig from '../aws-exports';
import {
  listProjects,
  listDepartments,
  listDepartmentSubcategories,
} from '@/graphql/queries';
Amplify.configure(awsconfig);

const client = generateClient({
  authMode: 'apiKey',
});

export const getAllProjects = async () => {
  const response = await client.graphql({
    query: listProjects,
    variables: {
      limit: 400,
    },
  });
  return response.data;
};

export const getDepartments = async () => {
  const response = await client.graphql({
    query: listDepartments,
  });
  return response.data.listDepartments.items;
};

export const getSubcategoriesByDepartment = async (departmentId) => {
  const response = await client.graphql({
    query: `query MyQuery($departmentID: ID!) {
      listDepartmentSubcategories(filter: {departmentID: {eq: $departmentID}}) {
        items {
          id
          departmentID
          subcategoryID
          subcategory {
            id
            name
          }
        }
      }
    }`,
    variables: {
      departmentID: departmentId,
    },
  });
  return response.data.listDepartmentSubcategories.items;
};

export const getFullImageUrl = (url) => {
  if (!url) return url;
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  return `https://adgadmin170407-dev.s3.us-east-1.amazonaws.com/public/${url}`;
};
