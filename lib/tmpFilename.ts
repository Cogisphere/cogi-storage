import crypto from 'crypto';
import os from 'os';
import path from 'path';

/**
 *  A small function to generate a safe temporary filename.
 *  @see https://stackoverflow.com/a/65425454
 */
export function tmpFile(prefix:string = 'tmp.', suffix:string = '', tmpdir:string = os.tmpdir()) {
    return path.join(tmpdir, prefix + crypto.randomBytes(16).toString('hex') + suffix);
}