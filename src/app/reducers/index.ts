export * from './state.reducer';
export * from './form.reducer';
export * from './dashboard.reducer';

export interface AppState {
  applicationLoadingState: any;
  makeRecordResponseState: any;
  getPossibleCasesState: any;
  getPossibleCasesErrorState: any;
}
