// GENERATED CODE -- DO NOT EDIT!

// package: kordevaus
// file: group.proto

import * as group_pb from "./group_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IGroupServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listGroups: grpc.MethodDefinition<group_pb.ListGroupsRequest, group_pb.ListGroupsResponse>;
  getGroup: grpc.MethodDefinition<group_pb.GetGroupRequest, group_pb.Group>;
  createGroup: grpc.MethodDefinition<group_pb.CreateGroupRequest, group_pb.Group>;
  deleteGroup: grpc.MethodDefinition<group_pb.DeleteGroupRequest, google_protobuf_empty_pb.Empty>;
  listMembers: grpc.MethodDefinition<group_pb.ListMembersRequest, group_pb.ListMembersResponse>;
  getMember: grpc.MethodDefinition<group_pb.GetMemberRequest, group_pb.Member>;
  createMember: grpc.MethodDefinition<group_pb.CreateMemberRequest, group_pb.Member>;
  deleteMember: grpc.MethodDefinition<group_pb.DeleteMemberRequest, google_protobuf_empty_pb.Empty>;
}

export const GroupServiceService: IGroupServiceService;

export class GroupServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listGroups(argument: group_pb.ListGroupsRequest, callback: grpc.requestCallback<group_pb.ListGroupsResponse>): grpc.ClientUnaryCall;
  listGroups(argument: group_pb.ListGroupsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<group_pb.ListGroupsResponse>): grpc.ClientUnaryCall;
  listGroups(argument: group_pb.ListGroupsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<group_pb.ListGroupsResponse>): grpc.ClientUnaryCall;
  getGroup(argument: group_pb.GetGroupRequest, callback: grpc.requestCallback<group_pb.Group>): grpc.ClientUnaryCall;
  getGroup(argument: group_pb.GetGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<group_pb.Group>): grpc.ClientUnaryCall;
  getGroup(argument: group_pb.GetGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<group_pb.Group>): grpc.ClientUnaryCall;
  createGroup(argument: group_pb.CreateGroupRequest, callback: grpc.requestCallback<group_pb.Group>): grpc.ClientUnaryCall;
  createGroup(argument: group_pb.CreateGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<group_pb.Group>): grpc.ClientUnaryCall;
  createGroup(argument: group_pb.CreateGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<group_pb.Group>): grpc.ClientUnaryCall;
  deleteGroup(argument: group_pb.DeleteGroupRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteGroup(argument: group_pb.DeleteGroupRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteGroup(argument: group_pb.DeleteGroupRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listMembers(argument: group_pb.ListMembersRequest, callback: grpc.requestCallback<group_pb.ListMembersResponse>): grpc.ClientUnaryCall;
  listMembers(argument: group_pb.ListMembersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<group_pb.ListMembersResponse>): grpc.ClientUnaryCall;
  listMembers(argument: group_pb.ListMembersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<group_pb.ListMembersResponse>): grpc.ClientUnaryCall;
  getMember(argument: group_pb.GetMemberRequest, callback: grpc.requestCallback<group_pb.Member>): grpc.ClientUnaryCall;
  getMember(argument: group_pb.GetMemberRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<group_pb.Member>): grpc.ClientUnaryCall;
  getMember(argument: group_pb.GetMemberRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<group_pb.Member>): grpc.ClientUnaryCall;
  createMember(argument: group_pb.CreateMemberRequest, callback: grpc.requestCallback<group_pb.Member>): grpc.ClientUnaryCall;
  createMember(argument: group_pb.CreateMemberRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<group_pb.Member>): grpc.ClientUnaryCall;
  createMember(argument: group_pb.CreateMemberRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<group_pb.Member>): grpc.ClientUnaryCall;
  deleteMember(argument: group_pb.DeleteMemberRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteMember(argument: group_pb.DeleteMemberRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteMember(argument: group_pb.DeleteMemberRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
