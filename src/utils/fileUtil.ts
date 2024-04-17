import * as fs from 'fs';
import * as path from 'path';

const root = './resources'

export function readInput(day: string, env: string): string[] {
    return fs.readFileSync(path.join(root, env, day + '.txt'), 'utf-8').split('\n');
}