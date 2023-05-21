import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class WrapRoute {
    @IsNotEmpty()
    @IsString()
    userName: string;

    @IsNotEmpty()
    @IsEnum(['ChaincodeConsulting'])
    orgName: string;

    @IsNotEmpty()
    nftId: number;
}


export class deployRequest {
    @IsNotEmpty()
    @IsString()
    local: string;

    @IsNotEmpty()
    remote: string[];

    @IsNotEmpty()
    key: string;

    writeAgentConfig?:boolean
}