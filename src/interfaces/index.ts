/**
 * Author: Jeferson Rodrigues <jefersonr.santos@outlook.com>
 * Created at: 2021-09-14
 * Updated at: 2021-09-14
 */

interface IDataEmail {
    subject: string;
    message: string;
}

interface IModelBacklog {
    timestamp: string;
    message: string;
}

interface IRequest {
    event_title: string;
    event_description: string;
    backlog: IModelBacklog[];
}

export { IDataEmail, IModelBacklog, IRequest }