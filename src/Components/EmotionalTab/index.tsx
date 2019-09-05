import React from 'react';
import { FormControl, MenuItem, Select, Input, Button, } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';



const options = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
];


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


export default function EmotionalTab() {
    const [optionYellow, setOptionYellow] = React.useState<string[]>(['yellow']);
    const [optionRed, setOptionRed] = React.useState<string[]>(['red']);
    const [optionBlue, setOptionBlue] = React.useState<string[]>(['blue']);
    const [optionGreen, setOptionGreen] = React.useState<string[]>(['green']);

    const [correct, showCorrect] = React.useState(false)
    const [again, tryAgain] = React.useState(false)
    const [none, noneCorrect] = React.useState(false)

    const correctAnswers = '12AB';
    var allInput = optionYellow.toString() + optionRed.toString() + optionBlue.toString() + optionGreen.toString();



    function handleChangeYellow(event: React.ChangeEvent<{ value: unknown }>) {
        setOptionYellow(event.target.value as string[]);
    }
    function handleChangeRed(event: React.ChangeEvent<{ value: unknown }>) {
        setOptionRed(event.target.value as string[]);
    }
    function handleChangeBlue(event: React.ChangeEvent<{ value: unknown }>) {
        setOptionBlue(event.target.value as string[]);
    }
    function handleChangeGreen(event: React.ChangeEvent<{ value: unknown }>) {
        setOptionGreen(event.target.value as string[]);
    }

    const checkAnswers = () => {
        console.log(allInput);
        var splitAnswers = correctAnswers.split('');
        var i = 0;
        var countCorrect = 0;
        splitAnswers.forEach(e => {
            if (e === allInput[i]) {
                countCorrect++;

            }
            i++;
            if (countCorrect > 0 && countCorrect < 4) {
                tryAgain(true)
                noneCorrect(false)
            }

        })
        if (correctAnswers === allInput) {
            tryAgain(false)
            noneCorrect(false)
            showCorrect(true)
        }
        if (countCorrect === 0) {
            noneCorrect(true)
        }
    }


    return (
        <div>
            <FormControl>
                <InputLabel htmlFor="select-multiple">Yellow</InputLabel>
                <Select
                    displayEmpty
                    value={optionYellow}
                    onChange={handleChangeYellow}
                    input={<Input id="select-multiple-placeholder" />}
                    renderValue={selected => {
                        if ((selected as string).length === 0) {
                            return <em>______</em>;
                        }
                        return (selected as string);
                    }}
                    MenuProps={MenuProps}
                >
                    <MenuItem disabled value="">
                        <em>______</em>
                    </MenuItem>
                    {options.map(option => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="select-multiple">Red</InputLabel>
                <Select
                    displayEmpty
                    value={optionRed}
                    onChange={handleChangeRed}
                    input={<Input id="select-multiple-placeholder" />}
                    renderValue={selected => {
                        if ((selected as string).length === 0) {
                            return <em>______</em>;
                        }
                        return (selected as string);
                    }}
                    MenuProps={MenuProps}
                >
                    <MenuItem disabled value="">
                        <em>______</em>
                    </MenuItem>
                    {options.map(option => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="select-multiple">Blue</InputLabel>
                <Select
                    displayEmpty
                    value={optionBlue}
                    onChange={handleChangeBlue}
                    input={<Input id="select-multiple-placeholder" />}
                    renderValue={selected => {
                        if ((selected as string).length === 0) {
                            return <em>______</em>;
                        }
                        return (selected as string);
                    }}
                    MenuProps={MenuProps}
                >
                    <MenuItem disabled value="">
                        <em>______</em>
                    </MenuItem>
                    {options.map(option => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="select-multiple">Green</InputLabel>
                <Select
                    displayEmpty
                    value={optionGreen}
                    onChange={handleChangeGreen}
                    input={<Input id="select-multiple-placeholder" />}
                    renderValue={selected => {
                        if ((selected as string).length === 0) {
                            return <em>______</em>;
                        }
                        return (selected as string);
                    }}
                    MenuProps={MenuProps}
                >
                    <MenuItem disabled value="">
                        <em>______</em>
                    </MenuItem>
                    {options.map(option => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {!correct && (
            <Button onClick={checkAnswers} variant="contained" size='large' color="secondary" >
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