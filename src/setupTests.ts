// setupTests.ts
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from 'jest-fetch-mock';
import ReactDOM from 'react-dom';

Enzyme.configure({ adapter: new Adapter() });

const globalAny: any = global;

// Fetch mock
globalAny.fetch = fetch;

// localStorage mock
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

globalAny.localStorage = localStorageMock;

// Mock portals since react-test-renderer seems not to support them 😔
// ReactDOM.createPortal = (node: any) => node;
