import * as fs from 'fs';
import * as path from 'path';

const root = './resources'

type env = 'prod' | 'test';

export function readInputToStrArr(file: string, env: env): string[] {
    return fs.readFileSync(path.join(root, env, file + '.txt'), 'utf-8').split('\n');
}

export function readInputToStr(file: string, env: env): string { 
    return fs.readFileSync(path.join(root, env, file + '.txt'), 'utf-8');
}