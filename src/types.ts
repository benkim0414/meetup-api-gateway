import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
   __typename?: 'Query';
  groups: GroupConnection;
  group?: Maybe<Group>;
  calendars: CalendarConnection;
  calendar?: Maybe<Calendar>;
};


export type QueryGroupsArgs = {
  pageSize?: Maybe<Scalars['Int']>;
  pageToken?: Maybe<Scalars['String']>;
};


export type QueryGroupArgs = {
  id: Scalars['ID'];
};


export type QueryCalendarsArgs = {
  pageSize?: Maybe<Scalars['Int']>;
  pageToken?: Maybe<Scalars['String']>;
};


export type QueryCalendarArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
   __typename?: 'Mutation';
  createGroup?: Maybe<Group>;
  deleteGroup?: Maybe<Scalars['Boolean']>;
  addMember?: Maybe<Member>;
  expelMember?: Maybe<Scalars['Boolean']>;
  createCalendar?: Maybe<Calendar>;
  deleteCalendar?: Maybe<Scalars['Boolean']>;
  createEvent?: Maybe<Event>;
  cancelEvent?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateGroupArgs = {
  group: GroupInput;
};


export type MutationDeleteGroupArgs = {
  id: Scalars['ID'];
};


export type MutationAddMemberArgs = {
  groupId: Scalars['ID'];
  email: Scalars['String'];
};


export type MutationExpelMemberArgs = {
  groupId: Scalars['ID'];
  memberId: Scalars['ID'];
};


export type MutationCreateCalendarArgs = {
  calendar: CalendarInput;
};


export type MutationDeleteCalendarArgs = {
  id: Scalars['ID'];
};


export type MutationCreateEventArgs = {
  calendarId: Scalars['ID'];
  text: Scalars['String'];
};


export type MutationCancelEventArgs = {
  calendarId: Scalars['ID'];
  eventId: Scalars['ID'];
};

export type Group = {
   __typename?: 'Group';
  id: Scalars['ID'];
  name: Scalars['String'];
  email: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  members: MemberConnection;
};


export type GroupMembersArgs = {
  pageSize?: Maybe<Scalars['Int']>;
  pageToken?: Maybe<Scalars['String']>;
};

export type GroupConnection = {
   __typename?: 'GroupConnection';
  nextPageToken: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  groups: Array<Maybe<Group>>;
};

export type GroupInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type Member = {
   __typename?: 'Member';
  id: Scalars['ID'];
  email: Scalars['String'];
  status?: Maybe<Scalars['String']>;
};

export type MemberConnection = {
   __typename?: 'MemberConnection';
  nextPageToken: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  members: Array<Maybe<Member>>;
};

export type Calendar = {
   __typename?: 'Calendar';
  id: Scalars['ID'];
  summary: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
  events: EventConnection;
};


export type CalendarEventsArgs = {
  pageSize?: Maybe<Scalars['Int']>;
  pageToken?: Maybe<Scalars['String']>;
};

export type CalendarConnection = {
   __typename?: 'CalendarConnection';
  nextPageToken: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  calendars: Array<Maybe<Calendar>>;
};

export type CalendarInput = {
  summary: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  timeZone?: Maybe<Scalars['String']>;
};

export type Event = {
   __typename?: 'Event';
  id: Scalars['ID'];
  status?: Maybe<Scalars['String']>;
  htmlLink?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  summary: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  creator?: Maybe<Scalars['String']>;
  organizer?: Maybe<Scalars['String']>;
  startAt?: Maybe<Scalars['String']>;
  endAt?: Maybe<Scalars['String']>;
  iCalUid?: Maybe<Scalars['String']>;
  attendees: Array<Maybe<Attendee>>;
};

export type Attendee = {
   __typename?: 'Attendee';
  id: Scalars['ID'];
  email?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  isOrganizer?: Maybe<Scalars['Boolean']>;
  isOptional?: Maybe<Scalars['Boolean']>;
  response?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
  additionalGuests?: Maybe<Scalars['Int']>;
};

export type EventConnection = {
   __typename?: 'EventConnection';
  nextPageToken: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  events: Array<Maybe<Event>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  String: ResolverTypeWrapper<Scalars['String']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Query: ResolverTypeWrapper<{}>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  ID: ResolverTypeWrapper<Scalars['ID']>,
  Mutation: ResolverTypeWrapper<{}>,
  Group: ResolverTypeWrapper<Group>,
  GroupConnection: ResolverTypeWrapper<GroupConnection>,
  GroupInput: GroupInput,
  Member: ResolverTypeWrapper<Member>,
  MemberConnection: ResolverTypeWrapper<MemberConnection>,
  Calendar: ResolverTypeWrapper<Calendar>,
  CalendarConnection: ResolverTypeWrapper<CalendarConnection>,
  CalendarInput: CalendarInput,
  Event: ResolverTypeWrapper<Event>,
  Attendee: ResolverTypeWrapper<Attendee>,
  EventConnection: ResolverTypeWrapper<EventConnection>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  String: Scalars['String'],
  Boolean: Scalars['Boolean'],
  Query: {},
  Int: Scalars['Int'],
  ID: Scalars['ID'],
  Mutation: {},
  Group: Group,
  GroupConnection: GroupConnection,
  GroupInput: GroupInput,
  Member: Member,
  MemberConnection: MemberConnection,
  Calendar: Calendar,
  CalendarConnection: CalendarConnection,
  CalendarInput: CalendarInput,
  Event: Event,
  Attendee: Attendee,
  EventConnection: EventConnection,
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  groups?: Resolver<ResolversTypes['GroupConnection'], ParentType, ContextType, RequireFields<QueryGroupsArgs, never>>,
  group?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<QueryGroupArgs, 'id'>>,
  calendars?: Resolver<ResolversTypes['CalendarConnection'], ParentType, ContextType, RequireFields<QueryCalendarsArgs, never>>,
  calendar?: Resolver<Maybe<ResolversTypes['Calendar']>, ParentType, ContextType, RequireFields<QueryCalendarArgs, 'id'>>,
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createGroup?: Resolver<Maybe<ResolversTypes['Group']>, ParentType, ContextType, RequireFields<MutationCreateGroupArgs, 'group'>>,
  deleteGroup?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteGroupArgs, 'id'>>,
  addMember?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<MutationAddMemberArgs, 'groupId' | 'email'>>,
  expelMember?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationExpelMemberArgs, 'groupId' | 'memberId'>>,
  createCalendar?: Resolver<Maybe<ResolversTypes['Calendar']>, ParentType, ContextType, RequireFields<MutationCreateCalendarArgs, 'calendar'>>,
  deleteCalendar?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteCalendarArgs, 'id'>>,
  createEvent?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<MutationCreateEventArgs, 'calendarId' | 'text'>>,
  cancelEvent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationCancelEventArgs, 'calendarId' | 'eventId'>>,
};

export type GroupResolvers<ContextType = any, ParentType extends ResolversParentTypes['Group'] = ResolversParentTypes['Group']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  members?: Resolver<ResolversTypes['MemberConnection'], ParentType, ContextType, RequireFields<GroupMembersArgs, never>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type GroupConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['GroupConnection'] = ResolversParentTypes['GroupConnection']> = {
  nextPageToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  groups?: Resolver<Array<Maybe<ResolversTypes['Group']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type MemberConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberConnection'] = ResolversParentTypes['MemberConnection']> = {
  nextPageToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  members?: Resolver<Array<Maybe<ResolversTypes['Member']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CalendarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Calendar'] = ResolversParentTypes['Calendar']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  timeZone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  events?: Resolver<ResolversTypes['EventConnection'], ParentType, ContextType, RequireFields<CalendarEventsArgs, never>>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type CalendarConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['CalendarConnection'] = ResolversParentTypes['CalendarConnection']> = {
  nextPageToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  calendars?: Resolver<Array<Maybe<ResolversTypes['Calendar']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  htmlLink?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  summary?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  creator?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  organizer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  startAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  endAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  iCalUid?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  attendees?: Resolver<Array<Maybe<ResolversTypes['Attendee']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type AttendeeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Attendee'] = ResolversParentTypes['Attendee']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  isOrganizer?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  isOptional?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  response?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  additionalGuests?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type EventConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventConnection'] = ResolversParentTypes['EventConnection']> = {
  nextPageToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  events?: Resolver<Array<Maybe<ResolversTypes['Event']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = any> = {
  Query?: QueryResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Group?: GroupResolvers<ContextType>,
  GroupConnection?: GroupConnectionResolvers<ContextType>,
  Member?: MemberResolvers<ContextType>,
  MemberConnection?: MemberConnectionResolvers<ContextType>,
  Calendar?: CalendarResolvers<ContextType>,
  CalendarConnection?: CalendarConnectionResolvers<ContextType>,
  Event?: EventResolvers<ContextType>,
  Attendee?: AttendeeResolvers<ContextType>,
  EventConnection?: EventConnectionResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
