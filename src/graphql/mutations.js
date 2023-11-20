/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createHouse = /* GraphQL */ `
  mutation CreateHouse(
    $input: CreateHouseInput!
    $condition: ModelHouseConditionInput
  ) {
    createHouse(input: $input, condition: $condition) {
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
export const updateHouse = /* GraphQL */ `
  mutation UpdateHouse(
    $input: UpdateHouseInput!
    $condition: ModelHouseConditionInput
  ) {
    updateHouse(input: $input, condition: $condition) {
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
export const deleteHouse = /* GraphQL */ `
  mutation DeleteHouse(
    $input: DeleteHouseInput!
    $condition: ModelHouseConditionInput
  ) {
    deleteHouse(input: $input, condition: $condition) {
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
export const createRealtor = /* GraphQL */ `
  mutation CreateRealtor(
    $input: CreateRealtorInput!
    $condition: ModelRealtorConditionInput
  ) {
    createRealtor(input: $input, condition: $condition) {
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
export const updateRealtor = /* GraphQL */ `
  mutation UpdateRealtor(
    $input: UpdateRealtorInput!
    $condition: ModelRealtorConditionInput
  ) {
    updateRealtor(input: $input, condition: $condition) {
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
export const deleteRealtor = /* GraphQL */ `
  mutation DeleteRealtor(
    $input: DeleteRealtorInput!
    $condition: ModelRealtorConditionInput
  ) {
    deleteRealtor(input: $input, condition: $condition) {
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
export const createBid = /* GraphQL */ `
  mutation CreateBid(
    $input: CreateBidInput!
    $condition: ModelBidConditionInput
  ) {
    createBid(input: $input, condition: $condition) {
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
export const updateBid = /* GraphQL */ `
  mutation UpdateBid(
    $input: UpdateBidInput!
    $condition: ModelBidConditionInput
  ) {
    updateBid(input: $input, condition: $condition) {
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
export const deleteBid = /* GraphQL */ `
  mutation DeleteBid(
    $input: DeleteBidInput!
    $condition: ModelBidConditionInput
  ) {
    deleteBid(input: $input, condition: $condition) {
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
