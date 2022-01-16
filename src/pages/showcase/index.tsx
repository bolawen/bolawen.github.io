/*
 * @Description: 
 * @FilePath: \BlogR\src\pages\showcase\index.tsx
 */
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useMemo, useEffect } from 'react';

import Layout from '@theme/Layout';
import clsx from 'clsx';

const TITLE = 'Docusaurus Site Showcase';
const DESCRIPTION = 'List of websites people are building with Docusaurus';

function Showcase(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <h3>案例展示</h3>
    </Layout>

  );
}

export default Showcase;