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

export const getPublishedProjects = async () => {
  const response = await client.graphql({
    query: `query MyQuery {
      listProjects(filter: {status: {eq: PUBLISHED}}, limit: 500) {
        items {
          departments {
          items {
            departmentID
            id
            department {
              name
              id
              displayOrder
            }
          }
        }
        displayOrder
        featured
        gallery {
          images {
            items {
              alt
              caption
              centerX
              centerY
              id
              order
              url
            }
          }
        }
        gridOrder
        name
        id
        link
        locationString
        previewLocation
        oldId
        project_type {
          items {
            id
            projectID
            projectTypeID
            projectType {
              name
              id
              displayOrder
            }
          }
        }
        status
        subcategories {
          items {
            id
            subcategory {
              id
              name
              displayOrder
            }
            subcategoryID
          }
        }
      }
    }
  }`,
  });
  return response.data.listProjects.items;
};

export const getProjectById = async (id) => {
  const response = await client.graphql({
    query: `query MyQuery {
      getProject(id: "${id}") {
        collaborators
        building_type {
        items {
          buildingTypeID
          id
          buildingType {
            id
            name
          }
        }
      }
      departments {
        items {
          department {
            id
            name
          }
        }
      }
      description
      gallery {
        images {
          items {
            alt
            caption
            centerX
            centerY
            id
            order
            url
          }
        }
      }
      id
      locationString
      name
      previewLocation
      project_type {
        items {
          projectType {
            id
            name
          }
        }
      }
      quotes {
        items {
          attribution
          displayOrder
          id
          text
        }
      }
      size
      slug
      status
      subcategories {
        items {
          subcategory {
            name
            id
          }
        }
      }
    }
    }`,
  });
  return response.data.getProject;
};
