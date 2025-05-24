// Types et interfaces partagés

const UserRole = {
    ADMIN: 'admin',
    ORGANIZER: 'organizer',
    CUSTOMER: 'customer'
};

const EventStatus = {
    DRAFT: 'draft',
    PUBLISHED: 'published',
    SOLD_OUT: 'sold_out',
    CANCELLED: 'cancelled',
    COMPLETED: 'completed'
};

const BookingStatus = {
    PENDING: 'pending',
    CONFIRMED: 'confirmed',
    CANCELLED: 'cancelled',
    REFUNDED: 'refunded'
};

const PaymentStatus = {
    PENDING: 'pending',
    PROCESSING: 'processing',
    COMPLETED: 'completed',
    FAILED: 'failed',
    REFUNDED: 'refunded'
};

module.exports = {
    UserRole,
    EventStatus,
    BookingStatus,
    PaymentStatus
};
