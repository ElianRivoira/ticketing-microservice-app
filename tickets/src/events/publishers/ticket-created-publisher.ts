import { Publisher, Subjects, TicketCreatedEvent } from '@er-tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
