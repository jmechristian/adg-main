/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      role
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        role
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      name
      address
      description
      latitude
      longitude
      createdAt
      updatedAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        address
        description
        latitude
        longitude
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFeaturedProject = /* GraphQL */ `
  query GetFeaturedProject($id: ID!) {
    getFeaturedProject(id: $id) {
      id
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          items {
            id
            text
            attribution
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            createdAt
            updatedAt
            projectQuotesId
          }
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          images {
            items {
              id
              url
              alt
              caption
              order
              centerX
              centerY
              zoom
              type
              createdAt
              updatedAt
              galleryImagesId
            }
            nextToken
          }
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          items {
            id
            projectID
            departmentID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subcategories {
          items {
            id
            projectID
            subcategoryID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        building_type {
          items {
            id
            projectID
            buildingTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            buildingType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        project_type {
          items {
            id
            projectID
            projectTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            projectType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            projectFeaturedProjectsId
            departmentFeaturedProjectsId
          }
          nextToken
        }
        subcategoryProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            displayOrder
            createdAt
            updatedAt
            projectSubcategoryProjectsId
            departmentSubcategoriesProjectsId
            subcategorySubcategoryProjectsId
          }
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      displayOrder
      department {
        id
        name
        projects {
          items {
            id
            projectID
            departmentID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subcategories {
          items {
            id
            departmentID
            subcategoryID
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        featuredProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            projectFeaturedProjectsId
            departmentFeaturedProjectsId
          }
          nextToken
        }
        subcategoriesProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            displayOrder
            createdAt
            updatedAt
            projectSubcategoryProjectsId
            departmentSubcategoriesProjectsId
            subcategorySubcategoryProjectsId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      projectFeaturedProjectsId
      departmentFeaturedProjectsId
    }
  }
`;
export const listFeaturedProjects = /* GraphQL */ `
  query ListFeaturedProjects(
    $filter: ModelFeaturedProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeaturedProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        project {
          id
          oldId
          name
          description
          location {
            id
            name
            address
            description
            latitude
            longitude
            createdAt
            updatedAt
          }
          locationString
          createdBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          lastUpdatedBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          featured
          link
          slug
          quote
          quoteAttribution
          quotes {
            items {
              id
              text
              attribution
              displayOrder
              createdAt
              updatedAt
              projectQuotesId
            }
            nextToken
          }
          collaborators
          size
          gridOrder
          status
          gallery {
            id
            images {
              nextToken
            }
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            createdAt
            updatedAt
            galleryProjectId
          }
          departments {
            items {
              id
              projectID
              departmentID
              createdAt
              updatedAt
            }
            nextToken
          }
          subcategories {
            items {
              id
              projectID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          building_type {
            items {
              id
              projectID
              buildingTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          project_type {
            items {
              id
              projectID
              projectTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          displayOrder
          previewLocation
          featuredProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectFeaturedProjectsId
              departmentFeaturedProjectsId
            }
            nextToken
          }
          subcategoryProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectSubcategoryProjectsId
              departmentSubcategoriesProjectsId
              subcategorySubcategoryProjectsId
            }
            nextToken
          }
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        displayOrder
        department {
          id
          name
          projects {
            items {
              id
              projectID
              departmentID
              createdAt
              updatedAt
            }
            nextToken
          }
          subcategories {
            items {
              id
              departmentID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          displayOrder
          featuredProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectFeaturedProjectsId
              departmentFeaturedProjectsId
            }
            nextToken
          }
          subcategoriesProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectSubcategoryProjectsId
              departmentSubcategoriesProjectsId
              subcategorySubcategoryProjectsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        projectFeaturedProjectsId
        departmentFeaturedProjectsId
      }
      nextToken
    }
  }
`;
export const getGallery = /* GraphQL */ `
  query GetGallery($id: ID!) {
    getGallery(id: $id) {
      id
      images {
        items {
          id
          url
          alt
          caption
          gallery {
            id
            images {
              nextToken
            }
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            createdAt
            updatedAt
            galleryProjectId
          }
          order
          centerX
          centerY
          zoom
          type
          createdAt
          updatedAt
          galleryImagesId
        }
        nextToken
      }
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          items {
            id
            text
            attribution
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            createdAt
            updatedAt
            projectQuotesId
          }
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          images {
            items {
              id
              url
              alt
              caption
              order
              centerX
              centerY
              zoom
              type
              createdAt
              updatedAt
              galleryImagesId
            }
            nextToken
          }
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          items {
            id
            projectID
            departmentID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subcategories {
          items {
            id
            projectID
            subcategoryID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        building_type {
          items {
            id
            projectID
            buildingTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            buildingType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        project_type {
          items {
            id
            projectID
            projectTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            projectType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            projectFeaturedProjectsId
            departmentFeaturedProjectsId
          }
          nextToken
        }
        subcategoryProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            displayOrder
            createdAt
            updatedAt
            projectSubcategoryProjectsId
            departmentSubcategoriesProjectsId
            subcategorySubcategoryProjectsId
          }
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      createdAt
      updatedAt
      galleryProjectId
    }
  }
`;
export const listGalleries = /* GraphQL */ `
  query ListGalleries(
    $filter: ModelGalleryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGalleries(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        images {
          items {
            id
            url
            alt
            caption
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            order
            centerX
            centerY
            zoom
            type
            createdAt
            updatedAt
            galleryImagesId
          }
          nextToken
        }
        project {
          id
          oldId
          name
          description
          location {
            id
            name
            address
            description
            latitude
            longitude
            createdAt
            updatedAt
          }
          locationString
          createdBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          lastUpdatedBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          featured
          link
          slug
          quote
          quoteAttribution
          quotes {
            items {
              id
              text
              attribution
              displayOrder
              createdAt
              updatedAt
              projectQuotesId
            }
            nextToken
          }
          collaborators
          size
          gridOrder
          status
          gallery {
            id
            images {
              nextToken
            }
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            createdAt
            updatedAt
            galleryProjectId
          }
          departments {
            items {
              id
              projectID
              departmentID
              createdAt
              updatedAt
            }
            nextToken
          }
          subcategories {
            items {
              id
              projectID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          building_type {
            items {
              id
              projectID
              buildingTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          project_type {
            items {
              id
              projectID
              projectTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          displayOrder
          previewLocation
          featuredProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectFeaturedProjectsId
              departmentFeaturedProjectsId
            }
            nextToken
          }
          subcategoryProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectSubcategoryProjectsId
              departmentSubcategoriesProjectsId
              subcategorySubcategoryProjectsId
            }
            nextToken
          }
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        createdAt
        updatedAt
        galleryProjectId
      }
      nextToken
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
      id
      oldId
      name
      description
      location {
        id
        name
        address
        description
        latitude
        longitude
        createdAt
        updatedAt
      }
      locationString
      createdBy {
        id
        name
        email
        role
        createdAt
        updatedAt
      }
      lastUpdatedBy {
        id
        name
        email
        role
        createdAt
        updatedAt
      }
      featured
      link
      slug
      quote
      quoteAttribution
      quotes {
        items {
          id
          text
          attribution
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          displayOrder
          createdAt
          updatedAt
          projectQuotesId
        }
        nextToken
      }
      collaborators
      size
      gridOrder
      status
      gallery {
        id
        images {
          items {
            id
            url
            alt
            caption
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            order
            centerX
            centerY
            zoom
            type
            createdAt
            updatedAt
            galleryImagesId
          }
          nextToken
        }
        project {
          id
          oldId
          name
          description
          location {
            id
            name
            address
            description
            latitude
            longitude
            createdAt
            updatedAt
          }
          locationString
          createdBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          lastUpdatedBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          featured
          link
          slug
          quote
          quoteAttribution
          quotes {
            items {
              id
              text
              attribution
              displayOrder
              createdAt
              updatedAt
              projectQuotesId
            }
            nextToken
          }
          collaborators
          size
          gridOrder
          status
          gallery {
            id
            images {
              nextToken
            }
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            createdAt
            updatedAt
            galleryProjectId
          }
          departments {
            items {
              id
              projectID
              departmentID
              createdAt
              updatedAt
            }
            nextToken
          }
          subcategories {
            items {
              id
              projectID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          building_type {
            items {
              id
              projectID
              buildingTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          project_type {
            items {
              id
              projectID
              projectTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          displayOrder
          previewLocation
          featuredProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectFeaturedProjectsId
              departmentFeaturedProjectsId
            }
            nextToken
          }
          subcategoryProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectSubcategoryProjectsId
              departmentSubcategoriesProjectsId
              subcategorySubcategoryProjectsId
            }
            nextToken
          }
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        createdAt
        updatedAt
        galleryProjectId
      }
      departments {
        items {
          id
          projectID
          departmentID
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          department {
            id
            name
            projects {
              nextToken
            }
            subcategories {
              nextToken
            }
            displayOrder
            featuredProjects {
              nextToken
            }
            subcategoriesProjects {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      subcategories {
        items {
          id
          projectID
          subcategoryID
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          subcategory {
            id
            name
            projects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            departments {
              nextToken
            }
            displayOrder
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      building_type {
        items {
          id
          projectID
          buildingTypeID
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          buildingType {
            id
            name
            projects {
              nextToken
            }
            displayOrder
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      project_type {
        items {
          id
          projectID
          projectTypeID
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          projectType {
            id
            name
            projects {
              nextToken
            }
            displayOrder
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      previewLocation
      featuredProjects {
        items {
          id
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          displayOrder
          department {
            id
            name
            projects {
              nextToken
            }
            subcategories {
              nextToken
            }
            displayOrder
            featuredProjects {
              nextToken
            }
            subcategoriesProjects {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          projectFeaturedProjectsId
          departmentFeaturedProjectsId
        }
        nextToken
      }
      subcategoryProjects {
        items {
          id
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          subcategory {
            id
            name
            projects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            departments {
              nextToken
            }
            displayOrder
            createdAt
            updatedAt
          }
          department {
            id
            name
            projects {
              nextToken
            }
            subcategories {
              nextToken
            }
            displayOrder
            featuredProjects {
              nextToken
            }
            subcategoriesProjects {
              nextToken
            }
            createdAt
            updatedAt
          }
          displayOrder
          createdAt
          updatedAt
          projectSubcategoryProjectsId
          departmentSubcategoriesProjectsId
          subcategorySubcategoryProjectsId
        }
        nextToken
      }
      createdAt
      updatedAt
      projectLocationId
      projectCreatedById
      projectLastUpdatedById
      projectGalleryId
    }
  }
`;
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          items {
            id
            text
            attribution
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            createdAt
            updatedAt
            projectQuotesId
          }
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          images {
            items {
              id
              url
              alt
              caption
              order
              centerX
              centerY
              zoom
              type
              createdAt
              updatedAt
              galleryImagesId
            }
            nextToken
          }
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          items {
            id
            projectID
            departmentID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subcategories {
          items {
            id
            projectID
            subcategoryID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        building_type {
          items {
            id
            projectID
            buildingTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            buildingType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        project_type {
          items {
            id
            projectID
            projectTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            projectType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            projectFeaturedProjectsId
            departmentFeaturedProjectsId
          }
          nextToken
        }
        subcategoryProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            displayOrder
            createdAt
            updatedAt
            projectSubcategoryProjectsId
            departmentSubcategoriesProjectsId
            subcategorySubcategoryProjectsId
          }
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      nextToken
    }
  }
`;
export const getQuote = /* GraphQL */ `
  query GetQuote($id: ID!) {
    getQuote(id: $id) {
      id
      text
      attribution
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          items {
            id
            text
            attribution
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            createdAt
            updatedAt
            projectQuotesId
          }
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          images {
            items {
              id
              url
              alt
              caption
              order
              centerX
              centerY
              zoom
              type
              createdAt
              updatedAt
              galleryImagesId
            }
            nextToken
          }
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          items {
            id
            projectID
            departmentID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subcategories {
          items {
            id
            projectID
            subcategoryID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        building_type {
          items {
            id
            projectID
            buildingTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            buildingType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        project_type {
          items {
            id
            projectID
            projectTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            projectType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            projectFeaturedProjectsId
            departmentFeaturedProjectsId
          }
          nextToken
        }
        subcategoryProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            displayOrder
            createdAt
            updatedAt
            projectSubcategoryProjectsId
            departmentSubcategoriesProjectsId
            subcategorySubcategoryProjectsId
          }
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      displayOrder
      createdAt
      updatedAt
      projectQuotesId
    }
  }
`;
export const listQuotes = /* GraphQL */ `
  query ListQuotes(
    $filter: ModelQuoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        attribution
        project {
          id
          oldId
          name
          description
          location {
            id
            name
            address
            description
            latitude
            longitude
            createdAt
            updatedAt
          }
          locationString
          createdBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          lastUpdatedBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          featured
          link
          slug
          quote
          quoteAttribution
          quotes {
            items {
              id
              text
              attribution
              displayOrder
              createdAt
              updatedAt
              projectQuotesId
            }
            nextToken
          }
          collaborators
          size
          gridOrder
          status
          gallery {
            id
            images {
              nextToken
            }
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            createdAt
            updatedAt
            galleryProjectId
          }
          departments {
            items {
              id
              projectID
              departmentID
              createdAt
              updatedAt
            }
            nextToken
          }
          subcategories {
            items {
              id
              projectID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          building_type {
            items {
              id
              projectID
              buildingTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          project_type {
            items {
              id
              projectID
              projectTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          displayOrder
          previewLocation
          featuredProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectFeaturedProjectsId
              departmentFeaturedProjectsId
            }
            nextToken
          }
          subcategoryProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectSubcategoryProjectsId
              departmentSubcategoriesProjectsId
              subcategorySubcategoryProjectsId
            }
            nextToken
          }
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        displayOrder
        createdAt
        updatedAt
        projectQuotesId
      }
      nextToken
    }
  }
`;
export const getDepartment = /* GraphQL */ `
  query GetDepartment($id: ID!) {
    getDepartment(id: $id) {
      id
      name
      projects {
        items {
          id
          projectID
          departmentID
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          department {
            id
            name
            projects {
              nextToken
            }
            subcategories {
              nextToken
            }
            displayOrder
            featuredProjects {
              nextToken
            }
            subcategoriesProjects {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      subcategories {
        items {
          id
          departmentID
          subcategoryID
          department {
            id
            name
            projects {
              nextToken
            }
            subcategories {
              nextToken
            }
            displayOrder
            featuredProjects {
              nextToken
            }
            subcategoriesProjects {
              nextToken
            }
            createdAt
            updatedAt
          }
          subcategory {
            id
            name
            projects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            departments {
              nextToken
            }
            displayOrder
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      featuredProjects {
        items {
          id
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          displayOrder
          department {
            id
            name
            projects {
              nextToken
            }
            subcategories {
              nextToken
            }
            displayOrder
            featuredProjects {
              nextToken
            }
            subcategoriesProjects {
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
          projectFeaturedProjectsId
          departmentFeaturedProjectsId
        }
        nextToken
      }
      subcategoriesProjects {
        items {
          id
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          subcategory {
            id
            name
            projects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            departments {
              nextToken
            }
            displayOrder
            createdAt
            updatedAt
          }
          department {
            id
            name
            projects {
              nextToken
            }
            subcategories {
              nextToken
            }
            displayOrder
            featuredProjects {
              nextToken
            }
            subcategoriesProjects {
              nextToken
            }
            createdAt
            updatedAt
          }
          displayOrder
          createdAt
          updatedAt
          projectSubcategoryProjectsId
          departmentSubcategoriesProjectsId
          subcategorySubcategoryProjectsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDepartments = /* GraphQL */ `
  query ListDepartments(
    $filter: ModelDepartmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        projects {
          items {
            id
            projectID
            departmentID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subcategories {
          items {
            id
            departmentID
            subcategoryID
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        featuredProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            projectFeaturedProjectsId
            departmentFeaturedProjectsId
          }
          nextToken
        }
        subcategoriesProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            displayOrder
            createdAt
            updatedAt
            projectSubcategoryProjectsId
            departmentSubcategoriesProjectsId
            subcategorySubcategoryProjectsId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getImageObject = /* GraphQL */ `
  query GetImageObject($id: ID!) {
    getImageObject(id: $id) {
      id
      url
      alt
      caption
      gallery {
        id
        images {
          items {
            id
            url
            alt
            caption
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            order
            centerX
            centerY
            zoom
            type
            createdAt
            updatedAt
            galleryImagesId
          }
          nextToken
        }
        project {
          id
          oldId
          name
          description
          location {
            id
            name
            address
            description
            latitude
            longitude
            createdAt
            updatedAt
          }
          locationString
          createdBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          lastUpdatedBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          featured
          link
          slug
          quote
          quoteAttribution
          quotes {
            items {
              id
              text
              attribution
              displayOrder
              createdAt
              updatedAt
              projectQuotesId
            }
            nextToken
          }
          collaborators
          size
          gridOrder
          status
          gallery {
            id
            images {
              nextToken
            }
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            createdAt
            updatedAt
            galleryProjectId
          }
          departments {
            items {
              id
              projectID
              departmentID
              createdAt
              updatedAt
            }
            nextToken
          }
          subcategories {
            items {
              id
              projectID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          building_type {
            items {
              id
              projectID
              buildingTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          project_type {
            items {
              id
              projectID
              projectTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          displayOrder
          previewLocation
          featuredProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectFeaturedProjectsId
              departmentFeaturedProjectsId
            }
            nextToken
          }
          subcategoryProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectSubcategoryProjectsId
              departmentSubcategoriesProjectsId
              subcategorySubcategoryProjectsId
            }
            nextToken
          }
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        createdAt
        updatedAt
        galleryProjectId
      }
      order
      centerX
      centerY
      zoom
      type
      createdAt
      updatedAt
      galleryImagesId
    }
  }
`;
export const listImageObjects = /* GraphQL */ `
  query ListImageObjects(
    $filter: ModelImageObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImageObjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        alt
        caption
        gallery {
          id
          images {
            items {
              id
              url
              alt
              caption
              order
              centerX
              centerY
              zoom
              type
              createdAt
              updatedAt
              galleryImagesId
            }
            nextToken
          }
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          createdAt
          updatedAt
          galleryProjectId
        }
        order
        centerX
        centerY
        zoom
        type
        createdAt
        updatedAt
        galleryImagesId
      }
      nextToken
    }
  }
`;
export const getSubcategory = /* GraphQL */ `
  query GetSubcategory($id: ID!) {
    getSubcategory(id: $id) {
      id
      name
      projects {
        items {
          id
          projectID
          subcategoryID
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          subcategory {
            id
            name
            projects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            departments {
              nextToken
            }
            displayOrder
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      subcategoryProjects {
        items {
          id
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          subcategory {
            id
            name
            projects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            departments {
              nextToken
            }
            displayOrder
            createdAt
            updatedAt
          }
          department {
            id
            name
            projects {
              nextToken
            }
            subcategories {
              nextToken
            }
            displayOrder
            featuredProjects {
              nextToken
            }
            subcategoriesProjects {
              nextToken
            }
            createdAt
            updatedAt
          }
          displayOrder
          createdAt
          updatedAt
          projectSubcategoryProjectsId
          departmentSubcategoriesProjectsId
          subcategorySubcategoryProjectsId
        }
        nextToken
      }
      departments {
        items {
          id
          departmentID
          subcategoryID
          department {
            id
            name
            projects {
              nextToken
            }
            subcategories {
              nextToken
            }
            displayOrder
            featuredProjects {
              nextToken
            }
            subcategoriesProjects {
              nextToken
            }
            createdAt
            updatedAt
          }
          subcategory {
            id
            name
            projects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            departments {
              nextToken
            }
            displayOrder
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      createdAt
      updatedAt
    }
  }
`;
export const listSubcategories = /* GraphQL */ `
  query ListSubcategories(
    $filter: ModelSubcategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubcategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        projects {
          items {
            id
            projectID
            subcategoryID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subcategoryProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            displayOrder
            createdAt
            updatedAt
            projectSubcategoryProjectsId
            departmentSubcategoriesProjectsId
            subcategorySubcategoryProjectsId
          }
          nextToken
        }
        departments {
          items {
            id
            departmentID
            subcategoryID
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSubcategoryProject = /* GraphQL */ `
  query GetSubcategoryProject($id: ID!) {
    getSubcategoryProject(id: $id) {
      id
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          items {
            id
            text
            attribution
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            createdAt
            updatedAt
            projectQuotesId
          }
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          images {
            items {
              id
              url
              alt
              caption
              order
              centerX
              centerY
              zoom
              type
              createdAt
              updatedAt
              galleryImagesId
            }
            nextToken
          }
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          items {
            id
            projectID
            departmentID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subcategories {
          items {
            id
            projectID
            subcategoryID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        building_type {
          items {
            id
            projectID
            buildingTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            buildingType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        project_type {
          items {
            id
            projectID
            projectTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            projectType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            projectFeaturedProjectsId
            departmentFeaturedProjectsId
          }
          nextToken
        }
        subcategoryProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            displayOrder
            createdAt
            updatedAt
            projectSubcategoryProjectsId
            departmentSubcategoriesProjectsId
            subcategorySubcategoryProjectsId
          }
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      subcategory {
        id
        name
        projects {
          items {
            id
            projectID
            subcategoryID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subcategoryProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            displayOrder
            createdAt
            updatedAt
            projectSubcategoryProjectsId
            departmentSubcategoriesProjectsId
            subcategorySubcategoryProjectsId
          }
          nextToken
        }
        departments {
          items {
            id
            departmentID
            subcategoryID
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      department {
        id
        name
        projects {
          items {
            id
            projectID
            departmentID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subcategories {
          items {
            id
            departmentID
            subcategoryID
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        featuredProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            projectFeaturedProjectsId
            departmentFeaturedProjectsId
          }
          nextToken
        }
        subcategoriesProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            displayOrder
            createdAt
            updatedAt
            projectSubcategoryProjectsId
            departmentSubcategoriesProjectsId
            subcategorySubcategoryProjectsId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      displayOrder
      createdAt
      updatedAt
      projectSubcategoryProjectsId
      departmentSubcategoriesProjectsId
      subcategorySubcategoryProjectsId
    }
  }
`;
export const listSubcategoryProjects = /* GraphQL */ `
  query ListSubcategoryProjects(
    $filter: ModelSubcategoryProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubcategoryProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        project {
          id
          oldId
          name
          description
          location {
            id
            name
            address
            description
            latitude
            longitude
            createdAt
            updatedAt
          }
          locationString
          createdBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          lastUpdatedBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          featured
          link
          slug
          quote
          quoteAttribution
          quotes {
            items {
              id
              text
              attribution
              displayOrder
              createdAt
              updatedAt
              projectQuotesId
            }
            nextToken
          }
          collaborators
          size
          gridOrder
          status
          gallery {
            id
            images {
              nextToken
            }
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            createdAt
            updatedAt
            galleryProjectId
          }
          departments {
            items {
              id
              projectID
              departmentID
              createdAt
              updatedAt
            }
            nextToken
          }
          subcategories {
            items {
              id
              projectID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          building_type {
            items {
              id
              projectID
              buildingTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          project_type {
            items {
              id
              projectID
              projectTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          displayOrder
          previewLocation
          featuredProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectFeaturedProjectsId
              departmentFeaturedProjectsId
            }
            nextToken
          }
          subcategoryProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectSubcategoryProjectsId
              departmentSubcategoriesProjectsId
              subcategorySubcategoryProjectsId
            }
            nextToken
          }
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        subcategory {
          id
          name
          projects {
            items {
              id
              projectID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          subcategoryProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectSubcategoryProjectsId
              departmentSubcategoriesProjectsId
              subcategorySubcategoryProjectsId
            }
            nextToken
          }
          departments {
            items {
              id
              departmentID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          displayOrder
          createdAt
          updatedAt
        }
        department {
          id
          name
          projects {
            items {
              id
              projectID
              departmentID
              createdAt
              updatedAt
            }
            nextToken
          }
          subcategories {
            items {
              id
              departmentID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          displayOrder
          featuredProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectFeaturedProjectsId
              departmentFeaturedProjectsId
            }
            nextToken
          }
          subcategoriesProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectSubcategoryProjectsId
              departmentSubcategoriesProjectsId
              subcategorySubcategoryProjectsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        displayOrder
        createdAt
        updatedAt
        projectSubcategoryProjectsId
        departmentSubcategoriesProjectsId
        subcategorySubcategoryProjectsId
      }
      nextToken
    }
  }
`;
export const getBuildingType = /* GraphQL */ `
  query GetBuildingType($id: ID!) {
    getBuildingType(id: $id) {
      id
      name
      projects {
        items {
          id
          projectID
          buildingTypeID
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          buildingType {
            id
            name
            projects {
              nextToken
            }
            displayOrder
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      createdAt
      updatedAt
    }
  }
`;
export const listBuildingTypes = /* GraphQL */ `
  query ListBuildingTypes(
    $filter: ModelBuildingTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBuildingTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        projects {
          items {
            id
            projectID
            buildingTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            buildingType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProjectType = /* GraphQL */ `
  query GetProjectType($id: ID!) {
    getProjectType(id: $id) {
      id
      name
      projects {
        items {
          id
          projectID
          projectTypeID
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          projectType {
            id
            name
            projects {
              nextToken
            }
            displayOrder
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      displayOrder
      createdAt
      updatedAt
    }
  }
`;
export const listProjectTypes = /* GraphQL */ `
  query ListProjectTypes(
    $filter: ModelProjectTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        projects {
          items {
            id
            projectID
            projectTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            projectType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getServicesPage = /* GraphQL */ `
  query GetServicesPage($id: ID!) {
    getServicesPage(id: $id) {
      id
      title
      hero
      heroQuote
      departments {
        items {
          id
          title
          image
          description
          link
          split
          envision {
            items {
              id
              content
              order
              createdAt
              updatedAt
              departmentSummaryEnvisionId
              departmentSummaryDesignId
              departmentSummaryExecuteId
            }
            nextToken
          }
          design {
            items {
              id
              content
              order
              createdAt
              updatedAt
              departmentSummaryEnvisionId
              departmentSummaryDesignId
              departmentSummaryExecuteId
            }
            nextToken
          }
          execute {
            items {
              id
              content
              order
              createdAt
              updatedAt
              departmentSummaryEnvisionId
              departmentSummaryDesignId
              departmentSummaryExecuteId
            }
            nextToken
          }
          order
          hidden
          createdAt
          updatedAt
          servicesPageDepartmentsId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listServicesPages = /* GraphQL */ `
  query ListServicesPages(
    $filter: ModelServicesPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServicesPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        hero
        heroQuote
        departments {
          items {
            id
            title
            image
            description
            link
            split
            envision {
              nextToken
            }
            design {
              nextToken
            }
            execute {
              nextToken
            }
            order
            hidden
            createdAt
            updatedAt
            servicesPageDepartmentsId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDepartmentSummary = /* GraphQL */ `
  query GetDepartmentSummary($id: ID!) {
    getDepartmentSummary(id: $id) {
      id
      title
      image
      description
      link
      split
      envision {
        items {
          id
          content
          order
          createdAt
          updatedAt
          departmentSummaryEnvisionId
          departmentSummaryDesignId
          departmentSummaryExecuteId
        }
        nextToken
      }
      design {
        items {
          id
          content
          order
          createdAt
          updatedAt
          departmentSummaryEnvisionId
          departmentSummaryDesignId
          departmentSummaryExecuteId
        }
        nextToken
      }
      execute {
        items {
          id
          content
          order
          createdAt
          updatedAt
          departmentSummaryEnvisionId
          departmentSummaryDesignId
          departmentSummaryExecuteId
        }
        nextToken
      }
      order
      hidden
      createdAt
      updatedAt
      servicesPageDepartmentsId
    }
  }
`;
export const listDepartmentSummaries = /* GraphQL */ `
  query ListDepartmentSummaries(
    $filter: ModelDepartmentSummaryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartmentSummaries(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        image
        description
        link
        split
        envision {
          items {
            id
            content
            order
            createdAt
            updatedAt
            departmentSummaryEnvisionId
            departmentSummaryDesignId
            departmentSummaryExecuteId
          }
          nextToken
        }
        design {
          items {
            id
            content
            order
            createdAt
            updatedAt
            departmentSummaryEnvisionId
            departmentSummaryDesignId
            departmentSummaryExecuteId
          }
          nextToken
        }
        execute {
          items {
            id
            content
            order
            createdAt
            updatedAt
            departmentSummaryEnvisionId
            departmentSummaryDesignId
            departmentSummaryExecuteId
          }
          nextToken
        }
        order
        hidden
        createdAt
        updatedAt
        servicesPageDepartmentsId
      }
      nextToken
    }
  }
`;
export const getDepartmentSummaryItem = /* GraphQL */ `
  query GetDepartmentSummaryItem($id: ID!) {
    getDepartmentSummaryItem(id: $id) {
      id
      content
      order
      createdAt
      updatedAt
      departmentSummaryEnvisionId
      departmentSummaryDesignId
      departmentSummaryExecuteId
    }
  }
`;
export const listDepartmentSummaryItems = /* GraphQL */ `
  query ListDepartmentSummaryItems(
    $filter: ModelDepartmentSummaryItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartmentSummaryItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        order
        createdAt
        updatedAt
        departmentSummaryEnvisionId
        departmentSummaryDesignId
        departmentSummaryExecuteId
      }
      nextToken
    }
  }
`;
export const getStudioPage = /* GraphQL */ `
  query GetStudioPage($id: ID!) {
    getStudioPage(id: $id) {
      id
      title
      hero
      heroQuote
      leadership {
        items {
          id
          name
          image
          title
          order
          extra
          hidden
          createdAt
          updatedAt
          studioPageLeadershipId
          studioPageStaffId
        }
        nextToken
      }
      staff {
        items {
          id
          name
          image
          title
          order
          extra
          hidden
          createdAt
          updatedAt
          studioPageLeadershipId
          studioPageStaffId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listStudioPages = /* GraphQL */ `
  query ListStudioPages(
    $filter: ModelStudioPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudioPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        hero
        heroQuote
        leadership {
          items {
            id
            name
            image
            title
            order
            extra
            hidden
            createdAt
            updatedAt
            studioPageLeadershipId
            studioPageStaffId
          }
          nextToken
        }
        staff {
          items {
            id
            name
            image
            title
            order
            extra
            hidden
            createdAt
            updatedAt
            studioPageLeadershipId
            studioPageStaffId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStaffMember = /* GraphQL */ `
  query GetStaffMember($id: ID!) {
    getStaffMember(id: $id) {
      id
      name
      image
      title
      order
      extra
      hidden
      createdAt
      updatedAt
      studioPageLeadershipId
      studioPageStaffId
    }
  }
`;
export const listStaffMembers = /* GraphQL */ `
  query ListStaffMembers(
    $filter: ModelStaffMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStaffMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        image
        title
        order
        extra
        hidden
        createdAt
        updatedAt
        studioPageLeadershipId
        studioPageStaffId
      }
      nextToken
    }
  }
`;
export const getInquirePage = /* GraphQL */ `
  query GetInquirePage($id: ID!) {
    getInquirePage(id: $id) {
      id
      title
      hero
      heroQuote
      createdAt
      updatedAt
    }
  }
`;
export const listInquirePages = /* GraphQL */ `
  query ListInquirePages(
    $filter: ModelInquirePageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInquirePages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        hero
        heroQuote
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHomePageFeature = /* GraphQL */ `
  query GetHomePageFeature($id: ID!) {
    getHomePageFeature(id: $id) {
      id
      title
      image
      link
      linkText
      callout
      order
      createdAt
      updatedAt
      homePageFeaturesId
    }
  }
`;
export const listHomePageFeatures = /* GraphQL */ `
  query ListHomePageFeatures(
    $filter: ModelHomePageFeatureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomePageFeatures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        image
        link
        linkText
        callout
        order
        createdAt
        updatedAt
        homePageFeaturesId
      }
      nextToken
    }
  }
`;
export const getHomePage = /* GraphQL */ `
  query GetHomePage($id: ID!) {
    getHomePage(id: $id) {
      id
      title
      hero
      heroQuote
      introText
      features {
        items {
          id
          title
          image
          link
          linkText
          callout
          order
          createdAt
          updatedAt
          homePageFeaturesId
        }
        nextToken
      }
      featureProjects {
        items {
          id
          projectTitle
          projectLink
          projectImage
          projectLocation
          order
          createdAt
          updatedAt
          homePageFeatureProjectsId
        }
        nextToken
      }
      studioText
      studioLink
      studioImage
      createdAt
      updatedAt
    }
  }
`;
export const listHomePages = /* GraphQL */ `
  query ListHomePages(
    $filter: ModelHomePageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomePages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        hero
        heroQuote
        introText
        features {
          items {
            id
            title
            image
            link
            linkText
            callout
            order
            createdAt
            updatedAt
            homePageFeaturesId
          }
          nextToken
        }
        featureProjects {
          items {
            id
            projectTitle
            projectLink
            projectImage
            projectLocation
            order
            createdAt
            updatedAt
            homePageFeatureProjectsId
          }
          nextToken
        }
        studioText
        studioLink
        studioImage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHomePageFeatureProject = /* GraphQL */ `
  query GetHomePageFeatureProject($id: ID!) {
    getHomePageFeatureProject(id: $id) {
      id
      projectTitle
      projectLink
      projectImage
      projectLocation
      order
      createdAt
      updatedAt
      homePageFeatureProjectsId
    }
  }
`;
export const listHomePageFeatureProjects = /* GraphQL */ `
  query ListHomePageFeatureProjects(
    $filter: ModelHomePageFeatureProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHomePageFeatureProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectTitle
        projectLink
        projectImage
        projectLocation
        order
        createdAt
        updatedAt
        homePageFeatureProjectsId
      }
      nextToken
    }
  }
`;
export const getProjectDepartments = /* GraphQL */ `
  query GetProjectDepartments($id: ID!) {
    getProjectDepartments(id: $id) {
      id
      projectID
      departmentID
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          items {
            id
            text
            attribution
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            createdAt
            updatedAt
            projectQuotesId
          }
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          images {
            items {
              id
              url
              alt
              caption
              order
              centerX
              centerY
              zoom
              type
              createdAt
              updatedAt
              galleryImagesId
            }
            nextToken
          }
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          items {
            id
            projectID
            departmentID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subcategories {
          items {
            id
            projectID
            subcategoryID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        building_type {
          items {
            id
            projectID
            buildingTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            buildingType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        project_type {
          items {
            id
            projectID
            projectTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            projectType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            projectFeaturedProjectsId
            departmentFeaturedProjectsId
          }
          nextToken
        }
        subcategoryProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            displayOrder
            createdAt
            updatedAt
            projectSubcategoryProjectsId
            departmentSubcategoriesProjectsId
            subcategorySubcategoryProjectsId
          }
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      department {
        id
        name
        projects {
          items {
            id
            projectID
            departmentID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subcategories {
          items {
            id
            departmentID
            subcategoryID
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        featuredProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            projectFeaturedProjectsId
            departmentFeaturedProjectsId
          }
          nextToken
        }
        subcategoriesProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            displayOrder
            createdAt
            updatedAt
            projectSubcategoryProjectsId
            departmentSubcategoriesProjectsId
            subcategorySubcategoryProjectsId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProjectDepartments = /* GraphQL */ `
  query ListProjectDepartments(
    $filter: ModelProjectDepartmentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectDepartments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        departmentID
        project {
          id
          oldId
          name
          description
          location {
            id
            name
            address
            description
            latitude
            longitude
            createdAt
            updatedAt
          }
          locationString
          createdBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          lastUpdatedBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          featured
          link
          slug
          quote
          quoteAttribution
          quotes {
            items {
              id
              text
              attribution
              displayOrder
              createdAt
              updatedAt
              projectQuotesId
            }
            nextToken
          }
          collaborators
          size
          gridOrder
          status
          gallery {
            id
            images {
              nextToken
            }
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            createdAt
            updatedAt
            galleryProjectId
          }
          departments {
            items {
              id
              projectID
              departmentID
              createdAt
              updatedAt
            }
            nextToken
          }
          subcategories {
            items {
              id
              projectID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          building_type {
            items {
              id
              projectID
              buildingTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          project_type {
            items {
              id
              projectID
              projectTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          displayOrder
          previewLocation
          featuredProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectFeaturedProjectsId
              departmentFeaturedProjectsId
            }
            nextToken
          }
          subcategoryProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectSubcategoryProjectsId
              departmentSubcategoriesProjectsId
              subcategorySubcategoryProjectsId
            }
            nextToken
          }
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        department {
          id
          name
          projects {
            items {
              id
              projectID
              departmentID
              createdAt
              updatedAt
            }
            nextToken
          }
          subcategories {
            items {
              id
              departmentID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          displayOrder
          featuredProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectFeaturedProjectsId
              departmentFeaturedProjectsId
            }
            nextToken
          }
          subcategoriesProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectSubcategoryProjectsId
              departmentSubcategoriesProjectsId
              subcategorySubcategoryProjectsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProjectSubcategories = /* GraphQL */ `
  query GetProjectSubcategories($id: ID!) {
    getProjectSubcategories(id: $id) {
      id
      projectID
      subcategoryID
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          items {
            id
            text
            attribution
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            createdAt
            updatedAt
            projectQuotesId
          }
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          images {
            items {
              id
              url
              alt
              caption
              order
              centerX
              centerY
              zoom
              type
              createdAt
              updatedAt
              galleryImagesId
            }
            nextToken
          }
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          items {
            id
            projectID
            departmentID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subcategories {
          items {
            id
            projectID
            subcategoryID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        building_type {
          items {
            id
            projectID
            buildingTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            buildingType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        project_type {
          items {
            id
            projectID
            projectTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            projectType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            projectFeaturedProjectsId
            departmentFeaturedProjectsId
          }
          nextToken
        }
        subcategoryProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            displayOrder
            createdAt
            updatedAt
            projectSubcategoryProjectsId
            departmentSubcategoriesProjectsId
            subcategorySubcategoryProjectsId
          }
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      subcategory {
        id
        name
        projects {
          items {
            id
            projectID
            subcategoryID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subcategoryProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            displayOrder
            createdAt
            updatedAt
            projectSubcategoryProjectsId
            departmentSubcategoriesProjectsId
            subcategorySubcategoryProjectsId
          }
          nextToken
        }
        departments {
          items {
            id
            departmentID
            subcategoryID
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProjectSubcategories = /* GraphQL */ `
  query ListProjectSubcategories(
    $filter: ModelProjectSubcategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectSubcategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        subcategoryID
        project {
          id
          oldId
          name
          description
          location {
            id
            name
            address
            description
            latitude
            longitude
            createdAt
            updatedAt
          }
          locationString
          createdBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          lastUpdatedBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          featured
          link
          slug
          quote
          quoteAttribution
          quotes {
            items {
              id
              text
              attribution
              displayOrder
              createdAt
              updatedAt
              projectQuotesId
            }
            nextToken
          }
          collaborators
          size
          gridOrder
          status
          gallery {
            id
            images {
              nextToken
            }
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            createdAt
            updatedAt
            galleryProjectId
          }
          departments {
            items {
              id
              projectID
              departmentID
              createdAt
              updatedAt
            }
            nextToken
          }
          subcategories {
            items {
              id
              projectID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          building_type {
            items {
              id
              projectID
              buildingTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          project_type {
            items {
              id
              projectID
              projectTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          displayOrder
          previewLocation
          featuredProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectFeaturedProjectsId
              departmentFeaturedProjectsId
            }
            nextToken
          }
          subcategoryProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectSubcategoryProjectsId
              departmentSubcategoriesProjectsId
              subcategorySubcategoryProjectsId
            }
            nextToken
          }
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        subcategory {
          id
          name
          projects {
            items {
              id
              projectID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          subcategoryProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectSubcategoryProjectsId
              departmentSubcategoriesProjectsId
              subcategorySubcategoryProjectsId
            }
            nextToken
          }
          departments {
            items {
              id
              departmentID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          displayOrder
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProjectBuildingTypes = /* GraphQL */ `
  query GetProjectBuildingTypes($id: ID!) {
    getProjectBuildingTypes(id: $id) {
      id
      projectID
      buildingTypeID
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          items {
            id
            text
            attribution
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            createdAt
            updatedAt
            projectQuotesId
          }
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          images {
            items {
              id
              url
              alt
              caption
              order
              centerX
              centerY
              zoom
              type
              createdAt
              updatedAt
              galleryImagesId
            }
            nextToken
          }
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          items {
            id
            projectID
            departmentID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subcategories {
          items {
            id
            projectID
            subcategoryID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        building_type {
          items {
            id
            projectID
            buildingTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            buildingType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        project_type {
          items {
            id
            projectID
            projectTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            projectType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            projectFeaturedProjectsId
            departmentFeaturedProjectsId
          }
          nextToken
        }
        subcategoryProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            displayOrder
            createdAt
            updatedAt
            projectSubcategoryProjectsId
            departmentSubcategoriesProjectsId
            subcategorySubcategoryProjectsId
          }
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      buildingType {
        id
        name
        projects {
          items {
            id
            projectID
            buildingTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            buildingType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProjectBuildingTypes = /* GraphQL */ `
  query ListProjectBuildingTypes(
    $filter: ModelProjectBuildingTypesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectBuildingTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        buildingTypeID
        project {
          id
          oldId
          name
          description
          location {
            id
            name
            address
            description
            latitude
            longitude
            createdAt
            updatedAt
          }
          locationString
          createdBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          lastUpdatedBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          featured
          link
          slug
          quote
          quoteAttribution
          quotes {
            items {
              id
              text
              attribution
              displayOrder
              createdAt
              updatedAt
              projectQuotesId
            }
            nextToken
          }
          collaborators
          size
          gridOrder
          status
          gallery {
            id
            images {
              nextToken
            }
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            createdAt
            updatedAt
            galleryProjectId
          }
          departments {
            items {
              id
              projectID
              departmentID
              createdAt
              updatedAt
            }
            nextToken
          }
          subcategories {
            items {
              id
              projectID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          building_type {
            items {
              id
              projectID
              buildingTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          project_type {
            items {
              id
              projectID
              projectTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          displayOrder
          previewLocation
          featuredProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectFeaturedProjectsId
              departmentFeaturedProjectsId
            }
            nextToken
          }
          subcategoryProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectSubcategoryProjectsId
              departmentSubcategoriesProjectsId
              subcategorySubcategoryProjectsId
            }
            nextToken
          }
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        buildingType {
          id
          name
          projects {
            items {
              id
              projectID
              buildingTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          displayOrder
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProjectProjectTypes = /* GraphQL */ `
  query GetProjectProjectTypes($id: ID!) {
    getProjectProjectTypes(id: $id) {
      id
      projectID
      projectTypeID
      project {
        id
        oldId
        name
        description
        location {
          id
          name
          address
          description
          latitude
          longitude
          createdAt
          updatedAt
        }
        locationString
        createdBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        lastUpdatedBy {
          id
          name
          email
          role
          createdAt
          updatedAt
        }
        featured
        link
        slug
        quote
        quoteAttribution
        quotes {
          items {
            id
            text
            attribution
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            createdAt
            updatedAt
            projectQuotesId
          }
          nextToken
        }
        collaborators
        size
        gridOrder
        status
        gallery {
          id
          images {
            items {
              id
              url
              alt
              caption
              order
              centerX
              centerY
              zoom
              type
              createdAt
              updatedAt
              galleryImagesId
            }
            nextToken
          }
          project {
            id
            oldId
            name
            description
            location {
              id
              name
              address
              description
              latitude
              longitude
              createdAt
              updatedAt
            }
            locationString
            createdBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            lastUpdatedBy {
              id
              name
              email
              role
              createdAt
              updatedAt
            }
            featured
            link
            slug
            quote
            quoteAttribution
            quotes {
              nextToken
            }
            collaborators
            size
            gridOrder
            status
            gallery {
              id
              createdAt
              updatedAt
              galleryProjectId
            }
            departments {
              nextToken
            }
            subcategories {
              nextToken
            }
            building_type {
              nextToken
            }
            project_type {
              nextToken
            }
            displayOrder
            previewLocation
            featuredProjects {
              nextToken
            }
            subcategoryProjects {
              nextToken
            }
            createdAt
            updatedAt
            projectLocationId
            projectCreatedById
            projectLastUpdatedById
            projectGalleryId
          }
          createdAt
          updatedAt
          galleryProjectId
        }
        departments {
          items {
            id
            projectID
            departmentID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subcategories {
          items {
            id
            projectID
            subcategoryID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        building_type {
          items {
            id
            projectID
            buildingTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            buildingType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        project_type {
          items {
            id
            projectID
            projectTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            projectType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        previewLocation
        featuredProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            projectFeaturedProjectsId
            departmentFeaturedProjectsId
          }
          nextToken
        }
        subcategoryProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            displayOrder
            createdAt
            updatedAt
            projectSubcategoryProjectsId
            departmentSubcategoriesProjectsId
            subcategorySubcategoryProjectsId
          }
          nextToken
        }
        createdAt
        updatedAt
        projectLocationId
        projectCreatedById
        projectLastUpdatedById
        projectGalleryId
      }
      projectType {
        id
        name
        projects {
          items {
            id
            projectID
            projectTypeID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            projectType {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listProjectProjectTypes = /* GraphQL */ `
  query ListProjectProjectTypes(
    $filter: ModelProjectProjectTypesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectProjectTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        projectID
        projectTypeID
        project {
          id
          oldId
          name
          description
          location {
            id
            name
            address
            description
            latitude
            longitude
            createdAt
            updatedAt
          }
          locationString
          createdBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          lastUpdatedBy {
            id
            name
            email
            role
            createdAt
            updatedAt
          }
          featured
          link
          slug
          quote
          quoteAttribution
          quotes {
            items {
              id
              text
              attribution
              displayOrder
              createdAt
              updatedAt
              projectQuotesId
            }
            nextToken
          }
          collaborators
          size
          gridOrder
          status
          gallery {
            id
            images {
              nextToken
            }
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            createdAt
            updatedAt
            galleryProjectId
          }
          departments {
            items {
              id
              projectID
              departmentID
              createdAt
              updatedAt
            }
            nextToken
          }
          subcategories {
            items {
              id
              projectID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          building_type {
            items {
              id
              projectID
              buildingTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          project_type {
            items {
              id
              projectID
              projectTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          displayOrder
          previewLocation
          featuredProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectFeaturedProjectsId
              departmentFeaturedProjectsId
            }
            nextToken
          }
          subcategoryProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectSubcategoryProjectsId
              departmentSubcategoriesProjectsId
              subcategorySubcategoryProjectsId
            }
            nextToken
          }
          createdAt
          updatedAt
          projectLocationId
          projectCreatedById
          projectLastUpdatedById
          projectGalleryId
        }
        projectType {
          id
          name
          projects {
            items {
              id
              projectID
              projectTypeID
              createdAt
              updatedAt
            }
            nextToken
          }
          displayOrder
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDepartmentSubcategories = /* GraphQL */ `
  query GetDepartmentSubcategories($id: ID!) {
    getDepartmentSubcategories(id: $id) {
      id
      departmentID
      subcategoryID
      department {
        id
        name
        projects {
          items {
            id
            projectID
            departmentID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subcategories {
          items {
            id
            departmentID
            subcategoryID
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        featuredProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            displayOrder
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            projectFeaturedProjectsId
            departmentFeaturedProjectsId
          }
          nextToken
        }
        subcategoriesProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            displayOrder
            createdAt
            updatedAt
            projectSubcategoryProjectsId
            departmentSubcategoriesProjectsId
            subcategorySubcategoryProjectsId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      subcategory {
        id
        name
        projects {
          items {
            id
            projectID
            subcategoryID
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        subcategoryProjects {
          items {
            id
            project {
              id
              oldId
              name
              description
              locationString
              featured
              link
              slug
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
              previewLocation
              createdAt
              updatedAt
              projectLocationId
              projectCreatedById
              projectLastUpdatedById
              projectGalleryId
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            displayOrder
            createdAt
            updatedAt
            projectSubcategoryProjectsId
            departmentSubcategoriesProjectsId
            subcategorySubcategoryProjectsId
          }
          nextToken
        }
        departments {
          items {
            id
            departmentID
            subcategoryID
            department {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            subcategory {
              id
              name
              displayOrder
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        displayOrder
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listDepartmentSubcategories = /* GraphQL */ `
  query ListDepartmentSubcategories(
    $filter: ModelDepartmentSubcategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDepartmentSubcategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        departmentID
        subcategoryID
        department {
          id
          name
          projects {
            items {
              id
              projectID
              departmentID
              createdAt
              updatedAt
            }
            nextToken
          }
          subcategories {
            items {
              id
              departmentID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          displayOrder
          featuredProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectFeaturedProjectsId
              departmentFeaturedProjectsId
            }
            nextToken
          }
          subcategoriesProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectSubcategoryProjectsId
              departmentSubcategoriesProjectsId
              subcategorySubcategoryProjectsId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        subcategory {
          id
          name
          projects {
            items {
              id
              projectID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          subcategoryProjects {
            items {
              id
              displayOrder
              createdAt
              updatedAt
              projectSubcategoryProjectsId
              departmentSubcategoriesProjectsId
              subcategorySubcategoryProjectsId
            }
            nextToken
          }
          departments {
            items {
              id
              departmentID
              subcategoryID
              createdAt
              updatedAt
            }
            nextToken
          }
          displayOrder
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
