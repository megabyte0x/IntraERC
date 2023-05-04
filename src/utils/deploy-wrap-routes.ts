import { logger } from '../sdk/logger';
import { WarpRouteDeployer } from '../sdk/wrap/WrapRouteDeployer';

import { run } from './run';

run('Warp route deployment', async () => {
  logger('Preparing Warp Route deployer');
  const deployer = await WarpRouteDeployer.fromArgs();
  logger('Beginning warp route deployment');
  await deployer.deploy();
});