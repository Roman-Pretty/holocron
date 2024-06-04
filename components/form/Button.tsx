import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends TouchableOpacityProps {
    className?: string;
    textClassName?: string;
    disabledClassName?: string;
    title: string;
    onPress?: () => void;
    disabled?: boolean;
}

const Button = ({ className, textClassName, disabledClassName, title, onPress, disabled=false } : ButtonProps) => {

    if (disabled) {
        return (
            <View style={{flex: 1, padding: 0.5}}>
                <View className={twMerge(twMerge("bg-heading3 p-2 flex flex-row items-center justify-center min-h-[4vh]", className), disabledClassName)}>
                    <Text className={twMerge("text-md text-black text-center uppercase font-[Elektra]", textClassName)}>{title}</Text>
                </View>
            </View>
        );
    }

    return (
        <TouchableOpacity onPress={onPress} style={{flex: 1, padding: 0.5}}>
            <View className={twMerge(" bg-heading1 p-2 flex flex-row items-center justify-center min-h-[4vh]", className)}>
                <Text className={twMerge("text-md text-white text-center uppercase font-[Elektra]", textClassName)}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;