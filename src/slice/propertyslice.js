import { createSlice } from '@reduxjs/toolkit';

const initialProperties = [
  {
    id: 1,
    image: 'https://media.salecore.com/salesaspects/shared/GlobalImageLibrary/Responsive/ElegantSeller/real-estate-home-exterior-7-1760-1000.jpg',
    address: '123 Main St, Springfield, IL',
    price: '$500,000',
    description: 'A beautiful family home with spacious rooms and a lovely garden.',
    specialOffers: '10% off for first-time buyers!'
  },
  {
    id: 2,
    image: 'https://uploads-cf.cdn.placester.net/images%2F55c10510b1c93c3e2300000e%2F224060035%2F224060035_1.jpg?d',
    address: '456 Oak St, Metropolis, IL',
    price: '$300,000',
    description: 'Modern apartment in the heart of the city with stunning views.',
    specialOffers: '5% discount on cash payment!'
  },
  {
    id: 3,
    image: 'https://i.ibb.co/CMF2Lv5/Real-Estate-7.jpg',
    address: '789 Pine St, Gotham, IL',
    price: '$750,000',
    description: 'Luxury condo with all amenities and a great neighborhood.',
    specialOffers: 'Free home insurance for one year!'
  },
];

const propertySlice = createSlice({
  name: 'properties',
  initialState: initialProperties,
  reducers: {
    addProperty: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addProperty } = propertySlice.actions;
export default propertySlice.reducer;
