import { IActivity }  from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
    {
        "id": 1,
        "name": "Pasivaikščiojimas",
        "date": new Date('01/01/2017'),
        "distance": 2,
        "comments": "Oras yra",
        "gpxData": '../../assets/gpx/one.gpx'
    },
    {
        "id": 2,
        "name": "Bėgimas",
        "date": new Date('03/09/2017'),
        "distance": 1,
        "comments": "saulė",
        "gpxData": '../../assets/gpx/two.gpx'
    },
    {
        "id": 3,
        "name": "Sėdėjimas",
        "date": new Date('09/09/2017'),
        "distance": 0,
        "comments": "Lietus",
        "gpxData": '../../assets/gpx/two.gpx'
    }
]