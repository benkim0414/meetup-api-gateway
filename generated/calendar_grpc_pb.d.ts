// GENERATED CODE -- DO NOT EDIT!

// package: kordevaus
// file: calendar.proto

import * as calendar_pb from "./calendar_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ICalendarServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listCalendars: grpc.MethodDefinition<calendar_pb.ListCalendarsRequest, calendar_pb.ListCalendarsResponse>;
  getCalendar: grpc.MethodDefinition<calendar_pb.GetCalendarRequest, calendar_pb.Calendar>;
  createCalendar: grpc.MethodDefinition<calendar_pb.CreateCalendarRequest, calendar_pb.Calendar>;
  deleteCalendar: grpc.MethodDefinition<calendar_pb.DeleteCalendarRequest, google_protobuf_empty_pb.Empty>;
  listEvents: grpc.MethodDefinition<calendar_pb.ListEventsRequest, calendar_pb.ListEventsResponse>;
  getEvent: grpc.MethodDefinition<calendar_pb.GetEventRequest, calendar_pb.Event>;
  createEvent: grpc.MethodDefinition<calendar_pb.CreateEventRequest, calendar_pb.Event>;
  deleteEvent: grpc.MethodDefinition<calendar_pb.DeleteEventRequest, google_protobuf_empty_pb.Empty>;
}

export const CalendarServiceService: ICalendarServiceService;

export class CalendarServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listCalendars(argument: calendar_pb.ListCalendarsRequest, callback: grpc.requestCallback<calendar_pb.ListCalendarsResponse>): grpc.ClientUnaryCall;
  listCalendars(argument: calendar_pb.ListCalendarsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<calendar_pb.ListCalendarsResponse>): grpc.ClientUnaryCall;
  listCalendars(argument: calendar_pb.ListCalendarsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<calendar_pb.ListCalendarsResponse>): grpc.ClientUnaryCall;
  getCalendar(argument: calendar_pb.GetCalendarRequest, callback: grpc.requestCallback<calendar_pb.Calendar>): grpc.ClientUnaryCall;
  getCalendar(argument: calendar_pb.GetCalendarRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<calendar_pb.Calendar>): grpc.ClientUnaryCall;
  getCalendar(argument: calendar_pb.GetCalendarRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<calendar_pb.Calendar>): grpc.ClientUnaryCall;
  createCalendar(argument: calendar_pb.CreateCalendarRequest, callback: grpc.requestCallback<calendar_pb.Calendar>): grpc.ClientUnaryCall;
  createCalendar(argument: calendar_pb.CreateCalendarRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<calendar_pb.Calendar>): grpc.ClientUnaryCall;
  createCalendar(argument: calendar_pb.CreateCalendarRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<calendar_pb.Calendar>): grpc.ClientUnaryCall;
  deleteCalendar(argument: calendar_pb.DeleteCalendarRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteCalendar(argument: calendar_pb.DeleteCalendarRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteCalendar(argument: calendar_pb.DeleteCalendarRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listEvents(argument: calendar_pb.ListEventsRequest, callback: grpc.requestCallback<calendar_pb.ListEventsResponse>): grpc.ClientUnaryCall;
  listEvents(argument: calendar_pb.ListEventsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<calendar_pb.ListEventsResponse>): grpc.ClientUnaryCall;
  listEvents(argument: calendar_pb.ListEventsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<calendar_pb.ListEventsResponse>): grpc.ClientUnaryCall;
  getEvent(argument: calendar_pb.GetEventRequest, callback: grpc.requestCallback<calendar_pb.Event>): grpc.ClientUnaryCall;
  getEvent(argument: calendar_pb.GetEventRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<calendar_pb.Event>): grpc.ClientUnaryCall;
  getEvent(argument: calendar_pb.GetEventRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<calendar_pb.Event>): grpc.ClientUnaryCall;
  createEvent(argument: calendar_pb.CreateEventRequest, callback: grpc.requestCallback<calendar_pb.Event>): grpc.ClientUnaryCall;
  createEvent(argument: calendar_pb.CreateEventRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<calendar_pb.Event>): grpc.ClientUnaryCall;
  createEvent(argument: calendar_pb.CreateEventRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<calendar_pb.Event>): grpc.ClientUnaryCall;
  deleteEvent(argument: calendar_pb.DeleteEventRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteEvent(argument: calendar_pb.DeleteEventRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteEvent(argument: calendar_pb.DeleteEventRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
