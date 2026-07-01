import '@testing-library/jest-dom/vitest';

// jsdom doesn't implement IntersectionObserver, but framer-motion's
// `whileInView` (used across every Section) depends on it. Without this
// mock, any component using <Section> throws in tests.
class IntersectionObserverMock {
  observe = () => null;
  unobserve = () => null;
  disconnect = () => null;
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
});

Object.defineProperty(global, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
});
