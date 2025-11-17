import React from 'react';

const reactRouterDom = jest.requireActual('react-router-dom');

module.exports = {
  ...reactRouterDom,
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => element,
  useNavigate: () => jest.fn(),
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  Navigate: () => null,
};