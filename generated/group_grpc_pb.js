// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var group_pb = require('./group_pb.js');
var google_api_annotations_pb = require('./google/api/annotations_pb.js');
var google_api_client_pb = require('./google/api/client_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_CreateGroupRequest(arg) {
  if (!(arg instanceof group_pb.CreateGroupRequest)) {
    throw new Error('Expected argument of type kordevaus.CreateGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_CreateGroupRequest(buffer_arg) {
  return group_pb.CreateGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_CreateMemberRequest(arg) {
  if (!(arg instanceof group_pb.CreateMemberRequest)) {
    throw new Error('Expected argument of type kordevaus.CreateMemberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_CreateMemberRequest(buffer_arg) {
  return group_pb.CreateMemberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_DeleteGroupRequest(arg) {
  if (!(arg instanceof group_pb.DeleteGroupRequest)) {
    throw new Error('Expected argument of type kordevaus.DeleteGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_DeleteGroupRequest(buffer_arg) {
  return group_pb.DeleteGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_DeleteMemberRequest(arg) {
  if (!(arg instanceof group_pb.DeleteMemberRequest)) {
    throw new Error('Expected argument of type kordevaus.DeleteMemberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_DeleteMemberRequest(buffer_arg) {
  return group_pb.DeleteMemberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_GetGroupRequest(arg) {
  if (!(arg instanceof group_pb.GetGroupRequest)) {
    throw new Error('Expected argument of type kordevaus.GetGroupRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_GetGroupRequest(buffer_arg) {
  return group_pb.GetGroupRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_GetMemberRequest(arg) {
  if (!(arg instanceof group_pb.GetMemberRequest)) {
    throw new Error('Expected argument of type kordevaus.GetMemberRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_GetMemberRequest(buffer_arg) {
  return group_pb.GetMemberRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_Group(arg) {
  if (!(arg instanceof group_pb.Group)) {
    throw new Error('Expected argument of type kordevaus.Group');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_Group(buffer_arg) {
  return group_pb.Group.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_ListGroupsRequest(arg) {
  if (!(arg instanceof group_pb.ListGroupsRequest)) {
    throw new Error('Expected argument of type kordevaus.ListGroupsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_ListGroupsRequest(buffer_arg) {
  return group_pb.ListGroupsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_ListGroupsResponse(arg) {
  if (!(arg instanceof group_pb.ListGroupsResponse)) {
    throw new Error('Expected argument of type kordevaus.ListGroupsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_ListGroupsResponse(buffer_arg) {
  return group_pb.ListGroupsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_ListMembersRequest(arg) {
  if (!(arg instanceof group_pb.ListMembersRequest)) {
    throw new Error('Expected argument of type kordevaus.ListMembersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_ListMembersRequest(buffer_arg) {
  return group_pb.ListMembersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_ListMembersResponse(arg) {
  if (!(arg instanceof group_pb.ListMembersResponse)) {
    throw new Error('Expected argument of type kordevaus.ListMembersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_ListMembersResponse(buffer_arg) {
  return group_pb.ListMembersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_Member(arg) {
  if (!(arg instanceof group_pb.Member)) {
    throw new Error('Expected argument of type kordevaus.Member');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_Member(buffer_arg) {
  return group_pb.Member.deserializeBinary(new Uint8Array(buffer_arg));
}


var GroupServiceService = exports.GroupServiceService = {
  // Retrieve all groups.
listGroups: {
    path: '/kordevaus.GroupService/ListGroups',
    requestStream: false,
    responseStream: false,
    requestType: group_pb.ListGroupsRequest,
    responseType: group_pb.ListGroupsResponse,
    requestSerialize: serialize_kordevaus_ListGroupsRequest,
    requestDeserialize: deserialize_kordevaus_ListGroupsRequest,
    responseSerialize: serialize_kordevaus_ListGroupsResponse,
    responseDeserialize: deserialize_kordevaus_ListGroupsResponse,
  },
  // Retrieves a group's properties.
getGroup: {
    path: '/kordevaus.GroupService/GetGroup',
    requestStream: false,
    responseStream: false,
    requestType: group_pb.GetGroupRequest,
    responseType: group_pb.Group,
    requestSerialize: serialize_kordevaus_GetGroupRequest,
    requestDeserialize: deserialize_kordevaus_GetGroupRequest,
    responseSerialize: serialize_kordevaus_Group,
    responseDeserialize: deserialize_kordevaus_Group,
  },
  // Creates a group.
createGroup: {
    path: '/kordevaus.GroupService/CreateGroup',
    requestStream: false,
    responseStream: false,
    requestType: group_pb.CreateGroupRequest,
    responseType: group_pb.Group,
    requestSerialize: serialize_kordevaus_CreateGroupRequest,
    requestDeserialize: deserialize_kordevaus_CreateGroupRequest,
    responseSerialize: serialize_kordevaus_Group,
    responseDeserialize: deserialize_kordevaus_Group,
  },
  // Deletes a group.
deleteGroup: {
    path: '/kordevaus.GroupService/DeleteGroup',
    requestStream: false,
    responseStream: false,
    requestType: group_pb.DeleteGroupRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_kordevaus_DeleteGroupRequest,
    requestDeserialize: deserialize_kordevaus_DeleteGroupRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Retrieves a paginated list of all members in a group.
listMembers: {
    path: '/kordevaus.GroupService/ListMembers',
    requestStream: false,
    responseStream: false,
    requestType: group_pb.ListMembersRequest,
    responseType: group_pb.ListMembersResponse,
    requestSerialize: serialize_kordevaus_ListMembersRequest,
    requestDeserialize: deserialize_kordevaus_ListMembersRequest,
    responseSerialize: serialize_kordevaus_ListMembersResponse,
    responseDeserialize: deserialize_kordevaus_ListMembersResponse,
  },
  // Retrieves a group member's properties.
getMember: {
    path: '/kordevaus.GroupService/GetMember',
    requestStream: false,
    responseStream: false,
    requestType: group_pb.GetMemberRequest,
    responseType: group_pb.Member,
    requestSerialize: serialize_kordevaus_GetMemberRequest,
    requestDeserialize: deserialize_kordevaus_GetMemberRequest,
    responseSerialize: serialize_kordevaus_Member,
    responseDeserialize: deserialize_kordevaus_Member,
  },
  // Adds a user to the specified group.
createMember: {
    path: '/kordevaus.GroupService/CreateMember',
    requestStream: false,
    responseStream: false,
    requestType: group_pb.CreateMemberRequest,
    responseType: group_pb.Member,
    requestSerialize: serialize_kordevaus_CreateMemberRequest,
    requestDeserialize: deserialize_kordevaus_CreateMemberRequest,
    responseSerialize: serialize_kordevaus_Member,
    responseDeserialize: deserialize_kordevaus_Member,
  },
  // Removes a member from a group.
deleteMember: {
    path: '/kordevaus.GroupService/DeleteMember',
    requestStream: false,
    responseStream: false,
    requestType: group_pb.DeleteMemberRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_kordevaus_DeleteMemberRequest,
    requestDeserialize: deserialize_kordevaus_DeleteMemberRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.GroupServiceClient = grpc.makeGenericClientConstructor(GroupServiceService);
