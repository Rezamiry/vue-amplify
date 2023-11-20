/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateHouse = /* GraphQL */ `
  subscription OnCreateHouse($filter: ModelSubscriptionHouseFilterInput) {
    onCreateHouse(filter: $filter) {
      id
      streetAdrees
      city
      province
      price
      area
      features
      realtor {
        id
        name
        email
        desc
        createdAt
        updatedAt
        __typename
      }
      bids {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      realtorHousesId
      __typename
    }
  }
`;
export const onUpdateHouse = /* GraphQL */ `
  subscription OnUpdateHouse($filter: ModelSubscriptionHouseFilterInput) {
    onUpdateHouse(filter: $filter) {
      id
      streetAdrees
      city
      province
      price
      area
      features
      realtor {
        id
        name
        email
        desc
        createdAt
        updatedAt
        __typename
      }
      bids {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      realtorHousesId
      __typename
    }
  }
`;
export const onDeleteHouse = /* GraphQL */ `
  subscription OnDeleteHouse($filter: ModelSubscriptionHouseFilterInput) {
    onDeleteHouse(filter: $filter) {
      id
      streetAdrees
      city
      province
      price
      area
      features
      realtor {
        id
        name
        email
        desc
        createdAt
        updatedAt
        __typename
      }
      bids {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      realtorHousesId
      __typename
    }
  }
`;
export const onCreateRealtor = /* GraphQL */ `
  subscription OnCreateRealtor($filter: ModelSubscriptionRealtorFilterInput) {
    onCreateRealtor(filter: $filter) {
      id
      name
      email
      desc
      houses {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateRealtor = /* GraphQL */ `
  subscription OnUpdateRealtor($filter: ModelSubscriptionRealtorFilterInput) {
    onUpdateRealtor(filter: $filter) {
      id
      name
      email
      desc
      houses {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteRealtor = /* GraphQL */ `
  subscription OnDeleteRealtor($filter: ModelSubscriptionRealtorFilterInput) {
    onDeleteRealtor(filter: $filter) {
      id
      name
      email
      desc
      houses {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateBid = /* GraphQL */ `
  subscription OnCreateBid($filter: ModelSubscriptionBidFilterInput) {
    onCreateBid(filter: $filter) {
      id
      price
      email
      houses {
        id
        streetAdrees
        city
        province
        price
        area
        features
        createdAt
        updatedAt
        realtorHousesId
        __typename
      }
      createdAt
      updatedAt
      houseBidsId
      __typename
    }
  }
`;
export const onUpdateBid = /* GraphQL */ `
  subscription OnUpdateBid($filter: ModelSubscriptionBidFilterInput) {
    onUpdateBid(filter: $filter) {
      id
      price
      email
      houses {
        id
        streetAdrees
        city
        province
        price
        area
        features
        createdAt
        updatedAt
        realtorHousesId
        __typename
      }
      createdAt
      updatedAt
      houseBidsId
      __typename
    }
  }
`;
export const onDeleteBid = /* GraphQL */ `
  subscription OnDeleteBid($filter: ModelSubscriptionBidFilterInput) {
    onDeleteBid(filter: $filter) {
      id
      price
      email
      houses {
        id
        streetAdrees
        city
        province
        price
        area
        features
        createdAt
        updatedAt
        realtorHousesId
        __typename
      }
      createdAt
      updatedAt
      houseBidsId
      __typename
    }
  }
`;
