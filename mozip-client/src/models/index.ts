import { call, put } from 'redux-saga/effects';

export type ApiEndPoint<R, P extends any[]> = (...p: P) => Promise<R>;

type Entity<R, S, F> = {
  REQUEST: R;
  SUCCESS: S;
  FAILURE: F;
}

export const createEntityAction = <R, S, F, PARAM extends any[], DATA>(
  entity: Entity<R, S, F>,
  api: ApiEndPoint<DATA, PARAM>
) => ({
  ACTION: {
    REQUEST: () => ({ type: entity.REQUEST }),
    SUCCESS: (result: DATA) => ({ type: entity.SUCCESS, payload: result }),
    FAILURE: (e: Error) => ({ type: entity.FAILURE, payload : e})
  },
  API: api
});


type EntityActionType  = {
  ACTION: {
    REQUEST: (...p: any[]) => any;
    SUCCESS: (...p: any[]) => any;
    FAILURE: (...p: any[]) => any;
    [key: string]: (...p: any[]) => any;
  };
  API: ApiEndPoint<any, any>;
}

export type EntityAction<T extends EntityActionType> = ReturnType<T['ACTION'][keyof T['ACTION']]>;
// REQUEST: function | SUCCESS: function | FAILURE: function ??

export function fetchEntity<T extends EntityActionType>({ ACTION, API }: T) {
  return function*(...p: Parameters<T['API']>) {
    try {
      yield put(ACTION.REQUEST());
      const data = yield call(API, ...p);
      yield put(ACTION.SUCCESS(data));
    } catch(e) {
      yield put(ACTION.FAILURE(e));
    }
  };
}
