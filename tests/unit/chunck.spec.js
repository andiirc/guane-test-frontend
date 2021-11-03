import chunks from '@/utils/index';

describe('Array Method', () => {
  it('chunck array numbers', () => {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const response = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];

    const result = [...chunks(items, 2)];

    expect(response).toEqual(result);
  });

  it('chunck array objects', () => {
    const itemsResponse = [
      {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive',
      },
      {
        id: 2,
        name: 'Morty Smith',
        status: 'Alive',
      },
      {
        id: 3,
        name: 'Summer Smith',
        status: 'Alive',
      },
      {
        id: 4,
        name: 'Beth Smith',
        status: 'Alive',
      },
    ];

    const response = [
      [
        {
          id: 1,
          name: 'Rick Sanchez',
          status: 'Alive',
        },
      ],
      [
        {
          id: 2,
          name: 'Morty Smith',
          status: 'Alive',
        },
      ],
      [
        {
          id: 3,
          name: 'Summer Smith',
          status: 'Alive',
        },
      ],
      [
        {
          id: 4,
          name: 'Beth Smith',
          status: 'Alive',
        },
      ],
    ];

    const result = [...chunks(itemsResponse, 1)];

    expect(response).toEqual(result);
  });
});
