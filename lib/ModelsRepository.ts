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
     *  Get the models inside the repository.
     */
    get models() : Model[] { return [ ...this._models ]; };

    /**
     *  Construct repository data.
     *  @throw Error    When the repository can't fetch data.
     */
    constructor(pathname:string) {

        this._pathname = pathname;

        this.checkFile();
    }

    /**
     *  Pull fresh data from the disk.
     * 
     * @throw Error     When the repository can't fetch data.
     */
    async pull() : Promise<Model[]> {

        this.checkFile();

        return new Promise((resolve, reject) => {

            fs.readFile(this._pathname, 'utf8', (err, data) => {

                const parsed = JSON.parse(data);

                // @todo check if JSON is correct or there was a JSON parse error
    
                this._models = parsed.models;

                resolve(this._models);
            });
        });
    }

    /**
     *  Flush current state of the repository to disk.
     */
    async flush() : Promise<void> {

        return new Promise((resolve, reject) => {

            fs.writeFile(this._pathname, this.format(), (err) => {

                // @todo handle write errors

                resolve(void 0);
            });
        });
    }

    /**
     *  Format the repository for writing (or transfer)
     */
    private format() : string {
        return JSON.stringify({
            models: this._models
        });
    };

    /**
     *  Check if file already exists.
     */
    private checkFile() {

        if (!fs.existsSync(this._pathname)) throw Error('Repository file is missing');
    }
};