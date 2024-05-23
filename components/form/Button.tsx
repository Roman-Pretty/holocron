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
                <View className={twMerge(twMerge("bg-slate-800 p-2 rounded-full flex flex-row items-center justify-center min-h-[4vh]", className), disabledClassName)}>
                    <Text className={twMerge("text-md text-slate-600 text-center uppercase font-[Elektra]", textClassName)}>{title}</Text>
                </View>
            </View>
        );
    }

    return (
        <TouchableOpacity onPress={onPress} style={{flex: 1, padding: 0.5}}>
            <View className={twMerge("border-slate-700 bg-slate-800 border-2 p-2 rounded-full flex flex-row items-center justify-center min-h-[4vh]", className)}>
                <Text className={twMerge("text-md text-slate-100 text-center uppercase font-[Elektra]", textClassName)}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Button;