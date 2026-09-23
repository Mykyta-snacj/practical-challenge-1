import { date } from './date';
import type { FormData } from '../types/type';

export const initialEvent: FormData = {
    title: "",
    about: "",
    startDate: date,
    finishDate: date,
    type: "",
    city: '',
    address: '',
    postCode: '',
}