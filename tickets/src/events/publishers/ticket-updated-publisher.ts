import { Publisher, Subjects, TicketUpdatedEvent } from '@er-tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}