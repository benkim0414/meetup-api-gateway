import path from 'path';
import grpc from 'grpc';
import {CalendarServiceClient} from '../../generated/calendar_grpc_pb';
import {
  Calendar,
  ListCalendarsRequest,
  GetCalendarRequest,
  CreateCalendarRequest,
  DeleteCalendarRequest,
  Event,
  ListEventsRequest,
  GetEventRequest,
  CreateEventRequest,
  DeleteEventRequest,
} from '../../generated/calendar_pb';
import {DataSource} from 'apollo-datasource';

export class CalendarAPI extends DataSource {
  private client: CalendarServiceClient;

  constructor() {
    super();
    this.client = new CalendarServiceClient(
      'localhost:50051',
      grpc.credentials.createInsecure()
    );
  }

  async listCalendars(pageSize: number, pageToken: string) {
    return new Promise((resolve, reject) => {
      const request = new ListCalendarsRequest();
      if (pageSize) {
        request.setPageSize(pageSize);
      }
      if (pageToken !== '') {
        request.setPageToken(pageToken);
      }
      this.client.listCalendars(request, (error, response) => {
        if (error) {
          reject(error);
        }
        resolve({
          nextPageToken: response?.getNextPageToken(),
          hasNextPage: response?.getNextPageToken() !== '',
          calendars: response
            ?.getCalendarsList()
            .map(calendar => calendar.toObject()),
        });
      });
    });
  }

  async getCalendar(calendarId: string) {
    return new Promise((resolve, reject) => {
      const request = new GetCalendarRequest();
      request.setName(path.join('calendars', calendarId));
      this.client.getCalendar(request, (error, response) => {
        if (error) {
          reject(error);
        }
        resolve(response?.toObject());
      });
    });
  }

  async createCalendar(
    summary: string,
    description: string,
    timeZone = 'Australia/Melbourne'
  ) {
    return new Promise((resolve, reject) => {
      const calendar = new Calendar();
      calendar.setSummary(summary);
      calendar.setDescription(description);
      calendar.setTimeZone(timeZone);
      const request = new CreateCalendarRequest();
      request.setCalendar(calendar);
      this.client.createCalendar(request, (error, response) => {
        if (error) {
          reject(error);
        }
        resolve(response?.toObject());
      });
    });
  }

  async deleteCalendar(calendarId: string) {
    return new Promise((resolve, reject) => {
      const request = new DeleteCalendarRequest();
      request.setName(path.join('calendars', calendarId));
      this.client.deleteCalendar(request, error => {
        if (error) {
          reject(error);
        }
        resolve(true);
      });
    });
  }

  async listEvents(calendarId: string, pageSize: number, pageToken: string) {
    return new Promise((resolve, reject) => {
      const request = new ListEventsRequest();
      request.setParent(path.join('calendars', calendarId));
      if (pageSize) {
        request.setPageSize(pageSize);
      }
      if (pageToken !== '') {
        request.setPageToken(pageToken);
      }
      this.client.listEvents(request, (error, response) => {
        if (error) {
          reject(error);
        }
        resolve({
          nextPageToken: response?.getNextPageToken(),
          hasNextPage: response?.getNextPageToken() !== '',
          events: response?.getEventsList().map(this.toGraphQlEvent),
        });
      });
    });
  }

  async getEvent(calendarId: string, eventId: string) {
    return new Promise((resolve, reject) => {
      const request = new GetEventRequest();
      request.setName(path.join('calendars', calendarId, 'events', eventId));
      this.client.getEvent(request, (error, response) => {
        if (error) {
          reject(error);
        }
        resolve(this.toGraphQlEvent(response));
      });
    });
  }

  async createEvent(calendarId: string, text: string) {
    return new Promise((resolve, reject) => {
      const request = new CreateEventRequest();
      request.setParent(path.join('calendars', calendarId));
      request.setText(text);
      this.client.createEvent(request, (error, response) => {
        if (error) {
          reject(error);
        }
        resolve(this.toGraphQlEvent(response));
      });
    });
  }

  async deleteEvent(calendarId: string, eventId: string) {
    return new Promise((resolve, reject) => {
      const request = new DeleteEventRequest();
      request.setName(path.join('calendars', calendarId, 'events', eventId));
      this.client.deleteEvent(request, error => {
        if (error) {
          reject(error);
        }
        resolve(true);
      });
    });
  }

  private toGraphQlEvent(event?: Event) {
    return {
      id: event?.getId(),
      status: event?.getStatus(),
      htmlLink: event?.getHtmlLink(),
      createdAt: event?.getCreateTime(),
      updatedAt: event?.getUpdateTime(),
      summary: event?.getSummary(),
      description: event?.getDescription(),
      location: event?.getLocation(),
      creator: event?.getCreator(),
      organizer: event?.getOrganizer(),
      startAt: event?.getStartTime(),
      endAt: event?.getEndTime(),
      iCalUid: event?.getICalUid(),
      attendees: event?.getAttendeesList().map(attendee => ({
        id: attendee.getId(),
        email: attendee.getEmail(),
        displayName: attendee.getDisplayName(),
        isOrganizer: attendee.getOrganizer(),
        isOptional: attendee.getOptional(),
        response: attendee.getResponseStatus(),
        comment: attendee.getComment(),
        additionalGuests: attendee.getAdditionalguests(),
      })),
    };
  }
}
