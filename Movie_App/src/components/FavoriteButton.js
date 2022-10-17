import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const FavoriteButton = () => {
  const [fav, setFav] = React.useState(false);

  return (
    <TouchableOpacity>
      <Icon
        name="heart"
        size={22}
        style={{ padding: 5 }}
        color={fav ? "#CF0A0A" : "black"}
        onPress={() => setFav(!fav)}
      />
    </TouchableOpacity>
  );
};

export default FavoriteButton;
