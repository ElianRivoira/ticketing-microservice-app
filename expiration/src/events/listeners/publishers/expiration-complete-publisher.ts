import { Subjects, Publisher, ExpirationCompleteEvent } from '@er-tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
