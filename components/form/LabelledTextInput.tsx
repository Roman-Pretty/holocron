import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import TriangleCorner from '../shapes/TriangleCorner';
import {Colors} from '@/constants/Colors';

interface TextInputProps {

    /** Title that will be displayed above the text box.  */
    title: string;
    /** Placeholder text that will be displayed in the text box. */
    setText: (text: string) => void;
    /** The text that will be displayed in the text box. */
    text: string;
    /** The maximum number of characters that can be entered in the text box. */
    placeholder?: string;
    /** The maximum number of characters that can be entered in the text box. */
    maxChar?: number;
    /** The name of the icon that will be displayed on the right of the text box. */
    iconName: string;
    /** If the text box should be multiline. */
    multiLine?: boolean;
}

const LabelledTextInput = ({ title, placeholder, setText, text, maxChar, iconName, multiLine = false }: TextInputProps) => {

    function handleTextChange(text: string) {
        if (maxChar && text.length > maxChar) {
            return
        }
        setText(text)
    }

    return (
        <>
            <View className='flex-row justify-start'>
                <View className='bg-heading3 w-[40%] pl-2 pt-2'>
                    <Text className='text-white font-[Elektra]'>
                        {title}
                    </Text>
                </View>
                <TriangleCorner style={{
                    transform: [{ rotate: "-90deg"}],
                    borderTopWidth: '24px', borderRightWidth: '24px', borderTopColor: Colors.global.heading3,
                }} />
            </View>
            <View className={`flex-row justify-between p-2 mb-[1.5vh] w-full ${!multiLine ? 'h-[4.5vh] items-start' : 'h-[14vh] items-end'} border-2 border-heading3 bg-white`}>
                <TextInput
                    className='w-[75%] text-black h-full'
                    placeholderTextColor={'#000'}
                    onChangeText={handleTextChange}
                    value={text}
                    placeholder={placeholder}
                    multiline={multiLine}
                />
                {maxChar && <Text className='text-black font-semibold pt-0.5'>
                    {text.length}/{maxChar}
                </Text>}
                <Ionicons name={iconName as any} size={22} color="#000" />
            </View>

        </>
    )
}

export default LabelledTextInput