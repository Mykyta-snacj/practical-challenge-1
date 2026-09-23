export type FormData = {
    title: string;
    about: string;
    startDate: string;
    finishDate: string;
    type: '' | 'Offline' | 'Online' | 'Hybride'
    city: string;
    address: string;
    postCode: string;
};

export type Data = FormData & {
  id: number;
};