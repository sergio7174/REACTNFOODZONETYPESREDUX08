import { ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { useAppDispatch, useAppSelector } from '../store/store';
import { RestaurentCard } from '../screens/restaurent-card';
import { CusinieCard } from '../components/cusinie-card';
import { cartSlice } from '../store/slices/cart-slice';
import { Cuisine, Restaurent } from '../model/interfaces';
import Animated from 'react-native-reanimated';

interface ItemDetailsViewProps {}

const ItemDetailsViewContainer = (props: ItemDetailsViewProps): JSX.Element => {
  const selectedRestaurent = useAppSelector(
    state => state.itemDetails.selectedHotel,
  );

  const currentCartRestaurentId = useAppSelector(
    state => state.cart.currentResturentID,
  );
  const dispatch = useAppDispatch();
  const cartMap = useAppSelector(state => state.cart.itemMap);

  const getCurrentCartItemCount = (cuisineID: number) => {
    return currentCartRestaurentId == selectedRestaurent?.id
      ? cartMap[cuisineID]
      : 0;
  };

  const onChangeCartCount =
    (cuisine: Cuisine, restaurent: Restaurent) => (count: number) => {
      if (currentCartRestaurentId === null) {
        dispatch(cartSlice.actions.updateCurrentResturentId(restaurent.id));
        dispatch(cartSlice.actions.updateCount({ id: cuisine.id, count }));
      } else {
        //Handle add item from different restaurent
        if (currentCartRestaurentId === restaurent.id) {
          dispatch(cartSlice.actions.updateCount({ id: cuisine.id, count }));
        } else {
          dispatch(cartSlice.actions.clearCart());
          dispatch(cartSlice.actions.updateCurrentResturentId(restaurent.id));
          dispatch(cartSlice.actions.updateCount({ id: cuisine.id, count }));
        }
      }
      dispatch(cartSlice.actions.updateCartItemCount());
    };

  return (
    <ScrollView>
      <View>
        {selectedRestaurent && (
          <Animated.View sharedTransitionTag={selectedRestaurent.id}>
            <RestaurentCard product={selectedRestaurent} />
          </Animated.View>
        )}
        <View style={styles.menuContainer}>
          <Text>~ MENU ~</Text>
        </View>
        {selectedRestaurent?.cuisines &&
          selectedRestaurent.cuisines.map(cuisine => {
            return (
              <CusinieCard
                key={cuisine.id}
                cuisine={cuisine}
                itemCount={getCurrentCartItemCount(cuisine.id)}
                onChangeCount={(count: number) =>
                  onChangeCartCount(cuisine, selectedRestaurent)(count)
                }
              />
            );
          })}
      </View>
    </ScrollView>
  );
};

type ItemDetailsViewStyle = {
  menuContainer: ViewStyle;
};

const styles = StyleSheet.create<ItemDetailsViewStyle>({
  menuContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export { ItemDetailsViewContainer };
