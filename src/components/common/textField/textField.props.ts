export interface TextFieldProps {
    label?: string;
    placeholder: string;
    type?: string;
    value: string;
    name: string;
    disabled?: boolean;
    error?: string;
    id?: string;
    onChange: (value: string) => void;
}
