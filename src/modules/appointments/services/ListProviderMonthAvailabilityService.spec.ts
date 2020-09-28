import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let listProviderMonthAvailability: ListProviderMonthAvailabilityService;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the month availability from provider', async () => {
    const appointmentsHours = Array.from(
      { length: 10 },
      (_, index) => index + 8,
    );

    const createAppointments = appointmentsHours.map(async hour =>
      fakeAppointmentsRepository.create({
        provider_id: 'user',
        user_id: '12345678',
        date: new Date(2020, 4, 20, hour, 0, 0),
      }),
    );

    await Promise.all(createAppointments);

    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: '12345678',
      date: new Date(2020, 4, 21, 8, 0, 0),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 5,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { day: 19, available: true },
        { day: 20, available: false },
        { day: 21, available: true },
        { day: 22, available: true },
      ]),
    );
  });
});
