import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

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

const LabelledTextInput = ({ title, placeholder, setText, text, maxChar, iconName, multiLine = false}: TextInputProps) => {

    function handleTextChange(text: string) {
        if (maxChar && text.length > maxChar) {
            return
        }
        setText(text)
    }

    return (
        <>
            <Text className='text-slate-400 font-[Elektra]'>
                {title}
            </Text>
            <View className={`flex-row rounded-md justify-between p-2 mb-[1.5vh] mt-[1vh] w-full ${!multiLine ? 'h-[4.5vh] items-start' : 'h-[14vh] items-end'} border-2 border-slate-700 bg-slate-900`}>
            <TextInput
            className='w-[75%] text-white h-full'
            placeholderTextColor={'#94a3b8'}
                onChangeText={handleTextChange}
                value={text}
                placeholder={placeholder}
                multiline={multiLine}
            />
            {maxChar && <Text className='text-slate-200 font-semibold pt-0.5'>
                {text.length}/{maxChar}
            </Text>}
            <Ionicons name={iconName as any} size={22} color="#fff" />
            </View>
            
        </>
    )
}

export default LabelledTextInput