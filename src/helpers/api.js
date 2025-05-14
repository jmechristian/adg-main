import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import {
  listProjects,
  listDepartments,
  listDepartmentSubcategories,
  listInquirePages,
} from '@/graphql/queries';

// Handle both development and production environments
let awsconfig;
try {
  // Try to import the aws-exports file (works in development)
  awsconfig = require('../aws-exports').default;
} catch (error) {
  // Fallback for production environment
  awsconfig = {
    aws_project_region: process.env.NEXT_PUBLIC_AWS_REGION || 'us-east-1',
    aws_appsync_graphqlEndpoint: process.env.NEXT_PUBLIC_APPSYNC_ENDPOINT,
    aws_appsync_region: process.env.NEXT_PUBLIC_AWS_REGION || 'us-east-1',
    aws_appsync_authenticationType: 'API_KEY',
    aws_appsync_apiKey: process.env.NEXT_PUBLIC_APPSYNC_API_KEY,
    // Add other necessary configuration properties as needed
  };
}

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
  try {
    const response = await client.graphql({
      query: `query ListDepartments {
        listDepartments {
          items {
            id
            name
            displayOrder
          }
        }
      }`,
    });

    return response.data.listDepartments.items;
  } catch (error) {
    console.error('Error in getDepartments:', error);
    throw error;
  }
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
          subcategoryProjects {
            items {
              displayOrder
              id
              subcategory {
                name
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
        featuredProjects {
        items {
          id
          displayOrder
          department {
            name
            id
          }
          }
        }
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
            type
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

export const getInquirePage = async () => {
  const res = await client.graphql({
    query: listInquirePages,
  });
  return res.data.listInquirePages.items[0];
};

export const getStudioPage = async () => {
  const customQuery = `
    query MyQuery {
      listStudioPages {
        items {
          hero
          heroQuote
          id
          leadership {
          items {
            extra
            hidden
            id
            image
            name
            order
            title
          }
        }
        staff {
          items {
            extra
            hidden
            id
            image
            name
            order
            title
          }
        }
        title
        updatedAt
      }
      }
    }
  `;

  const res = await client.graphql({
    query: customQuery,
  });
  return res.data.listStudioPages.items[0];
};

export const getServicesPage = async () => {
  const customQuery = `
    query MyQuery {
      listServicesPages {
        items {
          createdAt
          hero
      heroQuote
      id
      title
      updatedAt
        departments {
          items {
            description
            design {
              items {
                content
                id
                order
              }
            }
            envision {
              items {
                content
                id
                order
              }
            }
            execute {
              items {
                content
                id
                order
              }
            }
            id
            image
            link
            order
            servicesPageDepartmentsId
            split
            title
          }
        }
      }
    }
  }
  `;

  const res = await client.graphql({
    query: customQuery,
  });
  return res.data.listServicesPages.items;
};
