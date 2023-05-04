import { HyperlanePermissionlessDeployer } from '../sdk/core/HyperlanePermissionlessdeployer';
import { logger } from '../sdk/logger';

import { run } from './run';

run('Hyperlane deployment', async () => {
  logger('Preparing Hyperlane deployer');
  const deployer = await HyperlanePermissionlessDeployer.fromArgs();
  logger('Beginning Hyperlane deployment');
  await deployer.deploy();
});