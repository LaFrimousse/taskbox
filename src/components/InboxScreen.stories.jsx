
import InboxScreen from './InboxScreen';
import store from '../lib/store';
import { http, HttpResponse } from 'msw'
 import { MockedState } from './TaskList.stories';
import { Provider } from 'react-redux';

export default {
  component: InboxScreen,
  title: 'InboxScreen',
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ['autodocs'],
};


export const Default = {
    parameters: {
      msw: [
        http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
        // ...and respond to them using this JSON response.
    return HttpResponse.json(MockedState.tasks)
  }),
      ],
    },
  };


  export const Error = {
    parameters: {
      msw: [
        http.get('https://jsonplaceholder.typicode.com/todos?userId=1', () => {
        // ...and respond to them using this JSON response.
    return new HttpResponse(null, { status: 403 })
  }),
      ],
    },
  };