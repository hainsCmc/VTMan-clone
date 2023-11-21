import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

declare global {
  interface Console {
    tron: any;
  }
}

const reactotron = Reactotron.configure({
  name: 'Basecode2023',
})
  .useReactNative({
    asyncStorage: true,
  })
  .use(reactotronRedux())
  .connect();

console.tron = Reactotron;

export default reactotron;
