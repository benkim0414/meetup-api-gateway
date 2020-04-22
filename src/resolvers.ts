import {IResolvers} from 'apollo-server';

export const resolvers: IResolvers = {
  Query: {
    groups: async (_, __, {dataSources}) => dataSources.groupAPI.listGroups(),
    group: async (_, {id}, {dataSources}) => dataSources.groupAPI.getGroup(id),
    calendars: async (_, __, {dataSources}) =>
      dataSources.calendarAPI.listCalendars(),
    calendar: async (_, {id}, {dataSources}) =>
      dataSources.calendarAPI.getCalendar(id),
  },
  Mutation: {
    createGroup: async (_, {group}, {dataSources}) =>
      dataSources.groupAPI.createGroup(group.name, group.description),
    deleteGroup: async (_, {id}, {dataSources}) =>
      dataSources.groupAPI.deleteGroup(id),
    addMember: async (_, {groupId, email}, {dataSources}) =>
      dataSources.groupAPI.createMember(groupId, email),
    expelMember: async (_, {groupId, memberId}, {dataSources}) =>
      dataSources.groupAPI.deleteMember(groupId, memberId),
    createCalendar: async (_, {calendar}, {dataSources}) =>
      dataSources.calendarAPI.createCalendar(
        calendar.summary,
        calendar.description,
        calendar.timeZone
      ),
    deleteCalendar: async (_, {id}, {dataSources}) =>
      dataSources.calendarAPI.deleteCalendar(id),
    createEvent: async (_, {calendarId, text}, {dataSources}) =>
      dataSources.calendarAPI.createEvent(calendarId, text),
    cancelEvent: async (_, {calendarId, eventId}, {dataSources}) =>
      dataSources.calendarAPI.deleteEvent(calendarId, eventId),
  },
  Group: {
    members: async ({id}, {pageSize, pageToken}, {dataSources}) =>
      dataSources.groupAPI.listMembers(id, pageSize, pageToken),
  },
  Calendar: {
    events: async ({id}, {pageSize, pageToken}, {dataSources}) =>
      dataSources.calendarAPI.listEvents(id, pageSize, pageToken),
  },
};
