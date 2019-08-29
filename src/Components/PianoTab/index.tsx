import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


interface State {
    input: string;
}


export default function PianoTab() {

    const [values1, setValues1] = React.useState<State>({ input: '' })
    const [values2, setValues2] = React.useState<State>({ input: '' })
    const [values3, setValues3] = React.useState<State>({ input: '' })
    const [values4, setValues4] = React.useState<State>({ input: '' })
    const [values5, setValues5] = React.useState<State>({ input: '' })
    const [values6, setValues6] = React.useState<State>({ input: '' })
    const [values7, setValues7] = React.useState<State>({ input: '' })

    const handleChange1 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues1({ ...values1, [input]: event.target.value });
    };
    const handleChange2 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues2({ ...values2, [input]: event.target.value });
    };
    const handleChange3 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues3({ ...values3, [input]: event.target.value });
    };
    const handleChange4 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues4({ ...values4, [input]: event.target.value });
    };
    const handleChange5 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues5({ ...values5, [input]: event.target.value });
    };
    const handleChange6 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues6({ ...values6, [input]: event.target.value });
    };
    const handleChange7 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues7({ ...values7, [input]: event.target.value });
    };

    return (
        <div>
            <TextField
                id="filled-name"
                label="#1"
                placeholder="Type here"
                value={values1.input}
                onChange={handleChange1('input')}
                margin="normal"
                variant="filled"
            />

            <TextField
                id="filled-name"
                label="#2"
                placeholder="Type here"
                value={values2.input}
                onChange={handleChange2('input')}
                margin="normal"
                variant="filled"
            />

            <TextField
                id="filled-name"
                label="#3"
                placeholder="Type here"
                value={values3.input}
                onChange={handleChange3('input')}
                margin="normal"
                variant="filled"
            />

            <TextField
                id="filled-name"
                label="#4"
                placeholder="Type here"
                value={values4.input}
                onChange={handleChange4('input')}
                margin="normal"
                variant="filled"
            />

            <TextField
                id="filled-name"
                label="#5"
                placeholder="Type here"
                value={values5.input}
                onChange={handleChange5('input')}
                margin="normal"
                variant="filled"
            />

            <TextField
                id="filled-name"
                label="#6"
                placeholder="Type here"
                value={values6.input}
                onChange={handleChange6('input')}
                margin="normal"
                variant="filled"
            />

            <TextField
                id="filled-name"
                label="#7"
                placeholder="Type here"
                value={values7.input}
                onChange={handleChange7('input')}
                margin="normal"
                variant="filled"
            />

            <Button variant="contained" size='large' color="secondary" >
                SUBMIT
            </Button>
        </div>
    );
}