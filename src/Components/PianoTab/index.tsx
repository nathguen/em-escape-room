import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';


interface State {
    input: string;
}


export default function PianoTab() {

    const [value1, setValue1] = React.useState<State>({ input: '' })
    const [value2, setValue2] = React.useState<State>({ input: '' })
    const [value3, setValue3] = React.useState<State>({ input: '' })
    const [value4, setValue4] = React.useState<State>({ input: '' })
    const [value5, setValue5] = React.useState<State>({ input: '' })
    const [value6, setValue6] = React.useState<State>({ input: '' })
    const [value7, setValue7] = React.useState<State>({ input: '' })

    const [correct, showCorrect] = React.useState(false)
    const [again, tryAgain] = React.useState(false)
    const [none, noneCorrect] = React.useState(false)


    const handleChange1 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue1({ ...value1, [input]: event.target.value.toUpperCase() });
    };
    const handleChange2 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue2({ ...value2, [input]: event.target.value.toUpperCase() });
    };
    const handleChange3 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue3({ ...value3, [input]: event.target.value.toUpperCase() });
    };
    const handleChange4 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue4({ ...value4, [input]: event.target.value.toUpperCase() });
    };
    const handleChange5 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue5({ ...value5, [input]: event.target.value.toUpperCase() });
    };
    const handleChange6 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue6({ ...value6, [input]: event.target.value.toUpperCase() });
    };
    const handleChange7 = (input: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue7({ ...value7, [input]: event.target.value.toUpperCase() });
    };

    const checkAnswers = () => {
        if(value1.input === 'G' || value2.input === 'A' || value3.input === 'E' || value4.input === 'D' || value5.input === 'F' || value6.input === 'B' || value7.input === 'C'){
            tryAgain(true)
            noneCorrect(false)
        }
        if(value1.input === 'G' && value2.input === 'A' && value3.input === 'E' && value4.input === 'D' && value5.input === 'F' && value6.input === 'B' && value7.input === 'C'){
            tryAgain(false)
            noneCorrect(false)
            showCorrect(true)
        }
        else{
            noneCorrect(true)
        }


    }

    return (
        <div>
            <TextField
                id="filled-name"
                label="#1"
                placeholder="Type here"
                value={value1.input}
                onChange={handleChange1('input')}
                margin="normal"
                variant="filled"
            />

            <TextField
                id="filled-name"
                label="#2"
                placeholder="Type here"
                value={value2.input}
                onChange={handleChange2('input')}
                margin="normal"
                variant="filled"
            />

            <TextField
                id="filled-name"
                label="#3"
                placeholder="Type here"
                value={value3.input}
                onChange={handleChange3('input')}
                margin="normal"
                variant="filled"
            />

            <TextField
                id="filled-name"
                label="#4"
                placeholder="Type here"
                value={value4.input}
                onChange={handleChange4('input')}
                margin="normal"
                variant="filled"
            />

            <TextField
                id="filled-name"
                label="#5"
                placeholder="Type here"
                value={value5.input}
                onChange={handleChange5('input')}
                margin="normal"
                variant="filled"
            />

            <TextField
                id="filled-name"
                label="#6"
                placeholder="Type here"
                value={value6.input}
                onChange={handleChange6('input')}
                margin="normal"
                variant="filled"
            />

            <TextField
                id="filled-name"
                label="#7"
                placeholder="Type here"
                value={value7.input}
                onChange={handleChange7('input')}
                margin="normal"
                variant="filled"
            />
            
            {!correct && (
            <Button onClick={checkAnswers}  variant="contained" size='large' color="secondary" >
                SUBMIT
            </Button>
            )}

            {again && (
                <p>Some of your answers were right! Just gotta fix a few.</p>
            )}

            {none && (
                <p>Sorry, none of those are right. Please try again</p>
            )}
            
            {correct && (
                <div>
                    
                    <h1>CORRECT!</h1>
                    <p>You may now open the _____________ to receive one of the words for the final clue.</p>
                </div>
            )}
        </div>
    );
}