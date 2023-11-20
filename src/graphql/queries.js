/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getHouse = /* GraphQL */ `
  query GetHouse($id: ID!) {
    getHouse(id: $id) {
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
export const listHouses = /* GraphQL */ `
  query ListHouses(
    $filter: ModelHouseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHouses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getRealtor = /* GraphQL */ `
  query GetRealtor($id: ID!) {
    getRealtor(id: $id) {
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
export const listRealtors = /* GraphQL */ `
  query ListRealtors(
    $filter: ModelRealtorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRealtors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        desc
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBid = /* GraphQL */ `
  query GetBid($id: ID!) {
    getBid(id: $id) {
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
export const listBids = /* GraphQL */ `
  query ListBids(
    $filter: ModelBidFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBids(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        price
        email
        createdAt
        updatedAt
        houseBidsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
