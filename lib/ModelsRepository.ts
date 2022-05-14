import fs from "fs"
import { Model } from "cogi-collectibles";
/**
 *  This is a class responsible for storing a certain collection of owned models.
 *  In principle the repository is just a file on the disk and when the application
 *  loads the file content is loaded into the memory and the application works
 *  from the memory. Every now and then the repository can be flushed to the disk,
 *  which cause it to store the current state of all models to the file on the disk.
 */
export default class ModelsRepository {

    private _pathname:string;

    private _models:Model[] = [ ];

    /**
     *  Get the repository pathname.
     */
    get pathname() : string { return this._pathname; }

    /**
     *  Construct repository data.
     *  @throw Error    When the repository can't fetch data.
     */
    constructor(pathname:string) {

        this._pathname = pathname;

        this.pull();
    }

    /**
     *  Pull fresh data from the disk.
     * 
     * @throw Error     When the repository can't fetch data.
     */
    pull() {

        if (!fs.existsSync(this._pathname)) throw Error('Repository file is missing');


    }

    /**
     *  Flush current state of the repository to disk.
     */
    flush() {

    }
};