/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      email
      role
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      email
      role
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      email
      role
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateGallery = /* GraphQL */ `
  subscription OnCreateGallery {
    onCreateGallery {
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
        quote
        quoteAttribution
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
            quote
            quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
export const onUpdateGallery = /* GraphQL */ `
  subscription OnUpdateGallery {
    onUpdateGallery {
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
        quote
        quoteAttribution
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
            quote
            quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
export const onDeleteGallery = /* GraphQL */ `
  subscription OnDeleteGallery {
    onDeleteGallery {
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
        quote
        quoteAttribution
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
            quote
            quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject {
    onCreateProject {
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
      quote
      quoteAttribution
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
          quote
          quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
            quote
            quoteAttribution
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
            quote
            quoteAttribution
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
            quote
            quoteAttribution
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
            quote
            quoteAttribution
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
      projectLocationId
      projectCreatedById
      projectLastUpdatedById
      projectGalleryId
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject {
    onUpdateProject {
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
      quote
      quoteAttribution
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
          quote
          quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
            quote
            quoteAttribution
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
            quote
            quoteAttribution
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
            quote
            quoteAttribution
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
            quote
            quoteAttribution
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
      projectLocationId
      projectCreatedById
      projectLastUpdatedById
      projectGalleryId
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject {
    onDeleteProject {
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
      quote
      quoteAttribution
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
          quote
          quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
            quote
            quoteAttribution
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
            quote
            quoteAttribution
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
            quote
            quoteAttribution
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
            quote
            quoteAttribution
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
      projectLocationId
      projectCreatedById
      projectLastUpdatedById
      projectGalleryId
    }
  }
`;
export const onCreateDepartment = /* GraphQL */ `
  subscription OnCreateDepartment {
    onCreateDepartment {
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
            quote
            quoteAttribution
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
            createdAt
            updatedAt
          }
          subcategory {
            id
            name
            projects {
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
export const onUpdateDepartment = /* GraphQL */ `
  subscription OnUpdateDepartment {
    onUpdateDepartment {
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
            quote
            quoteAttribution
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
            createdAt
            updatedAt
          }
          subcategory {
            id
            name
            projects {
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
export const onDeleteDepartment = /* GraphQL */ `
  subscription OnDeleteDepartment {
    onDeleteDepartment {
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
            quote
            quoteAttribution
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
            createdAt
            updatedAt
          }
          subcategory {
            id
            name
            projects {
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
export const onCreateImageObject = /* GraphQL */ `
  subscription OnCreateImageObject {
    onCreateImageObject {
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
          quote
          quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
      createdAt
      updatedAt
      galleryImagesId
    }
  }
`;
export const onUpdateImageObject = /* GraphQL */ `
  subscription OnUpdateImageObject {
    onUpdateImageObject {
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
          quote
          quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
      createdAt
      updatedAt
      galleryImagesId
    }
  }
`;
export const onDeleteImageObject = /* GraphQL */ `
  subscription OnDeleteImageObject {
    onDeleteImageObject {
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
          quote
          quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
      createdAt
      updatedAt
      galleryImagesId
    }
  }
`;
export const onCreateSubcategory = /* GraphQL */ `
  subscription OnCreateSubcategory {
    onCreateSubcategory {
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
            quote
            quoteAttribution
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
            createdAt
            updatedAt
          }
          subcategory {
            id
            name
            projects {
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
export const onUpdateSubcategory = /* GraphQL */ `
  subscription OnUpdateSubcategory {
    onUpdateSubcategory {
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
            quote
            quoteAttribution
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
            createdAt
            updatedAt
          }
          subcategory {
            id
            name
            projects {
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
export const onDeleteSubcategory = /* GraphQL */ `
  subscription OnDeleteSubcategory {
    onDeleteSubcategory {
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
            quote
            quoteAttribution
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
            createdAt
            updatedAt
          }
          subcategory {
            id
            name
            projects {
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
export const onCreateBuildingType = /* GraphQL */ `
  subscription OnCreateBuildingType {
    onCreateBuildingType {
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
            quote
            quoteAttribution
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
export const onUpdateBuildingType = /* GraphQL */ `
  subscription OnUpdateBuildingType {
    onUpdateBuildingType {
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
            quote
            quoteAttribution
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
export const onDeleteBuildingType = /* GraphQL */ `
  subscription OnDeleteBuildingType {
    onDeleteBuildingType {
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
            quote
            quoteAttribution
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
export const onCreateProjectType = /* GraphQL */ `
  subscription OnCreateProjectType {
    onCreateProjectType {
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
            quote
            quoteAttribution
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
export const onUpdateProjectType = /* GraphQL */ `
  subscription OnUpdateProjectType {
    onUpdateProjectType {
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
            quote
            quoteAttribution
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
export const onDeleteProjectType = /* GraphQL */ `
  subscription OnDeleteProjectType {
    onDeleteProjectType {
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
            quote
            quoteAttribution
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
export const onCreateProjectDepartments = /* GraphQL */ `
  subscription OnCreateProjectDepartments {
    onCreateProjectDepartments {
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
        quote
        quoteAttribution
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
            quote
            quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProjectDepartments = /* GraphQL */ `
  subscription OnUpdateProjectDepartments {
    onUpdateProjectDepartments {
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
        quote
        quoteAttribution
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
            quote
            quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProjectDepartments = /* GraphQL */ `
  subscription OnDeleteProjectDepartments {
    onDeleteProjectDepartments {
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
        quote
        quoteAttribution
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
            quote
            quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProjectSubcategories = /* GraphQL */ `
  subscription OnCreateProjectSubcategories {
    onCreateProjectSubcategories {
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
        quote
        quoteAttribution
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
            quote
            quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
export const onUpdateProjectSubcategories = /* GraphQL */ `
  subscription OnUpdateProjectSubcategories {
    onUpdateProjectSubcategories {
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
        quote
        quoteAttribution
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
            quote
            quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
export const onDeleteProjectSubcategories = /* GraphQL */ `
  subscription OnDeleteProjectSubcategories {
    onDeleteProjectSubcategories {
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
        quote
        quoteAttribution
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
            quote
            quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
export const onCreateProjectBuildingTypes = /* GraphQL */ `
  subscription OnCreateProjectBuildingTypes {
    onCreateProjectBuildingTypes {
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
        quote
        quoteAttribution
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
            quote
            quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
export const onUpdateProjectBuildingTypes = /* GraphQL */ `
  subscription OnUpdateProjectBuildingTypes {
    onUpdateProjectBuildingTypes {
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
        quote
        quoteAttribution
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
            quote
            quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
export const onDeleteProjectBuildingTypes = /* GraphQL */ `
  subscription OnDeleteProjectBuildingTypes {
    onDeleteProjectBuildingTypes {
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
        quote
        quoteAttribution
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
            quote
            quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
export const onCreateProjectProjectTypes = /* GraphQL */ `
  subscription OnCreateProjectProjectTypes {
    onCreateProjectProjectTypes {
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
        quote
        quoteAttribution
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
            quote
            quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
export const onUpdateProjectProjectTypes = /* GraphQL */ `
  subscription OnUpdateProjectProjectTypes {
    onUpdateProjectProjectTypes {
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
        quote
        quoteAttribution
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
            quote
            quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
export const onDeleteProjectProjectTypes = /* GraphQL */ `
  subscription OnDeleteProjectProjectTypes {
    onDeleteProjectProjectTypes {
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
        quote
        quoteAttribution
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
            quote
            quoteAttribution
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
export const onCreateDepartmentSubcategories = /* GraphQL */ `
  subscription OnCreateDepartmentSubcategories {
    onCreateDepartmentSubcategories {
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
export const onUpdateDepartmentSubcategories = /* GraphQL */ `
  subscription OnUpdateDepartmentSubcategories {
    onUpdateDepartmentSubcategories {
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
export const onDeleteDepartmentSubcategories = /* GraphQL */ `
  subscription OnDeleteDepartmentSubcategories {
    onDeleteDepartmentSubcategories {
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
              quote
              quoteAttribution
              collaborators
              size
              gridOrder
              status
              displayOrder
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
