import { Message } from 'node-nats-streaming';
import { Subjects, Listener, TicketUpdatedEvent } from '@er-tickets/common';

import { Ticket } from '../../models/ticket';
import { queueGroupName } from './queue-group-name';

export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
  queueGroupName = queueGroupName;

  async onMessage(data: TicketUpdatedEvent['data'], msg: Message) {
    const { title, price, version } = data;

    const ticket = await Ticket.findByEvent(data)
    if (!ticket) throw new Error('Ticket not found');

    // if the services work with diferents versioning semantics set directly the incoming new version to the ticket
    ticket.set({ title, price });
    await ticket.save();

    msg.ack();
  }
}
