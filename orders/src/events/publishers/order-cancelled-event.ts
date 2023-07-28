import { Publisher, OrderCancelledEvent, Subjects } from '@er-tickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OderCancelled;
}