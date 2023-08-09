import { Subjects, Publisher, PaymentCreatedEvent } from '@er-tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
