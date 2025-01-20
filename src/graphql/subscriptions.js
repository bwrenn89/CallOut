/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRequest = /* GraphQL */ `
  subscription OnCreateRequest($filter: ModelSubscriptionRequestFilterInput) {
    onCreateRequest(filter: $filter) {
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
export const onUpdateRequest = /* GraphQL */ `
  subscription OnUpdateRequest($filter: ModelSubscriptionRequestFilterInput) {
    onUpdateRequest(filter: $filter) {
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
export const onDeleteRequest = /* GraphQL */ `
  subscription OnDeleteRequest($filter: ModelSubscriptionRequestFilterInput) {
    onDeleteRequest(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
    $organizationID: String
  ) {
    onCreateOrganization(filter: $filter, organizationID: $organizationID) {
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
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
    $organizationID: String
  ) {
    onUpdateOrganization(filter: $filter, organizationID: $organizationID) {
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
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
    $organizationID: String
  ) {
    onDeleteOrganization(filter: $filter, organizationID: $organizationID) {
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
