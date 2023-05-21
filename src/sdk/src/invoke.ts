import { log } from "console";
import { deployRequest } from "src/hyperlane/dto/hyperlane.dto";
import { HyperlanePermissionlessDeployer } from "../core/HyperlanePermissionlessdeployer";

const { exec } = require('child_process');

export async function deployHyperlane(payload:deployRequest): Promise<any>{
try {
  const wrap = await HyperlanePermissionlessDeployer.deployer(payload)
    await wrap.deploy();
    return `Hyperlane deployed Successfully on ${payload.local} chain`

}catch(err){
    return err
}


}

// deployer