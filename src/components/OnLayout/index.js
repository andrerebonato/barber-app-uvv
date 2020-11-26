import React, { useState } from "react";
import { View } from "react-native";

const OnLayout = ({ children, style, ...props }) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const onLayout = (e) => {
        setDimensions(e.nativeEvent.layout);
    };

    let styles = {
        flex: 1,
    };

    return (
        <View {...props} onLayout={onLayout} style={[styles, style]}>
            {children(dimensions)}
        </View>
    );
};

export default OnLayout;