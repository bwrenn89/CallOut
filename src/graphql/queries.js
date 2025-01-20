/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRequest = /* GraphQL */ `
  query GetRequest($id: ID!) {
    getRequest(id: $id) {
      id
      requestDetails
      requestedBy
      status
      createdAt
      organizationID
      updatedAt
      __typename
    }
  }
`;
export const listRequests = /* GraphQL */ `
  query ListRequests(
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        requestDetails
        requestedBy
        status
        createdAt
        organizationID
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const requestsByOrganizationID = /* GraphQL */ `
  query RequestsByOrganizationID(
    $organizationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRequestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    requestsByOrganizationID(
      organizationID: $organizationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        requestDetails
        requestedBy
        status
        createdAt
        organizationID
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      isAdmin
      role
      organizationID
      createdAt
      updatedAt
      __typename
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
        isAdmin
        role
        organizationID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const usersByOrganizationID = /* GraphQL */ `
  query UsersByOrganizationID(
    $organizationID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    usersByOrganizationID(
      organizationID: $organizationID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        isAdmin
        role
        organizationID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
      id
      Name
      Users {
        nextToken
        __typename
      }
      Requests {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      organizationID
      __typename
    }
  }
`;
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        createdAt
        updatedAt
        organizationID
        __typename
      }
      nextToken
      __typename
    }
  }
`;
