import reducer from './reducer';

import {
  setRegions,
  setCategories,
  setRestaurants,
  setRestaurant,
  changeLoginField,
  selectRegion,
  selectCategory,
  setAccessToken,
  changeReviewField,
} from './actions';

describe('reducer', () => {
  context('when previous state is undefined', () => {
    const initialState = {
      regions: [],
      categories: [],
      restaurants: [],
      restaurant: null,
      selectedRegion: null,
      selectedCategory: null,
      loginField: {
        email: '',
        password: '',
      },
      accessToken: '',
      reviewField: {
        score: 0,
        description: '',
      },
    };

    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    });
  });

  describe('setRegions', () => {
    it('changes regions', () => {
      const initialState = {
        regions: [],
      };

      const regions = [
        { id: 1, name: '서울' },
      ];

      const state = reducer(initialState, setRegions(regions));

      expect(state.regions).toHaveLength(1);
    });
  });

  describe('setCategories', () => {
    it('changes categories', () => {
      const initialState = {
        categories: [],
      };

      const categories = [
        { id: 1, name: '한식' },
      ];

      const state = reducer(initialState, setCategories(categories));

      expect(state.categories).toHaveLength(1);
    });
  });

  describe('setRestaurants', () => {
    it('changes restaurants', () => {
      const initialState = {
        restaurants: [],
      };

      const restaurants = [
        { id: 1, name: '마법사주방' },
      ];

      const state = reducer(initialState, setRestaurants(restaurants));

      expect(state.restaurants).toHaveLength(1);
    });
  });

  describe('setRestaurant', () => {
    it('changes restaurant', () => {
      const initialState = {
        restaurant: null,
      };

      const restaurant = { id: 1, name: '마법사주방' };

      const state = reducer(initialState, setRestaurant(restaurant));

      expect(state.restaurant.id).toBe(1);
      expect(state.restaurant.name).toBe('마법사주방');
    });
  });

  describe('selectRegion', () => {
    it('changes selected region', () => {
      const initialState = {
        regions: [
          { id: 1, name: '서울' },
        ],
        selectedRegion: null,
      };

      const state = reducer(initialState, selectRegion(1));

      expect(state.selectedRegion).toEqual({
        id: 1,
        name: '서울',
      });
    });
  });

  describe('selectCategory', () => {
    it('changes selected category', () => {
      const initialState = {
        categories: [
          { id: 1, name: '한식' },
        ],
        selectedCategory: null,
      };

      const state = reducer(initialState, selectCategory(1));

      expect(state.selectedCategory).toEqual({
        id: 1,
        name: '한식',
      });
    });
  });

  describe('changeLoginField', () => {
    it('changes email loginField', () => {
      const value = 'tester@example.com';
      const initialState = {
        loginField: {
          email: '',
          password: '',
        },
      };

      const { loginField: { email } } = reducer(
        initialState,
        changeLoginField({ name: 'email', value }),
      );

      expect(email).toEqual(value);
    });

    it('changes password loginField', () => {
      const value = 'test';
      const initialState = {
        loginField: {
          email: '',
          password: '',
        },
      };

      const { loginField: { password } } = reducer(
        initialState,
        changeLoginField({ name: 'password', value }),
      );

      expect(password).toEqual(value);
    });
  });

  describe('setAccessToken', () => {
    it('changes access token', () => {
      const initialState = {
        accessToken: '',
      };

      const state = reducer(initialState, setAccessToken('ACCESSTOKEN'));

      expect(state.accessToken).toEqual('ACCESSTOKEN');
    });
  });

  describe('changeReviewField', () => {
    it('changes score review field', () => {
      const value = 10;
      const initialState = {
        reviewField: {
          score: null,
          description: '',
        },
      };

      const { reviewField: { score } } = reducer(
        initialState,
        changeReviewField({ name: 'score', value }),
      );

      expect(score).toEqual(value);
    });

    it('changes description review field', () => {
      const value = 'test';
      const initialState = {
        reviewField: {
          score: null,
          description: '',
        },
      };

      const { reviewField: { description } } = reducer(
        initialState,
        changeReviewField({ name: 'description', value }),
      );

      expect(description).toEqual(value);
    });
  });
});