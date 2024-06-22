import React from 'react';
import { Text, Pressable, PressableProps, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends PressableProps {
    cName?: string;
    textClassName?: string;
    disabledClassName?: string;
    title: string;
    onPress?: () => void;
    disabled?: boolean;
}

const Button = ({ cName, textClassName, disabledClassName, title, onPress, disabled = false }: ButtonProps) => {
    if (disabled) {
        return (
            <View style={{ flex: 1, padding: 0.5 }}>
                <View className={twMerge("bg-heading3 p-2 flex flex-row items-center justify-center min-h-[4vh]", cName, disabledClassName)}>
                    <Text className={twMerge("text-md text-black text-center uppercase font-[Elektra]", textClassName)}>{title}</Text>
                </View>
            </View>
        );
    }

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                { flex: 1, padding: 0.5, opacity: pressed ? 0.5 : 1 },
            ]}
        >
            <View className={twMerge("bg-heading1 p-2 flex flex-row items-center justify-center min-h-[4vh]", cName)}>
                <Text className={twMerge("text-md text-white text-center uppercase font-[Elektra]", textClassName)}>{title}</Text>
            </View>
        </Pressable>
    );
};

export default Button;
