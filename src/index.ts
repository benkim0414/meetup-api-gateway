import {ApolloServer} from 'apollo-server';
import {importSchema} from 'graphql-import';
import {resolvers} from './resolvers';
import {GroupAPI} from './datasources/group';
import {CalendarAPI} from './datasources/calendar';

const typeDefs = importSchema('./**/*.graphql');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    groupAPI: new GroupAPI(),
    calendarAPI: new CalendarAPI(),
  }),
});

server.listen().then(({url}: {url: string}) => {
  console.log(`app listening at ${url}`);
});
