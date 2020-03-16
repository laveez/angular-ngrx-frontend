import { LocalNumberPipe } from 'src/app/shared/pipes/local-number.pipe';
import { LocalDatePipe } from 'src/app/shared/pipes/local-date.pipe';

export * from 'src/app/shared/pipes/local-number.pipe';
export * from 'src/app/shared/pipes/local-date.pipe';

export const Pipes = [
  LocalDatePipe,
  LocalNumberPipe,
];