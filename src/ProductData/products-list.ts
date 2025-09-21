import { Cuisine, Restaurent } from '../model/interfaces';

const mockAlitas: Cuisine[] = [
  {
    id: 0,
    name: 'BBQ chicken Wings',
    price: 234,
    currency: '$',
    imageURL:'https://www.simplyrecipes.com/thmb/shJn62uS_jDw1TpwMF5G033pk9o=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Gilled-BBQ-Wings-METHOD-3-7947e28bf44b4516a2b653c0c44ce19c.jpg',
    items: ['Butter fried chicken wings', 'Tossed in smokey bbq sauce'],
  },
  {
    id: 1,
    name: 'BBQ chicken',
    price: 234,
    currency: '$',
    imageURL:'https://as2.ftcdn.net/v2/jpg/06/23/35/11/1000_F_623351194_0nmMWiIetpoL3w4tf0EuCpXkPDj3gRi0.jpg',
    items: ['Butter fried chicken wings', 'Tossed in smokey bbq sauce'],
  },
  {
    id: 2,
    name: 'BBQ Wings',
    price: 234,
    currency: '$',
    imageURL:'https://www.shutterstock.com/shutterstock/photos/2489018187/display_1500/stock-photo-spicy-korean-chicken-wings-with-sesame-seeds-and-chives-2489018187.jpg',
    items: ['Butter fried chicken wings', 'Tossed in smokey bbq sauce'],
  },
];

const mockImperio: Cuisine[] = [
  {
    id: 0,
    name: 'BBQ chicken Wings',
    price: 234,
    currency: '$',
    imageURL:'https://media.istockphoto.com/id/1194226387/photo/barbecue-chicken-wings-and-vegetables-on-wooden-table.jpg?s=612x612&w=0&k=20&c=u_hPYPaaopdIjldU0MXd5vhkJqADYnkQzzxSgrdPh8E=',
    items: ['Butter fried chicken wings', 'Tossed in smokey bbq sauce'],
  },
  {
    id: 1,
    name: 'BBQ chicken',
    price: 234,
    currency: '$',
    imageURL:'https://as2.ftcdn.net/v2/jpg/06/23/35/11/1000_F_623351194_0nmMWiIetpoL3w4tf0EuCpXkPDj3gRi0.jpg',
    items: ['Butter fried chicken wings', 'Tossed in smokey bbq sauce'],
  },
  {
    id: 2,
    name: 'BBQ Wings',
    price: 234,
    currency: '$',
    imageURL:'https://www.shutterstock.com/shutterstock/photos/2489018187/display_1500/stock-photo-spicy-korean-chicken-wings-with-sesame-seeds-and-chives-2489018187.jpg',
    items: ['Butter fried chicken wings', 'Tossed in smokey bbq sauce'],
  },
];

const mockAllGrill: Cuisine[] = [
  {
    id: 0,
    name: 'BBQ chicken With Cesar salad',
    price: 25,
    currency: '$',
    imageURL:'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noY6V_CUkzHpnZrWfHY50mVcN1A1g3OKRay4WoHs0cwTpcka6K5xOy-h8OC3S3WX8G2G42BknlTw5gjWuqtTeKdF1xGYNnThUvrMLSzP_Ddynu9g9M2i4vn0FO7qFIZW6b7BCKFsA=s680-w680-h510',
    items: ['Butter fried chicken', 'Tossed in smokey bbq sauce'],
  },
  {
    id: 1,
    name: 'BBQ chicken with Fry potatoes',
    price: 234,
    currency: '$',
    imageURL:'https://lh3.googleusercontent.com/gps-cs-s/AC9h4np209Xp5Oc2uk7KWoApn5__4m_Z-CXENHEHpdP-fsNskR_IPsyPExYudgEirAQYDDAAG34PHEfUMPYCR6jJol4h8FtYfNbkuwuu4YMS-i6Hrqp8bLhw3y2aR_6rYHFO_qnuM6td=s680-w680-h510',
    items: ['Butter fried chicken', 'Tossed in smokey bbq sauce'],
  },
  {
    id: 2,
    name: 'BBQ Wings',
    price: 234,
    currency: '$',
    imageURL:'https://www.shutterstock.com/shutterstock/photos/2489018187/display_1500/stock-photo-spicy-korean-chicken-wings-with-sesame-seeds-and-chives-2489018187.jpg',
    items: ['Butter fried chicken wings', 'Tossed in smokey bbq sauce'],
  },
];

const mockGrillParrilla: Cuisine[] = [
  {
    id: 0,
    name: 'Parrilla',
    price: 25,
    currency: '$',
    imageURL:'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrg3SgkfrE4cB8O28b0BXgtNn7nOIcW87-0oRU5Wvj0uYzcNUZO9ygZS9g6N8eLuGIK4PzWNssNSbqNSbqYo3GeAa_ZxJe2IIb7o4UC8v3MDeLgDM-9ErvUaghgUNTVDt-z_Hvlfg=s680-w680-h510',
    items: ['Parrilla', 'Tossed in smokey bbq sauce'],
  },
  {
    id: 1,
    name: 'Parrilla with Fry potatoes',
    price: 23,
    currency: '$',
    imageURL:'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq33QwiINaKFTUvHRXYc7ouMNFNEEK0SdGJRmYbgDQiS_3E_HIoK8F2WMzPX1Medzmx4ckJpzOUSc55fNC2_OvyZIxBRsaLDObOesz-83CPMAUfQ6uR054fisO-E5Q-bMAWObMJ=s680-w680-h510',
    items: ['Butter fried chicken', 'Tossed in smokey bbq sauce'],
  },
  {
    id: 2,
    name: 'Parrilla 2',
    price: 24,
    currency: '$',
    imageURL:'https://lh3.googleusercontent.com/gps-cs-s/AC9h4no0mOrZj4XBE6xXfD1qTfTfwcsBhCi0K-6s3bw_QxcRgxUwA1YJvUBiGqGXnMvzpb6lI_oa_mPqDQYshoO09b0flzn34EvVNEtfQJX9hLt9xuyLIMFwAY1yaMN2ZWFKt1uIT2I=s680-w680-h510',
    items: ['Parrilla full', 'Tossed in smokey bbq sauce'],
  },
];

const mockData: Restaurent[] = [
  {
    id: '0',
    name: 'Alitas',
    rating: 4.5,
    cuisines: mockAlitas,
    image:
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr0Fe7zEFYuRFDGWZPkZPJo7M6AsUGqx8iZH7JV4xtVfvR6CfrBOch8dIPODr5KnyYFhAzh1ejkQZUZLkym4gJnt6ZdISfmn-XhCVSbmcRfKDrSHWSH5GGjIr_T0gbwLkA7Q-69iK15ll4=s680-w680-h510',
  },
  {
    id: '1',
    name: 'Imperio',
    rating: 4.3,
    cuisines: mockImperio,
    image:
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noDIfpwkULu7PQpIFLJt5gSbsr2ZcSZfrAm8YvvVIN2gDiF41rAQBMCmqBsFjvDR6ArfDzyGxjkHXLNtWCyYoIsYW7yTohANgt_t0PKRd98jsiDU3SlrMKNxau9teYK5MTYa3-dqJSlFho=s680-w680-h510',
  },

  {
    id: '2',
    name: 'All Grill',
    rating: 4.3,
    cuisines: mockAllGrill,
    image:
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nq73SD8v2ykcjbbcCj3dNzHBqhqzwG6E5i11VIqXD9OlnD5UEoUv7n7Z8FqHeP4E--3rGxwrBjFyeQ8rl_BC7QjrbmapjRWO-pVtPnN0b7ZPVTJTlGDMbt9x9Z35ExlBjLUKghG=s680-w680-h510',
  },

  {
    id: '3',
    name: 'BBQ Grill Parrilla',
    rating: 4.3,
    cuisines: mockGrillParrilla,
    image:
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrT4f5Cs6qzD19-IulhRul_X0IxiX8a6CGAIu3dbojiIUlDJsXr3TUt8pmV3rFKx5Blgb44RHdJD-KqTsXGb-_TJOLR3moUDpf5YM1CJJvgkvgmmnBXuH1DTQukAyE7LBgX4cs=s680-w680-h510',
  },
{
    id: '4',
    name: 'Corralitos Wings',
    rating: 4.3,
    cuisines: mockGrillParrilla,
    image:
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npTKASJ8h0i-fffWd8_aw9RxOFDseuYt2zxuaQm9seHTrYGCKgNGNuNzIat45mHbz6XOzXpeypNcb8h65OPOLCToOIunmPyCbQHXoJFG96WfThNT6dUMp7ayArhdXr30x4BKzA-OA=s680-w680-h510',
  },

];

const fetchProducts = async (): Promise<Restaurent[]> => {
  //implement fake api data
  return Promise.resolve(mockData);
};

export { fetchProducts };
