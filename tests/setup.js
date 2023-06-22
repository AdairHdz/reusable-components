import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import '@testing-library/jest-dom';
expect.extend(matchers);
// import {jest} from "@jest/globals";
// global.jest = jest;

afterEach(() => {
  cleanup();
});