/**
 * Author: Jeferson Rodrigues
 * Email: jefersonr.santos@outlook.com
 * Created at: 2021-09-14
 * Updated at: 2021-09-15
 */

interface IDataEmail {
    subject: string;
    message: string;
}

interface IModelBacklog {
    timestamp: string;
    message: string;
}

interface IRequestGraylog {
    event_title: string;
    event_description: string;
    backlog: IModelBacklog[];
}

interface IRequestGrafana {
    title: string;
    message: string;
    ruleName: string;
    state: string;
}

export { IDataEmail, IModelBacklog, IRequestGraylog, IRequestGrafana }