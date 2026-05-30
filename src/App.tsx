/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { DrillTrackPropsProvider } from './context/DrillTrackContext';
import { MainWorkspace } from './components/MainWorkspace';

export default function App() {
  return (
    <DrillTrackPropsProvider>
      <MainWorkspace />
    </DrillTrackPropsProvider>
  );
}

