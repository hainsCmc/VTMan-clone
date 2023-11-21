import {useDispatch} from 'react-redux';
import {AppDispatch} from '~/stores';

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
