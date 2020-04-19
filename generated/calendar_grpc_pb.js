// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var calendar_pb = require('./calendar_pb.js');
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

function serialize_kordevaus_Calendar(arg) {
  if (!(arg instanceof calendar_pb.Calendar)) {
    throw new Error('Expected argument of type kordevaus.Calendar');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_Calendar(buffer_arg) {
  return calendar_pb.Calendar.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_CreateCalendarRequest(arg) {
  if (!(arg instanceof calendar_pb.CreateCalendarRequest)) {
    throw new Error('Expected argument of type kordevaus.CreateCalendarRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_CreateCalendarRequest(buffer_arg) {
  return calendar_pb.CreateCalendarRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_CreateEventRequest(arg) {
  if (!(arg instanceof calendar_pb.CreateEventRequest)) {
    throw new Error('Expected argument of type kordevaus.CreateEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_CreateEventRequest(buffer_arg) {
  return calendar_pb.CreateEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_DeleteCalendarRequest(arg) {
  if (!(arg instanceof calendar_pb.DeleteCalendarRequest)) {
    throw new Error('Expected argument of type kordevaus.DeleteCalendarRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_DeleteCalendarRequest(buffer_arg) {
  return calendar_pb.DeleteCalendarRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_DeleteEventRequest(arg) {
  if (!(arg instanceof calendar_pb.DeleteEventRequest)) {
    throw new Error('Expected argument of type kordevaus.DeleteEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_DeleteEventRequest(buffer_arg) {
  return calendar_pb.DeleteEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_Event(arg) {
  if (!(arg instanceof calendar_pb.Event)) {
    throw new Error('Expected argument of type kordevaus.Event');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_Event(buffer_arg) {
  return calendar_pb.Event.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_GetCalendarRequest(arg) {
  if (!(arg instanceof calendar_pb.GetCalendarRequest)) {
    throw new Error('Expected argument of type kordevaus.GetCalendarRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_GetCalendarRequest(buffer_arg) {
  return calendar_pb.GetCalendarRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_GetEventRequest(arg) {
  if (!(arg instanceof calendar_pb.GetEventRequest)) {
    throw new Error('Expected argument of type kordevaus.GetEventRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_GetEventRequest(buffer_arg) {
  return calendar_pb.GetEventRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_ListCalendarsRequest(arg) {
  if (!(arg instanceof calendar_pb.ListCalendarsRequest)) {
    throw new Error('Expected argument of type kordevaus.ListCalendarsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_ListCalendarsRequest(buffer_arg) {
  return calendar_pb.ListCalendarsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_ListCalendarsResponse(arg) {
  if (!(arg instanceof calendar_pb.ListCalendarsResponse)) {
    throw new Error('Expected argument of type kordevaus.ListCalendarsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_ListCalendarsResponse(buffer_arg) {
  return calendar_pb.ListCalendarsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_ListEventsRequest(arg) {
  if (!(arg instanceof calendar_pb.ListEventsRequest)) {
    throw new Error('Expected argument of type kordevaus.ListEventsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_ListEventsRequest(buffer_arg) {
  return calendar_pb.ListEventsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_kordevaus_ListEventsResponse(arg) {
  if (!(arg instanceof calendar_pb.ListEventsResponse)) {
    throw new Error('Expected argument of type kordevaus.ListEventsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_kordevaus_ListEventsResponse(buffer_arg) {
  return calendar_pb.ListEventsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CalendarServiceService = exports.CalendarServiceService = {
  // Returns the calendars on the user's calendar list.
listCalendars: {
    path: '/kordevaus.CalendarService/ListCalendars',
    requestStream: false,
    responseStream: false,
    requestType: calendar_pb.ListCalendarsRequest,
    responseType: calendar_pb.ListCalendarsResponse,
    requestSerialize: serialize_kordevaus_ListCalendarsRequest,
    requestDeserialize: deserialize_kordevaus_ListCalendarsRequest,
    responseSerialize: serialize_kordevaus_ListCalendarsResponse,
    responseDeserialize: deserialize_kordevaus_ListCalendarsResponse,
  },
  // Returns metadata for a calendar.
getCalendar: {
    path: '/kordevaus.CalendarService/GetCalendar',
    requestStream: false,
    responseStream: false,
    requestType: calendar_pb.GetCalendarRequest,
    responseType: calendar_pb.Calendar,
    requestSerialize: serialize_kordevaus_GetCalendarRequest,
    requestDeserialize: deserialize_kordevaus_GetCalendarRequest,
    responseSerialize: serialize_kordevaus_Calendar,
    responseDeserialize: deserialize_kordevaus_Calendar,
  },
  // Creates a secondary calendar.
createCalendar: {
    path: '/kordevaus.CalendarService/CreateCalendar',
    requestStream: false,
    responseStream: false,
    requestType: calendar_pb.CreateCalendarRequest,
    responseType: calendar_pb.Calendar,
    requestSerialize: serialize_kordevaus_CreateCalendarRequest,
    requestDeserialize: deserialize_kordevaus_CreateCalendarRequest,
    responseSerialize: serialize_kordevaus_Calendar,
    responseDeserialize: deserialize_kordevaus_Calendar,
  },
  // Deletes a secondary calendar.
deleteCalendar: {
    path: '/kordevaus.CalendarService/DeleteCalendar',
    requestStream: false,
    responseStream: false,
    requestType: calendar_pb.DeleteCalendarRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_kordevaus_DeleteCalendarRequest,
    requestDeserialize: deserialize_kordevaus_DeleteCalendarRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists events in a calendar.
listEvents: {
    path: '/kordevaus.CalendarService/ListEvents',
    requestStream: false,
    responseStream: false,
    requestType: calendar_pb.ListEventsRequest,
    responseType: calendar_pb.ListEventsResponse,
    requestSerialize: serialize_kordevaus_ListEventsRequest,
    requestDeserialize: deserialize_kordevaus_ListEventsRequest,
    responseSerialize: serialize_kordevaus_ListEventsResponse,
    responseDeserialize: deserialize_kordevaus_ListEventsResponse,
  },
  // Gets an event.
getEvent: {
    path: '/kordevaus.CalendarService/GetEvent',
    requestStream: false,
    responseStream: false,
    requestType: calendar_pb.GetEventRequest,
    responseType: calendar_pb.Event,
    requestSerialize: serialize_kordevaus_GetEventRequest,
    requestDeserialize: deserialize_kordevaus_GetEventRequest,
    responseSerialize: serialize_kordevaus_Event,
    responseDeserialize: deserialize_kordevaus_Event,
  },
  // Creates an event in a calendar.
createEvent: {
    path: '/kordevaus.CalendarService/CreateEvent',
    requestStream: false,
    responseStream: false,
    requestType: calendar_pb.CreateEventRequest,
    responseType: calendar_pb.Event,
    requestSerialize: serialize_kordevaus_CreateEventRequest,
    requestDeserialize: deserialize_kordevaus_CreateEventRequest,
    responseSerialize: serialize_kordevaus_Event,
    responseDeserialize: deserialize_kordevaus_Event,
  },
  // Deletes an event.
deleteEvent: {
    path: '/kordevaus.CalendarService/DeleteEvent',
    requestStream: false,
    responseStream: false,
    requestType: calendar_pb.DeleteEventRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_kordevaus_DeleteEventRequest,
    requestDeserialize: deserialize_kordevaus_DeleteEventRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.CalendarServiceClient = grpc.makeGenericClientConstructor(CalendarServiceService);
