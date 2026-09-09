export interface Data {
    id: number | null,
    title: string;
    about: string;
    startDate: string;
    finishDate: string;
    type: '' | 'offline' | 'online' | 'hybride'
}