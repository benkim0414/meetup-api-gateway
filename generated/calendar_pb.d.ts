// package: kordevaus
// file: calendar.proto

import * as jspb from "google-protobuf";
import * as google_api_annotations_pb from "./google/api/annotations_pb";
import * as google_api_client_pb from "./google/api/client_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Calendar extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getSummary(): string;
  setSummary(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  getTimeZone(): string;
  setTimeZone(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Calendar.AsObject;
  static toObject(includeInstance: boolean, msg: Calendar): Calendar.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Calendar, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Calendar;
  static deserializeBinaryFromReader(message: Calendar, reader: jspb.BinaryReader): Calendar;
}

export namespace Calendar {
  export type AsObject = {
    id: string,
    summary: string,
    description: string,
    location: string,
    timeZone: string,
  }
}

export class Event extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getStatus(): string;
  setStatus(value: string): void;

  getHtmlLink(): string;
  setHtmlLink(value: string): void;

  getCreateTime(): string;
  setCreateTime(value: string): void;

  getUpdateTime(): string;
  setUpdateTime(value: string): void;

  getSummary(): string;
  setSummary(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  getCreator(): string;
  setCreator(value: string): void;

  getOrganizer(): string;
  setOrganizer(value: string): void;

  getStartTime(): string;
  setStartTime(value: string): void;

  getEndTime(): string;
  setEndTime(value: string): void;

  getICalUid(): string;
  setICalUid(value: string): void;

  clearAttendeesList(): void;
  getAttendeesList(): Array<Attendee>;
  setAttendeesList(value: Array<Attendee>): void;
  addAttendees(value?: Attendee, index?: number): Attendee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Event.AsObject;
  static toObject(includeInstance: boolean, msg: Event): Event.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Event, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Event;
  static deserializeBinaryFromReader(message: Event, reader: jspb.BinaryReader): Event;
}

export namespace Event {
  export type AsObject = {
    id: string,
    status: string,
    htmlLink: string,
    createTime: string,
    updateTime: string,
    summary: string,
    description: string,
    location: string,
    creator: string,
    organizer: string,
    startTime: string,
    endTime: string,
    iCalUid: string,
    attendeesList: Array<Attendee.AsObject>,
  }
}

export class Attendee extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getDisplayName(): string;
  setDisplayName(value: string): void;

  getOrganizer(): boolean;
  setOrganizer(value: boolean): void;

  getOptional(): boolean;
  setOptional(value: boolean): void;

  getResponseStatus(): string;
  setResponseStatus(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  getAdditionalguests(): number;
  setAdditionalguests(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Attendee.AsObject;
  static toObject(includeInstance: boolean, msg: Attendee): Attendee.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Attendee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Attendee;
  static deserializeBinaryFromReader(message: Attendee, reader: jspb.BinaryReader): Attendee;
}

export namespace Attendee {
  export type AsObject = {
    id: string,
    email: string,
    displayName: string,
    organizer: boolean,
    optional: boolean,
    responseStatus: string,
    comment: string,
    additionalguests: number,
  }
}

export class ListCalendarsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCalendarsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCalendarsRequest): ListCalendarsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCalendarsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCalendarsRequest;
  static deserializeBinaryFromReader(message: ListCalendarsRequest, reader: jspb.BinaryReader): ListCalendarsRequest;
}

export namespace ListCalendarsRequest {
  export type AsObject = {
    pageSize: number,
    pageToken: string,
  }
}

export class ListCalendarsResponse extends jspb.Message {
  clearCalendarsList(): void;
  getCalendarsList(): Array<Calendar>;
  setCalendarsList(value: Array<Calendar>): void;
  addCalendars(value?: Calendar, index?: number): Calendar;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCalendarsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCalendarsResponse): ListCalendarsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListCalendarsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCalendarsResponse;
  static deserializeBinaryFromReader(message: ListCalendarsResponse, reader: jspb.BinaryReader): ListCalendarsResponse;
}

export namespace ListCalendarsResponse {
  export type AsObject = {
    calendarsList: Array<Calendar.AsObject>,
    nextPageToken: string,
  }
}

export class GetCalendarRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCalendarRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCalendarRequest): GetCalendarRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetCalendarRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCalendarRequest;
  static deserializeBinaryFromReader(message: GetCalendarRequest, reader: jspb.BinaryReader): GetCalendarRequest;
}

export namespace GetCalendarRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateCalendarRequest extends jspb.Message {
  hasCalendar(): boolean;
  clearCalendar(): void;
  getCalendar(): Calendar | undefined;
  setCalendar(value?: Calendar): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCalendarRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCalendarRequest): CreateCalendarRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateCalendarRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCalendarRequest;
  static deserializeBinaryFromReader(message: CreateCalendarRequest, reader: jspb.BinaryReader): CreateCalendarRequest;
}

export namespace CreateCalendarRequest {
  export type AsObject = {
    calendar?: Calendar.AsObject,
  }
}

export class DeleteCalendarRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCalendarRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCalendarRequest): DeleteCalendarRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteCalendarRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCalendarRequest;
  static deserializeBinaryFromReader(message: DeleteCalendarRequest, reader: jspb.BinaryReader): DeleteCalendarRequest;
}

export namespace DeleteCalendarRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListEventsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventsRequest): ListEventsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEventsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventsRequest;
  static deserializeBinaryFromReader(message: ListEventsRequest, reader: jspb.BinaryReader): ListEventsRequest;
}

export namespace ListEventsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListEventsResponse extends jspb.Message {
  clearEventsList(): void;
  getEventsList(): Array<Event>;
  setEventsList(value: Array<Event>): void;
  addEvents(value?: Event, index?: number): Event;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEventsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEventsResponse): ListEventsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListEventsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEventsResponse;
  static deserializeBinaryFromReader(message: ListEventsResponse, reader: jspb.BinaryReader): ListEventsResponse;
}

export namespace ListEventsResponse {
  export type AsObject = {
    eventsList: Array<Event.AsObject>,
    nextPageToken: string,
  }
}

export class GetEventRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEventRequest): GetEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEventRequest;
  static deserializeBinaryFromReader(message: GetEventRequest, reader: jspb.BinaryReader): GetEventRequest;
}

export namespace GetEventRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateEventRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): void;

  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEventRequest): CreateEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEventRequest;
  static deserializeBinaryFromReader(message: CreateEventRequest, reader: jspb.BinaryReader): CreateEventRequest;
}

export namespace CreateEventRequest {
  export type AsObject = {
    parent: string,
    text: string,
  }
}

export class DeleteEventRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEventRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEventRequest): DeleteEventRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteEventRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEventRequest;
  static deserializeBinaryFromReader(message: DeleteEventRequest, reader: jspb.BinaryReader): DeleteEventRequest;
}

export namespace DeleteEventRequest {
  export type AsObject = {
    name: string,
  }
}

