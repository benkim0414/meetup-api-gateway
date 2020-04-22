import path from 'path';
import grpc from 'grpc';
import {GroupServiceClient} from '../../generated/group_grpc_pb';
import {
  Group,
  ListGroupsRequest,
  GetGroupRequest,
  CreateGroupRequest,
  DeleteGroupRequest,
  Member,
  ListMembersRequest,
  GetMemberRequest,
  CreateMemberRequest,
  DeleteMemberRequest,
} from '../../generated/group_pb';
import {DataSource} from 'apollo-datasource';

export class GroupAPI extends DataSource {
  private client: GroupServiceClient;

  constructor() {
    super();
    this.client = new GroupServiceClient(
      'localhost:50051',
      grpc.credentials.createInsecure()
    );
  }

  async listGroups(pageSize: number, pageToken: string) {
    return new Promise((resolve, reject) => {
      const request = new ListGroupsRequest();
      if (pageSize) {
        request.setPageSize(pageSize);
      }
      if (pageToken !== '') {
        request.setPageToken(pageToken);
      }
      this.client.listGroups(request, (error, response) => {
        if (error) {
          reject(error);
        }
        resolve({
          nextPageToken: response?.getNextPageToken(),
          hasNextPage: response?.getNextPageToken() !== '',
          groups: response?.getGroupsList().map(group => group.toObject()),
        });
      });
    });
  }

  async getGroup(groupId: string) {
    return new Promise((resolve, reject) => {
      const request = new GetGroupRequest();
      request.setName(path.join('groups', groupId));
      this.client.getGroup(request, (error, response) => {
        if (error) {
          reject(error);
        }
        resolve(response?.toObject());
      });
    });
  }

  async createGroup(name: string, description: string) {
    return new Promise((resolve, reject) => {
      const group = new Group();
      group.setName(name);
      group.setEmail(`${name.toLowerCase()}@gunwoo.org`);
      group.setDescription(description);
      const request = new CreateGroupRequest();
      request.setGroup(group);
      this.client.createGroup(request, (error, response) => {
        if (error) {
          reject(error);
        }
        resolve(response?.toObject());
      });
    });
  }

  async deleteGroup(groupId: string) {
    return new Promise((resolve, reject) => {
      const request = new DeleteGroupRequest();
      request.setName(path.join('groups', groupId));
      this.client.deleteGroup(request, error => {
        if (error) {
          reject(error);
        }
        resolve(true);
      });
    });
  }

  async listMembers(groupId: string, pageSize: number, pageToken: string) {
    return new Promise((resolve, reject) => {
      const request = new ListMembersRequest();
      request.setParent(path.join('groups', groupId));
      if (pageSize) {
        request.setPageSize(pageSize);
      }
      if (pageToken !== '') {
        request.setPageToken(pageToken);
      }
      this.client.listMembers(request, (error, response) => {
        if (error) {
          reject(error);
        }
        resolve({
          nextPageToken: response?.getNextPageToken(),
          hasNextPage: response?.getNextPageToken() !== '',
          members: response?.getMembersList().map(member => member.toObject()),
        });
      });
    });
  }

  async getMember(groupId: string, memberId: string) {
    return new Promise((resolve, reject) => {
      const request = new GetMemberRequest();
      request.setName(path.join('groups', groupId, 'members', memberId));
      this.client.getMember(request, (error, response) => {
        if (error) {
          reject(error);
        }
        resolve(response?.toObject());
      });
    });
  }

  async createMember(groupId: string, email: string) {
    return new Promise((resolve, reject) => {
      const member = new Member();
      member.setEmail(email);
      const request = new CreateMemberRequest();
      request.setParent(path.join('groups', groupId));
      request.setMember(member);
      this.client.createMember(request, (error, response) => {
        if (error) {
          reject(error);
        }
        resolve(response?.toObject());
      });
    });
  }

  async deleteMember(groupId: string, memberId: string) {
    return new Promise((resolve, reject) => {
      const request = new DeleteMemberRequest();
      request.setName(path.join('groups', groupId, 'members', memberId));
      this.client.deleteMember(request, error => {
        if (error) {
          reject(error);
        }
        resolve(true);
      });
    });
  }
}
