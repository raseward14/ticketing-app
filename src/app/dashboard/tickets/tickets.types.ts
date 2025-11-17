export type  Tickets = { 
    id: string;
    title: string; 
    requestText: string;
    status: 'open' | 'closed'
}[];

export type Ticket = { 
    id: string;
    title: string; 
    requestText: string;
    status: 'open' | 'closed'
};